(function () {
  const consolelogElement = document.getElementById("console-log");
  //Tạo hàm thay thế
  console.log = function (...args) {
    args.forEach((arg) => {
      const logEntry = document.createElement("div");
      try {
        if (typeof arg === "undefined") {
          throw new Error("Biến này không truy cập được");
        }
        logEntry.textContent =
          typeof arg === "object" ? JSON.stringify(arg, null, 2) : arg;
      } catch (Error) {
        logEntry.textContent = "Lỗi: ${error.message}";
      }
      consolelogElement.appendChild(logEntry);
    });
  };
})();

{
  const a = 5;
  console.log(a); // Hiển thị giá trị 5
}

try {
  console.log(a); // Không thể truy cập vì a là biến cục bộ
} catch (e) {
  console.log(e.message); // Sẽ báo lỗi: "Đây là biến được khai báo cục bộ nên không thể hiện ra được số"
}

// const a= 5;

// {
//     console.log("Giá trị bên trong khối lệnh: ", a);
// }
// console.log ("Giá trị bên ngoài khối lệnh: ", a);

const a = 6;
{
  const a = 5;

  console.log(a); // 5
}
console.log(a);
c = 7;

{
  console.log(c); // 7

  d = 8;
}

console.log(c);
