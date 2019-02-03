import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// components
import RecipeBox from './components/RecipeBox';
import AddRecipeForm from './components/AddRecipeForm';
// modules 
import ReactCardFlip from 'react-card-flip';

const initialState = {
  input: {},
  recipes: [],
  isFlipped: false
}

class App extends Component {

  constructor(props) {
    super(props);
    this.handleFlip = this.handleFlip.bind(this);
    this.showAddRecipeForm = this.showAddRecipeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.state = initialState;
  }

  handleFlip() {
    console.log('clicking')
    this.setState({
      isFlipped: !this.state.isFlipped
    })
  }

  showAddRecipeForm () {
    this.setState({
      addingRecipe: true
    })
  }

  handleChange (type, value) {
    let newInput = JSON.parse(JSON.stringify(this.state.input));
    newInput[`${type}`] = value;
    this.setState({
      input: newInput
    });
  }

  addRecipe() {
    let recipe = this.state.input;
    let currentRecipes = this.state.recipes;
    currentRecipes.push(recipe);
    this.setState({
      recipes: currentRecipes
    })
  }

  deleteRecipe (i) {
    let currentRecipes = this.state.recipes;
    currentRecipes.splice(i, 1);
    this.setState({
      recipes: currentRecipes
    })
  }

  updateRecipe (recipe, index) {
    let currentRecipes = this.state.recipes;
    currentRecipes.splice(index, 1, recipe);
    this.setState({
      recipes: currentRecipes
    })
  }

  render() {
    return (
      <div className="container App">
        <div className="center-content" style={styles.container}>

          <ReactCardFlip isFlipped={this.state.isFlipped}>

            <div key="front">
              <p>Let's make a recipe box!</p>
              <button className="btn btn-lg" onClick={this.handleFlip}>Start</button>
            </div>

            <div key="back">
              <p>Add all your favorite recipes</p>

              {this.state.addingRecipe && <AddRecipeForm handleChange={this.handleChange}/>}

              <button className="btn btn-lg" 
                onClick={!this.state.addingRecipe ? this.showAddRecipeForm : this.addRecipe}>
                Add recipe
              </button>
            </div>
          
          </ReactCardFlip>

          

          <RecipeBox 
            recipes={this.state.recipes}
            deleteRecipe={this.deleteRecipe}
            updateRecipe={this.updateRecipe}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    fontSize: 28
  }
}

export default App;
