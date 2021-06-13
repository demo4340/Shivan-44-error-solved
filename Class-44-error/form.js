class Form{

    constructor() {
          
        this.nameInput = createInput('Your Name');

        /*this.kit1 = createSprite(dWidth/2 - 100, dHeight /2 + 200, 50, 50);
        this.kit2 = createSprite(dWidth/2, dHeight/2 + 200, 50, 50);
        this.kit3 = createSprite(dWidth/2 + 100, dHeight/2 + 200, 50, 50);*/

        this.kit1 = createButton("KIT1");
        this.kit2 = createButton("KIT12");
        this.kit3 = createButton("KIT3");

        this.text1 = createElement('h2');
        this.goalText = createElement('h2');

        this.kits = createElement('h2');


    }

    display(){
        
        strokeWeight(1);
        stroke("white");

        //text("Name : ", dWidth/2 - 200, dHeight/2 - 200);
        
        this.text1.html("Name : ");
        this.text1.style('color', "white");
        this.text1.position(dWidth/2 - 200, dHeight/2 - 230);
        this.nameInput.position(dWidth/2 - 100, dHeight/2 - 200);

        
        this.kit1.position(dWidth/2 - 100, dHeight /2 + 200, 50, 50);
        this.kit2.position(dWidth/2, dHeight/2 + 200, 50, 50);
        this.kit3.position(dWidth/2 + 100, dHeight/2 + 200, 50, 50);


        //text("Goal : ", dWidth/2 - 200, dHeight/2 - 100);
        this.goalText.html("Goal : ");
        this.goalText.style('color', "white");
        this.goalText.position(dWidth/2 - 200, dHeight/2 - 100);
        //text(" Abcefghijklmno", dWidth - 100, dHeight/2 - 100);

        //text("Kits : ", dWidth/2 - 200, dHeight/2 + 200)
        this.kits.html("Kits : ");
        this.kits.style('color', "white");
        this.kits.position(dWidth/2 - 200, dHeight/2 + 170);

        this.kit1.mousePressed(()=>{
            console.log("kit1");
        })

    }

}
