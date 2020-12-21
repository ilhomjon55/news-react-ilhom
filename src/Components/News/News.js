import { Redirect, useLocation } from 'react-router-dom';
import { data } from '../../Data/data.js';

function News({ type, page }) {
	const location = useLocation();

	if (location.pathname === '/') {
		return <Redirect to='/science' />;
	}

	const pageNum = Number(page);

	const NEWS_PER_PAGE = 2;
	const staringNews = pageNum * NEWS_PER_PAGE - NEWS_PER_PAGE;
	const endingNews = pageNum * NEWS_PER_PAGE;

	const filteredNews = data.filter((item) => {
		return item.type === type;
	});

	let slicedNews = [];

	if (pageNum > 0) {
		slicedNews = filteredNews.slice(staringNews, endingNews);
	} else {
		slicedNews = filteredNews;
	}

	return (
		<>
			<div className='container'>
				<ul className='list-unstyled w-75 mx-auto'>
					{slicedNews.map((item) => {
						return (
							<li className='py-4 border-bottom' key={item.id}>
								<h2 className='h5'>
									{item.id}) {item.title}
								</h2>
								<p className=''>{item.content}</p>
								<span className='badge bg-primary text-white p-2'>
									{item.type}
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
export default News;
