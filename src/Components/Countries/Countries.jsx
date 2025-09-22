import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const countriesAll = use(countriesPromise);
    const countries = countriesAll.countries
    console.log(countries);
    return (
        <div>
            <h1>Exploring All Countries With React: {countries.length}</h1>
        <div className='countries'>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
        </div>
    );
};

export default Countries;