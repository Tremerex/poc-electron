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
  weatherAppAnimation,
];

export const getLottieAnimation = () => {
  const index = Math.floor(Math.random() * (list.length));
  return list[index];
};
