export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a4756ed4b0mshb8c388d01d83e4cp11f6bcjsn8eb47c6d76e7',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  };
  