import { useState } from "react";

const defaultOptions = {
    method: 'GET',
    body: null
}

export default function useHttp() {
    const [process, setProcess] = useState('idle');

    const request = async function(url, options = defaultOptions) {
        try {
            setProcess('loading');
            const response = await fetch(url, {...options});
            if(!response.ok) {
                throw new Error(`Couldn't fetch from ${url}!`)
            }   
            return await response.json();
        } catch(error) {
            setProcess('error');
            return error;
        }
    }

    return {process, setProcess, request};
}