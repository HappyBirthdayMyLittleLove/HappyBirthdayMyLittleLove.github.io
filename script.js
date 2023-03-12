const blockContainer = document.getElementById("blockContainer");
const blockElement = document.querySelectorAll(".block");
const wandOfLightButton = document.querySelector(".wand-of-light");
const wandOfMemoriesButton = document.querySelector(".wand-of-memories");
const wandTitle = document.querySelector(".wand-title");
const greeting = document.querySelector(".greeting");
const leftFireworks = document.querySelector(".container1");
const rightFireworks = document.querySelector(".container3");

let wandOfLightOn;
let wandOfMemoriesOn;
let titleActivated;
const gradientColors = [
  "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
  "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
  "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
  "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
  "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
  "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)",
  "linear-gradient(to right, #f83600 0%, #f9d423 100%)",
  "linear-gradient(to top, #f77062 0%, #fe5196 100%)",
  "linear-gradient(to top, #4481eb 0%, #04befe 100%)",
  "linear-gradient(to right, #f83600 0%, #f9d423 100%)",
  "linear-gradient(60deg, #abecd6 0%, #fbed96 100%)",
  "linear-gradient(to top, #209cff 0%, #68e0cf 100%)",
  "linear-gradient(to top, #b3ffab 0%, #12fff7 100%)",
  "linear-gradient(to right, #0acffe 0%, #495aff 100%)",
];
const plainColors = [
  "#F08080",
  "#7FFFD4",
  "#00FFFF",
  "#FFB6C1",
  "#48D1CC",
  "#FFC0CB",
  "#FFA07A",
  "#DDA0DD",
  "#FF6347",
];

const styleLanding = () => {
  const randomNumberPlain = Math.floor(Math.random() * plainColors.length);
  const randomNumberborder = Math.floor(Math.random() * plainColors.length);
  wandOfLightButton.style.borderColor = "buttonBorder";
  wandOfLightButton.style.borderColor = plainColors[randomNumberborder];
  wandOfLightButton.style.color = plainColors[randomNumberPlain];

  const randomNumber = Math.floor(Math.random() * plainColors.length);
  greeting.style.color = plainColors[randomNumber];
  greeting.style.opacity = "1";
  greeting.style.transition = "opacity 1300ms ease-out";
  greeting.style.fontSize = "70px";
  greeting.style.transition = "font-size 1300ms ease-out";

  wandOfLightButton.style.opacity = "1";
  wandOfLightButton.style.transition = "opacity 3000ms";
  wandOfLightButton.style.transitionDelay = "1000ms";

  blockContainer.style.backgroundColor = "black";
  document.body.style.backgroundColor = "black";
};
styleLanding();

const bdayCard = () => {
  const speech =
    "My love, I am so proud of you and the person you've become. You have supported me unconditionally from day one and showed me a love I didnt know was possible. I'll always be here for you the same way you've always been there for me. I love you. -Trent";
  speech.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    characterSpan.classList.add("characters");
    wandTitle.appendChild(characterSpan);
  });
  const characters = document.querySelectorAll("span.characters");
  characters.forEach((letter) => {
    letter.addEventListener("mouseenter", () => {
      const randomNumber = Math.floor(Math.random() * plainColors.length);
      letter.style.color = plainColors[randomNumber];
    });
  });
};

