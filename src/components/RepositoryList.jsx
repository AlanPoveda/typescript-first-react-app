import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';


//Api github with repos url
//https://api.github.com/users/AlanPoveda/repos

//scss
import '../styles/repositories.scss'

//Um objeto com várias informaçõesß
/**
 * Um objeto estático preenchendo as informações do componente criado
 * const repository = {
    name: "uunform",
    description: "Forms in React",
    link: "google.com"
}
 */



export function RepositoryList(){
    //Listagem do repositórios
    const [ repositories, setRepositories ] = useState([])

    //Fazendo uma chamada na api do gitHub com os repositories
    useEffect(()=>{
        fetch('https://api.github.com/users/AlanPoveda/repos')
        .then( response => response.json())
        .then( data => setRepositories(data))
    },[]);
    console.log(repositories)
    
    return(
        <section className="respository-list">
            <h1>Lista de respositories</h1>

            <ul>
                {repositories.map( repo => {
                    //teve que por a key pois da erro. Assim soluciona o problema
                    return <RepositoryItem key={repo.name} repository={repo} /> 
                })}
                
            </ul>

        </section>
    );
}