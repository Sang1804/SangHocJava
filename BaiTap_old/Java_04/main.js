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
let content = "<p>Chuỗi 1 với chuỗi 2 là:" + str1 + " " + str2 + "</p>";

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
output.innerHTML += "<p>Chuỗi 1 và 2: " + str1 + " " + str2 + "</p>";

const article = {
  title: "Xuat template",

  body: "Su dung template de xuat truc tiep len trang web",
};

document.body.innerHTML = `

<section>

    <header>

         <h1>Hoc React</h1>

    </header>

    <article>

         <h2>${article.title}</h2>

         ${article.body}

    </article>

    <footer>

         <p>copyright ${new Date().getFullYear()} | Hoc React</p>

    </footer>

</section>

`;
