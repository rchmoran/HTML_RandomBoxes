'use strict';

/**
 * 
 * @param {number} min 
 * @param {numer} max 
 * function to create a random number in a (min,max) range
 */
function getRandomumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * function to modify the elements size, position, transition velocity and color background
 */
function gotToRandom() {
    //variables declaration
    const babies = document.querySelectorAll("div.baby"); //obtaining the div.baby element from the html code
    
    const viewPortWidth = window.innerWidth;    //obtaining the window width
    const viewPortHeigth = window.innerHeight;  //obtaining the window heigth
    for (const baby of babies) {
        const { width, height } = baby.getBoundingClientRect();//baby's width and heigth obtained by destructuring
        //setting an aleatoty element size
        baby.style.fontSize = getRandomumber(1, 9) + 'rem';

        //setting an aleatory transition time
        baby.style.transition = getRandomumber(1, 6) + 's';

        //setting the aleatory posision of the element
        baby.style.left = getRandomumber(0, viewPortWidth - width) + 'px';
        baby.style.top = getRandomumber(0, viewPortHeigth - height) + 'px';
    }

    //setting an aleatory backgroundColor and color transition
    document.body.style.transition = getRandomumber(1, 6) + 's';
    document.body.style.backgroundColor = `rgb(${getRandomumber(0, 255)},${getRandomumber(0, 255)},${getRandomumber(0, 255)})`

}

//excuting the goToRandom function in 1.5 s interval
gotToRandom();
setInterval(gotToRandom, 1500);




