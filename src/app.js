import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
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

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go home</Link>
    </div>
)

const Header = () =>(
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active"> Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage}/>
            </Switch> 
        </div>
    </BrowserRouter>
    
);

ReactDOM.render(routes, document.getElementById('app'));

//client side rendering linking between pages  
