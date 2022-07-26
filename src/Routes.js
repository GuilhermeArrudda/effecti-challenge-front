import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'
import Bids from './pages/bids'

export default function PagesRoutes() {
	return(
		<Router>
			<Routes>
				<Route path='/' element={<Bids/>}/>
			</Routes>
		</Router>
	)
}