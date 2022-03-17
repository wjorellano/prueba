import React, { useState, useEffect } from 'react'
// import * as Fontawesome from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css'
import gps from '../icon/location-solid.svg'
import { Card } from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
    const [clima, setClimas] = useState([])
    useEffect(() => {
        fetch("https://yahoo-weather5.p.rapidapi.com/weather?location=london&format=json&u=f", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
		"x-rapidapi-key": "a6e643bf43msh51df313b5e262f0p13af35jsna552ea7d632a"
	}
})
.then(response => response.json())
.then(data => {
    console.log(data)
    setClimas(data.query.channel.item.forecast)
})
.catch(err => {
    console.log(err);
});
    }, [])
     return(
        <div className='container-fluid'> 
            <nav className='menu'>
                <label htmlFor="btn-menu" className='btn-search'>Search for places</label>
                    <input type="checkbox" name="" id="btn-menu" />
                    <div className="container-menu">
                        <label htmlFor="">X</label>
                        <div className="cont-menu">
                            <form className=" row form">
                                <div className="col-md-9">

                                <input type="text" name="search" className='form-control input-search' placeholder='Search location' />
                                </div>
                                <div className="col-md-1">
                                <button type='button' className='btn btn-primary'>Search</button>
                                </div>
                            </form>
                            <div className='info-menu'>
                                <li>Colombia</li>
                                <li>Chile</li>
                                <li>Chile</li>
                            </div>
                        </div>
                    </div>
                <button className='btn-gps'>
                    <img src={gps} alt='gps' className='icon-gps'/>
                </button>
                <div className='cloud-1'></div>
                <div className='cloud-2'></div>
                <div className='cloud-3'></div>
                <div className='cloud-4'></div>
                <div className='clima-icon'>
                
                </div>
                <div className='card-info'></div>
            </nav>
            <section className='section'>
                <div className='menu-select'>
                   <button type='buttom' className='btn-c'> °C</button> 
                   <button type='buttom' className='btn-f'>°F</button> 
                </div>
            <Footer/>
            </section>
        </div>
     )
};

export default Home;