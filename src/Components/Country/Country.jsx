import React from 'react';
import './Country.css'
const Country = ({country}) => {
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt="" />
            <h2>Name: {country.name.common}</h2>
            <p>Capital: {country.capital.capital}</p>
        </div>
    );
};

export default Country;<h2>Name: </h2>