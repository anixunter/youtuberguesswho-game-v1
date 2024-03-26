const Youtubers = [
  { id: 1, name: "adinross", image: "./youtubers/adinross.webp" },
  { id: 2, name: "amouranth", image: "./youtubers/amouranth.jpg" },
  { id: 3, name: "behzinga", image: "./youtubers/behzinga.jpg" },
  { id: 4, name: "fousey", image: "./youtubers/fousey.jpg" },
  { id: 5, name: "fuslie", image: "./youtubers/fuslie.jpg" },
  { id: 6, name: "ishowspeed", image: "./youtubers/ishowspeed.jpg" },
  { id: 7, name: "jakepaul", image: "./youtubers/jakepaul.jpg" },
  { id: 8, name: "kaicenat", image: "./youtubers/kaicenat.webp" },
  { id: 9, name: "ksi", image: "./youtubers/ksi.jpg" },
  { id: 10, name: "loganpaul", image: "./youtubers/loganpaul.jpg" },
  { id: 11, name: "markrober", image: "./youtubers/markrober.jpg" },
  { id: 12, name: "marques", image: "./youtubers/marques.jpg" },
  { id: 13, name: "miniminter", image: "./youtubers/miniminter.jpg" },
  { id: 14, name: "mrbeast", image: "./youtubers/mrbeast.jpg" },
  { id: 15, name: "ninja", image: "./youtubers/ninja.webp" },
  { id: 16, name: "pewdipie", image: "./youtubers/pewdipie.jpg" },
  { id: 17, name: "pokimane", image: "./youtubers/pokimane.jpg" },
  { id: 18, name: "romanatwood", image: "./youtubers/romanatwood.jpg" },
  { id: 19, name: "ryanhiga", image: "./youtubers/ryanhiga.jpg" },
  { id: 20, name: "sniperwolf", image: "./youtubers/sniperwolf.jpg" },
  { id: 21, name: "taliamar", image: "./youtubers/taliamar.jpg" },
  { id: 22, name: "tarik", image: "./youtubers/tarik.webp" },
  { id: 23, name: "tenz", image: "./youtubers/tenz.jpg" },
  { id: 24, name: "valkyrae", image: "./youtubers/valkyrae.jpg" },
];

const randomizeArray = (array) => {
  // The length of the array
  let length = array.length;
  // Loop through the array from the last element to the second one
  for (let i = length - 1; i > 0; i--) {
    // Pick a random index before the current one
    let randomIndex = Math.floor(Math.random() * (i + 1));
    // Swap the elements at the current and random index
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

// Usage example
export const randomizedYoutubers = randomizeArray(Youtubers);
