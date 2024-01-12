/* eslint-disable react/prop-types */
import { createContext, useCallback, useReducer, /* useState, useEffect */ } from "react";

export const PostList = createContext({
    postList: [],
    // fetching: false,
    addPost: () => {},
    deletePost: () => {}
});

const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    
    if(action.type === "DELETE_POST") {
        newPostList = currentPostList.filter(post => post.id !== action.payload.postId)
    } else if(action.type === "ADD_POST") {
        newPostList = [action.payload, ...currentPostList];
    } else if(action.type === "ADD_INITIAL_POSTS") {
        newPostList = action.payload.posts;
    }

    return newPostList;
}

const PostListProvider = ({children}) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, []);
    // const [ fetching, setFetching ] = useState(false);

    const addPost = (post) => {
        dispatchPostList({
            type: "ADD_POST", 
            payload: post
        });
    }

    /* const addInitialPosts = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS", 
            payload: {
                posts: posts
            }
        });
    } */

    const deletePost = useCallback((postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId: postId
            }
        })
    }, [dispatchPostList]);

    /* useEffect(() => {
        setFetching(true);

        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://dummyjson.com/posts', {signal})
            .then(res => res.json())
            .then(data => {
                addInitialPosts(data.posts);
                setFetching(false);
            });

        return () => {
            // console.log("Cleaning up useEffect...");
            controller.abort();
        }
    }, []); */

    return (
        <PostList.Provider value={
            {
                postList: postList,
                // fetching: fetching,
                addPost: addPost,
                deletePost: deletePost,
            }
        }>
            {children}
        </PostList.Provider>
    );
}

export default PostListProvider;