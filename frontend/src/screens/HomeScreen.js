import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../component/Product'
import { productAction } from '../action/productAction'
import Message from '../component/Message'
import Paginate from '../component/Paginate'
import Loader from '../component/Loader'

const HomeScreen = ({ match }) => {

    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1


    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)

    const { loading, error, products, page, pages } = productList


    useEffect(() => {

        dispatch(productAction(keyword, pageNumber))

    }, [dispatch, keyword, pageNumber])

    return (
        <div className='bgImg'>

            <h1 className="mid">Latest products</h1>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message>
                :
                <>
                    <Row className="mid">
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>

                    <Paginate pages={pages} page={page} keyword={keyword ? keyword : ""} />

                </>
            }

        </div>
    )
}

export default HomeScreen
