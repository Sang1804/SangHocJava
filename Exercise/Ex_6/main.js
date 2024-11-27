function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapyear(2016));
const is_leapyear = (year) => new Date(year, 1, 29).getMonth() === 1;
console.log("Đây là năm: " + is_leapyear(2016));
