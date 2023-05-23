import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Apple() {

    const [name, setName] = useState("tarang")
    const [email, setEmail] = useState("tarang@test.com")
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const Navigate = useNavigate();

    const toHomePage = () => {
        // alert("The button has been clicked!");
        console.log("Button clicked!");
        console.log("Name: ", name);
        console.log("Email: ", email);
        Navigate("/");
    }

    const handleClick = (event) => {
        console.log(123);
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <>
            <div style={{
                padding: 5,
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}>
                    <div onClick={handleClick} style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        columnGap: "5px",
                        cursor: "pointer",
                    }}>
                        <Avatar sx={{ bgcolor: "blue" }}>TJ</Avatar>
                    </div>
                </div>
                <div style={{
                    padding: 5,
                    display: "flex",
                    flexDirection: 'column',
                    rowGap: 8,
                }}>
                    {/* This is About Us Page! */}

                    <TextField variant="outlined" label="Name" type="email" value={email} placeholder='Name' onChange={(e) => setEmail(e.target.value)} />
                    <TextField variant="outlined" label="Email" type="text" value={name} placeholder='Email' onChange={(e) => setName(e.target.value)} />

                    {/* <button onClick={toHomePage}>Go to Home Page</button> */}
                    <Button variant="contained" onClick={toHomePage}>Submit</Button>
                </div>
            </div>


            <Popover
                open={open}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                anchorEl={anchorEl}
                onClose={handleClose}
            >
                <div style={{
                    padding: 5,
                }}>
                    <h5>Tarang Jangle</h5>
                    <Button variant="contained" onClick={toHomePage}>
                        <LogoutIcon />
                    </Button>
                </div>
            </Popover>
        </>
    )
}
