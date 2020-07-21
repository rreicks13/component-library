import React from 'react';

const GUTTER_SIZE = 10;

const Row = ({ data, index, style }) => {
    const { items } = data;
    return (
        <div
            style={{
                ...style,
                left: style.left + GUTTER_SIZE,
                top: style.top + GUTTER_SIZE,
                width: '95%',
                height: style.height - GUTTER_SIZE,
            }}
        >
            {items[index]}
        </div>
    );
};

export default Row;
