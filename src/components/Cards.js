import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Order your drink online!</h1>
      <h1>OUR ONLINE SHOP</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>


          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/'
            />
          </ul>


          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1560526860-1f0e56046c85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/'
            />
          </ul>


        </div>
      </div>
    </div>
  );
}

export default Cards;
