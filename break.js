// for(let i = 0; i < 15; i++){
//     console.log(i)
//     if(i >= 10){
//         console.log('Vombola');
//         break;
//     }
// }

// let n = 54;
// while(n > 25){
//     console.log(n);
    
//     if(n < 50){
//         break;
//     }

//     n--;
// }

// continue --> skip rest of thr code for this iteration.

// for(let i = 1; i < 10; i++){
//     if(i % 2 == 1){
//         continue;
//     }
//     console.log(i);
// }

let n = 0;
while( n < 50) {
    n++;
    if( n % 5 != 0){
        continue;
    }
    console.log(n);
}