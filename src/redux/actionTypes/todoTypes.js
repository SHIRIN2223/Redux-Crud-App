// Dalgınlıktan kaynaklı oluşabilecek
// action'ların type'ını tanımlarken ve reducer'lar
// da bu type ları kullanırken dalgınlıktan kaynaklı oluşabilecek
// hataları önlemek için projede aksiyon tipplerini ayrı bir dosyada tutuyoruz

export const ActionTypes = {
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    SET_TODOS: 'SET_TODOS',
}