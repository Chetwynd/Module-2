// Flip every pair of characters in a string.


// Example:
// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
function flipPairs(message)
{
 var reversedTextMessage = '';
 var messageArray = [];

 messageArray = message.split(' ');

 console.log(messageArray);

 return reversedTextMessage;
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);

console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

