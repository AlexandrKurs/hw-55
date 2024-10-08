import React from 'react';

interface IngredientButtonProps {
    name: string;
    price: number;
    image: string;
    count: number;
    onAdd: (name: string) => void;
    onRemove: (name: string) => void;
}

const IngredientButton: React.FC<IngredientButtonProps> = ({ name, price, image, count, onAdd, onRemove }) => {
    return (
        <div className="btns">
            <button className="btn" onClick={() => onAdd(name)}>
                <img className="image" src={image} alt={name} />
                <span className="name">{name} - {price} kgs</span>
            </button>
            <span className="count">x {count}</span>
            <button onClick={() => onRemove(name)} disabled={count === 0}>
                X
            </button>
        </div>
    );
};

export default IngredientButton;