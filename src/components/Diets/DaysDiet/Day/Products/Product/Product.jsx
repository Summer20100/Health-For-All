import s from './Product.module.css';

function Product(props) {
  return (
    <div className={ s.card }>
      <div>{ props.name }</div>
      <button>-</button>
    </div>
  )
};

export default Product;