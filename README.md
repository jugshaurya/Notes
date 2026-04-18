<p align="center">
  <a href="https://notes.jugshaurya.vercel.app/">
    <img alt="logo" src="./static/img/shaurya-bitmoji.jpeg" width="60" />
    <h2 align="center"><a href="https://jugshaurya.vercel.app/">Shaurya Singhal</a></h2>
  </a>
</p>
<p align="center"><a href="https://notes.jugshaurya.vercel.app/">Shaurya's Notes</a></p>
<p align="center">Software Developer + Open Source Contributor</p>

<br>

[![PR](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/jugshaurya/notes)
[![PR](https://img.shields.io/badge/PR-Welcome-blue.svg)](https://github.com/jugshaurya/notes)
[![GitLicense](https://gitlicense.com/badge/jugshaurya/showcase)](https://github.com/jugshaurya/notes)
<br/>
<img src="https://img.shields.io/badge/made%20with-docusaurus-cyan.svg" alt="made with docusaurus"> <img src="https://img.shields.io/github/last-commit/jugshaurya/notes" alt="last-commit"> <img src="https://img.shields.io/github/languages/code-size/jugshaurya/notes" alt="code-size">

## What is this?

A Docusaurus-powered notes site with:

- **25+ documentation topics** — DSA, CP, JavaScript, React, System Design, and more
- **56 blog posts** auto-generated from Jupyter notebooks and Medium articles
- **Recursive Table of Contents** mirroring the GitHub repo folder structure

### Content Sources

| Source | Type | Count |
|--------|------|-------|
| [jugshaurya/Machine-Learning](https://github.com/jugshaurya/Machine-Learning) | Jupyter Notebooks | 36 posts |
| [jugshaurya/Learn-Python](https://github.com/jugshaurya/Learn-Python) | Jupyter Notebooks | 17 posts |
| [Medium @shauryasinghal84](https://medium.com/@shauryasinghal84) | Articles | 3 posts |

## Quick Start

```bash
# Install dependencies
npm install

# Generate blog posts from repos + Medium
npm run generate-blogs

# Start dev server
npm start

# Build for production (auto-runs generate-blogs)
npm run build
```

## How to Add New Content

### Adding a new GitHub repo (Jupyter notebooks)

1. Open `scripts/blog-sources.json`
2. Add a new entry to the `notebooks` array:

```json
{
  "repo": "jugshaurya/new-repo-name",
  "branch": "main",
  "label": "Topic Label",
  "tags": ["tag1", "tag2"],
  "author": "shaurya"
}
```

3. Run `npm run generate-blogs` to regenerate all blog posts
4. The notebooks will appear in the Blog page and the Table of Contents page

### Adding a new Medium blog / changing Medium feed

1. Open `scripts/blog-sources.json`
2. Update the `medium.feedUrl` field:

```json
{
  "medium": {
    "feedUrl": "https://medium.com/feed/@your-username",
    "author": "shaurya"
  }
}
```

3. Run `npm run generate-blogs`

> **Note:** Medium RSS feeds return up to the 10 most recent posts. This is a Medium limitation.

### Adding a new author

1. Open `scripts/blog-sources.json`
2. Add to the `authors` object:

```json
{
  "authors": {
    "newauthor": {
      "name": "Full Name",
      "title": "Job Title",
      "url": "https://portfolio.com",
      "image_url": "https://github.com/username.png"
    }
  }
}
```

3. Use `"author": "newauthor"` in notebook or medium config

## How the Blog Generator Works

The script `scripts/generate-blogs.js` runs automatically before every build (`prebuild`):

1. **Clones** each configured GitHub repo (shallow clone, temp directory)
2. **Finds** all `.ipynb` files recursively
3. **Converts** each notebook to Markdown:
   - Markdown cells → preserved as-is (HTML escaped for MDX)
   - Code cells → fenced code blocks with syntax highlighting
   - Outputs → collapsible text blocks
   - Images → inline base64 or GitHub raw URLs
4. **Fetches** Medium RSS feed and converts HTML to Markdown
5. **Generates** `blog/*.md` files with proper frontmatter (title, tags, date, author)
6. **Generates** `src/data/toc.json` for the recursive Table of Contents page
7. **Cleans up** temp repos

Generated posts are marked with `<!-- generated-blog-post -->` so they can be safely re-generated without affecting manually written blog posts.

## Notes Topics

- [STL](https://notes.jugshaurya.vercel.app/docs/stl)
- [CPP](https://notes.jugshaurya.vercel.app/docs/cpp)
- [Algorithms](https://notes.jugshaurya.vercel.app/docs/algo)
- [Advance DS for CP](https://notes.jugshaurya.vercel.app/docs/advance-ds_approaches)
- [Graph Theory](https://notes.jugshaurya.vercel.app/docs/graphs)
- [Game Theory](https://notes.jugshaurya.vercel.app/docs/gameTheory)
- [Dynamic Programming](https://notes.jugshaurya.vercel.app/docs/dp)
- [Interview Question List](https://notes.jugshaurya.vercel.app/docs/questions)
- [Gatsby](https://notes.jugshaurya.vercel.app/docs/gatsby)
- [PostgreSQL](https://notes.jugshaurya.vercel.app/docs/postgresql)

## Contribution

1. Fork and clone the repo
2. `npm install`
3. `npm start`
4. Make changes, commit, and open a PR

## Find any issue/typo?

- Correct [@github](https://github.com/jugshaurya/Notes/tree/main/docs)
