import React from 'react'

const Header2 = (props) => {

    document.title = 'Haka Rentals ' + props.title;
    return <div className='w-100' >{props.children}</div>;
};


export default Header2