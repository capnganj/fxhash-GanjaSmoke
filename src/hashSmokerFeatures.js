class HashSmokeFeatures {
    constructor() {

        //color scheme 
        this.color = {
            name: 'Cool'
        };

        //drives nummber of circles
        this.thickness = {
            name: "",
            value: ""
        }
        this.setThickness();

        //min and max radius multiplier
        this.cough = 0.123;
        this.hack = 0.423;

        //min and max opacity
        this.squint = 0.333;
        this.wince =  0.112;

    }

    setColor(){

    }

    setThickness(){

        //set number of circles to draw
        let t = fxrand();
        this.thickness.value = t;

        //set feature name
        if (t < 0.5) this.thickness.name = "Weak"
        else if ( t < 0.85) this.thickness.name = "Nice"
        else this.thickness.name = "Huge"
    }

    setCoughAndHack(){}

    setSquintAndWince(){}
}

export {HashSmokeFeatures}