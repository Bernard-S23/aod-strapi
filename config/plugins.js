module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: env("EMAIL_PROVIDER"),
      providerOptions: {
        apiKey: env("MAILGUN_API_KEY"),
        // domain: env("MAILGUN_DOMAIN"), //Required if you have an account with multiple domains
        // host: env("MAILGUN_HOST", "api.mailgun.net"), //Optional. If domain region is Europe use 'api.eu.mailgun.net'
      },
      settings: {
        defaultFrom: "myemail@protonmail.com",
        defaultReplyTo: "myemail@protonmail.com",
      },
    },
  },
  // ...
});
