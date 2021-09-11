import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function Filters() {
  const { filterInput, filtersByNumbers, filterButton } = useContext(StarContext);

  return (
    <div>
      <label htmlFor="filter">
        Pesquisa
        <input
          data-testid="name-filter"
          type="text"
          id="search_input"
          onChange={ filterInput }
        />
      </label>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ filtersByNumbers }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ filtersByNumbers }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          onChange={ filtersByNumbers }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ filterButton }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filters;
