---
layout: default
title: Home
---

<section class="hero">
  <div>
    <p class="eyebrow">Personal Academic Website</p>
    <h1>{{ site.author.name }}</h1>
    <p class="lead">
      I am interested in affective computing and intent recognition. This site
      collects my research interests, papers, notes, and a small random lyric
      corner.
    </p>

    <ul class="info-list">
      <li><strong>Affiliation:</strong> {{ site.author.affiliation }}</li>
      {% if site.author.email and site.author.email != "" %}
        <li><strong>Email:</strong> <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></li>
      {% endif %}
      <li><strong>GitHub:</strong> <a href="{{ site.author.github }}">{{ site.author.github_username }}</a></li>
      {% if site.author.location and site.author.location != "" %}
        <li><strong>Location:</strong> {{ site.author.location }}</li>
      {% endif %}
    </ul>
  </div>

  <aside class="panel" aria-labelledby="lyrics-title">
    <p class="eyebrow" id="lyrics-title">Random Folklore / Evermore</p>
    <p class="lyric" data-random-lyric>Loading...</p>
    <p class="track-meta" data-random-lyric-meta></p>
    <button type="button" data-refresh-lyric>Refresh</button>
  </aside>
</section>

<section>
  <h2>Research Interests</h2>
  <ul class="tags">
    <li>Affective Computing</li>
    <li>Intent Recognition</li>
    <li>Human-Centered AI</li>
  </ul>
  <p>
    Edit these topics in <a href="{{ '/research/' | relative_url }}">Research</a>
    to describe your long-term research agenda.
  </p>
</section>

<section>
  <h2>Recent Writing</h2>
  <div class="grid">
    {% for post in site.posts limit:3 %}
      <article class="post-link">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="meta">{{ post.date | date: "%Y-%m-%d" }}</p>
        <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<script>
  window.siteLyrics = {{ site.data.ts_tracks | jsonify }};
</script>
<script src="{{ '/assets/js/lyrics.js' | relative_url }}"></script>
