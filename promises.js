const getWeather=function(){
  return new Promise(
    function(res,rej){
    setTimeout(function(){
      res("done11")
    },1000)
    })
} 


const getIcon=function(data){
  return new Promise(
    function(res,rej){
    setTimeout(function(){
      res(data+" done22")
    },1000)
    })
} 

const finish=function(data){
    console.log("data3-> "+data)
}

getWeather().then(getIcon).then(finish)
