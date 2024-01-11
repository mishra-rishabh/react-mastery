/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListData);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                addInitialPosts(data.posts);
            });
    }, []);

    /* const handleGetPostsClick = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                addInitialPosts(data.posts);
            });
    } */

    return (
        <>
            {postList.length === 0 && <WelcomeMessage /* onGetPostsClick={handleGetPostsClick} */></WelcomeMessage>}
            {postList.map((post) => <Post key={post.id} post={post} />)}
        </>
    );
}

export default PostList;