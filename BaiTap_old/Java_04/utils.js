// Hàm tiện ích trong utils.js
function getCurrentYear() {
  return new Date().getFullYear();
}

function formatArticle(title, body) {
  return `
        <article>
            <h2>${title}</h2>
            <p>${body}</p>
        </article>
    `;
}
