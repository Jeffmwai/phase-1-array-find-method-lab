// code your solution here
function superbowlWin(arrayOfObjects) {
    const winningYear = arrayOfObjects.find(obj => obj.result === "W");
    if (winningYear) {
      return winningYear.year;
    } else {
    return undefined;
    }
  }
  