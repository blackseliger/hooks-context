import React, { useEffect, useState } from 'react'
import Details from '../Details/Details';
import List from '../List/List';
import Loading from '../Loading/Loading';

function Table() {
    const [list, setList] = useState([]);
    const [user, setUser] = useState(null);
    const [userId, setId] = useState();
    const [loading, setLoading] = useState(null);

    const loadList = async () => {
        const response = await fetch(process.env.REACT_APP_USERS_LIST_URL);
        const result = await response.json();
        setList(result);
    }

    const loadUser = async (id) => {
        const response = await fetch(`${process.env.REACT_APP_USER_ULR}${id}.json`)
        const result = await response.json();
        setUser(result)
    }

    useEffect(() => {
        loadList()
    }, [])

    const onSelect = (id) => {
        if (id !== userId) {
            setLoading(true);
            setId(id)
        }
    }

    useEffect(() => {
        loadUser(userId)
        setLoading(false);
    }, [userId])

    return (
        <div className="table">
            {list.length ? <List list={list} onSelect={onSelect} /> : <Loading />}
            {user && userId && !loading?
                <Details key={user.id} {...user} />
                :  loading ? <div className="table__info"> <Loading /></div> : null}
        </div>
    )
}

export default Table