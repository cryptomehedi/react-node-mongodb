import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams()
    const [user, setUsers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/user/${id}`)
        .then(response => response.json())
        .then(data => setUsers(data))
    },[id])
    const navigate = useNavigate()
    const handleUpdateUser= e => {
        e.preventDefault();
        let name = e.target.name.value
        let phone = e.target.phone.value
        let email = e.target.email.value
        let address = e.target.address.value

        const userUpdate = {name, phone, email, address}

        fetch(`http://localhost:4000/user/${id}`,{
            method: 'PUT',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userUpdate),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setUsers(userUpdate)
            alert('success')
            e.target.reset()
            navigate('/')
        })
    }

    return (
        <div>
            <h2>updating user {user.name}</h2>
            <form onSubmit={handleUpdateUser} className="mt-16 text-center" >
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="name">Your Name <span className="text-red-600 font-semibold">*</span> </label>
                        <input className="border-2 rounded px-2 w-2/3 border-gray-500 mr-4 flex justify-start" type="text" name="name" placeholder={user.name} required />
                    </div>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="name">Your Phone <span className="text-red-600 font-semibold">*</span></label>
                        <input className="border-2 rounded px-2 w-2/3 border-gray-500 mr-4 flex justify-start" type="number" name="phone" placeholder={user.phone} required/>
                    </div>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="email">Email </label>
                        <input className="border-2 rounded px-2 w-2/3 border-gray-500 mr-4 flex justify-start disabled:opacity-75" type="email" name="email" value={user.email}disabled/>
                    </div>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="name">Your Address <span className="text-red-600 font-semibold">*</span></label>
                        <textarea className="border-2 rounded px-2 w-2/3 border-gray-500 mr-4 flex justify-start" type="text" name="address" placeholder={user.address} required/>
                    </div>
                    
                    
                    <input className='bg-neutral-400 p-1 w-1/4 rounded font-semibold duration-300 my-2 hover:bg-green-400 hover:text-white' type="submit" value="update user" />
            </form>
        </div>
    );
};

export default UpdateUser;