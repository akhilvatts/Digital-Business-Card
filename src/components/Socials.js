/*
    THIS FILE WAS DEVELOPED BY AKHIL SHARMA
    © 2023 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS AKHIL SHARMA
    https://github.com/akhilvatts
*/

import React from 'react';

export default function Socials() {
    return (
        <div className='socials'>
            <div className='socials-container'>
                <a className="social" href="https://www.linkedin.com/in/akhil-vatts-sharma/" target="_blank" rel="noreferrer">
                    <i class="social-logo fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a className='social' href="https://topmate.io/akhilsharma" target="_blank" rel="noreferrer">
                    <i class="social-logo fa-solid fa-screen-users" aria-hidden="true"></i>
                </a>
                <a className='social' href="https://twitter.com/akhilsharma_" target="_blank" rel="noreferrer">
                    <i class="social-logo fa fa-twitter-square" aria-hidden="true"></i>
                </a>
                <a className='social' href="https://instagram.com/akhil_vatts" target="_blank" rel="noreferrer">
                    <i class="social-logo fa fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}