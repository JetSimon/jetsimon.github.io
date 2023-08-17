Hello,

In an attempt to diversify my knowledge I've decided to learn React. I have some knowledge of Vue 2 already, as this site is written using it. However, I have barely used React aside from a tiny bit while participating in hackathons. Though that was in the context of working in a team, and all I needed to make were small adjustments.

After following an [excellent tutorial by Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started) I decided to make my first project on my own yesterday.

I ended up making a small online keyboard app using React + [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API). It isn't the prettiest but it was good to learn how to make something on my own.

<iframe width="560" height="315" src="https://www.youtube.com/embed/z3DBrFUJagE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

The original idea for this project was to maybe try and make a modular synth simulator. But then I realized I actually have get this thing done and not get lost in the proverbial sauce. From there I found Web Audio API. Web Audio API actually works similar to a modular synth in someway, where you chain together different nodes until you make noise.

## How the Synth Works

This synth uses three Web Audio API nodes:

1. An oscillator node that is used to create the wave that is turned into sound. But it would keep playing forever -- and get extremely annoying -- if not for...
2. The gain node. This bad boy allows us to control the volume on oscillator nodes. For example when the key is pressed and unpressed we smoothly transition the gain to near zero. This results in a smooth cut off that is pleasant to the ear. But what good is a music without...
3. The convolution (reverb) node! Did you know that digital reverb is used by convoluting (fancy math way of combining signals) two audio signals together? I didn't but now I do and that's super cool! You just take a sample of a reverby sound and use Web Audio API to convolute it with your synth sound and WHAM, you sound like you're in a large church or perhaps an endless cave.

These three nodes are chained in sequence and you get the final sound. Each key uses a new sequence where the oscillator is tuned to a different frequency to make it sound right. For example A is 440Hz. I just found those by looking on Wikipedia.

## What I Learned About React

Where React came in handy here was allowing me to make each key of the synth a different component. Where the props of the component are the frequency and the keyboard key the user presses to activate it. I really enjoyed working with React and JSX especially. I will definitely try and make more projects and post about them.

---

You can find the project [here on GitHub](https://github.com/JetSimon/synth-site) if you want to see any of the code. It's pretty simple and could be done better, but it works!