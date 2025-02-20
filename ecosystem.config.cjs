module.exports = {
    apps: [
      {
        name: 'echotech',
        script: 'build/index.js',
        env: {
          NODE_ENV: 'production'
        }
      }
    ]
  };