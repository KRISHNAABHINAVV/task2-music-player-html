const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

// Song details
const song = {
  title: "Peaceful Vibes",
  artist: "Lo-Fi Chill",
  description: "Relaxing instrumental music for studying or working.",
  src: "assets/song1.mp3" // change this to your file path
};

// Set initial song info
document.getElementById("title").textContent = song.title;
document.getElementById("artist").textContent = song.artist;
document.getElementById("description").textContent = song.description;
audio.src = song.src;

// Play/pause toggle
let isPlaying = false;
playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.innerHTML = "&#9654;"; // play icon
  } else {
    audio.play();
    playPauseBtn.innerHTML = "⏸️"; // pause icon
  }
  isPlaying = !isPlaying;
});

// Update progress bar
audio.addEventListener("timeupdate", () => {
  progress.value = audio.currentTime;
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

// Set duration once loaded
audio.addEventListener("loadedmetadata", () => {
  progress.max = audio.duration;
  durationEl.textContent = formatTime(audio.duration);
});

// Seek when progress bar is changed
progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});

// Volume control
volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

// Helper: Format time
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}
