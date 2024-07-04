import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';
import thetrailmeshenger from "./projects/the-trail-meshenger";

export default function Home() {
  const projects = [
    { id: 1, name: 'The Trail Meshenger', slug: 'the-trail-meshenger' }, 
    { id: 2, name: 'The TRAILDEV Computer' },
    { id: 3, name: 'Project 3' },  
  ];

  function toSlug(str) {
    return str
      .toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with hyphens
      .replace(/[^a-z0-9]+/g, '-')    // Replace non-alphanumeric characters with hyphens
      .replace(/(^-|-$)+/g, '');      // Remove leading or trailing hyphens
  }


  return (
    <div className="pcb">
      <Head> <title> THE TRAIL <br /> BOARD</title> </Head>
      <h1 className="home-title">THE TRAIL BOARD</h1>

      <div className="home-subtitle"> <p>a map of PCBs for the PCT</p> </div>
      
     <div className="trail-image"> <Image 
        src="/images/trailheadsign.png" 
        alt="Trail Board Image" 
        width={400} 
        height={150} 
        />
      </div> 
      <div className="components-container">
        {projects.map(project => (
          <Link href={`/projects/${project.slug}`} key={projects.id}>
            <div className="component">
              <span>{project.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div> 
  );
}
