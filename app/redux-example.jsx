var redux = require('redux');

console.log('Starting redux example');

// reducer: là một hàm, được tuyền vào 2 biến: trạng thái state và hành động action
// Ê, giảm tốc xuống, để tao dễ quản lý
var reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'}
    console.log('Hành động sẽ được gọi: ', action);

    // Lựa chọn hành động để gọi:
    switch (action.type) {
        // Đổi tên hả, uh, tao sẽ đổi tên của state
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        // Mặc định: Không làm gì nha
        default:
            return state;
    }
}

// Tạo một của hàng. Làm theo kiểu reducer ở bên trên. 
var store = redux.createStore(reducer);

// Chưa làm gì. Lấy trạng thái ra xem sao
var currentState = store.getState();

// Giá trị được lấy nè mày. 
console.log('currentState: ', currentState);

// Giờ tao thích truyền đối tượng kiểu khác à. Kiểu đó tao sẽ lưu trong
// state đó nhé.
// Ủa, vậy action.type là type trong state đó hả. 
// dispatch là: gửi vào cho mày thanh toán, tao chỉ biết gửi thôi,
// Không biết xử lý cái quái gì đó
store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Andrew'
});

console.log('Name should be Andree', store.getState());