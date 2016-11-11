let axios = require('axios');

module.exports = {

  readApi: function(req, res) {
    axios.get('https://nuvi-challenge.herokuapp.com/activities')
    .then(function(response){
      let basicInfo = [];
      for(var i = 0; i < response.data.length; i++){
        basicInfo.push({
          id: response.data[i].id,
          name: response.data[i].actor_name,
          content: response.data[i].activity_message,
          date: response.data[i].activity_date,
          provider: response.data[i].provider
          })
      }
      let string = JSON.stringify(basicInfo)
       res.send(string);
     })
  },

   getIdInfo: function(req, res){
   }

}
