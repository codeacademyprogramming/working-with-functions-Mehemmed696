function fibonocci (d){
    let a=0;
    let b=1;
    result=b;
    for(let i=1; i < d;i++){
        console.log(result +  "<\n>");
        result=a+b;
        a=b;
        b=result;
    }
  
}
fibonocci(10);

function fib(n){
    if(n<3) return 1;

    return fib(n-1) + fib(n-2);
}
console.log(fib(7));
// fibonocci(5)