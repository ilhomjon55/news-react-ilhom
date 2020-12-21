import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header.js';

import Science from './Pages/Science/Science.js';
import Business from './Pages/Business/Business.js';

function App() {
	return (
		<Fragment>
			<Header />

			<Switch>
				<Route path='/:newstype?/:pagenumber?' component={Science} exact />
				<Route path='/:newstype?/:pagenumber?' component={Business} exact />
			</Switch>
		</Fragment>
	);
}

export default App;
