function listAllBlackShoes(inventory) 
{
 var flatList = '';
 
 // iterate through the inventory object
 for(var index = 0; index < inventory.length; index++)
 {
   var currentDesignerName = inventory[index]['name'];
   var currentShoeArray = inventory[index]['shoes'];
   
   for(var shoeIndex = 0; shoeIndex < currentShoeArray.length; shoeIndex++)
   {
     var currentShoeType = currentShoeArray[shoeIndex]['name'];
     var currentShoePrice = currentShoeArray[shoeIndex]['price'];
     
     if(currentShoeType.includes('black'))
     {
       if(shoeIndex === currentShoeArray.length - 1)
       {
         flatList += currentDesignerName + ', ' + currentShoeType + ', ' + currentShoePrice;
         continue;
       }
       else
       {
         flatList += currentDesignerName + ', ' + currentShoeType + ', ' + currentShoePrice + '\n'; 
       }
     }
   }      
  } 
  return flatList;
}

//Create helper functions if needed

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

var expected =  listAllBlackShoes(currentInventory);

console.log(expected);

