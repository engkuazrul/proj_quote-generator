import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isTwitterButton, ...otherProps }) => (
  isTwitterButton ? <button className='btn twitter' {...otherProps}>{children}</button> : <button className='btn' {...otherProps}>{children}</button>
);

export default CustomButton;
