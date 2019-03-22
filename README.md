# Flask Base

This project is an example of a hybrid web application. It combines aspects of server side rendering and client side rendering. Further, this application integrates webpack to allow browser reloading while developing assets for each page. Requests to the backend server are proxied through webpack-dev-server for this setup. Flask blueprints are used to isolate features within the application. Each feature can consist of its own SQLAlchemy models, flask routes, marshmallow schemas, rest-api resources and javascript/css assets. Static assets can be served directly by webpack-dev-server or all built into a single static folder served by flask(Gunicorn & Nginx are used in production). Data requests sent to the application can follow either more basic patterns found in flask or via a RestAPI built into the application using Flask-Restful. Pytest is used for both unit tests and functional tests. The application itself has been dockerized for both development and production environments. To add a data-analysis spin to the project and to allow assessment of models/data with python pandas, Ipython has been integrated as a flask command.

* WEBPACK_PORT
* WEBPACK_HOST
* WEBPACK_PUBILC_URL
