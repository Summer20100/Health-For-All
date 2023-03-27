import s from './Supliment.module.css';

function Supliment(props) {
  return (
    <div className={ s.card }>
      <div className={ s.name }>{ props.fullName }</div>
      <div>{ props.description }</div>
    </div>
  )
};

export default Supliment;