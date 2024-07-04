import Image from "next/image";

const TheTrailMeshenger = () => {
  return (
    <div>
      <div className="trail-image"> <Image 
        src="/images/trailmeshenger2.png" 
        alt="Trail Board Image" 
        width={550} 
        height={400} 
      />
      </div>
      <h1>The Trail Meshenger</h1>
      <p>created by Evan Gan, Cosmin Mare, Jirayu A,Elliot Shumsky, & Krishna Kesavalu</p>
      
    </div>

  );

    
};

export default TheTrailMeshenger;