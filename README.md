#### STRAPI MIDDLEWARE HEAD
Middleware to attach a head with server-side routing for the Strapi framework

* Once installed a "head" folder will be generated at the root of your Strapi project.
* You can scaffold your routes & controllers alike api or plugin routes & controllers.  
* Enable middleware via environment middleware configs, you may need to gen the middleware.json file.
  ```js
    // /config/environments/**/middleware.json
    {
      ...,
      "head": {
        "enabled" : true
      }
    }
  ```
