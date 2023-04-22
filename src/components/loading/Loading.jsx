import ReactLoading from 'react-loading';
import './loading.scss'

export default function Loading() {
    return (
        <ReactLoading className="loading" type="spin" color="#fff" style={{maxWidth: '150px', fill: 'var(--btn-color)'}}/>
    )
}