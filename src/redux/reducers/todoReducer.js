/*
 ! reducer
 * store'un nasıl değişeceğine karar verir
 * reducer normal bir fonksiyondur
 * ve iki aprametre alamsı gerekir
 * > state: store'da tutulan verinin son durumu
 * > action: store'un nasıl etkilenmesi gerektiğini belirten bir obje
 * reducer'da return edilen veri store'un güncel halidir
 */

import { ActionTypes } from "../actionTypes/todoTypes";

 const initialState = {
    todos: [],  //todolar başlangıcta boş bir dizi olucak
    isEmpty: true, // todolar boş mu değeri

 }

 const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            const clone = [...state.todos];

       // payload 'i statedeki todolar dizisine ekleriz
        clone.unshift(action.payload);
        

        //store'i güncelleme
        return { ...state, todos: clone, isEmpty: false };

      case ActionTypes.DELETE_TODO:
        // payload ile gelen id'yi diziden cıkararım
        const filtered = state.todos.filter(
            (i) => i.id !== action.payload);

            // boş mu hesaplama
            const isEmpty = filtered.length === 0;

        return {...state, todos: filtered, isEmpty: isEmpty };
      
        case ActionTypes.UPDATE_TODO:
            // diziyi güncelleme
            // eski elemanı cıkarıp yerine payload ile 
            // gelen yeni versiyonu diziye ekleme
            const updated = state.todos.map((item) =>
             item.id === action.payload.id ? action.payload : item);
        

        return { ...state, todos: updated };
     
        case ActionTypes.SET_TODOS:
            const is_empty =action.payload.length === 0
            return {...state,todos:action.payload, is_empty: is_empty };
     
        default:
        return state;
          
   }
};

export default todoReducer;