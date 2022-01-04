module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8bce92e1752a68f2ba3b3a601d871678'),
  },
});
