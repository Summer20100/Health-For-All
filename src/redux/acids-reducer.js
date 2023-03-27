

let initialState = {
  acids: [
    { 
      id: 1, 
      fullName: 'Аланин', 
      shortName: 'Ala, A', 
      yearOpen: 1888, 
      source: 'Фиброин шёлка', 
      extractedBy: 'А. Штреккер, Т. Вейль', 
      replaceable: 'Да', 
      description: ''
    }, 
    { 
      id: 2, 
      fullName: 'Аргинин', 
      shortName: 'Arg, R', 
      yearOpen: 1895, 
      source: 'Вещество рога', 
      extractedBy: 'С. Гедин', 
      replaceable: 'Нет', 
      description: ''
    }, 
    { 
      id: 3, 
      fullName: 'Аспарагин', 
      shortName: 'Asn, N', 
      yearOpen: 1806, 
      source: 'Сок спаржи', 
      extractedBy: 'Л.-Н. Воклен и П. Ж. Робике', 
      replaceable: 'Да', 
      description: ''
    }, 
    { 
      id: 4, 
      fullName: 'Аспарагиновая кислота', 
      shortName: 'Asp, D', 
      yearOpen: 1868, 
      source: 'Конглутин, легумин (ростки спаржи)', 
      extractedBy: 'Г. Риттхаузен[en]', 
      replaceable: 'Да', 
      description: ''
    }, 
    { 
      id: 5, 
      fullName: 'Валин', 
      shortName: 'Val, V', 
      yearOpen: 1901, 
      source: 'Казеин', 
      extractedBy: 'Э. Фишер', 
      replaceable: 'Нет', 
      description: ''
    }, 
    { 
      id: 6, 
      fullName: 'Гидроксилизин', 
      shortName: 'Hyl, hK', 
      yearOpen: 1925, 
      source: 'Белки рыб', 
      extractedBy: 'С. Шрайвер и другие', 
      replaceable: 'Да', 
      description: ''
    }, 
    { 
      id: 7, 
      fullName: 'Гидроксипролин', 
      shortName: 'Hyp, hP', 
      yearOpen: 1902, 
      source: 'Желатин', 
      extractedBy: 'Э. Фишер', 
      replaceable: 'Да', 
      description: ''
    }, 
    { 
      id: 8, 
      fullName: 'Гистидин', 
      shortName: 'His, H', 
      yearOpen: 1896, 
      source: 'Стурин, гистоны', 
      extractedBy: 'А. Коссель[5], С. Гедин', 
      replaceable: 'Нет', 
      description: ''
    }, 
    { 
      id: 9, 
      fullName: 'Глицин', 
      shortName: 'Gly, G', 
      yearOpen: 1820, 
      source: 'Желатин', 
      extractedBy: 'А. Браконно', 
      replaceable: 'Да', 
      description: ''
    }, 
    { 
      id: 10, 
      fullName: 'Глутамин', 
      shortName: 'Gln, Q', 
      yearOpen: 1877, 
      source: 'Пшеничная мука', 
      extractedBy: 'Э. Шулце[4]', 
      replaceable: 'Да', 
      description: ''
    }, 
    { 
      id: 11, 
      fullName: 'Глутаминовая кислота', 
      shortName: 'Glu, E', 
      yearOpen: 1866, 
      source: 'Растительные белки', 
      extractedBy: 'Г. Риттхаузен[de]', 
      replaceable: 'Да', 
      description: ''
    }, 
    { 
      id: 12, 
      fullName: 'Изолейцин', 
      shortName: 'Ile, I', 
      yearOpen: 1904, 
      source: 'Фибрин', 
      extractedBy: 'Ф. Эрлих', 
      replaceable: 'Нет', 
      description: ''
    }, 
    { 
      id: 13, 
      fullName: 'Лейцин', 
      shortName: 'Leu, L', 
      yearOpen: 1820, 
      source: 'Мышечные волокна', 
      extractedBy: 'А. Браконно', 
      replaceable: 'Нет', 
      description: ''
    }, 
    { 
      id: 14, 
      fullName: 'Лизин', 
      shortName: 'Lys, K', 
      yearOpen: 1889, 
      source: 'Казеин', 
      extractedBy: 'Э. Дрексель', 
      replaceable: 'Нет', 
      description: ''
    }, 
    { 
      id: 15, 
      fullName: 'Метионин', 
      shortName: 'Met, M', 
      yearOpen: 1922, 
      source: 'Казеин', 
      extractedBy: 'Д. Мёллер', 
      replaceable: 'Нет', 
      description: ''
    }, 
    { 
      id: 16, 
      fullName: 'Пролин', 
      shortName: 'Pro, P', 
      yearOpen: 1901, 
      source: 'Казеин', 
      extractedBy: 'Э. Фишер', 
      replaceable: 'Да', 
      description: ''
    }, 
    { 
      id: 17, 
      fullName: 'Серин', 
      shortName: 'Ser, S', 
      yearOpen: 1865, 
      source: 'Шёлк', 
      extractedBy: 'Э. Крамер', 
      replaceable: 'Да', 
      description: ''
    }, 
    { 
      id: 18, 
      fullName: 'Тирозин', 
      shortName: 'Tyr, Y', 
      yearOpen: 1848, 
      source: 'Казеин', 
      extractedBy: 'Ю. фон Либих', 
      replaceable: 'Да', 
      description: ''
    }, 
    { 
      id: 19, 
      fullName: 'Треонин', 
      shortName: 'Thr, T', 
      yearOpen: 1925, 
      source: 'Белки овса', 
      extractedBy: 'С. Шрайвер и другие', 
      replaceable: 'Нет', 
      description: ''
    }, 
    { 
      id: 20, 
      fullName: 'Триптофан', 
      shortName: 'Trp, W', 
      yearOpen: 1902, 
      source: 'Казеин', 
      extractedBy: 'Ф. Хопкинс, Д. Кол', 
      replaceable: 'Нет', 
      description: ''
    }, 
    { 
      id: 21, 
      fullName: 'Фенилаланин', 
      shortName: 'Phe, F', 
      yearOpen: 1881, 
      source: 'Ростки люпина', 
      extractedBy: 'Э. Шульце[4], Й. Барбьери', 
      replaceable: 'Нет', 
      description: ''
    }, 
    { 
      id: 22, 
      fullName: 'Цистеин', 
      shortName: 'Cys, C', 
      yearOpen: 1899, 
      source: 'Вещество рога', 
      extractedBy: 'К. Мёрнер', 
      replaceable: 'Да', 
      description: ''
    }
  ]
}

const acidsReducer = ( state = initialState, action ) => {
  return state;
};


export default acidsReducer;