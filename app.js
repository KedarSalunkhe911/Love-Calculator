function calculatelove(){

const name1= document.getElementById("name1").value.trim();
console.log(name1);

const name2= document.getElementById("name2").value.trim();
console.log(name2);


if(name1==="" || name2===""){
    alert("please enter both names");

}else{
    const per = Math.floor(Math.random()*101);

    const result = document.getElementById("result");

    result.innerHTML = `${name1} and ${name2}'s love percentage is: ${per}`; 

    if(per < 40){
        result.innerHTML +="<br> not a great match please keeep looking"


    }else if(per>=40 && per<70){
        result.innerHTML += "<br> can give a try";
    }else{
        result.innerHTML +="<br> Great Match";
    }
}

}