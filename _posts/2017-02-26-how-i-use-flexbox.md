---
layout: post
title:  "How I Use Flexbox"
date:   2017-02-26 15:38:00 -0500
categories: programming
---

Display Flex is a css style that is used to position stacks of elements horizontally or vertically.  
I use the following for centering text inside a div, which is usually to make it look like a button.

{% highlight css %}
display: flex
align-items: center;
justify-content: center;
{% endhighlight %}

The alternative I have been using before flexbox for a 50px height div and a p tag for text.  I would use:

{% highlight css %}
text-align: center:
padding-top: 14px;
{% endhighlight %}

This involves some trial and error, if the height of the button/font size changes, the padding-top won't work anymore.

jsFiddle: https://jsfiddle.net/w2pybzad

For lining up elements side by side, I usually stick with display: inline-block and a width.  I find it easier to understand
with than providing a grow/shrink/basis for flexbox. 
