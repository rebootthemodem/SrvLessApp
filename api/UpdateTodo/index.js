
const tableClient = require("../shared/tableClient");

module.exports = async function (context, req) {
    const id = req.query.id;
    const updated = req.body;

    await tableClient.updateEntity({
        partitionKey: "TODO",
        rowKey: id,
        title: updated.title,
        completed: updated.completed
    }, "Replace");

    context.res = { status: 200, body: { message: "Updated" } };
};
