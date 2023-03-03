

let initialState = {
  diet: [
    {
      dayWeekId: 1,
      dayWeekShortName: 'ПН',
      dayWeekFullName: 'Понедельник',
      productsDiet: [
        { name: 'Сыр', calories: 100 },
        { name: 'Морковь', calories: 50 },
        { name: 'Пиво', calories: 42 },
        { name: 'Вино', calories: 83 },
        { name: 'Колбоса', calories: 258 },
        { name: 'Хлеб', calories: 15 },
        { name: 'Каша', calories: 45 },
      ]
    },
     {
      dayWeekId: 2,
      dayWeekShortName: 'ВТ',
      dayWeekFullName: 'Вторник',
      productsDiet: [
        { name: 'Сыр', calories: 100 },
        { name: 'Морковь', calories: 50 },
        { name: 'Пиво', calories: 42 },
        { name: 'Вино', calories: 83 },
        { name: 'Колбоса', calories: 258 },
        { name: 'Хлеб', calories: 15 },
        { name: 'Каша', calories: 45 },
      ]
    },
     {
      dayWeekId: 3,
      dayWeekShortName: 'СР',
      dayWeekFullName: 'Среда',
      productsDiet: [
        { name: 'Сыр', calories: 100 },
        { name: 'Морковь', calories: 50 },
        { name: 'Пиво', calories: 42 },
        { name: 'Вино', calories: 83 },
        { name: 'Колбоса', calories: 258 },
        { name: 'Хлеб', calories: 15 },
        { name: 'Каша', calories: 45 },
      ]
    },
     {
      dayWeekId: 4,
      dayWeekShortName: 'ЧТ',
      dayWeekFullName: 'Четверг',
      productsDiet: [
        { name: 'Сыр', calories: 100 },
        { name: 'Морковь', calories: 50 },
        { name: 'Пиво', calories: 42 },
        { name: 'Вино', calories: 83 },
        { name: 'Колбоса', calories: 258 },
        { name: 'Хлеб', calories: 15 },
        { name: 'Каша', calories: 45 },
      ]
    },
     {
      dayWeekId: 5,
      dayWeekShortName: 'ПТ',
      dayWeekFullName: 'Пятница',
      productsDiet: [
        { name: 'Сыр', calories: 100 },
        { name: 'Морковь', calories: 50 },
        { name: 'Пиво', calories: 42 },
        { name: 'Вино', calories: 83 },
        { name: 'Колбоса', calories: 258 },
        { name: 'Хлеб', calories: 15 },
        { name: 'Каша', calories: 45 },
      ]
    },
     {
      dayWeekId: 6,
      dayWeekShortName: 'СБ',
      dayWeekFullName: 'Суббота',
      productsDiet: [
        { name: 'Сыр', calories: 100 },
        { name: 'Морковь', calories: 50 },
        { name: 'Пиво', calories: 42 },
        { name: 'Вино', calories: 83 },
        { name: 'Колбоса', calories: 258 },
        { name: 'Хлеб', calories: 15 },
        { name: 'Каша', calories: 45 },
      ]
    },
     {
      dayWeekId: 7,
      dayWeekShortName: 'ВС',
      dayWeekFullName: 'Воскресенье',
      productsDiet: [
        { name: 'Сыр', calories: 100 },
        { name: 'Морковь', calories: 50 },
        { name: 'Пиво', calories: 42 },
        { name: 'Вино', calories: 83 },
        { name: 'Колбоса', calories: 258 },
        { name: 'Хлеб', calories: 15 },
        { name: 'Каша', calories: 45 },
      ]
    }
  ],
  newProducts: [
    { id: 1, name: 'Сало', calories: 100 },
    { id: 2, name: 'Мясо', calories: 50 },
    { id: 3, name: 'Рыба', calories: 42 },
    { id: 4, name: 'Апельсин', calories: 83 },
    { id: 5, name: 'Молоко', calories: 258 },
    { id: 6, name: 'Кофе', calories: 15 },
    { id: 7, name: 'Салат', calories: 45 }
  ]
}

const dietsReducer = ( state = initialState, action ) => {
  return state;
};

export default dietsReducer;