import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isTwitterButton, ...otherProps }) => (
  <button className='btn' {...otherProps}>{children}</button>
);

export default CustomButton;
