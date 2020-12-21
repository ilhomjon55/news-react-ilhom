import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header.js';
import Home from './Pages/Home/Home.js';

// import Science from './Pages/Science/Science.js';
// import Business from './Pages/Business/Business.js';

function App() {
	return (
		<Fragment>
			<Header />

			<Switch>
				{/* <Route path='/' component={Home} exact /> */}
				<Route path='/:newstype?/:pagenumber?' component={Home} exact />
				{/* <Route path='/science' component={Science} exact />
				<Route path='/business' component={Business} exact /> */}
			</Switch>
		</Fragment>
	);
}

export default App;
