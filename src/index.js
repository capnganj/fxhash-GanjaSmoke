//CAPNGANJ Hash Smoke fxhash generative token
//February, 2022

//imports
import p5 from 'p5';
import { HashSmokeFeatures } from './hashSmokerFeatures';

//p5 sketch instance
const s = ( sk ) => {

  //global sketch variable
  let seed = 0; //seed Hash
  let sizee = 0; // rect size
  let col = 0; //color

  //sketch setup
  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, sk.windowHeight);
  
    //set the p5 random seed by calling the fxrand function
    seed=sk.int(fxrand() * 100000000); // FXHASH seed rand
    sk.randomSeed(seed); 

    //TODO choose the @capnganj d3 color scheme
    //Color feature in fxhash

    //TODO set how dense this hash rip is
    //Thickness feature in fxhash

    //TODO - radius min and max properties; opacity min and max values
    //Cough: min radius
    //Hack: max radius
    //Squint: min opacity
    //Wince: max opacity

  
    //demo how to set color and size features / vars using the p5 random
    col=sk.int(sk.random(255));
    sizee=sk.int(sk.random(sk.width/2));

    //new featuresClass
    let feet = new HashSmokeFeatures();
   
  // FX Features
    window.$fxhashFeatures = {
      "Depth" : feet.depth.tag,
      "Color" : feet.color.name,
      "Cough" : feet.cough.tag,
      "Hack" : feet.hack.tag,
      "Squint": feet.squint.tag,
      "Laugh" : feet.laugh.tag
    };

    console.log(window.$fxhashFeatures);
  };


  //sketch draw function 
  sk.draw = () => {

    //TO DO - set the background color.  This should be a desaturated inverse color average of the colors in the d3 color scheme
    sk.background(255);


    //TO DO - draw a radial pattern of circles using 

    //set default stroke and fill?  this should be removed
    sk.stroke(0);
    sk.fill(col);
    
    //set rect mode to center and draw that sucker
    sk.rectMode(sk.CENTER);
    sk.rect(sk.width/2,sk.height/2,sizee,sizee);
  };

  //handle window resize
  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight);
  };
};

//pass our sketch to p5js
let myp5 = new p5(s);