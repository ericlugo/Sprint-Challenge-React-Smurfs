import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      id: null,
    };
  }
  componentDidMount() {
    this.setState({ smurfs: this.props.smurfs });
    if (this.props.match.params.id) this.setState({ id: this.props.match.params.id });
  }
  render() {
    if (this.state.id) {
      let smurf = this.state.smurfs[this.state.id];
      return (
        <div className='Smurfs'>
          <h1>Individual Smurf</h1>
          <Smurf name={smurf.name} id={smurf.id} age={smurf.age} height={smurf.height} key={smurf.id} />
        </div>
      );
    } else {
      return (
        <div className='Smurfs'>
          <h1>Smurf Village</h1>
          <ul>
            {this.props.smurfs.map((smurf) => {
              return (
                <Link to={`/smurf/${smurf.id}`}>
                  <Smurf name={smurf.name} id={smurf.id} age={smurf.age} height={smurf.height} key={smurf.id} />
                </Link>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
