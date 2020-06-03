import React from 'react';
import './global.scss';

//import fake data
import data from './data/data.js'

//import layout
import Layout from './layout/Layout.component'

//import sections
import ContractList from './sections/ContractList/ContractList.component'

function App() {
  return (
    <Layout>
      <ContractList contracts={data}/>
    </Layout>
  );
}

export default App;
