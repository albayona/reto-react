import React, { useState, useEffect } from 'react';
import './Gallery.scss';

import { Card } from './Card';

export const Gallery = () => {


    const [chars, setChars] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())

            .then(data =>
                    setChars(data.results)


            )
    },[]);

    return (


        <div className='row'>

                {chars.map(item =>  <div className='col-lg-2 col-md-3 mb-4' key={item.id}><Card props={item} /> </div>)}


        </div>
    );

};
