import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'reactstrap';
import PropTypes from 'prop-types'
import { setPage } from '../Reducer/gameReducer'

const InitialPage = (props) => {
  console.log(props.page)
  return <>
    $0 and something
    <Button onClick={() => props.setPage('game')}>Start </Button>
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

InitialPage.propTypes = {
  setPage: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialPage)
