import "./App.css";
import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

function LabelsIdentification() {
  const [responseObj, setResponseObj] = useState([]);
  const [imgObjects, setImgObjects] = useState([]);
  const [uploadedImage, setUploadedImage] = useState({ preview: "", raw: "" });
  const [spinner, setSpinner] = useState("");

  function applyML(event) {
    setResponseObj([]);
    setImgObjects([]);
    setSpinner(LoadingSpinner);
    const {
      target: { files },
    } = event;
    const [file] = files || [];

    if (!file) {
      return;
    }
    setUploadedImage({
      preview: URL.createObjectURL(file),
      raw: file,
    });
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/png");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: file,
      redirect: 'follow'
    };

    fetch("https://015y57sxx2.execute-api.us-east-1.amazonaws.com/dev/upload", requestOptions)
      .then(response => response.text())
      .then(result => setResponseObj(result))
      .catch(error => console.log('error', error));
  }

  return (
    <div className="Text">
      <div className="Page-body">
        <h1>Leaf Disease Identification</h1>
        <input type="file" onChange={applyML}></input>
        <hr />
        {responseObj.length === 0 ? spinner : <></>}
        
        <div className="Labels-Identification">

          <div className="Label-values">
            {
            responseObj
            }
          </div>
        </div>
        <div className="uploadedImage">
          {uploadedImage.preview ? (
            <img src={uploadedImage.preview} alt="dummy" />
          ) : (
            <>
              Click an image using your phone, upload or use from{" "}
              <a
                href="https://s3-us-west-2.amazonaws.com/bucket.aws/"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                sample images
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LabelsIdentification;
