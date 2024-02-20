import React from 'react'
import './productlist.scss';
import Sidebar from '../sidebar.jsx';
import ProductDatatable from './ProductDatatable'
export default function Productlist(){
    
    return(
        <div className='list'>
            <Sidebar/>
            <div className='listContainer'>
                <ProductDatatable/>
            </div>
        </div>
    );
}