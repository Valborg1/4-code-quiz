






// Countdown Timer
function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Time is up!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            $mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( $mins ) : $mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
        // console.log($("#ten-countdown").text());
        $time = Math.floor(($("#ten-countdown").text()));
        $time = Number($time);
        console.log(mins);
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();


}

countdown( "ten-countdown", 10, 0 );


// QUESTIONS SECTION

// Set the correct number for the current question
$("#q-num").text(questionNumber+1);

// Set the Question and Answer Options
$("#q-text").text(questions[questionNumber].question);
$(".a1").text(questions[questionNumber].answer1);
$(".a2").text(questions[questionNumber].answer2);
$(".a3").text(questions[questionNumber].answer3);
$(".a4").text(questions[questionNumber].answer4);

// Answer Click Function
$("label.btn").on('click',function (evt) {
    evt.preventDefault();
    var choice = $(this).find('input:radio').val();
    $ans = questions[questionNumber].correct;

    check(choice);
    questionNumber++;

    // Set the correct number for the current question
    $("#q-num").text(questionNumber+1);
    
    // Set the Question and Answer Options
    $("#q-text").text(questions[questionNumber].question);
    $(".a1").text(questions[questionNumber].answer1);
    $(".a2").text(questions[questionNumber].answer2);
    $(".a3").text(questions[questionNumber].answer3);
    $(".a4").text(questions[questionNumber].answer4);

});

currentScore = 0;

function check(a) {
    if (a != $ans) {
        return $(".rightWrong").text('INCORRECT');
      } else { 
        currentScore+ (1* $time);
        return $(".rightWrong").text('CORRECT'); 
      }
    }














// $("label.btn").on('click',function () {
//     var choice = $(this).find('input:radio').val();
//     $ans = questions[questionNumber].correct;
//         setTimeout(function(){
//             $("#rightWrong").html($(this).checking(choice));     
//             }, 500);
    
//     // console.log("Before adding 1: " + questionNumber);
//     // questionNumber++;
//     // console.log("After adding 1: " + questionNumber);
    
//     function check(choice) {
//     if (choice != $ans)
//         return $(".rightWrong").text('INCORRECT');
//     else 
//         return $(".rightWrong").text('CORRECT'); 
//     }

//     $.fn.checking = function(ck) { 
//         if (ck != $ans)
//             return $(".rightWrong").text('INCORRECT');
//         else 
//             return $(".rightWrong").text('CORRECT');
//     }; 


//     // Set the correct number for the current question
//     $("#q-num").text(questionNumber+1);
    
//     // Set the Question and Answer Options
//     $("#q-text").text(questions[questionNumber].question);
//     $(".a1").text(questions[questionNumber].answer1);
//     $(".a2").text(questions[questionNumber].answer2);
//     $(".a3").text(questions[questionNumber].answer3);
//     $(".a4").text(questions[questionNumber].answer4);
// });

