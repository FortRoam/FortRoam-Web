// // import React from 'react';
// // import FortPrinters from '../../assets/HotelPhoto/fortprinters.jpg';
// // import FortPrinters2 from '../../assets/HotelPhoto/fortprinters2.jpg';
// // import "./HotelTopImage.css";
// // import TextBox from './TextBox';
// // import HotelCard from './HotelCard';
// // import { motion, useAnimation } from "framer-motion";



// // const HotelTopImage = () => (
  

// //   <div>
// //     <div className='header'>
// //       <img src={FortPrinters} className='image' alt="The Fort Printers"></img>
// //     </div>

// //     <div className='title-container'>
// //       <h1 className='title'>The Fort Printers</h1>
// //     </div>

// //     <div className='section'>
// //       <TextBox />
// //       <img src={FortPrinters2} className='image2' alt="Fort Printers 2"></img>
// //     </div>

// //     <div className='title-container2'>
// //       <h1 className='title'>Our Services</h1>
// //     </div>


// //     <div className='section'>
// //     <HotelCard
// //         title="Accomodation"
// //         subtitle="Subtitle 1"
// //         description="Description for Card 1. Some quick example text to build on the card title and make up the bulk of the card's content."
// //         link1="#"
// //         link2="#"
// //       />
// //       <HotelCard
// //         title="39 Bistro, Coffee & Wine Bar"
// //         subtitle="Breakfast, lunch & dinner
// //         Mon - Sun, 8am - 10pm"
// //         description="Fresh and vibrant dining using predominantly fresh seafood and organic, local produce. "
// //         link1="#"
// //         link2="#"
// //       />



// //     </div>
// //   </div>
// // );

// // export default HotelTopImage;

// import React from 'react';
// import FortPrinters from '../../assets/HotelPhoto/fortprinters.jpg';
// import FortPrinters2 from '../../assets/HotelPhoto/fortprinters2.jpg';
// import "./HotelTopImage.css";
// import TextBox from './TextBox';
// import HotelCard from './HotelCard';
// import { motion, useAnimation } from "framer-motion";

// const HotelTopImage = () => (
//   <div>
//     <div className='header'>
//       <img src={FortPrinters} className='image' alt="The Fort Printers"></img>
//     </div>

//     <div className='title-container'>
//       <h1 className='title'>The Fort Printers</h1>
//     </div>

//     <div className='section'>
//       <TextBox />
//       <img src={FortPrinters2} className='image2' alt="Fort Printers 2"></img>
//     </div>

//     <div className='title-container2'>
//       <h1 className='title'>Our Services</h1>
//     </div>

//     <div className='section'>
//       <HotelCard
//         title="Accommodation"
//         subtitle="Subtitle 1"
//         description="Description for Card 1. Some quick example text to build on the card title and make up the bulk of the card's content."
//         link1="#"
//         link2="#"
//       />
//       <HotelCard
//         title="39 Bistro, Coffee & Wine Bar"
//         subtitle="Breakfast, lunch & dinner Mon - Sun, 8am - 10pm"
//         description="Fresh and vibrant dining using predominantly fresh seafood and organic, local produce."
//         link1="#"
//         link2="#"
//       />
//     </div>
//   </div>
// );

// export default HotelTopImage;

import React from 'react';
import FortPrinters from '../../assets/HotelPhoto/fortprinters.jpg';
import FortPrinters2 from '../../assets//HotelPhoto/fortprinters2.jpg';
import Dinning from '../../assets/HotelPhoto/Dinning.png';
import Accomodation from '../../assets/HotelPhoto/Accomodation.png';
import "./HotelTopImage.css";
import { Parallax } from 'react-parallax';
import TextBox from './TextBox';
import HotelCard from './HotelCard';
import { motion, useAnimation } from "framer-motion";



const HotelTopImage = () => (
  

  <div>
    <div className='header'>
      <img src={FortPrinters} className='image' alt="The Fort Printers"></img>
    </div>

    <div className='title-container'>
      <h1 className='title'>The Fort Printers</h1>
    </div>

    <div className='section'>
      <TextBox />
      <img src={FortPrinters2} className='image2' alt="Fort Printers 2"></img>
    </div>

    <div className='title-container2'>
      <h1 className='title'>Our Services</h1>
    </div>


    <div className='section'>
   
      <HotelCard
        imageUrl={Accomodation}
        title="Accomodation"

        description="Indulge in luxury at our accommodations, offering a perfect blend of elegance and comfort. Our spacious suites are equipped with modern amenities, including air conditioning, high-speed WiFi, and a well-stocked mini bar.
         Enjoy a relaxing stay with individual temperature control, a writing desk, and a cozy sitting area.
          Our attentive staff ensures a seamless experience with turndown service and prompt room service. 
          Immerse yourself in the charm of our accommodations, providing a home away from home.
        "        
      />

<HotelCard
        imageUrl={Dinning}
        title="39 Bistro, Coffee & Wine Bar"
        description= "Experience culinary excellence at 39 Bistro, Coffee & Wine Bar. Start your day with a delightful breakfast and savor our lunch and dinner offerings throughout the week from 8 am to 10 pm. Our menu showcases fresh and vibrant dishes, emphasizing locally sourced seafood and organic produce. Indulge in a diverse selection of coffee and wine, carefully curated to complement the flavors of our cuisine. Immerse yourself in the inviting ambiance of our bistro, where every meal is a celebration of culinary creativity and exceptional taste."
         />



    </div>
  </div>
);

export default HotelTopImage;
