/**
 * 
 * @param {*} props nome dos itens que vem do objeto da API do github
 * @returns nome dos itens dos objetos que vem da API
 */

export function RepositoryItem(props){
return(
    <li>
        <strong>{props.repository.name}</strong> 
        <p>{props.repository.description}</p>
        <a href={props.repository.html_url}>Link to repository</a>
    </li>
);
}