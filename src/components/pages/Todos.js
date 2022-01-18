import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Todos = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params])
    
    return (
        <div className="todos">
            Todos
        </div>
    )
}

export default Todos;