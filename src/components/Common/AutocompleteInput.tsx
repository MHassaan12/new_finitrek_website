import React, { useState, useEffect } from 'react';

import styles from '../../Assets/css/Common.module.css';
import { post } from '../../utils/api';

interface Suggestion {
    address?: string;
    addressType: string;
}

interface Props { style: string, address: string, setAddress: any }

const addresses = [{ "address": "London Heathrow terminal 5 TW6 2GA", "addressType": "Airport" }, { "address": "London Heathrow terminal 4 TW6 3XA", "addressType": "Airport" }, { "address": "London Heathrow terminal 3 TW6 1QG", "addressType": "Airport" }, { "address": "London Heathrow terminal 2 TW6 1EW", "addressType": "Airport" }, { "address": "London Stansted Airport CM24 1RW", "addressType": "Airport" }, { "address": "London Gatwick Airport (South Terminal) RH6 0NP", "addressType": "Airport" }, { "address": "London Gatwick Airport (North Terminal) RH6 0NP", "addressType": "Airport" }, { "address": "London Luton Airport LU2 9QT", "addressType": "Airport" }, { "address": "London Southend Airport SS2 6YF", "addressType": "Airport" }, { "address": "London City Airport E16 2PX", "addressType": "Airport" }, { "address": "Manchester Airport Manchester M90 1QX", "addressType": "Airport" }, { "address": "Birmingham Airport Birmingham B26 3QJ", "addressType": "Airport" }];
const AutocompleteInput: React.FC<Props> = ({ style, address, setAddress }) => {
    const [inputValue, setInputValue] = useState(address);
    const [suggestions, setSuggestions] = useState<Suggestion[]>(addresses);
    const [inputFous, setInputFous] = useState(false);
    const [noMatch, setNoMatch] = useState(false);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (inputValue.length >= 3) {
                // axios.get(`https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/autocomplete/json`, {
                //     params: {
                //       key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
                //       components: 'country:uk',
                //       input: inputValue,
                //     },
                //   });
                const { data } = await post('/api/autocomplete', { query: inputValue });
                if (data.predictions.length > 0) {

                    setSuggestions(data.predictions.map((item: any) => ({ address: item.description, addressType: 'Address' })));
                }
            }
            if (inputValue.length == 0) {
                setSuggestions(addresses);
            }
        };
        fetchSuggestions();
    }, [inputValue]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setAddress(value);
        setNoMatch(false);
    };

    const handleSelect = (suggestion: Suggestion) => {
        setInputValue(suggestion.address as any);
        setAddress(suggestion.address);
        setNoMatch(false);
    };

    const handleClickOutside = () => {
        setTimeout(() => {
            setInputFous(false);
        }, 200);
    };
    return (
        <div className={styles.autocompleteContainer} >
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search..."
                className={style}
                onFocus={(e) => setInputFous(true)}
                onBlur={handleClickOutside}

            />
            {inputFous && suggestions.length > 0 && (
                <ul className={styles.suggestionsList}>
                    {suggestions.map((suggestion, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={() => handleSelect(suggestion)} onBlur={() => setInputFous(false)}>
                            {suggestion.address} <span style={{
                                backgroundColor: '#00c0ef',
                                borderRadius: '0.25em',
                                padding: '0.2em 0.6em 0.3em',
                                fontSize: '75%',
                                fontWeight: 600,
                                color: '#fff',
                                textAlign: 'center'
                            }}>
                                {suggestion.addressType}
                            </span>
                        </li>
                    ))}
                </ul>
            )
            }
            {
                noMatch && (
                    <p className={styles.noMatch}>No match found. Please try searching again.</p>
                )
            }
        </div >
    );
};

export default AutocompleteInput;