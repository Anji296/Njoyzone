import React, { useState } from "react";
import First from "./first";
import Login from "./login";
import Index from "./index";
import Create from "./create";
import View from "./view";

export default function App() {
    const [page, setPage] = useState("first");
    const [currentPostIndex, setCurrentPostIndex] = useState(null);

    return (
        <div>
            {page === "first" && <First setPage={setPage} />}
            {page === "login" && <Login setPage={setPage} />}
            {page === "index" && <Index setPage={setPage} setCurrentPostIndex={setCurrentPostIndex} />}
            {page === "create" && <Create setPage={setPage} />}
            {page === "view" && <View setPage={setPage} currentPostIndex={currentPostIndex} />}
        </div>
    );
}
