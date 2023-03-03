import s from './Diets.module.css';
import DaysDiet from './DaysDiet/DaysDiet';
import NewProduct from './NewProduct/NewProduct';


function Diets(props) {
  return (
    <article className={ s.article }>
      <div className={ s.item }>
        <NewProduct newProducts={ props.state.newProducts }/>
        <hr />
        <DaysDiet diet={ props.state.diet }/>
      </div>
    </article>
  )
};

export default Diets;