import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry.js';

class App extends Component{
    constructor (){
      super()
        this.state = {
            Robot: [],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({Robot:users}))
    }
     onSearchChange = (event) =>{
        this.setState({searchField: event.target.value})
    }
render() {
    const filteredRobots = this.state.Robot.filter(Robots => { 
      return Robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())

    })
     return !this.state.Robot.length ? 
     <h1>loading</h1> : 
         
        <div className='tc'>
            <h1 className='f2'>Robo Friends</h1>
            <SearchBox searchChange ={this.onSearchChange} />
       <Scroll>
        <ErrorBoundry>
        <CardList Robot={filteredRobots}/>
        </ErrorBoundry>
        </Scroll>
        </div>
         
    }
  }



  

export default App;
