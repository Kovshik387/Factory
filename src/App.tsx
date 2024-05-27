import React from 'react'
import Header from './components/Header'
import './App.css'
import Catalog from './pages/Catalog';

function App(): React.JSX.Element {
	return (
	<div className={'main-site-content'}>
		<Header/>
		<div style={{flexGrow: 1, margin: '82px 0px'}}>
			<Catalog />
		</div>
	</div>
	)
}
export default App;
