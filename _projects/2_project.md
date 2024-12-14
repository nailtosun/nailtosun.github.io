---
layout: page
title: Railgun
img: assets/img/3.jpg
importance: 2
description: Electromagnetic Design and Optimization of MJ-Scale Electromagnetic Launchers - Phase III-VI. Project Supported by Defense Industry, 2016 - 2024
category: work
---


Project consists of several phases of the [TUFAN](http://www.millisavunma.com/aselsan-tufan-elektromanyetik-top-sistemi/) railgun project in which MJ-scale prototype will be tested. Detailed 3D FEA models are developed to obtain electrical, mechanical force, and thermal characteristics of the railgun.

<iframe src="https://www.youtube.com/embed/m4jd8K6M92k" width="560" height="315" title="A YouTube video" frameborder="0" allowfullscreen></iframe>>
<iframe src="https://www.youtube.com/embed/58MmOpSm4LY" width="440" height="315" frameborder="0"></iframe>

The following are the main topics under this project:
* Finite Element Analysis 
* Multiphysics Simulations (Electromagnetic analysis coupled with thermal or structural analysis)
* Electrical Machine Design
* Pulse Power Supplies and Topologies

Some local news: 

* [Star Gazetesi](https://www.star.com.tr/savunma/muthis-basari-yerli-elektromanyetik-top-tufan-rekor-kirdi-haber-1499785/)
* [AA](https://www.aa.com.tr/tr/bilim-teknoloji/tufandan-namlu-cikis-enerjisi-rekoru/1670322)
* [Habertürk](https://www.haberturk.com/yazarlar/guntay-simsek-1019/1977989-aselsanin-sesten-6-kat-hizli-elektromanyetik-topu-tufan-teste-hazir)
* [Twitter](https://twitter.com/IsmailDemirSSB/status/1204663001065938945?s=08)


To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>



<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}
```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
```
{% endraw %}
