let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(arr.map((x) => x + 1));
console.log(arr.filter((x) => x % 3 === 0));
let redu = arr.reduce((pre, curr) => {
    return pre + curr;
}, 11);
console.log(redu);
console.log(arr.find((value) => value % 3 === 0));
console.log(arr.some((value) => value % 3 === 0));
//-------------------------------
let result = [];
result.push(2);
result.unshift(1);
result.push(4);
result  .pop();
console.log(result);

//-------------------------------
const Ex1 = (a,b) => {
    if(a === b) return 3*(a + b);
    return a + b;
}
const Ex2 = (a) => {
    if(a > 19) return 3*(a - 19);
    return Math.abs(a - 19);
}
const Ex3 = (str) => {
    const arr = str.split('');
    const index = arr.indexOf('*');
    let sum = 0;
    arr.forEach( (a) => {
        if(a !== '*'){
        sum += a
        }
    })
    let result = [];
    for(let i = 0; i < 10; i++){
        if((sum+i)%3 === 0){
        arr[index] = i
        result.push(arr.join(''));
         }
    }
    return result;
}
const Ex4 = (str) => {
    const arr = str.split('');
    const size = arr.length;
    const index = arr.indexOf('*');
    const value = [0,2,4,6,8];
    let result = [];
    let sum = 0;
    arr.forEach( (a) => {
        if(a !== '*'){
        sum += a
        }
    })
    if(index === arr.length-1){
        for(let i = 0; i < value.length; i++){
            if((sum+value[i])%3 === 0){
                arr[index] = value[i];
                result.push(arr.join(''));
            }
        }
    }
    else{
        if(value.indexOf(arr[size-1]) !== -1){
            for(let i = 0; i < 10; i++){
                if((sum+i)%3 === 0){
                arr[index] = i
                result.push(arr.join(''));
                 }
            }
        }
        else{
            return [];
        }
    }
    return result;
}




console.log(Ex1(5,10));
console.log(Ex1(5,5));
console.log(Ex2(12));
console.log(Ex2(19));
console.log(Ex2(22));
console.log(Ex3('1*9'));
console.log(Ex3('1234567890*'));
console.log(Ex4('1*9'));
console.log(Ex4('1234567890*'));