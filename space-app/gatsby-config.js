module.exports = {
  siteMetadata: {
    title: `JJ Design Space`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-113867348-1"
    }
  }, "gatsby-plugin-react-helmet"]
};