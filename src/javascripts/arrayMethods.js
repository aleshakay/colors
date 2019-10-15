import c from './helpers/data/colors';

const colors = c.getColors();
// forEach Functions
const forEachFunc = () => {
  for (let i = 0; i < colors.length; i += 1) {
    console.log('for', colors[i].name);
  }
  colors.forEach((color) => console.log('forEach', color.name));
};

// Filter filter method on array
const filterFunc = () => {
  const newColors = [];
  for (let j = 0; j < colors.length; j += 1) {
    if (colors[j].hexValue[0] === 'F') {
      newColors.push(colors[j]);
    }
  }
  console.log('for', newColors);
  const filterColors = colors.filter((x) => x.hexValue[0] === 'F');
  console.log('filter', filterColors);
};

// finds one thing
// filter finds many things
const findFunc = () => {
  let colorToFind = {};
  for (let f = 0; f < colors.length; f += 1) {
    if (colors[f].name === 'green') {
      colorToFind = colors[f];
    }
  }
  console.log(colorToFind.hexValue);
  const colorFind = colors.find((x) => x.name === 'green');
  console.log('find', colorFind.hexValue);
};


// reduce used to add up a bunch of number in an array

const reduceFunc = () => {
// total number of upvotes
  let total = 0;
  for (let m = 0; m < colors.length; m += 1) {
    total += colors[m].upVotes;
  }
  console.log('for', total);
  const upVoteTotal = colors.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.log('reduce', upVoteTotal);
};


const init = () => {
  forEachFunc();
  filterFunc();
  findFunc();
  reduceFunc();
};

export default { init };
