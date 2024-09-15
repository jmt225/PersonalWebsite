import { useState } from "react";

export default function Quote() {
    const [quote, setQuote] = useState(["Then I awoke, and knew not whether to throw myself into the sea or live on and make the best of it", 
    "If I admire something about someone, I tell them. We humans are so fragile. It's important we give people thier flowers while they are still here. Never admire quietly.", 
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.", 
    "Everyday the sun won't shine, but that's why I love tomorrow", 
    "Do your little bit of good where you are; it's those little bits of good put together that overwhelm the world", 
    "We are all in the gutter, but some of us are looking at the stars.", 
    "After all this time? Always", 
    "Do what you feel in your heart to be right - for you'll be criticized anyway", 
    "Sometimes you just have to strap your ovaries on and rip into it", 
    "May you live every day of your life"]);
    const [index, setIndex] = useState("");

    function handleQuoteGeneration() {
        const randomIndex = Math.floor(Math.random() * (quote.length));
        setIndex(randomIndex);
        /*if(randomIndex === index) {
            if (randomIndex > 0){
                randomIndex - 1;
                setIndex (randomIndex);
            } else {
                randomIndex + 1;
                setIndex(randomIndex);
            }   
        //console.log(quote.filter((quote, index) => quote[index] == quote[Math.floor(Math.random() * (quote.length))]))
        } else {
        setIndex(randomIndex);
        }*/

       // console.log(index);
    }   

    return (
        <div id="quote">
            <h2>Get Inspired with My Quote Generator</h2>
            <div className="quote-paragraph"><p>{quote[index]}</p></div>
            <button onClick={handleQuoteGeneration}>Generate Quote</button>
            
        </div>
    )
}