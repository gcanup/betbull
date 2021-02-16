import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, NavLink } from 'react-router-dom'

import { Button } from 'reactstrap';
import PropTypes from 'prop-types'
import { setPage } from '../Reducer/gameReducer'
import { listSelector } from '../Selectors/list.selector';

const InitialPage = (props) => {
  const { page } = props
  console.log(page)
  return <div className='initial'>
    <h5>Welcome to Betting Game</h5>
    <Button onClick={() => props.setPage('game')}>Start </Button>
  </div>
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage
}, dispatch)

InitialPage.propTypes = {
  setPage: PropTypes.func
}

export default connect(listSelector, mapDispatchToProps)(InitialPage)
