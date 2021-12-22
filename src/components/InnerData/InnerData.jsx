import React from 'react';
import axios from 'axios';

const InnerData = () => {
    const [data, setData] = React.useState([]);
    let [limit, setLimit] = React.useState(10);

    React.useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                (setData(response.data));
            });
    }, [])

    return (
        <div className="b-inner-data">
            <div className="inner-data__title">Titles</div>
            <div className="inner-data__buttons">
                <button onClick={() => {setLimit(9)}}> > 10</button>
                <button onClick={() => {setLimit(19)}}> > 20</button>
                <button onClick={() => {setLimit(29)}}> > 30</button>
            </div>
            <ul className="inner-data__list">
            {
                data.slice(0, limit).map((item, idx) => 
                    <li key={idx}>{item.title}</li>
                )
            }
            </ul>
        </div>
    );
}

export default InnerData;