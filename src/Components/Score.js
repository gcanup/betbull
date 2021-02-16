import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Button } from 'reactstrap';
import PropTypes from 'prop-types'
import { listSelector } from '../Selectors/list.selector';
import logo from '../images/logo.png'

const ScorePage = (props) => {
    const { currentBalance, history } = props
    return <div className='score'>
        <img src={logo} alt='bull logo' />
        <h5>Your Balance:  </h5>
        <hr className='w-50' />
        <p className='balance'>£ {currentBalance}</p>
        <Button
            className='button w-75'
            color='success'
            onClick={() => history.push('/')}>
            Bet Again
        </Button>
    </div>
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

ScorePage.propTypes = {
    currentBalance: PropTypes.number,
    history: PropTypes.func
}

export default connect(listSelector, mapDispatchToProps)(ScorePage)
