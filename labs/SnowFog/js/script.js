const fogs = Array.prototype.slice.call(document.getElementsByClassName('fog'));
const snowButton = document.getElementById('snowButton');
const snowBlock = document.getElementById('snowBlock');
let snowed = true;
let buttonPressed = false;

const opacity = (element, opacityVal) => {
    if (snowed) {
        element.style.opacity = opacityVal;
    }
};
const opacityHalf = (event) => opacity(event.currentTarget, 0.3);
const opacityFull = (event) => opacity(event.currentTarget, 1);
const buttonFunction = () => {
    snowed = !snowed;
    buttonPressed = !buttonPressed;
    fog(snowed, false);
    if (snowed) {
        snowButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="448" height="512" viewBox="0 0 448 512" fill="none">
        <rect width="448" height="512" fill="white"/>
        <path d="M440.1 355.2L400.9 332.2L435 322.9C443.4 320.6 448.4 311.8 446.1 303.3L442 287.8C439.8 279.3 431.1 274.2 422.7 276.5L343 298.2L271.2 256L343.1 213.8L422.8 235.5C431.2 237.8 439.8 232.7 442.1 224.2L446.2 208.7C448.4 200.2 443.5 191.4 435.1 189.1L401 179.8L440.2 156.8C447.7 152.4 450.3 142.6 446 134.9L438.1 121C433.8 113.3 424.1 110.7 416.6 115.1L377.4 138.1L386.5 103.4C388.7 94.9 383.8 86.1 375.4 83.8L360.2 79.7C351.8 77.4 343.2 82.5 340.9 91L319.6 172L247.7 214.2V129.7L306 70.4C312.1 64.2 312.1 54 306 47.8L294.9 36.5C288.8 30.3 278.8 30.3 272.7 36.5L247.8 61.9V16C247.8 7.2 240.8 0 232.1 0H216.4C207.7 0 200.7 7.2 200.7 16V62.1L175.8 36.7C169.7 30.5 159.7 30.5 153.6 36.7L142.1 48C136 54.2 136 64.4 142.1 70.6L200.4 129.9V214.4L128.5 172.2L107.2 91.2C105 82.7 96.3 77.6 87.9 79.9L72.7 84C64.3 86.3 59.3 95.1 61.6 103.6L70.7 138.3L31.5 115.3C24 110.9 14.4 113.5 10 121.2L2.1 135.1C-2.2 142.8 0.299998 152.5 7.9 157L47.1 180L13 189.1C4.6 191.4 -0.400002 200.2 1.9 208.7L6 224.2C8.2 232.7 16.9 237.8 25.3 235.5L105 213.8L176.9 256L105 298.2L25.3 276.5C16.9 274.2 8.3 279.3 6 287.8L1.9 303.3C-0.300002 311.8 4.6 320.6 13 322.9L47.1 332.2L7.9 355.2C0.399998 359.6 -2.2 369.4 2.1 377.1L10 391C14.3 398.7 24 401.3 31.5 396.9L70.7 373.9L61.6 408.6C59.4 417.1 64.3 425.9 72.7 428.2L87.9 432.3C96.3 434.6 104.9 429.5 107.2 421L128.5 340L200.4 297.8V382.3L142.1 441.6C136 447.8 136 458 142.1 464.2L153.2 475.5C159.3 481.7 169.3 481.7 175.4 475.5L200.3 450.1V496C200.3 504.8 207.3 512 216 512H231.7C240.4 512 247.4 504.8 247.4 496V449.9L272.3 475.3C278.4 481.5 288.4 481.5 294.5 475.3L305.6 464C311.7 457.8 311.7 447.6 305.6 441.4L247.3 382.1V297.6L319.2 339.8L340.5 420.8C342.7 429.3 351.4 434.4 359.8 432.1L375 428C383.4 425.7 388.4 416.9 386.1 408.4L377 373.7L416.2 396.7C423.7 401.1 433.3 398.5 437.7 390.8L445.6 376.9C450.2 369.4 447.7 359.6 440.1 355.2V355.2Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M53.5648 453.202L309.565 9.79749L352 34.2975L96 477.702L53.5648 453.202Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M96 477.702L352 34.2975L394.435 58.7975L138.435 502.202L96 477.702Z" fill="white"/>
        </svg>`;
    } else {
        snowButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="448" height="512" viewBox="0 0 448 512" fill="none">
        <path d="M440.1 355.2L400.9 332.2L435 322.9C443.4 320.6 448.4 311.8 446.1 303.3L442 287.8C439.8 279.3 431.1 274.2 422.7 276.5L343 298.2L271.2 256L343.1 213.8L422.8 235.5C431.2 237.8 439.8 232.7 442.1 224.2L446.2 208.7C448.4 200.2 443.5 191.4 435.1 189.1L401 179.8L440.2 156.8C447.7 152.4 450.3 142.6 446 134.9L438.1 121C433.8 113.3 424.1 110.7 416.6 115.1L377.4 138.1L386.5 103.4C388.7 94.9 383.8 86.1 375.4 83.8L360.2 79.7C351.8 77.4 343.2 82.5 340.9 91L319.6 172L247.7 214.2V129.7L306 70.4C312.1 64.2 312.1 54 306 47.8L294.9 36.5C288.8 30.3 278.8 30.3 272.7 36.5L247.8 61.9V16C247.8 7.2 240.8 0 232.1 0H216.4C207.7 0 200.7 7.2 200.7 16V62.1L175.8 36.7C169.7 30.5 159.7 30.5 153.6 36.7L142.1 48C136 54.2 136 64.4 142.1 70.6L200.4 129.9V214.4L128.5 172.2L107.2 91.2C105 82.7 96.3 77.6 87.9 79.9L72.7 84C64.3 86.3 59.3 95.1 61.6 103.6L70.7 138.3L31.5 115.3C24 110.9 14.4 113.5 10 121.2L2.1 135.1C-2.2 142.8 0.299998 152.5 7.9 157L47.1 180L13 189.1C4.6 191.4 -0.400002 200.2 1.9 208.7L6 224.2C8.2 232.7 16.9 237.8 25.3 235.5L105 213.8L176.9 256L105 298.2L25.3 276.5C16.9 274.2 8.3 279.3 6 287.8L1.9 303.3C-0.300002 311.8 4.6 320.6 13 322.9L47.1 332.2L7.9 355.2C0.399998 359.6 -2.2 369.4 2.1 377.1L10 391C14.3 398.7 24 401.3 31.5 396.9L70.7 373.9L61.6 408.6C59.4 417.1 64.3 425.9 72.7 428.2L87.9 432.3C96.3 434.6 104.9 429.5 107.2 421L128.5 340L200.4 297.8V382.3L142.1 441.6C136 447.8 136 458 142.1 464.2L153.2 475.5C159.3 481.7 169.3 481.7 175.4 475.5L200.3 450.1V496C200.3 504.8 207.3 512 216 512H231.7C240.4 512 247.4 504.8 247.4 496V449.9L272.3 475.3C278.4 481.5 288.4 481.5 294.5 475.3L305.6 464C311.7 457.8 311.7 447.6 305.6 441.4L247.3 382.1V297.6L319.2 339.8L340.5 420.8C342.7 429.3 351.4 434.4 359.8 432.1L375 428C383.4 425.7 388.4 416.9 386.1 408.4L377 373.7L416.2 396.7C423.7 401.1 433.3 398.5 437.7 390.8L445.6 376.9C450.2 369.4 447.7 359.6 440.1 355.2V355.2Z" fill="currentColor"/>
        </svg>`;
    }
}

