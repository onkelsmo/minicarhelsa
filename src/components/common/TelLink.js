import React from 'react';

const TelLink = ({ tel, children, ...other }) => (
  <a href={"tel:" + tel} {...other}>
    {children}
  </a>
);

export default TelLink;
