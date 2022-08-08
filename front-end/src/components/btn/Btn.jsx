import React from 'react';
import './btn.css';
import PropTypes from 'prop-types';

function Btn({ styleBtn, textBtn }) {
  return (
    <button type="button" className={ styleBtn }>
      {textBtn}
    </button>
  );
}

Btn.propTypes = {
  styleBtn: PropTypes.string,
  textBtn: PropTypes.string,
}.isRequired;

export default Btn;
