//? Arr & Obj more Exercises

//TODO>> *)incremental operators
//* ++ , -- , += , -= , *= , /= , %=

//TODO>> 1)HowManyLetters App
const howManyLetters = (str) => {
  let total = 0;
  for (letter in str) {
    // console.log(str[letter])
    total = Number(letter) + 1;
  }
  return total;
};
const str = prompt("Enter your string");
console.log(`length of string is: ${howManyLetters(str)}`);

// //TODO>> 2)SumArrayApp
const sumArrayNumbers = (arr) => {
  let total = 0;
  arr.forEach((number) => (total += number));
  return total;
};
const arr = [2, 5, 2, 25, 2];
console.log(sumArrayNumbers(arr));

// //TODO>> 3)MaxNumberApp
const getMaxNumber = (arr) => {
  let max = arr[0];
  for (number of arr) {
    if (number > max) {
      max = number;
    }
  }
  return max;
};
const arr2 = [3, 53, 24, 43, 23, 52, 52, 25, 34, 58, 23];
console.log(getMaxNumber(arr2));

//TODO>> 4)LetterFrequencyApp
const letterFrequency = (str) => {
  const freq = {};
  for (char of str) {
    char in freq ? freq[char]++ : (freq[char] = 1);
  }
  return freq;
};
const string = prompt("Enter your string");
console.log(letterFrequency(string));

//TODO>> 5)WordFrequencyApp('ammar alzokm ammar') 👉 {'ammar': 2, 'alzokm': 1}
const wordFrequency = (str) => {
  const freq = {};
  let word = "";
  const words = [];
  for (letter in str) {
    if (!str[letter].includes(" ") && letter != str.length - 1) {
      word += str[letter];
    }
    if (!str[letter].includes(" ") && letter == str.length - 1) {
      word += str[letter];
      words.push(word);
      word = "";
    }
    if (str[letter].includes(" ") && word === "") {
      "ExtraSpace" in freq ? freq.ExtraSpace++ : (freq.ExtraSpace = 1);
    }
    if (str[letter].includes(" ") && word !== "") {
      words.push(word);
      word = "";
    }
  }
  words.forEach((word) => {
    word in freq ? freq[word]++ : (freq[word] = 1);
  });
  return freq;
};
console.log(wordFrequency(" ammar  alzokm  ammar  "));

//TODO>> 5)WordFrequencyApp('ammar alzokm ammar') 👉 {'ammar': 2, 'alzokm': 1} with split
const wordFrequency2 = (str) => {
  const freq = {};
  const words = str.split(" ");
  words.forEach((word) => {
    word in freq ? freq[word]++ : (freq[word] = 1);
  });
  return freq;
};
console.log(wordFrequency2(" ammar  alzokm  ammar  "));

//TODO>> 5)WordFrequencyApp('ammar alzokm ammar') 👉 {'ammar': 2, 'alzokm': 1} with another fucntion
const wordFrequency3 = (str) => {
  const words = str.split(" ");
  return letterFrequency(words);
};
console.log(wordFrequency3(" ammar  alzokm  ammar  "));
