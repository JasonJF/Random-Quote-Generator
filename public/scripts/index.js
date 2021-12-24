//button click
const getNewQuote = async () => {
    
    // const response = await fetch('http://api.quotable.io/random');
    const response = await fetch('/newQuote');
    const quoteData = await response.json(); //extract JSON from the http response
   
    // console.log(response);
    // console.log(quoteData);
    //store quotes
    let newQuote = quoteData.content;
    let author = quoteData.author;

    //update DOM
    $(".quote").text('"' + newQuote + '"');
    $(".authorName").html('<em>-' + author + '</em>');
  }

  //flip card
  function flipCard() {
    // console.log("flip card");
    if($(".speech-bubble").hasClass("hidden")){
      $(".about-wrapper").hide(10);
      $(".speech-bubble").toggleClass("hidden");
      $(".buttonWrapper").toggleClass("hidden");
    } else {
      $(".speech-bubble").toggleClass("hidden");
      $(".buttonWrapper").toggleClass("hidden");
      $(".about-wrapper").fadeIn();
      
    }
    
  }