module.exports = {
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application.
          source: '/:path*',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: 'https://starliner21-venum.myshopify.com',
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET'
            }
          ],
        },
      ];
    },
  };
  