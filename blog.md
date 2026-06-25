---
layout: default
title: Blog
permalink: /blog/
---

# Blog

{% if site.posts.size > 0 %}
  <div class="grid">
    {% for post in site.posts %}
      <article class="post-link">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p class="meta">{{ post.date | date: "%Y-%m-%d" }}</p>
        <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p>No posts yet.</p>
{% endif %}
