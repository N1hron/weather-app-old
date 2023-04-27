import { memo, forwardRef } from 'react';

import renderForecast from '../../utils/renderForecast';

const WeekCard = forwardRef(function WeekCard({data}, ref) {
    return (
        <div ref={ref} id="week" className="weather__card">
            <h2>7 Day forecast</h2>
            <ul>
                {renderForecast(data)}
            </ul>
        </div>
    )
}, propsCompare)

function propsCompare(prev, next) {
    for (let i in prev.current) {
        if(prev.current[i] !== next.current[i]) {
            return false;
        }
    }
    return true;
}

export default memo(WeekCard, propsCompare);