/**
 * 
 * @param {*} props nome dos itens que vem do objeto da API do github
 * @returns nome dos itens dos objetos que vem da API
 */

//Convenção usando props
interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}


export function RepositoryItem(props: RepositoryItemProps){
    return(
        <li>
            <strong>{props.repository.name}</strong> 
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Link to repository</a>
        </li>
    );
}