import Image from "next/image";

const TheTrailMeshenger = () => {
  return (
    <div>
      <div className="project-main-image"> 
        <Image 
        src="/images/trailmeshenger2.png" 
        alt="Trail Board Image" 
        width={550} 
        height={400} 
        />

    {/* <Video 
        src="/videos/trailmeshenger.mov" 
        alt="Trail Board Image" 
        width={550} 
        height={400} 
        /> */}
        
        <Image 
        src="/images/trailmeshenger3.png" 
        alt="Trail Board Image" 
        width={550} 
        height={400} 
        />
      </div>
      <div classname="project-info"> 
        <h1>The Trail Meshenger</h1>
        <h2>created by Evan Gan, Cosmin Mare, Jirayu A,Elliot Shumsky, & Krishna Kesavalu</h2>
        <p>"Your one stop shop for long range communications in the middle of nowhere." </p>
        <p>The Trail Meshenger is a messenger with an antenna, screen, raspberry pi that uses LoRa meshing to trasmit and receive message. During the trail, there will be no internet, so no communication. Luckily, with our board you can send messages to your peers using a full keyboard, receive messages from afar that have been bounced to you via LoRa meshing, and scroll through history to view all your messages. </p>
      </div>
      
    </div>

  );

    
};

export default TheTrailMeshenger;