function shout(string) {
  return string.toUpperCase(); // todo
}

function whisper(string) {
    return string.toLowerCase();
}

const string = "hello";
function logShout() {
    console.log(string.toUpperCase());
}

function logWhisper () {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate (string) {
    var cantAnswer = "I can't hear you!";
    var yesAnswer = "YES INDEED!";
    var lovAnswer = "I would love to!";
    if (string === string.toLowerCase(string)) {
        return cantAnswer;
    }
    else if (string === string.toUpperCase(string)) {
        return yesAnswer;
    }
    else if (string === "Let's have dinner together!") {
        return lovAnswer;
    }
}
// console.log(sayHiToHeadphonedRoommate(string));
