function validateName(name){
const namePattern=/^[a-zA-Z\s'-]+$/;
return namePattern.test(name);
}

function validateMobileNumber(mobileNumber){
const mobilePattern=/^[6-9]\d{9}$/;
return mobilePattern.test(mobileNumber);
}


function containsOnlyDigits(str){
const regex=\^/d+$/;
return regex.test(str);
}


function containsOnlyAlphabets(str){
const regex=\^[a-zA-Z]+$/;
return regex.test(str);
}


function containsAlphanumeric(str){
const regex=\^[a-zA-Z0-9]+$/;
return regex.test(str);
}



Explanation of regular expressions:
^:Assets the starts of the string.
$:Assets the end of the string.
\d:matches any digit(0-9).
[a-zA-Z]:Matches any uppercase or lowercase alpahanumeric character.
[a-zA-Z0-9]:Matches any uppercase or lowercase alpahanumeric character or any digit.
+:Matches one or more ocurrences of the precending character or group.
.test(str):A method of regular expression objects that tests for a match in a string and returns true or false.


















