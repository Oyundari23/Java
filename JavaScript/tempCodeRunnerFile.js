 const numbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
    let max =numbers[0]; 
    for (i=0; i=numbers.length; i++){
        if (numbers[i]> max ){
        max = numbers[i];
    }
}
console.log ("The biggest number is:", max)