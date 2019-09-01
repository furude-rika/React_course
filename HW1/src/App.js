import React from 'react';
import './App.css'
import ListItem from './components/ListItem.js'
import ListItemsData from './componentsData/ListItemsData.js'
import SubImageContent from './components/SubImageContent.js'
import SubImageContentData from './componentsData/SubImageContentData.js'
import MainContent from './components/MainContent.js'
import MainContentData from './componentsData/MainContentData.js'

function App() {
	const ListItems = ListItemsData.map(item => <ListItem key={item.id} item={item} />)
	const SumImageContentItems = SubImageContentData.map(item => <SubImageContent key={item.id} item={item} />)
	const MainContentItems = MainContentData.map(item => <MainContent key={item.id} item={item}/>)
	return (
		<div>
			<header className="main-header">
				<div className="header-container">
					<div className="img-holder">
						<img src={"images/logo.png"} alt="logo" />
					</div>				
					<nav className="nav-list">
						{ListItems}
					</nav>
				</div>
			</header>
			<main>
				<div className="banner">
					<img src={"images/banner-image-1.jpg"} alt="banner" />
					<div className="text-container">
						<a href="">Services to<br />Shipping since {'1797'}</a> 
					</div>
				</div>
				<div className="text-content">
					<div className="left-block">
						{MainContentItems}
						<p>
							Welcome aboard Hecksher – Services to shipping since {'1797'}!
						</p>
					</div>
					<div className="right-block">
						<div className="content">
							{MainContentItems}
						</div>						
						<div className="button">
							<a href="">READ MORE</a>
						</div>
					</div>
				</div>
				<div className="sub-content">
					{SumImageContentItems}
				</div>
			</main>
		</div>
	)
}

export default App