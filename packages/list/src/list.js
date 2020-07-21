import React, { forwardRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import PropTypes from 'prop-types';
import Row from './row';
import { VariableSizeList } from 'react-window';

const PADDING_SIZE = 20;

const innerElementType = forwardRef(({ style, ...rest }, ref) => (
    <div
        ref={ref}
        style={{
            ...style,
            height: `${parseFloat(style.height) + PADDING_SIZE * 2}px`,
        }}
        {...rest}
    />
));

const List = (props) => {
    const { getItemSize, items } = props;

    return (
        <AutoSizer>
            {({ height, width }) => (
                <VariableSizeList
                    height={height}
                    innerElementType={innerElementType}
                    itemData={{ items }}
                    itemCount={items.length}
                    itemSize={getItemSize}
                    width={width}
                >
                    {Row}
                </VariableSizeList>
            )}
        </AutoSizer>
    );
};

List.propTypes = {
    getItemSize: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

export default List;
