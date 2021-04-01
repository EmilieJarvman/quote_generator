
let apiQuotes = [];

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes[12])
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getQuotes();