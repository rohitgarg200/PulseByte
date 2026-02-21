const root = document.getElementById("articleRoot");
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const siteUrl = "https://rohitgarg.github.io/pulsebyte-daily";

const selectedPost = (Array.isArray(POSTS) ? POSTS : []).find((post) => post.slug === slug) || POSTS?.[0];

const setMeta = (post) => {
  const pageTitle = `${post.title} | PulseByte Daily`;
  const pageDescription = post.summary;
  const pageUrl = `${siteUrl}/post.html?slug=${encodeURIComponent(post.slug)}`;

  document.title = pageTitle;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute("content", pageDescription);

  const ogTitle = document.getElementById("ogTitle");
  const ogDescription = document.getElementById("ogDescription");
  const ogUrl = document.getElementById("ogUrl");
  const twTitle = document.getElementById("twTitle");
  const twDescription = document.getElementById("twDescription");
  const canonical = document.getElementById("canonical");

  if (ogTitle) ogTitle.setAttribute("content", pageTitle);
  if (ogDescription) ogDescription.setAttribute("content", pageDescription);
  if (ogUrl) ogUrl.setAttribute("content", pageUrl);
  if (twTitle) twTitle.setAttribute("content", pageTitle);
  if (twDescription) twDescription.setAttribute("content", pageDescription);
  if (canonical) canonical.setAttribute("href", pageUrl);
};

if (!selectedPost) {
  root.innerHTML = `
    <section class="post-card">
      <h1>Article not found</h1>
      <p>This article is not available yet.</p>
      <a class="read-link" href="index.html">Back to homepage</a>
    </section>
  `;
} else {
  setMeta(selectedPost);

  const sectionsMarkup = selectedPost.sections
    .map(
      (section) => `
        <section class="post-section">
          <h2>${section.heading}</h2>
          <p>${section.content}</p>
        </section>
      `
    )
    .join("");

  const sourcesMarkup = selectedPost.sources
    .map((source) => `<li><a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a></li>`)
    .join("");

  root.innerHTML = `
    <article class="post-card">
      <a class="back-link" href="index.html">← Back to home</a>
      <p class="meta">${selectedPost.category} • ${selectedPost.date} • ${selectedPost.readTime}</p>
      <h1>${selectedPost.title}</h1>
      <p class="post-summary">${selectedPost.summary}</p>
      ${sectionsMarkup}
      <section class="post-section">
        <h2>Sources</h2>
        <ul class="sources-list">${sourcesMarkup}</ul>
      </section>
    </article>
  `;
}
