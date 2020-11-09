import React, {useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

  const [enterTitle, setTitle] = useState('');
  const [enterAmount, setAmount] = useState('');


  const submitHandler = event => {
    event.preventDefault();
    props.addIngHandler({title: enterTitle, amount: enterAmount});
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={enterTitle} 
            onChange={ event => {setTitle(event.target.value)}} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={enterAmount} 
            onChange={event => {setAmount(event.target.value)}} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
