//CAPNGANJ Hash Smoke fxhash generative token
//February, 2022

//imports
import p5 from 'p5';
import { HashSmokeFeatures } from './hashSmokerFeatures';

//p5 sketch instance
const s = ( sk ) => {

  //global sketch variables
  let cloud = [];
  let hyp = -1.0;
  let feet = {};

  //sketch setup
  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, sk.windowHeight);

    //new featuresClass
    feet = new HashSmokeFeatures();

    //color drives palette
    //depth drives number of recursive draw cloud layers
    //cough drives initial circle radius size
    //squint drives smallest circle radius size
    //laugh drives how far the could spreads out from the center 
   
    // FX Features
    window.$fxhashFeatures = {
      "Depth" : feet.depth.tag,
      "Palette" : feet.color.name,
      "Cough" : feet.cough.tag,
      "Squint": feet.squint.tag,
      "Laugh" : feet.laugh.tag
    };

    //Generate cloud data
    const cgh = sk.map(feet.cough.value, 0, 1, 0.2, 0.25)
    hyp = sk.windowWidth + sk.windowHeight / 2;
    drawCloud(
      0, 
      0, 
      hyp * 0.222, 
      feet.depth.value
    );
    console.log("fxhashFeatures", window.$fxhashFeatures);
    console.log("HashSmokeFeatures", feet);
  };


  //sketch draw function 
  sk.draw = () => {

    //TO DO - set the background color.  This should be a desaturated inverse color average of the colors in the d3 color scheme
    sk.background(0);
    sk.noStroke();
    

    //draw circles - keep centered 
    cloud.forEach(element => {
      sk.ellipseMode(sk.CENTER);
      sk.fill(element.color);
      sk.ellipse(
        sk.windowWidth/2 + element.x, 
        sk.windowHeight/2 + element.y, 
        element.size, element.size
      );
    });
  };

  //recursive smoke cloud
  function drawCloud( x, y, rad, num){
    const c = sk.color(feet.interpolateFn(fxrand()));
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
        //use the laugh param to drive how far the cloud spreads out
        const spread = hyp * sk.map(feet.laugh.value, 0, 1, 0.02, 0.025);
        let newX = x + Math.cos(a) * spread * num;
        let newY = y + Math.sin(a) * spread * num;
        //use the squint param to drive smallest radius
        const minRadFactor = sk.map(feet.squint.value, 0, 1, 1.4, 1.6);
        const maxRadFactor = sk.map(feet.squint.value, 0, 1, 2.7, 3.3)
        drawCloud(
          newX, newY, 
          sk.map(fxrand(),0,1,rad/minRadFactor,rad/maxRadFactor), 
          num
        );
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