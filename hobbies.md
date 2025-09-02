---
layout: page
permalink: /hobbies/index.html
title: Art Practice
---

# Art Practice

## 3D Modeling for Game Development

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/3dmodeling' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>
---