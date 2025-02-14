import {useEffect, useState} from 'react';

const ServerData = () => {
  const [serverData, setServerData] = useState();
  useEffect(() => {
    const fetchFortnite = async () => {
      const data = await fetch('https://fortnite-api.com/v2/news');
      const response = await data.json();
      const array = response.data.br.motds
      console.log(array);
      setServerData(array);
    };
    fetchFortnite();
  }, []);
  if(!serverData) return <h1>No Data To Display</h1>
  // return <h1>No Data To Display</h1>;
  return(
    <div>
      {serverData.map(data => (
        <div className='serverContainer' key={data.id}>
          <h1 className='title'>{data.title}</h1>
          <h2 className='body'>{data.body}</h2>
          <img className='img' src={data.image} alt={data.title} />
        </div>
      ))}
      </div>
  );
      }

export default ServerData;