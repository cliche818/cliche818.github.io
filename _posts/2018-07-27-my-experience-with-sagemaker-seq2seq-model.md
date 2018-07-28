---
layout: post
title:  "My Experience with SageMaker Seq2seq Model"
date:   2018-07-27 00:00:00 -0500
categories: programming
---

The example for seq2seq model with SageMaker is translating German to English [link] (https://github.com/awslabs/amazon-sagemaker-examples/tree/master/introduction_to_amazon_algorithms/seq2seq_translation_en-de).  I thought it might be a good fit for a problem at my current company, Yroo where we don't have categories for all our products.  My theory was I can use the product name and "translate" it into a product category.  I prepared a small data sample 7000 training data and 4000 validation data from Yroo's database.
  
  In short, while the resulting model wasn't usable in production (Bleu score: 0.2345).  It showed some promise in inferring a product category from a product name.

Here are my steps to create a model and use it with ruby code:

1) Prepare the training/validation data
----------------------------------------

SageMaker seq2seq model requires the data to be in protobuf format and several files:
- train.rec : Contains source and target sentences for training in protobuf format
- val.rec : Contains source and target sentences for validation in protobuf format
- vocab.src.json : Vocabulary mapping (string to int) for source language (product names in this example)
- vocab.trg.json : Vocabulary mapping (string to int) for target language (product categories in this example)

Luckily the German to English tranlation example provided a script to generate the above 4 files

I initially created 4 text files (2 files for training, 2 files for validation).  Each set had 2 files:

##### product.txt
###### Sony SRSX11 Ultra-Portable Bluetooth Speaker (Pink)
###### GameWear NFL Indianapolis Colts Classic Football Bracelet
###### ...

##### category.txt
###### audio
###### jewellery_accessories
###### ...

Each line in both files correspond to each other.

I generated the protobuf files with the following line (script provided by SageMaker example):

{% highlight Bash %}
python3 create_vocab_proto.py --train-source product_name.csv --train-target category.csv --val-source product_name_val.csv --val-target category_val.csv

{% endhighlight %}

2) Running the Jupyter Notebook
--------------------------------

I modified the SageMaker German to English Jupyter Notebook to point to my 4 files in s3.  The training only took 10 mins.

3) Using in Ruby
----------------

Below is my example method.

{% highlight Bash %}
def self.infer_category(product_name)
    data = {'instances' => [{
                                'data' => product_name
                            }
    ]}

    sage_maker = Aws::SageMakerRuntime::Client.new(
        region: '[REGION]',
        access_key_id: '[ACCESS_KEY]',
        secret_access_key: '[SECRET_KEY]'
    )
    resp = sage_maker.invoke_endpoint(
        endpoint_name: '[SAGEMAKER_SEQ2SEQ_ENDPOINT]',
        body: data.to_json,
        content_type: 'application/json'
    )

    JSON.parse(resp.body.string)
end

#SageMakerEndpointService.infer_category('StarTech Mini DisplayPort to DisplayPort M/M Adapter Cable')
#=> '{"predictions"=>[{"target"=>"computers_tablets"}]}'
{% endhighlight %}

Final Thoughts
--------------

With a much bigger data size (1 million+ records), it might be possible to get a much better model.

 
