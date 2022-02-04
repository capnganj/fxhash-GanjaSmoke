//FXHASH TEMPLATE BOILERPLATE

// these are the variables you can use as inputs to your algorithms
//console.log(fxhash)   // the 64 chars hex number fed to your algorithm
//console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

// this code writes the values to the DOM as an example
// const container = document.createElement("div")
// container.innerText = `
//   random hash smoke: ${fxhash}\n
//   some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
// `
// document.body.prepend(container)


//CAPNGANJ webpack p5 oh yeah
import p5 from 'p5';

const s = ( sk ) => {

  let seed = 0; //seed Hash
  let sizee = 0; // rect size
  let col = 0; //color

  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, sk.windowHeight);
  
    seed=sk.int(fxrand() * 100000000); // FXHASH seed rand
    sk.randomSeed(seed); 
  
    col=sk.int(sk.random(255));
    sizee=sk.int(sk.random(sk.width/2));
   
  // FX Features
    window.$fxhashFeatures = {
   "Size" : sizee,
   "Color" : col,
    };
  };

  sk.draw = () => {
    sk.background(255);

    sk.stroke(0);
    sk.fill(col);
    
    sk.rectMode(sk.CENTER);
    sk.rect(sk.width/2,sk.height/2,sizee,sizee);
  };

  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight);
  };
};

let myp5 = new p5(s);