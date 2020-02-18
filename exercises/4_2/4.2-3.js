var n = 5;
var ast = "";
var esp = [];

for (x = 0; x < n; x++){
  esp.push (" ");
  
}

for (y = 0; y < n; y++){
  esp.shift()
  ast += "*";
console.log(esp.join("") + ast)
}