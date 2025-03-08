import React, { useState, useEffect } from "react";

export default function Index({ setPage, setCurrentPostIndex }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(JSON.parse(localStorage.getItem("blogs")) || []);
    }, []);

    return (
        <div style={{ padding: "20px", background: "#121212", color: "white" }}>
            <h2>Blog Posts</h2>
            <button style={{ padding: "10px", background: "orange", border: "none", color: "white", marginBottom: "10px" }} onClick={() => setPage("create")}>
                Create Post
            </button>
            <div>
                {posts.length === 0 ? <p>No posts available</p> : posts.map((post, index) => (
                    <div key={index} style={{ background: "#1e1e1e", padding: "15px", marginBottom: "10px", borderRadius: "8px" }}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <button style={{ background: "orange", color: "white", padding: "5px", border: "none" }} onClick={() => { setCurrentPostIndex(index); setPage("view"); }}>
                            View
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
