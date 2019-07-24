$(document).ready(function () {

    // Global arrays
    let correct = 0;
    let incorrect = 0;
    var counterStart = 180;


    //DOM Manipulation
    $('.counter').text(counterStart);
    $('.play').on('click', function () {
        countdown()
        $('.load').hide();
        $('.counterDisplay').show();
        $('.q1').show();
    });



    function countdown() {
        counterStart--;
        $('.counter').text(counterStart);
        if (counterStart === 0) {
            clearTimeout(counterStart);
            $('#timeUpModal').modal('show');
            $('.modalWins').text(correct);
            $('.modalLosses').text(incorrect);
            $('.questions').hide();
            $('.answers').hide();
            $('.reload').show();
            return false;
        };
        setTimeout(countdown, 1000);
        
    } 1000;

    // function stop() {
    //     clearTimeout(counterStart);
    //     return false;
    // };

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
    function advanceTo3True() {
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
        $('.wins').text(correct);
        $('.losses').text(incorrect);
        $('.endDisplay').show();
        $('.reload').show();
        // clearTimeout(counterStart);
        // return false;
        // setTimeout(countdown, 1000);
    };
    function advanceToEndFalse() {
        incorrect++;
        $('.q11').hide();
        $('.wins').text(correct);
        $('.losses').text(incorrect);
        $('.endDisplay').show();
        $('.reload').show();
        // clearTimeout(counterStart);
        // return false;
        // setTimeout(countdown, 1000);
    };
    $('.reload').on('click', function(){
        location.reload();
    });

    function endGif(){
        if(correct>incorrect){
            $('.wingif').show();
        }
        else{
            $('.losegif').show();
        };
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
    $('.q1btn2, .q1btn3, .q1btn4').on('click', function () {
        advanceTo2False();
    });

    //Question 2 buttons and question
    $('.q2questions').text(abrahamLincoln.q);
    $('.q2btn1').text(abrahamLincoln.fa3);
    $('.q2btn2').text(abrahamLincoln.ta);
    $('.q2btn3').text(abrahamLincoln.fa1);
    $('.q2btn4').text(abrahamLincoln.fa2);

    $('.q2btn2').on('click', function () {
        advanceTo3True();
    });
    $('.q2btn1,.q2btn3,.q2btn4').on('click', function () {
        advanceTo3False();
    });

    $('.q3questions').text(franklinPierce.q);
    $('.q3btn1').text(franklinPierce.fa1);
    $('.q3btn2').text(franklinPierce.fa3);
    $('.q3btn3').text(franklinPierce.ta);
    $('.q3btn4').text(franklinPierce.fa2);

    $('.q3btn3').on('click', function () {
        advanceTo4True();
    });
    $('.q3btn1, .q3btn2, .q3btn4').on('click', function () {
        advanceTo4False();
    });

    $('.q4questions').text(johnAdams.q);
    $('.q4btn1').text(johnAdams.ta);
    $('.q4btn2').text(johnAdams.fa3);
    $('.q4btn3').text(johnAdams.fa1);
    $('.q4btn4').text(johnAdams.fa2);

    $('.q4btn1').on('click', function () {
        advanceTo5True();
    });
    $('.q4btn2, .q4btn3, .q4btn4').on('click', function () {
        advanceTo5False();
    });

    $('.q5questions').text(martinVanBuren.q);
    $('.q5btn1').text(martinVanBuren.fa3);
    $('.q5btn2').text(martinVanBuren.fa1);
    $('.q5btn3').text(martinVanBuren.fa2);
    $('.q5btn4').text(martinVanBuren.ta);

    $('.q5btn4').on('click', function () {
        advanceTo6True();
    });
    $('.q5btn1, .q5btn2, .q5btn3').on('click', function () {
        advanceTo6False();
    });

    $('.q6questions').text(rutherfordBHayes.q);
    $('.q6btn1').text(rutherfordBHayes.fa2);
    $('.q6btn2').text(rutherfordBHayes.ta);
    $('.q6btn3').text(rutherfordBHayes.fa1);
    $('.q6btn4').text(rutherfordBHayes.fa3);

    $('.q6btn2').on('click', function () {
        advanceTo7True();
    });
    $('.q6btn1, .q6btn3, .q6btn4').on('click', function () {
        advanceTo7False();
    });

    $('.q7questions').text(jamesGarfield.q);
    $('.q7btn1').text(jamesGarfield.ta);
    $('.q7btn2').text(jamesGarfield.fa3);
    $('.q7btn3').text(jamesGarfield.fa1);
    $('.q7btn4').text(jamesGarfield.fa2);

    $('.q7btn1').on('click', function () {
        advanceTo8True();
    });
    $('.q7btn2, .q7btn3, .q7btn4').on('click', function () {
        advanceTo8False();
    });

    $('.q8questions').text(williamHowardTaft.q);
    $('.q8btn1').text(williamHowardTaft.fa3);
    $('.q8btn2').text(williamHowardTaft.fa1);
    $('.q8btn3').text(williamHowardTaft.fa2);
    $('.q8btn4').text(williamHowardTaft.ta);

    $('.q8btn4').on('click', function () {
        advanceTo9True();
    });
    $('.q8btn1, .q8btn2, .q8btn3').on('click', function () {
        advanceTo9False();
    });

    $('.q9questions').text(woodrowWilson.q);
    $('.q9btn1').text(woodrowWilson.fa2);
    $('.q9btn2').text(woodrowWilson.fa1);
    $('.q9btn3').text(woodrowWilson.ta);
    $('.q9btn4').text(woodrowWilson.fa3);

    $('.q9btn3').on('click', function () {
        advanceTo10True();
    });

    $('.q9btn1, .q9btn2, .q9btn4').on('click', function () {
        advanceTo10False();
    });

    $('.q10questions').text(geraldFord.q);
    $('.q10btn1').text(geraldFord.fa1);
    $('.q10btn2').text(geraldFord.fa2);
    $('.q10btn3').text(geraldFord.ta);
    $('.q10btn4').text(geraldFord.fa3);

    $('.q10btn3').on('click', function () {
        advanceTo11True();
    });
    $('.q10btn1, .q10btn2, .q10btn4').on('click', function () {
        advanceTo11False();
    });

    $('.q11questions').text(herbertHoover.q);
    $('.q11btn1').text(herbertHoover.ta);
    $('.q11btn2').text(herbertHoover.fa1);
    $('.q11btn3').text(herbertHoover.fa2);
    $('.q11btn4').text(herbertHoover.fa3);

    $('.q11btn1').on('click', function () {
        clearTimeout(counterStart);
        advanceToEndTrue();
        endGif();
        
       
    });
    $('.q11btn2, .q11btn3, .q11btn4').on('click', function () {
        clearTimeout(counterStart);
        advanceToEndFalse();
        endGif();
           
            
    });
});