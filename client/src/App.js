import React from 'react';
import './App.css';


const wine = ({name, type, year, description}) => {
  return (
    <div>
      <h4>{name}</h4>
      <li>{type}</li>
      <li>{year}</li>
      <li>{description}</li>
    </div>
  )
}

const wineList = (wines) => {
  return (
    <div>
      <h3>All Wine</h3>
      <ul>
        {wines.map(wine)}
      </ul>
    </div>
  )
}

const wines = (wines) => {
  return (
  wineList(wines)
  )
}

const beer = ({name, type, color, description}) => {
  return (
    <div>
      <h4>{name}</h4>
      <li>{type}</li>
      <li>{color}</li>
      <li>{description}</li>
    </div>
  )
}

const beerList = (beers) => {
  return (
    <div>
      <h3>All Beers</h3>
      <ul>
        {beers.map(beer)}
      </ul>
    </div>
  )
}

const beers = (beers) => {
  return (
    beerList(beers)
  )
}

const cocktail = ({name, liquor, description}) => {
  return (
    <div>
      <h4>{name}</h4>
      <li>{liquor}</li>
      <li>{description}</li>
    </div>
  )
}

const cocktailList = (cocktails) => {
  return (
    <div>
      <h4>All Cocktails</h4>
      <ul>
        {cocktails.map(cocktail)}
      </ul>
    </div>
  )
}

const cocktails = (cocktails) => {
  return (
    cocktailList(cocktails)
  )
}


class NewBottleForm extends React.Component {
  state = {
    newBottle: {name: "", year: "", description: ""}
  }

  handleTextInput = (evnt) => {
    let newBottle = {...this.state.newBottle}
    newBottle[evnt.target.name] = evnt.target.value
    this.setState({newBottle})
  }
  handleSubmit = (evnt) => {
    evnt.preventDefault();
    this.props.addBottle(this.state.newBottle)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={this.handleTextInput}
          placeholder="Bottle Name"
        />
        <input
          type="number"
          name="year"
          onChange={this.handleTextInput}
          placeholder="Year"
        />
        <input 
          type="text"
          name="description"
          onChange={this.handleTextInput}
          placeholder="Description"
        />
        <input type="submit" value="Add New Bottle" />
      </form>
    )
  }

}

class App extends React.Component {
  state = {
    drinks: {
      wine: [
        {name: "Chateau de Fancy", type: "Cabernet", year: 1974, description: "very fancy wine" },
        {name: "2nd wine", type: "Cabernet", year: 1980, description: "another fancy wine"},
        {name: "this is the second", type: "Cabernet", year: 1974, description: "very fancy wine" },
        {name: "2nd wine", type: "Cabernet", year: 1980, description: "another fancy wine"}
      ],     
      beer: [
        {name: "420", type: "IPA", color: "amber", description: "really good"},
        {name: "Budweiser", type: "IPA", color: "golden", description: "best beer ever"},
      ],
      cocktails: [
        {name: "White Russian", liquor: "Vodka", description: "very good cocktail"},
        {name: "Mojito", liquor: "Rum", description: "very silly drink"}
      ]
    }
  }
//could possibly add if statement here once we have 

 addNewBottle = (createdBottle) => {
  let drinks = {...this.state.drinks}
  
  drinks.wine[0].bottles.push(createdBottle)
  this.setState({drinks})


 }

  render() {
    return (

      <div>
        <h1>Header Works</h1>
        {/* <NewBottleForm addBottle={this.addNewBottle}/> */}
        {wines(this.state.drinks.wine)}
        {beers(this.state.drinks.beer)}
        {cocktails(this.state.drinks.cocktails)}


      </div>
    )
  }
  


}

export default App;
