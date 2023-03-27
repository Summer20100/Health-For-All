import AcidsContent from './AcidsContent';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    acids: state.acidsPage.acids
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
};

const AcidsContentContainer = connect(mapStateToProps, mapDispatchToProps) (AcidsContent);

export default AcidsContentContainer;
