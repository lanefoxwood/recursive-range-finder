function rangeOfNumbers(startNum, endNum) {
    if(endNum - startNum === 0){
        return [startNum];
    } else {
        //we want the difference between endNum and startNum to be the number of times(n) that we push onto the array.
        const arr = rangeOfNumbers(startNum + 1, endNum)
        arr.unshift(startNum); // OR endNum - 1 then arr.push(endNum)
        return arr;
    }
  };