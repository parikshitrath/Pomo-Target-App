var minutes = 25;
var seconds = "00";
var count = 1;
var no_of_session = 0;
var session_completed = 0;
var brake = 0;

var click = new Audio("../audio and images/click.mp3");
var reset = new Audio("../audio and images/reset.wav");
var bell_short = new Audio("../audio and images/bell short.wav");
var bell_long = new Audio("../audio and images/bell long.wav");

function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start() {
    no_of_session = document.getElementById("session_count").value;
    if(no_of_session <= 0 || no_of_session == NaN)
    {
        document.getElementById("done").innerHTML = "Enter Numer of Sessions First!!";
        return;
    }

    if(no_of_session == session_completed)
    {
        document.getElementById("done").innerHTML = session_completed + " Session Over!!";
        document.getElementById("comp").innerHTML = "Click on <i class='fas fa-redo-alt fa-2x'></i> to Start New Session";
        return;
    }
    click.play();
    
    if(brake == 0)
    {
        document.getElementById("done").innerHTML = "Session Started!!";
        minutes = 24;
        seconds = 59;

        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        var minutes_interval = setInterval(minutesTimer, 60000);
        var seconds_interval = setInterval(secondsTimer, 1000);

        function minutesTimer() {
            minutes = minutes - 1;
            document.getElementById("minutes").innerHTML = minutes;
        }

        function secondsTimer() {
            seconds = seconds - 1;
            document.getElementById("seconds").innerHTML = seconds;
            
            if(seconds <= 57){           // set to 57
                if(minutes <= 24){       // set to 24
                    session_completed = session_completed + 1;
                    brake = 1;                         
                    clearInterval(minutes_interval);
                    clearInterval(seconds_interval);
                    if(count < 4)
                    {
                        document.getElementById("done").innerHTML = "Congrats!! Session Complete Take a  Short Break!!!";
                        document.getElementById("comp").innerHTML = "Click on <button class='btn'><i class='fas fa-play fa-2x'></i></button> to Start Short Break";
                        bell_short.play();
                        count = count + 1;
                    }
                    else
                    {
                        document.getElementById("done").innerHTML = "Congrats!! Session Complete Take a  Long Break!!";
                        document.getElementById("comp").innerHTML = "Click on <button class='btn'><i class='fas fa-play fa-2x'></i></button> to Start Long Break";
                        count = 0;
                        bell_long.play();
                    }
                }

                seconds = 60;
            }
        }
    }
    else
    {
        if(count == 0)
        {
            minutes = 14;
            seconds = 59;

            document.getElementById("done").innerHTML = "Long Break Started!!";

            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;


            var minutes_interval = setInterval(minutesTimer, 60000);
            var seconds_interval = setInterval(secondsTimer, 1000);

            function minutesTimer() {
                minutes = minutes - 1;
                document.getElementById("minutes").innerHTML = minutes;
            }

            function secondsTimer() {
                seconds = seconds - 1;
                document.getElementById("seconds").innerHTML = seconds;
                
                if(seconds <= 57){      // set to 57
                    if(minutes <= 14){  // set to 14
                        clearInterval(minutes_interval);
                        clearInterval(seconds_interval);
                        document.getElementById("done").innerHTML = "Break Over!! Get Back to Work!!";
                        document.getElementById("comp").innerHTML = "Click on <button class='btn'><i class='fas fa-play fa-2x'></i></button> to Start Next Session";
                        brake = 0;
                        bell_short.play();
                    }
                }
                
            }
        }
        else
        {
            minutes = 4;
            seconds = 59;

            document.getElementById("done").innerHTML = "Short Break Started!!";

            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;


            var minutes_interval = setInterval(minutesTimer, 60000);
            var seconds_interval = setInterval(secondsTimer, 1000);

            function minutesTimer() {
                minutes = minutes - 1;
                document.getElementById("minutes").innerHTML = minutes;
            }

            function secondsTimer() {
                seconds = seconds - 1;
                document.getElementById("seconds").innerHTML = seconds;
                
                if(seconds <= 57){     // set to 57
                    if(minutes <= 4){  // set to 4
                        clearInterval(minutes_interval);
                        clearInterval(seconds_interval);
                        document.getElementById("done").innerHTML = "Break Over!! Get Back to Work!!";
                        document.getElementById("comp").innerHTML = "Click on <button class='btn'><i class='fas fa-play fa-2x'></i></button> to Start Next Session";
                        brake = 0;
                        bell_short.play();
                    }
                }
                
            }
        }
    }
}

