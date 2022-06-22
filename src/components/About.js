import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import order from '../images/order.png';
import deliver from '../images/deliver-food.png';
import food from '../images/street-food.png';

const About = () => {
  return (
    <div id="about" className="m-6 container mx-auto px-2 text-center">
      <div className="mx-auto h-1 w-10 rounded-sm bg-primary-dark" />
      <h2 className="py-3 text-4xl font-semibold text-dark-red">
        How to Order?
      </h2>
      <p className="mx-auto max-w-md text-gray-dark">
        Quick and fast delivery from Uber Eats, Just Eat and Deliveroo!
      </p>
      <div className="flex flex-col gap-20 py-8 sm:flex-row sm:justify-between md:mx-auto md:mt-8 md:max-w-2xl">
        <div>
          <img className="w-10 mx-auto" src={order} alt="Buyer Guide" />
          <h3 className="py-2 text-xl font-medium text-secondary-dark">
            Order through the app
          </h3>
          <div className="flex items-center justify-center">
            <a className="font-semibold text-dark-red" href="/">
              link to apps
            </a>
            <FontAwesomeIcon
              className="px-2 text-xl text-dark-red"
              icon={faArrowRightLong}
            />
          </div>
        </div>
        <div>
          <img className="w-10 mx-auto" src={deliver} alt="Buyer Guide" />
          <h3 className="py-2 text-xl font-medium text-secondary-dark">
            monitor delivery
          </h3>
          <div className="flex items-center justify-center">
            <a className="font-semibold text-dark-red" href="/">
              more info
            </a>
            <FontAwesomeIcon
              className="px-2 text-xl text-dark-red"
              icon={faArrowRightLong}
            />
          </div>
        </div>
        <div>
          <img className="w-10 mx-auto" src={food} alt="Buyer Guide" />
          <h3 className="py-2 text-xl font-medium text-secondary-dark">
            Collect and enjoy!
          </h3>
          <div className="flex items-center justify-center">
            <a className="font-semibold text-dark-red" href="/">
              more info
            </a>
            <FontAwesomeIcon
              className="px-2 text-xl text-dark-red"
              icon={faArrowRightLong}
            />
          </div>
        </div>
      </div>
      <a
        className="primary-btn-big mt-12 inline-block py-3 px-5 lg:py-4 lg:px-10"
        href="/"
      >
        See Video Tutorial
      </a>
    </div>
  );
};

export default About;
