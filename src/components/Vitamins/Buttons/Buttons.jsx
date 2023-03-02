import s from './Buttons.module.css';

function Buttons(props) {
  // let btnElement = props.posts.map ( p => <Post message={ p.message } likesCount={ p.likesCount } /> );
  return (
    <div>
      <button className= { s.btn }>{ props.shortName }DFGV</button>
    </div>
  )
};

export default Buttons;