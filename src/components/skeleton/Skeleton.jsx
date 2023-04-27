import './skeleton.scss';

export default function Skeleton() {
    return (
        <div className="skeleton">
            <div className="skeleton__item">
                <div className="skeleton__header"></div>
                <div className="skeleton__info"></div>
                <div className="skeleton__img"></div>
                <div className="skeleton__footer"></div>
            </div>
            <div className="skeleton__item skeleton__item_wide">
                <div className="skeleton__header"></div>
                <div className="skeleton__info"></div>
                <div className="skeleton__info"></div>
                <div className="skeleton__footer"></div>
            </div>
            <div className="skeleton__item skeleton__item_wider">
                <div className="row">
                    <div className="skeleton__header"></div>
                    <div className="skeleton__header"></div>
                </div>
                <div className="skeleton__info"></div>
                <div className="skeleton__info"></div>
                <div className="skeleton__footer"></div>
            </div>
        </div>
    )
}