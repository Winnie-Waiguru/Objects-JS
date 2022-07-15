// let fruit= {
//     fruitPriceList:{"Orange": 30, "mango": 15, "avocado": 40},
//     calculateFruitCost:function(fruitName,quantity){
//         if (this.fruitPriceList[fruitName]===undefined){
//             return `${fruitName} is not available`
//         }
//         return `${quantity} ${fruitName} at ${quantity * this.fruitPriceList[fruitName]}`
//         }
// }
// console.log(fruit.calculateFruitCost("apple",3))


class KioskCalc{
    constructor(fruit,quantity){
        this.fruit=fruit
        this.quantity=quantity
        this.fruitPriceList={"orange": 30, "mango": 15, "avocado": 40}
        this.totalCost=function(){
            if (this.fruitPriceList[this.fruit]===undefined){
                return `${this.fruit} is not a available.`
            }
              return `${this.quantity} ${this.fruit} at KES ${this.fruitPriceList [this.fruit]* this.quantity}`
        }

    
    }

}

var kioskCalc =new KioskCalc("pineapple",2)
console.log(kioskCalc.totalCost())