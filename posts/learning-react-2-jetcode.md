Hello,

After a nights work and a bit of today, I've got to a point where I can show my next React experiment. This time I've made a simple Leetcode clone. It just uses fake data for now, but maybe I'll hook it up to a backend too for fun. Gotta try and live that fullstack lifestyle I guess.

<iframe width="560" height="315" src="https://www.youtube.com/embed/9Euynk7XkLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

This project was partially inspired by Tavern, a hacakthon project I did with some friends a few years ago. Like this project, Tavern was a Leetcode style programming problem site. However, for Tavern I never did any of the coding editor stuff. So that's why I did this, because I wanted to figure out how you can execute testcases for a user's code and how that kind of data would be formatted.

## Features

- Problems are "stored" in a json format to be loaded into the editor.
- The user is able to enter javascript into the editor and have it highlighted.
- The user can enter custom testcases for the problem.
- The user can run their code against all testcases and see if it passes.

## Problem Format

This is how I ended up storing problems:

```javascript
{
  problemName : "Addition",
  description : "This is a very common problem. Where you add two numbers a and b together.",
  examples : [
    {
      input : "a = 1, b = 2",
      output : "3",
      explanation: "1 + 2 = 3"
    }
  ],

  tests : [
    {
      "input" : "[1, 2]",
      "expected" : 3,
    },

    {
      "input" : "[2, 2]",
      "expected" : 4,
    },

    {
      "input" : "[1, -1]",
      "expected" : 0,
    }
  ],

  driver : function(a, b) {

  }

}
```

I think this is the intuitive way to store a coding problem. Just some boilerplate stuff to get the programmer familiar with the problem, then an array of testcases. I did store the driver function as a property here too. This was so I could fill in the template code for the user dynamically. Though there may be a better way to do this. But this worked for me!

## Code Highlighting

For code highlighting I used Prism, which was a handy and easy code highlighting tool that just slotted right in with React. There isn't tons to say here except huge thanks to [this article](https://css-tricks.com/creating-an-editable-textarea-that-supports-syntax-highlighted-code/) which helped me a lot with this section. Though I did still need to figure some out myself too, so it's not "cheating"!

## Executing User Code

Well, the bad news is we are using eval clientside to evaluate user code. But given this is just a small hobby project I think I can be forgiven. Once I add a back end I will have to figure out how to stop users from pretending that they solved a problem I guess. I don't think that's a huge issue though as I'm sure people on Leetcode are already pasting in answers they find online to problems to boost their score. People will always find a way. As long as they don't crash/hack the site I'm happy!

The best way I figured out to do this was to store user code as a state in the main App.js component. Then I pass that down as a prop to child components who need it along with a callback method. It does feel like there should be a better way, but I'm not quite sure what that is yet. If anyone is reading this and knows then please fill me in!

## Was React Helpful Here?

Yes! I was able to keep my project quite organized and it felt like using a framework like React lead to this being a lot less messy than some erm...other projects of mine. As mentioned above, it was also really nice to just be able to npm install packages that I needed like Prism. This was a fun project and I feel like a learned a good amount. Though there's always more to learn!

---

You can find the project [here on GitHub](https://github.com/JetSimon/jet-code).