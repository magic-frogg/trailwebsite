export const projects = [
  {
    id: 1,
    name: 'The Trail Meshenger',
    author: 'Evan Gan, Cosmin Mare, Jirayu A,Elliot Shumsky, & Krishna Kesavalu',
    description: [
      '"one stop shop for long range communications in the middle of nowhere!"',
     'The Trail Meshenger is a messenger with an antenna, screen, raspberry pi that uses LoRa meshing to trasmit and receive message. During the trail, there will be no internet, so no communication. Luckily, with our board you can send messages to your peers using a full keyboard, receive messages from afar that have been bounced to you via LoRa meshing, and scroll through history to view all your messages.'
    ],
    images: ['/images/trailmeshenger2.png', '/images/trailmeshenger3.png', '/images/trailmeshenger1.png'],
    component: '/images/trailmeshengercomponent.png', 
    style: {
      top: '0px',
      left: '-600px',
    }
  },
  {
    id: 2,
    name: 'The TRAILDEV Computer',
    author: 'River Lewis',
    description: [
      'Textual Raspi Access Interface for Lightweight DEVelopment and it\'s designed to fix other people\'s projects on the trail. it\'ll be loaded with the code from everyone\'s project, so people can fix bugs if they come up. it\'ll have its own image on it, so one TRAILDEV can reflash another if one gets bricked. it has a case which can store it securely, as well as spare batteries and other tools.'],
    images: ['/images/traildev1.png', '/images/traildev2.png'],
    component: '/images/traildevcomputercomponent.png',
    style: {
      top: '200px',
      left: '200px',
    }
  },
  {
    id: 3,
    name: 'Trail Scorecard Writer',
    author: 'Boyne, Noah, and Gavin',
    description: ['This is a device that can read and write scores to cards. We\'re going to give each person on the trail one of these cards, and when we stop to play games on the hike, we\'ll keep track of everybody\'s scores. Whoever has the highest score at the end gets bragging rights!'],
    images: ['/images/trailscorecardwriter1.png', '/images/trailscorecardwriter2.png'],
    component: '/images/lcdscreen.png', 
    style: {
      top: '500px',
      left: '-300px',
    }
  },
  {
    id: 4,
    name: 'Trail Alarm',
    author: 'Kyle, Kevin, Rhys, Sahib',
    description: ['We made "belt buckles" for everyone on the trail that double as camp tripwires.'],
    images: ['/images/trailalarm1.png', '/images/trailalarm2.png'],
    component: '/images/lcdscreen.png', 
    style: {
      top: '700px',
      left: '-300px',
    }
  }
  
];