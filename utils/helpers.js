module.exports = {
    genderChoice: (gender) => {

        let genderBinary;

      if(gender === 'Male'){
          genderBinary = true;
      } else {
          genderBinary = false;
      }
      return genderBinary;
    },
  };
  