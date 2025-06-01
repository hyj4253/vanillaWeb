const quotes = [
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "With great power comes great responsibility.",
    author:  "Uncle Ben"
  },
  {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author:  "Sam Levenson"
  },
  {
      quote: "In case I don't see ya, good afternoon, good evening, and good night.",
      author:  "Truman"
  },
  {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author:  "Winston Churchill"
  },
  {
      quote: "F=ma^2",
      author:  "Newton"
  },
  {
      quote: "I can do this all day.",
      author:  "Captain America"
  },
  {
      quote: "To be, or not to be, that is the question.",
      author:  "William Shakespeare"
  },
  {
      quote: "To infinity and beyond!",
      author:  "Buzz Lightyear"
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
