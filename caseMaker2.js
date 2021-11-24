const makeCase = function(text, caseName) {
  let modText = text;
  let newText = ''
  if (typeof(caseName) == typeof('string')) {
    caseNameThing = [caseName]  
  } else {
    caseNameThing = caseName
  }
  for (cases of caseNameThing) {
    if (cases == 'camel') {
      newText = whiteSpaceReplace(caseCase(modText,false),'');
    } else if (cases == 'pascal') {
      newText = whiteSpaceReplace(caseCase(modText,true),'')
    } else if (cases == 'snake') {
      newText = whiteSpaceReplace(modText,'_')
    } else if (cases == 'kebab') {
      newText = whiteSpaceReplace(modText,'-')
    } else if (cases == 'title') {
      newText = caseCase(modText,true)
    } else if (cases == 'vowel' || 'upper' || 'lower' || 'consonant') {
      newText = selectiveUpperLower(modText,cases)
    }
    modText = newText
  }
  return modText
}

const leadWhiteSpaceTrim = function(text) {
  let newText = '';
  for (letter of text) {
    if (letter === ' ' && !newText) {
    } else {
      newText += letter;
    }
  }
  return newText;
};

const whiteSpaceReplace = function(text,replaceChar) {
  let trimText = leadWhiteSpaceTrim(text)
  let newString = '';
  for (letter of trimText) {
    if (letter === ' ') {
      newString+= letter.replace(' ',replaceChar)
    } else {
      newString+=letter; 
    }
  }
  return newString 
};



const caseCase = function(text,modifier) {
  let triggerSet = modifier;
  let newText= '';
  for (letter of text) {
    if (letter === ' ' && !newText && !triggerSet) {
    } else if (letter === ' ') {
      newText += letter
      triggerSet = true
    } else if (triggerSet === true) {
      newText += letter.toUpperCase()
      triggerSet = false
    } else {
      newText += letter.toLowerCase()
      triggerSet = false;
    }
  }
  return newText
};

const selectiveUpperLower = function (text,selector) {
  let vowelList = 'aeiouAEIOU';
  let capVowels = selector == 'vowel';
  let capConsonants = selector == 'consonant';
  let capAll = selector == 'upper';
  let lowerAll = selector == 'lower';
  let newText = ''; 
  let triggerSet = 0;
  for (l of text) {
    triggerSet = 0;
    for (v of vowelList) {
      if (l === v) {
        triggerSet+=1;
      }
    }
    if (capAll) {
      newText+= l.toUpperCase();    
    } else if (lowerAll) {
      newText+= l.toLowerCase();
    } else if (capVowels && triggerSet) {
      newText+= l.toUpperCase();
    } else if (capConsonants && !triggerSet) {
      newText+= l.toUpperCase();
    } else {
      newText+= l.toLowerCase();
    }
  }
  return newText;
}




console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["snake", "upper"]));
