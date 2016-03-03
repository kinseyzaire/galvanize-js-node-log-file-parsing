var fs = require("fs");

var funcs = {
   cutItUp: function(logloglog){
   return logloglog.split("\n");
   },
   makeMyBigAssAry: function(array) {
      var theGiantAry = [];
      for (var i = 0; i < array.length; i++) {
         theGiantAry[i] = {};
         theGiantAry[i]["date"] = array[i].substring(4,14);
         theGiantAry[i]["time"] = array[i].substring(14,30);
         theGiantAry[i]["type"] = array[i].substring(0,1);
         theGiantAry[i]["description"] = array[i].substring(50);
         }
      return theGiantAry;
   },
   whutDayz: function(array){
      console.log(array);
      var allTheDays = [], errorsPerDay = [], prev;
         for (var i = 0; i < array.length; i++) {
            console.log("****Date**");
            console.log(array[i].date);
            console.log("***comepare with****");
            console.log(prev);
            if ( array[i]["date"] !== prev ) {

                 allTheDays.push(array[i]["date"]);
                 errorsPerDay.push(1);
            } else {
                 errorsPerDay[errorsPerDay.length-1]++;
            }
            prev = array[i]["date"];
            }
            return [allTheDays, errorsPerDay];
    },
   // whutDayz: function(array){
   //    var newArray = array.filter(function(e,i){
   //       return newArray.indexOf(e) == i;
   //    })
   //  }
}


fs.readFile('./data/log.log', function(err, data) {
  if (err) throw err;
  var logs = data.toString();
  // When your tests are passing, uncomment this code and run `node lib/log_parser.js` from command line to confirm success.
  // var dates = funcs.getDates(logs);
  // console.log(funcs.showDates(dates));
});

module.exports = funcs;
