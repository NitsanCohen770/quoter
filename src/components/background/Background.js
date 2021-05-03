import React from 'react';
import classes from './Background.module.css';
import { SocialIcon } from 'react-social-icons';

const Background = ({ children }) => {
  return (
    <div className={classes.backgroundPicture}>
      <SocialIcon
        className={classes['property-social-icons']}
        url="https://github.com/NitsanCohen770"
      />{' '}
      <SocialIcon
        className={classes['property-social-icons']}
        url="https://www.linkedin.com/in/nitsan-cohen-64b73920b/"
      />
      {children}
    </div>
  );
};

export default Background;
