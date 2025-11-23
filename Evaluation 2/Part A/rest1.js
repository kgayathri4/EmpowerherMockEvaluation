function sumAll(...numbers) {
    return numbers.reduce((sum,n)=>sum+n,0);
}
console.log(sumAll(1,2,3,4));