function palindrome(str) {
  //replace all characters found by the regex and elavate case
  let result = str.replaceAll(/\W|_/g, "").toUpperCase();
  console.log(result);

  //reverse it
  let x = result.split(""); //converts string to array
  x.reverse(); //reverses the array
  x = x.join("");

  //compare it
  // console.log(result.localeCompare(x.join("")))
  return !result.localeCompare(x)
    ? str + ": palindrome"
    : str + ": not palindrome";
}

function convertToRoman(n) {
  let roman = "";
  if (n < 3)
    //use a recursive function to reduce the number to an array

    return convertToRoman;
}

function getBase(num) {
  //base case
  if (num < 1) return num;

  //code
  //console.log(num);

  //recursion
  return getBase(num - 1);
}

//n-1 repeated. Top down.
//9*8*7*6*5*4*3*2*1 facturial(n)

function facturial(n) {
  if (n === 0) return 1;
  else {
    return n * facturial(n - 1);
  }
}

function fibonacci(n) {
  if (n < 2) return n;
  else {
    // console.log(n)
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// for (let i = 0; i < 40; i++) {

//   console.log(fibonacci(i))
// }

function fibonacci2() {
  let val = [];
  for (let i = 0; i < 10; i++) {
    if (i < 2) val.push(i);
    else {
      val.push(val[i - 1] + val[i - 2])
    }
  }
  console.log(val);
}
// fibonacci2();
// console.log("done");

function glob() {
  var printNumTwo;

  for (var i = 0; i < 3; i++) {
    console.log(i);
    if (i === 2) {
      break;
      printNumTwo = function () {
        return i;
      };
    }
  }

  console.log(printNumTwo());
}


function GCF(a, b) {
  let x = a * b;

}

function factor(n) {
  if (!n % 2 | n % 3) return "has factor";
  return "Prime"

  //divide

}

console.log(factor(13));