export const projects = [
  {
    id: 1,
    name: 'THE TRAIL MESHENGER',
    author: 'Evan Gan, Cosmin Mare, Jirayu A,Elliot Shumsky, & Krishna Kesavalu',
    description: [
      '"a one stop shop for long range communications in the middle of nowhere!"',
     'The Trail Meshenger is a messenger with an antenna, screen, raspberry pi that uses LoRa meshing to trasmit and receive message. During the trail, there will be no internet, so no communication. Luckily, with our board you can send messages to your peers using a full keyboard, receive messages from afar that have been bounced to you via LoRa meshing, and scroll through history to view all your messages.'
    ],
    images: ['/images/trailmeshenger2.png', '/images/trailmeshenger3.png', '/images/trailmeshenger1.png'],
    component: '/images/trailmeshengercomponent.png', 
    video: '/videos/trailmeshenger.mov',
    style: {
      top: '0px',
      left: '-600px',
    }
  },
  {
    id: 2,
    name: 'THE TRAILDEV COMPUTER',
    author: 'River Lewis',
    description: [
      'Textual Raspi Access Interface for Lightweight DEVelopment and it\'s designed to fix other people\'s projects on the trail. it\'ll be loaded with the code from everyone\'s project, so people can fix bugs if they come up. it\'ll have its own image on it, so one TRAILDEV can reflash another if one gets bricked. it has a case which can store it securely, as well as spare batteries and other tools.  It\'s a Raspberry Pi Zero with a 320x240 color screen, a keyboard, and some battery circuitry, and we might be able to play some games too on it too!'],
    images: ['/images/traildev1.png', '/images/traildev2.png', '/images/traildevcomputer3.png'],
    component: '/images/traildevcomputercomponent.png',
    video: '/videos/traildev.mp4',
    style: {
      top: '200px',
      left: '200px',
    }
  },
  {
    id: 3,
    name: 'TRAIL SCORECARD WRITER',
    author: 'Boyne Gregg, Noah Blandford, & Gavin Mason',
    description: ['This is a device that can read and write scores to an RFID card. We\'re going to give each person on the trail one of these cards, and when we stop to play games on the hike, we\'ll keep track of everybody\'s scores. Whoever has the highest score at the end gets bragging rights!'],
    images: ['/images/trailscorecardwriter1.png', '/images/trailscorecardwriter2.png'],
    component: '/images/trailscorecardwritercomponent.png', 
    video: '/videos/traildev.mp4',
    style: {
      top: '500px',
      left: '-300px',
    }
  },
  {
    id: 3,
    name: 'TRAIL FLASHLIGHT',
    author: 'Hussein Alzuhairi, Shadan Alzuhaiei, & May Ni',
    description: ['A flashlight for the woods!'],
    images: [],
    component: '/images/trailflashlightcomponent.png', 
    style: {
      top: '700px',
      left: '-300px',
    }
  },
  {
    id: 4,
    name: 'TRAIL ALARM',
    author: 'Kyle Liao, Kevin Yang, Rhys Panopio & Sahib',
    description: ['We made "belt buckles" for everyone on the trail. They are badges double as camp tripwires so that we can properly secure our campsite from the squirrels.'],
    images: ['/images/trailalarm1.png', '/images/trailalarm2.png'],
    component: '/images/trailalarmcomponent.png', 
    style: {
      top: '900px',
      left: '100px',
    }
  },
  {
    id: 5,
    name: 'INCREMENTAL PEDOMETER',
    author: 'Arthur Hardy & Mathis Feraut',
    description: ['The incremental pedometer is a little pedometer with an incremental game inspired by antimatter dimensions. It\'s easily pocketable and you can go for a walk and it will count your steps! You can even buy upgrades.'],
    images: ['/images/incrementalpedometer1.png', '/images/incrementalpedometer2.png', '/images/incrementalpedometer3.png', '/images/incrementalpedometer4.png', '/images/incrementalpedometer5.png'],
    component: '/images/incrementalpedometercomponent.png', 
    style: {
      top: '1100px',
      left: '-500px',
    }
  },
  {
    id: 6,
    name: 'POWER GENERATOR',
    author: 'Lucas Tang, Scott Chiang, & Kenneth Chiang,',
    description: ['Our power generating device is working. It\’s a very crude prototype that we’ll be fixing up over the next month, and we’ll hopefully have our final design ready and mass produced. Our team spent a lot of time in the beginning learning cad as well as the physics behind the generator.'],
    images: ['/images/powergenerator1.png'],
    component: '/images/powergeneratorcomponent.png', 
    style: {
      top: '1300px',
      left: '200px',
    }
  },
  {
    id: 7,
    name: 'AUTOSTIRRER',
    author: 'Vracto',
    description: ['We made a device that can automatically prepare our food by stirring our food and setting our food. Currently we have the following; Timer and spinner loop that follows the instructions from Backpacker\'s Pantry Motor to physically stir food Speaker to notify the user when their food is ready. For our production version, we\'ll be making the pcb button larger as well as manufacturing a 3d printed spoon adaptor for the motor.'],
    images: ['/images/autostirrer1.png'],
    component: '/images/autostirrercomponent.png', 
    style: {
      top: '1300px',
      left: '-200px',
    }
  },
  {
    id: 8,
    name: 'WEATHER MONITOR',
    author: 'Kevin Lobo, Kade Kniffen & Richard Liao',
    description: ['A device to show the tempereature and humidity during our hike. It has a 16x2 lcd screen that displays the temp and humidity. It has a dht11 sensor to measure temp and humidity. It has a pi pico as the processor. It has a battery pack so it can be powered on the road by 3 triple a batteries.'],
    images: [],
    component: '/images/weathermonitorcomponent.png', 
    style: {
      top: '1300px',
      left: '-500px',
    }
  },
  {
    id: 9,
    name: 'THE BLACKBOX HUB',
    author: 'Aiden, Cait Prough, Emperor Numerius',
    description: ['Our pcb allows a raspberry pi to be powered by two li-ion batteries'],
    images: ['/images/blackboxhub1.png', '/images/blackboxhub2.png', '/images/blackboxhub3.png'],
    component: '/images/blackboxhubcomponent.png', 
    style: {
      top: '1800px',
      left: '100px',
    }
  },
  {
    id: 10,
    name: 'MOBILE POWER STATION',
    author: 'Jakub Kokoszkiewics, Paweł Buczyński, Adam Maciejczuk & Hubert K',
    description: ['Mobile power station for storing some juice to power our phones and other devices on the trail! We created our own battery modules with 138.24Wh of capacity, made from 8 21700 cells. 28.8V so we can use simple step down converter to get constant 24V, we don\'t need to use step up step down converter full bms with cell balancing and overvoltage, undervoltage and overcurrent protection 10A fuse of last hope, if other safety measures would fail!'],
    // (it\'s a little bit broken) Our power station uses 3 battery modules and connects them with a pcb on top. That pcb has several functions monitors our batteries and communicates with our phone to show us details about their performance charges our powerbank with either usbc or dc jack allow us to connect output modules modules! (work in progress) We are using off the shelf usb module right now, but we will soon add our own modules module with regulated output, it will allow us to set from 3V to 24V and will output up to 10A What we need to fix? Well we made some mistakes in our design, especially the main board needs a second revision (number of wires on it should perfectly indicate that), unfortunately charging converter despise producing correct voltage for charging batteries, was cycling on and off and wasn\'t able to charge and trying to fix it we fried it to death. Powerbank can still be charger from external charger
    images: ['/images/mobilepowerstation1.jpg', '/images/mobilepowerstation2.jpg', '/images/mobilepowerstation3.jpg', '/images/mobilepowerstation4.jpg'],
    component: '/images/mobilepowerstationcomponent.png', 
    style: {
      top: '1900px',
      left: '-500px',
    }
  },
  {
    id: 11,
    name: 'MP4/MP3 Player',
    author: 'Yahya Chami, Amine Zanari & Khadija Mouilhi',
    description: ['The PCB is focused on playing songs and audio files of types (WAV and MP3 up to 60 kbps). There are buttons to Control Audio Playing (Play Next, Play Previous, Pause). Also we have an LCD to keep track of songs name and to be more user friendly. The PCB is powered by 3 AAA batteries with a total of 4.5v which is more than enough to run perfectly not to miss about. The PCB can be connected to earphones, headphones, speakers all throw an audio jack port'],
    images: ['/images/mp4player1.png'],
    component: '/images/mp4mp3playercomponent.png', 
    style: {
      top: '2200px',
      left: '-100px',
    }
  },
  {
    id: 12,
    name: 'WATER QUALITY CHECKER',
    author: 'Shreyans Jain',
    description: ['This will help people on the trail to verify the safety of the water they drink and maybe have some fun doing it.'],
    images: ['/images/waterqualitychecker1.png', '/images/waterqualitychecker2.png'],
    component: '/images/waterqualitycheckercomponent.png', 
    style: {
      top: '2300px',
      left: '-500px',
    }
  },
  {
    id: 13,
    name: 'RAIN SENSOR',
    author: 'Ishaan',
    description: ['It\'s a rain sensor that we can keep near any sensitive electronics we bring on the trail. If it detects any rain or condensation the sensor will alert us. '],
    images: ['/images/waterqualitychecker1.png', '/images/waterqualitychecker2.png'],
    component: '/images/rainsensorcomponent.png', 
    style: {
      top: '3200px',
      left: '-100px',
    }
  },
  {
    id: 14,
    name: 'THE TRAIL\'S BADGE',
    author: 'Vinaya Sharma, Emily Liu, Louisa, Nila Palmo Ram & Jeslyn Chang',
    description: ['It\'s a PCB 2x2" badge that works the same way the onboard cards work- harvesting energy from a phone and lighting up a back LED while sending through the NFC chip, any programmable link! For The Trail, each badge will be linked to a website with the contacts of the people in your team! (differentiate by 3 group colored badges) The Badge includes three colors for three groups.'],
    images: ['/images/trailsbadge1.png', '/images/trailsbadge2.png', '/images/trailsbadge3.png'],
    component: '/images/trailsbadgecomponent.png', 
    style: {
      top: '2700px',
      left: '-500px',
    }
  },
  {
    id: 15,
    name: 'WALKIE TALKIE',
    author: 'Abdur Sajid',
    description: ['PCB walkie talkie based on the ESP-32 framework. MORE COMING SOON!'],
    images: ['/images/trailsbadge1.png', '/images/trailsbadge2.png', '/images/trailsbadge3.png'],
    component: '/images/walkietalkiecomponent.png', 
    style: {
      top: '2600px',
      left: '200px',
    }
  },
  {
    id: 16,
    name: 'TRAIL CAMERA',
    author: 'Sidharth Bhatt',
    description: ['Ever gone camping and wondered what animals were around you? Limited cell service, SD cards are too time intensive, and wifi\'s range is too limited. Introducing a custom trail camera featuring a lora rasberry pi hat PCB and worlds first open source lora video streaming protocol written in python. I literally wrote the code so an image can be converted into bytes, turned into radio frequencies, and subsequently decoded up to 2 miles away. Images take less than a minute to be sent and can be sorted  to see if they contain wildlife with an image variation script I wrote.'],
    images: ['/images/trailcamera1.png'],
    component: '/images/trailcameracomponent.png', 
    style: {
      top: '3000px',
      left: '-500px',
    }
  },
  
  
  
];