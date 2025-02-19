// DOM
const quoteCard = document.querySelector('.quote-card');
const quoteCat = document.querySelector('.quote-category');
const quoteAuthor = document.querySelector('.quote-author');
const quoteText = document.querySelector('.quote-text');
quoteText.innerText = 'Click to generate a quote';

// quotes fetching
const options = {
    method: 'GET',
    headers: { 'X-Api-Key': 'NAwXDhtIa442zVFWLxiiq9n7nYzkm4zSROmbIH66' }
}


const $ = async() => {
    quoteCat.innerText = '';
    quoteAuthor.innerText = '';
    quoteText.innerText = 'loading...';
    fetch('https://api.api-ninjas.com/v1/quotes', options)
        .then(res => res.json()) // to parse JSON into JS Object
        .then(data => {
            // displaying quote in DOM
            const quote = data[0];
            quoteCat.innerText = quote.category;
            quoteAuthor.innerText = quote.author;
            quoteText.innerText = quote.quote;
        })
        .catch(error => console.error('Error:', error));
}
