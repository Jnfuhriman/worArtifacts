import React from 'react'

export default function ArtifactCard({ name, img}) {
  return (
    <div className='card'>  
      <p>{name}</p>
      <img className='artifactImg' loading='lazy' src={require(`../assets/images/${img}`)} alt="" />
    </div>
  )
}
