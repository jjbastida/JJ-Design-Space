//VARIABLES
const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
var heightPos;
var menuOpenZero = false;
let menuOpenOne = false;
var menuOn;
var scrolled = false;
let shadowStyle = getComputedStyle(document.documentElement).getPropertyValue('--drop-shadow-primary');
let backgroundStyle = getComputedStyle(document.documentElement).getPropertyValue('--background-primary');
const juanjose = document.getElementById("juanjose");
const menuOptions = document.getElementById("menuOptions");
const navigationTag = document.getElementsByTagName("nav");
const dropdown = document.getElementsByClassName("dropdown");

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
     shadowStyle = getComputedStyle(document.documentElement).getPropertyValue('--drop-shadow-primary');
     backgroundStyle = getComputedStyle(document.documentElement).getPropertyValue('--background-primary');
});

function dropDown(which) {
    dropdown[which].children[1].style.visibility = "visible";
    dropdown[which].children[1].style.opacity = 1;
    dropdown[which].children[1].style.transform = "translateY(0) translateX(-1em)";
    menuOpenZero = true;
    dropdown[which].addEventListener("click", () => dropUp(0), false);
    dropdown[which].removeEventListener("click", () => dropDown(0));
}

function dropUp(which) {
    dropdown[which].children[1].removeAttribute("style");
    dropdown[which].addEventListener("click", () => dropDown(0), false);
    dropdown[which].removeEventListener("click", () => dropUp(0));
    menuOpenZero = false;
    menuOpen = false;
}

//if window is smaller than 47rem replace the icon and fix nav
if (window.innerWidth <= 47 * rem && window.location.pathname.indexOf("index") > -1) {
    juanjose.src = "images/jj.svg";
    juanjose.style.height = "2.8em"
    menuOptions.style.alignItems = "center";
    dropdown[0].addEventListener("click", () => dropDown(0));
    menuOn = true;
    if (dropdown[0].className.includes("dropHover")) {
        dropdown[0].className = dropdown[0].className.replace("dropHover", "");
    }
}
else if (window.innerWidth > 47 * rem && window.location.pathname.indexOf("index") > -1) {
    juanjose.src = "images/juanjose.svg";
    menuOptions.style.alignItems = "baseline";
    juanjose.style.height = "1.7em"
    if (dropdown[0].className.includes("dropHover") == false) {
        dropdown[0].classList.add("dropHover");
    }
}
else if (window.innerWidth <= 47 * rem && window.location.pathname.indexOf("index") <= -1) {
    juanjose.src = "../images/jj.svg";
    juanjose.style.height = "2.8em"
    menuOptions.style.alignItems = "center";
    dropdown[0].addEventListener("click", () => dropDown(0));
    menuOn = true;
    if (dropdown[0].className.includes("dropHover")) {
        dropdown[0].className = dropdown[0].className.replace("dropHover", "");
    }
}
else if (window.innerWidth > 47 * rem && window.location.pathname.indexOf("index") <= -1) {
    juanjose.src = "../images/juanjose.svg";
    menuOptions.style.alignItems = "baseline";
    juanjose.style.height = "1.7em"
    if (dropdown[0].className.includes("dropHover") == false) {
        dropdown[0].classList.add("dropHover");
    }
};

window.addEventListener("resize", function () {
    if (window.innerWidth <= 47 * rem && window.location.pathname.indexOf("index") > -1) {
        juanjose.src = "images/jj.svg";
        juanjose.style.height = "2.8em"
        menuOptions.style.alignItems = "center";
        if (menuOn !== true) {
            menuOn = true;
            dropdown[0].addEventListener("click", () => dropDown(0));
        }
        if (dropdown[0].className.includes("dropHover")) {
            dropdown[0].className = dropdown[0].className.replace("dropHover", "");
        }
    }
    else if (window.innerWidth > 47 * rem && window.location.pathname.indexOf("index") > -1) {
        juanjose.src = "images/juanjose.svg";
        menuOptions.style.alignItems = "baseline";
        juanjose.style.height = "1.7em"
        if (menuOn == true) {
            menuOn = false;
            dropdown[0].removeEventListener("click", () => dropDown(0));
        }
        if (dropdown[0].className.includes("dropHover") == false) {
            dropdown[0].classList.add("dropHover");
        }
    }
    else if (window.innerWidth <= 47 * rem && window.location.pathname.indexOf("index") <= -1) {
        juanjose.src = "../images/jj.svg";
        juanjose.style.height = "2.8em"
        menuOptions.style.alignItems = "center";
        if (menuOn !== true) {
            menuOn = true;
            dropdown[0].addEventListener("click", () => dropDown(0));
        }
        if (dropdown[0].className.includes("dropHover")) {
            dropdown[0].className = dropdown[0].className.replace("dropHover", "");
        }
    }
    else if (window.innerWidth > 47 * rem && window.location.pathname.indexOf("index") <= -1) {
        juanjose.src = "../images/juanjose.svg";
        menuOptions.style.alignItems = "baseline";
        juanjose.style.height = "1.7em";
        if (menuOn == true) {
            menuOn = false;
            dropdown[0].removeEventListener("click", () => dropDown(0));
        };
        if (dropdown[0].className.includes("dropHover") == false) {
            dropdown[0].classList.add("dropHover");
        }
    };
});

