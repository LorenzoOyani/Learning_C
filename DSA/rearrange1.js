
const output = index.map(i => arr[i]);



var arr = [50, 40, 70, 60, 90]
var index = [3, 0, 4, 1, 2]

reorder(arr, index, n);

document.write("Reordered array is: ");
document.write("<br>")
for( var i = 0; i < n; i++) document.write(arr[i] + " ")

document.write("<br>")
document.write("Modified index array is: ")
document.write("<br>")
for(var i = 0; i < n; i++) document.write(index[i] + " ");