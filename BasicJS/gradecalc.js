let pointCalc = function (point, totalPoint) {
  let percent = (point / totalPoint) * 100;
  greadletter = "";

  if (percent >= 90) {
    greadletter = "A";
  } else if (percent >= 80) {
    greadletter = "B";
  } else if (percent >= 70) {
    greadletter = "C";
  } else if (percent >= 60) {
    greadletter = "D";
  } else if (percent >= 50) {
    greadletter = "E";
  } else {
    greadletter = "F";
  }

  return `You got a ${greadletter} ${percent}%!`;
};

let result = pointCalc(45, 50);
console.log(result);
