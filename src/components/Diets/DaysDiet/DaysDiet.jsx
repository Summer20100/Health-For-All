import s from './DaysDiet.module.css';
import Day from './Day/Day';

function DaysDiet(props) {
  let days = props.diet.map( d => <Day dayWeekFullName={ d.dayWeekFullName } productsDiet= { d.productsDiet }/> );

  return (
    <div className={ s.cards }>
      { days }
    </div>
  )
};

export default DaysDiet;
