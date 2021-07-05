// Write your JS code here

import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstErrorMsg: false,
    lastErrorMsg: false,
    isDisplay: true,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onLostFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstErrorMsg: true})
    } else {
      this.setState({firstErrorMsg: false})
    }
  }

  onLostLastName = event => {
    if (event.target.value === '') {
      this.setState({lastErrorMsg: true})
    } else {
      this.setState({lastErrorMsg: false})
    }
  }

  onSubmitSuccessForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({firstErrorMsg: true})
    }
    if (lastName === '') {
      this.setState({lastErrorMsg: true})
    }

    if (lastName !== '' && firstName !== '') {
      this.setState({isDisplay: false})
    }
  }

  onChangeSuccessForm = () => {
    this.setState(prevState => ({
      firstName: '',
      lastName: '',
      isDisplay: !prevState.isDisplay,
    }))
  }

  render() {
    const {
      firstName,
      lastName,
      firstErrorMsg,
      lastErrorMsg,
      isDisplay,
    } = this.state
    console.log(firstName, lastName)
    return (
      <div className="main-bg-container">
        <h1 className="main-heading">Registration</h1>

        {isDisplay ? (
          <form onSubmit={this.onSubmitSuccessForm} className="form-container">
            <label className="label-text" htmlFor="firstName">
              FIRST NAME
            </label>
            <input
              onBlur={this.onLostFirstName}
              onChange={this.onChangeFirstName}
              value={firstName}
              className="input-container"
              type="text"
              id="firstName"
            />
            {firstErrorMsg ? <p className="error-msg">Required</p> : ''}

            <label className="label-text" htmlFor="lastName">
              LAST NAME
            </label>
            <input
              onBlur={this.onLostLastName}
              onChange={this.onChangeLastName}
              value={lastName}
              className="input-container"
              type="text"
              id="lastName"
            />
            {lastErrorMsg ? <p className="error-msg">Required</p> : ''}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        ) : (
          <div className="success-container">
            <img
              className="success-img"
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p className="success-description">Submitted Successfully</p>
            <button
              type="button"
              className="success-button"
              onClick={this.onChangeSuccessForm}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
