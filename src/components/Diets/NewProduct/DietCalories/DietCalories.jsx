import s from './DietCalories.module.css';

function DietCalories(props) {
  // let productAdd = props.newProducts.map( p => <option>{ p.name }</option>);
  return (
    <div>
      <textarea className={ s.textarea } placeholder='гр.'></textarea>
      <textarea className={ s.textarea } placeholder='кл.'></textarea>
    </div>
  )
};

export default DietCalories;
