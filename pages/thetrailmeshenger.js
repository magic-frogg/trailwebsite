import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';
// import TheTrailMeshenger from "./pages/thetrailmeshenger";

export default function TheTrailMeshenger() {
  const projects = [
    { id: 1, name: 'The Trail Meshenger' }, 
    { id: 2, name: 'The TRAILDEV Computer' },
    { id: 3, name: 'Project 3' },  
  ];

  return (
    <div className="pcb">
      <head> <title> THE TRAIL </title> </head>
      <h1 className="home-title">THE TRAIL MESHENGER</h1>

      <div className="home-subtitle"> <p>011</p> </div>
      
      <div className="components-container">
        {projects.map(project => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <div className="component">
              <span>{project.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div> 
  );
}