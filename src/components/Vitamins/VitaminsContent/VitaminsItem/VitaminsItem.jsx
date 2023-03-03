import s from './VitaminsItem.module.css';
import { NavLink } from 'react-router-dom';

function VitaminsItem(props) {
  let pathItem = '/vitamins/' + props.id;
  return (
    <NavLink to={ pathItem }>
        <button className= { s.btn } onClick={ () => console.log(props.description) }>{ props.shortName }</button>
    </NavLink>
  )
};


export default VitaminsItem;
