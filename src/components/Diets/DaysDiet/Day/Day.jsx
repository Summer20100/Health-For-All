import s from './Day.module.css';
import Products from './Products/Products';
import NewProduct from './NewProduct/NewProduct';


function Day(props) {
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
  
  return (
    <div>
      <div className={ s.card }>
        <div className={ s.dayCardHeader }>
          <div>{ props.dayWeekFullName }</div>
          <button className={ s.btn } onClick={ hower }>КОРР</button>
        </div>
        <Products productsDiet={ props.productsDiet } dispatch={ props.dispatch } />
      </div>


      
{/*       <div data-dayWeekId={ props.dayWeekId } className={ s.card } onClick={ hower }>
        <div>{ props.dayWeekFullName }</div>
        <hr />
        <NewProduct newProducts={ props.newProducts } dispatch={ props.dispatch } />
        <Products productsDiet={ props.productsDiet } dispatch={ props.dispatch } />
        <hr />
        <div>
          <div>Всего, кл.</div>
        </div>
      </div> */}
      
    </div>
  )
};

export default Day;
