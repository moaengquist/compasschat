
<script src="https://cdn.pubnub.com/sdk/javascript/pubnub.4.21.7.js"></script>

var pubnubDemo = new PubNub({
    publishKey: 'pub-c-e8b82b68-be44-415e-80f8-c41c67c39f6b',
    subscribeKey: 'sub-c-3148dabe-85fd-11ea-9e86-0adc820ce981'
 });

// Publish a simple message to the “demo_tutorial” channel pubnub:
pubnubDemo.publish({ message: { "color" : "blue" }, channel: 'demo_tutorial' });