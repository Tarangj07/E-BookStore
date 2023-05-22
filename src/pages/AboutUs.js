import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

export default function AboutUs() {

    const Navigate = useNavigate();

    const toHomePage = () => {
        // Navigate("/");
        alert("The button has been clicked!");
    }

    return (
        <div>
            This is About Us Page!
            <br></br>

            {/* <button onClick={toHomePage}>Go to Home Page</button> */}
            <Button variant="contained" onClick={toHomePage}>Go to Home Page</Button>
        </div>
    )
}
