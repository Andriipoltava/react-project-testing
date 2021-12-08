import React from 'react';
import {MySelect} from "./UI/select/MySelect";
import {MyInput} from "./UI/input/MyInput";

function PostFilter({filter, setFilter}) {

    return (
        <div>
            <MyInput plasholder='dasd' value={filter.query}
                     onChange={e => setFilter({...filter, query: e.target.value})}/>
            <MySelect value={filter.sort} defaultValue='Sort Default'
                      options={[{value: 'title', name: 'ASC'}, {value: 'body', name: 'DESK'}]}
                      sortPost={selected=>setFilter({...filter,sort:selected})}/>
        </div>
    );
}

export default PostFilter;
