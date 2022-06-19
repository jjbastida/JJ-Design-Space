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
                <h1 class="inlineB PTitle">Endless Moji</h1>
                <p class="tags">Html, Css, Javascript, Gamification, UI Design</p>
                <p class="topSpace intro">Endless Moji is an educational game that teaches you the first five letters of
                    the Japanese alphabet. This quick to learn activity can get anyone started with learning basic
                    Japanese.</p>
            </div>
            <div class="rightBox imageFixedHeight"><a rel='noopener noreferrer' target="_blank"
                    href="/works/endless_moji" class="frameLink"></a> <img class="imgPreview" src="../images/moji-1.png"
                    alt="Preview of final project." /></div>
        </section>
        <section class="flexSection fullBox sectionSpacing">
            <div class="three-col">
                <h2 class="fourth-header">Time Period</h2>
                <p class="topSpace noWidow">3 Months</p>
            </div>
            <div class="three-col">
                <h2 class="fourth-header">Contribution / Focus</h2>
                <p class="topSpace noWidow">Coding, Ideation, Game design, UI design</p>
            </div>
            <div class="three-col">
                <h2 class="fourth-header">Tools</h2>
                <ul class="topSpace lister">
                    <li>Adobe Illustrator </li>
                    <li>Visual Studio Code</li>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Javascript</li>
                </ul>
            </div>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">「あ」から「ん」まで! (From A to Z!)</h2>
            <p>
                The quick to understand game - Endless Moji - gracefully gets you started on the path to learning
                Japanese. Learning a new language from scratch is not an easy feat. In most cases, people give up
                before
                even starting or will fall off the wagon and not want to get back on.
            </p>
            <p><strong>Endless Moji gives you a means to start learning Japanese or re-enforce what you
                    know.</strong>
            </p>
            <ul class="styled-list">
                <li>
                    <p>The deceivingly difficult game provides you with a tutorial lesson to help you get started.
                    </p>
                </li>
                <li>
                    <p>The game itself is simple and accessible, allowing users of most ages to be able to play.</p>
                </li>
            </ul>
        </section>
        <section class="fullBox flexSection sectionSpacing">
            <div class="leftBox">
                <h2 class="fourth-header">日本語を知りますか？ (Do you know Japanese?)</h2>
                <p>Before starting this project I was already fluent in the language, so this problem began with a very
                    simple question. <strong>How did you learn Japanese and retain all of the learned
                        knowledge?</strong>
                </p>
            </div>
            <div class="rightBox">
                <img loading='lazy' class="product-image" src="images/moji-2.png" alt="" />
            </div>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">ね〜知っていますか？ (What do you know!)</h2>
            <p>Before trying to understand learning and Japanese further, it was important to know what I knew and what
                I needed to learn.
            <ul class="styled-list">
                <li>
                    <p>I had taught myself Japanese (including writing) through audio and written exercises. That
                        learning though meant <strong>I lacked a formal understanding of the language and educational
                            structure.</strong>
                    </p>
                </li>
                <li>
                    <p>I knew generally about gamification of learning and the benefits of repeated exercises.
                        <strong>Memory retention is improved the more
                            repetitions an activity is done.</strong>
                    </p>
                </li>
                <li>
                    <p>
                        I knew the incredible length of the Japanese alphabet. <strong>Japanese as a language is made up
                            of 3 “alphabets” which are 46 letters (Hiragana), 46 letters (Katakana), and 2 000+ (daily
                            use Kanji) symbols.</strong></p>
                </li>
            </ul>
            </p>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">どーどーどうしよう！ (What should we do!?)</h2>
            <p>The brief understanding of my own knowledge and biases led to a clearer problem space:</p>
            <p class="quote noWidow">How can I create a repetitive educational experience that allows students to
                learn a portion of the Japanese language?</p>
        </section>
        <section class="fullBox flexSection sectionSpacing">
            <div class="leftBox">
                <h2 class="fourth-header">遊びましょう！(Let’s play!)</h2>
                <p>With a clearer problem space I began ideating on different solutions. I researched other language
                    learning applications as well as general fundamental game design. Games are generally successful
                    when they can be immersive and intuitive. Much like UX Design, when someone struggles with a task
                    they are likely to leave (if it does not feel fair). </p>
                <p>From this, I came to the conclusion that the game needed to be intuitive, memorable, and have replay
                    value. </p>
                <p>The time constraints worked in favour of the deliverable as it could be small and memorable. I opted
                    to only use あいうえお as opposed to all 46 letters. This would allow me to focus on the game and concept
                    and it could scale at any time in the future.
                </p>
            </div>
            <div class="rightBox">
                <img loading='lazy' class="product-image" src="images/moji-3.png" alt="" />
            </div>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">面白い絵を描きましょう！(Designing something fun!)</h2>
            <p>When designing the interface and interactive elements within the game, I wanted the letters themselves to
                stand out. <strong>The letters needed to be
                    the core focal point of the layout.</strong> This led me to the core game mechanic of growing the
                letter. Making
                it bigger and more prominent the more you advanced. The layout of the menus and their positions further
                emphasize this, as they allow the letter to be the focus.</p>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">コードにしましょう〜 (Turning it into code)</h2>
            <p>A lot of my design insights appeared during the production phase. I had to go back and rethink design
                decisions during the development phase a few times.
            </p>
            <ul class="styled-list">
                <li>
                    <p>
                        The core gameplay was changed quite a few times in development. <strong>The biggest change being
                            the
                            timer,
                            lives, and score.</strong> Adding those elements made the experience feel more like a game
                        and gave users
                        a
                        reason to play again!
                    </p>
                </li>
                <li>
                    <p> Users would need some sort of way to learn Hiragana before getting to the game. <strong>I opted
                            for a skippable tutorial menu. The tutorial provided a unique opportunity and challenge in
                            information architecture.</strong> I needed to keep instructions brief but informative
                        enough to teach new players.
                    </p>
                </li>
                <li>
                    <p>
                        Due to the time constraints only the first 5 letters of the alphabet あいうえお were used.
                        <strong>The code was
                            written
                            in a
                            way where the letters could easily be expanded on or replaced.</strong> This means that in
                        the future
                        this game
                        could cover all 46 characters and more.
                    </p>
                </li>
            </ul>
        </section>
        <section class="fullBox flexSection sectionSpacing">
            <div class="leftBox">
                <h2 class="fourth-header">それ終わりましたかな？ (All done! For now...)</h2>
                <p>The final Endless Moji game is a quick to learn and intuitive experience. It gives users a brief
                    introduction into the complexities of the written Japanese language.</p>
                <a class="inlineB tab buttonStyle filled longButton" rel="noopener noreferrer" target="_blank"
                    href="/works/endless_moji">
                    <span class="tabContent">Play Endless Moji&nbsp;<i class="far fa-arrow-right"></i></span>
                </a>
            </div>
            <div class="rightBox"><a rel='noopener noreferrer' target="_blank" href="/works/endless_moji">
                    <img class="product-image" src="../images/moji-4.png" alt="Preview of final project." />
                </a>
            </div>
        </section>
        <section class="fullBox sectionSpacing">
            <h2 class="fourth-header">楽しかった？ (Did you have fun?)</h2>
            <p>The process of creating this game as a whole was incredibly fun and a good learning experience. The
                experience of the game itself however can absolutely be improved and grown. <strong>I feel like the
                    final
                    product lacked user research and experience. </strong>At its core, the game succeeds at expanding
                the problem and
                providing users with the first step in learning Japanese.
            </p>
            <p>In the future, <strong>I would like to expand on the game and conduct more in-depth user
                    research.</strong> Ideally,
                speaking to students learning Japanese, Japanese teachers, Japanese children, and game designers. And
                ideally, I would like to expand this game into something more substantial in teaching Japanese.
            </p>
        </section>
        <div class="fullBox">
            <a href="/zenden" class="projectLink tab">
                <h2 class="fourth-header textLink">
                    <span class="tabContent">Explore Another Project&nbsp;<i class="far fa-arrow-right"></i></span>
                </h2>
            </a>
            <p class="tags tiny noSpace noSelect">ZenDen: an app to help you organize your spaces.</p>
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