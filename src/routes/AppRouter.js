import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from '../store/store'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import AddNote from '../pages/AddNote'
import Note from '../pages/Note'
import AppNavigation from '../navigation/AppNavigation'


const Router = () => (
    <Provider store={store}>
        <Layout>
            <BrowserRouter  >
                <div>
                    <AppNavigation />
                    <Switch>
                        <Route path='/' component={Home} exact={true} />
                        <Route path='/add-note' component={AddNote} />
                        <Route path='/note/:noteId' component={Note}/>
                    </Switch>
                </div>

            </BrowserRouter>
        </Layout>
    </Provider>

)


export default Router