import React, { useState } from 'react';
import classes from './QuoteBox.module.css';
import { quotes, title } from '../../data/quotos';

const QuoteBox = () => {
  const [quotesPosition, setQuotesPosition] = useState(0);

  const replaceQuote = () => {
    if (quotes.length === quotesPosition + 1) {
      setQuotesPosition(0);
      return;
    }
    setQuotesPosition(quotesPosition + 1);
  };

  return (
    <div className={classes.center}>
      <div onMouseLeave={replaceQuote} className={classes['property-card']}>
        <div className={classes['property-image']}>
          <div className={classes['property-image-title']}></div>
        </div>

        <div className={classes['property-description']}>
          <h5>{title[quotesPosition]} </h5>
          <p>{quotes[quotesPosition]}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
