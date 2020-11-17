let input_number = +prompt("Please input a number", 0);
if(input_number == 0){
    alert("input a number bigger than zero");
}

for (let i=1; i<=input_number; i++){
    if (i % 1 ==0 && input_number % i == 0){
        console.log(i);
    }
}