import {useEffect, useState} from "react";

const MaxLengthText = ({ text, maxLength }) => {
    const [truncatedText, setTruncatedText] = useState(text);

    useEffect(() => {
        if (text.length > maxLength) {
            setTruncatedText(text.slice(0, maxLength) + '...');
        } else {
            setTruncatedText(text);
        }
    }, [text, maxLength]);

    return <div>{truncatedText}</div>;
};
export default MaxLengthText;