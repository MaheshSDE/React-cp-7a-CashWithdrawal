// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onDenominationCount = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <div className="letter-s">
              <p>S</p>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balanceContainer">
            <p className="balance">Your balance</p>
            <div className="amount-display">
              <p className="amount">{count}</p>
              <p className="rupees">In rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="unOrderList">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationDetails={eachItem}
                key={eachItem.id}
                onDenominationCount={this.onDenominationCount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
