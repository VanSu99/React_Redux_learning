
### REDUX

### Tản Mạn về thằng Redux 

- Thư viện quản lý các State.
- Redux không chỉ dùng với ReactJS mà còn được sử dụng ở nhiều Javascript apps, VueJS, Angular, Swift,...
- Sử dụng Redux trong các app lớn & thường share state giữa các component. 
- Redux được dựa trên Flux pattern, khi làm những project có sử dụng nhiều state gọi giữa các component phức tạp thì Redux giúp ta predictable & dễ dàng debug (Redux devtool), gọi ở đâu khi nào & bao nhiêu lần... 
- Ngoài Redux ra còn có 1 số thư viện khác như MobX, Redux thunk, Redux Saga,...
- Dùng function generator + redux saga, redux thunk để làm phần Middlewares.

### BẮT ĐẦU LUYỆN CÔNG

- Redux sẽ có 3 thằng lớn là: View - Actions - Store
    + View: phần giao diện, chứa các HTML, CSS (thuần), Angular, ReactJS Component.
- Phần Redux sẽ gồm phần Actions - Store

    + **Store** : là 1 object lưu trữ state của toàn bộ ứng dụng => sẽ gửi lên View để hiện thị lên (button, header, table-list,...).
        🍣 Ví dụ: khi ta click vào nút thì sẽ tạo ra 1 Actions.
        
    -> sẽ làm việc với 3 phương thức:
    + getState(): Giúp lấy ra state hiện tại.
    + dispatch(action): Thực hiện gọi 1 action.
    + subscrible(listener):Nó có vai trò cực quan trọng, luôn luôn lắng nghe xem có thay đổi gì ko rồi ngay lập tức cập nhật ra View.

    - Mổ xẻ trong Store:
        + Reducer: **là 1 function** và sẽ nhận vào 2 thứ là State hiện tại - thông tin Actions gửi lên => Reducer sẽ xào nấu 2 thằng này và cho ra State mới -> không làm thay đổi State cũ.
            - chỉ thay đổi State trong reducer
        + Dispatcher: quản lý Middleware và chuyển dữ liệu xuống Reducer.

    ✌️ Khởi tạo Store ✌️
        + const store = createStore(tên_reducer -> nhận 1 hoặc nhiều reducer);

    ✌️ Sử dụng methods của Store ✌️
        + store.dispatch(tên_action); ==> đẩy tên_action lên Reducer để nó xử lý logic.
        + store.getState(); ==> lấy giá trị của State hiện tại.

    + **Actions** : đơn giản chỉ **là 1 Javascript Object**, làm nhiệm vụ là mô tả sự thay đổi của State trong Store.
    ==> Nếu Component muốn thay đổi State -> truyền 1 thông điệp đến Reducer thông qua Action 👉 gọi là dispatch 1 action (kích hoạt 1 action nào đó) -> sẽ chuyển tới Reducer -> thay đổi lại State theo từng loại Action tương ứng (dùng if/else, switch/case xem type thuộc loại nào?)

    -> sẽ định nghĩa 2 thuộc tính: 
        + type : 'tên_action' -> kiểu mô tả action 👉 type là hằng số nên sẽ tách ra 1 file riêng: actionsType (trong file này chứa tên các type của action) bỏ trong folder constants. 
        + payload : có thể là bất cứ thứ gì, nó sẽ được sử dụng để thay đổi global state của application.
            🍣 VD:  {
                        type: 'ADD_ARTICLE',
                        payload: {
                            title: 'Bai viet 1',
                            description: 'abcasdhodaido'
                        }
                    }
    **Action Creator** chính là tham số truyền vào của Action.
👉 Action creator sẽ trả về một object với type và payload.

==> Nếu có 1 action thì sẽ có 1 reducer tương ứng.

🍣 Ví dụ minh họa: 
    ------------------------------------------------------
    |   + actions                                        |
    |           |__ hobby.js                             |
    |                                                    |   
    |   + reducers                                       |   
    |           |__ hobby.js                             |
    ------------------------------------------------------

📌 Lam sao de Component trong ReactJS co the su dung Store voi Redux❓

✌️ vào ./src/index.js --> setup Store Provider

📌 Vậy làm sao để kết nối React với Redux nhỉ❓

✌️ Ta sẽ dùng một thư viện trung gian đó là react-redux -> Library này sẽ take care việc connect component và store để biết được khi nào component được update.

📌 Connect vào Redux tu ReactJS Component❓
✌️ Voi Class Component: dung HOC connect()
✌️ Voi Functional Component: dung hooks useSelector() va useDispatch()
    🍣 useSelector() : lay state trong Redux store ra use trong Component.
        + tham số đầu tiên của function chính là store state.
                
    ✌️ Biến State thành properties của Component ✌️
        + const mapStateToProps = (state) => ({
            state_name: state.reducer_name;
        })

    ✌️ Cập nhật data thay đổi từ State vào View ✌️
        + connect(mapStateToProps, action)(Component);
    
    ✌️ Show ra View ✌️
        => {this.props.action_name_tương_ứng}

==> Flow: **Actions -> Reducer -> Store -> View**

📌 Giải thích Flow: 
    - trên View thì Users sẽ click vào nút sự kiện (tạo baiviet chẳng hạn) thì Action sẽ được dispatch (chuyển) đến Reducer để xử lý.
    - trong Reducer, sẽ tạo 1 Global State (state chứa tất cả baiviet) -> để xử lý từng Action thì use lệnh điều kiện (if/else - switch/case) trỏ đến các type tương ứng trong Actions => xử lý xong => trả ra State mới.
    - Reducer sẽ connect với Store cần combine tất cả reducer lại => chuyển State mới ra View
    - View tiếp nhận State mới và render ra giao diện.

📌 Nguyên lý của Redux
    - State sẽ lưu thành 1 Object.
    - State is read-only : Cpt chỉ đọc State chứ không được change trực tiếp ở bên ngoài.
    - Muốn change State phải dùng Pure Function.


📌 Khi nào dùng Redux ❓❓❓
    => Dữ liệu được sử dụng ở nhiều nơi.
    => Cần cache dữ liệu để tái sử dụng cho những lần sau (vd: Cpt A fetch API về, mà Cpt C,D cần use dữ liệu API đó thì không cần fetch nữa mà lên redux lấy về dùng).


### GHI NHỚ

📌 Redux Store nên connect với Cpt nào xử lý logic.
📌 Reducers chỉ xử lý logic liên quan đến State mà thôi.

### Bổ Sung Kiến Thức

📌 Pure Function: là 1 function có I/O chạy đồng bộ.