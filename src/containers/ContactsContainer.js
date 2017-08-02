import React from 'react';


class ContactInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      street: undefined,
      suite: undefined,
      city: undefined,
      state: undefined,
      zip: undefined
  }
}

  componentDidMount() {
    this.setState({})
  }

  fetchAddressFromServer() {
    const address = [
      { street: undefined, id: 1, }
    ]

    this.setState({ address: address})
  }

  render() {
    return (
      <div className="address">
        <p> street: {this.state.street} </p>
        <p> suite: {this.state.suite}</p>
        <p> city: {this.state.city}</p>
        <p> state: {this.state.state}</p>
        <p> zip: {this.state.zip}</p>
      </div>
    )
  }
}

export default ContactInfo;
