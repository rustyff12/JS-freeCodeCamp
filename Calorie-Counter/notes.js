// for loop to regex

function cleanInputString(str) {
    // const strArray = str.split('');
    // const cleanStrArray = [];
  
    // for (let i = 0; i < strArray.length; i++) {
    //   if (!["+", "-", " "].includes(strArray[i])) {
    //     cleanStrArray.push(strArray[i])
    //   }
    // }
    // Need to escape the + in regex as it has a special meaning
    // g means golbal
    const regex = /[+-\s]/g;
    return str.replace(regex, "")
  }