
// setInterval(time,1000)
// setTimeout(time,1000)//here will be diplay once by using setTimeOut 

function time(){
    let d=new Date();
    console.log(d.getHours()+ ":" + d.getMinutes()+":"+d.getSeconds());
    
}


setInterval(time,3000)//here will be diplay again and again after each seconds  by using setInterval 

function time(){
    let d=new Date();
    console.log(d.getHours()+ ":" + d.getMinutes()+":"+d.getSeconds());
    
}