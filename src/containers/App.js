import React, { useEffect ,useState } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';

function App() {
    const [robots , setRobots] =useState([]);
    const [searchField , setSearchField] = useState(' ')


     const onSearchChange = (event) =>{
       setSearchField(event.target.value)
    }

    useEffect( () => { 
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => setRobots(users))

}, [])
    const filteredRobots = robots.filter(robot => { 
      return robot.name.toLowerCase().includes(searchField.toLowerCase())

    })
  
     return !robots.length ? 
     <h1>loading</h1> : 
        <div className='tc'>
            <h1 className='f2'>Robo Friends</h1>
            <SearchBox searchChange ={onSearchChange} />
       <Scroll>
        <ErrorBoundry>
        <CardList Robot={filteredRobots}/>
        </ErrorBoundry>
        </Scroll>
        </div>
         
    
  

}

  

export default App;
