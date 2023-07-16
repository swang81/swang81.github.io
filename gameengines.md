---
layout: page
permalink: /gameengines/index.html
title: Game Engines
---

# Game Engines

<br>

## PBR Workflow

![](images/ge/pbrgun1.jpg)
![](images/ge/pbrgun2.jpg)

<br>Here I use the DCC (digtal content creation) tools to model and render a wasteland style gun based on very popular PBR workflow. 

1. **Modeling:** Use 3D Max to build the low model and use Zbrush to setup high model(with details). Make sure they are aligned.
2. **UV Editing:** Use  3D Max UV tool or RizomUV to unfold low FBX UV.  
3. **Baking:** Import low and high FBX models into Mamoset Toolbag 4 (MT4) and bake the AO, Normal, ID textures. Sometimes use Photoshop to adjust the brightness of AO. MT4 is very useful for Normal baking because its normal brush function is very convenient for some special edges. Input these textures and simple FBX to substance painter(SP).  Bake the rest textures (world space normal, Curvature, position and thickness) in SP. 
4. **Texturing:** Use SP to draw PBR texture. 
5. **Rendering:** In MT4, load all textures and low FBX, place the lights, adjust the camera angle and render the gun. 

## Unity Shader

This is my stylized rendering collections. You can get them from Github in future.



## UE FPS

<iframe src="//player.bilibili.com/player.html?bvid=BV1bP411k7mN&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## UE VR Laser Sword


<iframe src="//player.bilibili.com/player.html?bvid=BV1Q94y1B7RT&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

<br>
Here we use Oculus Quest 2 + VDS(Virtual Desktop Streamer) + UE4 to build a VR Laser sword demo game.  All logic are base on blueprint. All renderings are done by the host and transmitted through VDS.

## Stylized Material with SD
This is a demonstration of the results of the  SD stylized Material practice. Various elements will be added later. 
![](images/ge/sd1.jpg)
![](images/ge/sd2.jpg)








