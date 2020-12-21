import News from '../../Components/News/News.js';
import { useParams } from 'react-router-dom';

function Science() {
	const { newstype, pagenumber } = useParams();

	return (
		<>
			<News type={newstype} page={pagenumber} />
		</>
	);
}
export default Science;
