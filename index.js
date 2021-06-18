function renderInventory(inventory) 
{
 var flatList = '';
 
 //access itens in the object and create a list
 for(var index = 0; index < inventory.length; index++)
 {
   var currentDesignerName = inventory[index]['name'];
   var currentObjectsShoeArray = inventory[index]['shoes'];
   
   // access items in the shoe array
   for(var innerIndex = 0; innerIndex < currentObjectsShoeArray.length; innerIndex++)
   {
     var currentShoeName = currentObjectsShoeArray[innerIndex]['name'];
     var currentShoePrice = currentObjectsShoeArray[innerIndex]['price'];

     if(index === inventory.length - 1 && innerIndex === currentObjectsShoeArray.length - 1)
     {
      flatList += currentDesignerName + ', ' + currentShoeName + ', ' + currentShoePrice;
      continue;
     }
     else
     {
      flatList += currentDesignerName + ', ' + currentShoeName + ', ' + currentShoePrice + '\n';
     }
     
   }
 }
 console.log(flatList);
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

renderInventory(currentInventory);