import * as React from "react";
import { DefaultHelmet } from "../component/DefaultHelmet";
import { Navbar } from "../component/Navbar";

export default function IndexPage () {
  return (<>
    <DefaultHelmet />
    <div id="overflowFix">
      {/* <Navbar /> */}
        <main role='main'>
            <div class="topFixMain"></div>
            <div class="sectionedMain" id="landing">
                <h1>Hi, I'm JJ!</h1>
                <h2 class="tertiary-header subBody">
                    A User-Focused Designer/Developer.
                </h2>
                <p class='secondary-subtitle-text'><em>Currently working as a web developer at Geotab.</em></p>
                <div class="tags scroller">scroll down<br /><i class="fal fa-arrow-down"></i></div>
            </div>
            <div>
                <section class='sectionPadding'>
                    <div class="projectSection reg homeSection">
                        <div class="leftBox">
                            <h2><a class="textLink tab" href="/zenden"><span class="tabContent">Creating a
                                        “ready to develop” interior organization mobile app.</span></a></h2>
                            <p class="tags">User Research, Ideation, Mockups, UI Design</p>
                            <div class="paragraphBox">
                                <p>Most people struggle with creating their idealized living spaces. Often it's a
                                    struggle to know where to start when it comes to organization. ZenDen uses
                                    artificial intelligence (AI) to help you sort, organize, and rank objects. </p>
                            </div>
                            <a class="inlineB tab buttonStyle filled longButton" href="/zenden"> <span
                                    class="tabContent">Read
                                    more about ZenDen&nbsp;<i class="far fa-arrow-right"></i></span> </a>
                        </div>
                        <div class="rightBox">
                            <a href="/zenden" class="boxLink">
                                <img class="projectImage" src="images/zenden-2.png" alt="" loading='lazy' />
                            </a>
                        </div>
                    </div>
                </section>
                <section class='sectionPadding'>
                    <div class="projectSection reg homeSection">
                        <div class="leftBox">
                            <h2><a class="textLink tab" href="/five"><span class="tabContent">Helping
                                        designers to better understand the core web-code workflow.</span></a>
                            </h2>
                            <p class="tags">Coding, UI, Mentorship, Accessibility</p>
                            <div class="paragraphBox">
                                <p>The design field is expanding as more people interact with the web and smart mobile
                                    devices. We are moving away from physical media and graphic design.
                                    &lt;FIVE&gt;&nbsp;aim to teach people
                                    the basic web code pipeline.
                                </p>
                            </div>
                            <a class="inlineB tab buttonStyle filled longButton" href="/five"> <span
                                    class="tabContent">Read
                                    more about &lt;FIVE&gt;&nbsp;<i class="far fa-arrow-right"></i></span> </a>
                        </div>
                        <div class="rightBox">
                            <a href="/five" class="boxLink">
                                <img class="projectImage" src="images/five-1.png" alt="" loading='lazy' />
                            </a>
                        </div>
                    </div>
                </section>
                <section class='sectionPadding'>
                    <div class="projectSection reg homeSection">
                        <div class="leftBox">
                            <h2><a class="textLink tab" href="/endless-moji" ><span class="tabContent">Teaching
                                        Japanese to students through a gamified web-based activity.
                                    </span></a>
                            </h2>
                            <p class="tags">Html, Css, Javascript, Gamification, UI Design</p>
                            <div class="paragraphBox">
                                <p>Endless Moji is an educational game that teaches you the first five letters of the
                                    Japanese alphabet. This quick to learn activity can get anyone started with learning
                                    basic Japanese.
                                </p>
                            </div>
                            <a class="inlineB tab buttonStyle filled longButton" href="/endless-moji">
                                <span class="tabContent">Read more about Endless Moji&nbsp;<i
                                        class="far fa-arrow-right"></i></span> </a>
                        </div>
                        <div class="rightBox">
                            <a href="/endless-moji" class="boxLink">
                                <img class="projectImage" src="images/moji-1.png" alt="" loading='lazy' />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <div id="backgroundLetters" alt="interactiveElements">
                <svg version="1.1" id="j" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300">
                    <g id="J">
                        <g>
                            <path class="st0" d="M262,35.2l-0.2,119.9c0,9.3-6.2,17.4-17.8,17.4s-17.4-8.1-17.4-17.4" />
                            <path class="st0"
                                d="M192.3,155.1l0.1,11.8c0,21.9,23.5,39.2,53.1,39.2c29.5,0,53.5-16.9,53.5-38.8V6.1c0-2.8-2.3-5.1-5.1-5.1H262" />
                        </g>
                        <g id="linesJbottom">
                            <g>
                                <line class="st0" x1="192.3" y1="150" x2="192.3" y2="155.1" />
                                <line class="st0" x1="226.6" y1="155.1" x2="226.6" y2="150" />
                            </g>
                        </g>
                        <g id="linesJtop">
                            <g>
                                <polyline class="st0 growLets" points="256.9,35.3 259.8,35.3 262,35.3">
                                    <animate attributeName="points" fill="freeze" to="26.5,35.3 259.8,35.3 262,35.3" />
                                </polyline>
                            </g>
                            <g>
                                <polyline class="st0 growLets" points="262,1 259.8,1 256.9,1">
                                    <animate attributeName="points" fill="freeze" to="262,1 259.8,1 26.5,1" />
                                </polyline>
                            </g>
                        </g>
                        <g id="endJtop">
                            <path class="st0 growLets"
                                d="M256.9,1h-21.8c-2,0-3.7,1.6-3.7,3.7v26.9c0,2,1.6,3.7,3.7,3.7h21.8">
                                <animate attributeName="d" fill="freeze"
                                    to="M26.5,0.9H4.7C2.7,0.9,1,2.5,1,4.6v26.9c0,2,1.6,3.7,3.7,3.7h21.8" />
                            </path>
                        </g>
                        <g id="endJbottom">
                            <path class="st0" d="M226.6,150v-21.8c0-2-1.6-3.7-3.7-3.7H196c-2,0-3.7,1.6-3.7,3.7V150" />
                        </g>
                    </g>
                </svg>
                <svg version="1.1" id="u" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300">
                    <g id="U">
                        <g id="bottom">
                            <g>
                                <path class="st0 growLets"
                                    d="M264.8,31.6l-0.2,72c0,9.3-2.8,19.2-16.2,19.2s-16.3-9.9-16.3-19.2v-72">
                                    <animate attributeName="d" fill="freeze"
                                        to="M264.8,176.8l-0.2,72c0,9.3-2.8,19.2-16.2,19.2s-16.3-9.9-16.3-19.2v-72" />
                                </path>
                            </g>
                            <g>
                                <path class="st0 growLets"
                                    d="M197.8,31.6v82.9c0,21.9,16.4,39.3,51.5,39.3s49.8-16.9,49.8-38.8V31.6">
                                    <animate attributeName="d" fill="freeze"
                                        to="M197.8,176.8v82.9c0,21.9,16.4,39.3,51.5,39.3s49.8-16.9,49.8-38.8v-83.4" />
                                </path>
                            </g>
                        </g>
                        <g id="linesUleft">
                            <g>
                                <g>
                                    <polyline class="st0 growLets" points="197.8,26.5 197.8,28.4 197.8,31.6">
                                        <animate attributeName="points" fill="freeze"
                                            to="197.8,26.5 197.8,148 197.8,176.8" />
                                    </polyline>
                                </g>
                                <g>
                                    <polyline class="st0 growLets" points="232.1,31.6 232.1,29 232.1,26.5">
                                        <animate attributeName="points" fill="freeze"
                                            to="232.1,176.8 232.1,148.3 232.1,26.5" />
                                    </polyline>
                                </g>
                            </g>
                        </g>
                        <g id="linesUright">
                            <g>
                                <g>
                                    <polyline class="st0 growLets" points="264.8,26.5 264.8,29 264.8,31.6">
                                        <animate attributeName="points" fill="freeze"
                                            to="264.8,26.5 264.8,149.7 264.8,176.8" />
                                    </polyline>
                                </g>
                                <g>
                                    <polyline class="st0 growLets" points="299.1,31.6 299.1,29 299.1,26.5">
                                        <animate attributeName="points" fill="freeze"
                                            to="299.1,176.8 299.1,152 299.1,26.5" />
                                    </polyline>
                                </g>
                            </g>
                        </g>
                        <g id="endUright">
                            <path class="st0" d="M299.1,26.5V4.7c0-2-1.6-3.7-3.7-3.7h-26.9c-2,0-3.7,1.6-3.7,3.7v21.8" />
                        </g>
                        <g id="endUleft">
                            <path class="st0" d="M232.1,26.5V4.7c0-2-1.6-3.7-3.7-3.7h-26.9c-2,0-3.7,1.6-3.7,3.7v21.8" />
                        </g>
                    </g>
                </svg>
                <div id="stretchy"></div>
            </div>
        </main>
    </div>
  </>)
};