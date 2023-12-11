// payload'ı olmayan bir aksiyon tanımlama

import { ActionTypes } from "../actionTypes/todoTypes"

const ADD_COUNT ={
    type: 'ADD_COUNT',
}

// payload değerine sahip bir aksiyon tanımlarken
// payload değeri değişken oldoğondan dolayı
// aksiyon oluşturan bir fonksiyon yazarız ve payload
// değerini parametre olarak alırız

//* aksiyon oluşturan fonksiyonlar 

export const addTodo = (payload) => ( {
        type: ActionTypes.ADD_TODO,
        payload,
    });

 export const deleteTodo = (payload) => ( {
        type: ActionTypes.DELETE_TODO,
        payload,
    });

export const updateTodo = (payload) => ( {
        type: ActionTypes.UPDATE_TODO,
        payload,
    });

 export const setTodos = (payload) => ( {
        type: ActionTypes.SET_TODOS,
        payload,
    });