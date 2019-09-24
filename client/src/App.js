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
      <li>liquor Type: {liquor}</li>
      <li>{description}</li>
    </div>
  )
}

const cocktailList = (cocktails) => {
  return (
    <div>
      
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


class NewWineForm extends React.Component {
  state = {
    newWine: {name: "", type: "", year: "", description: ""}
  }

  handleTextInput = (evnt) => {
    let newWine = {...this.state.newWine}
    newWine[evnt.target.name] = evnt.target.value
    this.setState({newWine})
  }
  handleSubmit = (evnt) => {
    evnt.preventDefault();
    this.props.addWine(this.state.newWine)
  }

  render() {
    return (
      <form class="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={this.handleTextInput}
          placeholder="Bottle Name"
        />
        <input 
          type="text"
          name="type"
          onChange={this.handleTextInput}
          placeholder="Wine Type"
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
        <input type="submit" value="Add New Wine Bottle" />
      </form>
    )
  }
}

class NewBeerForm extends React.Component {
  state = {
    newBeer: {name: "", type: "", color: "", description: ""}
  }

  handleTextInput = (evnt) => {
    let newBeer = {...this.state.newBeer}
    newBeer[evnt.target.name] = evnt.target.value
    this.setState({newBeer})
  }
  handleSubmit = (evnt) => {
    evnt.preventDefault();
    this.props.addBeer(this.state.newBeer)
  }

  render() {
    return (
      <form class="form" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="name"
          onChange={this.handleTextInput}
          placeholder="Beer Name"
        />
        <input 
          type="text"
          name="type"
          onChange={this.handleTextInput}
          placeholder="Beer Type"
        />
        <input 
          type="text"
          name="color"
          onChange={this.handleTextInput}
          placeholder="Color"
        />
        <input 
          type="text"
          name="description"
          onChange={this.handleTextInput}
          placeholder="Description"
        />
        <input type="submit" value="Add New Beer" />
      </form>    
    )
  }
}

class NewCocktailForm extends React.Component {
  state = {
    newCocktail: {name: "", liquor: "", description: ""}
  }

  handleTextInput = (evnt) => {
    let newCocktail = {...this.state.newCocktail}
    newCocktail[evnt.target.name] = evnt.target.value
    this.setState({newCocktail})
  }
  handleSubmit = (evnt) => {
    evnt.preventDefault();
    this.props.addCocktail(this.state.newCocktail)
  }

  render() {
    return (
      <form class="form" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="name"
          onChange={this.handleTextInput}
          placeholder="Cocktail Name"
        />
        <input 
          type="text"
          name="liquor"
          onChange={this.handleTextInput}
          placeholder="liquor"
        />
        <input 
          type="text"
          name="description"
          onChange={this.handleTextInput}
          placeholder="Description"
        />
        <input type="submit" value="Add New Cocktail" />
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
  componentDidMount = () => {

    this.getWinesFromServer()
    this.getBeersFromServer()
    this.getCocktailsFromServer()
  }

  getWinesFromServer = () => {
    fetch('/wine')
      .then(res => res.json())
      .then(listOfWines => {
        this.setWineList(listOfWines)
      })
      console.log(fetch('/wine').then(res => res.json()))
  }

  setWineList = (list) => {
    let drinks = {...this.state.drinks}
    drinks.wine = list;
    this.setState({ drinks })
  }

  sendNewWineToServer = (newWine) => {
    fetch('/wine',
      {
        method: 'POST'
      , body: JSON.stringify(newWine)
      , headers: { 'Content-Type': 'application/json'}
      }
    ).then(() => this.getWinesFromServer())
  }

  ///////////BEER
  getBeersFromServer = () => {
    fetch('/beer')
      .then(res => res.json())
      .then(listOfBeers => {
        this.setBeerList(listOfBeers)
      })
      console.log(fetch('/beer').then(res => res.json()))
  }

  setBeerList = (list) => {
    let drinks = {...this.state.drinks}
    drinks.beer = list;
    this.setState({ drinks })
  }

  sendNewBeerToServer = (newBeer) => {
    fetch('/beer',
      {
        method: 'POST'
      , body: JSON.stringify(newBeer)
      , headers: { 'Content-Type': 'application/json'}
      }
    ).then(() => this.getBeersFromServer())
  }
  //////////COCKTAIL
  
  getCocktailsFromServer = () => {
    fetch('/cocktail')
      .then(res => res.json())
      .then(listOfCocktails => {
        this.setCocktailList(listOfCocktails)
      })
      console.log(fetch('/cocktail').then(res => res.json()))
  }

  setCocktailList = (list) => {
    let drinks = {...this.state.drinks}
    drinks.cocktails = list;
    this.setState({ drinks })
  }

  sendNewCocktailToServer = (newCocktail) => {
    fetch('/cocktail',
      {
        method: 'POST'
      , body: JSON.stringify(newCocktail)
      , headers: { 'Content-Type': 'application/json'}
      }
    ).then(() => this.getCocktailsFromServer())
  }

//  addNewWine = (createdWine) => {
//   let drinks = {...this.state.drinks}
//   drinks.wine.push(createdWine)
//   this.setState({drinks})
//  }
//  addNewBeer = (createdBeer) => {
//    let drinks = {...this.state.drinks}
//    drinks.beer.push(createdBeer)
//    this.setState({drinks})
//  }
//  addNewCocktail = (createdCocktail) => {
//   let drinks = {...this.state.drinks}
//   drinks.cocktails.push(createdCocktail)
//   this.setState({drinks})
// }

  render() {
    return (

      <div>
        <h1>Drink Log</h1>
        <h3>Wine</h3>
        {wines(this.state.drinks.wine)}
        <h4 class="add">Add New Wine</h4>
        <NewWineForm addWine={this.sendNewWineToServer}/>

        <h3>Beer</h3>
        {beers(this.state.drinks.beer)}
        <h4 class="add">Add New Beer</h4>
        <NewBeerForm addBeer={this.sendNewBeerToServer}/>

        <h3>Cocktails</h3>
        {cocktails(this.state.drinks.cocktails)}
        <h4 class="add">Add New Cocktail</h4>
        <NewCocktailForm addCocktail={this.sendNewCocktailToServer} />
        <footer>Barrett Clark 2019</footer>
      </div>
    )
  }
  


}

export default App;
