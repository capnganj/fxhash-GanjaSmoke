import { interpolateCool, interpolateInferno, interpolateMagma, interpolateWarm, interpolateViridis } from 'd3-scale-chromatic'

class HashSmokeFeatures {
    constructor() {

        //color scheme 
        this.color = {
            name: ""
        };
        this.setColor();

        //drives nummber of circles
        this.depth = {
            tag: "",
            value: ""
        }
        this.setDepth();

        //min and max initial radius multiplier
        this.cough = {
            tag: "",
            value: ""
        };
        this.setCough();

        //min and max radius factor in new branch
        this.squint = {
            tag: "",
            value: ""
        };

        //spread factor
        this.laugh =  {
            tag: "",
            value: ""
        };
        this.setSquintAndLaugh();

    }

    interpolateFn(val){
        switch (this.color.name) {
            case "Cool": return interpolateCool(val);
            case "Warm": return interpolateWarm(val);
            case "Viridis": return interpolateViridis(val);
            case "Magma": return interpolateMagma(val);
            case "Inferno": return interpolateInferno(val);
            default:
                return "high"
        }
    }

    setColor(){
        let c = fxrand();
        
        if( c < 0.5){
            this.color.name = "Warm"
        }
        else if( c < 0.65){
            this.color.name = "Cool"
        }
        else if( c < 0.8){
            this.color.name = "Viridis"
        }
        else if( c < 0.9){
            this.color.name = "Magma"
        }
        else {
            this.color.name = "Inferno"
        }
    }

    setDepth(){
        let t = fxrand();
        this.depth.value = t;

        //set feature tag value
        if (t < 0.15) {
            this.depth.tag = "Weak"
            this.depth.value = 6
        }
        else if ( t < 0.85) {
            this.depth.tag = "Nice"
            this.depth.value = 7
        }
        else {
            this.depth.tag = "Huge"
            this.depth.value = 8
        }
    }

    setCough(){
        let c = fxrand();
        this.cough.value = c;

        //set feature tag values
        if (c < 0.4) this.cough.tag = "Smooth";
        else if (c < 0.6) this.cough.tag = "Wheeze";
        else if (c < 0.85) this.cough.tag = "Cough";
        else this.cough.tag = "Hack"


    }

    setSquintAndLaugh(){
        let s = fxrand();
        let l = fxrand();
        this.squint.value = s;
        this.laugh.value = l;

        //set feature tag values
        if (s < 0.4) this.squint.tag = "None";
        else if (s < 0.6) this.squint.tag = "Stoner Eyes";
        else if (s < 0.85) this.squint.tag = "Squinty";
        else this.squint.tag = "Eyes Closed"

        if (l < 0.5) this.laugh.tag = "Chuckle";
        else if (l < 0.75) this.laugh.tag = "Hearty";
        else if (l < 0.9) this.laugh.tag = "Belly";
        else this.laugh.tag = "Can't stop laughing";
    }
}

export {HashSmokeFeatures}