import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactCardFlip from 'react-card-flip';

import { Button, Card, CardText, Alert } from 'reactstrap';
import PropTypes from 'prop-types'
import { setScore } from '../Reducer/game.redux'
import { listSelector } from '../Selectors/list.selector';
import logo from '../images/logo.png'


const GamePage = (props) => {
    const [selectedCard, setSelectedCard] = useState(null)
    const [shuffledData, setShuffledData] = useState(null)
    const [reveal, setReveal] = useState(false)
    const [gameWin, setGameWin] = useState(false)
    const { cardData, playerName, history, setScore } = props

    useEffect(() => {
        shuffle(cardData)
        setSelectedCard(null)
        setReveal(false)
        setGameWin(false)
    }, [])

    const shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        setShuffledData(array)
    }

    const revealHandler = () => {
        setReveal(!reveal)
        setGameWin((selectedCard % 2 === 0) ? true : false)
    }

    const submitResult = () => {
        console.log(gameWin)
        setScore(gameWin)
        history.push('/score')
    }

    return <div className='game w-75'>
        <img src={logo} alt='bull logo' />
        <h5>Welcome to Game, {playerName}</h5>
        <p>Guess the card with even value and win.</p>
        <hr className='w-50' />
        <p>{(reveal && selectedCard) ? gameWin ?
            <Alert color='success'>Congratulation you made the right choice</Alert> :
            <Alert color='danger'>Unfortunately even number exists in different card</Alert> : ''} </p>
        <p>{!reveal && <Alert color='info'>Please select Card and Reveal to see the result</Alert>}</p>.
        <div className='d-flex justify-content-around w-100'>
            {shuffledData && shuffledData.map(card => {
                return (
                    <ReactCardFlip isFlipped={reveal} flipDirection="vertical">
                        <Card
                            className={`d-flex p-4 mb-3 ${selectedCard === card.id ? 'activeCard' : ''}`}
                            onClick={() => setSelectedCard(card.id)}
                        >
                            <CardText className='align-self-center'>Card</CardText>
                        </Card>

                        <Card
                            className={`d-flex p-4 mb-3 ${selectedCard === card.id ? 'activeCard' : ''}`}>
                            <CardText className='align-self-center'>{card.value}</CardText>
                        </Card>
                    </ReactCardFlip>
                )
            })}
        </div>
        <Button
            className='mt-2 mb-2 w-75'
            color='success'
            onClick={revealHandler}
            disabled={!selectedCard}>
            Reveal
        </Button>
        <Button
            className='button w-100'
            color='primary'
            disabled={!reveal}
            onClick={submitResult}>
            Check Balance
        </Button>
    </div >

}


const mapDispatchToProps = dispatch => bindActionCreators({
    setScore
}, dispatch)

GamePage.propTypes = {
    cardData: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        value: PropTypes.number
    }),
    playerName: PropTypes.string,
    history: PropTypes.object,
    setScore: PropTypes.func
}

export default connect(listSelector, mapDispatchToProps)(GamePage)
