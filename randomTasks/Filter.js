var entries = [{
  "name": "file1",
  "isFile": true
}, {
  "name": "file2",
  "isFile": false
}];

entries = entries.filter(function(entry) {
  return entry.isFile ? entry : '';
});

console.log(entries);
