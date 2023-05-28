import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

function ParticlesJS() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="bannerSec" >
            <Particles className="absolute top-0 left-0 right-0 h-full" options={particlesOptions} init={particlesInit}/>
        </div>
    );
}

export default ParticlesJS;
