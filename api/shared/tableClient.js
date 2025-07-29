const { TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");

const accountName = process.env.AZURE_STORAGE_ACCOUNT || "";
const accountKey = process.env.AZURE_STORAGE_KEY || "";
const tableName = process.env.TableName || "TodoTable";

const credential = new AzureNamedKeyCredential(accountName, accountKey);
const client = new TableClient(`https://${accountName}.table.core.windows.net`, tableName, credential);

module.exports = client;
