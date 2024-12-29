import React, { useState } from "react"

const PostQuestions = () => {

    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!author || !content) {
            alert("Please fill out all fields before posting!")
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/questions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ author, content })
            });

            if (response.ok) {
                alert("Question posted! Look out for replies.")
                setAuthor("")
                setContent("")
            } else {
                alert("Failed to post the question. Please try again!")
            }
        }
        catch (error) {
            console.error("Error posting the question:", error)
            alert("An error occured. Please try again.")
        }
    }
    return (
        <div>
            <h2>Post a question</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="author">
                        Display Name:
                    </label>
                    <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter your name">
                    </input>
                </div>
                <div>
                    <label htmlFor="content">Your Question:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Enter your question"
                    ></textarea>
                </div>
                <button type="submit">Post Question</button>
            </form>
        </div>
    )
}

export default PostQuestions