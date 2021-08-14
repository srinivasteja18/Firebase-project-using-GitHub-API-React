import React, {useState,useEffect} from 'react'
import Axios from 'axios'

export default function Repos({repos_url}) {
    const [repos,setRepos] = useState([]);
    const fetchRepos = async ()=>{
        const {data} = await Axios.get(repos_url);
        console.log(data);
        setRepos(data);
    }
    useEffect(() => {
        fetchRepos();
    }, [repos_url])
    return (
        <div className="col2">
            <h1>Repositories</h1>
            <ul className="repos-list">
            {
                repos.map(repo =>(
                    <li className="repo" key={repo.id}>
                        <p className="repo-name">Title: {repo.name}</p>
                        <p className="repo-language"><span>Language:</span>{repo.language}</p>
                        <p className="repo-description"><span>Description:</span>{repo.description}</p>
                    </li>
                ))
            }
            </ul>
        </div>
        
    )
}
