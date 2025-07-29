const tableClient = require("../shared/tableClient");

module.exports = async function (context, req) {
    const id = req.query.id;

    await tableClient.deleteEntity("TODO", id);

    context.res = { status: 200, body: { message: "Deleted" } };
};
