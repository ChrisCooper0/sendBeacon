Example `Express.js` app using the `sendBeacon` API to ensure analytics events are captured when the user navigates away from one page to another.

```
The navigator.sendBeacon() method asynchronously sends an HTTP POST request containing a small amount of data to a web server.

It's intended to be used for sending analytics data to a web server, and avoids some of the problems with legacy techniques for sending analytics, such as the use of XMLHttpRequest.
```

See: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon