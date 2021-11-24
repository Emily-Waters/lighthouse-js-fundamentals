//  We will be given a date as a string (not a Date object). 
//  The date will always be formatted as YYYY/MM/DD. 
//  We will have to parse the given string and produce a human readable date.

const talkingCalendar = function(date) {
  //  Month array containing strings with index[pos] corresponding to
  //  numerical value. index[0] blank string to make numeric month
  //  match index[pos]
  monthArray = ['','January','February','March','April','May',
  'June','July','August','September','October','November','December']
  //  Array of suffixes for days
  daySuffixArray = ['','st','nd','rd','th']
  //  Assign day numeric value
  day = Number( date.slice(-2) );
  //  Assign appropriate suffix to day using index[pos]
  day = day > 3 ? day + daySuffixArray[4] : day + daySuffixArray[day];
  //  Assign month name with monthArray based on index[pos]
  month = monthArray[Number( date.slice(5,7) )];
  //  Assign year
  year = date.slice(0,4);
  //  Return in appropriate format
  return month + ' ' + day + ', ' + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


//  EXPECTED OUTPUT :
//  December 2nd, 2017
//  November 11th, 2007
//  August 24th, 1987