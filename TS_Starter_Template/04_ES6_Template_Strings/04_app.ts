/*
2 template String
Instead of using string Concatenation Operator for joining two or more
string Literals Template Strings are best alternative.In
this we use`(back tick).
 */
//create a car object and prepares a template sting using string concatenation and template sting

let car={
    model:'Audi',
    year:2018,
    color:'white'
};

let strConcat="<div style='background-color:orangered'>" +
    "<h3>Model: "+car.model+"</h3>" +
    "<h3>Year:"+car.year+"</h3>" +
    "<h3>Color:"+car.color +"</h3>" +
    "</div>";
document.querySelector('#container').innerHTML=strConcat;

let templateStr=`<div style="background-color: purple">
<h3>Model:${car.model}</h3>
<h3>Year:${car.year}</h3>
<h3>Color:${car.color}</h3>
</div>`;
document.querySelector('#container').innerHTML=templateStr;


