var entries = [{
  "name": "file1",
  "isFile": true
}, {
  "name": "file2",
  "isFile": false
}];

function transparentWrapping(f) {
  return function() {
    console.log("f:", f);
    return f.apply(null, arguments);
  };
}

function func(arg) {
  console.log("arg:", arg);
}

transparentWrapping(func)(entries);
