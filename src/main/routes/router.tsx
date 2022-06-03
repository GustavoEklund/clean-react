import { makeLogin, makeSignUp } from '@/main/factories/application/presentation/pages'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={makeLogin} />
        <Route path="/signup" exact component={makeSignUp} />
        {/* <PrivateRoute path="/" exact component={makeSurveyList} /> */}
        {/* <PrivateRoute path="/surveys/:id" component={makeSurveyResult} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Router
