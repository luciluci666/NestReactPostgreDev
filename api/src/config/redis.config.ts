import Redis from 'ioredis';

new Redis({
  port: +process.env.REDIS_HOST, // Redis port
  host: process.env.REDIS_PORT, // Redis host
  //   username: 'default', // needs Redis >= 6
  //   password: 'my-top-secret',
  //   db: 0, // Defaults to 0
});
