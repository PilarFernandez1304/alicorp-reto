import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import firebase from '../../controller/firebase'
import Login from '../Login'
import Register from '../Register'
import Home from '../Home';
import Catalogue from '../Catalogue'
import Aceites from '../Catalogue/Aceites'
import Pastas from '../Catalogue/Pastas'
import Conservas from '../Catalogue/Conservas'
import Jabones from '../Catalogue/Jabones'
import Detergentes from '../Catalogue/Detergentes'
import PurchaseHistory from '../PurchaseHistory';
import SellingHistory from '../SellingHistory';
import ProtectedRoute from '../Routes/PrivateRoute'
import Profile from '../Profile'


const App = () => {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })

  return firebaseInitialized !== false ? (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <ProtectedRoute exact path="/home" component={Home} />
      <ProtectedRoute exact path="/catalogue" component={Catalogue} />
      <ProtectedRoute exact path="/aceites" component={Aceites} />
      <ProtectedRoute exact path="/detergentes" component={Detergentes} />
      <ProtectedRoute exact path="/conservas" component={Conservas} />
      <ProtectedRoute exact path="/pastas" component={Pastas} />
      <ProtectedRoute exact path="/jabones" component={Jabones} />
      <ProtectedRoute exact path="/purchase" component={PurchaseHistory} />
      <ProtectedRoute exact path="/selling" component={SellingHistory} />
      <ProtectedRoute exact path="/profile" component={Profile} />
    </Switch>

  ) : <div id="loader">Loading</div>
}

export default App;