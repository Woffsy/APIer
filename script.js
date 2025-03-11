var canClick = true;


const inputElm = document.getElementById("number");
const buttonElm = document.getElementById("btn");
const button2Elm = document.getElementById("btn2");
const button3Elm = document.getElementById("btn3");
const button4Elm = document.getElementById("btn4");
const button5Elm = document.getElementById("btn5");
const outputElm = document.getElementById("output");

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key":
    "live_bf3kvqcjnz3NBEb4EouDOAZIDLvfU8FX7KoK0vWvx65pzOkkfTM8RF4StxP8YIM6",
});

var requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};

buttonElm.addEventListener("click", () => {
    if (canClick === true) {
        numberFact();
        canClick = false;
        setTimeout(() => {
            canClick = true;
        }, 2000);
    }
})

button2Elm.addEventListener("click", () => {
    if (canClick === true) {
        jokeDad();
        canClick = false;
        setTimeout(() => {
            canClick = true;
        }, 2000);
    }
})

button3Elm.addEventListener("click", () => {
    if (canClick === true) {
        catPic();
        canClick = false;
        setTimeout(() => {
            canClick = true;
        }, 4000);
    }
})

button4Elm.addEventListener("click", () => {
    if (canClick === true) {
        pokemon();
        canClick = false;
        setTimeout(() => {
            canClick = true;
        }, 2000);
    }
})

button5Elm.addEventListener("click", () => {
    if (canClick === true) {
        getJoke();
        canClick = false;
        setTimeout(() => {
            canClick = true;
        }, 5000);
    }
})


function numberFact() {
  let tall = inputElm.value;
  outputElm.innerHTML = "Vennligst vent...";
  if (tall < 0) {
    outputElm.innerHTML = "Vennlighst skriv et positivt tall";
  } else {
    fetch(`http://numbersapi.com/${tall}`)
      .then((response) => response.text())
      .then((data) => (outputElm.innerHTML = data))
      .catch((error) => (outputElm.innerHTML = "Noe gikk galt"));
  }
}
function jokeDad() {
  outputElm.innerHTML = "Vennligst vent...";
  console.log("jokeDad");
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (outputElm.innerHTML = data.joke))
    .catch((error) => (outputElm.innerHTML = "Noe gikk galt"));
}
function catPic() {
  outputElm.innerHTML = "Vennligst vent...";
  fetch(
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
    requestOptions
  )
    .then((response) => response.text())
    .then(
      (result) =>
        (outputElm.innerHTML = `<img src="${
          JSON.parse(result)[0].url
        }" alt="cat">`)
    )
    .catch((error) => console.log("error", error));
}
function pokemon() {
  outputElm.innerHTML = "Vennligst vent...";
  let tall = inputElm.value;
  if (tall < 0) {
    outputElm.innerHTML = "Vennlighst skriv et positivt tall";
  } else {
    fetch(`https://pokeapi.co/api/v2/pokemon/${tall}`, requestOptions)
      .then((response) => response.json())
      .then((data) => (outputElm.innerHTML = `Pokemon name: ${data.name}`))
      .catch((error) => (outputElm.innerHTML = "Noe gikk galt"));
  }
}

function getJoke() {
    outputElm.innerHTML = "Vennligst vent...";
    fetch("https://v2.jokeapi.dev/joke/Any")
        .then((response) => response.json())
        .then((data) => {
            if (data.type === "single") {
                outputElm.innerHTML = data.joke;
                console.log("single")
            } else {
                outputElm.innerHTML = data.setup
                setTimeout(() => {
                    outputElm.innerHTML += "<br> " + data.delivery;
                }, 5000);
                console.log("twopart")
            }
        })
        .catch((error) => (outputElm.innerHTML = "Noe gikk galt"));
}
