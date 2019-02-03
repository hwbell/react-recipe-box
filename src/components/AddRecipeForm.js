import React, { Component } from 'react';
import '../App.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


class RecipeBox extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    return (
      <div className="container" style={styles.container}>
        <InputGroup>
          <Input placeholder="recipe name"
            onChange={(e) => this.props.handleChange('name', `${e.target.value}`)}
          />
        </InputGroup>
        <br />
        <InputGroup>
          <Input placeholder="ingredients" 
            onChange={(e) => this.props.handleChange('ingredients', `${e.target.value}`)}
          />
        </InputGroup>
      </div>
    );
  }
}

const styles = {
  container: {
    marginBottom: 30,
    width: '100%',
  }
}

export default RecipeBox;
