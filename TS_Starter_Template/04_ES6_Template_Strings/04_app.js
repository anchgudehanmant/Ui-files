/*
2 template String
Instead of using string Concatenation Operator for joining two or more
string Literals Template Strings are best alternative.In
this we use`(back tick).
 */
//create a car object and prepares a template sting using string concatenation and template sting
var car = {
    model: 'Audi',
    year: 2018,
    color: 'white'
};
var strConcat = "<div style='background-color:orangered'>" +
    "<h3>Model: " + car.model + "</h3>" +
    "<h3>Year:" + car.year + "</h3>" +
    "<h3>Color:" + car.color + "</h3>" +
    "</div>";
document.querySelector('#container').innerHTML = strConcat;
var templateStr = "<div style=\"background-color: purple\">\n<h3>Model:" + car.model + "</h3>\n<h3>Year:" + car.year + "</h3>\n<h3>Color:" + car.color + "</h3>\n</div>";
document.querySelector('#container').innerHTML = templateStr;
