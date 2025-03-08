import React, { useState } from "react";

export default function Create({ setPage }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleCreate = () => {
        if (title.trim() !== "" && content.trim() !== "") {
            let posts = JSON.parse(localStorage.getItem("blogs")) || [];
            posts.push({ title, content, likes: 0, comments: [] });
            localStorage.setItem("blogs", JSON.stringify(posts));
            setPage("index");
        } else {
            alert("Fill in all fields");
        }
    };

    return (
        <div style={{ padding: "20px", background: "#121212", color: "white" }}>
            <h2>Create Post</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
                style={{ padding: "10px", width: "100%", marginBottom: "10px" }} />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}
                style={{ padding: "10px", width: "100%", height: "100px", marginBottom: "10px" }}></textarea>
            <br />
            <button style={{ padding: "10px", background: "orange", border: "none", color: "white" }} onClick={handleCreate}>
                Publish
            </button>
        </div>
    );
}
