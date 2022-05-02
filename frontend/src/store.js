import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productReducer, productCreateReducer, productReviewReducer, productUpdateReducer, productDetailReducer, productDeleteReducer } from './reducers/productReducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducers } from './reducers/cartReducers';
import { userLoginReducer, userRegisterReducer, userDeleteReducer, adminUserUpdateReducer, userDetailReducer, userUpdateReducer, userListReducer } from './reducers/userReducer';
import { orderCreateReducer, orderDeliverReducer, orderGetReducer, orderMyListReducer, orderDetailReducer, orderPayReducer } from './reducers/orderReducers';


const reducer = combineReducers({
    productList: productReducer,
    productDetails: productDetailReducer,
    productDelete: productDeleteReducer,
    productUpdate: productUpdateReducer,
    productCreate: productCreateReducer,
    productReviewCreate: productReviewReducer,
    cart: cartReducers,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailReducer,
    userUpdate: userUpdateReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    adminUserUpdate: adminUserUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderGet: orderGetReducer,
    orderMyList: orderMyListReducer,

});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse
    (localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse
    (localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse
    (localStorage.getItem('shippingAddress')) : {}

const initialState = {
    cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage },
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;