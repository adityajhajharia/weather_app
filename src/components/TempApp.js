import React ,{ useState, useEffect} from 'react';
import "./css/style.css";
// c4991616c0976372cdf829f048364ba9
const TempApp= ()=>{

    const[city,setCity]=useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect( () => {
        const fetchApi = async ()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c4991616c0976372cdf829f048364ba9`;
            const response= await fetch(url);
            const resJson= await response.json();   
            // console.log(response);
            setCity(resJson.main);
        }

        fetchApi();
    } ,[search])
    return(<>
        <div className="box">
            <div className="inputData">
                <input 
                type="search"
                className="inputField"
                value={search}
                onChange={(event)=>{
                    setSearch(event.target.value);
                } }
                />
            </div>
        {!city ?(
            <p className="errorMsg">No Data found</p>
        ):(
            <>
            <div className="info">
                <h2 className="location">
                <i className="fas fa-street-view"></i>{search}
                </h2>
                <h1 className="temp">
                    {city.temp}°C
                </h1>
                <h3 className="tempmin_max">Min :{city.temp_min}°C  |  Max :{city.temp_max}°C</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </>
        )}
            
          </div>
    </>)
}

export default TempApp;
