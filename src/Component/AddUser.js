import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate = useNavigate()
    const handleSubmitUser= e => {
        e.preventDefault();
        let phoneNo;
        if(e.target.phone.value < 12){ phoneNo= '+88' + e.target.phone.value}
        let name = e.target.name.value
        let phone = phoneNo || e.target.phone.value
        let email = e.target.email.value
        let address = e.target.address.value

        const user = {name, phone, email, address}

        fetch('http://localhost:4000/user',{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            alert('success')
            e.target.reset()
            navigate('/')
        })
    }

    return (
        <div>
            <h2>Please add a username</h2>
            <form onSubmit={handleSubmitUser} className="mt-16 text-center" >
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="name">Your Name <span className="text-red-600 font-semibold">*</span></label>
                        <input className="border-2 rounded px-2 w-2/3 border-gray-500 mr-4 flex justify-start" type="text" name="name" placeholder="Your Name" required/>
                    </div>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="name">Your Phone <span className="text-red-600 font-semibold">*</span></label>
                        <input className="border-2 rounded px-2 w-2/3 border-gray-500 mr-4 flex justify-start" type="text" name="phone" placeholder="+880 **** ******" required/>
                    </div>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="email">Email<span className="text-red-600 font-semibold">*</span></label>
                        <input className="border-2 rounded px-2 w-2/3 border-gray-500 mr-4 flex justify-start" type="email" name="email" placeholder="example@example.com" required />
                    </div>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="name">Your Address <span className="text-red-600 font-semibold">*</span></label>
                        <textarea className="border-2 rounded px-2 w-2/3 border-gray-500 mr-4 flex justify-start" type="text" name="address" placeholder="Your Address" required/>
                    </div>
                    
                    <input className='bg-neutral-400 p-1 w-1/4 rounded font-semibold duration-300 my-2 hover:bg-green-400 hover:text-white' type="submit" value="Add user" />
            </form>
        </div>
    );
};

export default AddUser;