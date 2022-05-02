import React, { useState } from 'react'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (

        <div >
            <input type="text" className="boxclass" onChange={(e) => setKeyword(e.target.value)} />
            <button className=" btnclass" onClick={submitHandler} type="button">Go</button>

        </div>


    )
}

export default SearchBox