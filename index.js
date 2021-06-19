function calculateAveragePricePerDesigner(inventory) 
{
 // accumulators
 var averageCostOfShoesObject = {};
 var designerAveragePriceArray = [];

 // iterate through the inventory object to access each item
 
 for(var index = 0; index < inventory.length; index++)
 {
   var currentDesigner = inventory[index]['name'];
   var currentShoesObject = inventory[index]['shoes'];
   var averagePrice = 0;
   var shoeCount = 0;
   var sum = 0;
   var newObject = {};
  
   for(var priceIndex = 0; priceIndex < currentShoesObject.length; priceIndex++)
   {
      sum += currentShoesObject[priceIndex]['price'];
      shoeCount++;
   }
   averagePrice = sum / shoeCount;
   
   newObject['name'] = currentDesigner;
   newObject['averagePrice'] = averagePrice;
   
   designerAveragePriceArray.push(newObject);
 }
 
 averageCostOfShoesObject['designers'] = designerAveragePriceArray;
 
 return averageCostOfShoesObject;
}

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var expected =  calculateAveragePricePerDesigner(currentInventory);

console.log(expected);

