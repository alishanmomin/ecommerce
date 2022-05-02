import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../component/FormContainer'
import CheckoutSteps from '../component/CheckoutSteps'
import { saveShippingAddress } from '../action/cartAction'


const ShippingScreen = ({ history }) => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart


    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')


    }
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping Screen</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId="address">
                    <Form.Label className="py-1">Address</Form.Label>
                    <Form.Control
                        type='text'
                        value={address}
                        required
                        placeholder="Enter address"
                        onChange={(e) => setAddress(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="city">
                    <Form.Label className="py-2">City</Form.Label>
                    <Form.Control
                        type='text'
                        value={city}
                        required
                        placeholder="Enter city"
                        onChange={(e) => setCity(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="postalCode">
                    <Form.Label className="py-2">Postal Code </Form.Label>
                    <Form.Control
                        type='text'
                        value={postalCode}
                        required
                        placeholder="Postal Code"
                        onChange={(e) => setPostalCode(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="country">
                    <Form.Label className="py-2">Country</Form.Label>
                    <Form.Control
                        type='text'
                        value={country}
                        required
                        placeholder="Country"
                        onChange={(e) => setCountry(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' className="mt-3" variant="primary">Continue</Button>


            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
