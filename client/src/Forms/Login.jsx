import React, { useState } from 'react';
import '../App.css'
import {userApi} from '../api/userSlice/userApi'

const Regis = () => {

    const [loginFunc, {error, isLoading, isSuccess}] = userApi.useLoginMutation()

    function LoginFunc(emile, password){
        loginFunc({emile, password})
    }

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')

    let base

    if(isLoading){
        base = <>
            <h3>Loading!</h3> 
        </>
    }
    if(error){
        base = <>
            {error && <h3>{error.data.message}</h3>}
        </>
    }
    if(isSuccess){
        base = <>
            <h3>Successfuly Registered!</h3>
        </>
    }
    return (
        <div className='cover-1'>
            <div className='cover-2'>
                <h2 className='title'>Login</h2>
                <div className='tools'>
                    <input type="text" value={input1} placeholder="Emile" onChange={ev => setInput1(ev.target.value)}/>
                    <input type="password" value={input2} placeholder="Password" onChange={ev => setInput2(ev.target.value)}/>
                    <button onClick={() => LoginFunc(input1, input2)}>Apply</button>
                </div>
            </div>
            <div className="result">
                {base}
            </div>
        </div>
    );
}

export default Regis;
