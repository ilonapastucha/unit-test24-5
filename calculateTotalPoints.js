const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);

  if (distancePoints === null) {
    console.log('Zły hill size, nie można wykonać obliczeń');
    return null;
  }

  const stylePoints = calculateStylePoints(styleNotes);

  return (distancePoints + stylePoints + windFactor + gateFactor).toFixed(1);
}

module.exports = calculateTotalPoints;