import Loading from '../components/loading/Loading';
import Error from '../components/error/Error';

export default function renderData(Component, process) {
    switch(process) {
        case 'error': {
            return <Error/>;
        }
        case 'loading': {
            return  <Loading/>;
        }
        case 'success': {
            return Component
        }
    }
}