import React,{useState, useEffect} from 'react';
import axios from 'axios';

function AxiosDataAPI (){
    const [posts, setPosts]=useState([]); 
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(
            res=>{
                console.log(res);
                setPosts(res.data);
            })
        .catch(err=>{ 
            console.log(err);
        });
    });
    return(
        <div>
            <h6>Fetch API data using Axios:  </h6>
            <ul>
                {posts.map(item=>(
                    <li key={item.id}> {item.title}</li>
                ))}
            </ul>
        </div>
    );
}
export default AxiosDataAPI;