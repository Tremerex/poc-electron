import dayAndNight from "./day-and-night.json";
import dayNight from "./day-night.json";
import flowerMograph from "./flower-mograph.json";
import sunny from "./sunny.json";
import weatherAppAnimation from "./weather-app-animation.json";

const list = [
  dayAndNight,
  dayNight,
  flowerMograph,
  sunny,
];

let itemIndex = 0

export const getLottieAnimation = () => {
  const animation = list[itemIndex%list.length]
  itemIndex += 1
  return animation;
};
