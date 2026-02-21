const articlesEl = document.getElementById("articles");

if (articlesEl && Array.isArray(POSTS)) {
  POSTS.forEach((post, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.animationDelay = `${index * 130}ms`;

    card.innerHTML = `
      <p class="meta">${post.category} • ${post.date} • ${post.readTime}</p>
      <h3>${post.title}</h3>
      <p>${post.summary}</p>
      <a class="read-link" href="post.html?slug=${encodeURIComponent(post.slug)}">Read full article</a>
    `;

    articlesEl.appendChild(card);
  });
}
