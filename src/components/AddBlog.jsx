import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../store/todoSlice.js";

function AddBlog() {
  const [heading, setheading] = useState("");
  const [text, setText] = useState("");
  const [image , setImage] = useState(null);

  const dispatch = useDispatch();
  
  const handelfileChange=(e)=>{
    setImage(e.target.files[0])
  }

  const blogAdding = (e) => {
    e.preventDefault();
    if (image) {
      dispatch(addBlog({ text: text, status: false, heading: heading, image:URL.createObjectURL(image) }));
    }else{
      dispatch(addBlog({ text: text, status: false, heading: heading, image:null }));
    }
    setImage(null);
    setText("");
    setheading("");
    
  };
  return (
    <form
      onSubmit={blogAdding}
      className="flex flex-col items-center gap-6 my-8 "
    >
      <input
        type="text"
        className="flex w-1/2 ml-3 text-center duration-100 bg-gray-950 h-9 rounded-2xl focus:border-blue-500"
        placeholder="enter blog heading"
        value={heading}
        onChange={(e) => setheading(e.target.value)}
      ></input>

      <input
        type="text"
        className="flex w-full h-10 ml-3 text-center duration-100 bg-gray-950 rounded-2xl"
        placeholder="enter about blog"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>

      <input
        type="file"
        className="flex h-20 ml-3 text-center duration-100 bg-gray-900 rounded-md"
        accept="image/png, image/jpg, image/jpeg, image/gif"
        onChange={handelfileChange}
      ></input>
 
      <button
        className="w-1/6 p-3 duration-200 bg-blue-800 rounded-full hover:bg-blue-900"
        type="submit"
      >
        Add Blog
      </button>
    </form>
  );
}

export default AddBlog;
