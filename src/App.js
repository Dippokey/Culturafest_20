import React from 'react';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Caro from './components/Caro';
import Slider from './components/eventcaro';
import img1 from "./Assets/Photography.jpg"
import img2 from "./Assets/Dance.jpg"
import img3 from "./Assets/Fashion.jpg"
import img4 from "./Assets/Circuits.jpg"
import img5 from "./Assets/Coding.jpg"
import img6 from "./Assets/gaming.jpg"
import img7 from "./Assets/kannada.png"
import img8 from "./Assets/Literature.jpg"
import img9 from "./Assets/Music.jpg"
import img10 from "./Assets/Poster.jpg"
import img11 from "./Assets/Sketching.jpg"
import img12 from "./Assets/Theatre.jpg"
import black from "./Assets/black.jpg"
import img13 from "./Assets/informal.jpg"
import img14 from "./Assets/Civil.jpg"


//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const slideData = [
  {
    index: 0,
    headline: 'Photography',
    button: 'Events',
    src: img1,
    src_back: black,
    hrefObj: [{
      refer: "https://www.instamojo.com/CULTURA/f18-dslr-photography/",
      headl: "DSLR Photography",
    }],
  },
  {
    index: 1,
    headline: 'Dance',
    button: 'Events',
    src: img2,
    hrefObj: [
      {
        refer: "https://www.instamojo.com/CULTURA/kick-n-crew/",
        headl: "Kick n Crew",
      },
      {
        refer: "https://www.instamojo.com/CULTURA/two-for-tango/",
        headl: "Two for Tango",
      },
      {
        refer: "https://www.instamojo.com/CULTURA/switch-foot-585a8/",
        headl: "Switch Foot",
      },
      {
        refer: "https://www.instamojo.com/CULTURA/1-vs-1/",
        headl: "1 vs 1",
      },
      {
        refer: "https://www.instamojo.com/CULTURA/kinkini/",
        headl: "Kinkini",
      },
    ],
  },
  {
    index: 2,
    headline: "Coding",
    button: 'Events',
    src: img5,
    hrefObj: [{
      refer: "https://www.instamojo.com/CULTURA/code-mantra/",
      headl: "Code Mantra",
    },
    {
      refer: "https://www.instamojo.com/CULTURA/code-e-war/",
      headl: "Code-E-War",
    },
    {
      refer: "https://www.instamojo.com/CULTURA/coding-patterns/",
      headl: "Coding Patterns",
    },
    {
      refer: "https://www.instamojo.com/CULTURA/cryptography-c4ff2/",
      headl: "Cryptography",   //this one comes under tce
    }],
  },
  {
    index: 3,
    headline: 'Circuits',
    button: 'Events',
    src: img4,
    hrefObj: [{
      refer: "https://www.instamojo.com/CULTURA/robo-race-4ca60/",
      headl: "Robo Race",
    },
    {
      refer: "https://www.instamojo.com/CULTURA/circuit-hunt/",
      headl: "Circuit Hunt",
    },
    {
      refer: "https://www.instamojo.com/CULTURA/operation-silicon/",
      headl: "Operation Silicon",
    }, {
      refer: "https://www.instamojo.com/CULTURA/the-pursuit-of-technocrat/",
      headl: "The pursuit of technocrat",
    }

    ],
  }
  , {
    index: 4,
    headline: 'Fashion',
    button: 'Events',
    src: img3,
    hrefObj: [{
      refer: "https://www.instamojo.com/CULTURA/fashion-show-af72d/",
      headl: "Fashion show",
    }],
  },
  {
    index: 5,
    headline: 'Music',
    button: 'Events',
    src: img9,
    hrefObj: [{
      refer: "https://www.instamojo.com/CULTURA/master-the-mic-solo-singing/",
      headl: "Solo Singing",
    }, {
      refer: "https://www.instamojo.com/CULTURA/organiko-solo-instrumental/",
      headl: "Instrumental",
    }, {
      refer: "https://www.instamojo.com/CULTURA/battle-of-bands-746ec/",
      headl: "Battle of Bands",
    }, {
      refer: "https://www.instamojo.com/CULTURA/drop-the-mic-rap-battle/",
      headl: "Rap Battle",
    }, {
      refer: "https://www.instamojo.com/CULTURA/voo-doo-crew-group-singing/",
      headl: "Group Singing",
    }],
  },
  {
    index: 6,
    headline: 'Gaming',
    button: 'Events',
    src: img6,
    hrefObj: [{
      refer: "https://www.instamojo.com/CULTURA/call-of-duty-3231a/",
      headl: "Call of Duty",
    },
    {
      refer: "https://www.instamojo.com/CULTURA/counter-strike-5ac84/",
      headl: "Counter Strike",
    }, {
      refer: "https://www.instamojo.com/CULTURA/nfs-760b8/",
      headl: "NFS",
    },
    {
      refer: "https://www.instamojo.com/CULTURA/fifa-f7476/",
      headl: "FIFA",
    },
    {
      refer: "https://www.instamojo.com/CULTURA/pubg-956bd/",
      headl: "PUBG",
    }],
  },
  {
    index: 7,
    headline: 'Muses',
    button: 'Events',
    src: img10,
    hrefObj: [{
      refer: "https://www.instamojo.com/CULTURA/poster-making-c0264/",
      headl: "Poster Making",
    }],
  },
  {
    index: 8,
    headline: 'Theatre',
    button: 'Events',
    src: img12,
    hrefObj: [{
      refer: "https://www.instamojo.com/CULTURA/improv/",
      headl: "Improv",
    }, {
      refer: "https://www.instamojo.com/CULTURA/streetplay/",
      headl: "Streetplay",
    }, {
      refer: "https://www.instamojo.com/CULTURA/mime-27c92/",
      headl: "Mime",
    }, {
      refer: "https://www.instamojo.com/CULTURA/mad-ads-2519c/",
      headl: "Mad Ads",
    }],
  },
  {
    index: 9,
    headline: 'Literary',
    button: 'Events',
    src: img8,
    hrefObj: [{
      refer: "https://www.instamojo.com/CULTURA/popcorn-trivia-quiz/",
      headl: "Quiz",
    },
    {
      refer: "https://www.instamojo.com/CULTURA/jam-c2f43/",
      headl: "Jam",
    }, {
      refer: "https://www.instamojo.com/CULTURA/debate-c5dd8/",
      headl: "Debate",
    }],
  },
  {
    index: 10,
    headline: 'Art',
    button: 'Events',
    src: img11,
    hrefObj: [{
      refer: "https://www.instamojo.com/CULTURA/book-cover-97e47/",
      headl: "Book Cover",
    },
    {
      refer: "https://www.instamojo.com/CULTURA/cartooning/",
      headl: "Cartooning",
    }, {
      refer: "https://www.instamojo.com/CULTURA/charcoal-art-cd654/",
      headl: "Charcoal art",
    }],
  },

  {
    index: 11,
    headline: 'Informal',
    button: 'Events',
    src: img13,
    hrefObj: [{
      refer: "https://www.instamojo.com/CULTURA/mr-fit/",
      headl: "Mr.Fit",
    }, {
      refer: "https://www.instamojo.com/CULTURA/food-hunt/",
      headl: "Food Hunt",
    }, {
      refer: "https://www.instamojo.com/CULTURA/hogothon-23124/",
      headl: "Hogothon",
    }, {
      refer: "https://www.instamojo.com/CULTURA/stand-up-comedy-1c679/",
      headl: "Stand-up Comedy",
    }, {
      refer: "https://www.instamojo.com/CULTURA/dj-wars/",
      headl: "DJ Wars",
    }],
  },


  {
    index: 12,
    headline: 'Civil',
    button: 'Events',
    src: img14,
    hrefObj: [{
      refer: "https://www.instamojo.com/CULTURA/c-quiz/",
      headl: "C-Quiz",
    }, {
      refer: "https://www.instamojo.com/CULTURA/eco-wars/",
      headl: "Eco Wars",
    }],
  },
  {
    index: 13,
    headline: 'Kannada',
    button: 'Events',
    src: img7,
    hrefObj: [{
      refer: "https://www.instamojo.com/CULTURA/kgf-6af58/",
      headl: "KGF",
    }, {
      refer: "https://www.instamojo.com/CULTURA/300-1cec2/",
      headl: "300",
    }, {
      refer: "https://www.instamojo.com/CULTURA/bhaavasangama/",
      headl: "Bhaavasangama",
    }],
  },

]
function App() {
  return (<div className="App" >


    <Home > </Home>
    <Slider heading="Example Slider" slides={slideData} />

    <Aboutus > </Aboutus>
    <Contact > </Contact>

  </div>

  );
}

export default App;
