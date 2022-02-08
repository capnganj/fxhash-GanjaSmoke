//CAPNGANJ Hash Smoke fxhash generative token
//February, 2022

//imports
import p5 from 'p5';
import { HashSmokeFeatures } from './hashSmokerFeatures';
import { interpolateYlGn } from 'd3-scale-chromatic';

//p5 sketch instance
const s = ( sk ) => {

  //global sketch variables
  let cloud = [];
  let hyp = -1.0;

  //sketch setup
  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, sk.windowHeight);

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

    //Generate cloud data
    hyp = sk.windowWidth + sk.windowHeight / 2;
    drawCloud(sk.windowWidth/2, sk.windowWidth/2, hyp * 0.222, 7);
    console.log("fxhashFeatures", window.$fxhashFeatures);
    //console.log("cloudData", cloud);
  };


  //sketch draw function 
  sk.draw = () => {

    //TO DO - set the background color.  This should be a desaturated inverse color average of the colors in the d3 color scheme
    sk.background(0);
    sk.noStroke();
    

    //TO DO - draw a radial pattern of circles using 
    cloud.forEach(element => {
      sk.ellipseMode(sk.CENTER);
      sk.fill(element.color);
      sk.ellipse(element.x, element.y, element.size, element.size);
    });
  };

  //recursive smoke cloud
  function drawCloud( x, y, rad, num){
    const c = sk.color(interpolateYlGn(fxrand()));
    c.setAlpha(sk.map(fxrand(), 0, 1, 50, 255/num));
    cloud.push(
      {
        'color': c,
        'size' : rad * 2,
        'x' : x,
        'y' : y
      }
    );
    if( num > 1 ){
      num = num - 1;
      let branch = sk.map(fxrand(), 0, 1, 2, 6);
      for (let i = 0; i < branch; i++) {
        let a = sk.map(fxrand(), 0, 1, 0, sk.TWO_PI);
        let newX = x + Math.cos(a) * (hyp * 0.0222) * num;
        let newY = y + Math.sin(a) * (hyp * 0.0222) * num;
        drawCloud(newX, newY, sk.map(fxrand(),0,1,rad/1.5,rad/3), num);
      }
    }
  }

  //handle window resize
  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight);
    console.log("windowWidth", sk.windowWidth);
    console.log("width", sk.width);

  };
};

//pass our sketch to p5js
let myp5 = new p5(s);