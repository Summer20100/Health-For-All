import s from './Vitamins.module.css';
import VitaminsContent from './VitaminsContent/VitaminsContent';


function Vitamins(props) {
  return (
    <article className={ s.article }>
      <div className={ s.item }>
        Витамины
        <VitaminsContent state={ props.vitamins }/>
      </div>
    </article>
  )
};

export default Vitamins;