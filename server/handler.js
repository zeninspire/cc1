const knex = require('./database/database_setup')

module.exports.phase1 = (req,res) => {
  let { body } = req;
  let sequence = [];

  sequence.push(newFile(body))
  if (Array.isArray(body.tags)) {
    body.tags.map((tag) => {
      sequence.push(newTag(tag))
    })
  }
  // sequence.push(newTag(body.tag))

  Promise.all(sequence)
  .then((response)=> {
    console.log('done', response)
    // console.log(a, b, c);
    res.send('ok')
  })
  .catch((e)=> {
    console.error(e);
    res.send(e)
  })
  // newFile(body)
  // .then(() => knex('Files_Tags').insert({

  // }))
  // .catch(err => console.err(err));
}

// app.put('phase2', function(req, res){
//   let { body } = req;
//   knex('Files')
// })

let newFile = (body) => {
  return knex('Files').insert({
    description: body.description,
    extension: body.extension,
    other_data: body.other_data,
    phase1_complete: true
  })
}

let newTag = (tag) => {
  return knex('Tags').insert({
    tag_name: tag
  })
}

let newJunct = () => {

}
