import React, { useRef, useState } from "react";
import "./first.css";
import refresh from "./images/refresh.png";
import logo from "./images/logo.png";

const Fileupload = () => {
  const fileInputRef = useRef(null);
const [fileName, setFileName] = useState('');

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file.name);
    if(file){
        setFileName(file.name);
        // handleFileRead(file);
    }
  };


  const handleFileRead = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileName(e.target.result);
       uploadFile(file);
    };
    reader.readAsText(file);
  };

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    fetch('your-server-endpoint', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('File uploaded successfully:', data);
      })
      .catch((error) => {
        // console.error('Error uploading file:', error);
      });
  };

  return (
    <>
      <div class="app">
        <div className="spanner">
        <a href="/">
          <img src={refresh} alt="refresh" />
          </a>
        
        <h2 className="header">FastByte</h2></div>
        <div class="form-input">
            
          <img
            src={logo}
            onClick={handleImageClick}
            width="80"
            height="170"
            alt="Upload"
          />
          <img
            src={logo}
            onClick={handleImageClick}
            width="80"
            height="170"
            alt="Upload"
            type="file"
          name="file"
          />
          
        </div>
        <div>
        <input
          ref={fileInputRef}
          onChange={handleFileChange}
          className="uploadfile"
          type="file"
          name="file"
          style={{ display: "none" }}
        />
        {fileName && <p>Selected file: {fileName}</p>}
        {/* {fileContent && <pre>{fileContent}</pre>} */}
        </div>
        <div className="connect">
        <label> Press lightning bolts to select file</label>
          {/* <label for="file-input">Devices are connected</label> */}
        </div>
      </div>
    </>
  );
};

export default Fileupload;
