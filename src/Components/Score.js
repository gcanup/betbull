import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Button } from 'reactstrap';
import PropTypes from 'prop-types'
import { setPage } from '../Reducer/gameReducer'

const Score = (props) => {
    console.log(props.page)

    return <>
        It is score page
        <Button onClick={() => props.setPage('game')}>Start </Button>
        <button
            className='button w-100'
            onClick={() => props.history.push('/')}
        > onClick</button>
    </>

}

const mapStateToProps = state => {
    const { page } = state.game
    return {
        page
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    setPage
}, dispatch)

Score.propTypes = {
    setPage: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Score)
