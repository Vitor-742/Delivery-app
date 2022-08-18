import React from 'react';
import PropTypes from 'prop-types';

function CardSale({ styleBtn, textBtn }) {
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
