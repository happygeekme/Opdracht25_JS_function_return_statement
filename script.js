const check = (number) => {
  if (number > 100) {
    return true;
  }
  return false;
};

const result = check(101);
console.log(result);

// this function does something

// Brenda the Bouncer bot

const mayEnterClub = function (personAge, numberPeople) {
  if (personAge < 18) {
    return "this club is for adults";
  }
  if (numberPeople > 100) {
    return "it's too busy now, come back later";
  }
  return "come in";
};

const guest = mayEnterClub(16, 101);
console.log(guest);

// this function does something

const Average = function (number1, number2, number3, number4, number5) {
  return Math.round((number1 + number2 + number3 + number4 + number5) / 5);
};

const numbers = Average(3, 5, 7, 9, 11);
console.log(numbers);

// this function produces something
