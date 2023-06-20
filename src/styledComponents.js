import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  //   align-items: center;
  padding: 30px 0px;
`

export const WidthContainer = styled.div`
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  //   align-items: flex-end;
`

export const GameTopContainer = styled.div`
  border: 1px solid #ffffff;
  padding: 20px;
  font-family: 'Bree Serif';
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ItemName = styled.h1`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  opacity: 0.7;
`

export const ScoreText = styled.p`
  font-size: 17px;
  font-weight: 600;
  margin: 0px;
`

export const Score = styled.p`
  font-size: 35px;
  margin: 0px;
  font-family: 'Roboto';
`

export const RockScissorContainer = styled.div`
  list-style-type: none;
  padding: 0px;
  width: 200px;
  text-align: center;
  align-self: center;
  margin-top: 70px;
`
export const RPSButton = styled.button`
  padding: 0px;
  margin: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const RPSItemImg = styled.img`
  width: 90px;
`

export const ResultRPSContainer = styled.div`
  margin-top: 60px;
  text-align: center;
`

export const SelectedRPSContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  max-width: 250px;
`

export const YouOpponentText = styled.h1`
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  text-align: center;
`

export const YouWonLoseText = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const PlayAgainBtn = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  padding: 6px 25px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  font-family: 'Bree Serif';
`

export const RulesButton = styled.button`
  align-self: flex-end;
  margin-top: auto;
  //   margin-bottom: 50x;s

  background-color: #ffffff;
  color: #223a5f;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  opacity: ${props => (props.popIsActive ? 0.5 : 1)};
`

export const StyledPopup = styled(Popup)`
  &-overlay {
    // background-color: red;
  }
  &-content {
    // Apply your custom styles for the content here
    background-color: #ffffff;
    width: 80%;
    max-width: 500px;
    padding-bottom: 20px;
  }
`

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const RulesClosebtn = styled.button`
  padding: 6px;
  margin: 5px;
  //   background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
`

export const CloseIcon = styled(RiCloseLine)``

export const RulesImg = styled.img`
  width: 80%;
  align-self: center;
`
