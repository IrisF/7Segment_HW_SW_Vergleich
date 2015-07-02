App.View = (function() {
    var that = {},
    $button = null,
    timeToWait = 500,
    timeToWaitForNextNum = 5000,
    timeToStart = 5000,
    newNum = null,
    user = "x",
    time = "1 Sek",
    nums1s = [844618,
                726387,
                543830,
                575573,
                107815,
                942685,
                861330,
                528148,
                823552,
                284533],
    nums05s = [976820,
                735740,
                243852,
                136158,
                377792,
                549793,
                525481,
                736379,
                323513,
                214612],
    counter = 0;

    init = function() {
        console.log("Nutzer: " + user + ", Zeit: " + time);
        $button = $("#button");
        addClassFromNumber();
        $button.on("click", showNewNumber);
    	return that;
    },

    showNewNumber = function(nextNum){
        if(counter==0){
            setTimeout(function(){
            showNum();
        }, timeToStart);
        }else{
            showNum();
        }
        
    },

    showNum = function(){
        removeClassFromNumber();
        for(var i = 0; i <6; i++){
            if(timeToWait == 1000){
                var currentNum1 = nums1s[counter].toString();
                $("#number" + i).text(currentNum1[i]);
            }
            if(timeToWait == 500){
                var currentNum05 = nums05s[counter].toString();
                $("#number" + i).text(currentNum05[i]);
            }
        }
        counter++;
        addClassFromNumberAfterTimeout();
        startOver();       
    },

    startOver = function(){
        setTimeout(function(){
            if(counter < 10){
                showNewNumber();
            }
        }, timeToWaitForNextNum);
    }

    removeClassFromNumber = function(){
        for(var i = 0; i <6; i++){
            $("#number" + i).removeClass("invisible");
        }
    },

    addClassFromNumberAfterTimeout = function(){
           setTimeout(function(){
            addClassFromNumber();
            }, timeToWait);
    },

    addClassFromNumber = function(){
        for(var i = 0; i <6; i++){
            $("#number" + i).addClass("invisible");
        }
    };

    that.init = init;

	return that;
})();