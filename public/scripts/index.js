//Get new quote on document load
$( document ).ready(() => {
  //update copyright
  const year = new Date().getFullYear();
  $('.copyright').text(`Copyright © ${year} Jason JF `);
  // console.log(year);


  //get a new quote
  getNewQuote();
});

//get a new quote when button is clicked
const getNewQuote = async () => {
    
    const response = await fetch('/newQuote');
    const quoteData = await response.json(); //extract JSON from the http response
   
    //store quotes
    let newQuote = quoteData.content;
    let author = quoteData.author;

    //update DOM
    $(".quote").text('"' + newQuote + '"');
    $(".authorName").html('<em>-' + author + '</em>');
  }

  //flip card
  function flipCard() {
    
    if($(".mainQuoteWrapper").hasClass("hidden")){
      $(".about-wrapper").hide(10);
      $(".mainQuoteWrapper").toggleClass("hidden");
    } else {
      $(".mainQuoteWrapper").toggleClass("hidden");
      $(".about-wrapper").fadeIn();
      
    }
    
  }