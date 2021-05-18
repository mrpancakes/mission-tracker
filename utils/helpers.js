const Handlebars = require('handlebars');


module.exports = {
  genderChoice: (gender) => {

    if (gender === 'Male') {
      return `${'/images/man-agent.png'}`
    }
    else {

      return `${'/images/woman-agent.png'}`;
    }
  },

  statusColor: (status) => {

    if (status === 'Active') {
      return `${'green'}`
    }
    else {

      return `${'red'}`;
    }
  },

  genderChosen: (gender) => {

    if (gender === 'Male') {
      return `${'Male'}`
    }
    else {
      return `${'Female'}`;
    }
  },

  oppositeGender: (gender) => {
    if (gender === 'Male') {
      return `${'Female'}`
    }
    else {
      return `${'Male'}`;
    }
  },

  statusChosen: (status) => {

    if (status === 'Active') {
      return `${'Active'}`
    }
    else {
      return `${'Inactive'}`;
    }
  },

  oppositeStatus: (status) => {
    if (status === 'Active') {
      return `${'Inactive'}`
    }
    else {
      return `${'Active'}`;
    }
  },


};