snowButton.addEventListener('mousedown', buttonFunction);
snowButton.addEventListener('keydown', buttonFunction);

const fog = (fogging, first) => {
    fogs.forEach(fogElement => {
        if (first) {
            fogElement.setAttribute('aria-label', fogElement.innerText)
            fogElement.addEventListener('mouseover', opacityHalf);
            fogElement.addEventListener('mouseout', opacityFull);
        }
        if (fogging) {
            fogElement.classList.remove('noFog')
        } else {
            fogElement.classList.add('noFog')
        }
        const textLength = fogElement.innerText.length;
        const textLengthMultiplier = textLength / 100;
        const textArray = fogElement.innerText.split('');
        let colorMultiplier = (20 / textLengthMultiplier);
        let currentColor = 100;

        fogElement.innerHTML = '';

        textArray.forEach((letter, index) => {
            let newSpan = document.createElement('SPAN');
            let textNode = document.createTextNode(letter);

            newSpan.appendChild(textNode);
            if (fogging) {
                if (currentColor < 90) {
                    currentColor = 89;
                } else if (currentColor <= 225 && letter != ' ') {
                    if (index <= (7 * textLengthMultiplier)) {
                        currentColor += colorMultiplier;
                    } else if ((index <= (12 * textLengthMultiplier)) && (currentColor <= 210)) {
                        currentColor += (colorMultiplier * 2);
                    } else if ((index <= (20 * textLengthMultiplier)) && (currentColor <= 210)) {
                        currentColor += (colorMultiplier * 3);
                    } else if ((index >= (97 * textLengthMultiplier)) && (currentColor >= 80)) {
                        currentColor -= (colorMultiplier * 2);
                    } else if (index >= 92 * textLengthMultiplier) {
                        currentColor -= colorMultiplier;
                    }
                } else if (letter != ' ') {
                    currentColor = 220;
                }
            }
            else {
                currentColor = 60;
            }

            newSpan.style.color = `rgb(${currentColor}, ${currentColor}, ${currentColor})`


            fogElement.appendChild(newSpan);
        });
    });
};

