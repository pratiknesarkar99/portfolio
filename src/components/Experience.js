import colorSharp from '../assets/img/color-sharp.png';
import { BentleySweExperienceDetails } from './BentleySweExperienceDetails';
import { BentleyInternExperienceDetails } from './BentleyInternExperienceDetails';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomAIInternExperienceDetails } from './CustomAIInternExperienceDetails';

export const Experience = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="experience-bx wow zoomIn">
              <h2 className="header">Experience</h2>
              <CustomAIInternExperienceDetails />
              <BentleySweExperienceDetails />
              <BentleyInternExperienceDetails />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
