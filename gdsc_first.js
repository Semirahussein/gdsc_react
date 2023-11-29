    var name="named";
let age2=55;
const age3=66;
for(let i=0;i<2;i++){
    name="theName";
    console.log(name);
let age2=77; //if there is no "let" written ,the updated value will be printed.
    console.log(age2);
    
    console.log(age3);

}
console.log(age2);
console.log(age3);
//let type=typeof(age2);
console.log("the type is:"+typeof(age2));
let aged=0;
let aged2=[];
if(aged==aged2){
    console.log("it's true,'=='this operator doesn't check whether thhe tyoe is equal,but comparesthe value(0 and [] are both zeros")
}if(aged===aged2){
    console.log("it's also true")
}
else{
    console.log("'==='this operator checks whether the type is also equal")

}


function ages(){
    var names="names"
    console.log(names);

}
//BMI_Calculator
//needs to use the use string library ngr
//input mass and height from user using "prompt" command[ prompt("what's ur mass")]
const mass=prompt("what's ur mass?") //"the + sign is to change from string to integer"
const height=prompt("what's ur height?")
const bmi=mass/(height*height);
console.log("your BMI is:"+bmi);



//const and let key words are block scopes:if(),for()... 
//var key word is function scoped: function()
//hoisting:variables that are declareed with key word var , the comp would know them before initializing them