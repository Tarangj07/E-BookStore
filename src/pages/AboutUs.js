import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AboutUs() {

    const Navigate = useNavigate();

    const toHomePage = () => {
        Navigate("/");
    }

    return (
        <div>
            This is About Us Page!
            <br></br>

            <button onClick={toHomePage}>Navigate to Home Page</button>
        </div>
    )
}
