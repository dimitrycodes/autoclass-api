import React from 'react';
import { Link } from 'react-router-dom';
import PetfulContext from '../Context';
import './NewFamilyPage.css';

class NewFamilyPage extends React.Component {
  static contextType = PetfulContext;

  render() {
    const { owner, pet } = this.context.newFam;
      return (
      <div className='new-fam-page'>
        <h2>{pet ? pet.name : 'This happy pet'} now has a home with {owner ? owner : 'you!'}!</h2>
        {pet && <img src={pet.imageURL} alt='Adopted pet'/>}
        <Link to='/adoption'>Click here and adopt a friend for your new pet!</Link>
      </div>
      );
    }
}

export default NewFamilyPage;