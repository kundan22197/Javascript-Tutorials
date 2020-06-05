function getSleepHours(day) {
    switch(day) {
      case 'monday':
        return 6;
        break;
      case 'tuesday':
        return 5;
        break;
      case 'wednesday':
        return 7;
        break;
      case 'thursday':
        return 6;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 7;
        break;
      case 'sunday':
        return 8;
        break;
    }
  }
  
  function getActualSleepHours() {
    var sum = 0;
    sum += getSleepHours('monday');
    sum += getSleepHours('tuesday');
    sum += getSleepHours('wednesday');
    sum += getSleepHours('thursday');
    sum += getSleepHours('friday');
    sum += getSleepHours('saturday');
    sum += getSleepHours('sunday');
    return sum;
  }
  
  
  function getIdealSleepHours() {
    var idealHours = 7;
    return idealHours * 7;
  }
  
  function calculateSleepDebt() {
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log('You have got ideal hours of sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You have ${actualSleepHours - idealSleepHours} hours more sleep than needed`);
    } else {
      console.log(`You should sleep for ${idealSleepHours - actualSleepHours} more hours this week`);
    }
  }
  
  calculateSleepDebt();
  
  