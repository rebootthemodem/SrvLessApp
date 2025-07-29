const tableClient = require("../shared/tableClient");

module.exports = async function (context, req) {
    const todos = [];
    for await (const entity of tableClient.listEntities()) {
        todos.push(entity);
    }

    context.res = {
        status: 200,
        body: todos
    };
};
