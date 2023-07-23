---
layout: page
permalink: /hobbies/index.html
title: Hobbies
---

# Hobbies

I like to try various painting tools. For example, sketch, colored pencils, watercolors, oil painting sticks and Procreate.

<div class="third">
{% for image in site.static_files %}
    {% if image.path contains 'images/hobbies' %}
        <img src="{{ site.baseurl }}{{ image.path }}" >
    {% endif %}
{% endfor %}
</div>




<div class="third">
<img src="/images/hobbies/elf.jpg" >
<img src="/images/hobbies/lotus.jpg">
<img src="/images/hobbies/twogirls.jpg">
</div>

<div class="third">
<img src="/images/hobbies/girl.jpg" >
<img src="/images/hobbies/car.jpg">
</div>

---
## Others

<div class="third">
<img src="/images/hobbies/bass.jpg" >
<img src="/images/hobbies/medals.jpg">
<img src="/images/hobbies/man.jpg">
</div>