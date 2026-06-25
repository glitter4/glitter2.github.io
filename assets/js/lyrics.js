(function () {
  const target = document.querySelector("[data-random-lyric]");
  const button = document.querySelector("[data-refresh-lyric]");
  const lyrics = Array.isArray(window.siteLyrics) ? window.siteLyrics : [];

  if (!target || lyrics.length === 0) {
    return;
  }

  function pickLyric() {
    const index = Math.floor(Math.random() * lyrics.length);
    const item = lyrics[index];
    const meta = document.querySelector("[data-random-lyric-meta]");

    if (typeof item === "string") {
      target.textContent = item;
      if (meta) {
        meta.textContent = "";
      }
      return;
    }

    target.textContent = item.title;
    if (meta) {
      meta.textContent = item.album;
    }
  }

  pickLyric();

  if (button) {
    button.addEventListener("click", pickLyric);
  }
})();
