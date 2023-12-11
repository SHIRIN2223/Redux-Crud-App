/*
 ! store oluşturma
 * 1. redux kütüphanesinde createStore methodu import edilir
 * 2. store içinde tutulan veriler kategorize ve herbiri için reducer oluşturur
 * 3. oloşturulan reducerler combineReducers methodu ile birleştirilir
 * 4. store'a oluşturulan birleşmiş reducer tanıtılır
 * 5. oluşturulan store proje tanılır
 */

 import {createStore, combineReducers} from 'redux';
 import todoReducer from './reducers/todoReducer';
 import categoryReducer from './reducers/categoryReducer';

 // birden fazla reducer varsa birleştirme
 const rootReducer = combineReducers({
    todoReducer,
    categoryReducer,
 });
 
 //projeyi tanıtmak için export etme
 export default createStore(rootReducer);
