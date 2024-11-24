const str1 = "Chào bạn!";
const str2 = "Học JavaScript rất thú vị!";
const str3 = `Cùng học ${str1}`;

const strLength = str2.length;
const upperStr = str1.toUpperCase();
const lowerStr = str3.toLowerCase();
const concatStr = str1.concat(" ", str2);
const charAtStr = str1.charAt(5);
const indexOfStr = str1.indexOf("b");
const tachStr = str1.split(" ");

const output = document.getElementById("output");
output.innerHTML = `
    <p>Chuỗi 1: ${str1}</p>
    <p>Chuỗi 2: ${str2}</p>
    <p>Chuỗi 3: ${str3}</p>
    <p>Độ dài của Chuỗi 2: ${strLength}</p>
    <p>Chuỗi 1 in hoa: ${upperStr}</p>
    <p>Chuỗi 3 in thường: ${lowerStr}</p>
    <p>Chuỗi sau khi nối: ${concatStr}</p>
    <p>trong chuỗi Kí tự thứ 4: ${charAtStr}</p>
    <p>Tìm kiểm trong chuổi có chữ "b" kh\ return vi tri:${indexOfStr}</p>
    <p>Tach chuoi lam 2 ${tachStr}</p>
`;
