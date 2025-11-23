let nums=[10,3,7,20,13,2];
let squares=nums.map(n=>n*n);
console.log(squares);
let primes=nums.filter(n=>{
    if(n<2) return false;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0) return false;
    }
    return true;
}
);
console.log(primes);
let total=nums.reduce((sum,n)=>sum+n,0);
console.log(total);
let sort=nums.slice().sort((a,b)=>b-a);
console.log(sort);