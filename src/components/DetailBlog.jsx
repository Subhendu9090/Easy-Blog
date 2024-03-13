import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateBlog } from "../store/todoSlice.js";

function DetailBlog() {
  const dispatch = useDispatch()
  const blog = useSelector((state) => state.selectedBlog);

  const [msg, setMsg] = useState(blog.text);
  const [editable, setEditable] = useState(false);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div key={blog.id}>
      <Link to={"/"}>
        <button className="w-20 p-2 my-2 bg-blue-700 rounded-xl hover:bg-blue-500">
          {" "}
          Back{" "}
        </button>
      </Link>
      <div className="flex justify-center ">
        <img src={blog.image} alt="image" />
      </div>
      <h2 className="m-2 bg-blue-400 text-centre rounded-2xl ">
        Heading:- <br></br>
        {blog.heading}
      </h2>
      <p className="p-3 m-2 text-black bg-slate-300 rounded-xl">
        Contain:-
        <br />
        <input
         
          readOnly={!editable}
          className={` ${editable ?"bg-white" : " bg-slate-300" }`}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
      </p>
      <button
        className="w-20 p-2 bg-green-500 rounded-xl hover:bg-green-400"
        onClick={() => {
          if (editable) {
            dispatch(updateBlog(blog.id,msg));
            setEditable(false)
          }else
          setEditable((prev)=>!prev)

        }}
      >
        {editable ? "📁 View" : "✏️ Edit"}
      </button>
    </div>
  );
}

export default DetailBlog;
