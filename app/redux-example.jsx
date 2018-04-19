var redux = require('redux');

console.log('Starting redux example');

// reducer: là một hàm, được tuyền vào 2 biến: trạng thái state có giá trị defaulte 
// và hành động action (định nghĩa là obj, dựa vào đó để action..)
// Ê, giảm tốc xuống, để tao dễ quản lý
var reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'}
    // console.log('Hành động sẽ được gọi: ', action);

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
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : (f)=>{
        return f;
    }
));

// Subscribe to changes
// Mỗi lần dispatch sẽ gọi subcribe này 
var unsubcribe = store.subscribe(()=>{
    var state = store.getState();

    console.log('Name is ', state.name);

    document.getElementById('app').innerHTML = state.name;

});
// unsubcribe();
// Khóa lại, không cho thực thi nữa.???

// Chưa làm gì. Lấy trạng thái ra xem sao
var currentState = store.getState();

// Giá trị được lấy nè mày. 
console.log('currentState: ', currentState);

// Giờ tao thích truyền đối tượng kiểu khác à. Kiểu đó tao sẽ lưu trong
// action đó nhé.
// Ủa, vậy action.type là type trong đó hả: Không phải, nó là action đó
// dispatch là: gửi vào cho mày thanh toán, tao chỉ biết gửi thôi,
// Không biết xử lý cái quái gì đó. Khi gửi, nhớ gửi tham số đi kèm vào action.
store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Andrew'
});


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Emily'
})

// console.log('Name should be Andree', store.getState());