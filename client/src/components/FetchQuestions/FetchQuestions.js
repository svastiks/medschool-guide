import React, { useState, useEffect } from 'react'
import axios from 'axios'


const FetchQuestions = () => {

    const[questions, setQuestions] = useState([])
    const[loading, setLaoding] = useState(true)

    useEffect(() => {
        const fetchingQuestions = async () => {
            try{
                const response = await axios.get("http://localhost:8080/api/questions/all")
                setQuestions(response.data)
            } catch(error){
                console.error("Error getting all questions", error)
            } finally {
                setLaoding(false)
            }
        };
        fetchingQuestions();
    }, [])

    if(loading) {
        return <div>Questions are loading....</div>
    }

    return(
        <div>
            <h1>POSTED CONTENT</h1>
            {questions.map((question) => (
                <div>
                    {question.author}
                    {question.content}
                </div>
            ))}
        </div>
    )

}

export default FetchQuestions;