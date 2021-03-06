import React from 'react'
import './index.css';
import './App.css';
import iconCloud from '../icon/s.svg';
import s from '../icon/s.svg';
import h from '../icon/h.svg';
import t from '../icon/t.svg';
import lc from '../icon/lc.svg';
import sl from '../icon/sl.svg';
import Card  from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
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
                    <p className='text-title'>15??c</p>
                </div>
                <p className='text-data'>Shower</p>
                <div className="info-date">
                    <p>Today * Fri, 5 jun</p>
                    <p><i className="fa-solid fa-location-dot"></i> London</p>
                </div>
            </nav>
            <section className='section'>
                <div className='menu-select'>
                   <button type='buttom' className='btn-c'> ??C</button> 
                   <button type='buttom' className='btn-f'>??F</button> 
                </div>
                <div className="content-card row">
                    <Card day="Tomorrow" img={s} grado="16??c  11??c" />
                    <Card day="Sun," date="7 jun" img={h} grado="16??c  11??c"/>
                    <Card day="Mon," date="8 jun" img={t} grado="16??c  11??c"/>
                    <Card day="Tue," date="9 jun" img={lc} grado="16??c  11??c"/>
                    <Card day="Wen," date="10 jun" img={sl} grado="16??c  11??c"/>
                </div>
                <div className='section-today'>
                    <div>
                        <h5> Today`s Hightlights</h5>
                        <div className="container-tarjeta">
                            <div className="tarjeta-left-one">
                                <p className='tarjeta-text'>Wind status</p>
                                <p className='tarjeta-subt'>7mph</p>
                            </div>
                            <div className="tarjeta-right-one">
                                <p className='tarjeta-text'>Humidity</p>
                                <p className='tarjeta-subt'>84%</p>
                            </div>
                            <div className="tarjeta-left-two">
                                <p className='tarjeta-text'>Visibility</p>
                                <p className='tarjeta-subt'>6,4 miles</p>
                            </div>
                            <div className="tarjeta-right-two">
                                <p className='tarjeta-text '>Air presure</p>
                                <p className='tarjeta-subt'>998 mb</p>
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