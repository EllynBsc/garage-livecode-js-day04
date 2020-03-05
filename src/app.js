// TODO: Build an awesome garage!
import { addCar, fetchAndDisplayCars } from './car';
import { focusOnFirstInput, prepareNewCarForm } from './form';

const GARAGE_SLUG = "377";

fetchAndDisplayCars(GARAGE_SLUG);
prepareNewCarForm(GARAGE_SLUG);
