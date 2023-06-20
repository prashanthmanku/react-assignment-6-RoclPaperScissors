import {RPSButton, RPSItemImg} from './styledComponets'

const GameItem = props => {
  const {itemDetails, ChangeUserSlectItem} = props
  const {id, imageUrl, testId} = itemDetails
  const onChangeUserSlectItem = () => {
    ChangeUserSlectItem(imageUrl, id)
  }

  return (
    <RPSButton
      type="button"
      onClick={onChangeUserSlectItem}
      data-testid={testId}
    >
      <RPSItemImg src={imageUrl} key={itemDetails.id} alt={id} />
    </RPSButton>
  )
}
export default GameItem
