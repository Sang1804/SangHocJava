today = new Date();
var giangsinh = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
  giangsinh.setFullYear(giangsinh.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((giangsinh.getTime() - today.getTime()) / one_day) +
    " days left until Giang Sinh"
);
