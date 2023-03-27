import s from './VitaminsContent.module.css';
import VitaminsItem from './VitaminsItem/VitaminsItem';
import VitaminsDescription from './VitaminsDescription/VitaminsDescription';



function VitaminsContent(props) {
  let vitaminsElements = props.state.map( p => <VitaminsItem id={ p.id } shortName={ p.shortName }/> );
  let vitaminsContent = props.state.map( c => <VitaminsDescription description={ c.description } id={ c.id } fullName={ c.fullName }/>);
  
  return (
    <div className={ s.grid }>
      <div>{ vitaminsElements }</div>
      <div>{ vitaminsContent }</div>
    </div>
  )
};

export default VitaminsContent;
