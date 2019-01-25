import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDashboardPage = () => (
    <div>
    THIS IS FROM MY DASHBOARD!
    </div>
);

const AddExpensePage = () => (
    <div>
    THIS IS FROM MY add expense page!
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from EditExpensePage
    </div>
);

const HelpPage = () => (
    <div>
        this is from HelpPage
    </div>
)

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>    
    </BrowserRouter>
    
);

ReactDOM.render(routes, document.getElementById('app'));
