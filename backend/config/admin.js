module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e5e4f175ea8182093c26b4a42a39bb83'),
  },
});
