import React, { useContext } from 'react';
import StarContext from '../context/StarContext';
import Filters from './Filters';

function Table() {
  const { filterPlanet } = useContext(StarContext);
  return (
    <div>
      <Filters />
      <table>
        <thead>
          <tr id="table-planets">
            <th>Name</th>
            <th>Rotation_period</th>
            <th>Orbital_period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface_water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        { filterPlanet.map((planet) => (
          <tbody key={ planet.name }>
            <tr>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          </tbody>
        )) }
      </table>
    </div>
  );
}

export default Table;
