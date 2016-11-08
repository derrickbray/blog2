'use strict'

const Schema = use('Schema')

class PostsTableSchema extends Schema {

  up () {
    this.create('posts', (table) => {
      table.increments()
      table.timestamps()

      //connect to our users table
      table.integer('user_id');

      //fields to store data for a single post
      table.string('slug');
      table.string('title');
      table.date('posted_at');
      table.text('content');
    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostsTableSchema
