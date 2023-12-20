import { useEffect, useState } from 'react';

const MaxLengthText = ({ text, maxLengthBreakpoints }) => {
    const [truncatedText, setTruncatedText] = useState(text);

    useEffect(() => {
        const getWindowWidth = () => window.innerWidth;

        const getMaxLength = () => {
            const windowWidth = getWindowWidth();

            const sortedBreakpoints = Object.entries(maxLengthBreakpoints)
                .sort(([a], [b]) => parseInt(b, 10) - parseInt(a, 10));

            const matchingBreakpoint = sortedBreakpoints.find(
                ([breakpoint]) => windowWidth >= parseInt(breakpoint, 10)
            );

            return matchingBreakpoint ? parseInt(matchingBreakpoint[1], 10) : text.length;
        };

        const maxLength = getMaxLength();

        if (text.length > maxLength) {
            setTruncatedText(text.slice(0, maxLength) + '...');
        } else {
            setTruncatedText(text);
        }
    }, [text, maxLengthBreakpoints]);

    return <div>{truncatedText}</div>;
};

export default MaxLengthText;
