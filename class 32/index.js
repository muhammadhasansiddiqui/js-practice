var work = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
var  password = "";

for (var i = 0; i < 10; i++) {
    var work = Math.floor(Math.random() * work.length);
    password += work;}
    
    console.log(password);