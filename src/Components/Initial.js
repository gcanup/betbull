import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Button, Label, Input, Alert } from 'reactstrap';
import PropTypes from 'prop-types'
import { setName, setStake, fetchCardData } from '../Reducer/game.redux'
import { listSelector } from '../Selectors/list.selector';
import logo from '../images/logo.png'

const InitialPage = (props) => {
  const { betRate, history, setName, setStake, fetchCardData, betStake, currentBalance } = props

  const clickHandler = () => {
    history.push('/game')
    // fetchCardData()
  }

  return <div className='initial w-50'>
    <img src={logo} alt='bull logo' />
    <h4>Welcome to Betting Game</h4>
    <hr className='w-50' />
    <h5>Current Bet Rate is {betRate}</h5>
    <hr className='w-50' />

    {/* <Label>Please enter your name </Label> */}
    <Input type='name' className='mb-2' name='name' placeholder='Player name' onChange={(e) => setName(e.target.value)} />

    {/* <Label>Please enter your Bet Stake </Label> */}
    <Input type='number' name='stake' placeholder='Bet Stake' onChange={(e) => setStake(e.target.value)} />
    {betStake === 0 && <p style={{ 'color': 'red' }}> Please enter stake amount to proceed. </p>}
    {betStake > currentBalance ?
      <Alert color='info' className='mt-2'>
        You current balance is £ {currentBalance}. Please enter value less than that.
      </Alert> : null}
    <Button
      className='mt-2 w-100'
      color='success'
      disabled={betStake <= 0 ? true : false}
      onClick={clickHandler}>
      Start
    </Button>
  </div>
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setName,
  setStake,
  fetchCardData
}, dispatch)

InitialPage.propTypes = {
  setName: PropTypes.func,
  setStake: PropTypes.func,
  fetchCardData: PropTypes.func
}

export default connect(listSelector, mapDispatchToProps)(InitialPage)
