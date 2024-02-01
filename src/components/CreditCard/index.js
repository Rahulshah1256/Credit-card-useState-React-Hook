import {useState} from 'react'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }
  const onChangeCardHolderName = event => {
    setCardHolderName(event.target.value.toUpperCase())
  }

  return (
    <div>
      <div>
        <h1>CREDIT CARD</h1>
        <p>{cardNumber}</p>
        <p>CARDHOLDER NAME</p>
        <p>{cardHolderName}</p>
      </div>
      <div>
        <h1>Payment Method</h1>
        <input
          type="text"
          placeholder="Card Number"
          onChange={onChangeCardNumber}
        />
        <input
          type="text"
          placeholder="Cardholder Name"
          onChange={onChangeCardHolderName}
        />
      </div>
    </div>
  )
}

export default CreditCard
