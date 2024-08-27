let numbers = [0,1,2,3,4,5,6,7,8,9]
console.log(
    numbers.map(num => num).reduce((acc,num) => acc + num,0)
)