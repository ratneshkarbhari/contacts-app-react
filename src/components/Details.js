import React from 'react'

function Details() {

    console.log(this.props.match.params.id)
  return (
    <div>Details</div>
  )
}

export default Details