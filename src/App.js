import React from 'react'
import './styles/global.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

//import fake data
import data from './data/data.js'

//import layout
import Layout from './layout/Layout.component'

//import sections
import ContractList from './sections/ContractList/ContractList.component'
import Details from './sections/Details/Details.component'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/contracts/:contractId">
            <Details contracts={data}/>
          </Route>
          <Route path="/contracts">
            <ContractList contracts={data}/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
