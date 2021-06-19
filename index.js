function findLacedWords(Inventory)
{// accumulator
  var resultArray = [];
  
  // iterate through the inventory to look at each shoe name
  for(var index = 0; index < Inventory.length; index++)
  {
    var currentShoeObject = Inventory[index]['shoes'];
    // iterate through every shoe type in the shoe object
    for(var shoeNameIndex = 0; shoeNameIndex < currentShoeObject.length; shoeNameIndex++)
    {
      var currentShoe = currentShoeObject[index]['name'];
      
      if(currentShoe.includes('lace'))
      {
       var currentShoeToArray = currentShoe.split('');
       var newObject = {};
      
       newObject['nameWords'] = currentShoeToArray;
      
       // iterate through the currentShoeToArray to find a match for the word 'lace'
       for(var shoeToArrayIndex = 0; shoeToArrayIndex < currentShoeToArray.length; shoeToArrayIndex++)
       {
         var currentShoeArrayItem = currentShoeToArray[shoeToArrayIndex];
         var currentIndex = shoeToArrayIndex;
        
         var currentShoeArrayItem = currentShoeToArray[shoeToArrayIndex];
         if(currentArrayItem.includes('lace'))
         {
           newObject['targetWordIndex'] = currentIndex;
         }
       }
       resultArray.push(newObject);
      }// end of if statement
     }
  }
  return resultArray;
}