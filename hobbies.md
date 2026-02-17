---
layout: page
permalink: /hobbies/index.html
title: Art Practice
---

<div class="lang-zh" markdown="1">

# 艺术实践

## 游戏开发 3D 建模

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/3dmodeling' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>

</div>

<div class="lang-en" markdown="1">

# Art Practice

## 3D Modeling for Game Development

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/3dmodeling' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>

</div>
---
