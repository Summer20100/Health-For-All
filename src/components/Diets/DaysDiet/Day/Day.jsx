import s from './Day.module.css';
import Products from './Products/Products';


function Day(props) {
  return (
    <div className={ s.card }>
      { props.dayWeekFullName }
      <Products productsDiet={ props.productsDiet } />
    </div>
  )
};

export default Day;