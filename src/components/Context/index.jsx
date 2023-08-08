import { createContext, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const ToolsContext = createContext();

function ToolsContextProvider({ children }) {
    const apiKey = 'psl7Zvb5hyvWezi+/wAYCA==OlPkUTcaKQdMJYyU';

    const [qrValue, setQrValue] = useState('');
    const [qrUrl, setQrUrl] = useState('');

    const [passValue, setPassValue] = useState('');
    const [passLength, setPassLength] = useState('');

    const [IPValue, SetIPValue] = useState('');
    const [IPAddress, setIPAddress] = useState('');

    const [whoisValue, SetWhoisValue] = useState('');
    const [whoisUrl, setWhoisUrl] = useState('');

    const generateQr = (url) => {
        const data = url;
        const fmt = 'png';
        const apiUrl = `https://api.api-ninjas.com/v1/qrcode?data=${encodeURIComponent(
            data
        )}&format=${fmt}`;

        axios
            .get(apiUrl, {
                headers: {
                    'X-Api-Key': apiKey,
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                setQrUrl(response.data);
            })
            .catch((error) => {
                console.error('Error: ', error.response.data);
            });
    };

    const generatePassword = (number) => {
        const length = number;
        const apiUrl = `https://api.api-ninjas.com/v1/passwordgenerator?length=${length}`;
        axios
            .get(apiUrl, {
                headers: {
                    'X-Api-Key': apiKey,
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                setPassValue(response.data);
            })
            .catch((error) => {
                console.error('Error: ', error.response.data);
            });
    };

    const IpLookup = (ip) => {
        const ip_addr = ip;
        const apiUrl = `https://api.api-ninjas.com/v1/iplookup?address=${ip_addr}`;

        axios({
            method: 'GET',
            url: apiUrl,
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                SetIPValue(response.data);
            })
            .catch((error) => {
                console.error('Error:', error.response.data);
            });
    };

    const whoisSearch = (url) => {
        const domain = url;
        const apiUrl = 'https://api.api-ninjas.com/v1/whois';

        axios
            .get(`${apiUrl}?domain=${domain}`, {
                headers: { 'X-Api-Key': apiKey },
                responseType: 'json',
            })
            .then((response) => {
                SetWhoisValue(response.data);
            })
            .catch((error) => {
                console.error('Error: ', error.response.data);
            });
    };

    return (
        <ToolsContext.Provider
            value={{
                generateQr,
                qrValue,
                setQrValue,
                qrUrl,
                passValue,
                setPassLength,
                passLength,
                generatePassword,
                IpLookup,
                IPValue,
                IPAddress,
                setIPAddress,
                whoisSearch,
                whoisValue,
                whoisUrl,
                setWhoisUrl,
            }}
        >
            {children}
        </ToolsContext.Provider>
    );
}

export { ToolsContext, ToolsContextProvider };
