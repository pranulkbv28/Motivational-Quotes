let quoteContainer = document.getElementById("quoteContainer");
let button = document.getElementById("button");
let title = document.getElementById("quote-title");
let author = document.getElementById("quote-author");
let heading = document.getElementById("heading");

function motivate() {
  heading.style.display = "none";
  quoteContainer.style.display = "unset";
  if (quoteContainer.style.display == "none") {
    quoteContainer.style.display = "unset";
    console.log("Yes");
  } else if (quoteContainer.style.display == "unset") {
    button.classList.remove("btn");
    button.classList.add("btn2");
    nextQuote();
  }
}

function nextQuote() {
  button.innerHTML = "Click for New Quote";
  let randomQuote = Math.floor(Math.random() * 15);
  fetch("https://type.fit/api/quotes")
    .then((data) => {
      return data.json();
    })
    .then((quotes) => {
      title.innerText = quotes[randomQuote].text;
      author.innerText = quotes[randomQuote].author;
    });
}
