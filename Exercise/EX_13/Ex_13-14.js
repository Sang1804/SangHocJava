var var_name = "abcd";
var n = 120;
this[var_name] = n;
//
console.log(this[var_name]);
var obj = {};
var key = "dynamicKey";
obj[key] = "Dynamic Value";
console.log(obj);
//ES6
let filename = "system.php";
console.log(filename.split(".").pop());
filename = "abc.js";
console.log(filename.split(".").pop());
//15
function difference(n) {
  if (n <= 13) {
    return 13 - n;
  } else {
    return (n - 13) * 2;
  }
}
console.log(difference(32));
//16
function SumOfTwo(a, b) {
  if (a == b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}
console.log(SumOfTwo(1, 2));
console.log(SumOfTwo(2, 2));
//17 giống 15
//18
function checkPair(a, b) {
  if (a == 50 || b == 50 || a + b == 50) return true;
  else return false;
}
console.log(checkPair(60, 30));
console.log(checkPair(40, 10));
console.log(checkPair(50, 40));
//19
function testhundred(x) {
  return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}
console.log(testhundred(10));
console.log(testhundred(90));
console.log(testhundred(99));
console.log(testhundred(199));
console.log(testhundred(200));
//20
function checkInter(a, b) {
  return (a > 0 && b < 0) || (a < 0 && b > 0);
}
console.log(checkInter(-2, 3));
console.log(checkInter(2, 2));
//21
function checkString_Py(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === "Py")
    return str1;
  else return "Py" + str1;
}
console.log(checkString_Py("Python"));
console.log(checkString_Py("tago"));
//22
function remove_char(str1, vitri) {
  part1 = str1.substring(0, vitri);
  part2 = str1.substring(vitri + 1, str1.length);
  return part1 + part2;
}
console.log(remove_char("Python", 0));
//23
function exchange_begin_last(str1) {
  if (str1.length <= 1) return str1;
  mid_char = str1.substring(1, str1.length - 1);
  return str1.charAt(str1.length - 1) + mid_char + str1.charAt(0);
}
console.log(exchange_begin_last("a"));
console.log(exchange_begin_last("abc"));
//24
function dup_char_FL(str1) {
  first_char = str1.substring(0, 1);
  return first_char + str1 + first_char;
}
console.log(dup_char_FL("Sang"));
//25
function test37(x) {
  return x % 3 == 0 || x % 7 == 0;
}
console.log(test37(10));
console.log(test37(21));
//26
function createString_3lastchar(str1) {
  last_char = str1.substring(str1.length - 3);
  if (str1.length >= 3) return last_char + str1 + last_char;
  else return undefined;
}
console.log(createString_3lastchar("Sang"));
console.log(createString_3lastchar("S"));
