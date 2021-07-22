// Print odds 1-20
var odd = 1;
while(odd<21){
    console.log(odd);
    odd += 2;
}
console.log("------------")

// Decreasing Multiples of 3
for(var i = 100; i > 0; i--){
    if(i%3 == 0){
        console.log(i);
    }
}
console.log("------------")

// Print the sequence
var arr = [4,2.5,1,-0.5, -2, -3.5];
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log("------------")

// Sigma
var sum = 0;
for(var i = 1; i < 101;i++){
    sum += i;
}
console.log(sum);
console.log("------------")

// Factorial
var product = 1;
for(var i = 1; i < 13;i++){
    product *= i;
}
console.log(product);
console.log("------------")