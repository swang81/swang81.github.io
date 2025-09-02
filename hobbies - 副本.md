---
layout: page
permalink: /hobbies/index.html
title: Art Practice
---

# Art Practice

Practicing hand-drawing can enhance the aesthetic appreciation of games and create more diverse game art styles. Therefore, I try various painting tools to import my abilities. For example, 3D modeling tools, sketch, colored pencils, watercolors, oil painting sticks and Procreate.

## Sketch

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/sketch' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>
---

## Water Color

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/watercolor' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>
---

## Color Pencil

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/colorpencil' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>
---

## Oil Pastel

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/oilpastel' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>
---

## Procreate / Photoshop

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/ps' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>

---

## 3D Modeling for Game Development

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/3dmodeling' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>
---