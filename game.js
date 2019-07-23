$(document).ready(function () {

    // Global arrays
    let correct = 0;
    let incorrect = 0;
    let options = [groverCleveland, abrahamLincoln, franklinPierce, johnAdams, martinVanBuren, rutherfordBHayes, jamesGarfield, williamHowardTaft, woodrowWilson, geraldFord, herbertHoover];
    var counterStart = 180;


    //DOM Manipulation
    $('.wins').text(correct);
    $('.losses').text(incorrect);
    $('.counter').text(counterStart);
    $('.play').on('click', function () {
        countdown()
        $('.load').hide();
        $('.q1').show();
    });

    function countdown() {
        counterStart--;
        $('.counter').text(counterStart);
        if (counterStart === 0) {
            clearTimeout(counterStart);
            $('#timeUpModal').modal('show');
            return false;
        }
        setTimeout(countdown, 1000);
    } 1000;

    function advanceTo2True() {
        correct++;
        $('.q1').hide();
        $('.q2').show();
    };
    function advanceTo2False() {
        incorrect++;
        $('.q1').hide();
        $('.q2').show();
    };
    function advanceTo3True(){
        correct++;
        $('.q2').hide();
        $('.q3').show();
    };
    function advanceTo3False() {
        incorrect++;
        $('.q2').hide();
        $('.q3').show();
    };
    function advanceTo4True() {
        correct++;
        $('.q3').hide();
        $('.q4').show();
    };
    function advanceTo4False() {
        incorrect++;
        $('.q3').hide();
        $('.q4').show();
    };
    function advanceTo5True() {
        correct++;
        $('.q4').hide();
        $('.q5').show();
    };
    function advanceTo5False() {
        incorrect++;
        $('.q4').hide();
        $('.q5').show();
    };
    function advanceTo6True() {
        correct++;
        $('.q5').hide();
        $('.q6').show();
    };
    function advanceTo6False() {
        incorrect++;
        $('.q5').hide();
        $('.q6').show();
    };
    function advanceTo7True() {
        correct++;
        $('.q6').hide();
        $('.q7').show();
    };
    function advanceTo7False() {
        incorrect++;
        $('.q6').hide();
        $('.q7').show();
    };
    function advanceTo8True() {
        correct++;
        $('.q7').hide();
        $('.q8').show();
    };
    function advanceTo8False() {
        incorrect++;
        $('.q7').hide();
        $('.q8').show();
    };
    function advanceTo9True() {
        correct++;
        $('.q8').hide();
        $('.q9').show();
    };
    function advanceTo9False() {
        incorrect++;
        $('.q8').hide();
        $('.q9').show();
    };
    function advanceTo10True() {
        correct++;
        $('.q9').hide();
        $('.q10').show();
    };
    function advanceTo10False() {
        incorrect++;
        $('.q9').hide();
        $('.q10').show();
    };
    function advanceTo11True() {
        correct++;
        $('.q10').hide();
        $('.q11').show();
    };
    function advanceTo11False() {
        incorrect++;
        $('.q10').hide();
        $('.q11').show();
    };
    function advanceToEndTrue() {
        correct++;
        $('.q11').hide();
        $('.endDisplay').show();
    };
    function advanceToEndFalse() {
        incorrect++;
        $('.q11').hide();
        $('.endDisplay').show();
    };

    //JSON Objects
    var groverCleveland = {
        q: 'The only President to serve in non-consecutive terms',
        ta: 'Grover Cleveland',
        fa1: 'Chester A Arthur',
        fa2: 'Benjamin Harrison',
        fa3: 'William Howard Taft'
    };
    var abrahamLincoln = {
        q: 'The first President to be born outside the original 13 colonies',
        ta: 'Abraham Lincoln',
        fa1: 'James Buchanan',
        fa2: 'Andrew Johnson',
        fa3: 'Millard Fillmore'
    };
    var franklinPierce = {
        q: 'The first President to have a Chrismas Tree in the White House',
        ta: 'Franklin Pierce',
        fa1: 'Abraham Lincoln',
        fa2: 'Thomas Jefferson',
        fa3: 'Ulysses S Grant'
    };
    var johnAdams = {
        q: 'The first President to live in the White House',
        ta: 'John Adams',
        fa1: 'George Washington',
        fa2: 'Thomas Jefferson',
        fa3: 'James Monroe'
    };
    var martinVanBuren = {
        q: 'The first President to be born a US citizen',
        ta: 'Martin Van Buren',
        fa1: 'John Quincy Adams',
        fa2: 'William Henry Harrison',
        fa3: 'Andrew Jackson'
    };
    var rutherfordBHayes = {
        q: 'First President to have a phone installed in the White House',
        ta: 'Rutherford B Hayes',
        fa1: 'James A Garfield',
        fa2: 'Teddy Roosevelt',
        fa3: 'Benjamin Harrison'
    };
    var jamesGarfield = {
        q: 'First left handed President',
        ta: 'James Garfield',
        fa1: 'Barack Obama',
        fa2: 'Bill Clinton',
        fa3: 'Donald Trump'
    };
    var williamHowardTaft = {
        q: 'The first President to own a car',
        ta: 'William Howard Taft',
        fa1: 'Teddy Roosevelt',
        fa2: 'Woodrow Wilson',
        fa3: 'William McKinley',
    };
    var woodrowWilson = {
        q: 'The first President to visit Europe while in office',
        ta: 'Woodrow Wilson',
        fa1: 'William Howard Taft',
        fa2: 'Herbert Hoover',
        fa3: 'Warren G Harding'
    };
    var geraldFord = {
        q: 'The first President who was NOT elected either President or Vice President',
        ta: 'Gerald Ford',
        fa1: 'Richard Nixon',
        fa2: 'Andrew Johnson',
        fa3: 'Harry Truman'
    };
    var herbertHoover = {
        q: 'The only President to have a sport named after him',
        ta: 'Herbert Hoover',
        fa1: 'Abraham Lincoln',
        fa2: 'George Washington',
        fa3: 'Franklin Delano Roosevelt'
    };

    //Question 1 buttons and question
    $('.q1questions').text(groverCleveland.q);
    $('.q1btn1').text(groverCleveland.ta);
    $('.q1btn2').text(groverCleveland.fa1);
    $('.q1btn3').text(groverCleveland.fa3);
    $('.q1btn4').text(groverCleveland.fa2);

    $('.q1btn1').on('click', function () {
        advanceTo2True();
    });
    $('.q1btn2,.q1btn3,q1btn4').on('click', function () {
        advanceTo2False();
    });
    
    //Question 2 buttons and question
    $('.q2questions').text(abrahamLincoln.q);
    $('.q2btn1').text(abrahamLincoln.fa3);
    $('.q2btn2').text(abrahamLincoln.ta);
    $('.q2btn3').text(abrahamLincoln.fa1);
    $('.q2btn4').text(abrahamLincoln.fa2);

    $('.q2btn2').on('click', function(){
        advanceTo3True();
    });
    $('.q2btn1,.q2btn3,.q2btn4').on('click', function(){
        advanceTo3False();
    });

    $('.q3questions').text(franklinPierce.q);
    $('.q3btn1').text(franklinPierce.fa1);
    $('.q3btn2').text(franklinPierce.fa3);
    $('.q3btn3').text(franklinPierce.ta);
    $('.q3btn4').text(franklinPierce.fa2);

    $('.q3btn3').on('click', function(){
        advanceTo4True;
    });
    $('.q3btn1,.q3btn2,.q3btn4').on('click', function(){
        advanceTo4False;
    });










});