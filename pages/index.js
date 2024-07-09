import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import { projects } from '../data/projects';

export default function Home() {

  function toSlug(str) {
    return str
      .toLowerCase()
      .replace(/\s+/g, '-')           // replace spaces with hyphens
      .replace(/[^a-z0-9]+/g, '-')    // replace non-alphanumeric characters with hyphens
      .replace(/(^-|-$)+/g, '');      // remove leading or trailing hyphens
  }

  return (
    <div className="pcb">
      <Head>
        <title>THE TRAIL BOARD</title>
      </Head>
      
      <div className="home-subtitle">
        <p>
          a collection of epic projects from{' '}
          <Link href="https://trail.hackclub.com" legacyBehavior>
            <a className="home-link">THE TRAIL BY HACK CLUB 2024</a>
          </Link>
        </p>
      </div>
      <h1 className="home-title">~THE TRAIL BOARD~</h1>
      
      <div className="orpheus-bus-image"> 
        <Image 
          src="/images/orpheusbus.png" 
          alt="orpheus pulling bus" 
          width={200} 
          height={75}
        />
      </div> 

      <h2>PCBs for the PCT</h2>

      <div className="trailhead-image"> 
        <Image 
          src="/images/trailheadsign.png" 
          alt="trailhead sign" 
          width={400}
          height={90}
        />
      </div> 
     
      <div className="components-container">
        <div className="background-image"></div>
        {projects.map(project => {
          const slug = toSlug(project.name);
          return (
            <div 
              className="component-link-container" 
              key={project.id} 
              style={{
                top: project.style?.top,
                left: project.style?.left
              }}
            >
              <Link href={`/projects/${slug}`} legacyBehavior>
                <a className="component-link">
                  <Image 
                    src={project.component} 
                    alt={project.name} 
                    width={100} 
                    height={100}
                    className="component-link-img"
                    style={{ objectFit: 'contain' }}
                  />
                </a>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="end">
        <p>🎉 you've finished the map! 🎉</p>
        <p>created by estella gu 🐸🪄</p>
      </div>
      <div className="finish-line"></div> 

    </div> 
  );
}