import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    blogs: [{
        id: 1,
        text: "hello world",
        status: true,
        heading: "hello",
        image: "http://res.cloudinary.com/subhendu-spbp/image/upload/v1708248271/mne3qzkal1hqytht9bek.jpg"
    }],
    selectedBlog: null
}

export const todoSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            const { text, status, heading, image } = action.payload
            const blog = {
                id: nanoid(),
                text: text,
                status: status,
                heading: heading,
                image: image
            }
            state.blogs.push(blog)
        },
        removeBlog: (state, action) => {
            state.blogs = state.blogs.filter((blog) => blog.id !== action.payload)
        },
        updateBlog: (state, action) => {
            const {id , msg} = action.payload;

            state.blogs = state.blogs.map((blog) => blog.id === id? {...blog, text:msg }: blog);

        },
        getBlog: (state, action) => {
            const blogId = action.payload;
            state.selectedBlog = state.blogs.find((blog) => blog.id === blogId) || null
        },
    }
})

export const { addBlog, removeBlog, getBlog , updateBlog } = todoSlice.actions

export default todoSlice.reducer