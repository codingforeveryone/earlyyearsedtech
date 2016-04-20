Integrating with WeChat's API
=============================

[WeChat](http://wechat.com/) is a messaging & calling app with over 300 million users. Their [API](http://dev.wechat.com/wechatapi) allows you to integrate sharing via WeChat message and [WeChat Moments](http://www.wechat.com/en/features.html#moments) into your app so your users can easily share the content (whether it's text, images, videos, links, music) with others via WeChat.

Installing the SDK
------------------

WeChat provides iOS and Android SDKs – installing them is pretty simple, and you can find all the instructions [here](http://dev.wechat.com/wechatapi/installguide).

Using the API
-------------

To share any rich media from your application to WeChat, you'll need to:
  - Import & add the `WXApiDelegate` protocol
  - Create an instance of `WXMediaMessage` – the content to share
  - Send this `WXMediaMessage` via the API using `SendMessageToWXReq` with `WXSceneSession` for messages and `WXSceneTimeline` for moments

Don't worry about the details – all you need is the code snippets hyperlinked below which can be retrieved via the [Stepsize](http://stepsize.com/) app (currently iOS only):
  - [Import statements](https://gist.github.com/devStepsize/aba5498b3c760582b48bea41300ecf68) – search for `wechat import ios`
  - [Image](https://gist.github.com/devStepsize/43098ffc5ae71790301c10344adcf632) – search for `wechat image ios`
  - [Music](https://gist.github.com/devStepsize/fafbdca599972bb60cf099ca26d4d3ef) – search for `wechat music ios`
  - [Video](https://gist.github.com/devStepsize/ff4610de88c819e5eeb86ce3233a4e1a) – search for `wechat video ios`
  - [Link](https://gist.github.com/devStepsize/b8d7052abd85051f1831878027724aed) – search for `wechat link ios`
  - [Text](https://gist.github.com/devStepsize/682a6c18a908667c9cc135b8a62e6f94) – search for `wechat text ios`

Here's what this looks like in the [Stepsize](http://stepsize.com/) app:

![stepsize-app](http://i.imgur.com/r8Y0rsc.gif)
![stepsize-app](http://i.imgur.com/h558ura.gif)

More details on how to use the API can be found [here](http://dev.wechat.com/wechatapi/messages-moments).

API Documentation
-----------------

Details on the classes & properties of the WeChat API can be found [here](http://dev.wechat.com/wechatapi/documentation).

Note: All this content will be made available via the [Stepsize](http://stepsize.com/) app as well as soon as we support markdown. If this is something you care about, please let us know by dropping us a line at [support@stepsize.com](mailto:support@stepsize.com).

Downloading [Stepsize](http://stepsize.com/)
--------------------------------------------

The [Stepsize](http://stepsize.com/) app is currently in beta and the functionality to select & download code snippet bundles (such as this one) has not been implemented yet.

If you'd like access to this content, email [support@stepsize.com](mailto:support@stepsize.com) with your GitHub username (the app requires logging in with GitHub), and the grant you access to the content within 12 hours.
