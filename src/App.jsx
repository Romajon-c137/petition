import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import YourComponent from './components/Test'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/test' element={<YourComponent />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
