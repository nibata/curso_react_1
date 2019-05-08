import React, {Component} from 'react';
import './assets/css/style.css'
import {characters} from './heroes'


class Desafio1 extends Component {
  
  render() {
    return (
     	<div className="index">
     	   <div className="container">
     		 <h2>Fellowship of the Ring</h2>
     		 <div className="search-input">
		        <input type="text" placeholder="search hero"></input>
		      </div>
		      <table className="characters-table">
			    <tbody>
		          <tr className="character-row">
		            <th>Name</th>
		            <th>Race</th>
		            <th>Age</th>
		            <th>Weapon</th>
		            <th></th>
		          </tr>
		     	  {characters.map(item => {
		     	    return(
		     		  <tr className="character-row">
			     		<td>{item.name}</td>
			     		<td>{item.race}</td>
			     		<td>{item.age}</td>
			     		<td>{item.weapon}</td>
			     		<td>
			     		  <div className="controls">
				            <div>☠ Kill</div>
				            <div>💍 Use Ring</div>
				          </div>
				        </td>
		     		   </tr>
		     		   )})}
			     </tbody>
     		 </table>
		     </div>
	  	</div>


    );
  };
}

export default Desafio1;