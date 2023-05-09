//1 
  randArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  function separateOddAndEven(arr){
        const evenNum =[];
        const oddNum =[];
        
        for (let i = 0 ; i < arr.length; i++){
            if (arr[i] % 2 === 0){
                evenNum.push(arr[i]);
            } else {
                oddNum.push(arr[i]);
            }
        }

        return [evenNum, oddNum];
  }


console.log(separateOddAndEven(randArray))


//2
function primeCheck(arr){
    primeNum = []
    for (let i=0 ; i < arr.length; i++){
        if (isPrime(arr[i])){
        primeNum.push(arr[i]);
        }
    }
    return primeNum;
}

function isPrime(num){
    if (num < 2){
        return false;
    }
    for (let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true
}

console.log(primeCheck(randArray))