
//var arr = [1, 2, 3, 4, 5];
var j = 4;
/*while(j = arr.lenght){
    console.log(arr[j]);
    j++;
}*/
/*do{
    console.log(arr[j]);
    j++;
}while(j<arr.lenght);*/

//break continue

/*for(var i =0; i<arr.length; i++){
    if(i==2){
       // break;
       continue;
    }
    console.log(arr[i]);
}*/

var  myArr = ["fan", "camera", 34, null, true];
//Array Methods
//console.log(myArr.length);
//myArr.pop();
//myArr.push("Harry");
//myArr.shift();
const newLen = myArr.unshift("Harry");
//console.log(myArr);
//string methods
var mylovelyString = "Welcome To JavaScript To";
/*console.log(mylovelyString.length);
console.log(mylovelyString.indexOf("To"));
console.log(mylovelyString.lastIndexOf("To"));*/
//console.log(mylovelyString.slice(0,3));
d = mylovelyString.replace("JavaScript" , "Java");
//console.log(d, mylovelyString);
/*var myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());*/

//Dom Manupulation
var elem = document.getElementById('click');
//console.log(elem);
var elemclass = document.getElementsByClassName("container");
//console.log(elemclass);
//elemclass[0].style.background = "yellow";
elemclass[0].classList.add("bg-primary");
//console.log(elem.innerHTML);
//console.log(elem.innerText);
//console.log(elemclass[0].innerHTML);
/*tn = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innertext = "This is a created para";
tn[0].appendChild(createdElement);*/

//selecting using querry
/*sel = document.querySelector('.container');
console.log(sel);
sel = document.querySelectorAll('.container');
console.log(sel);*/

//Event
/*function clicked(){
    console.log('The button was clicked');
}
window.onload = function(){
    console.log('The document was loaded')
}

firstContainer.addEventListner('click', function(){
    console.log("Clicked Hua");
})*/

//SetTimeout and Setinterval
//Arrow functions
/*function summ(a, b){
    return a+b;
}*/
/*summ =(a, b)=>{
    return a+b;
}
logkaro= ()=>{
    console.log("I am your log");
}
    
    setInterval(logkaro, 1000);*/

    //clr = setInterval(logkaro, 1200000);

    //local storage
   /* localStorage,setItem('name', 'harry')
    localStorage
    localStorage.getItem('name');*/

    //JSON
   /* obj = {name: "harry", length:1}
    jso = JSON.stringify(obj);
    console.log(jso);
    console.log( typeof jso);*/
    
    //Template literals - Backticks
   // a = 34;
    //console.log('this is my $(a)')
