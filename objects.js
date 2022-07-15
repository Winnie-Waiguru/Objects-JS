let fruit= {
    fruitPriceList:{"Orange": 30, "mango": 15, "avocado": 40},
    calculateFruitCost:function(fruitName,quantity){
        return `${quantity} ${fruitName} at ${quantity * this.fruitPriceList[fruitName]}`
        }
}
console.log(fruit.calculateFruitCost("avocado",3))

class KioskCalc{
    constructor(fruit,quantity){
        this.fruit=fruit
        this.quantity=quantity
        this.fruitPriceList={"orange": 30, "mango": 15, "avocado": 40}
        this.totalCost=function(){
              return `${this.quantity} ${this.fruit} at KES ${this.fruitPriceList [this.fruit]* this.quantity}`
        }

    
    }

}
var kioskCalc =new KioskCalc("mango",2)

console.log(kioskCalc.totalCost())