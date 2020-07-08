import React, {Component} from 'react'
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

//import utility function
import sortContracts from './utility/sortContracts'

//combine data to pass to children components
const data = {...data1, ...data2}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        allContracts: Object.values(data),
        showCompleted: false,
        sort: 'dateDesc'
    }
    this.toggleCompleted = this.toggleCompleted.bind(this)
    this.changeSort = this.changeSort.bind(this)
  }

  toggleCompleted() {
      this.setState((state, props) => ({showCompleted: !state.showCompleted}))
  }

  changeSort(newSort, e) {
      if(this.state.sort === newSort) {
          return
      }
      this.setState({sort: newSort})
  }

  render(){
    let sortedContracts = this.state.allContracts
    
    //filter out completed
    if (!this.state.showCompleted) {
        sortedContracts = sortedContracts.filter((contract) => contract.status !== 2)
    }
    // function to sort array based on state
    sortedContracts = sortContracts(this.state.sort, sortedContracts)

    //calculate # of completed contracts to pass to list
    let numberCompleted = 0
    this.state.allContracts.forEach((contract) => {
      if(contract.status === 2){
        numberCompleted++
      }
    })

    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/contracts/:contractId">
              <Details contracts={data}/>
            </Route>
            <Route path="/contracts">
              <ContractList
                sortedContracts={sortedContracts}
                changeSort={this.changeSort}
                toggleCompleted={this.toggleCompleted}
                sort={this.state.sort}
                showCompleted={this.state.showCompleted}
                numberCompleted={numberCompleted}
              />
            </Route>
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App;
