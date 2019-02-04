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
    // make placeholder text red if nothing was typed

    return (
      <div className="container" style={styles.container}>
        <InputGroup style={styles.input}>
          <Input style={styles.input} placeholder="recipe name"
            onChange={(e) => this.props.handleChange('name', `${e.target.value}`)}
          />
        </InputGroup>
        <br />
        <InputGroup style={styles.input}>
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
    width: '100%',
    marginBottom: 30,
  },
  input: {
    width: '100%',
  },
  normalText: {
    color: 'grey'
  },
  warnText: {
    color: 'red'
  }
}

export default RecipeBox;
