---
layout: post
title:  "Update on SageMaker Seq2seq Model"
date:   2018-09-21 00:00:00 -0500
categories: programming
---

I managed to train a model with a bigger dataset (4,592,666 records).  It took SageMaker approximately 5 hours to train on a ml.p2.xlarge instance.  In the end, the results are disappointing, it's actually has a BLU score of 0 which meant it was even worse than the model I trained with only 11, 000 records.  

{% highlight Bash %}
Some of the outputs of the new model:
pry(main)> SageMakerEndpointService.infer_category('Apple 13.3" MacBook Air')
=> {"predictions"=>[{"target"=>"computers_tablets"}]}
[2] pry(main)> SageMakerEndpointService.infer_category('Ray-Ban Justin RB4165 Unisex Classic Sunglasses')
=> {"predictions"=>[{"target"=>"jewellery_accessories"}]}
[3] pry(main)> SageMakerEndpointService.infer_category('All-new Echo Dot (3rd Gen) - Smart speaker with Alexa - Heather Gray')
=> {"predictions"=>[{"target"=>"audio"}]}
[4] pry(main)> SageMakerEndpointService.infer_category('Shark Rotator TruePet Upright Corded Bagless Vacuum for Carpet and Hard Floor with Powered Lift-Away Hand Vacuum and Anti-Allergy Seal (NV752), Bordeaux')
=> {"predictions"=>[{"target"=>"appliances"}]}
[5] pry(main)> SageMakerEndpointService.infer_category('O-Cedar Angler Angle Broom With Dust Pan')
=> {"predictions"=>[{"target"=>"home_housewares"}]} 
{% endhighlight %}

These ones are good, but then I get results like below:

{% highlight Bash %}
[14] pry(main)> SageMakerEndpointService.infer_category('UGET Women\'s Sweater Casual Oversized Baggy Off-Shoulder Shirts Batwing Sleeve Pullover Shirts Tops')
=> {"predictions"=>[{"target"=>"health_fitness"}]}
[15] pry(main)> SageMakerEndpointService.infer_category('JayJay Women Boho High Low Casual Maxi U-Neck Short Sleeve Tie Dye Print Long Dress with Pocket')
=> {"predictions"=>[{"target"=>"health_fitness"}]}
[16] pry(main)> SageMakerEndpointService.infer_category('RockJam RJEG02-SK-SB Electric guitar Starter Kit - Includes Amp, Lessons, Strap, Gig Bag, Picks, Whammy, Lead and Spare Strings. - Sunburst')
=> {"predictions"=>[{"target"=>"home_housewares"}]}
[17] pry(main)> SageMakerEndpointService.infer_category('Fender F Neckplate Chrome')
=> {"predictions"=>[{"target"=>"health_fitness"}]}
[18] pry(main)> SageMakerEndpointService.infer_category('Gevalia Colombia Coffee, K-CUP Pods, 100 Count')
{% endhighlight %}

These ones are really off.  I am surprised to not see any men or women categories show up.  They seem to all appear in health_fitness.

The main problem I saw was alot of products had multiple categories like men's cloths belonged in both health fitness and men's categories.  My training data had to do to a one to one mapping and that gave conflicting information.  I also noticed quite a few of my data points were outright wrong.

Overall, it was interesting to try even though the results were not great.
