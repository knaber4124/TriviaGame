$(document).ready(function () {

// Global arrays
let wins = 0;
let losses = 0;
let options =[groverCleveland, abrahamLincoln, franklinPierce, johnAdams,martinVanBuren, rutherfordBHayes, jamesGarfield, williamHowardTaft, woodrowWilson, geraldFord,herbertHoover];



//DOM Manipulation
$('.wins').text(wins);
$('.losses').text(losses);

//JSON Objects
var groverCleveland = {
    q:'The only President to serve in non-consecutive terms',
    ta:'Grover Cleveland',
    fa1:'Chester A Arthur',
    fa2:'Benjamin Harrison',
    fa3:'William Howard Taft'
};
var abrahamLincoln={
    q:'The first President to be born outside the original 13 colonies',
    ta:'Abraham Lincoln',
    fa1:'James Buchanan',
    fa2:'Andrew Johnson',
    fa3:'Millard Fillmore'
};
var franklinPierce={
    q:'The first President to have a Chrismas Tree in the White House',
    ta:'Franklin Pierce',
    fa1:'Abraham Lincoln',
    fa2:'Thomas Jefferson',
    fa3:'Ulysses S Grant'
};
var johnAdams={
    q:'The first President to live in the White House',
    ta:'John Adams',
    fa1:'George Washington',
    fa2:'Thomas Jefferson',
    fa3:'James Monroe'
};
var martinVanBuren={
    q:'The first President to be born a US citizen',
    ta:'Martin Van Buren',
    fa1:'John Quincy Adams',
    fa2:'William Henry Harrison',
    fa3:'Andrew Jackson'
};
var rutherfordBHayes={
    q:'First President to have a phone installed in the White House',
    ta:'Rutherford B Hayes',
    fa1:'James A Garfield',
    fa2:'Teddy Roosevelt',
    fa3:'Benjamin Harrison'
};
var jamesGarfield={
    q:'First left handed President',
    ta:'James Garfield',
    fa1:'Barack Obama',
    fa2:'Bill Clinton',
    fa3:'Donald Trump'
};
var williamHowardTaft={
    q:'The first President to own a car',
    ta:'William Howard Taft',
    fa1:'Teddy Roosevelt',
    fa2:'Woodrow Wilson',
    fa3:'William McKinley',
};
var woodrowWilson={
    q:'The first President to visit Europe while in office',
    ta:'Woodrow Wilson',
    fa1:'William Howard Taft',
    fa2:'Herbert Hoover',
    fa3:'Warren G Harding'
};
var geraldFord={
    q:'The first President who was NOT elected either President or Vice President',
    ta:'Gerald Ford',
    fa1:'Richard Nixon',
    fa2:'Andrew Johnson',
    fa3:'Harry Truman'
};
var herbertHoover={
    q:'The only President to have a sport named after him',
    ta:'Herbert Hoover',
    fa1:'Abraham Lincoln',
    fa2:'George Washington',
    fa3:'Franklin Delano Roosevelt'
};


$('.answers').text(options.indexOf([2]).q);




});