//if scrollheight is not at top make the height fixed
if (window.scrollY / window.innerHeight >= 0.05) {
    navigationTag[0].style.backgroundColor = backgroundStyle;
    navigationTag[0].style.boxShadow = shadowStyle;
    if (window.innerWidth <= 47 * rem) {
        navigationTag[0].style.height = "65px";
        navigationTag[0].style.paddingTop = ".5em";
    }
    else {
        navigationTag[0].style.height = "50px";
        navigationTag[0].style.paddingTop = "1.2rem";
    };
    scrolled = true;
}
else {
    navigationTag[0].style.backgroundColor = "initial";
};

window.addEventListener("scroll", function () {
    heightPos = window.scrollY / window.innerHeight
    if (heightPos >= 0.05 && scrolled == false) {
        navigationTag[0].style.backgroundColor = backgroundStyle;
        navigationTag[0].style.boxShadow = shadowStyle;
        if (window.innerWidth <= 47 * rem) {
            navigationTag[0].style.height = "65px";
            navigationTag[0].style.paddingTop = ".5em";
        }
        else {
            navigationTag[0].style.height = "50px";
            navigationTag[0].style.paddingTop = "1.2rem";
        }
        scrolled = true;
    }
    else if (heightPos < 0.05 && scrolled == true) {
        navigationTag[0].style.backgroundColor = "initial";
        navigationTag[0].style.boxShadow = "initial"
        navigationTag[0].style.height = "70px";
        navigationTag[0].style.paddingTop = "35px";
        scrolled = false;
    }
});

window.addEventListener("resize", function () {
    heightPos = window.scrollY / window.innerHeight
    if (heightPos >= 0.05) {
        navigationTag[0].style.backgroundColor = backgroundStyle;
        navigationTag[0].style.boxShadow = shadowStyle;
        if (window.innerWidth <= 47 * rem) {
            navigationTag[0].style.height = "65px";
            navigationTag[0].style.paddingTop = ".5em";
        }
        else {
            navigationTag[0].style.height = "50px";
            navigationTag[0].style.paddingTop = "1.2rem";
        };
    }
    else if (heightPos < 0.05) {
        navigationTag[0].style.backgroundColor = "initial";
        navigationTag[0].style.boxShadow = "initial"
        navigationTag[0].style.height = "70px"; 
        navigationTag[0].style.paddingTop = "35px";
    }
});

document.addEventListener("mousedown", function (e) {
    if (e.target.classList.contains("dropdown") == false) {
        if (menuOpenZero == true) {
            dropUp(0);
        }
        else if (menuOpenOne == true) {
            dropUp(1);
        }
        else if (menuOpenZero == true && menuOpenOne == true) {
            dropUp(0);
            dropUp(1);
        }
    }
});

dropdown[0].addEventListener("focus", function (event) {
    this.addEventListener("keydown", function (e) {
        if (e.key == 9 || e.keyCode == 9) {
            this.children[1].style.visibility = "visible";
            this.children[1].style.opacity = 1;
            this.children[1].style.transform = "translateY(-.1em) translateX(-1em)";
        }
    }, true)
}, true);

dropdown[0].children[1].children[2].children[0].addEventListener("focus", function (event) {
    this.addEventListener("keydown", function (e) {
        if (e.key == 9 || e.keyCode == 9) {
            dropdown[0].children[1].style.visibility = "";
            dropdown[0].children[1].style.opacity = 0;
            dropdown[0].children[1].style.transform = "";
        }
    })
});