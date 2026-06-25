# Personal Academic Website

This is a lightweight Jekyll site for GitHub Pages.

## Edit Content

- `_config.yml`: site title, author, affiliation, email, and navigation.
- `index.md`: homepage and personal bio.
- `papers.md`: publication list.
- `research.md`: research interests.
- `_posts/`: blog posts in Markdown.
- `_data/lyrics.yml`: short lines used by the random lyric widget.

## Publish on GitHub Pages

1. Create a GitHub repository named `YOUR_USERNAME.github.io`.
2. Push this folder to the repository.
3. In GitHub, open **Settings > Pages**.
4. Set the source to the default branch and root folder.
5. Visit `https://YOUR_USERNAME.github.io`.

## Local Preview

Install Ruby, then run:

```powershell
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`.
