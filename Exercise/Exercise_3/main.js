var today = new Date(); //Lấy ngày hôm nay
var dd = today.getDate(); //Ngày trong tháng
var mm = today.getMonth() + 1; //Tháng
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
//Định dạng
today = mm + "-" + dd + "-" + yyyy;
console.log(today);
today = dd + "-" + mm + "-" + yyyy;
console.log(today);
