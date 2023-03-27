import s from './AcidsContent.module.css';
import Acid from './Acid/Acid';
import AcidsContentContainer from './AcidsContentContainer';

function AcidsContent(props) {
  let acids = props.acids.map( a => <Acid 
                                      fullName={ a.fullName }
                                      shortName={ a.shortName }
                                      yearOpen={ a.yearOpen }
                                      source={ a.source }
                                      extractedBy={ a.extractedBy }
                                      replaceable={ a.replaceable }
                                      description={ a.description }
                                      /> );
    return (
    <div className={ s.item }>
      { acids }
    </div>
  )
};

export default AcidsContent;