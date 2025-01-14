import React from "react";

const expertiseData = [

    {
        id:1,
        title:"Crafting Stories",
        content:"We capture your brand’s unique voice and message, creating visuals and content that resonate and leave a lasting impression."
    },
    {
        id:2,
        title:"Building Presence",
        content:"With strategic social media marketing and polished video editing, we position your brand exactly where it needs to be to reach your audience."
    },

    {
        id:3,
        title:"DRIVING RESULTS",
        content:"From boosting engagement to generating leads, we focus on meaningful outcomes that strengthen your brand and foster real, measurable growth."
    },


];



const Expertise = () => {
    return (
      <div className="w-full expertise h-auto py-[10vh]">
        <div className="expertise-container w-3/4 mx-auto">
          <div className="expertise-tite flex items-center gap-x-[5vw] mb-[5vh]">
            <h3 className="text-[50px] text-white">
              Our <span className="text-highlight text-[75px]">Expertise</span>
            </h3>
            <img src="/arrow.png" alt="link-arrow" className="w-[40px] h-[40px]" />
          </div>
  
          <div className="expertise-content grid grid-cols-1 md:grid-cols-3 gap-x-4">
            {expertiseData.map((data) => (
              <div key={data.id} className="expertise-card expertise-gradient text-center text-white p-[25px] rounded-[20px]">
                <h4 className="text-[40px] uppercase mb-10">{data.title}</h4>
                <p className="text-[25px] opacity-60">{data.content}</p>
              </div> 
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Expertise;
