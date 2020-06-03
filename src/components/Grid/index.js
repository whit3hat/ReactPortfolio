import React from 'react';

// Exporting the Container, Row and Col comps from this file

//Container Component
export function Container({ fluid, children}) {
    return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>;
}

//Row component
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>;
}

//Column Component
export function Col({ size, children }) {
    return (
        <div
            className={size
            .split(' ')
            .map(size => 'col-' + size)
            .join(' ')}
        >
            {children}
    </div>
    );
}