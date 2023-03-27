import s from './DietCalories.module.css';
import React from 'react';

import { updateNewVelueWeightActionCreator, updateNewVelueCalActionCreator } from './../../../../../../redux/diets-reducer';

function DietCalories(props) {
  const newVelueWeight = React.createRef();
  const newValueCal = React.createRef();  

  const onInputNewValueCal = () => {
    newValueCal.current.value = newValueCal.current.value.replace (/\D/g, '');
  }

  const onInputNewVelueWeight = () => {
    newVelueWeight.current.value = newVelueWeight.current.value.replace (/\D/g, '');
  }

  const onWeightChange = () => {
    const text = newVelueWeight.current.value;
    console.log(text);
    props.dispatch(updateNewVelueWeightActionCreator(text))
  };

  const onCalChange = () => {
    const text = newValueCal.current.value;
    console.log(text);
    props.dispatch(updateNewVelueCalActionCreator(text))
  };
    
  return (
    <div>
      <input 
        className={ s.input } 
        ref={ newVelueWeight } 
        onChange={ onWeightChange } 
        value={ props.newVelueWeight } 
        onInput={ onInputNewVelueWeight }
        placeholder='гр.' />
      <input 
        className={ s.input } 
        ref={ newValueCal } 
        onChange={ onCalChange }
        value={ props.newValueCalories } 
        onInput={ onInputNewValueCal }
        placeholder='кл.' />
    </div>
  )
};

export default DietCalories;
