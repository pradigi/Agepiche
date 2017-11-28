(function () {
    var questionId = 0, startTime = 0, scoredMarks = 0, totalMarks, resId;
    var shuffleArray = function (array) {
        var m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }
    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length)
            return false;
        for (var i = arr1.length; i--;) {
            if (arr1[i] !== arr2[i])
                return false;
        }

        return true;
    }
    var tracing = [];
        function setImagesThroughScript() {
            $(".bg1").css("background-image", "url('" + Utils.Path + "Image/Word-Repair-layout.png')");
            $(".play1").attr("src", Utils.Path + "Image/Play_1.png");
            $(".prathamlogo").attr("src", Utils.Path + "Image/prathamlogo.png");
            $(".home").attr("src", Utils.Path + "Image/Home.png");
            $(".playagain").attr("src", Utils.Path + "Image/Play-again.png");
            $(".Check").attr("src", Utils.Path + "Image/Check-this.png");
            $(".Next").attr("src", Utils.Path + "Image/Next.png");  
			$(".doneimg").attr("src", Utils.Path + "Image/Done.png");
			$(".closeimg").attr("src", Utils.Path + "Image/Close.png");
			$("#imgjokpa").attr("src", Utils.Path + "Image/joker_04.png");          
        }
        $(document).ready(function () {
            //console.log("check ready");
            setTimeout(function () {
                //console.log("check ready");
                if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {/*For Tablet */ tracing.deviceFlag = 1; }
                else {/* for Desktop */ tracing.deviceFlag = 0; }
                setImagesThroughScript();
                //console.log(tracing.deviceFlag);
            }, 10);
        });
    var corrword = angular.module("WordApp", []);
    corrword.controller("CorrectController", function ($scope, $timeout, $interval) {
        setImagesThroughScript();
		            var d = new Date();
            startTime = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            
        $scope.btncheck = false;
        $scope.maxsec = null;
        $scope.startTimeout = function () {
            $scope.Message = "Timer started. ";
            $scope.maxsec = 124;
            $scope.animationstate = 1;
            $scope.Timer = $interval(function () {
                $scope.maxsec = $scope.maxsec - 1;
                if ($scope.maxsec == 0) {
				
						$('#myModal').modal({
                        backdrop: 'static',
                        keyboard: false
                    });
                    //$scope.StopTimer();
                    $scope.StartTimer2();
                }                
            },1000);            
        }
        $scope.startTimeout();
		$scope.StartTimer2 = function () {
            $scope.maxsec2 = 120;
            //Initialize the Timer to run every 1000 milliseconds i.e. one second.
            $scope.Timer2 = $interval(function () {
                if ($scope.maxsec2 == 0) {
                    //$scope.Screen0();
					$scope.StopTimer();
                    $scope.StopTimer2();
					$scope.displayScore();
                }
                else {
                    //$scope.maxsec2 = $scope.maxsec2 - 1;
                }
                //Display the current time.
                $scope.Message2 = "Timer Ticked. " + $scope.maxsec2;
            }, 1000);
        };
        //Timer stop function.
        $scope.StopTimer2 = function () {
            //console.log("timer stp");
            //Set the Timer stop message.
			//$scope.displayScore();
            $scope.Message2 = "Timer stopped.";
			
			$scope.maxsec = 120;
            //$scope.Screen0();  
            //Cancel the Timer.
            if (angular.isDefined($scope.Timer2)) {
                $interval.cancel($scope.Timer2);
            }
        };
		
		$scope.timergain = function () {
            $("#myModal").modal("hide");
            //$scope.changeword();
            //$scope.StopTimer();
			
            $scope.StopTimer2();
            //$scope.StartTimer();
			$scope.maxsec = 120;
        }
		
		$scope.playAgain2 = function () {
            $("#myModal").modal("hide");
			$scope.dvheader = true;
            $scope.dvgame = true;
            $scope.dvcontrol = true;
            $scope.dvplayagain = true;	
			scoredMarks = $scope.score;
			totalMarks = $scope.score;
            Android.addScore(resId, questionId, scoredMarks, totalMarks, 1, startTime);
            var d = new Date();
            startTime = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            		
        }		
        $scope.currentlist = [];
        $scope.currentlist = wlist1.slice(0);
        $scope.currentlist = shuffleArray($scope.currentlist).slice(0,50);
        $scope.i = 0;       
        $scope.displaynewword = function () {
            if ($scope.i < 50) {
            $scope.myword = $scope.currentlist[$scope.i].MyWords.slice(0);
            $scope.randomword = shuffleArray($scope.myword);
            $scope.myword = $scope.currentlist[$scope.i].MyWords.slice(0);
            while (arraysEqual($scope.randomword, $scope.currentlist[$scope.i].MyWords)) {
                $scope.randomword = shuffleArray($scope.randomword);
            }
            }
            else {
                $scope.dvheader = true;
                $scope.dvgame = true;
                $scope.dvcontrol = true;
                $scope.dvplayagain = true;
            }             
        };        
        $scope.displaynewword();
        $scope.items = [];
        $scope.score = 0;
        $scope.playAgain = function () {
			//scoredMarks = $scope.score;
			//totalMarks = $scope.score;
            //Android.addScore(resId, questionId, scoredMarks, totalMarks, 1, startTime);
            //var d = new Date();
            //startTime = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            
            $scope.btncheck = false;
            $scope.dvheader = false;
            $scope.dvgame = false;
            $scope.dvcontrol = false;
            $scope.dvplayagain = false;
            $scope.score = 0;
            $scope.maxsec = 120;
            $scope.items = [];
            $scope.currentlist = [];
            $scope.currentlist = wlist1.slice(0);
            $scope.currentlist = shuffleArray($scope.currentlist).slice(0, 50);
            $scope.i = 0;
            $scope.displaynewword = function () {
                if ($scope.i < 50) {
                    $scope.myword = $scope.currentlist[$scope.i].MyWords.slice(0);
                    $scope.randomword = shuffleArray($scope.myword);
                    $scope.myword = $scope.currentlist[$scope.i].MyWords.slice(0);
                    while (arraysEqual($scope.randomword, $scope.currentlist[$scope.i].MyWords)) {
                        $scope.randomword = shuffleArray($scope.randomword);
                    }
                }
                else {
                    $scope.dvheader = true;
                    $scope.dvgame = true;
                    $scope.dvcontrol = true;
                    $scope.dvplayagain = true;
                }
            };
            $scope.displaynewword();
        }
        $scope.Check = function () {
            var data = $.map($('#sortable:first li'), function (el) {
                return $(el).attr("data-myattr");
            });
            
            if (arraysEqual(data, $scope.myword))
            {
               var audio = new Audio('sound/correct.mp3');
                    audio.play();					
                    $scope.dvcontrol = true;
					
                $("#dvmonkey").addClass("animatemonkey");
                $scope.btncheck = true;
                setTimeout(function () {
                    $("#dvmonkey").removeClass("animatemonkey"); //console.log("remove class"); 
                    $scope.items.push({
                        name: $scope.myword.join('')
                    });
                    $scope.score = $scope.score + 10;
                    $scope.dvcontrol = false;
                    $scope.btncheck = false;                    
                    $scope.Next();
                }, 500);                
                }
            else {				
                var audio = new Audio('sound/wrong.mp3');
                audio.play();
            };
        };
        $scope.btnGoHome = function () {
		    scoredMarks = $scope.score;
			totalMarks = $scope.score;
			if(startTime!=0)
			{
            Android.addScore(resId, questionId, scoredMarks, totalMarks, 1, startTime);
			}
            window.location.href = 'index.html';
        };
        $scope.Next = function () {
            $scope.i = $scope.i + 1;
            $scope.displaynewword();
            $scope.btncheck = false;
        };
    });
})();