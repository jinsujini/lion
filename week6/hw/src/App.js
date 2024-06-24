import axios from 'axios';
import { useState, useEffect } from 'react';
import "./assets/scss/style.scss"

const URL = "/1543061/abandonmentPublicSrvc/abandonmentPublic";

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setError(null);
            setData(null);
            setLoading(true);

            const response = await axios.get(URL, {
                params: {
                    serviceKey: process.env.REACT_APP_API_KEY,
                    numOfRows: 10,
                    pageNo: 1,
                    _type: "json",
                    bgnde: 20211201,
                    endde: 20211231
                }
            });

            setData(response.data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;
    if (!data || !data.response || !data.response.body || !data.response.body.items || !data.response.body.items.item) return null;



    return (
        <div className="App">
            <h1>유기견 현황</h1>

            <div className='sec'>
                <p>구조장소: <span>{data.response.body.items.item[0].happenPlace}</span> </p>
                <p>종: <span>{data.response.body.items.item[0].kindCd}</span> </p>
                <p>특징: <span>{data.response.body.items.item[0].specialMark}</span> </p>
            </div>
            <div className='sec'>
                <p>구조장소: <span>{data.response.body.items.item[1].happenPlace}</span> </p>
                <p>종: <span>{data.response.body.items.item[1].kindCd}</span> </p>
                <p>특징: <span>{data.response.body.items.item[1].specialMark}</span> </p>
            </div>

        </div>
    );
}

export default App;
