import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState()

    const handleMakeAdmin = () => {
        const adminData = {email: adminEmail}

        const url = "http://localhost:3600/users/admin"
        fetch(url, {
            method: 'put',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(adminData)
        })
            .then(res => res.json())
            .then(data => {
                
                if(data.modifiedCount){
                    Swal.fire(
                        '!Successfull',
                        'Now Your Are Admin',
                        'success'
                    )
                }else{
                    Swal.fire(
                        '!Failed',
                        'This Email Are Not Registered',
                        'Failed'
                    )
                }
            })
    }
    
    return (
        <div>
            <div className='py-5 px-5 bg-pink-500 border-0 rounded-md'>
                <input className='p-2 border-0 rounded-md' type='email' placeholder='abc@gmail.com' onBlur={(e) => setAdminEmail(e.target.value)}/>
                <div className='bg-pink-200 text-white px-3 py-2 text-center mt-4 border-0 rounded-full'>
                    <button onClick={() => handleMakeAdmin()}>Make Admin</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;