import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

const withAnimatedCard = (Component) => (props) => {
    const nodeRef = useRef(null);

    return (
        <CSSTransition nodeRef={nodeRef} classNames="card-animation" timeout={300} appear={true} in={true}>
            <Component ref={nodeRef} {...props}/>
        </CSSTransition>
    )
}

export default withAnimatedCard;