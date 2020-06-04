import React from 'react';
import ReactDOM from 'react-dom';

import UpNext from './components/consuo-react-up-next';

import "./index.scss";

const API_URL = process.env.API_URL || "http://localhost:8001";

class Index extends React.Component {

  render() {
    let { channelId } = this.props;
    return (
      <div>
        <UpNext apiUrl={API_URL} channelId={channelId} updateInterval={5}/>
      </div>
    );
  }
};

ReactDOM.render(<Index />, document.getElementById('container'));