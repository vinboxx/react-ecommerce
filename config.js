const config = {

  homepage: 'http://localhost:3000/',

  // Web analytics settings
  analytics: {
    google: { trackingID: 'UA-XXXXX-Y' },
  },

  // Deployment settings
  deployment: {
    repository: 'ssh://git@stash.webon.net:7999/~weera/react-ecommerce.git',
    branch: 'master',
  },

};

module.exports = config;
