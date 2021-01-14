class Food{
    constructor(){
    
        this.image = loadImage("images/Milk.png")
        this.foodStock = 0;

        this.lastFed
    }
    getFoodStock(){
     return this.foodStock();

    }
    updateFoodStock(foodStock){
     
        this.foodStock = foodStock;

    }

   
    deductFood(){
    
        if(this.foodStock >0){
            this.foodStock = this.foodStock-1;
        }

    }

    getFedTime(lastFed){
        this.lastFed = lastFed
    }

    display(){
    
        var x=80 ,y=100

        imageMode()

    }
}