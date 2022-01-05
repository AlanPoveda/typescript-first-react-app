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

interface Repository {
    name: string;
    description: string;
    html_url: string
}


export function RepositoryList(){
    //Listagem do repositórios. Ainda tem type no useState
    const [ repositories, setRepositories ] = useState<Repository[]>([]);

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