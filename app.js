let quotes = [
    {
        quote: "I want to cultivate the seed that was placed in me until the last small twig has grown.",
        author: "Käthe Kollwitz"
    },
    {
        quote: "The eye is the most refined of our senses, the one which communicates most directly with our mind, our consciousness.",
        author: "Rainer Maria Rilke"
    },
    {
        quote: "This world is but canvas to our imaginations.",
        author: "Henry David Thoreau"
    },
    {
        quote: "The excellence of every art is its intensity.",
        author: "John Keats"
    },
    {
        quote: "One of the great delights of writing… is that it can give you a sense of freedom.",
        author: "Donald Horne"
    },
    {
        quote: "The best preparation for tomorrow is to do today’s work superbly well.",
        author: "William Osler"
    },
    {
        quote: "‘Life— / Pent, overflowing /Stoops and façades / Jostling, pushing, contriving /Seething as in a great vat…",
        author: "Lola Ridge"
    },
    {
        quote: "It is high time to rekindle the stars.",
        author: "Guillaume Apollinaire"
    },
    {
        quote: "There is nothing like staying at home for real comfort.",
        author: "Jane Austen"
    },
    {
        quote: "Health is the greatest of human blessings.",
        author: "Hippocrates"
    },
    {
        quote: "As long as I live I will have control over my being.",
        author: "Artemisia Gentileschi"
    },
    {
        quote: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci"
    },
    {
        quote: "The river sings / Sweeping below the wall on which I lean.",
        author: "Kim Pok Sik"
    },
    {
        quote: "Life is as full of paradoxes as roses are of thorns.",
        author: "Fernando Pessoa"
    },
    {
        quote: "I'm not afraid of storms, for I'm learning how to sail my ship.",
        author: "Louisa May Alcott"
    },
    {
        quote: "Felicity is in possession, happiness in anticipation.",
        author: "Jean Racine"
    },
    {
        quote: "Nothing endures but change.",
        author: "Heraclitus of Ephesus"
    },
    {
        quote: "Variety is the soul of pleasure.",
        author: "Aphra Behn"
    },
    {
        quote: "To possess taste, one must have some soul.",
        author: "Marquis de Vauvenargues"
    },
    {
        quote: "The soft spring breezes touch my cheek. / They bring me perfume from ten thousand flowers.",
        author: "Han Chong-Yoo"
    },
        
]

function newQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    let id = document.getElementById("quote");
    let author = document.getElementById("author");
    let quote = quotes[random].quote;
    let by = "— " + quotes[random].author;
    id.innerHTML = quote;
    author.innerHTML = by;

    let tweet = document.getElementsByTagName("a")[0];
    let href = document.createAttribute("href");
    href.value = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + quote + " " + by;
    tweet.setAttributeNode(href);
}

window.onload = newQuote;