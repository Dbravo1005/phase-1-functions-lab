function distanceFromHqInBlocks(byBlocks){
   const hq = 42;
    if (byBlocks > 42){
    return byBlocks - hq
} else {
    return hq - byBlocks;
    }
};

function distanceFromHqInFeet(byBlocks){
    const blocklength = 264;
    const distanceInBlocks = distanceFromHqInBlocks(byBlocks);
    const distanceInFeet = distanceInBlocks * blocklength;
    return distanceInFeet
}

function distanceTravelledInFeet(start, end) {
    const distanceInBlocks = Math.abs(start - end);
    return distanceInBlocks * 264;
  }

  function calculatesFarePrice(start, end) {
      const distance = distanceTravelledInFeet(start, end)
       let fare = 0;

      if (distance <= 400){
        return fare = 0;

      } else if (distance > 400 && distance <= 2000){
        return fare = 2.56;
      } else if ( distance > 2000 && distance <= 2500){
        return fare = 25;
      } 
        else (distance > 2500)
             return 'cannot travel that far'
    };




// console.log(byBlocks(43));
// console.log(byBlocks(50));
// console.log(byBlocks(34));