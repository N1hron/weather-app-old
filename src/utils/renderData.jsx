import Loading from '../components/loading/Loading';
import Error from '../components/error/Error';
import Skeleton from '../components/skeleton/Skeleton';

export default function renderData(Component, process, initial) {
    switch(process) {
        case 'idle': {
            return <Skeleton/>
        }
        case 'error': {
            return <Error/>;
        }
        case 'loading': {
            return  initial ? <Loading/> : Component;
        }
        case 'success': {
            return Component
        }
    }
}