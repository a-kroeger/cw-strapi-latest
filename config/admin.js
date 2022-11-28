module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'da4260f8917427cd6ead2febbb491c08'),
  },
});
