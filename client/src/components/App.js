import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = (actions) => {
    React.useEffect(()=>{
        actions.fetchUser();
    },[])
    return (
        <div className='container'>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path='/surveys/new' component={SurveyNew}/>
                    <Route exact path='/surveys' component={Dashboard}/>
                    <Route exact path='/' component={Landing} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default connect(null,actions)(App);