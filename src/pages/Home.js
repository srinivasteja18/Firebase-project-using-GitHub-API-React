import React,{useState,useContext} from 'react'
import Axios from'axios'
import { toast } from 'react-toastify';
import UserContext from '../context/UserContext';
import { Redirect } from 'react-router-dom';
import UserCard from '../components/UserCard';
import Repos from '../components/Repos';


export default function Home() {
    const context = useContext(UserContext);
    const [query,setQuery] = useState('');
    const [details,setDetails] = useState(null);
    const fetchDetails = async () =>{
        try{
            const {data} = await Axios.get(`https://api.github.com/users/${query}`);
            setDetails(data);
        }catch(error){
            console.log(error);
            toast(error.message,{type:"error"});
        }
    }
    if(context.user?.uid){
        return <Redirect to="/Signup"/>
    }
    return (
        <div className="home-section">
            <div className="home-input-div">
                <input className="home-input" type="text" value={query} onChange={(e) =>setQuery(e.target.value)} placeholder="Search a GitHub User"/>
                <button className="home-button" onClick={fetchDetails}>Fetch</button>
            </div>
            <div className="home-body">
                {details ? <UserCard user={details}/> : null}
                {details ? <Repos repos_url={details.repos_url}/> : null}
            </div>
        </div>
    )
}
