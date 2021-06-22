var duplicateZeros = function(arr)
{
  var index = 0;
    
  while(index < arr.length)
  {
    var currentItem = arr[index];

    if(currentItem === 0)
    {
      arr.splice(index, 0, 0);
      index+=2;
    }
    else
    {
      index++;
    }
  }
  return arr;
 }