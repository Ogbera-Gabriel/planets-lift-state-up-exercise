import React from 'react'

const Summary = (props) => {
    const { planetDeleted } = props
  return (
    <div>
        <h3><strong>Planets Deleted: </strong>{planetDeleted}</h3>
      
    </div>
  )
}

export default Summary