const getWeather=function(){
  return new Promise(
    function(res,rej){
    setTimeout(function(){
      res("done11")
    },3000)
    })
} 


const getIcon=function(data){
  return new Promise(
    function(res,rej){
    setTimeout(function(){
      res(data+" done22")
    },2000)
    })
} 

const finish=function(data){
    console.log(data+" data33")
}

getWeather().then(getIcon).then(finish)//"done11 done22 data33"

///////////////////////////////////////////

const getWeather2=function(){
  let x  
  setTimeout(function(){
      x="done11"
    },3000)
  console.log(x)
  return x;
} 


const getIcon2=function(data){
  let y;  
  setTimeout(function(){
      y=data+" done22"
    },2000)
  console.log(y)
  return y
} 

const finish2=function(data){
    console.log(data+"  data33")
}

const x1=getWeather2();
const x2=getIcon2(x1);
finish2(x2)
// undefined
// undefined
//"undefined  data33"
