import s from './Select.module.css';
import React from 'react';
import { selectProductActionCreator, updateNewVelueWeightActionCreator, updateNewVelueCalActionCreator } from './../../../../../../redux/diets-reducer';

function Select(props) {
  const newVelueWeight = React.createRef();
  const newValueCal = React.createRef();
  const newSelectElement = React.createRef();

  const onInputNewValueCal = () => {
    newValueCal.current.value = newValueCal.current.value.replace (/\D/g, '');
  }

  const onInputNewVelueWeight = () => {
    newVelueWeight.current.value = newVelueWeight.current.value.replace (/\D/g, '');
  }

  const onWeightChange = () => {
    const text = newVelueWeight.current.value;
    props.dispatch(updateNewVelueWeightActionCreator(text))
  };

  const onCalChange = () => {
    const text = newValueCal.current.value;
    props.dispatch(updateNewVelueCalActionCreator(text))
  };

  let productAdd = props.newProducts.map( p => <option data-calories={ p.calories }>{ p.name }</option>);

  const onSelectChange = (el) => {
    props.dispatch(selectProductActionCreator());
    let calories = el.target.options[el.target.selectedIndex].dataset['calories'];
    newValueCal.current.value = calories;
  };



  return (
    <div className={ s.flex }>
      <select className={ s.select } ref={ newSelectElement } onChange={ onSelectChange } >
        { productAdd }
      </select>
      <div>
        <input 
          className={ s.input } 
          ref={ newVelueWeight } 
          onChange={ onWeightChange } 
          value={ props.newVelueWeight } 
          onInput={ onInputNewVelueWeight }
          placeholder='100 гр.' />
        <input 
          className={ s.input } 
          ref={ newValueCal } 
          onChange={ onCalChange }
          value={ props.newValueCalories } 
          onInput={ onInputNewValueCal }
          placeholder='кл.' />
      </div>
    </div>
  )
};

export default Select;
