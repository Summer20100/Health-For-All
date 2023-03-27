import Diets from './Diets';
// import NewProduct from './NewProduct/NewProduct';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    diet: state.dietsPage.diet,
    newProducts: state.dietsPage.newProducts,
    newVelueWeight: state.dietsPage.newVelueWeight,
    newValueCalories: state.dietsPage.newValueCalories
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
};

const DietsContainer = connect(mapStateToProps, mapDispatchToProps) (Diets);

export default DietsContainer;
