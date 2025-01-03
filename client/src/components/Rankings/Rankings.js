import React, { useState, useEffect } from "react"
import axios from "axios"

const Rankings = () => {

    const [rankings, setRankings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRankings = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/rankings")
                setRankings(response.data)
            } catch (error) {
                console.error("Error getting rankings", error);
            } finally {
                setLoading(false)
            }
        };

        fetchRankings();
    }, []);

    if (loading) {
        return <div>Rankings....</div>
    }

    return (
        <div>
            <h1>Canadian Medical School Rankings</h1>
            <ul>
                {rankings.map((ranking) => (
                    <li key={ranking.id}>
                        <strong>University: {ranking.universityName} Rank: {ranking.rank} Minimum Gpa: {ranking.gpa} Required MCAT: {ranking.mcat}</strong>
                        <p>{ranking.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Rankings;
