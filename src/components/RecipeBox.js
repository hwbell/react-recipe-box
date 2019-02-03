import React, { Component } from 'react';
import '../App.css';

import EditForm from './EditForm';

// modules
import { ListGroup, ListGroupItem } from 'reactstrap';
import ListedRecipe from './Recipe';

class RecipeBox extends Component {

  constructor(props) {
    super(props);
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.state = {
      editing: false
    }

  }

  toggleEditForm() {
    this.setState({
      editing: !this.state.editing
    })
  }
  
  render() {
    return (
      <ListGroup style={styles.container}>
        {this.props.recipes.map((recipe, i) => {
          return (
            <ListedRecipe 
              key={i}
              num={i}
              recipe={recipe}
              deleteRecipe={this.props.deleteRecipe}
              updateRecipe={this.props.updateRecipe}
            />
          )
        })}
      </ListGroup>
    );
  }
}

const styles = {
  container: {
    margin: 30,
    width: '80%',
    // minWidth: 350,
    // border: '1px solid blue'
  },
  name: {
    fontSize: 22,
  },
  ingredients: {
    fontSize: 18,
  },
  buttonRow: {
    float: 'right',
    width: '40%'
  }
}

export default RecipeBox;
