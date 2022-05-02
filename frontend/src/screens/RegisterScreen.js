import React, { useState, useEffect } from 'react'
import { Link, } from 'react-router-dom'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../component/Loader'
import FormContainer from '../component/FormContainer'
import Message from '../component/Message'
import { register } from '../action/userAction'



const RegisterScreen = ({ location, history }) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfrimPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister


    const redirect = location.search ? location.search.split('=')[1] : '/login'

    useEffect(() => {
        if (userInfo) {
            history.push("/")
        }

    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage("Password does not match")
        } else {
            dispatch(register(name, email, password))

        }
    }
    return (
        <FormContainer>
            <h2>Sign Up</h2>
            {message && <Message variant="danger">{message}</Message>}
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        value={name}
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        value={password}
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="ConfirmPassword">
                    <Form.Label>Confrim Password</Form.Label>
                    <Form.Control
                        type='password'
                        value={confirmPassword}
                        placeholder="Enter Password again"
                        onChange={(e) => setConfrimPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' className="mt-3" variant="primary">Register</Button>


            </Form>
            <Row className="py-3">
                <Col>Have an Account?{' '} <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link></Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen
