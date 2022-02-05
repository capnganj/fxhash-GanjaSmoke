class HashSmokeFeatures {
    constructor() {

        //color scheme 
        this.color = {
            name: 'Cool'
        };

        //drives nummber of circles
        this.depth = {
            tag: "",
            value: ""
        }
        this.setDepth();

        //min and max radius multiplier
        this.cough = {
            tag: "",
            value: ""
        };
        this.hack = {
            tag: "",
            value: ""
        };
        this.setCoughAndHack();

        //min and max opacity
        this.squint = {
            tag: "",
            value: ""
        };
        this.laugh =  {
            tag: "",
            value: ""
        };
        this.setSquintAndLaugh();

    }

    setColor(){

    }

    setDepth(){
        let t = fxrand();
        this.depth.value = t;

        //set feature tag value
        if (t < 0.5) this.depth.tag = "Weak"
        else if ( t < 0.85) this.depth.tag = "Nice"
        else this.depth.tag = "Huge"
    }

    setCoughAndHack(){
        let c = fxrand();
        let h = fxrand();
        this.cough.value = c;
        this.hack.value = h;

        //set feature tag values
        if (c < 0.4) this.cough.tag = "Small";
        else if (c < 0.6) this.cough.tag = "Medium";
        else if (c < 0.85) this.cough.tag = "Large";
        else this.cough.tag = "XL"

        if (h < 0.4) this.hack.tag = "Small";
        else if (h < 0.6) this.hack.tag = "Medium";
        else if (h < 0.85) this.hack.tag = "Large";
        else this.hack.tag = "XL"


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
        else this.laugh.tag = "Can't stop laughing"
    }
}

export {HashSmokeFeatures}