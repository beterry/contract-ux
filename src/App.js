import React from 'react'
import './styles/global.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

//import fake data from 2 different stores
import data1 from './data/store120.js'
import data2 from './data/store121.js'

//import layout
import Layout from './layout/Layout.component'

//import sections
import ContractList from './sections/ContractList/ContractList.component'
import Details from './sections/Details/Details.component'

//combine data to pass to children components
const data = {...data1, ...data2}

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
