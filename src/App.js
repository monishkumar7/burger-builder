import React, { Component } from 'react';

import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <h1>Burger Builder</h1>
          <p>This is the burger builder</p>
        </Layout>
      </div>
    );
  }
}

export default App;
