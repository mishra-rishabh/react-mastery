import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
    const { addPost } = useContext(PostList)

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";

        addPost(userId, postTitle, postBody, reactions, tags);
        alert("New Post Created!")
    }

    return (
        <>
            <h1 style={{margin: "30px 0 30px 10%"}}>Kuchh Post Daalo Bhai!</h1>
            <form className="create-post" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">User Id</label>
                    <input type="text" ref={userIdElement} className="form-control"
                    id="userId" placeholder="Apni user id daal do bhai" />
                </div>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post Title</label>
                    <input type="text" ref={postTitleElement} className="form-control"
                    id="title" placeholder="Dimag me kya chall rha hai?" />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Post Title</label>
                    <textarea rows={4} ref={postBodyElement} className="form-control"
                    id="body" placeholder="Dimag me jo bhi chall rha hai sabb likh do bhai..." />
                </div>

                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">Number of Reactions</label>
                    <input type="text" ref={reactionsElement} className="form-control"
                    id="reactions" placeholder="Kitno ne react kiya?" />
                </div>

                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Hashtags</label>
                    <input type="text" ref={tagsElement} className="form-control"
                    id="tags" placeholder="Hashtags daal do" />
                </div>
                
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        </>
    );
}

export default CreatePost;