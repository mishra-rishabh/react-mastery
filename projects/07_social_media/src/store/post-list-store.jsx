/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {}
});

const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    
    if(action.type === "DELETE_POST") {
        newPostList = currentPostList.filter(post => post.id !== action.payload.postId)
    } else if(action.type === "ADD_POST") {
        newPostList = [action.payload, ...currentPostList];
    }

    return newPostList;
}

const PostListProvider = ({children}) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST", 
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags
            }
        });
    }

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId: postId
            }
        })
    }

    return (
        <PostList.Provider value={
            {
                postList: postList,
                addPost: addPost,
                deletePost: deletePost,
            }
        }>
            {children}
        </PostList.Provider>
    );
}

const DEFAULT_POST_LIST = [
    {
        id: "1",
        title: "POST",
        body: "asdfghjkl qwertyuiop zxcvbnm",
        reactions: 9,
        userId: "user-123",
        tags: ["abcd", "efgh"]
    },
    {
        id: "2",
        title: "POST_2",
        body: "abbe bhai ye lo farjiwada qwertyuiop zxcvbnm",
        reactions: 38,
        userId: "user-987",
        tags: ["farji", "bakaiti"]
    }
];

export default PostListProvider;