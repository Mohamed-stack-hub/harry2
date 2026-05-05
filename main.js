// =========================
// ENTER MAGIC
// =========================
function enterMagic() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("surprise").classList.remove("hidden");

  const sound = document.getElementById("magicSound");
  if (sound) sound.play();
}

// =========================
// STARS
// =========================
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((s) => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    s.y += 0.4;
    if (s.y > canvas.height) s.y = 0;
  });

  requestAnimationFrame(drawStars);
}

drawStars();

// =========================
// SPARKLE TRAIL (WAND CURSOR)
// =========================
document.addEventListener("mousemove", function (e) {
  createSparkle(e.pageX, e.pageY);
});

function createSparkle(x, y) {
  let s = document.createElement("div");
  s.className = "sparkle";
  s.style.left = x + "px";
  s.style.top = y + "px";
  document.body.appendChild(s);

  setTimeout(() => s.remove(), 500);
}

// =========================
// SMOKE EFFECT 🌫️
// =========================
function createSmoke(x, y) {
  let smoke = document.createElement("div");
  smoke.className = "smoke";
  smoke.style.left = x + "px";
  smoke.style.top = y + "px";
  document.body.appendChild(smoke);

  setTimeout(() => smoke.remove(), 1200);
}

// =========================
// FLASH ⚡
// =========================
function flash() {
  let f = document.createElement("div");
  f.style.position = "fixed";
  f.style.width = "100%";
  f.style.height = "100%";
  f.style.background = "white";
  f.style.opacity = "0.6";
  f.style.zIndex = 999;
  document.body.appendChild(f);

  setTimeout(() => f.remove(), 120);
}

// =========================
// LIGHTNING
// =========================
function triggerLightning() {
  const lightning = document.getElementById("lightning");
  if (!lightning) return;

  lightning.classList.add("lightning-flash");

  setTimeout(() => {
    lightning.classList.remove("lightning-flash");
  }, 250);
}

function startLightningLoop() {
  setInterval(() => {
    if (Math.random() > 0.75) triggerLightning();
  }, 2000);
}

// =========================
// INTRO 🎬
// =========================
window.onload = function () {
  startIntro();
  startLightningLoop();
};

function startIntro() {
  const text = "✨ A Magical Journey Begins... ✨";

  typeIntro(text, "introText", 60, () => {
    setTimeout(() => {
      endIntro();
      setTimeout(showNameCinematic, 800);
    }, 1500);
  });

  playIntroSound();
}

function typeIntro(text, id, speed, callback) {
  let el = document.getElementById(id);
  el.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      el.innerHTML += text[i];
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }

  typing();
}

function endIntro() {
  const intro = document.getElementById("intro");
  intro.classList.add("fadeOut");

  setTimeout(() => {
    intro.style.display = "none";
  }, 2000);
}

function playIntroSound() {
  let audio = new Audio("intro.mp3");
  audio.volume = 0.6;
  audio.play().catch(() => {});
}

// =========================
// 🪄 NAME WITH WAND + SMOKE
// =========================
const herName = "Basma to Gryffindor ";

function showNameCinematic() {
  const el = document.getElementById("nameText");
  const screen = document.getElementById("nameReveal");

  if (!el || !screen) return;

  screen.classList.add("active");
  el.innerHTML = "";

  let i = 0;

  function typing() {
    if (i < herName.length) {
      el.innerHTML += herName[i];

      // مكان الحرف
      let rect = el.getBoundingClientRect();
      let x = rect.left + rect.width;
      let y = rect.top + rect.height / 2;

      // sparkle + smoke
      createSparkle(x, y);
      createSmoke(x, y);

      i++;
      setTimeout(typing, 120);
    } else {
      el.classList.add("glow");
      flash();
    }
  }

  typing();

  setTimeout(() => {
    screen.classList.remove("active");
    document.getElementById("home").classList.remove("hidden");
  }, 5000);
}

// =========================
// 🧙‍♂️ SORTING HAT (رجعناه)
// =========================
function chooseHouse() {
  const houses = [
    "Gryffindor 🦁",
    "Slytherin 🐍",
    "Ravenclaw 🦅",
    "Hufflepuff 🦡",
  ];

  const result = houses[Math.floor(Math.random() * houses.length)];

  const el = document.getElementById("houseResult");

  if (!el) return;

  el.innerText = "✨ You belong to " + result;

  // تأثير بسيط
  el.style.opacity = "0";
  el.style.transform = "scale(0.8)";

  setTimeout(() => {
    el.style.transition = "0.5s";
    el.style.opacity = "1";
    el.style.transform = "scale(1)";
  }, 50);
}
setTimeout(() => {
  el.classList.add("glow");
}, 200);

// =========================
// 🧙‍♂️ SORTING HAT (رجعناه)
// =========================
function chooseHouse() {
  const houses = [
    "Gryffindor 🦁",
    "Slytherin 🐍",
    "Ravenclaw 🦅",
    "Hufflepuff 🦡",
  ];

  const result = houses[Math.floor(Math.random() * houses.length)];

  const el = document.getElementById("houseResult");

  if (!el) return;

  el.innerText = "✨ You belong to " + result;

  // تأثير بسيط
  el.style.opacity = "0";
  el.style.transform = "scale(0.8)";

  setTimeout(() => {
    el.style.transition = "0.5s";
    el.style.opacity = "1";
    el.style.transform = "scale(1)";
  }, 50);
}
