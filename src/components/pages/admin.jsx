import React, { useState } from 'react'
import './admin.scss';
import Sidebar from '../sidebar.jsx';
import img from '../image/admin1.png';
export default function Admin(){
    const[display,setDisplay] = useState("none");
    const[hide,setHide] = useState("flex");
    const[email,setEmail] = useState('');
    const[age,setAge] = useState();
    const[phone,setPhone] = useState('');
    const[name,setName] = useState('');
    const[update,setUpdate] = useState('Update');
    const[image,setImage] = useState(img);
    function handleClick()
    {
        if(display=="flex")
        {
            setDisplay("none");
            setHide("flex");
            setUpdate("Update");
        }
        else{
            setDisplay("flex");
            setHide("none");
            setUpdate("Cancel");
        }

    }
    function handleSubmit()
    {

    }
    return(
        <div className='admin'>
            <Sidebar/>
            <div className='adminContainer'>
             <div className="adminInfoContainer">
                    <div className="item">
                        <div className="img" style={{display:hide}}>
                        <img src={image} className='itemImg'/>
                        </div>
                        <div className="updateImg" style={{display:display}}>
                        <label htmlFor='file' className='updateItemImg'>
                        <img src={image} className='itemImg'/>
                        </label>
                        <input  id='file' type='file'onChange={(e)=>setImage(e.target.files[0])} style={{display:"none"}} />
                        </div>
                        <div className="name" style={{display:hide}}>
                        <p>Abhishek Singh</p>
                        </div>
                        <div className="updateName" style={{display:display}}>
                        <input type='text' value={name} placeholder='Abhishek Singh' onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="updateBtn">
                            <button className='edit' onClick={handleClick}>{update}</button>
                        </div>
                        <div className="updateBtn">
                        <button className='edit' onClick={handleSubmit} style={{display:display}}>Submit</button>
                        </div>
                    </div>
                <div className="details">
                    <div className="detailsContainer">
                        <div className="left">
                               <span className="itemKey">Email:</span>
                               <span className="itemKey">Age:</span>
                               <span className="itemKey">Phone:</span>
                        </div>
                        <div className="right">
                            <span className="itemValue" style={{display:hide}}>abhishek981037@gmail.com</span>
                            <input type='email' style={{display:display}} value={email} placeholder='abc@gmail.com' onChange={(e)=>setEmail(e.target.value)}></input>
                            <span className="itemValue" style={{display:hide}}>21</span>
                            <input type='number' style={{display:display}} value={age} placeholder='22' onChange={(e)=>setAge(e.target.value)}></input>
                            <span className="itemValue" style={{display:hide}}>7303471202</span>
                            <input type='tel' style={{display:display}} value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='9810xxxx1'></input>
                        </div> 
                    </div>
                    </div>
                </div>
             </div>
            </div>
    );
}