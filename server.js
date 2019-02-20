const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use('/graphql', expressGraphQL({
  schema: schema,

  // Enable Graphiql Web UI.
  graphiql: true
}));

app.listen(4000, () => {
  console.log('GraphQL Server Started');
});
