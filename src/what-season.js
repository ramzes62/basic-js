const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if(arguments.length == 0) return 'Unable to determine the time of year!';
   
    if(!(date instanceof Date)) throw new Error();

    if(date.hasOwnProperty("toString")) throw new Error();

    date = new Date(date);

    if( date === "Invalid Date") throw new Error();

    switch (date.getMonth()) {
      case 11:
      case 0:
      case 1:return 'winter'; break;
      case 2: 
      case 3:
      case 4:return 'spring'; break;
      case 5:
      case 6:
      case 7:return 'summer'; break;
      case 8:
      case 9:
      case 10:return 'autumn'; break; 
      default: return "hehehehhe"; break;
    }
};
