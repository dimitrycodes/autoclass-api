import React from 'react';
import catsDogsImg from '../images/dogs-and-cats.jpg';
import './LandingPage.css';

class LandingPage extends React.Component {

  render() {

      return (
      <div className='landing-page'>
        <h2>You have arrived at PETFULL! Here you can adopt a dog or cat that have been waiting to find a home with you!</h2>
        
        <div className='landing-page-desc'>
        <img src={catsDogsImg} alt='Cats and dogs in a row'/>
        <h3>Our Process:</h3>
        <p>If you'd like to adopt, you can join our queue and can watch in real time as pets are matched up with their new owners.</p>

        <p>Once you join our adoption waiting list, you will wait until you are first in line to choose your pet. </p>
        <p>When it is your turn to pick, Petful will show you two animal choices - a cat and dog looking for happiness in your their new home with you!</p>

        <button onClick={() => this.props.history.push('/adoption')}>Click here to adopt your pet!</button>
        </div>
      </div>
      );
    }
}

export default LandingPage;