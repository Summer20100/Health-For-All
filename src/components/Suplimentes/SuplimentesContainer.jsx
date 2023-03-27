import Suplimentes from './Suplimentes';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    suplimentes: state.suplimentesPage.suplimentes
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
};

const SuplimentesContainer = connect(mapStateToProps, mapDispatchToProps) (Suplimentes);

export default SuplimentesContainer;
