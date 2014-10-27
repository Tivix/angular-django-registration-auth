AngularJS Module for [Django REST Auth](https://github.com/Tivix/django-rest-auth)
==================================================================================

To setup this module as a boilerplate project...
------------------------------------------------

First, clone the repository.
`git clone git@github.com:Tivix/angular-django-registration-auth.git`

Change your directory to the cloned project.
`cd angular-django-registration-auth`

Then install the project prerequisites.
`npm install; bower install;`

In app/scripts/services/djangoAuth.js, customize API_URL and use_session to meet your project's requirements.

To integrate this module into an existing project...
----------------------------------------------------

First, clone the repository.
`git clone git@github.com:Tivix/angular-django-registration-auth.git`

The contents of the app/scripts folder can be copied to your own project.  Exclude controllers and app.js if you do not intend to use the default views/routes. (This will provide API access from the djangoAuth module only.)

Please note: you will need to include dependencies from bower.json to support the default views/controllers.  They require bootstrap and its dependencies to function correctly.

If you intend to use the default views/routes, please also copy the contents of app/views to your own views folder.

Inject the angularDjangoRegistrationAuthApp into your own module.

Inject the djangoAuth service into any controllers which you need programmatic access to Django REST Auth.

In app/scripts/services/djangoAuth.js, customize API_URL and use_session to meet your project's requirements.
Alternatively, you can change these settings from a controller by changing the djangoAuth.API_URL and djangoAuth.use_session variables.

Todo
----

Add support for JWT (JSON web tokens)

Better support for Bower and Grunt

Pick a better name for the module :\
