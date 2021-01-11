# Cookieschleuder
A simple Chrome/Chromium extension that will catapult (http-put) the value of one single cookie to a localhost http endpoint.

In a situation where you need to analyze or use one of your cookies within another local service on your client, this extension could be helpful. It allows you to forward the value of any cookie to an arbitrary HTTP service at your localhost (127.0.0.1). Therefore this extension will allow you to persistently configure in its extension options a desired cookie name and the required TCP port , at which your localhost service is listening. Any change on that cookie will automatically and instantly be put to the localhost service.

A common use case for example would be, where you want to automatically share a cookie from your browser with one of your local Docker containers. In this way, your docker container could analyze or apply that (always-update) cookie value for a bunch of imaginable reasons.

## Options
![Alt text](images/screenshot.png?raw=true "Screenshot")

## Settings
![Alt text](images/settings.png?raw=true "Settings")
