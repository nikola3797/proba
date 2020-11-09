import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

const Ingredients = () => {

  const [userIngredients, setIngredients] = useState ([]);

  const addIngredienthandler = ingredient => {
    setIngredients(prevIngredients => [
      ...prevIngredients,
       {id: Math.random().toString(), ...ingredient}
    ])
  }

  const removeIngredientHandler = id => {
    setIngredients(prev => prev.filter((ingredient) => ingredient.id !== id ))
  };


  return (
    <div className="App">
      <IngredientForm addIngHandler={addIngredienthandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />

      </section>
    </div>
  );
}

export default Ingredients;
