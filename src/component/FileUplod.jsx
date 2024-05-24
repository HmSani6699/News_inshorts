import React, { useRef } from "react";

const FileUplod = ({ setFile, file }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
      <div className="flex gap-[10px] items-center border border-[#C5BFBF] bg-white rounded-[8px]">
        <div
          onClick={handleButtonClick}
          className={`bg-[#364756] font-[500] px-[20px] py-[10px] w-[80px] text-white text-[14px] rounded-[8px] cursor-pointer`}
        >
          Upload
        </div>
        <div>{file?.name}</div>
      </div>

      <input
        className="hidden"
        id="Images"
        type="file"
        name="images"
        onChange={handleFileChange}
        ref={fileInputRef}
      />
    </div>
  );
};

export default FileUplod;
