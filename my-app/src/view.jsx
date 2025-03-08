import React, { useState, useEffect } from "react";

export default function View({ setPage, currentPostIndex }) {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);

    useEffect(() => {
        let storedPosts = JSON.parse(localStorage.getItem("blogs")) || [];
        setPosts(storedPosts);
        if (currentPostIndex !== null) setPost(storedPosts[currentPostIndex]);
    }, [currentPostIndex]);

    const likePost = () => {
        let updatedPosts = [...posts];
        updatedPosts[currentPostIndex].likes += 1;
        localStorage.setItem("blogs", JSON.stringify(updatedPosts));
        setPosts(updatedPosts);
        setPost(updatedPosts[currentPostIndex]);
    };

    const addComment = () => {
        let comment = prompt("Enter your comment:");
        if (comment) {
            let updatedPosts = [...posts];
            updatedPosts[currentPostIndex].comments.push(comment);
            localStorage.setItem("blogs", JSON.stringify(updatedPosts));
            setPosts(updatedPosts);
            setPost(updatedPosts[currentPostIndex]);
        }
    };

    return (
        <div style={{ padding: "20px", background: "#121212", color: "white" }}>
            {post ? (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <button style={{ background: "orange", color: "white", padding: "10px", border: "none" }} onClick={likePost}>
                        Like ({post.likes})
                    </button>
                    <button style={{ background: "orange", color: "white", padding: "10px", border: "none", marginLeft: "5px" }} onClick={addComment}>
                        Comment
                    </button>
                    <h3>Comments:</h3>
                    <ul>{post.comments.map((c, i) => <li key={i}>{c}</li>)}</ul>
                </>
            ) : (
                <p>Post not found</p>
            )}
            <button style={{ background: "orange", color: "white", padding: "10px", border: "none", marginTop: "10px" }} onClick={() => setPage("index")}>
                Back to Posts
            </button>
        </div>
    );
}
