import s from './NewProduct.module.css';
import Select from './Select/Select'
import DietCalories from './DietCalories/DietCalories'


function NewProduct(props) {
  return (
    <div className={ s.addProduct }>
        <Select newProducts={ props.newProducts }/>
        <DietCalories />
        <div>
          <button className={ s.btn } onClick={ () => {} }>+</button>
        </div>
    </div>
  )
};

export default NewProduct;
