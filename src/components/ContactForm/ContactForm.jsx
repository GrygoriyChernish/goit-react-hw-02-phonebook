import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={s.Form} onSubmit={this.handleSubmit}>
        <label className={s.Label}>
          Name{' '}
          <input
            className={s.Input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Sidr Sidorov"
          />
        </label>
        <label className={s.Label}>
          Number{' '}
          <input
            className={s.Input}
            type="phone"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="777-77-77"
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
