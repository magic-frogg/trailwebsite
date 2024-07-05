export const projects = [
  {
    id: 1,
    name: 'The Trail Meshenger',
    author: 'Evan Gan, Cosmin Mare, Jirayu A,Elliot Shumsky, & Krishna Kesavalu',
    description: [
      '"one stop shop for long range communications in the middle of nowhere!"',
     'The Trail Meshenger is a messenger with an antenna, screen, raspberry pi that uses LoRa meshing to trasmit and receive message. During the trail, there will be no internet, so no communication. Luckily, with our board you can send messages to your peers using a full keyboard, receive messages from afar that have been bounced to you via LoRa meshing, and scroll through history to view all your messages.'
    ],
    images: ['/images/trailmeshenger2.png', '/images/trailmeshenger3.png'],
    className: 'trail-meshenger'
  },
  {
    id: 2,
    name: 'The TRAILDEV Computer',
    author: 'River Lewis',
    description: [
      'Textual Raspi Access Interface for Lightweight DEVelopment and it\'s designed to fix other people\'s projects on the trail. it\'ll be loaded with the code from everyone\'s project, so people can fix bugs if they come up. it\'ll have its own image on it, so one TRAILDEV can reflash another if one gets bricked. it has a case which can store it securely, as well as spare batteries and other tools.'],
    images: ['/images/traildev1.png', '/images/traildev2.png'],
    className: 'traildev-computer'
  },
  {
    id: 3,
    name: 'Project 3',
    author: 'someone else',
    description: ['Description for Project 3'],
    images: ['/images/project3.jpg'],
    className: 'project-3'
  }
];