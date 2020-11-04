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
    {
        quote: "The way to right wrongs is to turn the light of truth upon them.",
        author: "Ida B. Wells"
    },
    {
        quote: "The stars are the land-marks of the universe.",
        author: "Sir John Frederick William Herschel"
    },
    {
        quote: "How often things occur by mere chance which we dared not even hope for.",
        author: "Terence (Publius Terentius Afer)"
    },
    {
        quote: "There will be rest, and sure stars shining.",
        author: "Sara Teasdale"
    },
    {
        quote: "See others as yourself. See families as your family. See towns as your town. See countries as your country. See worlds as your world.",
        author: "Laozi"
    },
    {
        quote: "The art of life lies in a constant readjustment to our surroundings.",
        author: "Okakura Kakuzo"
    },
    {
        quote: "Be pleasant until ten o'clock in the morning and the rest of the day will take care of itself.",
        author: "Elbert Hubbard"
    },
    {
        quote: "People don't notice whether it's winter or summer when they're happy.",
        author: "Anton Chekov"
    },
    {
        quote: "I always pet a dog with my left hand, because if he bit me, I'd still have my right hand to paint with.",
        author: "Juan Gris"
    },
    {
        quote: "Cold is agreeable, that we may get warm.",
        author: "Blaise Pascal"
    },   
    {
        quote: "Politeness is the flower of humanity.",
        author: "Joseph Joubert"
    },  
    {
        quote: "Only the moment counts. It determines life.",
        author: "Franz Kafka"
    },  
    {
        quote: "No work which is destined to become a classic can look like the classics which have preceded it.",
        author: "Juan Gris"
    },  
    {
        quote: "All the windows of my heart I open to the day.",
        author: "John Greenleaf Whittier"
    },  
    {
        quote: "Existence would be intolerable if we were never to dream.",
        author: "Anatole France"
    },  
    {
        quote: "Rose, O pure contradiction…",
        author: "Rainer Maria Rilke"
    }, 
    {
        quote: "The art of life is a constant readjustment to our surroundings.",
        author: "Masaoka Shiki"
    },   
    {
        quote: "Felicity is in possession, happiness in anticipation.",
        author: "Jean Racine"
    },
    {
        quote: "Walking alone on the left bank of the river / I watched the heron seek her reedy nest.",
        author: "O-reuk"
    },
    {
        quote: "No benefit is more constant than simplicity; no happiness more constant than peace.",
        author: "Han Fei"
    }    
]

function newQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    let id = document.getElementById("quote");
    let author = document.getElementById("author");
    let quote = quotes[random].quote;
    let by = "— " + quotes[random].author;
    id.innerHTML = quote;
    author.innerHTML = by;

    document.getElementById("main").animate({
        opacity: [ 0, 1 ]
    }, 1000);

    let tweet = document.getElementsByTagName("a")[0];
    let href = document.createAttribute("href");
    href.value = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + quote + " " + by;
    tweet.setAttributeNode(href);
}

window.onload = newQuote;

