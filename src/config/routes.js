import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
//Pages
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import AccountInfo from '../pages/AccountInfo'
import AllPets from '../pages/AllPets'
import AddPet from '../pages/AddPet'
import EditPet from '../pages/EditPet'
import AllPhotos from '../pages/AllPhotos'
import UploadPhotos from '../pages/UploadPhotos'
import AddComment from '../pages/AddComment'
import EditComment from '../pages/EditComment'
import CreatePost from '../pages/CreatePost'
import EditPost from '../pages/EditPost'
import ShowPost from '../pages/ShowPost'
//exporting routes

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = localStorage.getItem('id')
  return  <Route { ...rest } render={ props => {
            return currentUser ? <Component { ...rest } { ...props } /> : <Redirect to="/login" />
          }} 
  />
}

export default (props) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/register' component={Register} />
    <PrivateRoute path='/profile' component={ Profile } currentUser={ props.currentUser } />
    <Route path='/accountinfo' component={AccountInfo} />
    <Route path='/allpets' component={AllPets} />
    <Route path='/addpet' component={AddPet} />
    <Route path='/editpet' component={EditPet} />
    <Route path='/allphotos' component={AllPhotos} />
    <Route path='/uploadphotos' component={UploadPhotos} />
    <Route path='/addcomment' component={AddComment} />
    <Route path='/editcomment' component={EditComment} />
    <Route path='/createpost' component={CreatePost} />
    <Route path='/editpost' component={EditPost} />
    <Route path='/showpost' component={ShowPost} />
    <Route path='/login' render={(routeComponentProps) => {
      return <Login
        {...routeComponentProps}
        //more props to come here
        currentUser={props.currentUser}
        storeUser={props.storeUser}
      />
    }} />
  </Switch>
)