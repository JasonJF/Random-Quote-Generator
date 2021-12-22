//button click
const getNewQuote = async () => {
    
    const response = await fetch('http://api.quotable.io/random');
    const quoteData = await response.json(); //extract JSON from the http response
   
    //store quotes
    let newQuote = quoteData.content;
    let author = quoteData.author;

    //update DOM
    $(".quote").text('"' + newQuote + '"');
    $(".authorName").text('-' + author);
  }