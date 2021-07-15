import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import AddNote from '../pages/AddNote'
import Note from '../pages/Note'
import AppNavigation from '../navigation/AppNavigation'


const Router = () => (
    <RecoilRoot>
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
    </RecoilRoot>

)


export default Router