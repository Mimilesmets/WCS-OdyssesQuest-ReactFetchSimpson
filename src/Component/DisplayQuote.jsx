import  React  from  'react';

const  DisplayQuote = ({ quote }) => {
    return (
        <div  className="DisplayQuote">
            <img  src={quote.image}  alt="picture of a simpsons character"  />
            <ul>
                <li>Name : {quote.character}</li>
                
                <li>Quote : {quote.quote}</li>
                
            </ul>
            

        </div>
    );
};

export  default  DisplayQuote;