import * as React from "react";
import { DefaultHelmet } from "../component/DefaultHelmet";
import { Navbar } from "../component/Navbar";

export default function Zenden () {
  return (<>
    <DefaultHelmet />
    <div id="overflowFix">
      {/* <Navbar /> */}
      <main class="sectioned mainer">
        <section class="flexSection">
            <div class="leftBox">
                <h1 class="inlineB PTitle">ZenDen</h1>
                <p class="tags">UX Research, Ideation, React, UI Design</p>
                <p class="topSpace intro">ZenDen provides you with ways to create a comfortable and clutter-free living
                    space. It gives you tools to personalize your living spaces and create optimized environments.</p>
            </div>
            <div class="rightBox imageFixedHeight"><a rel='noopener noreferrer' target="_blank"
                    href="https://www.figma.com/proto/45qUCOzpDTpb1xqNeOZQur/ZenDen?node-id=413%3A7&scaling=min-zoom&page-id=369%3A0&starting-point-node-id=413%3A7"
                    class="frameLink"></a> <img class="imgPreview" src="../images/zenden-2.png"
                    alt="Preview of final project." /></div>
        </section>
        <section class="flexSection fullBox sectionSpacing">
            <div class="three-col">
                <h2 class="fourth-header">Time Period</h2>
                <p class="topSpace noWidow">6 month thesis project (Intermittently ongoing)</p>
            </div>
            <div class="three-col">
                <h2 class="fourth-header">Contribution / Focus</h2>
                <p class="topSpace noWidow">User Research, Ideation, Mockups, UI Design</p>
            </div>
            <div class="three-col">
                <h2 class="fourth-header">Tools</h2>
                <ul class="topSpace lister">
                    <li>Research Probes</li>
                    <li>Secondary Research</li>
                    <li>Value Proposition Canvas</li>
                    <li>Personas</li>
                    <li>Figjam &amp; Figma</li>
                    <li>React JS</li>
                </ul>
            </div>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">From mess to success!</h2>
            <p>
                The AI powered organization solution - ZenDen - aims to solve a simple problem. Clutter. In one way or
                another, it is an issue that we are not taught to resolve. Clutter can take shape in our living spaces
                whenever and
                can become overwhelming.
            </p>
            <p><strong>ZenDen takes you through a series of guided mindful activities to solve your clutter. </strong>
            </p>
            <ul class="styled-list">
                <li>
                    <p>First, allowing you to appreciate the items in your space.</p>
                </li>
                <li>
                    <p>Then giving you the tools to organize your spaces.</p>
                </li>
                <li>
                    <p>Finally, helping you to discard or donate unwanted objects.</p>
                </li>
            </ul>
        </section>
        <section class="fullBox flexSection sectionSpacing">
            <div class="leftBox">
                <h2 class="fourth-header">How do we solve clutter?</h2>
                <p>My process for this solution began by clarifying the broad issue of clutter:</p>
                <p class="quote noWidow">I need to create a framework that allows North Americans aged 18-30 to maintain
                    comfortable living spaces while not creating excess waste!</p>
            </div>
            <div class="rightBox">
                <img loading='lazy' class="product-image" src="images/zenden-4.png" alt="" />
            </div>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">Digging deeper… And cleaning up afterwards.</h2>
            <p>Before diving further into the problem it was important to understand my own biases.</p>
            <ol class="styled-list">
                <li>
                    <p>That people would want to organize their living spaces. <strong>I recognized that I had a bias
                            towards cleanliness and organization</strong> (after using the KonMari method).</p>
                </li>
                <li>
                    <p>People don't organize often. <strong>In general, people would not be organizing every single day
                            or even once a week.</strong></p>
                </li>
                <li>
                    <p>There would be clutter to sort and organize. <strong>This solution hinges on clutter itself, so
                            if someone does not have any this solution will not help.</strong></p>
                </li>
            </ol>
            <p>These realizations broadened the scope of the solution. The solution would have to scale, be reusable,
                and adapt to a user's needs.</p>
        </section>
        <section class="fullBox flexSection sectionSpacing">
            <div class="leftBox">
                <h2 class="fourth-header">How do people approach clutter?</h2>
                <p>
                    To understand the solution better, I conducted user based primary research. The research aimed to
                    figure out how people organize their objects and spaces.<strong>I conducted interviews and used a
                        "Design Probe" (three separate worksheets) and here were the findings.</strong>
                </p>
                <ul class="styled-list">
                    <li>
                        <p>
                            I realized that organization was a very personal process. <strong>People needed to
                                feel
                                comfortable
                                and safe when re-arranging their spaces as a whole.</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            People felt relatively comfortable moving small things around or categorizing objects.
                            <strong>But there was a clear struggle when people had to discard objects. Or when objects
                                had a very deep emotional connection and purpose attached to their
                                location.</strong>
                        </p>
                    </li>
                    <li>
                        <p>
                            People tended to have very particular ways of organizing and categorizing items.
                            <strong>There was generally no clear-cut structure when it came to the organization
                                process.</strong>
                        </p>
                    </li>
                </ul>
                <p>
                    From these and a few more findings I created a Value Proposition Canvas to outline possible
                    solutions.
                    <strong>The value prop canvas helped to organize all of the loose ends into something
                        actionable.</strong>
                </p>
            </div>
            <div class="rightBox">
                <img loading='lazy' class="product-image" src="images/zenden-5.png" alt="" />
            </div>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">“The a-ha moment”</h2>
            <p>
                I realized to be successful I would have to deviate from the KonMari method. I realized that in her
                process of determining whether something "brings you joy" there is a bit of a fallacy. In that,
                <strong>not all objects in our lives bring us joy and add to our spaces. And they don't have
                    to!</strong> People are complex and unique, objects can have memories, emotion, or even trauma
                attached to them, but may still
                serve a purpose. There are things that we hate to have, but need in a space and vise-versa.
            </p>
            <p>I realized that my main goal was not to get people to clean or organize or even discard objects.</p>
            <p><strong class="highlight">I realized my my goal was to make people connect with themselves, their
                    objects, and their spaces! </strong></p>
            <p>
                I needed to find a way to have people look and feel what's in their space and make their own decisions.
            </p>
        </section>
        <section class="fullBox flexSection sectionSpacing">
            <div class="leftBox">
                <h2 class="fourth-header">The demo that didn’t get the memo...</h2>
                <p>
                    The first designed version of the ZenDen product was a web based application. ZenDen 1.0 had some
                    activities which served to teach users about clutter and organizing. The activities were not
                    tailored or delivered in
                    any enticing way. It was very much a static information webpage.
                </p>
                <p>
                    <strong>This prototype was made to meet the initial time and form constraints.</strong> There was
                    not much time to ideate on solutions and the final solution "could not be an app". Due to these
                    constraints, ZenDen
                    1.0 became a coded prototype which featured a demo of one of the possible 5 activities.
                </p>
                <p>
                    ZenDen 1.0 was React JS based to allow for quick prototyping and UI changes. I aimed to follow the
                    WCAG 2.0 standard of accessibility despite only being a demo. Due to time constraints, the demo was
                    never finished or
                    fully published.
                </p>
                <p class="inline-link">
                    <a rel="noopener noreferrer" target="_blank"
                        href="https://www.figma.com/proto/45qUCOzpDTpb1xqNeOZQur/ZenDen?node-id=400%3A175&scaling=min-zoom&page-id=396%3A167&starting-point-node-id=400%3A175">
                        Explore mockups of ZenDen 1.0.&nbsp;
                        <i class="far fa-arrow-right"></i>
                    </a>
                </p>
                <p><em>The ZenDen 1.0 prototype cannot be easily hosted so only the mockups are available at this
                        time.</em></p>
            </div>
            <div class="rightBox">
                <img loading='lazy' class="product-image" src="images/zenden-6.png" alt="" />
            </div>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">Let’s do it again, but better!</h2>
            <p>After the demo, I had time to regroup and rethink how the solution could be further improved. In a 1 week
                sprint, I found the following areas for growth:</p>
            <ul>
                <li>
                    <p>
                        I broadened the problem statement to make it more open to solutions:<br />
                        <strong>How do I encourage young adults to re-invigorate their spaces & valuables? And create
                            environments that feel comfortable, without creating excess waste?</strong>
                    </p>
                </li>
                <li>
                    <p>
                        <strong>I realized that it should be "quick to start" due to the limited time people may have to
                            organize.</strong>
                        The initial demo lacked this aspect and took a while to get going (and have value).
                    </p>
                </li>
                <li>
                    <p>I focused the solution around the objects and how they relate to the spaces they are in. The
                        initial demo did not handle objects or manage user images.</p>
                </li>
                <li>
                    <p>I explored AI to make the experience more customizable and easier on the user. The initial demo
                        did not have any AI and only featured a bit of customization.</p>
                </li>
            </ul>
        </section>
        <section class="fullBox flexSection sectionSpacing">
            <div class="leftBox">
                <h2 class="fourth-header">ZenDen 2.0</h2>
                <p>The revised mockup took the form of a mobile app as opposed to a desktop website. I found that when
                    organizing, having a laptop was much more cumbersome than a phone or tablet.</p>
                <ul>
                    <li>
                        <p>
                            The redesigned mockups focused on the guided activities and support rather than information.
                        </p>
                    </li>
                    <li>
                        <p>
                            There is also a "smart gallery" function that can give users an easy way to sort objects in
                            a digital space.
                        </p>
                    </li>
                    <li>
                        <p>
                            The activities are still in the solution. They aim to guide users through the organizing
                            process.
                        </p>
                    </li>
                </ul>
                <a class="inlineB tab buttonStyle filled longButton" rel="noopener noreferrer" target="_blank"
                    href="https://www.figma.com/proto/45qUCOzpDTpb1xqNeOZQur/ZenDen?node-id=413%3A7&scaling=min-zoom&page-id=369%3A0&starting-point-node-id=413%3A7">
                    <span class="tabContent">Explore ZenDen 2.0 Prototype <i class="far fa-arrow-right"></i></span>
                </a>
            </div>
            <div class="rightBox"><a rel='noopener noreferrer' target="_blank"
                    href="https://www.figma.com/proto/45qUCOzpDTpb1xqNeOZQur/ZenDen?node-id=413%3A7&scaling=min-zoom&page-id=369%3A0&starting-point-node-id=413%3A7">
                    <img class="product-image" src="../images/zenden-7.png" alt="Preview of final project." />
                </a>
            </div>
        </section>
        <section class="fullBox flexSection sectionSpacing">
            <div class="leftBox">
                <h2 class="fourth-header">Start your engines developers!</h2>
                <p>
                    To round out this project I decided to create a simple style for a developer hand-off. <strong>I
                        aimed to simplify the interactions and styling to allow developers to code it.</strong> I aimed
                    to keep styles
                    consistent and specific, even though it may never become coded or published.
                </p>
                <p>
                    The hand-off also helped to identify a few inconsistencies in the initial designs.
                </p>
            </div>
            <div class="rightBox">
                <img loading='lazy' class="product-image" src="images/zenden-8.png" alt="" />
            </div>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">Where I go from here</h2>
            <p>
                Although I do not think that this project will ever become published. I do think it had tremendous value
                in exploring a useful and human centered field. I was able to learn from many different individuals
                during the
                process.
            </p>
            <p>
                <strong>I hope to explore more AI solutions and implementations in the coming future.</strong>
            </p>
        </section>
        <div class="fullBox">
            <a href="/five" class="projectLink tab">
                <h2 class="fourth-header textLink">
                    <span class="tabContent">Explore Another Project&nbsp;<i class="far fa-arrow-right"></i></span>
                </h2>
            </a>
            <p class="tags tiny noSpace noSelect">&lt;FIVE&gt;: a set of coding tutorial websites.</p>
        </div>
        <div class="flexSection iconRight">
            <a class="bottomIcon ghost" title="Go to top.">
                <i class="fal fa-arrow-circle-up"></i>
                <p class="tags tiny noSelect">To Top</p>
            </a>
        </div>
    </main>
    </div>
  </>)
};