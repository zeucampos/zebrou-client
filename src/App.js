import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/home/HomeView';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={HomePage} />
			</Switch>
		</Router>
	);
}

export default App;
