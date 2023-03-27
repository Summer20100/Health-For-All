import Vitamins from './Vitamins';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    vitamins: state.vitaminsPage.vitamins
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
};

const VitaminsContainer = connect(mapStateToProps, mapDispatchToProps) (Vitamins);

export default VitaminsContainer;
