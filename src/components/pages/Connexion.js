import React from 'react';

const Connexion = () => {
	
	
        let id = prompt("Please enter your id");
        let password = prompt("Enter your password");
        if(password==password)
        {
			alert("Connexion réussie !");
		}
		else
		{
			alert("Echec de la connexion !");
		}
    return(
        <div className="Connexion">
            
        </div>
    )
}

export default Connexion ;
