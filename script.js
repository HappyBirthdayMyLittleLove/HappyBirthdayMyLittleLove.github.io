const blockContainer = document.getElementById("blockContainer");
const blockElement = document.querySelectorAll(".block");
const wandOfLightButton = document.querySelector(".wand-of-light");
const wandTitle = document.querySelector(".wand-title");
const greeting = document.querySelector(".greeting");
const leftFireworks = document.querySelector(".container1");
const rightFireworks = document.querySelector(".container3");

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
  greeting.style.opacity = "1";
  greeting.style.fontSize = "70px";
  wandOfLightButton.style.opacity = "1";
  wandOfLightButton.style.transition = "opacity 3000ms";
  wandOfLightButton.style.transitionDelay = "1000ms";
}

const randomNumber = Math.floor(Math.random() * plainColors.length);
const randomNumberPlain = Math.floor(Math.random() * plainColors.length);
const randomNumberborder = Math.floor(Math.random() * plainColors.length);
greeting.style.color = plainColors[randomNumber];
wandOfLightButton.style.color = plainColors[randomNumberPlain];
wandOfLightButton.style.borderColor = "buttonBorder";
wandOfLightButton.style.borderColor = plainColors[randomNumberborder];

const greetingText = "Happy Birthday My Love";
greetingText.split("").forEach((character) => {
  const characterSpan = document.createElement("span");
  characterSpan.innerText = character;
  greeting.appendChild(characterSpan);
});
const greetLetter = document.querySelectorAll(".greeting span");

greetLetter.forEach((letter) => {
  letter.addEventListener("mouseenter", () => {
    const randomNumberLetter = Math.floor(Math.random() * plainColors.length);
    letter.style.color = plainColors[randomNumberLetter];
  });
});

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

const bdayCard = () => {
  const speech =
    "My love, I am so proud of you and the person you've become. You have unconditionally supported me from day one and showed me a love I didnt know was possible. I'll always be here for you the same way you've always been there for me. I love you. -Trent";
  speech.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    wandTitle.appendChild(characterSpan);
  });
  const characters = document.querySelectorAll(".wand-title span");

  characters.forEach((letter) => {
    letter.addEventListener("mouseenter", () => {
      const randomNumberLetter = Math.floor(Math.random() * plainColors.length);
      letter.style.color = plainColors[randomNumberLetter];
    });
  });
};
const WOLSwitch = () => {
  blockContainer.style.backgroundColor = "#0F0F1A";
  document.body.style.backgroundColor = "#0F0F1A";

  greeting.style.transition = "opacity 800ms ease-in";
  greeting.style.opacity = "0";

  wandOfLightButton.style.opacity = "0";
  wandOfLightButton.style.transition = "opacity 800ms ease-in";
  wandOfLightButton.disabled = "true";

  wandTitle.innerHTML = "";
  wandTitle.style.transition = "opacity 2000ms ease-in-out";
  wandTitle.style.opacity = "1";
  wandTitle.style.color = "transparent";
  leftFireworks.style.opacity = "1";
  rightFireworks.style.opacity = "1";
  bdayCard();
};

const bomb = () => {
  wandOfLightButton.addEventListener("mousedown", () => {
    blockElement.forEach((block) => {
      block.style.transition = "opacity ease-in";
      block.style.opacity = ".8";
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
