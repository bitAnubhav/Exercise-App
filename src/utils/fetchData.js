 export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'f7b60f1e7amshc536d8d68189332p1b243fjsn8f2a33e4cac6',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
 
 }

 export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
  headers: {
    'X-RapidAPI-Key': 'f7b60f1e7amshc536d8d68189332p1b243fjsn8f2a33e4cac6',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url , options) => {
    const response = await fetch(url , options)
    const  data = await response.json();
    return data;
}