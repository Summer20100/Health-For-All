import s from './Product.module.css';
import { deliteProductActionCreator } from './../../../../../../redux/diets-reducer';

function Product(props) {
  let idProduct;
  const deliteProduct = () => {
    idProduct = props.id;
    console.log(idProduct);
    props.dispatch(deliteProductActionCreator());
  };
  
  return (
    <div className={ s.card }>
      <div>{ props.name } </div>
      <button onClick={ deliteProduct } idProduct= { props.id } className='deliteProduct'>-</button>
    </div>
  )
};

export default Product;