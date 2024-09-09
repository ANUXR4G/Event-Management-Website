import theme from "./Theme/theme";
import mobile from "./Mobile/ismobile";
import { landingImages, scrollEventImagesOne, scrollEventImagesTwo, scrollWeddingImagesOne, scrollWeddingImagesTwo, } from "./Images/images";
import { combineReducers } from "redux";


const allReducers = combineReducers({
  theme,
  ismobile: mobile,
  landingImages,
  scrollEventImagesOne,
  scrollEventImagesTwo,
  scrollWeddingImagesOne,
  scrollWeddingImagesTwo
});

export default allReducers;
