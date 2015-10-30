twitter-proxy
=============

Twitter REST API v1.1 simple proxy for your Front-end apps (Backbone, Ember, Angular, etc.)

Why?
----

Currently there's no way to use Twitter's REST API v1.1 from pure [JavaScript][1] because of [CORS][2] restrictions.
The *simplest*, *safest* way is to use a **server-side** proxy like this one.

Instructions
------------

  1. **Clone the repo**:
  ```bash
  git clone https://github.com/proudlygeek/twitter-proxy.git
  ```

  2. **Install npm dependencies**:
    ```bash
    npm install
    ```

  3. **Rename *settings.json.defaults* to *settings.json* and put your keys inside it**:
    ```bash
    mv settings.json.defaults settings.json
    ```

  4. **Run the node app and you're set ;)**:
    ```bash
    node app.js
    ```

Examples
--------

### Twitter Search ###

    curl http://localhost:8080/search/iPhone?count=10


[1]: https://dev.twitter.com/discussions/1291
[2]: https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS
