// Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Function to return the last two drivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array containing both of the above functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function that returns a fare multiplier function
  const createFareMultiplier = function(multiplier) {
    return function(value) {
      return multiplier * value;
    };
  };
  
  // Doubler and tripler functions using the multiplier function
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  
  // Function to select different driver functions
  const selectDifferentDrivers = function(arrayOfDrivers, selectorFunction) {
    return selectorFunction(arrayOfDrivers);
  };
