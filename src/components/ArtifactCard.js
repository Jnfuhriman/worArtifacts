import React from 'react'

export default function ArtifactCard({ name, img}) {
  return (
    <div className='card'>  
      <p className='titles'>{name}</p>
      <img className='artifactImg' src={require(`../assets/images/${img}`)} alt="" />
    </div>
  )
}