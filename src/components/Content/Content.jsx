import s from './Content.module.css';
import { Route, Routes } from 'react-router-dom';

import AboutApp from './../AboutApp/AboutApp';
import VitaminsContainer from './../Vitamins/VitaminsContainer';
import Acids from './../Acids/Acids';
import SuplimentesContainer from './../Suplimentes/SuplimentesContainer';
import DietsContainer from './../Diets/DietsContainer';

function Content(props) {
  return (
    <main className={ s.main }>
      <Routes>
        <Route path='/vitamins' element={ <VitaminsContainer /> } />
        <Route path='/acids' element={ <Acids /> } />
        <Route path='/suplimentes' element={ <SuplimentesContainer /> } />
        <Route path='/diets' element={ <DietsContainer /> } />
        <Route path='/' element={ <AboutApp /> } />
      </Routes>
    </main>
  )
};

export default Content;