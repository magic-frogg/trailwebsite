import { useRouter } from 'next/router';
import Link from 'next/link';

const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  const projectData = {
    1: { name: 'The Trail Meshenger', 
        description: '"one stop shop for long range communications in the middle of nowhere!" The Trail Meshenger has an antenna, screen, raspberry pi and it uses LoRa meshing to transmit and receive messages! ', 
        image: '/images/thetrailmeshenger1.png' },
    2: { name: 'Project 2', description: 'Description for Project 2' },
    3: { name: 'Project 3', description: 'Description for Project 3' },
    
  };

  const project = projectData[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default Project;