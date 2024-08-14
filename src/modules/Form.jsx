import { useState } from 'react';
import Error from './Error';
import Card from './card';

const Form = () => {

    const [flag, setFlag] = useState(false);
    const [error, setError] = useState(false);

    const [user, setUser] = useState({
        name: '',
        favoriteBand: ''
    })

    const handleName = (e) => {
        setUser({...user, name: e.target.value})
    }

    const handleFavoriteBand = (e) => {
        setUser({...user, favoriteBand: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.name.length >= 3 && user.favoriteBand.length >= 6) {
            setFlag(true);
            setError(false);
        }else{
            setFlag(false);
            setError(true);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ingresa tu nombre</label>
                    <input type="text" onChange={handleName}/>
                </div>
                
                <div>
                    <label>Ingresa el nombre de tu banda favorita</label>
                    <input type="text" onChange={handleFavoriteBand}/>
                </div>
                
                <button>Enviar</button>
            </form>
            { error ? <Error/>  : null}
            {flag ? <Card  {...user} /> : null}
        </div>
    )
}

export default Form