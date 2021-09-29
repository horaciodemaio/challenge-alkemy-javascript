const {Type, Register} = require("./src/db");
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { ArrayTypes, ArrayRegister } = require("./contents")

conn.sync({ force: true })
.then(() => {
  
  const Types = ArrayTypes.map((d) => {
    return {
      name: d.name,
    }
  });
  Type.bulkCreate(Types).then(console.log("me cargaron los datos en la tabla de Types"))
  Register.bulkCreate(ArrayRegister).then(console.log("me cargaron los datos en la tabla de Register"))
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
