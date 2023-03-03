import s from './Content.module.css';
import { Route, Routes } from 'react-router-dom';
import Vitamins from './../Vitamins/Vitamins';
import Acids from './../Acids/Acids';
import Suplimentes from './../Suplimentes/Suplimentes';
import Diets from './../Diets/Diets';

function Content(props) {
  return (
    <main className={ s.main }>
      <Routes>
        <Route path='/vitamins' element={ <Vitamins state={ props.state.vitaminsPage } /> } />
        <Route path='/acids' element={ <Acids state={ props.state } /> } />
        <Route path='/suplimentes' element={ <Suplimentes state={ props.state } /> } />
        <Route path='/diets' element={ <Diets state={ props.state.dietsPage } /> } />
      </Routes>
    </main>
  )
};

export default Content;