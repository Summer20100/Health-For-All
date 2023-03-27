import s from './DaysDiet.module.css';
import Day from './Day/Day';
import DayCorrect from './DayCorrect/DayCorrect';

function DaysDiet(props) {
  let days = props.diet.map( d => <Day className={ 'weekDay' } dayWeekId={ d.dayWeekId } dayWeekFullName={ d.dayWeekFullName } productsDiet= { d.productsDiet } dispatch={ props.dispatch } newProducts={ props.newProducts }/> );
  let daysCorrect = props.diet.map( d => <DayCorrect 
                                           className={ 'weekDay' } 
                                           dayWeekId={ d.dayWeekId } 
                                           dayWeekFullName={ d.dayWeekFullName } 
                                           productsDiet= { d.productsDiet } 
                                           dispatch={ props.dispatch } 
                                           newProducts={ props.newProducts } 
                                           newVelueWeight={ props.newVelueWeight } 
                                           newValueCalories={ props.newValueCalories } 
                                          /> );

  return (
    <div className={ s.cards }>
      { days }
      { daysCorrect }
    </div>
  )
};

export default DaysDiet;
