import React from 'react'

const Demo = ({data}) => {
    return (
        <div>
            {
                data.map(x => (
                    <div key={x.id}>
                        <p>{x.title}</p>
                        </div>
                ))
            }
        </div>
    )
}

export default Demo
