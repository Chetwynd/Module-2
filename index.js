/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

function duplicateZeros(arr)
{
 // iterate through the array
 for(var index = 0; index < arr.length; index++)
 {
   var currentItem = arr[index];

   if(currentItem === 0)
   {
     arr.splice(index, 0, 0);
   }
 }
 console.log(arr);
};

var array = [1,0,2,3,0,4,5,0];

duplicateZeros(array);