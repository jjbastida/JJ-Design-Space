$(document).ready(function () {
    //VARIABLES
    var rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    var heightPos;
    var subBody = document.getElementById("subBody");
    var dropDowns = document.getElementsByClassName("dropdown");
    var menuOpenZero = false;
    var menuOpenOne = false;
    var menuOn;
    var scrolled = false;
    //    //LOADING
    //    function loading(){
    //        document.onload()
    //        loaded()
    //    }
    //    function loaded(){
    //        
    //    }         
//    };
    wt.fix({
	   elements : 'p',
		chars : 16,
		method : 'nbsp',
		dir : 'pos',
		event : 'orientationchange'
    });
    //COOKIES
    if (getCookie("font") == "") {
        setCookie("font", "Default");
    };
    if (getCookie("colourMode") == "") {
        setCookie("colourMode", "Default");
    };
    if (getCookie("fontSize") == "") {
        setCookie("fontSize", 1);
    }
    else {
        document.body.style.fontSize = getCookie("fontSize") + "rem";
    };
    //Set Font Cookie
    if (getCookie("font") == "Dyslexic") {
            document.body.classList.add("dysl");
            document.getElementsByTagName("nav")[0].classList.add("dysl");
            for (i = 0; i < document.getElementsByTagName("p").length; i++) {
                document.getElementsByTagName("p")[i].classList.add("dysl");
            };
            for (i = 0; i < document.getElementsByClassName("buttonStyle").length; i++) {
                document.getElementsByClassName("buttonStyle")[i].classList.add("dysl");
            };
        for (i = 0; i < document.getElementsByTagName("h1").length; i++) {
            document.getElementsByTagName("h1")[i].classList.add("dysLine")
        };
        for (i = 0; i < document.getElementsByTagName("h3").length; i++) {
            document.getElementsByTagName("h3")[i].classList.add("dysLine");
        };
    }
    else if (getCookie("font") == "Clear") {
        document.body.classList.add("clear");
            document.getElementsByTagName("nav")[0].classList.add("clear");
            for (i = 0; i < document.getElementsByTagName("p").length; i++) {
                document.getElementsByTagName("p")[i].classList.add("clear");
            };
            for (i = 0; i < document.getElementsByClassName("buttonStyle").length; i++) {
                document.getElementsByClassName("buttonStyle")[i].classList.add("clear");
            };
        for (i = 0; i < document.getElementsByClassName("dropdown").length; i++) {
                    for (h = 0; h < document.getElementsByClassName("dropdown")[i].children[1].children.length; h++) {
                    document.getElementsByClassName("dropdown")[i].children[1].children[h].children[0].children[0].classList.add("clear");
                };
        };
        for (i = 0; i < document.getElementsByTagName("h1").length; i++) {
            document.getElementsByTagName("h1")[i].classList.add("dysLine")
        };
        for (i = 0; i < document.getElementsByTagName("h3").length; i++) {
            document.getElementsByTagName("h3")[i].classList.add("dysLine");
        };
    };
    //Set Colour Mode Cookie
    if (getCookie("colourMode") == "Grayscale") {
        for (i = 0; i < document.getElementsByClassName("regColor").length; i++) {
            document.getElementsByClassName("regColor")[i].classList.add("bwColor");
        };
        for (i = 0; i < document.getElementsByClassName("filled").length; i++) {
            document.getElementsByClassName("filled")[i].classList.add("bwFilled");
        };
        for (i = 0; i < document.getElementsByTagName("h1").length; i++) {
            document.getElementsByTagName("h1")[i].classList.add("bwColor");
            document.getElementsByTagName("h1")[i].classList.add("bwSelect");
        };
        for (i = 0; i < document.getElementsByTagName("h2").length; i++) {
            document.getElementsByTagName("h2")[i].classList.add("bwColor");
            document.getElementsByTagName("h2")[i].classList.add("bwSelect");
        };
        for (i = 0; i < document.getElementsByTagName("h3").length; i++) {
            document.getElementsByTagName("h3")[i].classList.add("bwColor");
            document.getElementsByTagName("h3")[i].classList.add("bwSelect");
        };
        for (i = 0; i < document.getElementsByTagName("h4").length; i++) {
            document.getElementsByTagName("h4")[i].classList.add("bwColor");
            document.getElementsByTagName("h4")[i].classList.add("bwSelect");
        };
        for (i = 0; i < document.getElementsByTagName("h5").length; i++) {
            document.getElementsByTagName("h5")[i].classList.add("bwColor");
            document.getElementsByTagName("h5")[i].classList.add("bwSelect");
        };
        for (i = 0; i < document.getElementsByTagName("p").length; i++) {
            document.getElementsByTagName("p")[i].classList.add("bwSelect");
        };
        for (i = 0; i < document.getElementsByTagName("span").length; i++) {
            document.getElementsByTagName("span")[i].classList.add("bwSelect");
        };
        for (i = 0; i < document.getElementsByTagName("img").length; i++) {
            document.getElementsByTagName("img")[i].classList.add("bwImageGrey");
        };
        for (i = 0; i < document.getElementsByClassName("dropHover").length; i++) {
            document.getElementsByClassName("dropHover")[i].classList.add("bwDropHover");
        };
        for (i = 0; i < document.getElementsByClassName("textLink").length; i++) {
            document.getElementsByClassName("textLink")[i].classList.add("bwTextLink");
        };
        for (i = 0; i < document.getElementsByClassName("ghost").length; i++) {
            document.getElementsByClassName("ghost")[i].classList.add("bwGhost");
        };
        for (i = 0; i < document.getElementsByClassName("tabContent").length; i++) {
            document.getElementsByClassName("tabContent")[i].classList.add("tabBW");
        };
        document.getElementById("juanjose").classList.remove("bwImageGrey");
        document.getElementsByClassName("here")[0].classList.remove("regBorder");
        document.getElementsByClassName("here")[0].classList.add("bwBorder");
        document.getElementById("juanjose").classList.add("bwImageBlack");
    };
    if (getCookie("colourMode") == "ImprovedContrast") {
                setCookie("colourMode", "ImprovedContrast");
                for (i = 0; i < document.getElementsByClassName("regColor").length; i++) {
                    document.getElementsByClassName("regColor")[i].classList.add("hcColor");
                };
                for (i = 0; i < document.getElementsByClassName("filled").length; i++) {
                    document.getElementsByClassName("filled")[i].classList.add("hcFilled");
                };
                for (i = 0; i < document.getElementsByClassName("ghost").length; i++) {
                    document.getElementsByClassName("ghost")[i].classList.add("hcGhost");
                };
                for (i = 0; i < document.getElementsByClassName("tabContent").length; i++) {
                    document.getElementsByClassName("tabContent")[i].classList.add("tabHC");
                };
                for (i = 0; i < document.getElementsByTagName("h1").length; i++) {
                    document.getElementsByTagName("h1")[i].classList.add("hcTitle");
                    document.getElementsByTagName("h1")[i].classList.add("hcSelect");
                };
                for (i = 0; i < document.getElementsByTagName("h2").length; i++) {
                    if (document.getElementsByTagName("h2")[i].children[0] !== undefined && document.getElementsByTagName("h2")[i].children[0].tagName !== "BR"){
                        document.getElementsByTagName("h2")[i].children[0].classList.add("hcTitle");
                        document.getElementsByTagName("h2")[i].children[0].classList.add("hcSelect");
                    }
                    else{
                    document.getElementsByTagName("h2")[i].classList.add("hcTitle");
                    document.getElementsByTagName("h2")[i].classList.add("hcSelect");
                    }
                
                };
                for (i = 0; i < document.getElementsByTagName("h3").length; i++) {
                    document.getElementsByTagName("h3")[i].classList.add("hcTitle");
                    document.getElementsByTagName("h3")[i].classList.add("hcSubTitle");
                    document.getElementsByTagName("h3")[i].classList.add("hcSelect");
                };
                for (i = 0; i < document.getElementsByTagName("h4").length; i++) {
                    document.getElementsByTagName("h4")[i].classList.add("hcTitle");
                    document.getElementsByTagName("h4")[i].classList.add("hcSelect");
                };
                for (i = 0; i < document.getElementsByTagName("h5").length; i++) {
                    document.getElementsByTagName("h5")[i].classList.add("hcTitle");
                    document.getElementsByTagName("h5")[i].classList.add("hcSelect");
                };
                for (i = 0; i < document.getElementsByClassName("hcTitle").length; i++) {
                    document.getElementsByClassName("hcTitle")[i].setAttribute("data-shadow-title",  document.getElementsByClassName("hcTitle")[i].innerText);
                };
                for (i = 0; i < document.getElementsByTagName("p").length; i++) {
                    document.getElementsByTagName("p")[i].classList.add("hcColor");
                    document.getElementsByTagName("p")[i].classList.add("hcSelect");
                };
                for (i = 0; i < document.getElementsByTagName("span").length; i++) {
                    document.getElementsByTagName("span")[i].classList.add("hcSelect");
                };
                for (i = 0; i < document.getElementsByClassName("dropHover").length; i++) {
                    document.getElementsByClassName("dropHover")[i].classList.add("hcDropHover");
                };
                for (i = 0; i < document.getElementsByClassName("textLink").length; i++) {
                    document.getElementsByClassName("textLink")[i].classList.add("hcTextLink");
                };
                for (i = 0; i < document.getElementById("menuOptions").children.length; i++) {
                    document.getElementById("menuOptions").children[i].children[0].children[0].classList.add("hcMenuHover")
                };
                document.getElementsByClassName("here")[0].classList.add("hcBorder");
            };
     
    //    document.body.style.fontSize = getCookie("fontSize")+"rem";
    console.log("Get these cookies! \n" + "Font = " + getCookie("font") + "\nFont Size = " + (parseFloat(getCookie("fontSize")).toFixed(1))*16 + "px \nColour Mode = " + getCookie("colourMode")+ "\nBeen Here Before= "+ getCookie("scroller"));

    function setCookie(cname, cvalue) {
        document.cookie = cname + "=" + cvalue + ";path=/";
    }
    //Dont forget to parseFloat()
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    //MOBILE FIXES
    function dropZero() {
        dropDown(0);
    }

    function dropOne() {
        dropDown(1);
    }

    function dropUpZero() {
        dropUp(0);
    }

    function dropUpOne() {
        dropUp(1);
    }

    function dropDown(which) {
        dropDowns[which].children[1].style.visibility = "visible";
        dropDowns[which].children[1].style.opacity = 1;
        dropDowns[which].children[1].style.transform = "translateY(0) translateX(-1em)";
        if (which == 0) {
            menuOpenZero = true;
            dropDowns[which].addEventListener("click", dropUpZero, false);
            dropDowns[which].removeEventListener("click", dropZero);
        }
        else if (which == 1) {
            menuOpenOne = true;
            dropDowns[which].addEventListener("click", dropUpOne, false);
            dropDowns[which].removeEventListener("click", dropOne);
        }
    }

    function dropUp(which) {
        dropDowns[which].children[1].removeAttribute("style");
        if (which == 0) {
            dropDowns[which].addEventListener("click", dropZero, false);
            dropDowns[which].removeEventListener("click", dropUpZero);
            menuOpenZero = false;
        }
        else if (which == 1) {
            dropDowns[which].addEventListener("click", dropOne, false);
            dropDowns[which].removeEventListener("click", dropUpOne);
            menuOpenOne = false;
        }
        menuOpen = false;
    }
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
    //if window is smaller than 47rem replace the icon and fix nav
    if (window.innerWidth <= 47 * rem && window.location.pathname.indexOf("index.html") > -1) {
        document.getElementById("juanjose").src = "images/jj.svg";
        document.getElementById("juanjose").style.height = "2.8em"
        document.getElementById("menuOptions").style.alignItems = "center";
        dropDowns[0].addEventListener("click", dropZero);
        dropDowns[1].addEventListener("click", dropOne);
        menuOn = true;
        if (dropDowns[0].className.includes("dropHover")) {
            dropDowns[0].className = dropDowns[0].className.replace("dropHover", "");
            dropDowns[1].className = dropDowns[1].className.replace("dropHover", "");
        }
    }
    else if (window.innerWidth > 47 * rem && window.location.pathname.indexOf("index.html") > -1) {
        document.getElementById("juanjose").src = "images/juanjose.svg";
        document.getElementById("menuOptions").style.alignItems = "baseline";
        document.getElementById("juanjose").style.height = "1.7em"
        if (dropDowns[0].className.includes("dropHover") == false) {
            dropDowns[0].classList.add("dropHover");
            dropDowns[1].classList.add("dropHover");
        }
    }
    else if (window.innerWidth <= 47 * rem && window.location.pathname.indexOf("index.html") <= -1) {
        document.getElementById("juanjose").src = "../images/jj.svg";
        document.getElementById("juanjose").style.height = "2.8em"
        document.getElementById("menuOptions").style.alignItems = "center";
        dropDowns[0].addEventListener("click", dropZero);
        dropDowns[1].addEventListener("click", dropOne);
        menuOn = true;
        if (dropDowns[0].className.includes("dropHover")) {
            dropDowns[0].className = dropDowns[0].className.replace("dropHover", "");
            dropDowns[1].className = dropDowns[1].className.replace("dropHover", "");
        }
    }
    else if (window.innerWidth > 47 * rem && window.location.pathname.indexOf("index.html") <= -1) {
        document.getElementById("juanjose").src = "../images/juanjose.svg";
        document.getElementById("menuOptions").style.alignItems = "baseline";
        document.getElementById("juanjose").style.height = "1.7em"
        if (dropDowns[0].className.includes("dropHover") == false) {
            dropDowns[0].classList.add("dropHover");
            dropDowns[1].classList.add("dropHover");
        }
    };
    window.addEventListener("resize", function () {
        if (window.innerWidth <= 47 * rem && window.location.pathname.indexOf("index.html") > -1) {
            document.getElementById("juanjose").src = "images/jj.svg";
            document.getElementById("juanjose").style.height = "2.8em"
            document.getElementById("menuOptions").style.alignItems = "center";
            if (menuOn !== true) {
                menuOn = true;
                dropDowns[0].addEventListener("click", dropZero);
                dropDowns[1].addEventListener("click", dropOne);
            }
            if (dropDowns[0].className.includes("dropHover")) {
                dropDowns[0].className = dropDowns[0].className.replace("dropHover", "");
                dropDowns[1].className = dropDowns[1].className.replace("dropHover", "");
            }
        }
        else if (window.innerWidth > 47 * rem && window.location.pathname.indexOf("index.html") > -1) {
            document.getElementById("juanjose").src = "images/juanjose.svg";
            document.getElementById("menuOptions").style.alignItems = "baseline";
            document.getElementById("juanjose").style.height = "1.7em"
            if (menuOn == true) {
                menuOn = false;
                dropDowns[0].removeEventListener("click", dropZero);
                dropDowns[1].removeEventListener("click", dropOne);
            }
            if (dropDowns[0].className.includes("dropHover") == false) {
                dropDowns[0].classList.add("dropHover");
                dropDowns[1].classList.add("dropHover");
            }
        }
        else if (window.innerWidth <= 47 * rem && window.location.pathname.indexOf("index.html") <= -1) {
            document.getElementById("juanjose").src = "../images/jj.svg";
            document.getElementById("juanjose").style.height = "2.8em"
            document.getElementById("menuOptions").style.alignItems = "center";
            if (menuOn !== true) {
                menuOn = true;
                dropDowns[0].addEventListener("click", dropZero);
                dropDowns[1].addEventListener("click", dropOne);
            }
            if (dropDowns[0].className.includes("dropHover")) {
                dropDowns[0].className = dropDowns[0].className.replace("dropHover", "");
                dropDowns[1].className = dropDowns[1].className.replace("dropHover", "");
            }
        }
        else if (window.innerWidth > 47 * rem && window.location.pathname.indexOf("index.html") <= -1) {
            document.getElementById("juanjose").src = "../images/juanjose.svg";
            document.getElementById("menuOptions").style.alignItems = "baseline";
            document.getElementById("juanjose").style.height = "1.7em";
            if (menuOn == true) {
                menuOn = false;
                dropDowns[0].removeEventListener("click", dropZero);
                dropDowns[1].removeEventListener("click", dropOne);
            };
            if (dropDowns[0].className.includes("dropHover") == false) {
                dropDowns[0].classList.add("dropHover");
                dropDowns[1].classList.add("dropHover");
            }
        };
    });
    //if scrollheight is not at top make the height fixed
    if (window.scrollY / window.innerHeight >= 0.05) {
        document.getElementsByTagName("nav")[0].style.backgroundColor = "white";
        document.getElementsByTagName("nav")[0].style.boxShadow = "0px 3px 10px 0px #CCCCDD";
        if (window.innerWidth <= 47 * rem) {
            document.getElementsByTagName("nav")[0].style.height = "65px";
            document.getElementsByTagName("nav")[0].style.paddingTop = ".5em";
        }
        else {
            document.getElementsByTagName("nav")[0].style.height = "50px";
            document.getElementsByTagName("nav")[0].style.paddingTop = "15px";
        };
        scrolled = true;
    }
    else {
        document.getElementsByTagName("nav")[0].style.backgroundColor = "initial";
    };
    window.addEventListener("scroll", function () {
        heightPos = window.scrollY / window.innerHeight
        if (heightPos >= 0.05 && scrolled == false) {
            document.getElementsByTagName("nav")[0].style.backgroundColor = "white";
            document.getElementsByTagName("nav")[0].style.boxShadow = "0px 3px 10px 0px #CCCCDD";
            if (window.innerWidth <= 47 * rem) {
                document.getElementsByTagName("nav")[0].style.height = "65px";
                document.getElementsByTagName("nav")[0].style.paddingTop = ".5em";
            }
            else {
                document.getElementsByTagName("nav")[0].style.height = "50px";
                document.getElementsByTagName("nav")[0].style.paddingTop = "15px";
            }
            scrolled = true;
        }
        else if (heightPos < 0.05 && scrolled == true) {
            document.getElementsByTagName("nav")[0].style.backgroundColor = "initial";
            document.getElementsByTagName("nav")[0].style.boxShadow = "initial"
            document.getElementsByTagName("nav")[0].style.height = "70px";
            document.getElementsByTagName("nav")[0].style.paddingTop = "35px";
            scrolled = false;
        }
    });
    window.addEventListener("resize", function () {
        heightPos = window.scrollY / window.innerHeight
        if (heightPos >= 0.05) {
            document.getElementsByTagName("nav")[0].style.backgroundColor = "white";
            document.getElementsByTagName("nav")[0].style.boxShadow = "0px 3px 10px 0px #CCCCDD";
            if (window.innerWidth <= 47 * rem) {
                document.getElementsByTagName("nav")[0].style.height = "65px";
                document.getElementsByTagName("nav")[0].style.paddingTop = ".5em";
            }
            else {
                document.getElementsByTagName("nav")[0].style.height = "50px";
                document.getElementsByTagName("nav")[0].style.paddingTop = "15px";
            };
        }
        else if (heightPos < 0.05) {
            document.getElementsByTagName("nav")[0].style.backgroundColor = "initial";
            document.getElementsByTagName("nav")[0].style.boxShadow = "initial"
            document.getElementsByTagName("nav")[0].style.height = "70px";
            document.getElementsByTagName("nav")[0].style.paddingTop = "35px";
        }
    });
    //Focus Fix
    document.getElementsByClassName("dropdown")[0].addEventListener("focus", function (event) {
        this.addEventListener("keydown", function (e) {
            if (e.key == 9 || e.keyCode == 9) {
                this.children[1].style.visibility = "visible";
                this.children[1].style.opacity = 1;
                this.children[1].style.transform = "translateY(-.1em) translateX(-1em)";
            }
        }, true)
    }, true);
    document.getElementsByClassName("dropdown")[0].children[1].children[2].children[0].addEventListener("focus", function (event) {
        this.addEventListener("keydown", function (e) {
            if (e.key == 9 || e.keyCode == 9) {
                document.getElementsByClassName("dropdown")[0].children[1].style.visibility = "";
                document.getElementsByClassName("dropdown")[0].children[1].style.opacity = "";
                document.getElementsByClassName("dropdown")[0].children[1].style.transform = "";
            }
        })
    }); 
    document.getElementsByClassName("dropdown")[1].addEventListener("focus", function (event) {
        this.addEventListener("keydown", function (e) {
            if (e.key == 9 || e.keyCode == 9) {
                this.children[1].style.visibility = "visible";
                this.children[1].style.opacity = 1;
                this.children[1].style.transform = "translateY(-.1em) translateX(-1em)";
            }
        }, true)
    }, true);
    document.getElementsByClassName("dropdown")[1].children[1].children[2].children[0].addEventListener("focus", function (event) {
        this.addEventListener("keydown", function (e) {
            if (e.key == 9 || e.keyCode == 9) {
                document.getElementsByClassName("dropdown")[1].children[1].style.visibility = "";
                document.getElementsByClassName("dropdown")[1].children[1].style.opacity = "";
                document.getElementsByClassName("dropdown")[1].children[1].style.transform = "";
            }
        })
    });
});