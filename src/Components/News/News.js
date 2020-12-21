import { data } from '../../Data/data.js';

function News({ type, page }) {
	const pageNum = Number(page);
	const staringNews = pageNum * 2 - 2;
	const endingNews = pageNum * 2;

	const filteredNews = data.filter((item) => {
		if (type) return item.type === type;
		else if (!type) return item;
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
