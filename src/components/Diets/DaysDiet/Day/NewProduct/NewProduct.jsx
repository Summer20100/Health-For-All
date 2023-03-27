import s from './NewProduct.module.css';
import React from 'react';
import Select from './Select/Select';

function NewProduct(props) {
  return (
    <div className={ s.addProduct }>
      <Select newProducts={ props.newProducts } dispatch={ props.dispatch } value={ props.newVelueWeight }/>
      <div>
        <button className={ s.btn } onClick={ () => { console.log('Don\'t click')} } dispatch={ props.dispatch }>+</button>
      </div>
    </div>
  )
};

export default NewProduct;
