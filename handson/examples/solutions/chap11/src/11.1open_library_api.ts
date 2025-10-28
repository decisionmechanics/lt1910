
// The Open Library provides a Web API for querying book details. The format is:
// https://openlibrary.org/isbn/<ISBN>.json
// • URL for an edition of War of the Worlds:
// https://openlibrary.org/isbn/9780241382707.json
// • The JSON response includes title, authors, publish_date, number_of_pages, and more
  // Create an application that takes an ISBN from the command line, queries the
    // Open Library API to retrieve the book details and then displays the title and
    // page count


(async () => {  // IIFE means Immediately Invoked Function Expression

    // try {
    //     const response = await fetch(
    //         "https://openlibrary.org/isbn/9780241382707.json"
    //     );
    //     if (!response.ok) {
    //         console.error(response.status);
    //     };
    //     const book = await response.json();
    //     console.log(`Title: ${book.title}`);
    //     console.log(`Page count: ${book.number_of_pages}`);
    // }
    // catch (err) {
    //     console.error(err);
    // }

    // it turns out that Open Library returns code 429 (Too Many Requests) if you make too many requests in a short time
    // so we will use a different API that provides book details based on ISBN
    // https://www.googleapis.com/books/v1/volumes?q=isbn:<ISBN>
    // e.g. https://www.googleapis.com/books/v1/volumes?q=isbn:9780241382707
    // paste the URL into a browser to see the JSON response
    // we find the page count is zero, but the title is correct
    // so try 'publisher' instead of page count
    // you can find the ISBN of a book by searching for it on https://www.isbnsearch.org/
    
    // for example, the ISBN for "The Hobbit" is 9780007458424
    // so the URL to get its details is:
    // https://www.googleapis.com/books/v1/volumes?q=isbn:9780007458424


try {
        const response = await fetch(
            "https://www.googleapis.com/books/v1/volumes?q=isbn:9780007458424"
        );
        if (!response.ok) {
            console.error(response.status); 
        };
        const data = await response.json();
        console.log("json data:", data);
        console.log("extracting book details...");
        if (data.totalItems > 0) {
            const bk = data.items[0].volumeInfo;
            console.log(`Title: ${bk.title}`);
            console.log(`Publisher: ${bk.publisher}`);
        } else {
            console.log("No book found with that ISBN");
        }
    }
    catch (err) {
        console.error(err);
    }

})();
// Note: node --version 18.0.0 or later is required for fetch() support