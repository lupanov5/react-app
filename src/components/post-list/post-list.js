import React from 'react'
import {ListGroup} from 'reactstrap';

import PostListItem from '../post-list-item'

import './post-list.css'

const PostList = ({posts, onDelete}) => {

    const elements = posts.map( (item) => {
        if ( typeof item === 'object' && isEmpty(item) ){ 
            const {id, ...itemProps} = item;
            return (
                <li key = {id} className='list-group-item'>
                    <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}/>
                </li>
            )
        }
    })

    

    function isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    return (
        <ListGroup className="app-list">
           {elements}
        </ListGroup>
    )
}

export default PostList;