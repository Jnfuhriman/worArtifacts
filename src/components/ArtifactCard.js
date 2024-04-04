import React from 'react'

export default function ArtifactCard({ name, img, tags }) {
  return (
    <div className='elementCard'>  
      <p className='titles'>{name}</p>
      <img title={`${tags[0]}, ${tags[1]}`} className='artifactImg' src={require(`../assets/images/${img}`)} alt="" />
    </div>
  )
}
