class Food{
   
    constructor(foodStock, lastFed){
        this.foodStock = foodStock;
        this.lastFed = lastFed;
        this.milkImage = loadImage("images/Milk.png");
    }

    display(){
        // display bottle image
        fill(255, 255, 254);
        textSize(15);
        if(this.lastFed >= 12){
            text("Last Fed: " + this.lastFed%12 + " PM", 350, 30);
        }else if(this.lastFed ==0){
            text("Last Fed: 12 AM", 350, 30);
        }else{
            text("Last Fed: " + this.lastFed + " AM", 350, 30);
        }

       
        //console.log(this.lastFed)

        imageMode(CENTER);
        image(this.milkImage, 720, 220, 70, 70);

        if(this.foodStock!=0){
            var x = 80;
            var y = 200;
            for(var i=0; i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y = y+50;
                }
                image(this.milkImage, x, y, 50, 50);
                x = x+30;
            }
        }



    }

    getFoodStock(){
        return this.foodStock;
    }

    getLastFed(){
        return this.lastFed;
    }

    updateLastFed(lastFed){
        this.lastFed = lastFed;        
    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    addFoodStock(){
        this.foodStock++;
    }

    deductFood(){
        this.foodStock--;
    }
    
   
}