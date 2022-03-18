import React from 'react'
import './index.css'
import iconCloud from '../icon/s.svg';
import s from '../icon/s.svg';
import h from '../icon/h.svg';
import t from '../icon/t.svg';
import lc from '../icon/lc.svg';
import sl from '../icon/sl.svg';
import Card  from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
    // const [climas, setClimas] = useState([]);
    // const [search, setSearch] = useState('');
    // const searchInput = useRef(null);

    // const peticion = () => {
    //             fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=london&format=json&u=f`, {
    //         "headers": {
    //             "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
    //             "x-rapidapi-key": "a6e643bf43msh51df313b5e262f0p13af35jsna552ea7d632a"
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setClimas(data.forecasts);
    //     })
    //     .catch(err => console.log(err));

    // }

    
    // const queryData = (e) => {
    //     e.preventDefault();
    //     console.log(search);
    //     if(!search.trim()){
    //         console.log('Esta vacio');
    //         return
    //     }
    //     e.target.reset();
    //     setSearch('')
    // }
    
    // useEffect(() => {
    //     peticion();

    // }, [])

    // const handleSearch = (event) => {
    //     setSearch(searchInput.current.value);
    // }

    // const filteredCity = useMemo(() =>
    //         climas.filter(() => {
    //         return clima => clima.city.toLowerCase().includes(search.toLowerCase());
    //     }), [search, climas]);
    
    return(
        <div className='container-fluid content'> 
            <nav className='menu'>
                <label htmlFor="btn-menu" align="center" className='btn-search'>Search for places</label>
                    <input type="checkbox"  id="btn-menu" />
                    <div className="container-menu">
                        <label htmlFor="btn-menu">X</label>
                        <div className="cont-menu">
                            <form  className="row form" id='search-submit'>
                                <div className="col col-md-9 col-sm-10">
                                <input type="text" name="search" className='form-control input-search' placeholder='Search location' />
                                </div>
                                <div className="col col-md-1 col-sm-1">
                                <button type='submit' className='btn btn-primary'>Search</button>
                                </div>
                            </form>
                            <div className='info-menu'>
                                <li>Barcelona</li>
                                <li>London</li>
                                <li>Colombia</li>
                            </div>
                        </div>
                    </div>
                <button className='btn-gps'>
                    <i className="fa-solid fa-location-crosshairs icon-gps"></i>
                </button>
                <div className='cloud-1'>
                    <i className="fa-solid fa-cloud"></i>
                </div>
                <div className='cloud-2'>
                    <i className="fa-solid fa-cloud"></i>
                </div>
                <div className='cloud-3'>
                    <i className="fa-solid fa-cloud"></i>
                </div>
                <div className='cloud-4'>
                    <i className="fa-solid fa-cloud"></i>
                </div>
                <div className='clima-icon'>
                    <img src={iconCloud} alt="icon" width="90%" height="90%"/> 
                </div>
                <div className='card-info' >
                    <p className='text-title'>15°c</p>
                </div>
                <p className='text-data'>Shower</p>
                <div className="info-date">
                    <p>Today * Fri, 5 jun</p>
                    <p><i className="fa-solid fa-location-dot"></i> London</p>
                </div>
            </nav>
            <section className='section'>
                <div className='menu-select'>
                   <button type='buttom' className='btn-c'> °C</button> 
                   <button type='buttom' className='btn-f'>°F</button> 
                </div>
                <div className="content-card row">
                    <Card day="Tomorrow" img={s} grado="16°c  11°c" />
                    <Card day="Sun," date="7 jun" img={h} grado="16°c  11°c"/>
                    <Card day="Mon," date="8 jun" img={t} grado="16°c  11°c"/>
                    <Card day="Tue," date="9 jun" img={lc} grado="16°c  11°c"/>
                    <Card day="Wen," date="10 jun" img={sl} grado="16°c  11°c"/>
                </div>
                <div className='section-today'>
                    <div>
                        <h5> Today`s Hightlights</h5>
                        <div container-target>
                            <div className="target-left-one">
                                <p className='target-text'>Wind status</p>
                                <p className='target-subt'>7mph</p>
                            </div>
                            <div className="target-right-one">
                                <p className='target-text'>Humidity</p>
                                <p className='target-subt'>84%</p>
                            </div>
                            <div className="target-left-two">
                                <p className='target-text'>Visibility</p>
                                <p className='target-subt'>6,4 miles</p>
                            </div>
                            <div className="target-right-two">
                                <p className='target-text '>Air presure</p>
                                <p className='target-subt'>998 mb</p>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
            </section>
        </div>
     )
};

export default Home;