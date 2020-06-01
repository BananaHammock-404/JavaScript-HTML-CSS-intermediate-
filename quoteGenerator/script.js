const quotes = [
    {
        name: "Stephan King",
        qoute: "Get busy living or get busy dying."
    },
    {
        name: "John F.Kennedy",
        qoute: "Those who dare to fair miserably can achieve greatly."
    },
    {
        name: "Abraham Lincoln",
        qoute: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down."
    },
    {
        name: "Leonardo Da Vinci",
        qoute: "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things."
    },
    {
        name: "Leo Tolstoy",
        qoute: "If you want to be happy, be."
    }
]


const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].qoute;
}

quoteBtn.addEventListener('click', displayQuote);

