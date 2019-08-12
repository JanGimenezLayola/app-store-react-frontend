import React, { Component } from 'react'

import { Redirect } from "react-router-dom";

import appStoreService from '../services/app-store-service'

export class CreateApp extends Component {

  state = {
    name: '',
    price: null,
    image: '',
    category: '',
    date: '',
    description: '',
    redirect: false,
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState ({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    const {name , image, price, date, category} = this.state;
    event.preventDefault();
    appStoreService.addOneApp({
      name,
      image,
      price,
      date,
      category,
    })
    .then((response) => {
      this.setState({
        redirect: true,
      })
    })
    .catch((error) => {
      console.log(error);
      
    })
  }

  render() {
    const { name , image, price, date, category, redirect } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' onChange={this.handleOnChange} value={name} name='name'/>
          <label htmlFor="image">Image</label>
          <input type="text" id='image' onChange={this.handleOnChange} value={image} name='image'/>
          <label htmlFor="price">Price</label>
          <input type="number" id='price' onChange={this.handleOnChange} value={price} name='price'/>
          <label htmlFor="category">category</label>
          <select name='category' onChange={this.handleOnChange} value={category}>
            <option value="photography">Photography</option>
            <option value="games">Games</option>
            <option value="developer-tools">Developer Tools</option>
            <option value="productivity">Productivity</option>
            <option value="business">Business</option>
            <option value="music">Music</option>
            <option value="social">Social</option>
          </select>
          <label htmlFor="date">Date</label>
          <input type="date" id='date' onChange={this.handleOnChange} value={date} name='date'/>
          <button type='submit'>Add new App</button>
        </form>
        {redirect ? <Redirect to='/apps'/> : null}
      </>
    )
  }
}

export default CreateApp
