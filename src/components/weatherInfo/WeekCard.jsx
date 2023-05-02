import { memo, forwardRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import Error from '../error/Error';

import renderForecast from '../../utils/renderForecast';

const WeekCard = forwardRef(function WeekCard({data}, ref) {
    const isSmallScreen = useMediaQuery({
        query: '(max-width: 888px)'
    })

    return (
        <div ref={ref} id="week" className="weather__card">
            {!data || !Object.keys(data).length ? <Error/> :
            <>
                <h2>7 Day forecast</h2>
                <ul>
                    {renderForecast(data, isSmallScreen)}
                </ul>
            </>}
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