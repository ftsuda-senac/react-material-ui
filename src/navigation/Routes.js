import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Default from 'pages/Default'
import Login from 'pages/MaterialTest/login'
import DataList from 'pages/MaterialTest/dataList'
import EnhancedTable from 'pages/MaterialTest/dataList1'
import CollapsibleTable from 'pages/MaterialTest/dataList2'
import ValidationTextFields from 'pages/MaterialTest/form'
import Dashboard from 'pages/MaterialTest/Dashboard'
import AutocompleteExample from 'pages/Autocomplete'
import Form from 'pages/Model/form'
import SecuredTest from 'pages/SecuredTest'

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/data-list" component={DataList} />
      <Route path="/data-list1" component={EnhancedTable} />
      <Route path="/data-list2" component={CollapsibleTable} />
      <Route path="/form" component={ValidationTextFields} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/autocomplete" component={AutocompleteExample} />
      <Route path="/form2" component={Form} />
      <Route path="/secured-test" component={SecuredTest} />
      <Route path="*" component={Default} />
    </Switch>
  )
}

export default Routes
