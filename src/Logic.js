App.Logic = (function() {
    var that = {},
    min = 0,
    max = 9,
   
    init = function() {
       	return that;
    },

    calcRandomNum = function(){
        var number = "";
        for(var i=0; i<6;i++){
            var randomNum = Math.round(Math.random() * (max - min) + min);
            number += randomNum.toString();
        }
        return number;
    },

    showNextNumber = function(){
        var nextNum = calcRandomNum();
        $(that).trigger("displayNumber", nextNum);
    };


    that.init = init;
    that.showNextNumber = showNextNumber;

	return that;
})();