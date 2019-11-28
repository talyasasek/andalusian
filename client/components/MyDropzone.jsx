import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

function MyDropzone(props) {
    const [tempUploadedFunction, setTempUploadedFunction] = useState("");

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result
                console.log(binaryStr)
                setTempUploadedFunction(binaryStr);
                props.writeFunction(binaryStr)
            }
            reader.readAsText(file)
        })

    }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})


    return (
        <div>
        <div id="dropz" {...getRootProps()}>
            <div id="drop1" className="dropzone">
            <input name="uploadedFunction" {...getInputProps()} />
            <p>Upload your Function</p>
            </div>
            <div className="dropzone" >
                <input name="uploadedKey" {...getInputProps()} />
                <p>Upload your Key File</p>
            </div>
        </div>
            <pre>
          <textarea id="codeHere" defaultValue={tempUploadedFunction} placeholder="<code here />" spellCheck="false" rows="25"></textarea>
        </pre>
        </div>
    )
}

export default MyDropzone;
