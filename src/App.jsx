import "./App.css";
import AddBlog from "./components/AddBlog.jsx";
import Blogs from "./components/Blogs.jsx";
import DetailBlog from "./components/DetailBlog.jsx";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider  } from "react-router-dom";
import Layout from "./LayOut.jsx";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>} >
          <Route path="" element={<Blogs/>}/>
          <Route path="blog" element={<DetailBlog/>}/>
      </Route>
    )
  )

  return (
   <RouterProvider router={router}/>
  );
}

export default App;
