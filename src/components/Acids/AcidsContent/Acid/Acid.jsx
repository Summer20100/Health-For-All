import s from './Acid.module.css';

function Acid(props) {
  return (
    <div className={ s.card }>
      <div><span>Аминокислота: </span>{ props.fullName }</div>
      <div><span>Аббревиатура: </span>{ props.shortName }</div>
      <div><span>Источник: </span>{ props.source }</div>
      <div><span>Год открытия: </span>{ props.yearOpen }</div>
      <div><span>Впервые выделен: </span>{ props.extractedBy }</div>
      <div><span>Заменимость: </span>{ props.replaceable }</div>
      <div><span>Описание: </span>{ props.description }</div>
    </div>
  )
};

export default Acid;