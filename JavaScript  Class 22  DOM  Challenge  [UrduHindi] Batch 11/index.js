var input = "{[()]}";
var arr = [];

for (var i = 0; i < input.length; i++) {
    if (input[i] == "(" || input[i] == "{" || input[i] == "[") {
        arr.push(input[i]);
    }
    

}
console.log(arr);
    
    
