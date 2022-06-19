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
                <h1 class="inlineB PTitle">&lt;FIVE&gt;</h1>
                <p class="tags">Coding, UI, Mentorship, Accessibility</p>
                <p class="topSpace intro">
                    &lt;FIVE&gt; code guides to teach designers about the web code process. The guides cover HTML, CSS,
                    Javascript, PHP, React, and Git. Mainly targeted towards beginners and intermediate developers.
                </p>
            </div>
            <div class="rightBox imageFixedHeight"><a rel='noopener noreferrer' target="_blank"
                    href="https://jjdesign.space/labs/html-and-css-workshop.html" class="frameLink"></a>
                <img class="imgPreview" src="../images/five-1.png" alt="Preview of final project." />
            </div>
        </section>
        <section class="flexSection fullBox sectionSpacing">
            <div class="three-col">
                <h2 class="fourth-header">Time Period</h2>
                <p class="topSpace noWidow">Scattered 4 Months + 2 weeks of refinement</p>
            </div>
            <div class="three-col">
                <h2 class="fourth-header">Contribution / Focus</h2>
                <p class="topSpace noWidow">Research, Mentorship, UI Design, Coding, Workshop Presentations</p>
            </div>
            <div class="three-col">
                <h2 class="fourth-header">Tools</h2>
                <ul class="topSpace lister">
                    <li>User Interviews</li>
                    <li>Personas</li>
                    <li>Adobe Illustrator</li>
                    <li>Figma</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
            </div>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">Let’s learn to &lt;Code /&gt;</h2>
            <p>
                The Five presentations - &lt;FIVE&gt; - tackle code issues in a hybrid workshop/website. Understanding
                web code has become almost a necessity in the design field. As such, <strong>&lt;FIVE&gt; covers a
                    variety of
                    languages to give designers a bigger picture of the dev workflow.</strong> Each site aims to give
                beginners the
                tools and resources to understand simple code blocks.
            </p>
            <p>The websites cover:</p>
            <ol class="styled-list">
                <li>
                    <p>HTML & CSS</p>
                </li>
                <li>
                    <p>Javascript</p>
                </li>
                <li>
                    <p>PHP & SQL</p>
                </li>
                <li>
                    <p>Git</p>
                </li>
                <li>
                    <p>React</p>
                </li>
            </ol>
        </section>
        <section class="fullBox flexSection sectionSpacing">
            <div class="leftBox">
                <h2 class="fourth-header">How do students learn development?</h2>
                <p>Learning to code is an incredibly diverse and complex topic. One that needed to be clarified to
                    proceed in the process of making a solution.</p>
                <p class="quote noWidow">How can I help guide design students age 18-26 to better understand a variety
                    of different web coding languages?</p>
            </div>
            <div class="rightBox">
                <img loading='lazy' class="product-image" src="images/five-2.png" alt="" />
            </div>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">Say “No” to dry video tutorials</h2>
            <p>
                The common solution to this issue would be mentorship and/or video tutorials. <strong>After being a
                    mentor for 3 years in my program and not seeing much of a change I knew there was more I could
                    do.</strong> Here are a few key assumptions I had to make when creating the solutions.
            </p>
            <ol class="styled-list">
                <li>
                    <p>
                        Students will want to use &lt;FIVE&gt; over W3Schools or other available tools. <strong>While
                            learning,
                            students will often use different sources of information. So it is important to look at how
                            information is presented.</strong>
                    </p>
                </li>
                <li>
                    <p>Individuals will learn something from the solution. Different individuals learn through different
                        methods. So <strong>it's vital to keep the tone of the site and interactions inclusive to
                            different
                            learning styles.</strong></p>
                </li>
                <li>
                    <p>
                        Designers will have varying interests and skill levels. Designers, especially within the
                        Interaction Design program have different design focuses. <strong>I have to ensure that both
                            beginners
                            and novices' needs are met.</strong>
                    </p>
                </li>
            </ol>
            <p>These realizations broadened the scope of the solution. The solution would have to scale, be reusable,
                and adapt to a user's needs.</p>
        </section>
        <section class="fullBox flexSection sectionSpacing">
            <div class="leftBox">
                <h2 class="fourth-header">What even is a &lt;div /&gt;</h2>
                <p>
                    I began by talking to directly to students who needed mentorship and coding support. <strong>I
                        conducted one
                        wave of 1-on-1 interviews where I learned that there was a huge disparity in what they were
                        being
                        taught and what they didn’t understand.</strong>
                </p>
                <ol class="styled-list">
                    <li>
                        <p>
                            Some students didn’t know what the limits were to code. And did not know how to
                            start to create their ideas.
                        </p>
                    </li>
                    <li>
                        <p>Others seemed to lack resources and terminology.</p>
                    </li>
                    <li>
                        <p>
                            Some just generally needed added reinforcement to their learning in an
                            applicable way.
                        </p>
                    </li>
                </ol>
                <p>
                    I also created some simple personas to better illustrate the solution I was trying to make.
                    <strong>I referred back to my personas' struggles and successes during the design process as a
                        constraint.</strong> They helped to more clearly visualize a knowledge gap.
                </p>
            </div>
            <div class="rightBox">
                <img loading='lazy' class="product-image" src="images/five-3.png" alt="" />
            </div>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">The primary function()</h2>
            <p>With those findings in mind my goal quickly became:</p>
            <p class="quote noWidow">How can I provide design students aged 18-26 with code support and a resource that
                allows them to complete their projects?</p>
        </section>
        <section class="fullBox flexSection sectionSpacing">
            <div class="leftBox">
                <h2 class="fourth-header">Time to design some code?!</h2>
                <p>
                    I opted for a minimalistic colour palette based on the code logos for each of the languages. I also
                    wanted to let the content shine by not having too many graphics or contrasting colours. <strong>Each
                        of the &lt;FIVE&gt; had their primary colour which paired with a white or off-black to create an
                        accessible palette.</strong>
                </p>
                <p> I also had the unique constraint of making it referable. I had to ensure that someone could
                    reference
                    any of the information with ease. This meant that <strong>I had to pay close attention to
                        information architecture.
                        The wording used to describe code needed to be both technical but accessible.</strong>
                </p>
                <p> As for "presentability", <strong>the designs were fluid to allow the site to flow on different
                        devices.</strong> This
                    unique constraint led to the side scrolling navigation. The nav bar on the left changes as you reach
                    different parts of the page. This helped users to navigate the large site with confidence. It also
                    helped with timing and pacing while presenting.
                </p>
            </div>
            <div class="rightBox">
                <img loading='lazy' class="product-image" src="images/five-4.png" alt="" />
            </div>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">So much to do! So much to observe()</h2>
            <p>
                The coding process went by relatively quickly after all of the content had been written and designs had
                been
                finished. <strong>I had made the layout relatively straight-forward which allowed for “plug-and-play”
                    data.</strong> I
                was able to very easily copy and paste content once base styles had been declared.
            </p>
            <p> <strong>The unique left nav was definitely a challenge,</strong> it needed to be “dynamic” and react to
                different section
                changes. <strong>That logic was done using an “intersection observer” and checking whether or not the
                    screen was
                    in a new section.</strong> Changes to the sections would then be reflected in the nav.
            </p>
            <p> <strong>I also implemented the use of arrow keys and the enter button to navigate.</strong> This helped
                when it came to presenting the websites as workshops.
            </p>
        </section>
        <section class="fullBox flexSection sectionSpacing">
            <div class="leftBox">
                <h2 class="fourth-header">All Five together at last!</h2>
                <p><strong>The final &lt;FIVE&gt; were a success when completed.</strong> They were full of useful info
                    for designers to
                    take with them and were all device friendly. <strong>I ended up presenting ⅘ of the guides to peers,
                        which
                        were incredibly well received.</strong>
                    The &lt;FIVE&gt; can be explored here:
                </p>
                <ol class="styled-list">
                    <li>
                        <p class="inline-link">
                            <a rel="noopener noreferrer" target="_blank"
                                href="https://jjdesign.space/labs/html-and-css-workshop.html">
                                <span class="tabContent">Let’s Play &lt;Tag&gt; with Html And Style It&nbsp;<i
                                        class="far fa-arrow-right"></i></span>
                            </a>
                        </p>
                    </li>
                    <li>
                        <p class="inline-link">
                            <a rel="noopener noreferrer" target="_blank"
                                href="https://jjdesign.space/labs/js-workshop.html">
                                <span class="tabContent">Teatime With JJ(& some Java script)&nbsp;<i
                                        class="far fa-arrow-right"></i></span>
                            </a>
                        </p>
                    </li>
                    <li>
                        <p class="inline-link">
                            <a rel="noopener noreferrer" target="_blank"
                                href="https://jjdesign.space/labs/php-workshop.html">
                                <span class="tabContent">PHP & SQL, As Easy As ABC, DEF, GHI&nbsp;<i
                                        class="far fa-arrow-right"></i></span>
                            </a>
                        </p>
                    </li>
                    <li>
                        <p class="inline-link">
                            <a rel="noopener noreferrer" target="_blank"
                                href="https://jjdesign.space/labs/react-workshop.html">
                                <span class="tabContent">How would you React to some React Reactions.&nbsp;<i
                                        class="far fa-arrow-right"></i></span>
                            </a>
                        </p>
                    </li>
                    <li>
                        <p class="inline-link">
                            <a rel="noopener noreferrer" target="_blank"
                                href="https://jjdesign.space/labs/git-workshop.html">
                                <span class="tabContent">Push, Pull, and Git Into It&nbsp;<i
                                        class="far fa-arrow-right"></i></span>
                            </a>
                        </p>
                    </li>
                </ol>
            </div>
            <div class="rightBox"><a rel='noopener noreferrer' target="_blank"
                    href="https://jjdesign.space/labs/html-and-css-workshop.html">
                    <img class="product-image" src="../images/five-5.png" alt="Preview of final project." />
                </a>
            </div>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">5/100 ? or 500/100!</h2>
            <p>
                After having created these guides I can confidently say that they were done well! <strong>After
                    presenting and
                    distributing the Five I heard nothing but glowing reviews from classmates.</strong> Each of the
                presentations
                were booked fully up and aside from some minor typos everything was superb.
            </p>
            <p> All of that being said, <strong>the scrolling nav (as gimmicky as it is) did satisfy its
                    purpose.</strong> The solution
                was definitely a point of growth where I was able to create something within an incredibly specific
                constraint. It required me to think out of the box and work with my knowledge of dev. <strong>It
                    could’ve used
                    much more user testing however (it was a bit awkward to interact with).</strong>
            </p>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">What’s next for this.project</h2>
            <p>
                The language and content in the &lt;FIVE&gt; are continuing to be refined.
                <strong>Languages are constantly changing, growing, or shrinking which needs to be reflected in the
                    guides.</strong>
            </p>
            <p>
                The &lt;FIVE&gt; are definitely due for a content revision to make sure that everything is up to date.
            </p>
        </section>
        <div class="fullBox">
            <a href="/endless-moji" class="projectLink tab">
                <h2 class="fourth-header textLink">
                    <span class="tabContent">
                        Explore Another Project&nbsp;<i class="far fa-arrow-right"></i></span>
                </h2>
            </a>
            <p class="tags tiny noSpace noSelect">Endless Moji; a web game to teach users Japanese letters...</p>
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