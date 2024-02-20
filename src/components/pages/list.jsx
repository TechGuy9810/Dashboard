import React from 'react'
import './list.scss';
import Sidebar from '../sidebar.jsx';
import Datatable from './datatable'
export default function List(){
    
    return(
        <div className='list'>
            <Sidebar/>
            <div className='listContainer'>
                <Datatable/>
            </div>
        </div>
    );
}