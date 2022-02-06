//CAPNGANJ Hash Smoke fxhash generative token
//February, 2022

//imports
import p5 from 'p5';
import { HashSmokeFeatures } from './hashSmokerFeatures';
import { interpolateYlGn } from 'd3-scale-chromatic';

//p5 sketch instance
const s = ( sk ) => {

  //global sketch variable
  let seed = 0; //seed Hash
  let rects = [];

  //sketch setup
  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, sk.windowHeight);
  
    //set the p5 random seed by calling the fxrand function
    seed=sk.int(fxrand() * 100000000); // FXHASH seed rand
    sk.randomSeed(seed); 

    //populate array of objects for rect size
    for (let i = 0; i < 5; i++) {

      //create color and set alpha
      const c = sk.color(interpolateYlGn(fxrand()));
      c.setAlpha(sk.map(fxrand(), 0, 1, 25, 150));

      //properties to construct rects below
      const element = {
        "size": sk.int(sk.random(sk.width/2)),
        "color": c
      };
      rects.push(element);
    }

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
    sk.noStroke();
    sk.rectMode(sk.CENTER);

    //TO DO - draw a radial pattern of circles using 
    rects.forEach(element => {
      sk.fill(element.color);
      sk.rect(sk.width/2,sk.height/2,element.size,element.size);
    });
  };

  //handle window resize
  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight);
  };
};

//pass our sketch to p5js
let myp5 = new p5(s);