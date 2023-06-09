import 'dotenv/config';

const app = {
	/*
   |--------------------------------------------------------------------------
   | Application Name
   |--------------------------------------------------------------------------
   |
   | This value is the name of your application. This value is used when the
   | framework needs to place the application's name in a notification or
   | any other location as required by the application or its packages.
   |
	*/
	name: process.env.APP_NAME || 'preposto-back',

	/*
  | Application Environment
  |--------------------------------------------------------------------------
  |
  | This value determines the "environment" your application is currently
  | running in. This may determine how you prefer to configure various
  | services the application utilizes. Set this in your ".env" file.
  |
   */
	env: process.env.APP_ENV || 'production',

	/*
   |--------------------------------------------------------------------------
   | Application Debug Mode
   |--------------------------------------------------------------------------
   |
   | When your application is in debug mode, detailed error messages with
   | stack traces will be shown on every error that occurs within your
   | application. If disabled, a simple generic error page is shown.
   |
	*/
	debug: process.env.APP_DEBUG || false,

	/*
  |--------------------------------------------------------------------------
  | Application URL
  |--------------------------------------------------------------------------
  |
  | This URL is used by the console to properly generate URLs when using
  | the Artisan command line tool. You should set this to the root of
  | your application so that it is used when running Artisan tasks.
  |
   */
	url: process.env.APP_URL || 'localhost',

	/*
  |--------------------------------------------------------------------------
  | Application PORT
  |--------------------------------------------------------------------------
  |
  | By default, the following ports are forwarded to your Homestead environment:
  |
   */
	port: process.env.APP_PORT || 3308,

	/*
 |--------------------------------------------------------------------------
 | Application Timezone
 |--------------------------------------------------------------------------
 |
 | Here you may specify the default timezone for your application, which
 | will be used by the date and date-time functions. We have gone
 | ahead and set this to a sensible default for you out of the box.
 |
  */
	timezone: 'America/Sao_Paulo',

	/*
  |--------------------------------------------------------------------------
  | Application Locale Configuration
  |--------------------------------------------------------------------------
  |
  | The application locale determines the default locale that will be used
  | by the translation service provider. You are free to set this value
  | to any of the locales which will be supported by the application.
  |
   */
	locale: process.env.APP_LOCALE || 'pt-br',
};

export default app;
