import React from "react";

const AboutExpertise = () => {
  return (
    <div className="w-full about-expertise-element h-auto py-[10vh] -mt-[30vh]">
      <div className="about-expertise-container w-2/4 mx-auto">
        <div className="grid grid-cols-2 gap-x-10">
            <div className="text-white flex flex-col gap-y-4 justify-between">
                <h1 className="text-[48px]">Mastering the Art of Digital Solutions</h1>
                <p className="text-[16px] text-[#929292]">Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id cursus id blandit. Consectetur maecenas id vivamus integer integer aliquam. Donec amet rhoncus ut turpis massa augue faucibus.</p>
                <div>
                    <div className="my-4">
                        <div className="flex justify-between">
                            <h4>Client Satisfaction</h4>
                            <h4>98%</h4>
                        </div>
                        <progress value="98" max="100" className="w-full"></progress>
                    </div>
                    <div className="my-4">
                        <div className="flex justify-between">
                            <h4>Client Satisfaction</h4>
                            <h4>98%</h4>
                        </div>
                        <progress value="98" max="100" className="w-full"></progress>
                    </div>
                    <div className="my-4">
                        <div className="flex justify-between">
                            <h4>Client Satisfaction</h4>
                            <h4>98%</h4>
                        </div>
                        <progress value="98" max="100" className="w-full"></progress>
                    </div>
                    
                </div>
            </div>
            <div>
                <img src="/about/about-expertise-image.png" alt="about-expertise" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutExpertise;
