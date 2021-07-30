import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Layout from '../components/Layout'
import Notes from '../pages/Notes'
import AddNote from '../pages/AddNote'
import Options from '../pages/Options'
import Note from '../pages/Note'
import AppNavigation from '../navigation/AppNavigation'


const Router = () => (
    <RecoilRoot>
        <Layout>
            <BrowserRouter  >
                <div>
                    <AppNavigation />
                    <Switch>
                        <Route path='/' component={Notes} exact={true} />
                        <Route path='/add-note' component={AddNote} />
                        <Route path='/note/:noteId' component={Note} />
                        <Route path='/options' component={Options} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Layout>
    </RecoilRoot>

)


export default Router