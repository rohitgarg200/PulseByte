const articlesEl = document.getElementById("articles");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const countEl = document.getElementById("postCount");

const PAGE_SIZE = 12;
let renderedCount = 0;

const renderBatch = () => {
  if (!articlesEl || !Array.isArray(POSTS)) return;

  const next = POSTS.slice(renderedCount, renderedCount + PAGE_SIZE);

  next.forEach((post, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.animationDelay = `${index * 90}ms`;

    card.innerHTML = `
      <p class="meta">${post.category} • ${post.date} • ${post.readTime}</p>
      <h3>${post.title}</h3>
      <p>${post.summary}</p>
      <a class="read-link" href="post.html?slug=${encodeURIComponent(post.slug)}">Read full article</a>
    `;

    articlesEl.appendChild(card);
  });

  renderedCount += next.length;

  if (countEl) {
    countEl.textContent = `Showing ${renderedCount} of ${POSTS.length} articles`;
  }

  if (loadMoreBtn) {
    loadMoreBtn.hidden = renderedCount >= POSTS.length;
  }
};

renderBatch();

if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", renderBatch);
}
