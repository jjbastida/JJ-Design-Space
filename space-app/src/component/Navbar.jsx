import React from "react";

export const Navbar = () => (
    <nav id="regularNav" class="regColor">
    <ul id="menuOptions" alt="">
        <li><a href="/" alt="Go to Homepage" title="Go to Homepage" class="tab menuUnderline"><span
                    class="tabContent"><img id="juanjose" src="images/juanjose.svg" alt="Go to Homepage" /> <span
                        class="cssHide">Home</span></span></a>
        </li>
        <li role='button' class="dropdown dropHover menuUnderline tab" tabindex="0" aria-label="Open works dropdown">
            <span class="tabContent">works <i class="fas fa-caret-down"></i></span>
            <ul>
                <li><a title="View this project." class="tab menuDropdownItem" href="/zenden"><span
                            class="tabContent">ZenDen</span></a></li>
                <li><a title="View this project." class="tab menuDropdownItem" href="/five"><span
                            class="tabContent">&lt;FIVE&gt;</span></a></li>
                <li><a class="tab menuDropdownItem" href="/endless-moji" title="View this project."><span
                            class="tabContent">Endless Moji</span></a></li>
            </ul>
        </li>
        <li id="about"><a href="/about" class="tab menuUnderline" title="Learn more about me."><span
                    class="tabContent">about
                    me</span></a></li>
        <li id="contactM"><a href="/contact" class="tab menuUnderline"
                title="Contact me for any questions."><span class="tabContent">contact</span></a>
        </li>
    </ul>
</nav>
);