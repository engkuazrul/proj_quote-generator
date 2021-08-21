import React from 'react';
import { FaTwitter } from 'react-icons/fa';

import CustomButton from '../custom-button/custom-button.component';

import './button-container.styles.scss';

const ButtonContainer = () => (
  <div className='button-container'>
    <CustomButton isTwitterButton><FaTwitter /></CustomButton>
    <CustomButton>New Quote</CustomButton>
  </div>
);

export default ButtonContainer;