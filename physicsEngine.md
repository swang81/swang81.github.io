---
layout: page
permalink: /physicsEngine/index.html
---

<div class="lang-zh" markdown="1">

## 2D 刚体物理引擎

我开发了一款受 Box2D 启发的自定义 2D 刚体物理引擎，注重物理建模的清晰性与数值稳定性。引擎实现了带线性和角运动的刚体动力学、基于冲量的碰撞解析，以及迭代约束求解。核心功能包括：宽相和窄相碰撞检测、接触流形、恢复系数与摩擦力建模，以及由拉格朗日乘子推导出的序列冲量（Gauss–Seidel）求解器。**Impulse** 2D 物理引擎的技术笔记请见[此处](https://swang81.github.io/DevNotes/)。

<div align="left">
	<img src="/images/prEngine/Impulse2D.webp">
</div>

 您可以点击[此链接](https://swang81.github.io/Impuse2DWebDemo/)直接在浏览器中运行 **Impulse 2D Demo**。

---

## 水滴动画曲面模型

<div align="left">
	<img src="/images/prEngine/droplet.webp">
</div>

<iframe src="//player.bilibili.com/player.html?bvid=BV1rV4y1b7WJ&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

<br>
作为博士后研究员，我们提出了一种可变形曲面模型，用于模拟水滴在不同固体表面上的流动行为。在拉格朗日坐标系下，每个时间步利用隐式曲率流算子模拟水的表面张力，利用接触角算子改变水滴在固体表面的形状，并对网格拓扑结构进行优化以提高网格鲁棒性。通过一系列数值实验证明，该方法可以实现实时渲染。成果已发表于 IEEE。

---

## 自旋转移力矩的第一性原理模拟

<br>
近年来，磁性隧道系统和磁畴壁动力学实验需要完整的量子力学描述。我们采用第一性原理量子输运方法，研究具有非共线磁化方向的层状磁性系统中的自旋转移力矩（STT）。通过将散射区域中的波函数与引线中的布洛赫态相匹配来求解开放系统的散射问题，并基于所得散射波函数从自旋相关电子态中评估自旋转移力矩。本工作为模拟纳米级磁性系统中电流诱导力矩提供了具有物理基础的高效框架。
[[pdf](./mypaper/thesis/wangshuaiphd.pdf)]

---

## 体渲染引擎

<div align="left">
	<img src="/images/prEngine/volumerendering.webp">
</div>

<br>
带领团队基于 OpenGL/HLSL 开发核心算法（光线投射），并对算法进行优化，满足医学影像数据实时三维渲染及分割、隐藏、分组等复杂交互操作的需求。

---

## 医学图像中的 VR/AR/3D 打印应用

<div align="left">
	<img src="/images/prEngine/vrar3dprinting.webp">
</div>

<br>
带领团队开发了多款基于 VR/AR 和 3D 打印技术的有趣产品原型，在 CMEF 展览会上展出并受到众多媒体报道和关注。这些产品能够渲染真实医学影像数据，为手术规划提供有效支撑。

---

## 医学后处理算法

<div align="left">
	<img src="/images/prEngine/algorithm.webp">
</div>

<br>
开发结肠分割算法、结肠中心线提取算法及结肠息肉 CAD 诊断算法；基于 OpenGL（HLSL）实现神经纤维和 MR 脑图像可视化；使用 Intel IPP 技术进行加速。算法已集成至产品中，拥有 10 余项相关专利。

</div>

<div class="lang-en" markdown="1">

## 2D Rigid Body Physics Engine

I developed a custom 2D rigid body physics engine inspired by Box2D, focusing on clarity of physical modeling and numerical stability. The engine implements rigid body dynamics with linear and angular motion, impulse-based collision resolution, and iterative constraint solving. Core features include broad-phase and narrow-phase collision detection, contact manifolds, restitution and friction modeling, and a Sequential Impulse (Gauss–Seidel) solver derived from Lagrange multiplier formulations.The notes for the **Impulse** 2D physics engine are available [here](https://swang81.github.io/DevNotes/).

<div align="left">
	<img src="/images/prEngine/Impulse2D.webp">
</div>

 You can run the **Impulse 2D Demo** directly in your browser by clicking [this link.](https://swang81.github.io/Impuse2DWebDemo/)

---

##  Surface Model for Water Drop Animation

<div align="left">
	<img src="/images/prEngine/droplet.webp">
</div>

<iframe src="//player.bilibili.com/player.html?bvid=BV1rV4y1b7WJ&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

<br>
As a postdoctoral researcher, we proposed a deformable surface model to simulate the flow behavior of water droplets on different solid surfaces. In the Lagrangian coordinate system, at each time step, the implicit curvature flow operator is used to simulate the surface tension of water, the contact angle operator is used to change the shape of water droplets on the solid surface, and the topological structure of the mesh is optimized to improve the robustness of the mesh. Through a series of numerical experiments, it is proved that real-time rendering can be achieved.  It was published in IEEE.

---

## First-principles simulation of spin-transfer torques

<br>
Recent experiments on magnetic tunneling systems and domain-wall dynamics require a full quantum-mechanical description. We study spin-transfer torques (STTs) in layered magnetic systems with noncollinear magnetization using a first-principles quantum transport approach.

The scattering problem of the open system is solved by matching the wave function in the scattering region with Bloch states in the leads. Based on the resulting scattering wave function, spin-transfer torques are evaluated from the spin-dependent electronic states.

This work provides a physically grounded and efficient framework for simulating current-induced torques in nanoscale magnetic systems.
[[pdf](./mypaper/thesis/wangshuaiphd.pdf)]

---

## Volume Rendering Engine

<div align="left">
	<img src="/images/prEngine/volumerendering.webp">
</div>

<br>
Lead the team to develop the core algorithm( Ray-Casting) based on OpenGL/HLSL and optimize the algorithm to meet the requirements of real-time 3D rendering of medical image data and various complex interactive operations , such as splitting, hiding, group,etc.

---

## VR/AR/3D printing in Medical Image Application

<div align="left">
	<img src="/images/prEngine/vrar3dprinting.webp">
</div>

<br>
Lead the team to develop many interesting product prototypes, which is based on VR/AR and 3D printing techniques.  They were  exhibited at the CMEF exhibition and were reported and noticed by the many medias. It can render real medical image data and provide effective supporting for surgical planning.

---

## Medical Post-Processing Algorithm

<div align="left">
	<img src="/images/prEngine/algorithm.webp">
</div>

<br>
Develop colon segmentation algorithms, colon centerline extraction, and colon polyp CAD diagnosis algorithms. Visualize the neuro fibers and MR brain Images based on OpenGL(HLSL). Intel IPP technology is used for acceleration. Algorithms have been integrated into the products. It has more than 10 related patents.

</div>
