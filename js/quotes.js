const addQuoteForm = document.querySelector('#add_quote_form');
addQuoteForm.style.display = 'flex';


function getQuotesFromLocalStorage() {
    return JSON.parse(localStorage.getItem('quotes')) || [];
}

function saveQuoteToLocalStorage(quote) {
    let quotes = getQuotesFromLocalStorage();
    quotes.push(quote);
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

function getInputData() {
    const quote = document.querySelector('#quote_text').value;
    const author = document.querySelector('#quote_author').value;
    const quoteData = {
        quote,
        author,
    };
    return quoteData;
}

function createQuoteElement(quoteData) {
    const quoteElement = document.createElement('div');
    quoteElement.classList.add('quote');

    const quoteText = document.createElement('blockquote');
    quoteText.classList.add('quote__text');
    quoteText.textContent = quoteData.quote;

    const quoteAuthor = document.createElement('figure');
    quoteAuthor.classList.add('quote__user');

    const quoteAuthorImage = document.createElement('img');
    quoteAuthorImage.classList.add('quote__photo');
    quoteAuthorImage.src = './images/default-avatar.jpg';
    quoteAuthorImage.alt = 'User avatar';

    const quoteAuthorNameBox = document.createElement('figcaption');
    quoteAuthorNameBox.classList.add('quote__user-box');

    const quoteAuthorParagraph = document.createElement('p');
    quoteAuthorParagraph.classList.add('quote__user-name');
    quoteAuthorParagraph.textContent = quoteData.author;

    quoteAuthorNameBox.appendChild(quoteAuthorParagraph);
    quoteAuthor.appendChild(quoteAuthorImage);
    quoteAuthor.appendChild(quoteAuthorNameBox);
    quoteElement.appendChild(quoteText);
    quoteElement.appendChild(quoteAuthor);

    return quoteElement;
}

function addQuote() {
    const quote = getInputData();
    if (quote.quote && quote.author) {
        saveQuoteToLocalStorage(quote);
        const quoteElement = createQuoteElement(quote);

        const quoteList = document.querySelector('.quotes');
        quoteList.prepend(quoteElement);

        addQuoteForm.reset();
    }
}

getQuotesFromLocalStorage().forEach(quote => {
    const quoteElement = createQuoteElement(quote);
    const quoteList = document.querySelector('.quotes');
    quoteList.prepend(quoteElement);
});

addQuoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addQuote();
});
