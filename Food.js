class Food {
    constructor(x,y,width,height){
        var foodStock,last_fed;
       
        this.image = loadImage("images/Milk.png");
       
        
       
    }
    getfoodStock(){
       foodStock = dataBase.ref('foodStock');
        foodStock.on("value",readStock); 
        foodStock= data.val();  
    }
    UpdatefoodStock(){
        
    }
    
    display(){
        var i = 0;
        var x = 80,y =100;
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if (this.foodStock !=0){
            for (i = 70; i < foodStock; i=i+30) {
                if(i%10===0){
                    x=80;
                    y=y+50;

                }
                image(this.image,720,220,50,50);
                x=x+30 
              }
              
        }
    }
}