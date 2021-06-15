import React from 'react';

function Section ({title, children}) {
    return(
        <section>
            {title && <h3>{title}</h3>}
            {children}
        </section>
    )
}

export default Section;