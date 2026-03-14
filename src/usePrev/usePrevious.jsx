import { useRef, useEffect } from 'react';

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    
    // eslint-disable-next-line
    return ref.current;
}
export default usePrevious