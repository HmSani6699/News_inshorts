import React, { useState } from "react";
import InputField from "../../component/InputField";
import FileUplod from "../../component/FileUplod";

const AddPost = () => {
  const [title, setTitle] = useState();
  const [file, setFile] = useState();
  const [description, setDescription] = useState();

  const handleAddPost = () => {
    const payload = {
      image: file,
      title,
      description,
    };
    console.log(payload);
  };

  return (
    <div>
      <div className="bg-[#eeeeee] mx-[50px] my-[50px] p-[30px] rounded-md">
        <h2 className="text-[25px] mb-[10px]">Add post </h2>

        {/* Input field */}
        <div>
          <div className="py-[20px]">
            <p className="text-[17px] font-[500] mb-2 text-[#202020]">Image</p>
            <FileUplod setFile={setFile} file={file} />
          </div>
          <InputField
            title="Title"
            value={title}
            setValue={setTitle}
            placeholder="Enter your news title"
          />

          <div className="py-[20px]">
            <p className="text-[17px] font-[500] mb-2 text-[#202020]">
              Description
            </p>
            <textarea
              className="w-full  border border-[#C5BFBF] rounded-[8px] outline-none py-[20px] px-[20px]"
              rows={6}
              name=""
              id=""
              placeholder="Enter your description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end mt-[20px]">
          <button
            onClick={handleAddPost}
            className="bg-[#364756] py-[12px] px-[40px]  text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
