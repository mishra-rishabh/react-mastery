/* eslint-disable react-refresh/only-export-components */
// import { useContext, useRef } from "react";
// import { PostList } from "../store/post-list-store";
// import { useNavigate } from "react-router-dom";

import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
    // const { addPost } = useContext(PostList)
    // const navigate = useNavigate();

    // const userIdElement = useRef();
    // const postTitleElement = useRef();
    // const postBodyElement = useRef();
    // const reactionsElement = useRef();
    // const tagsElement = useRef();

    // const handleSubmit = (event) => {
        // event.preventDefault();

        // const userId = userIdElement.current.value;
        // const postTitle = postTitleElement.current.value;
        // const postBody = postBodyElement.current.value;
        // const reactions = reactionsElement.current.value;
        // const tags = tagsElement.current.value.split(" ");

        /* userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = ""; */
    // }

    return (
        <>
            <h1 style={{ margin: "30px 0 30px 10%" }}>Kuchh Post Daalo Bhai!</h1>
            <Form method="POST" className="create-post" /* onSubmit={handleSubmit} */>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">User Id</label>
                    <input type="text" name="userId" className="form-control"
                        id="userId" placeholder="Apni user id daal do bhai" />
                </div>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post Title</label>
                    <input type="text" name="title" className="form-control"
                        id="title" placeholder="Dimag me kya chall rha hai?" />
                </div>

                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Post Title</label>
                    <textarea rows={4} name="body" className="form-control"
                        id="body" placeholder="Dimag me jo bhi chall rha hai sabb likh do bhai..." />
                </div>

                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">Number of Reactions</label>
                    <input type="text" name="reactions" className="form-control"
                        id="reactions" placeholder="Kitno ne react kiya?" />
                </div>

                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Hashtags</label>
                    <input type="text" name='tags' className="form-control"
                        id="tags" placeholder="Hashtags daal do" />
                </div>

                <button type="submit" className="btn btn-primary">Post</button>
            </Form>
        </>
    );
}

export const createPostAction = async (data) => {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    postData.tags = postData.tags.split(" ");
    console.log(postData);
    
    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => console.log(post));

    alert("New Post Created!");

    // navigate("/");

    return redirect("/")
}

export default CreatePost;