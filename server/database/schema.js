//files table schema
module.exports.Files = (table) => {
  table.increments('file_id').primary();
  table.string('description');
  table.string('extension');
  table.string('other_data');
  table.timestamps();
  table.boolean('expired');
  table.boolean('phase1_complete');
  table.boolean('phase2_complete');
}

module.exports.Tags = (table) => {
  table.increments('tag_id').primary();
  table.string('tag_name').unique()
}

module.exports.Files_Tags = (table) => {
  table.increments();
  table.foreign('file_id', 'tag_id').references('Files.file_id', 'Tags.tag_id');
}
