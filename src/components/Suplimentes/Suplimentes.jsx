import s from './Suplimentes.module.css';
import SuplimentesContent from './SuplimentesContent/SuplimentesContent'

function Suplimentes(props) {
  return (
    <article>
      <div>
        <SuplimentesContent suplimentes={ props.suplimentes } dispatch={ props.dispatch } />
      </div>
    </article>
  )
};

export default Suplimentes;
