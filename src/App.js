import {Component} from 'react'
import GameItem from './components/GameItem'
// import Popup from 'reactjs-popup'
import {
  AppContainer,
  WidthContainer,
  GameTopContainer,
  ScoreContainer,
  ScoreText,
  Score,
  ItemName,
  RockScissorContainer,
  RPSItemImg,
  ResultRPSContainer,
  SelectedRPSContainer,
  YouOpponentText,
  YouWonLoseText,
  PlayAgainBtn,
  RulesButton,
  StyledPopup,
  RulesContainer,
  RulesClosebtn,
  CloseIcon,
  RulesImg,
} from './styledComponents'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testId: 'paperButton',
  },
]

class App extends Component {
  state = {
    isGameOver: false,
    userSelectedItemUrl: '',
    randomlySelectedItemUrl: '',
    randomlySelectedItemId: '',
    gameResultStatus: '',
    score: 0,
    popUpIsActive: false,
  }

  componentDidMount() {
    this.generateRandomUrl()
  }

  generateRandomUrl = () => {
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    this.setState({
      randomlySelectedItemUrl: choicesList[randomIndex].imageUrl,
      randomlySelectedItemId: choicesList[randomIndex].id,
    })
  }

  ChangeUserSlectItem = (url, id) => {
    const {randomlySelectedItemId} = this.state
    let {gameResultStatus, score} = this.state
    // console.log(id, randomlySelectedItemId)

    if (randomlySelectedItemId === id) {
      gameResultStatus = 'IT IS DRAW'
    } else if (id === 'ROCK' && randomlySelectedItemId === 'PAPER') {
      gameResultStatus = 'YOU LOSE'
      score -= 1
    } else if (id === 'ROCK' && randomlySelectedItemId === 'SCISSORS') {
      gameResultStatus = 'YOU WON'
      score += 1
    } else if (id === 'PAPER' && randomlySelectedItemId === 'ROCK') {
      gameResultStatus = 'YOU WON'
      score += 1
    } else if (id === 'PAPER' && randomlySelectedItemId === 'SCISSORS') {
      gameResultStatus = 'YOU LOSE'
      score -= 1
    } else if (id === 'SCISSORS' && randomlySelectedItemId === 'PAPER') {
      gameResultStatus = 'YOU WON'
      score += 1
    } else if (id === 'SCISSORS' && randomlySelectedItemId === 'ROCK') {
      gameResultStatus = 'YOU LOSE'
      score -= 1
    }

    this.setState({
      isGameOver: true,
      userSelectedItemUrl: url,
      gameResultStatus,
      score,
    })
  }

  onClickPlayAgain = () => {
    this.generateRandomUrl()
    this.setState({isGameOver: false})
  }

  onClickPopUp = () => {
    console.log('kk')
    this.setState({popUpIsActive: true})
  }

  renderPlayingView = () => (
    <RockScissorContainer>
      {choicesList.map(each => (
        <GameItem
          itemDetails={each}
          key={each.id}
          ChangeUserSlectItem={this.ChangeUserSlectItem}
        />
      ))}
    </RockScissorContainer>
  )

  renderResultView = () => {
    const {
      randomlySelectedItemUrl,
      userSelectedItemUrl,
      gameResultStatus,
    } = this.state
    return (
      <ResultRPSContainer>
        <SelectedRPSContainer>
          <div>
            <YouOpponentText>YOU</YouOpponentText>
            <RPSItemImg src={userSelectedItemUrl} alt="your choice" />
          </div>
          <div>
            <YouOpponentText>OPPONENT</YouOpponentText>
            <RPSItemImg src={randomlySelectedItemUrl} alt="opponent choice" />
          </div>
        </SelectedRPSContainer>
        <YouWonLoseText>{gameResultStatus}</YouWonLoseText>
        <PlayAgainBtn type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainBtn>
      </ResultRPSContainer>
    )
  }

  renderRulesView = () => {
    const {popUpIsActive} = this.state
    console.log(popUpIsActive)
    return (
      <StyledPopup
        // how to change the popUpIsActive state when popup is open
        trigger={open => (
          <RulesButton type="button" popIsActive={open}>
            RULES
          </RulesButton>
        )}
        closeOnDocumentClick={false}
        modal
        role="dialog"
      >
        {close => (
          <>
            <RulesContainer>
              <RulesClosebtn type="button" onClick={() => close()}>
                <CloseIcon />
              </RulesClosebtn>

              <RulesImg
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </RulesContainer>
          </>
        )}
      </StyledPopup>
    )
  }

  render() {
    const {isGameOver, score} = this.state
    return (
      <AppContainer>
        <WidthContainer>
          <GameTopContainer>
            <div>
              <ItemName>
                Rock
                <br />
                Paper <br />
                Scissors
              </ItemName>
            </div>
            <ScoreContainer>
              <ScoreText>Score</ScoreText>
              <Score>{score}</Score>
            </ScoreContainer>
          </GameTopContainer>
          {isGameOver ? this.renderResultView() : this.renderPlayingView()}

          {this.renderRulesView()}
        </WidthContainer>
      </AppContainer>
    )
  }
}

export default App
