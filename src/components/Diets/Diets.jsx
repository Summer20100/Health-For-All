import s from './Diets.module.css';
import DaysDiet from './DaysDiet/DaysDiet';
// import NewProduct from './NewProduct/NewProduct';

function Diets(props) {
  return (
    <article className={ s.article }>
      <div className={ s.item }>
{/*         <NewProduct newProducts={ props.state.newProducts } dispatch={ props.dispatch } />
        <hr /> */}
        <DaysDiet 
          diet={ props.diet } 
          newVelueWeight={ props.newVelueWeight } 
          newValueCalories={ props.newValueCalories } 
          dispatch={ props.dispatch } 
          newProducts={ props.newProducts }
        />
      </div>
    </article>
  )
};

export default Diets;