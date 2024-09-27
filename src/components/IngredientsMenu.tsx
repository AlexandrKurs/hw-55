import meatImage from '../assets/Meat.png';
import cheeseImage from '../assets/Cheese.png';
import saladImage from '../assets/Salad.png';
import baconImage from '../assets/Bacon.png';

import React, { useState } from 'react';
import IngredientButton from './IngredientButton';
import Burger from './Burger';

interface Ingredient {
    name: string;
    price: number;
    image: string;
}

interface IngredientCount {
    name: string;
    count: number;
}

const INGREDIENTS: Ingredient[] = [
    { name: 'Meat', price: 80, image: meatImage },
    { name: 'Cheese', price: 50, image: cheeseImage },
    { name: 'Salad', price: 10, image: saladImage },
    { name: 'Bacon', price: 60, image: baconImage },
];

const IngredientsMenu: React.FC = () => {
    const [ingredients, setIngredients] = useState<IngredientCount[]>([
        { name: 'Meat', count: 0 },
        { name: 'Cheese', count: 0 },
        { name: 'Salad', count: 0 },
        { name: 'Bacon', count: 0 },
    ]);

    const handleAddIngredient = (name: string) => {
        setIngredients((prev) => {
            const updatedIngredients = prev.map((ingredient) => {
                if (ingredient.name === name) {
                    return { ...ingredient, count: ingredient.count + 1 };
                }
                return ingredient;
            });
            return updatedIngredients;
        });
    };

    const handleRemoveIngredient = (name: string) => {
        setIngredients((prev) => {
            const updatedIngredients = prev.map((ingredient) => {
                if (ingredient.name === name && ingredient.count > 0) {
                    return { ...ingredient, count: ingredient.count - 1 };
                }
                return ingredient;
            });
            return updatedIngredients;
        });
    };

    const totalPrice = ingredients.reduce((total, ingredient) => {
        const ingredientData = INGREDIENTS.find(item => item.name === ingredient.name);
        return total + (ingredient.count * (ingredientData ? ingredientData.price : 0));
    }, 30);

    return (
        <div>
            <div className="menu">
                {INGREDIENTS.map((ingredient) => {
                    const count = ingredients.find(item => item.name === ingredient.name)?.count || 0;
                    return (
                        <IngredientButton
                            key={ingredient.name}
                            name={ingredient.name}
                            price={ingredient.price}
                            image={ingredient.image}
                            count={count}
                            onAdd={handleAddIngredient}
                            onRemove={handleRemoveIngredient}
                        />
                    );
                })}
            </div>

            <h2>Total Price: {totalPrice} kgs</h2>

            <Burger ingredients={ingredients} />
        </div>
    );
};

export default IngredientsMenu;