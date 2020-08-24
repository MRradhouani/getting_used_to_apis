import React, { useEffect, useState } from 'react'
import jsonServerProvider from 'ra-data-json-server';
import axios from 'axios';


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data));


function UserList() {
    const [posts, setPost] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <h1>hello API</h1>

            <ul className="post">
                {posts.map(post => (<li key={post.id} className="one">
               <span className="name"><label> full name :</label> {post.name}</span> 
                  <span className="username"> {post.username}</span><br/> 
                   <span className="email"><label> Email :</label>{post.email}</span><br/>
                   <span className="city"><label> Adress :</label>{post.address.city}</span> 
                    
                    </li>
                ))}

            </ul>

        </div>
    )
}

export default UserList
