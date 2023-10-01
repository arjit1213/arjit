{
  "version": 2,
  "name": "native-server",
  "builds": [{ "src": "node umar.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "/server.js" }]
}
