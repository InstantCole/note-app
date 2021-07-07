import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import configureStore from '../store/configureStore'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import AddNote from '../pages/AddNote'
import AppNavigation from '../navigation/AppNavigation'


const Router = () => (
    <Provider store={configureStore()}>
        <Layout>
            <BrowserRouter  >
                <div>
                    <AppNavigation />
                    <Switch>
                        <Route path='/' component={Home} exact={true} />
                        <Route path='/add-note' component={AddNote} />
                        <Route component={Home}/>
                    </Switch>
                </div>

            </BrowserRouter>
        </Layout>
    </Provider>

)


export default Router