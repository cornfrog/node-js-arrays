const testArray = [0,1,2,3,4,5,6,7,8,9,10];




const oddNums = testArray.filter((element) => {
  return element % 2 !== 0;
}) 

const evenNums = testArray.filter((element) => {
  return element % 2 === 0;
})

console.log(`testArray => ${testArray}`);
console.log(`oddNums => ${oddNums}`);
console.log(`evenNums => ${evenNums}`);
