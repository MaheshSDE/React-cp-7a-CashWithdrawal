// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onDenominationCount} = props
  const {value} = denominationDetails

  const onDeduct = () => {
    onDenominationCount(value)
  }

  return (
    <li className="listContainer">
      <button type="button" className="button" onClick={onDeduct}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
