import React from 'react';
import '../App.css';

interface BurgerProps {
    ingredients:
        {
            name: string;
            count: number
        }[];
}

const Burger: React.FC<BurgerProps> = ({ ingredients }) => {
    return (
        <div className="Burger">
            <h2>Burger</h2>
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients.map((ingredient) => (
                Array.from({ length: ingredient.count }).map((_, index) => (
                    <div key={`${ingredient.name}-${index}`} className={ingredient.name}></div>
                ))
            ))}
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Burger;