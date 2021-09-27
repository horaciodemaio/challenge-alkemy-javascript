// const {Diet} = require("./src/db");
// const axios = require("axios");
// const {ArrayDietas} = require("./contents")
const {
  API_KEY
} = process.env;
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// const {v4: UUIDV4} = require("uuid");

// Syncing all the models at once.
conn.sync({ force: true })
.then(() => {
  // console.log("sincroniza");
  
  // const Dietas = ArrayDietas.map((d) => {
  //   return {
  //     name: d.name,
  //   }
  // });
  // Diet.bulkCreate(Dietas).then(console.log("me cargaron los datos en la tabla de dietas"))
  
  
  // const DietDB = await Diet.findOrCreate({
  //   where:{
      
  //   }
  // })

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
