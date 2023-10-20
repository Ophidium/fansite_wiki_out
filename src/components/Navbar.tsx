import Link from "next/link"
import styles from "../styles/Navbar.module.css"
import Image from "next/image";
import { Divider, Typography } from '@mui/material';
import { useState, useEffect } from "react";

const loggingout = () => {
    let session_id = localStorage.getItem("session_id");
    localStorage.clear();
    localStorage.setItem("session_id", session_id);
};

// function LoadPage() {
//     return (<Typography>user {useLocalStorage("login_name", "name")}</Typography>)
// }

const Navbar = () => {

    return (

        <div >
            <div className={styles.logo}>
                <img src="" />
            </div>
            <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/catalogus">Catalogus</Link>
                <Link href="/info">Info</Link>
                <Link href="/login">Login</Link>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Link href="/register">register</Link>
                <Link href="/dashboard">dashboard</Link>

                <button onClick={loggingout}>test logout</button>

            </div>
            
        </div>

    );
}

export default Navbar;