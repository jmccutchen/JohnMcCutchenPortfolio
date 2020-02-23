import React from "react";
import Larry from "../../images/Larry.PNG";
import deetDash from "../../images/DeetDash.png";
import dayPlanner from "../../images/dayPlanner.png"
import weather from "../../images/WeatherApp.png"

export default function Portfolio() {
    return (

        <div className="mainsection img-fluid">
        <section className="border">
            <div>
                <header className="sectionhead mb-4">Portfolio</header>

                <div className="container pt-4">

                    <div className="d-flex flex-row justify-content-around">

                        <div className="d-flex flex-column col-md-5 col-sm-4 cssCard">
                            <div className="picCar car1 shadow">
                                <img src={Larry} alt="Larry"></img>
                            </div>

                            <div className="picCar car2 text-light shadow">
                                <div className="content">
                                    <h1 className="text-center">Call It Larry</h1>
                                    <p className="pl-4 pr-4">This was a fun app that was made as part of a group project. Larry
                                        was often used as an example of a variable in our className. We made an app
                                        dedicated to Larry.</p>
                                    <div className="text-center mr-5 pr-5">
                                        <button type="button" className="btn-info btn btn-sm checkIt"><a className="nav-link"
                                                href="https://salty-dawn-42604.herokuapp.com/" target="_blank" rel="noopener noreferrer">Check It
                                                Out</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className="d-flex flex-column col-md-5 col-sm-4 cssCard">
                            <div className="picCar car1 shadow">
                                <img src={deetDash} id="deetsDash" alt="Deet Dash"></img>
                            </div>

                            <div className="picCar car2 text-light shadow">
                                <div className="content">
                                    <h1 className="text-center">Deet Dash</h1>
                                    <p className="pl-4 pr-4">This is an app designed to give a user relevant information to
                                        help start the day on the right foot. This was created as part of a group
                                        project.</p>
                                    <div className="text-center mr-5 pr-5">
                                        <button type="button" className="btn-info btn btn-sm checkIt"><a className="nav-link"
                                                href="https://thebrellis.github.io/Project-1/" target="_blank" rel="noopener noreferrer">Check It
                                                Out</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="d-flex flex-row justify-content-around">

                        <div className="d-flex flex-column col-md-5 col-sm-4 cssCard">
                            <div className="picCar car1 shadow">
                                <img src={weather} id="WeatherPic" alt="Weather App"></img>
                            </div>

                            <div className="picCar car2 text-light shadow">
                                <div className="content">
                                    <h1 className="text-center">Weather App</h1>
                                    <p className="pl-4 pr-4">This is an app that gives you the weather forecast based on the city
                                        provided by
                                        the user.</p>
                                    <div className="text-center mr-5 pr-5">
                                        <button type="button" className="btn-info btn btn-sm checkIt"><a className="nav-link"
                                                href="https://jmccutchen.github.io/WeatherApp/" target="_blank" rel="noopener noreferrer">Check It
                                                Out</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column col-md-5 col-sm-4 cssCard">
                            <div className="picCar car1 shadow">
                                <img src={dayPlanner} alt="Day Planner"></img>
                            </div>

                            <div className="picCar car2 text-light shadow">
                                <div className="content">
                                    <h1 className="text-center">Work Day Scheduler</h1>
                                    <p className="pl-4 pr-4">This is a rudimentary app that can be used to plan out the day.</p>
                                    <div className="text-center mr-5 pr-5">
                                        <button type="button" className="btn-info btn btn-sm checkIt"><a className="nav-link"
                                                href="https://jmccutchen.github.io/DayPlanner/" target="_blank" rel="noopener noreferrer">Check It
                                                Out</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    </div>
    )

}