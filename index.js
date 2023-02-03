const record = [
    { year: "2015", result: "L"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

  function superbowlWin(obj){
    const result = obj.find(element => element.result ==="W")
        if(result === undefined){
            return undefined
        }else{
            return result.year;
        }
    
  }


  console.log(superbowlWin(record))