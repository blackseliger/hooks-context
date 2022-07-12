import React from 'react'
import PropTypes from 'prop-types'

function Details({ ...user }) {
    const { name, avatar, details } = user;

    return (
        <div className="table__info">
            <div className="avatar">
                <img src={avatar} alt="user" className="avatar__image" />
            </div>
            <div className="table__info-text">
                <span>{name}</span>
                <span>{details.city}</span>
                <span>{details.company}</span>
                <span>{details.position}</span>
            </div>
        </div>
    )
}

Details.propTypes = {}

export default Details
