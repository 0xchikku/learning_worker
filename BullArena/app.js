const express = require("express");
const Arena = require("bull-arena-extended");
const config = require("./config/default.json");
const Redis = require("ioredis");

const queueName = [
  "EmailQueue",
  "SMSQueue",
  "ReminderQueue"
];

const queues = [];

for (const queue of queueName) {
  queues.push({
    name: `{${queue}}`,
    hostId: config.hostId,
    prefix: config.prefix,
    createClient: () => new Redis.Cluster(config.redis.nodes, config.redis.options)
  });
}

const arena = Arena({ queues });
const app = express();
app.use('/', arena);

module.exports = app;