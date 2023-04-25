import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <FaFacebookF/>
        </div>
        <div>
            <BsInstagram/>
        </div>
    </div>
  )
}

export default SocialMedia