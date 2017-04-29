//Going above 11 itterations crashes the browser
var abba = new thueMorse(1);
var p, n;

function setup() {
    // var side = sqrt(abba.sequence.length);
    // console.log("Side length: "+side);
    // createCanvas(side, side);
    // background(255);
    // n = 0;
    // for(var i = 0; i < side; i++) {
    //     for(var j = 0; j < side; j++) {
    //         if(abba.getElement(n) === 'a') {
    //             point(i, j);
    //         }
    //         n++;
    //     }
    // }
    // console.log("Setup complete");
    // saveCanvas("Thue-Morse "+abba.itterations+" x 5", "png");
    p = createP('');
    n = 0;
}

function draw() {
    p.html(abba.getElement(n++)+' ', true);
}
