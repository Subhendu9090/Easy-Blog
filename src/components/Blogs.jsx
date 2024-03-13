import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBlog , getBlog } from "../store/todoSlice";
import { Link } from "react-router-dom";

function Blogs() {
  const [localBlogs, setlocalBlogs] =useState([])
 const blogs =useSelector((state)=>state.blogs)
 const dispatch = useDispatch();
console.log(blogs);

 useEffect(()=>{
setlocalBlogs(blogs)
 },[blogs]);

useEffect(()=>{
const storedBlog= JSON.parse(localStorage.getItem("blogs"));
if (storedBlog && storedBlog.length) {
  setlocalBlogs(storedBlog);
}
},[]);

 useEffect(()=>{
  localStorage.setItem("blogs",JSON.stringify(localBlogs))
 },[localBlogs]);

 
  return (
    <div className="h-full">
      <h2> Blogs:</h2>
      <div className="grid grid-cols-1 gap-1 p-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
        {localBlogs.map((blog) => (
          <div key={blog.id} onClick={()=>dispatch(getBlog(blog.id))}>
            <div className=" hover:cursor-pointer" >
              <div
                className="flex flex-col items-center w-64 gap-1 px-4 py-2 mt-4 bg-gray-600 rounded-xl h-80"
              >
                <Link to={`/blog`}>
                {
                  <img
                    src={blog.image}
                    alt="Blog Image"
                    className="object-cover w-full h-56 rounded-md "
                  />
                }
                </Link>
                <div>
                  <div className="w-32 mx-2 font-bold text-black bg-blue-400">
                    {blog.heading}{" "}
                  </div>
                  <div className="w-36 hover:bg-blue-300">{blog.text && blog.text.length <30 ? blog.text :"click to see containt"} </div>
                </div>

                <button
                  className="px-1 font-extrabold bg-red-600 py-auto hover:bg-gray-500"
                  onClick={() => dispatch(removeBlog(blog.id))}
                >
                  {" "}
                  remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
