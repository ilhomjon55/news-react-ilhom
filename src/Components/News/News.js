import { data } from '../../Data/data.js';

function News({ type }) {
	const filteredNews = data.filter((item) => {
		if (type) return item.type === type;
		else if (!type) return item;
	});

	return (
		<>
			<div className='container'>
				<ul className='list-unstyled w-75 mx-auto'>
					{filteredNews.map((item) => {
						return (
							<li className='py-4 border-bottom' key={item.id}>
								<h2 className='h5'>{item.title}</h2>
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
