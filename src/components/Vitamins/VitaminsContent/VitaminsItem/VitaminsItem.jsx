import s from './VitaminsItem.module.css';
import { NavLink } from 'react-router-dom';

function VitaminsItem(props) {
  let pathItem = '/vitamins/' + props.id;
  return (
    <div className={ s.dialog + ' ' + s.active } >
      <NavLink to={ pathItem }>
          { props.shortName }
      </NavLink>
    </div>
  )
};


export default VitaminsItem;
