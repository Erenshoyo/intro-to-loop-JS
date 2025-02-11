let num = 1;

while(num <= 10){
    console.log(num);

    if(num % 2 === 0){
        console.log('Even Number: ', num);
    }
    else if(num % 2 === 1){
        console.log('Odd Number: ', num);
    }
    num++;
}