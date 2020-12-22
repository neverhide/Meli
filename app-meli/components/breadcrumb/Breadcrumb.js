import React from 'react';

export default function Breadcrumb({breadcrumb}){
    let path;
    if(breadcrumb.query){
        return path = <span className="path" >{breadcrumb?.query}</span>
    }else if(breadcrumb.path_from_root && breadcrumb.path_from_root.length > 0){
        return path = <ul className="list-path" >{breadcrumb?.path_from_root.map((path) => ( <li className="list-item-path" key={path.name}>{path.name}</li>))}</ul>
    }

    return(
        <nav className="breadcrumb">
            { path }
        </nav>
    )
}