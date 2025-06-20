(() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = "";
  console.log("content");
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;
    console.log("video>>>", videoId);
    if (type === "NEW") {
      currentVideo = videoId;
      newVideoLoaded();
    }
  });

  const newVideoLoaded = () => {
    const bookmarkBtnExist = document.querySelector(".bookmark-btn");
    if (!bookmarkBtnExist) {
      const bookmarkBtn = document.createElement("img");
      bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
      bookmarkBtn.className = "ytp-button bookmark-btn";

      youtubeLeftControls = document.querySelector(".ytp-left-controls");
      youtubePlayer = document.querySelector(".video-stream")

      youtubeLeftControls.appendChild(bookmarkBtn)
      book
    }
  };
  newVideoLoaded();
})();
