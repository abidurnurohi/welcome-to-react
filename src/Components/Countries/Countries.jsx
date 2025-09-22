import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
    const countriesAll = use(countriesPromise);
    const countries = countriesAll.countries
    console.log(countries);
    return (
        <div>
            <h1>Exploring All Countries With React: {countries.length}</h1>
        </div>
    );
};

export default Countries;