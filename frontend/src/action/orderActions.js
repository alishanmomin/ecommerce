import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DELIVER_FAIL, ORDER_DELIVER_REQUEST, ORDER_DELIVER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_GET_FAIL, ORDER_GET_REQUEST, ORDER_GET_SUCCESS, ORDER_MY_LIST_FAIL, ORDER_MY_LIST_REQUEST, ORDER_MY_LIST_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS } from '../constants/orderConstant'
import axios from 'axios'





export const createOrder = (order) => async (dispatch, getState) => {
    try {

        dispatch({
            type: ORDER_CREATE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post('/api/orders', order, config)
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: "Error in orders",
        })
    }

}


export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {

        dispatch({
            type: ORDER_DETAILS_REQUEST
        })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/orders/${id}`, config)
        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: "Error in orders",
        })
    }

}


export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
    try {

        dispatch({
            type: ORDER_PAY_REQUEST
        })

        const { userLogin: { userInfo }, } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config)
        dispatch({
            type: ORDER_PAY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: "Pay order failed",
        })
    }

}




export const deliverOrder = (order) => async (dispatch, getState) => {
    try {

        dispatch({
            type: ORDER_DELIVER_REQUEST
        })

        const { userLogin: { userInfo }, } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/orders/${order._id}/deliver`, {}, config)
        dispatch({
            type: ORDER_DELIVER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_DELIVER_FAIL,
            payload: "Pay order failed",
        })
    }

}



export const listMyOrder = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: ORDER_MY_LIST_REQUEST
        })

        const { userLogin: { userInfo }, } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/orders/myorders`, config)
        dispatch({
            type: ORDER_MY_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_MY_LIST_FAIL,
            payload: "Error in My orders",
        })
    }

}


export const getMyOrder = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: ORDER_GET_REQUEST
        })

        const { userLogin: { userInfo }, } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/orders/`, config)
        dispatch({
            type: ORDER_GET_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_GET_FAIL,
            payload: "Error in My orders",
        })
    }

}

export default createOrder
