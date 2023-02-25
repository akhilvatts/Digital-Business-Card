/*
    THIS FILE WAS DEVELOPED BY AKHIL SHARMA
    © 2023 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS AKHIL SHARMA
    https://github.com/akhilvatts
*/

import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Socials from "./Socials"
import React from 'react';

export default function Card() {
    return (
        <div className="card">
            <Info />
			<About />
			<Interests />
			<Socials />
        </div>
    )
}