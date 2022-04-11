import { Component } from 'react'
import logo from './logo.svg'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
      
    }
  }
  // FIRST TIME IT RENDERS
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      },
      () => {
        console.log(this.state);
      }))
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    
    this.setState(() =>{
      return { searchField }
    })
  };
  render(){
    const {monsters, searchField} = this.state
    const { onSearchChange } = this
    const filteredMonsters = monsters.filter((monster) =>{
            return monster.name.toLocaleLowerCase().includes(searchField)
          })
    return (
        <div className="App">
          {/* MAP NEEDS A KEY (?) */}
          <input 
          className='search-box' 
          placeholder='Search' 
          type="search" 
          onChange={onSearchChange}/>
          {filteredMonsters.map((monster) => {

            return <h1 key={monster.name}>{monster.name}</h1>
          })}
        </div>
      );
  }
}

export default App;
