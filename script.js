

// Start Game
$("#start-btn").on("click",function(){
    $("#start-game").css("display","block");
    $("#instructions").css("display","none");

})



// Set Best Score at Game Start
if (window.localStorage.length === 0) {
    $(".bestScore").text(": 0");
} else {
    var scoreArr = JSON.parse(localStorage.getItem("score")) || [];
    $(".bestScore").text(": " + scoreArr[0].score);
}




// Countdown Timer

var time = 60;
var timerEl = $("#ten-countdown");
var timer;


$("#start-btn").on("click", function() {

    function countdown() {
    time--;
    timerEl.text(time);
    if (time <= 0) {
        gameOver();
    }
}
timerEl.text(time);
timer = setInterval(countdown,1000);
});



function gameOver() {
    setTimeout(function () {
    clearInterval(timer);
    var score = timerEl.text();
    timerEl.text("Game Over!");
    $("#question-display").css("display", "none");
    $("#game-over").css("display","block");
    $("#final-score").text(score);
    $(".rightWrong").text("");
    }, 2000);
}

$("#submit-score").on("click", function(){
    $("#score-card").css("display","block");
    $("#play-again").css("display","block");
    var submitInitials = $("#initials").val().trim();
    var submitScore = $("#final-score").text();

    var newScore = {
        score : submitScore,
        initials : submitInitials
    };

    var scoreArr = JSON.parse(localStorage.getItem("score")) || [];
    scoreArr.push(newScore);
    
    // Sort Array
    scoreArr.sort(function(a,b){
        return b.score - a.score;
    })

    for (var i = 0; i < scoreArr.length;i++) {
        var userScore = $("<li>").text(scoreArr[i].initials + ": " + scoreArr[i].score);
        $("#all-scores").append(userScore);
    }


    localStorage.setItem("score", JSON.stringify(scoreArr));

})

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
    $(this).prop('disabled', true);
    var choice = $(this).find('input:radio').val();
    $ans = questions[questionNumber].correct;

    check(choice);
    if (questionNumber >= questions.length - 1) {
        gameOver();
    } else {
        
        // Wait 2 Seconds Before Moving to Next Question
        setTimeout(function () {
            
            $(".rightWrong").text("");
            questionNumber++;
    
            // Set the correct number for the current question
            $("#q-num").text(questionNumber+1);
            
            // Set the Question and Answer Options
            $("#q-text").text(questions[questionNumber].question);
            $(".a1").text(questions[questionNumber].answer1);
            $(".a2").text(questions[questionNumber].answer2);
            $(".a3").text(questions[questionNumber].answer3);
            $(".a4").text(questions[questionNumber].answer4);

        }, 2000);
    }
});

var currentScore = 0;

function check(a) {
    if (a != $ans) {
        time -= 10;
        timerEl.text(time);
        return $(".rightWrong").text('INCORRECT').removeClass("green").addClass("red");
      } else { 
        currentScore += time;
        return $(".rightWrong").text('CORRECT').removeClass("red").addClass("green"); 
      }
    }