import s from './DayCorrect.module.css';
import Products from './../Day/Products/Products';
import NewProduct from './../Day/NewProduct/NewProduct';


function DayCorrect(props) {
  const hower =(el) => {
    el.target.classList.toggle( s.active );
    const main = document.querySelector('main');
    const body = document.querySelector('body');
    const article = document.querySelector('article');
    const items = article.querySelectorAll('div');
  
    // article.classList.add( s.darkblue );
    // console.log( main );
    // console.log( props.dayWeekFullName );
    // console.log( el );
  }

  const sum = 500;
  
  return (
    <div>
      <div data-dayWeekId={ props.dayWeekId } className={ s.card } >
        <div>{ props.dayWeekFullName }</div>
        <hr />
        <NewProduct newProducts={ props.newProducts } dispatch={ props.dispatch } newVelueWeight={ props.newVelueWeight } newValueCalories={ props.newValueCalories } />
        <Products productsDiet={ props.productsDiet } dispatch={ props.dispatch } />
        <hr />
        <div>
          <div>Всего, кл.</div>
          <div>{ sum }</div>
        </div>
        
      </div>
    </div>
  )
};

export default DayCorrect;
