import s from './VitaminsDescription.module.css';
import { Route, Routes } from 'react-router-dom';

function VitaminsDescription(props) {
  let pathItem = '/vitamins/' + props.id;
  return (
    <Routes>
      <Route path={ pathItem } element={ <div>{ props.description }</div> } />
    </Routes>
  )
};

export default VitaminsDescription;
