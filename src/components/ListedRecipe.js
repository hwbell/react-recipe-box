import React, { Component } from 'react';
import '../App.css';

import EditForm from './EditForm';

// modules
import { ListGroup, ListGroupItem } from 'reactstrap';

class Recipe extends Component {

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
      <ListGroupItem key={this.props.num}>

        {!this.state.editing ?
          <div>
            <p style={styles.name}>{this.props.recipe.name}</p>

            <div className="row">
              <p className="col" style={styles.ingredients}>{this.props.recipe.ingredients}</p>
            </div>


            <div className="row" style={styles.buttonRow}>
              <button className=" col btn btn-sm"
                onClick={this.toggleEditForm}>
                edit
                  </button>
              <button className=" col btn btn-sm"
                onClick={() => this.props.deleteRecipe(this.props.num)}>
                delete
                  </button>
            </div>
          </div>

          : <EditForm
            recipe={this.props.recipe}
            index={this.props.num}
            updateRecipe={this.props.updateRecipe}
            toggleEditForm={this.toggleEditForm}
          />
        }

      </ListGroupItem>
    )
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

export default Recipe;
