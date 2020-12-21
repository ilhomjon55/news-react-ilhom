import News from '../../Components/News/News.js';
import { useParams } from 'react-router-dom';

function Business() {
	const { newstype, pagenumber } = useParams();

	return (
		<>
			<News type={newstype} page={pagenumber} />
		</>
	);
}
export default Business;
