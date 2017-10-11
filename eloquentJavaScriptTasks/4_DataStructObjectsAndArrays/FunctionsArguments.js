var func = function() {
  //	console.log("type = " + typeof arguments);
  //  console.log(arguments.length);
  //  console.log(arguments);
  for (event in arguments) console.log(arguments[event]);

};
func(1, 2);
