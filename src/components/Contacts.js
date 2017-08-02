import React from "react";
import DATA from './DATA';

const TexInfo = (props) => {
  return (
    <div className="contacts">
      <p  className="contactInfo">  street: { props.street}</p>
      <p  className="contactInfo"> suite: { props.suite }</p>
      <p  className="contactInfo"> city: { props.city }</p>
      <p  className="contactInfo"> state: { props.state }</p>
      <p  className="contactInfo"> zip: { props.zip } </p>
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
