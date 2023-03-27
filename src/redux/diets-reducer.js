const DELITE_PRODUCT = 'DELITE-PRODUCT';
const SELECT_PRODUCT = 'SELECT-PRODUCT';
const CALORIES_PRODUCT = 'CALORIES-PRODUCT';
const WEIGHT_PRODUCT = 'WEIGHT-PRODUCT';



let initialState = {
  diet: [
    {
      dayWeekId: 1,
      dayWeekShortName: 'ПН',
      dayWeekFullName: 'Понедельник',
      productsDiet: [
        { id: 1, name: 'Сыр', calories: 100 },
        { id: 2, name: 'Морковь', calories: 50 },
        { id: 3, name: 'Пиво', calories: 42 },
        { id: 4, name: 'Вино', calories: 83 },
        { id: 5, name: 'Колбоса', calories: 258 },
        { id: 6, name: 'Хлеб', calories: 15 },
        { id: 7, name: 'Каша', calories: 45 },
      ]
    },
    {
      dayWeekId: 2,
      dayWeekShortName: 'ВТ',
      dayWeekFullName: 'Вторник',
      productsDiet: [
        { id: 1, name: 'Сыр', calories: 100 },
        { id: 2, name: 'Морковь', calories: 50 },
        { id: 3, name: 'Пиво', calories: 42 },
        { id: 4, name: 'Вино', calories: 83 },
        { id: 5, name: 'Колбоса', calories: 258 },
        { id: 6, name: 'Хлеб', calories: 15 },
        { id: 7, name: 'Каша', calories: 45 },
      ]
    },
    {
      dayWeekId: 3,
      dayWeekShortName: 'СР',
      dayWeekFullName: 'Среда',
      productsDiet: [
        { id: 1, name: 'Сыр', calories: 100 },
        { id: 2, name: 'Морковь', calories: 50 },
        { id: 3, name: 'Пиво', calories: 42 },
        { id: 4, name: 'Вино', calories: 83 },
        { id: 5, name: 'Колбоса', calories: 258 },
        { id: 6, name: 'Хлеб', calories: 15 },
        { id: 7, name: 'Каша', calories: 45 },
      ]
    },
    {
      dayWeekId: 4,
      dayWeekShortName: 'ЧТ',
      dayWeekFullName: 'Четверг',
      productsDiet: [
        { id: 1, name: 'Сыр', calories: 100 },
        { id: 2, name: 'Морковь', calories: 50 },
        { id: 3, name: 'Пиво', calories: 42 },
        { id: 4, name: 'Вино', calories: 83 },
        { id: 5, name: 'Колбоса', calories: 258 },
        { id: 6, name: 'Хлеб', calories: 15 },
        { id: 7, name: 'Каша', calories: 45 },
      ]
    },
    {
      dayWeekId: 5,
      dayWeekShortName: 'ПТ',
      dayWeekFullName: 'Пятница',
      productsDiet: [
        { id: 1, name: 'Сыр', calories: 100 },
        { id: 2, name: 'Морковь', calories: 50 },
        { id: 3, name: 'Пиво', calories: 42 },
        { id: 4, name: 'Вино', calories: 83 },
        { id: 5, name: 'Колбоса', calories: 258 },
        { id: 6, name: 'Хлеб', calories: 15 },
        { id: 7, name: 'Каша', calories: 45 },
      ]
    },
    {
      dayWeekId: 6,
      dayWeekShortName: 'СБ',
      dayWeekFullName: 'Суббота',
      productsDiet: [
        { id: 1, name: 'Сыр', calories: 100 },
        { id: 2, name: 'Морковь', calories: 50 },
        { id: 3, name: 'Пиво', calories: 42 },
        { id: 4, name: 'Вино', calories: 83 },
        { id: 5, name: 'Колбоса', calories: 258 },
        { id: 6, name: 'Хлеб', calories: 15 },
        { id: 7, name: 'Каша', calories: 45 },
      ]
    },
    {
      dayWeekId: 7,
      dayWeekShortName: 'ВС',
      dayWeekFullName: 'Воскресенье',
      productsDiet: [
        { id: 1, name: 'Сыр', calories: 100 },
        { id: 2, name: 'Морковь', calories: 50 },
        { id: 3, name: 'Пиво', calories: 42 },
        { id: 4, name: 'Вино', calories: 83 },
        { id: 5, name: 'Колбоса', calories: 258 },
        { id: 6, name: 'Хлеб', calories: 15 },
        { id: 7, name: 'Каша', calories: 45 },
      ]
    }
  ],
  idProduct: '',
  newProducts: [
    { id: 1, name: 'Сало', calories: 100 },
    { id: 2, name: 'Мясо', calories: 50 },
    { id: 3, name: 'Рыба', calories: 42 },
    { id: 4, name: 'Апельсин', calories: 83 },
    { id: 5, name: 'Молоко', calories: 258 },
    { id: 6, name: 'Кофе', calories: 15 },
    { id: 7, name: 'Салат', calories: 45 },
    { id: 8, name: 'Сыр', calories: 100 },
    { id: 9, name: 'Морковь', calories: 50 },
    { id: 10, name: 'Пиво', calories: 42 },
    { id: 11, name: 'Вино', calories: 83 },
    { id: 12, name: 'Колбоса', calories: 258 },
    { id: 13, name: 'Хлеб', calories: 15 },
    { id: 14, name: 'Каша', calories: 45 }
  ],
  newValueCalories: 'кл.',
  newVelueWeight: 'гр.'
}

const dietsReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case DELITE_PRODUCT:
      console.log('DELITE_PRODUCT')
      return state;
    case SELECT_PRODUCT:
      console.log('SELECT_PRODUCT')
      return state;
    case CALORIES_PRODUCT:
      let stateCopy = {...state};
      stateCopy.newValueCalories = action.newText;
      return stateCopy;
    case WEIGHT_PRODUCT: {
      let stateCopy = {...state};
      stateCopy.newVelueWeight = action.newText;
      return stateCopy;
    }
    default: 
      return state;
  }
};

export const deliteProductActionCreator = () => (
  {
    type: DELITE_PRODUCT
  }
);

export const selectProductActionCreator = () => (
  {
    type: SELECT_PRODUCT
  }
);

export const updateNewVelueWeightActionCreator = (text) => (
  {
    type: WEIGHT_PRODUCT,
    newText: text
  }
);

export const updateNewVelueCalActionCreator = (text) => (
  {
    type: CALORIES_PRODUCT,
    newText: text
  }
);

export default dietsReducer;