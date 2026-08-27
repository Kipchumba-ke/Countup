function rangeOfNumbers(startNum, endNum){
  let arr = []
  if (startNum > endNum) {return []}
  if(startNum === endNum){
    return [startNum]
  }else{
    arr = rangeOfNumbers(startNum, endNum -1 )
    arr.push(endNum)
    return arr
  }
}
console.log(rangeOfNumbers(1, 5))
console.log(rangeOfNumbers(9, 8))
