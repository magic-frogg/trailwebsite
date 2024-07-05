import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
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
      <div className="home-subtitle"> 
      <p>
          a collection of epic projects from{' '}
          <Link href="https://trail.hackclub.com" legacyBehavior>
            <a className="home-link">THE TRAIL BY HACK CLUB 2024</a>
          </Link>
        </p>
       </div>
      <Head> <title>THE TRAIL BOARD</title> </Head>
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
        alt="trailhead  sign" 
        width={400}
        height={90}
      />
      </div> 
     
      <div className="components-container">
        {projects.map(project => {
          const slug = toSlug(project.name);
          return (
            <Link href={`/projects/${slug}`} key={project.id}>
              <div className={`component ${project.className}`}>
                <span>{project.name}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className = "end">
        <p>🎉 finish 🎉</p>
        <p>created by estella gu </p>
      </div>
      <div className="finish-line"></div> 
    </div> 

    
    
  );
}