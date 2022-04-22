import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('http://localhost:4000/user')
        .then(res => res.json())
        .then(data=> setUsers(data))
    },[])
    const handleUserDelete =id=>{
        const proceed = window.confirm('are you sure you want to delete this')
        if(proceed){
            const url = `http://localhost:4000/user/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                }
            })
        }
    }
    if(users.length === 0){
        navigate('/user/add')
    }
    return (
        <div>
            {
                users.map(user =><div className="my-5 p-4 bg-orange-200 rounded-xl mx-5" key={user._id}>
                    <p>Name: {user.name}</p>
                    <p>Name: {user.phone}</p>
                    <p>Name: {user.email}</p>
                    <p>Email: {user.address}</p>
                    <Link to={`/update/${user._id}`} className='bg-neutral-400 p-1 my-1 rounded-lg hover:bg-green-300 mx-3'>Update</Link>
                    <button onClick={()=>{handleUserDelete(user._id)}} className='bg-neutral-400 p-1 my-1 rounded-lg hover:bg-green-300 mx-3'>Delete</button>
                </div>)
            }
        </div>
    );
};

export default Home;