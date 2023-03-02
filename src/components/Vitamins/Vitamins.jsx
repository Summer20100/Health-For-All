import s from './Vitamins.module.css';
import Buttons from './Buttons/Buttons';


function Vitamins(props) {
  return (
    <article className={ s.article }>
      <div className={ s.item }>
        <Buttons state={ props.vitamins }/>
        Витамины
      </div>
    </article>
  )
};

export default Vitamins;