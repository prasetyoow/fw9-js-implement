    function divideAndSort (num) {
        const string = num.toString().split(0)
        const result = []
        for(let i = 0; i < string.length; i++){
          result.push(string[i].split('').sort(function(a,b){return a - b}).join(''))
        }
        console.log(result.join(''))
      }

divideAndSort(595656015946605)
    