const snow = () => {
    let counter = 0;
    let alive = false;

    const makeSnow = (variableName) => {
        if (snowed) {
            const newSpan = document.createElement('SPAN');
            const bullet = document.createTextNode('•');
            const fontSize = `${Math.floor(Math.random() * 30) + 10}px`;
            const xPosition = Math.floor(Math.random() * window.innerWidth - 50);
            counter++;
            const currentCounter = counter;
            if (!alive) {
                alive = true
            };

            const positionTransform = () => {
                const currentTop = newSpan.style.top.replace('px', '');

                newSpan.style.top = `${parseInt(currentTop) + 1}px`;
                if ((currentTop == snowBlock.clientHeight + 10) || !snowed) {
                    document.getElementById(currentCounter) && document.getElementById(currentCounter).remove();
                    clearInterval(timedMovement);
                }
            };

            const timedMovement = setInterval(positionTransform, 60);

            newSpan.appendChild(bullet);
            newSpan.classList.add('snow');
            newSpan.style.fontSize = fontSize;
            newSpan.setAttribute('id', counter);
            newSpan.style.left = `${xPosition}px`;
            newSpan.style.top = 0;
            snowBlock.appendChild(newSpan);
            newSpan.classList.add('snowTransform');
            setInterval(positionTransform, 15)
        } else if (!buttonPressed) {
            clearInterval(variableName);
            alive = false;
        }

    };

    let snowOne = setInterval(() => makeSnow(snowOne), 600)
    let snowTwo = setInterval(() => makeSnow(snowTwo), 700)

    window.addEventListener('blur', () => {
        snowed = false;
    });

    window.addEventListener('focus', () => {
        snowed = true;
        if (!alive) {
            snowOne = setInterval(() => makeSnow(snowOne), 600)
            snowTwo = setInterval(() => makeSnow(snowTwo), 700)
        }
    });
}

window.requestAnimationFrame(snow)

fog(snowed, true);