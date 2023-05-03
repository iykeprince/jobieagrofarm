import { useState } from 'react'
import Button from '../../components/Button'
import Input from './Input'

import classes from './CheckoutForm.module.css'
const Form = ({ onBank, onFlutter, onPaystack }) => {
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    state: '',
    zip: '',
    country: '',
  })
  const firstNameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, firstName: e.target.value }
    })
  }
  const lastNameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, lastName: e.target.value }
    })
  }
  const addressOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, address: e.target.value }
    })
  }

  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: e.target.value }
    })
  }
  const countryOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, country: e.target.value }
    })
  }
  const zipOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, zip: e.target.value }
    })
  }
  const phoneOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, phone: e.target.value }
    })
  }
  const stateOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, state: e.target.value }
    })
  }

  const payStackHandler = (event) => {
    event.preventDefault()
    onPaystack({
      email: form.email,
      firstname: form.firstName,
      lastname: form.lastName,
      address: form.address,
      zip: form.zip,
      country: form.country,
      state: form.state,
      phone: form.phone,
    })
  }

  const bankHandler = (event) => {
    event.preventDefault()

    onBank()
  }
  const flutterHandler = (event) => {
    event.preventDefault()

    console.log('flutter')
    onFlutter()
  }

  return (
    <form oValidate>
      <h3 className="display-6 text-left">Delivery Details</h3>
      <br />
      <div className={classes.row}>
        <div className={classes.row__left}>
          <Input
            id="firstName"
            label="First Name"
            type="text"
            placeholder="What's your first name?"
            value={form.firstName}
            onChange={firstNameOnChangeHandler}
          />
        </div>
        <div className={classes.row__right}>
          <Input
            id="lastName"
            label="Last Name"
            type="text"
            placeholder="What's your last name?"
            value={form.lastName}
            onChange={lastNameOnChangeHandler}
          />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.row__left}>
          <Input
            id="phone"
            label="Phone Number"
            type="nomber"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={phoneOnChangeHandler}
          />
        </div>
        <div className={classes.row__right}>
          <Input
            id="zip"
            label="Zip Code"
            type="nomber"
            placeholder="Enter your zip code"
            value={form.zip}
            onChange={zipOnChangeHandler}
          />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.row__left}>
          <Input
            id="state"
            label="State"
            type="text"
            placeholder="Enter your State"
            value={form.state}
            onChange={stateOnChangeHandler}
          />
        </div>
        <div className={classes.row__right}>
          <Input
            id="country"
            label="Country"
            type="text"
            placeholder="Where are you from"
            value={form.country}
            onChange={countryOnChangeHandler}
          />
        </div>
      </div>

      <Input
        id="email"
        label="Email Address"
        type="email"
        placeholder="What's your email address?"
        value={form.email}
        onChange={emailOnChangeHandler}
      />
      <Input
        id="address"
        label="House Address"
        type="text"
        placeholder="Enter your address"
        value={form.address}
        onChange={addressOnChangeHandler}
      />

      <div className="flex flex-column flex-md-row  justify-content-between ">
        <Button
          id="btn__submit"
          type="button"
          className="btn btn-dark mb-2 mb-md-0"
          onClick={bankHandler}
        >
          Pay with Bank
        </Button>
        <Button
          id="btn__submit"
          type="button"
          className="btn btn-dark mb-2 mb-md-0"
          // className={classes.button}
          onClick={payStackHandler}
        >
          Pay with PayStack
        </Button>
        <Button
          id="btn__submit"
          type="button"
          // className={classes.button}
          className="btn btn-dark mb-2 mb-md-0"
          onClick={flutterHandler}
        >
          Pay with Flutterwave
        </Button>
      </div>
    </form>
  )
}
export default Form
