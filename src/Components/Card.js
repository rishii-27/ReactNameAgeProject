import React from 'react'

const Card = props => {
    return (
        <div class="h-100 d-flex align-items-center justify-content-center">

            <div className="card col-sm-11">
                <div className="card card-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Card;