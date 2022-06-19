const backgroundBlock = document.getElementById('backgroundBlock');
const rain = () => {
    let counter = 0;
    let effect = true;
    let alive = false;

    const makeDroplet = (name) => {
        if (effect && backgroundBlock.children.length <= 35) {
            const newSpan = document.createElement('SPAN');
            const xPosition = Math.floor(Math.random() * backgroundBlock.clientWidth - 50);
            const currentCounter = counter;
            let gravity = 0;
            const speed = 3;
            counter++;
            if (!alive) {
                alive = true
            };

            const positionTransform = () => {
                const currentTop = newSpan.style.top.replace('px', '');
                gravity += 0.025;
                newSpan.style.top = `${parseInt(currentTop) + (speed + gravity)}px`;
                if ((currentTop >= backgroundBlock.clientHeight)) {
                    document.getElementById(currentCounter) && document.getElementById(currentCounter).remove();
                    clearInterval(timedMovement);
                }
            };

            const timedMovement = setInterval(positionTransform, speed * 10);

            newSpan.classList.add('rain');
            newSpan.setAttribute('id', counter);
            newSpan.style.left = `${xPosition}px`;
            newSpan.style.top = 0;
            backgroundBlock.appendChild(newSpan);
            setInterval(positionTransform, 15)
        } else {
            clearInterval(name);
            alive = false;
        }
    };

    let dropletOne = setInterval(() => makeDroplet(dropletOne), 600)
    let dropletTwo = setInterval(() => makeDroplet(dropletTwo), 300)
    let dropletThree = setInterval(() => makeDroplet(dropletThree), 1000)
    let dropletFour = setInterval(() => makeDroplet(dropletFour), 400)

    window.addEventListener('blur', () => {
        effect = false;
    });
    window.addEventListener('focus', () => {
        effect = true;
        if (!alive) {
            dropletOne = setInterval(() => makeDroplet(dropletOne), 600)
            dropletTwo = setInterval(() => makeDroplet(dropletTwo), 300)
            dropletThree = setInterval(() => makeDroplet(dropletThree), 1000)
            dropletFour = setInterval(() => makeDroplet(dropletFour), 400)
        }
    });
}

const randomNumber = (roof) => Math.floor(Math.random() * roof);

const bloom = () => {
    let counter = 0;

    const makeStar = () => {
        const newSpan = document.createElement('SPAN');
        const xPosition = randomNumber(backgroundBlock.clientWidth - 50);
        const yPosition = randomNumber(backgroundBlock.clientHeight);
        const delay = randomNumber(1000) + 5000;
        counter++;

        newSpan.classList.add('star');
        newSpan.setAttribute('id', counter);
        newSpan.style.left = `${xPosition}px`;
        newSpan.style.animationDuration = `${delay + (counter * 100)}ms`;
        newSpan.style.top = `${yPosition}px`;
        backgroundBlock.appendChild(newSpan);
    };

    for (index = 0; index < 26; index++) {
        makeStar();
    }

};