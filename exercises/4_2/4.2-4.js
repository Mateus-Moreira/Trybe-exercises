var n = 5;
var ast = "";
var esp = [];

for (x = 0; x < n; x += 2){
  esp.push (" ");
  
}

for (y = 0; y < n; y += 2){
  esp.shift()
  ast += "*";
console.log(esp.join("") + ast)
ast += "*";
}