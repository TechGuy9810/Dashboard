import * as React from 'react';
import Sidebar from '../sidebar';
import './sales.scss';
import List from './table.jsx';

export default function Sales()
{
    return(
<div className="MainSalesContainer">
    <Sidebar/>
    <div className="SalesContainer">
        <div className="SalesContainerdiv">
            <List/>
            <List/>
        </div>
    </div>
</div>
    );
}