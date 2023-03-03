import s from './Select.module.css';

function Select(props) {
  let productAdd = props.newProducts.map( p => <option>{ p.name }</option>);
  return (
    <div>
      <select className={ s.select }>
        { productAdd }
      </select>
    </div>
  )
};

export default Select;
