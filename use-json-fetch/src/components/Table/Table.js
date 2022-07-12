import React, { useEffect, useState } from 'react'
import useJsonFetch from '../../hooks/useJsonFetch';
import listModel from '../../models/listModel';
import List from '../List/List';


function Table() {
    const [list, setList] = useState([
        new listModel('data', process.env.REACT_APP_DATA),
        new listModel('error', process.env.REACT_APP_ERROR),
        new listModel('loading', process.env.REACT_APP_LOADING)
    ]);

    const [actualUrl, setUrl] = useState(null);
    const [data, loading, error] = useJsonFetch(actualUrl);

    const onSelect = (url) => {
        setUrl(url)
    }

    console.log(`data: ${data.status}, loading: ${loading}, error: ${error}`);
    // нажимая на разные кнопки показывается результат в консоли. 
    return (
        <div className="table">
            <List list={list} onSelect={onSelect} />
        </div>
    )
}

export default Table