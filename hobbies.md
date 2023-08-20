---
layout: page
permalink: /hobbies/index.html
title: Art Practice
---

# Hand Drawing

I like to try various painting tools. For example, sketch, colored pencils, watercolors, oil painting sticks and Procreate.

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/hobbies' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>
