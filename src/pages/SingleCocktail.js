
import React, {useState} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

function SingleCocktail() {

    // our ID from path
    const {id} = useParams();

    const [loading, setLoading] = useState(false)
    const [singleCocktail, setSingleCocktail] = useState(null)

    // useEffect(() => {
       
    // }, [id])

    return (
        <div>
            {id}
        </div>
    )
}

export default SingleCocktail
