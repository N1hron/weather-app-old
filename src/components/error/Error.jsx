import error from '../../assets/error-light.svg';
import './error.scss';

export default function Error() {
    return(
        <img className="error" src={error} alt="error" draggable={false}/>
    )
}