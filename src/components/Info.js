import React from 'react';
import akhilsharma from "../images/akhilsharma.jpeg"

export default function Info() {
    return (
        <div className="info">
            <img className="photo" src={akhilsharma} alt="Akhil Sharma" />
            <div className='info-container'>
                <h1 className="name">Akhil Sharma</h1>
                <h2 className="job">Senior DevOps Engineer</h2>
                <a className="website" href="https://akhilsharma.work/" target="_blank" rel="noreferrer">akhilsharma.work</a>
                <a className="button-email" href="mailto:akhil.sharma.vatts@gmail.com" target="_blank" rel="noreferrer">
                    <i class="email-logo fa fa-envelope" aria-hidden="true"></i>
                    Email
                </a>
            </div>

            <span className='change-color' onClick={changeColor}>
                <i class="brush-logo fa fa-paint-brush" aria-hidden="true"></i>
            </span>
        </div>
    )
}

/* @@@@@@@ CHANGING & SAVING COLOR BY CLICKING span.change-color @@@@@@@ */

if (localStorage.getItem("current_color") === null) {
    localStorage.setItem("current_color", "dark");
}

let saved = localStorage.getItem("current_color");
let root = document.querySelector(':root');

if (saved === "dark") { changeToDark() }
else if (saved === "light") { changeToLight(); }

function changeColor() {
    let current = localStorage.getItem("current_color");
    if (current === "dark") {
        changeToLight()
        localStorage.setItem("current_color", "light");
    }
    else if (current === "light") {
        changeToDark()
        localStorage.setItem("current_color", "dark");
    }
}

function changeToLight() {
    root.style.setProperty('--bg1', '#f5f5f5');
    root.style.setProperty('--bg2', '#D5D4D8');
    root.style.setProperty('--color4', '#2B283A');
    root.style.setProperty('--color5', '#4A4E74');
    root.style.setProperty('--color6', '#918E9B');
    root.style.setProperty('--color8', '#2B283A');
    root.style.setProperty('--color9', '#4A4E74');
    root.style.setProperty('--color10', '#d1d5db');
    root.style.setProperty('--color11', '#2B283A');
    root.style.setProperty('--changecolor', '#161619');
    root.style.setProperty('--brushcolor', '#f5f5f5');
}

function changeToDark() {
    root.style.setProperty('--bg1', '#1a1b21');
    root.style.setProperty('--bg2', '#161619');
    root.style.setProperty('--color4', '#f5f5f5');
    root.style.setProperty('--color5', '#dcdcdc');
    root.style.setProperty('--color6', '#918e9b');
    root.style.setProperty('--color8', '#ffffff');
    root.style.setProperty('--color9', '#f5f5f5');
    root.style.setProperty('--color10', '#f5f5f5');
    root.style.setProperty('--color11', '#ffffff');
    root.style.setProperty('--changecolor', '#f5f5f5');
    root.style.setProperty('--brushcolor', '#2b283a');
}