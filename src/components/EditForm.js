import React, { Component } from 'react';
import '../App.css';

// modules
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


class RecipeBox extends Component {

  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.sendUpdate = this.sendUpdate.bind(this);

    this.state = {
      recipe: this.props.recipe
    }

  }

  handleEdit(type, value) {
    let newRecipe = JSON.parse(JSON.stringify(this.state.recipe));
    newRecipe[`${type}`] = value;
    this.setState({
      recipe: newRecipe
    });
  }

  sendUpdate (recipe, index) {
    this.props.toggleEditForm();
    this.props.updateRecipe(recipe, index);
  }

  render() {

    let index = this.props.index;

    return (
      <div className="container" style={styles.container}>
        <InputGroup style={styles.input}>
          <Input placeholder={this.props.recipe.name}
            onChange={(e) => this.handleEdit('name', `${e.target.value}`)}
          />
        </InputGroup>
        <br />
        <InputGroup style={styles.input}>
          <Input placeholder={this.props.recipe.ingredients}
            onChange={(e) => this.handleEdit('ingredients', `${e.target.value}`)}
          />
        </InputGroup>

        <div className="row" style={styles.buttonRow}>
          <button className=" col btn btn-sm"
            onClick={() => this.sendUpdate(this.state.recipe, index)}>
            done
          </button>
          <button className=" col btn btn-sm"
            onClick={this.props.cancel}>
            cancel
          </button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    // minWidth: 350,
    // border: '1px solid blue'
  },
  input: {
    margin: 0
  },
  name: {
    fontSize: 22,
  },
  ingredients: {
    fontSize: 18,
  },
  buttonRow: {
    marginTop: 20,
    width: '60%'
  }

}

export default RecipeBox;
