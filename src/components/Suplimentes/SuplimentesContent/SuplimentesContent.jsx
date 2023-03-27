import s from './SuplimentesContent.module.css';
import Supliment from './Supliment/Supliment';

function SuplimentesContent(props) {
  let suplimentes = props.suplimentes.map( item => <Supliment fullName={ item.fullName } description={ item.description }/> );
    
  return (
    <div>
      { suplimentes }
    </div>
  )
};

export default SuplimentesContent;