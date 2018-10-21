---
layout: post
title:  "Parsing Json in Terminal"
date:   2018-10-20 00:00:00 -0500
categories: programming
---

I have a problem at work where I want to see how many retries one of our process is taking. Yroo logs each request to our backend, but it is mixed in with all the other logs from other processes.  Also, I would like to see it table with two columns, retry count and number of occurance in log

The specific log lines I am interested are partially in JSON like this:

{% highlight Bash %}
2018-10-18 18:48:53 +0000 severity=INFO, [BrowserExtension][ProductLookup] {"initial_scraped_data":{"price":{"currency":"CAD","current":"179.99"},"reviewsCount":"0","identifiers":{"mpn":"84978"},"country":"ca","hostURL":"https://www.canadiantire.ca/en/pdp/canvas-caleb-dinnerware-set-32-pc-1422781p.html#srp","retry":6,"extension_api":{"price":{"currency":"CAD","current":"179.99"},"reviewsCount":"0","identifiers":{"mpn":"84978"},"country":"ca","hostURL":"https://www.canadiantire.ca/en/pdp/canvas-caleb-dinnerware-set-32-pc-1422781p.html#srp","retry":6},"logger_uuid":"69ae6de1-4bc4-4b5a-b252-f03424c3cbc0"},"product":{"price":{"currency":"CAD","current":"179.99"},"reviewsCount":"0","identifiers":{"mpn":"84978"},"country":"ca","hostURL":"https://www.canadiantire.ca/en/pdp/canvas-caleb-dinnerware-set-32-pc-1422781p.html#srp","retry":6,"extension_api":{"price":{"currency":"CAD","current":"179.99"},"reviewsCount":"0","identifiers":{"mpn":"84978"},"country":"ca","hostURL":"https://www.canadiantire.ca/en/pdp/canvas-caleb-dinnerware-set-32-pc-1422781p.html#srp","retry":6},"logger_uuid":"69ae6de1-4bc4-4b5a-b252-f03424c3cbc0"},"lookups":{"combined":{}},"stats":{"name_found":false,"identifier_found":false,"ebay_product_found":false,"upc":null}}
{% endhighlight %}

First I have to lob off the non JSON part and filter out only ProductLookup logs.  I used this command to generate a new file with only such records

{% highlight Bash %}
cat input/Oct20/last24_rails.txt | grep ProductLookup | cut -d "{" -f 2- | awk '{print "{"$0 }' > input/Oct20/productlookup.json
{% endhighlight %}

This line does the following:
1) read out last24_rails.txt where all the logs of the day are saved
2) return lines with ProductLookup
3) return only lines after the first "{" character
4) append "{" that I chopped off previous
5) write to a new file called productlookup.json

Now that I have a json file, I am going to use [jq](https://stedolan.github.io/jq/) to parse the file

{% highlight Bash %}
jq input/Oct20/productlookup.json

jq: error: Oct20/0 is not defined at <top-level>, line 1:
input/Oct20/productlookup.json
jq: error: productlookup/0 is not defined at <top-level>, line 1:
input/Oct20/productlookup.json
jq: 2 compile errors
{% endhighlight %}

I got errors when I just tried parsing, turns out some of the log are truncated so the JSON is invalid

{% highlight Bash %}
cat input/Oct20/productlookup.json |  jq -R '. as $line | try fromjson catch $line | try .initial_scraped_data.retry catch null' | grep -v null | sort | uniq -c
{% endhighlight %}

Using the above line I am able to ignore broken json lines with jq -R option to read the line as text and using fromjson to parse it. Ignore all nulls, sort then using the uniq command to get the count.  The output is

{% highlight Bash %}
167 1
4   2
10  6
{% endhighlight %}

Which is exactly what I am looking for.
