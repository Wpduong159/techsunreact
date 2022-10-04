import React from "react";
import '../App.css';
import { City, ProfSample, CasSample } from '../images/imageIndex';



function Home(){
    return(
        <div>
            <section className="initial">
                <img className="cityBackground" src={City} alt="City background" />
                <div className="welcome">
                    <h1>Welcome</h1>
                    <h2>Let's pick today's look</h2>
                </div>
            </section>
            <section className="chooseStyle">
                <h1 className="prompt">Please choose a style</h1>
                <div className="promptRow">
                    <div className="promptColumn">
                        <img className="profSample" src={ProfSample} alt="Professional Sample" />
                        <div className="promptLayer">
                            <h3>Business Professional</h3>
                        </div>
                    </div>
                    <div className="promptColumn">
                        <img className="casSample" src={CasSample} alt="Casual Sample" />
                        <div className="promptLayer">
                            <h3>Business Casual</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;