const WOLSwitch = () => {
  wandTitle.innerHTML = "";
  blockContainer.style.backgroundColor = "#0F0F1A";
  document.body.style.backgroundColor = "#0F0F1A";
  wandTitle.style.transition = "opacity 2000ms ease-in-out";
  wandTitle.style.opacity = "1";
  wandTitle.style.color = "transparent";
  leftFireworks.style.transition = "opacity 1000ms ease-in";
  leftFireworks.style.opacity = "1";
  leftFireworks.style.backgroundImage = "url(/images/fireworks10.jpeg)";
  rightFireworks.style.transition = "opacity 1000ms ease-in";
  rightFireworks.style.opacity = "1";
  rightFireworks.style.backgroundImage = "url(/images/fireworks10.jpeg)";

  greeting.style.opacity = "0";
  greeting.style.transition = "opacity 1200ms ease-in";
  greeting.style.fontSize = "0px";
  greeting.style.transition = "font-size 1200ms ease-in";

  wandOfLightButton.style.opacity = "0";
  wandOfLightButton.style.transition = "opacity 1000ms ease-in";
  wandOfLightButton.disabled = "true";

  wandOfLightOn = true;
  titleActivated = true;
  wandOfLightOn === true ? wandOfLight() : (wandOfLightOn = false);
  bdayCard();
};
wandTitle.addEventListener("mouseenter", () => {
  if (titleActivated === true) {
    wandTitle.style.transition = "opacity 500ms";
    wandTitle.style.opacity = "1";
  }
});
//Greetings
const colorGreeting = () => {
  const greetingText = "Happy Birthday My Love";
  greetingText.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.classList.add("greetLetter");
    characterSpan.innerText = character;
    greeting.appendChild(characterSpan);
  });
  const greetLetter = document.querySelectorAll(".greetLetter");

  greetLetter.forEach((letter) => {
    letter.addEventListener("mouseenter", () => {
      const randomNumber = Math.floor(Math.random() * plainColors.length);
      letter.style.color = plainColors[randomNumber];
    });
  });
};
colorGreeting();

wandOfLightButton.addEventListener("mouseenter", () => {
  const randomNumberPlain = Math.floor(Math.random() * plainColors.length);
  const randomNumberborder = Math.floor(Math.random() * plainColors.length);

  wandOfLightButton.style.borderColor = "buttonBorder";
  wandOfLightButton.style.borderColor = plainColors[randomNumberborder];
  wandOfLightButton.style.color = plainColors[randomNumberPlain];
});
wandOfLightButton.addEventListener("mouseleave", () => {
  wandOfLightButton.style.backgroundImage = "";
  wandOfLightButton.style.borderColor = "";
});
wandOfMemoriesButton.addEventListener("mouseenter", () => {
  const randomNumberPlain = Math.floor(Math.random() * plainColors.length);
  const randomNumberborder = Math.floor(Math.random() * plainColors.length);

  wandOfMemoriesButton.style.borderColor = "buttonBorder";
  wandOfMemoriesButton.style.borderColor = plainColors[randomNumberPlain];
  wandOfMemoriesButton.style.color = plainColors[randomNumberborder];
});
wandOfMemoriesButton.addEventListener("mouseleave", () => {
  wandOfMemoriesButton.style.backgroundImage = "";
  wandOfMemoriesButton.style.borderColor = "";
});

const wandOfLight = () => {
  blockElement.forEach((block) => {
    block.addEventListener("mouseenter", () => {
      block.style.opacity = ".8";
      block.style.transition = "opacity";
      const randomNumber = Math.floor(Math.random() * gradientColors.length);
      block.style.backgroundImage = gradientColors[randomNumber];
    });
    block.addEventListener("mouseleave", () => {
      block.style.opacity = "0";
      block.style.transition = "opacity 1000ms";
      const randomNumber = Math.floor(Math.random() * gradientColors.length);
      block.style.backgroundImage = gradientColors[randomNumber];
    });
  });
};

const bomb = () => {
  wandOfLightButton.addEventListener("mousedown", () => {
    blockElement.forEach((block) => {
      block.style.transition = "opacity ease-in";
      block.style.opacity = ".9";
      const randomNumber = Math.floor(Math.random() * gradientColors.length);
      block.style.backgroundImage = gradientColors[randomNumber];
    });
  });
  wandOfLightButton.addEventListener("mouseup", () => {
    blockElement.forEach((block) => {
      block.style.transition = "opacity 2000ms ease-out";
      block.style.opacity = "0";
    });
  });
};
bomb();
