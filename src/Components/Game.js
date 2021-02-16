import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, NavLink } from 'react-router-dom'

import { Button } from 'reactstrap';
import PropTypes from 'prop-types'
import { setPage } from '../Reducer/gameReducer'

const GamePage = (props) => {
    console.log(props.page)

    return <>
        It is game page
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

GamePage.propTypes = {
    setPage: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
