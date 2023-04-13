import React, { useRef } from "react";
import "./fileOperate.css";

function FileOperate(props) {
  const { handleDownload, loading, downloaded, handleUpload } = props;
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    // Reset file input element to trigger onChange event
    fileInputRef.current.value = null;
    fileInputRef.current.click();
  };
  return (
    <div className="file-operate">
      <div
        className="file-btn"
        onClick={() => {
          handleDownload();
        }}
      >
        {loading ? "加载中..." : downloaded ? "已下载" : "下载"}
      </div>
      <div className="file-btn" onClick={handleButtonClick}>
        上传
      </div>
      <input type="file" onChange={handleUpload} ref={fileInputRef} />
    </div>
  );
}

export default FileOperate;
