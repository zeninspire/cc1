var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./db.sqlite"
  },
  useNullAsDefault: true
});

var schema = require('./schema.js')

let Files = knex.schema.createTableIfNotExists('Files', schema.Files)
  // .then(function() {
  //   knex.select("*").from('Files').asCallback(function(err, val) {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       console.log('val', val);
  //     }
  //   })
  // })

let Tags = knex.schema.createTableIfNotExists('Tags', schema.Tags)

let Files_Tags = knex.schema.createTableIfNotExists('Files_Tags', schema.Tags)

Promise.all([Files, Tags, Files_Tags])
// .then(()=>knex.destroy())

module.exports = knex;
