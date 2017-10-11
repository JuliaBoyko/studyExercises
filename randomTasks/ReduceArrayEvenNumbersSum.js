 //[1,2,3,4,5,6] -> [3, 7, 11]

 var newArr = arr.reduce(function(previousValue, currentValue, index) {
   if (index % 2) {

     return previousValue.concat(previousValue + currentValue);

   } else {
     console.log(index);
   }
 }, []);
 console.log(newArr);
