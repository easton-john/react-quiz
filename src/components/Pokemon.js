import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {

  static propTypes = {
    pokemon: PropTypes.object,
    onSelect: PropTypes.func
  };

  render() {
    const { pokemon, onSelect } = this.props;

    return (
      <li>
        <h3>{pokemon.pokemon}</h3>
        <img src={pokemon.url_image}/>
        <p>Type 1: {pokemon.type_1}</p>
        <p>Type 2: {pokemon.type_2}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <button name="favorite" onClick={() => onSelect(pokemon)}>Add as Favorite</button>
        
      </li>
    );
  }
}

export default Pokemon;