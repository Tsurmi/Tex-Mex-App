import React from "react";
import DATA from './DATA';

const TexInfo = (props) => {
  return (
    <div>
      <h1> { props.street}</h1>
      <p> { props.suite }</p>
      <h3> { props.city }</h3>
      <p> { props.state }</p>
      <h5> { props.zip } </h5>
    </div>
  )
}

const Contacts = (props) => {

  return (
    <div>
      <div>
        <TexInfo street={DATA.address.street} suite={DATA.address.suite}
        city={DATA.address.city} state={DATA.address.state} zip={DATA.address.zip}
        />
      </div>
    </div>
  )
}


export default Contacts;
