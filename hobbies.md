---
layout: page
permalink: /hobbies/index.html
title: Art Practice
---

# Art Practice

I like to try various painting tools. For example, sketch, colored pencils, watercolors, oil painting sticks and Procreate.

## Sketch

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/sketch' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>

## Water Color

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/watercolor' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>

## Color Pencil

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/colorpencil' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>


## Oil Pastel

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/oilpastel' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>


## ProCreate and PS

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/ps' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>

## Zbrush

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/zbrush' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>