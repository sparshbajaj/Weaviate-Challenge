import React from 'react';
import ParticlesJS from './ParticlesJS';
import ImageGrid from './ImageGrid';
import bgImage from '../assets/header-bg.png';

function FirstSection() {
    return (
        <>
            <div className='-z-10 relative HeaderSection bg-center bg-fixed' style={{ backgroundImage: `url(${bgImage})`, backgroundColor: '#0C1428', overflow:'hidden' }}>
                <div className="h-screen flex items-center justify-center ">
                    < ParticlesJS />
                    <div className="container mx-auto lg:mx-16 lg:my-0 my-auto px-8 md:px-8 ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ml-0 lg:ml-6" >
                            <div className="flex flex-col justify-center">
                                <h1 className="text-white text-3xl md:text-5xl font-regular mb-4 sm:mt-16 mt-8 underline-animation">Investors Relations</h1>
                                <p className="text-white text-xl sm:mt-8 mt-8">Weaviate, an AI Native vector database infrastructure provider for developers and operators (DevOps/MLOps) 
                                worldwide, has raised <strong>$67.7M</strong> in funding over 3 rounds. </p>
                                <p className="text-white text-xl sm:mt-8 mt-2" >The latest Series B round of $50M (approximately €45.65M) was led by Index Ventures 
                                and included participation from Battery Ventures. The funds will be used to expand the Weaviate team and accelerate the development of its 
                                popular open-source database and new Weaviate Cloud Service to meet the growing demand in the AI application development market.</p>
                            </div>
                            <div className="hidden lg:block">
                                <ImageGrid />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FirstSection;
