var answerKey = ["1", "2", "4", "3", "3", "4", "1", "2", "4", "3", "1", "3", "2", "1", "4", "2", "3", "3", "2", "4"];
var userAnswers = "";
var correct
var incorrect
var runClock
$("#startBut").on("click", function() {
    var count = 241
    runClock=true
    correct = 0
    incorrect = 0
    $("#timesUp").css("display", "none");
    $(".results").css("display", "none");
    $(".questions").css("display", "block");
    $("#startBut").css("display", "none");
    $("#timer").css("display", "block");
    
    // setTimeout(timer, 30000);
    // setTimeout(timeUp, 0);

    function timer() {
        count --
        if (count === 0){
            $("#timesUp").css("display", "block");
            check()
        }
    
        else{
            $("#time").text(count);
            if(runClock){
            setTimeout(timer,1000)}
        }
        
    }

    timer();

    


    

//     $("#timer").append(timer);

// function createQuiz(questions, answerChoices) {
//     var answerChoice1 = ["Jonathan Stewart", "Stephen Davis", "DeAngelo Williams", "Christian McCaffrey"];
// }
});


$("#submit").on("click", check);
function check() {
    runClock = false
    $(".questions").css("display", "none");
    $(".results").css("display", "block");
    $("#timer").css("display", "none");
    $("#startBut").css("display", "block");
    for (let i = 0; i < answerKey.length; i++) {
        if (answerKey[i] === $("#q"+i).val()){
            console.log("correct on",i+1)
            correct++;
        }
        else{
            console.log("wrong on ",i+1)
            incorrect++;
        }
    }
    $(".correct").text(correct);
    $(".incorrect").text(incorrect);
    console.log("correct=",correct,"incorrect",incorrect)
}
