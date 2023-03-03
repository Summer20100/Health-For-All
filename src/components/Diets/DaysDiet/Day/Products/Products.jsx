import s from './Products.module.css';
import Product from './Product/Product';

function Products(props) {
  let products = props.productsDiet.map( p => <Product name={ p.name } /> );
  return (
    <div className={ s.card }>
      { products }
    </div>
  )
};

export default Products;