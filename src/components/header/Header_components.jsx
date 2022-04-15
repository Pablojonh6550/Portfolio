import React from 'react';
import Curriculo from '../../assets/Curriculo_Jonh_Pablo_Vaz.pdf';

function Header_components() {
  return (
    <div className='header_components'>
        <a href={Curriculo} download className='btn' >Curriculo</a>
    </div>
  );
}

export default Header_components;