const tableClient = require("../shared/tableClient");
const { v4: uuidv4 } = require("uuid");

module.exports = async function (context, req) {
    const todo = {
        partitionKey: "TODO",
        rowKey: uuidv4(),
        title: req.body.title || "Untitled",
        completed: false
    };

    await tableClient.createEntity(todo);

    context.res = {
        status: 201,
        body: todo
    };
};
