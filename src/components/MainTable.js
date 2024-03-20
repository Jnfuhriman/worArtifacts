import { useEffect, useState } from 'react';
import ArtifactCard from './ArtifactCard.js';

//data
import { data } from '../assets/artifacts/data.js';

export default function MainTable() {
  const [ss, setSs] = useState([]);
  const [s, setS] = useState([]);
  const [a, setA] = useState([]);
  const [b, setB] = useState([]);
  const [c, setC] = useState([]);
  const [d, setD] = useState([]);
  const [f, setF] = useState([]);
  
  useEffect(() => {
    //setRanks();
    setSs(data.filter(artifact => artifact.rank === 'SS'));
    setS(data.filter(artifact => artifact.rank === 'S'));
    setA(data.filter(artifact => artifact.rank === 'A'));
    setB(data.filter(artifact => artifact.rank === 'B'));
    setC(data.filter(artifact => artifact.rank === 'C'));
    setD(data.filter(artifact => artifact.rank === 'D'));
    setF(data.filter(artifact => artifact.rank === 'F'));


  }, []);

  function loadSS() {
    return ss.map(a => {
      return <ArtifactCard 
      key={a.rankSort}
      name={a.name}
      img={a.img}
      />
    })
  }

  function loadS() {
    return s.map(a => {
      return <ArtifactCard 
      key={a.rankSort}
      name={a.name}
      img={a.img}
      />
    })
  }
  function loadA() {
    return a.map(a => {
      return <ArtifactCard 
      key={a.rankSort}
      name={a.name}
      img={a.img}
      />
    })
  }
  function loadB() {
    return b.map(a => {
      return <ArtifactCard 
      key={a.rankSort}
      name={a.name}
      img={a.img}
      />
    })
  }
  function loadC() {
    return c.map(a => {
      return <ArtifactCard 
      key={a.rankSort}
      name={a.name}
      img={a.img}
      />
    })
  }
  function loadD() {
    return d.map(a => {
      return <ArtifactCard 
      key={a.rankSort}
      name={a.name}
      img={a.img}
      />
    })
  }
  function loadF() {
    return f.map(a => {
      return <ArtifactCard 
      key={a.rankSort}
      name={a.name}
      img={a.img}
      />
    })
  }

  return (
    <div className='content'>
  <table className="table">
    <thead>
    </thead>
    <tbody>
      <tr>
        <td>SS</td>
        <td className='tier'>
          {loadSS()}
        </td>
      </tr>
      <tr>
        <td>S</td>
        <td className='tier'>
          {loadS()}
        </td>
      </tr>
      <tr>
        <td>A</td>
        <td className='tier'>
          {loadA()}
        </td>
      </tr>
      <tr>
        <td>B</td>
        <td className='tier'>
          {loadB()}
        </td>
      </tr>
      <tr>
        <td>C</td>
        <td className='tier'>
          {loadC()}
        </td>
      </tr>
      <tr>
        <td>D</td>
        <td className='tier'>
          {loadD()}
        </td>
      </tr>
      <tr>
        <td>F</td>
        <td className='tier'>
          {loadF()}
        </td>
      </tr>
    </tbody>
        </table>
    </div>
  )
}
