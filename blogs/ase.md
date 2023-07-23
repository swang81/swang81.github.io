---
layout: page
permalink: /blogs/ase/index.html
title: Blogs
---

# Amplify Shader Editor / Manual
---
这里我翻译了英文的Manual, 部分内容可能由于版本问题，存在部分差异。我已经通过(**jack：**)进行标注了。原版网址[点击这里](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Manual)。

* awsl
{:toc}

---

## 安装

1. 打开 AmplifyshaderEditor###.unitypackage
2. Unity会显示“Importing package”的窗口，选择所有，然后导入。
3. ASE将会被安装在Unity的工程中，文件结构如下：
      YourProject\Assets\AmplifyshaderEditor\
      YourProject\Assets\AmplifyshaderEditor\Examples\
      YourProject\Assets\AmplifyshaderEditor\Plugins\

## 糟糕！我的Shader都是全粉色

不要慌，shader显示粉色是因为Unity为了想让你知道Shader没有正常工作或者配置。
1. 渲染中你使用了错误的shader类型
   在URP，HDRP和 SRP出现之前，您不需要在项目中指定特定的着色器类型，所有项目都使用了内置（build-in）渲染器着色器。这些旧的着色器通常包括：Built-in, Legacy, Surface Shaders, or Standard。在某些情况下，它们不能与新的渲染管道兼容；除了UI或Sprite着色器，它们仍然使用以前的着色器。
   要确保使用的是兼容的URP或HDRP着色器渲染管线类型，请在输出节点参数中检查类型名称；着色器类型总是在其前缀中，明确地说明它们属于渲染管线。
   有关如何使用ASE设置SRP的其他说明，请查看相关页面：Scriptable Rendering Pipeline

![HDRPURP_1.jpg](./ase.assets/HDRPURP_1.jpg)

2. 有一个着色器错误，导致它无法按预期执行。检查控制台和ASE控制台线索；加入我们的[Discord]（https://discord.gg/zVdqVSp）如果您不能知道问题，如果您认为您发现了可能的错误，请通过support@amplify.pt联系我们。

![console_1.jpg](./ase.assets/console_1.jpg)

## 编辑器

![ASE_m_1.jpg](./ase.assets/ASE_m_1.jpg) 

打开ASE窗口，停靠它，在一个单独的窗口或者显示器中使用。当您双击ASE材质或shader时，该编辑器将自动打开。

![ASE_m_2.jpg](./ase.assets/ASE_m_2.jpg) 

ASE Shader可以直接在项目选项卡中创建，或者通过Assets > Create > Shader > Amplify Surface Shader进行创建。
资产>创建>着色器>放大表面着色器下的菜单创建。

![ASE_m_3.jpg](./ase.assets/ASE_m_3.jpg)

1. 双击一个ASE Shader，将在ASE窗口中打开它。或者，您可以通过单击“Open in Shader Editor”按钮，在"inspector"的选项卡中打开着色器。
2. 直接在“Node”选项卡中命名着色器，可以使用正斜杠（/）分隔符添加自己的类别。请记住，着色器文件名是唯一的，必须在“项目资源管理器”选项卡中手动设置。您可以对文件和实际的Shader使用不同的名称。
3. 此区域显示当前的Shader，单击它将在“Project ”选项卡中找到并选择该Shader。注意绿色的轮廓，这是一个视觉辅助，让你知道目前只有Shader是打开的。

![ASE_m_4.jpg](./ase.assets/ASE_m_4.jpg)

1. 双击使用ASE Shader的材质，以同时在ASE窗口中的打开Shader和Material。或者，你可以在材质检查器选项卡中，单击“open in shader editor”按钮直接在打开它。
2. 通过打开material，激活shader和material都将显示在窗口的下面区域。与shader一样，单击它将在“项目浏览器"选项卡中找到并选择material。注意窗口蓝色的轮廓，这是一个视觉辅助工具，让你知道shader和material当前都是打开的。

## 窗口UI交互

![ASE_m_5.jpg](./ase.assets/ASE_m_5.jpg) 

1. 可以在左侧选项卡中调整节点属性。选择一个节点，或output节点，以显示其参数。有些值可以在实际节点中直接调整。如果没有选择任何节点或选择了多个节点，则output节点的属性总是显示在此选项卡上。output节点属性选项卡可以通过单击选项卡的右上角的减号按钮来最小化。（jack: 新版的为output node）

2. 最小化的保存/更新/清除/编辑按钮。不可用或禁用时为灰色，最新时为绿色，过时时为黄色。
  - 按钮1：手动着色器更新（保存和更新）
  - 按钮2：切换LIVE shader更新（自动保存和更新）
  - 按钮3：删除已断开连接的节点
  - 按钮4：在文本编辑器中打开shader

3. 着色器的类别和名称。 

4. 画布视图的调整。(jack: 新版的按钮多一些)
	- 按钮1：选择并关注输出节点。
	- 按钮2：关注选定的节点。如果未选择任何内容，将关注整个节点集合。自动变焦也可以通过双击按钮或双按“F”键来完成。
	
5. 节点选项板选项卡是一个可搜索的节点列表，您可以选择并将节点直接拖动到窗口区域上。可以通过单击选项卡左上角的减号按钮来最小化节点选项板选项卡。

6. 右键单击画布上的任何位置以显示可搜索的节点列表，单击节点名称以创建它。

### 分享内容

在版本v1.6.8.002中，你现在可以使用相机按钮拍摄你的着色器的完整画布截图。此外，您还可以通过使用链接共享按钮, 将链接直接复制和粘贴到画布中来共享节点。

![QeTFBpR.gif](https://i.imgur.com/QeTFBpR.gif) 

7. 按住快捷键并单击画布上的任意位置以创建新节点。快捷键显示在[ ]中，位于选项卡上它们各自的节点名称的前面（jack:实际是后面）。例如：键“1”表示浮点，键“5”表示颜色节点。

![ASE_m_22.jpg](./ase.assets/ASE_m_22.jpg)

数据从左向右流，过程为：输入端口>处理的数据>输出端口。系统只分析直接或间接连接到output节点的节点，并用于生成最终的着色器指令。如果一个节点包含了未连接的输入端口，则ASE将在处理阶段使用内部参数。内部参数值可以通过节点属性选项卡进行编辑。

![ASE_m_21.jpg](./ase.assets/ASE_m_21.jpg) 

**Nodes（节点）** 节点可以通过鼠标左键单击节点或用鼠标左键拖动选择框来选择节点。通过按住“Shift”键并单击它，可以从选择中附加或删除节点。按“CTRL/CMD+A”来选择所有内容。通过鼠标左键单击节点画布上的空白区域取消选择所有内容。通过按住鼠标左键并拖动来移动选定的节点。

**Wires（线）** 删除连线，按住“Alt”键并单击节点端口或拖动连接到画布的空白区并左键单击。连接到选定节点的连线被高亮显示，表示从最左边节点到最右边节点的数据流。

**Connections(连接)** 通过左键单击并拖动线从节点的“输出端口”到下一个节点的“输入端口”，或从空的“输入端口”拖拽到“输出端口”来创建连接。鼠标左键按住已连接的输入端口，可将连线断开，按住鼠标，可以将其拖动到另一个输入端口上。将导线拖到空的画布空间上，就会自动出现一个菜单（可以选择不同类型节点），如果选择了一个节点类型，则将使用第一个有效端口进行连接。

**Ports（端口）** 输出端口可以连接到多个输入端口，但输入端口仅接受单个输入。线会自动捕捉到鼠标光标附近端口。为了便于使用，端口激活区域非常大，甚至可以将线直接放到端口名称上。

**View(视图)** 按鼠标右键或中键拖动以平移视图。当框选定节点，或者选择的节点远离可见工作区区域时，画布将自动滚动。可以通过鼠标滚动轮进行放大/缩小。缩小的幅度由画布上的节点位置动态确定。

**Tabs（标签栏）** 当将ASE窗口宽度减小到750px以下时，选项卡上的"节点属性"面板和“选择节点”面板都会自动最小化。你总是可以通过点击矩形按钮来最大化它们。

## Material和Shader模式

![ShaderMaterial.jpg](./ase.assets/ShaderMaterial.jpg) 

您可以在Shader/着色器或Material/材质两种模式之一中使用ASE，这取决于您是否从着色器或材质资源加载着色器文件。画布边框作为激活的模式视觉指示器，着色器模式显示绿色轮廓，材质模式显示蓝色轮廓。

![ASE_m_6.jpg](./ase.assets/ASE_m_6.jpg) 

在着色器中设置的值通常被称为默认值。对任何给定着色器默认值所做的任何更改都将自动影响使用它的所有材质。当同时编辑材质和着色器时，请密切注意那些修改的值。

![ASE_m_7.jpg](./ase.assets/ASE_m_7.jpg)

与着色器中的默认值不同，材质中的值可以是唯一的。材质值仅在材质模式（材质和着色器全部打开）下工作时显示，即：这些具有变量（颜色、浮动、Int、向量、矩阵）的节点，在参数类型下拉列表，设置为“属性”时。当选择属性或统一参数类型时，默认值总是被复制到材质值。每个材质都可以进行调整，以创建无限数量的变化，同时仍然使用相同的着色器。您可以将材质视为着色器的实例，每个实例都是唯一的，可以使用相同的默认值集进行创建。

![ASE_m_8.jpg](./ase.assets/ASE_m_8.jpg) 

在使用相同的ASE着色器在材质之间，你可以复制和粘贴属性值。"Open in Shader Editor"按钮提供了一种快速的、可以同时打开材质和着色器的方法。

![ASE_m_9.jpg](./ase.assets/ASE_m_9.jpg) 

Shaders可以通过单击着色器“inspector”面板上的“Open in Shader Editor”检查器选项卡直接打开。或者单击“Open in Text Editor”在文本编辑器中打开。

## Output Node (Built-in管线)

**注意** 本节仅作为标准Build-in管线PBR着色器中常见参数的示例。根据所使用的着色器类型，您可能有一组不同的可用参数或完全不同的顺序。如果您正在寻找特定的HDRP或URP信息，一定要检查相关的页面：[Scriptable Rendering Pipeline](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Scriptable_Rendering_Pipeline)

本节的部分内容已直接从Unity着色器参考文档中获取。了解更多信息: [Unity Shader Reference](https://docs.unity3d.com/Manual/SL-Reference.html)

![OutputNode.jpg](./ase.assets/OutputNode.jpg)

![MN_1.jpg](./ase.assets/MN_1.jpg)

**General**
- Shader Name（着色器名称）: 可编辑的文本框，定义了着色器的名称和路径。使用正斜杠“/”来定义其类别和名称；例如，UserSamples/EnvironmentGradient。注意，此框中显示的名称与文件名不相同，它们必须单独设置。
- Shader Type（着色器类型）: 此区域显示当前所使用的着色器类型。这里包括了所有您在项目中使用的模板。ASE提供了post process effects, particls, sprites, UI和unlit shader.默认设置为surface。
- Light Model(光学模型):定义表面如何反射光线，通常指着色器的类型。ASE目前提供：标准（金属），标准镜面，兰伯特，Blinn-Phong和自定义照明，允许创建一个独特的基于节点的照明模型。
- Shader Model（着色器模型）: 当编写表面着色器或常规着色器程序时，HLSL源代码可以被编译成不同的“着色器模型”。更高的着色器编译目标允许使用更现代的GPU功能，但可能会使着色器不能在较旧的GPU或平台上工作。
- Precision（精度）: 定义内部计算的最大精度，使用较低的类型提供了额外的性能提升，牺牲一些精度；默认情况下，设置为float，这个值会限制了放置在画布中的所有属性值。
- Cull Mode（剔除模式）: Front - 剔除正面, Back - 剔除后面, Off - 关闭剔除(双面材料); 默认使用Back。
- Render Path（渲染路径）: 允许您定义着色器模式（向前/延迟）；默认情况下设置为“所有“。
- Cast Shadows（投射阴影）: 定义着色器是否生成阴影传递，来投射阴影；仍然可以在每个对象的材质渲染器组件中关闭阴影投射。
- Receive Shadows（接受阴影）: 定义使用着色器的对象是否接收阴影；这包括自阴影（仅支持正向渲染）；可以在每个对象的材质渲染器组件中关闭这个功能。
- Queue Index（队列索引）：渲染队列偏移值，正数（靠后）和负数（靠前）。
- Vertex Output（顶点输出）: 默认情况下为相对。可以设置为绝对。输入局部的顶点偏移将自动变为局部顶点位置。
- LOD：默认情况下，允许的LOD级别是无限的，只要用户的硬件支持，即可使用。然而，在某些情况下，您可能想要删除着色器的细节，即使硬件可以支持它们。 [Unity Shader Reference](https://docs.unity3d.com/Manual/SL-ShaderLOD.html)
- Fallback（回退）: 从项目中的可用着色器中设置一个回退着色器，当主要着色器缺少或不支持时，将使用这个回退着色器。
- Custom Editor（自定义编辑器）: 自定义检查器允许您使用自定义材质检查器（inspector），默认情况下使用ASE自定义材质检查器。

![OutputNode2.jpg](./ase.assets/OutputNode2.jpg)

**Standard Shader Inputs**

- Albedo（反照率）: 反照率参数控制着色器表面的基本颜色，可使用颜色值或纹理贴图。 
- Normal（法线）: 法线贴图是一种特殊的纹理，允许添加表面细节。例如，高精度网格、凸起、凹槽和划痕导致的阴影。您可以连接法线贴图或自定义法线向量。
- Emission（发光）: 它控制从表面发出光的颜色和强度。忽略光照条件如何。RGB值作为输入。
- Metallic ( Metallic workflow only 仅金属工作流 ): 使用金属工作流程时，可以通过修改金属度和光滑度来改变表面反射率和光响应。使用灰度输入。可以使用从0到1的数和一个纹理，来控制金属值，不同区域使用不同的金属值。参数0是电介质（非金属）和1是全金属。
- Specular ( Specular workflow only 仅镜面工作流 ): 使用镜面工作流时，镜面参数RGB颜色控制着镜面反射率的强度和色调。
- Smoothness ( Both workflows两个工作流都支持 ): 平滑度的概念适用于镜面工作流和金属工作流，在这两种工作流中非常相同；灰度作为输入。当值为1时为完全光滑表面，提供清晰的反射。当是粗糙表面时，设置为0，产生漫反射颜色，没有清晰的反射。在一些引擎中，会使用“粗糙度”。
- Ambient Occlusion（环境遮挡）: 遮挡输入可以是：遮挡纹理贴图，或自定义值。表示来自环境照明和反射，模型区域高或低间接照明。遮挡纹理是一个灰度的图片，白色区域表示应该接受完全间接照明，而黑色区域表示没有间接照明。
- Transmission（透射）: 透射是一种高度优化的近似光散射的方法。换句话说，它定义了从后面照明时，有多少光线通过一个表面。这对于不细节的资产非常理想。如树叶、布，甚至是蜡质物体。RGB可以作为输入。
- Translucency（半透明）: 半透明输入，通过控制光法线角度衰减偏移，以简单和优化的方式显示SSS（子表面散射）效果。通常用于皮肤效果，因为足够灵活也可用于其他用途。接受完整的RGB输入。
- Refraction ( Transparent Render Type  折射，透明渲染 ): 使用折射输入，需要一个着色器把渲染类型设置为透明。用于模拟通过玻璃或水等介质看到的物体的变形效果。方法是通过折射背景像素的屏幕空间UV偏移来实现的。接受完整的RGB输入。这是一种简单的模拟光现象技术，即当光波从一个给定折射率的介质斜角传播到另一个介质时折射。
- Opacity ( Transparent Render Type )不透明度（透明渲染类型）: 使用不透明度输入时，需要将着色器的渲染类型设置为透明（transparent），设置表面的透明度。当值范围为0到1，从完全透明到完全不透明。接受完整的RGB输入。
- Opacity Mask ( Transparent Render Type ) 不透明蒙版（透明渲染类型）：不透明度蒙版需要将渲染类型设置为透明（transparent）或屏蔽混合(Masked Blend)模式。工作方式类似于不透明度，其值介于0到1之间，从完全透明到完全不透明，但不考虑中间值。特定表面区域完全可见或完全不可见。对于定义复杂固体表面的材料，如钢丝网或链杆，这是完美的解决方案。不透明部分仍然遵守照明规则。接受灰度输入。
- Local Vertex Offset ( Relative Vertex Output )局部顶点偏移（相对顶点输出）：局部顶点偏移输入可用于通过顶点操作改变表面的形状。其中XYZ坐标，将定义每个顶点将如何从其相对位置偏移。
- Local Vertex Position ( Absolute Vertex Output ) 局部顶点位置（绝对顶点输出）:局部顶点位置的工作方式类似于局部顶点偏移输入。但是，它不使用每个顶点的相对位置偏移，而是在绝对世界空间方向上偏移顶点。
- Local Vertex Normal（局部顶点法线）: 局部顶点法线允许调整任何偏移曲面的法线方向。网格的法线不实时计算。这一过程通常被称为法线重建。
- Tessellation（细分）: 细分输入允许对网格的三角形进行细分，在运行时将它们分割成更小的三角形，以增加任何给定网格的表面细节。
- Debug （调试）: 调试输入生成一个预览着色器，忽略所有其他激活输入，只绘制debug插入，而不考虑照明。请注意并非所有的节点或特定的组合，都可以在debug模式下进行预览。

![MN_2.jpg](./ase.assets/MN_2.jpg)

**Blend Mode(混合模式)**

- Blend Mode（混合模式）: 选定模式自动调整可用参数：例如不透明、遮罩、透明度、半透明、Alpha预乘法或自定义。
- Render Type（渲染类型）: 渲染类型标签可以将着色器分类为几个预定义的组；不透明的着色器，或经过alpha测试的着色器。可用的标签有：不透明，透明，透明切割，背景，覆盖，树不透明，树透明切割，树广告牌，草和草广告牌。
- Render Queue（渲染队列）: 几何体渲染队列优化了对象的绘图顺序，以获得最佳性能。渲染队列按距离对对象进行排序，从最远的对象开始渲染，然后以最近的对象结束。可用的选项：背景，几何体，Alpha测试，透明和覆盖。通过分层系统，每个后续队列都在前一个队列完成后渲染。
- Mask Clip Value（蒙版切割值）: 要与不透明度alpha进行比较的默认值。0完全不透明，1完全屏蔽；默认情况下设置为0。通常用于透明切割材料。
- Refraction Layer（折射层）: 特殊的grabpass将被此值抵消时，有效地为折射效果创建分层系统。
- Alpha To Coverage（Alpha覆盖）: 打开内部MSAA功能，混合不透明对象和alpha对象；仅用于打开MSAA的正向渲染可用。
- Blend RGB and Blend Alpha（混合RGB和混合Alpha）: 当图形被渲染后，在所有的着色器都被执行和所有的纹理都被应用后，像素就会被写入屏幕上。它们如何与已经存在的东西结合起来是由混合命令控制的。ASE目前提供了一个自定义的、Alpha混合模式、预乘法模式、加性模式、软加性模式、乘法模式和一个2倍乘法模式。
- Blend Factors (SrcFactor & DstFactor)混合因子（Src因子和Dst因子）:以下所有属性对“混合”命令中的“Src因子和Dst因子”都有效。Src是指计算出的颜色，Dst是已经在屏幕上的颜色。如果通过BlendOp使用逻辑操作，则会忽略混合因子。 
  - One：1 - 使用src或dst颜色完全通过。
  - Zero:  0 - 用它来删除src或dst值。
  - SrcColor: 乘以src的颜色值.
  - SrcAlpha: 乘以src的Alpha值.
  - DstColor: 乘以帧缓冲区Dst颜色值
  - DstAlpha: 乘以帧缓冲区Alpha值
  - OneMinusSrcColor: 乘以(1 - source color).
  - OneMinusSrcAlpha: 乘以(1 - source alpha).
  - OneMinusDstColor: 乘以 (1 - destination color).
  - OneMinusDstAlpha: 乘以 (1 - destination alpha).
  - Blend Op RGB & Blend Op Alpha: Add, Sub, Rev Sub, Min and Max
- Color Mask: 设置颜色管道写入掩模, 开启OFF后不可见.

![MN_3.jpg](./ase.assets/MN_3.jpg)

**Stencil Buffer（模板缓冲区）**

可以用模板缓冲区的每个像素掩码来决定保存或丢弃像素。每个像素是一个8位整数。该值可以写入、递增或递减。后续的绘制调用可以对该值进行测试，以决定在运行像素着色器之前是否应该丢弃这个像素。当Cull模式设置为OFF时，为了正面和背面使用缓冲区，菜单会添加一组额外的比较选择选项。

- Reference（参考）: 要Comp进行比较的值，比较后要写入缓冲区的值（设定不同条件：Pass, Fail,和ZFail）。可以是0-255的整数。
- Read Mask（读掩码）: 8位掩码为0-255整数，用于比较引用值和缓冲区内容（referenceValue & readMask）和（stencilBufferValue & readMask）。默认值：255。
- Write Mask（写入掩码）:  8 位掩码，0–255 integer。可以写入缓冲区。默认值：255。
- Comparison (front and back) 比较前后: 用于比较参考值与缓冲区当前内容的函数。默认值：always。
- Pass (front and back):  如果模板测试（和深度测试）通过，则如何处理缓冲区中的内容。默认值: keep。
- Fail (front and back): 如果模板测试失败，如何处理缓冲区的内容。默认值：keep。
- ZFail (front and back): 如果模板测试通过，但深度测试失败，则如何处理缓冲区中的内容。默认值：keep。

![MN_4.jpg](./ase.assets/MN_4.jpg)

**Tessellation(细化)**

- Phong: 修改细分面的位置，使生成的表面符合网格法线方向；默认设置为OFF。强度：0-1
- Type: 定义所使用的技术；基于距离、固定、边长度和Edge Length Cull
- Tess: 镶嵌因子; 1-32.
- Min:  最小镶嵌距离.
- Max: 最大镶嵌距离.
- Edge Length: 在开始镶嵌之前，可以有的最大长度。
- Max Disp: 多边形补丁处的最大边界外位移 

![OutlineOptions.jpg](./ase.assets/OutlineOptions.jpg)

**Outline （轮廓线）** 使用反外壳技术，创建一个自定义的轮廓效果
- Mode:  Vertex Offse: 通过值的大小控制; Vertex Scale:通过顶点比例增加来调节  
- Color: 用于定义轮廓的颜色。
- Width: 要被偏移或缩放的值。

![BillboardOptions.jpg](./ase.assets/BillboardOptions.jpg)

**Billboard (广告牌)**
- Type: 圆柱形广告牌只能在Y轴上旋转。一个球形广告牌会朝向相机旋转，而不管它的如何旋转。
- Ignore Rotation: 设置ON，忽略公告牌旋转。

![DepthOptions.jpg](./ase.assets/DepthOptions.jpg)

**Depth（深度）**
- ZWrite Mode: 控制对象的像素是否写入深度缓冲区（默认打开）。如果绘制实体对象，请设置ON。如果你绘制半透明的效果，切换到ZWrite Off。有关更多细节，请阅读下文。
- ZTest Mode: 深度测试的方式。默认值为LEqual。（小于这个距离的绘制，否则隐藏）。ASE提供ZTest可以ZTest Less, Greater, LEqual, GEqual, Equal, NotEqual and Always。
- Offset: 允许您使用两个参数指定深度偏移，为factor(因子)和units(单位)。factor调整最大的 Z slop, 相对于多边形的X或Y。Units调整最小可分辨深度缓冲值。这允许您强制将一个多边形绘制在另一个多边形之上，尽管它们实际上处于相同的位置。例如，Offset（ 0，-1）将多边形拉得更接近相机，而忽略多边形的斜率，而Offset（ -1，-1）将多边形拉得更近。
- - Factor: 相对于多边形的X或Y，调整最大Z斜率。
- - Units: 最小可分辨深度缓冲区值。

![RenderingOptions.jpg](./ase.assets/RenderingOptions.jpg)

**Rendering Options（渲染选项）**
激活或停用某些着色器功能。默认情况下，大多数功能将打开，以模仿Unity的标准着色器。

![PlatformOptions.jpg](./ase.assets/PlatformOptions.jpg)

**Rendering Platforms（渲染平台）**
定义支持哪些平台；默认设置为“全部”。

![AdditionalIncludes.jpg](./ase.assets/AdditionalIncludes.jpg)

**Additional Includes（额外包含）**
允许为cg文件定义着色器的相对路径。如果文件丢失或路径不正确，将无法编译着色器。”../“可以用来进入上一级文件夹。

![AdditionalPragmas.jpg](./ase.assets/AdditionalPragmas.jpg)

**Additional Pragmas（额外程序）**
允许添加单个语用器指令来控制着色器的编译和渲染。

![CustomTags.jpg](./ase.assets/CustomTags.jpg)

**Custom SubShader Tags（自定义SubShader）**
允许为自定义着色器渲染，控制添加自定义SubShader。

![MaterialProperties.jpg](./ase.assets/MaterialProperties.jpg)

**Material Properties(材质特性)**
这里列出属性变量。你可以通过拖拽来调整上下位置。

### Referencing Custom Properties（引用自定义属性）

某些着色器选项，如Cull Mode或Stencil也可以通过着色器属性进行设置。使用int和float。

![PropertyMode.gif](./ase.assets/PropertyMode.gif) 

在下拉框的一侧会有一个可点击的点，你可以点击它作，激活新属性选择模式，通过选项列表选择你的属性。

## Shader Functions（着色器函数）

![sf_1.jpg](./ase.assets/sf_1.jpg)

着色器函数，简称SF，是允许您构建可重用函数的单个节点网络。易于设置和非常灵活，它们的工作原理是直接从着色器接收输入值，处理这些信息并输出以供进一步更改或直接使用。SF资产不绑定到任何着色器，您可以在整个项目中多次使用它们，例如，在同一着色器中、在其他着色器功能中使用它们，甚至与其他用户共享它们。从简单的图到复杂的图，着色器函数是通过将复杂的网络打包成单个节点来减少画布混乱的好方法，也是消除不必要的重复任务的好方法；它们可以被认为是一种“分类”的形式，它为您提供了一种将节点分类更易于管理的资产方法。

**您想与ASE社区分享您的创作吗?** [贡献在这里!](http://amplify.pt/unity/amplify-shader-editor/contribute/) 

### 特性
- 适于所有ASE节点
- 输入/输出节点可配置
- 在着色器和SF之间可以复制和粘贴节点
- 支持所有变量类型，包括材质属性
- 可重用的和唯一的资产，不绑定到任何着色器或项目
- 无缝编辑器工作流，拖放到任何打开的着色器或者可以从节点列表中添加它们

### 比较

![sf_2.jpg](./ase.assets/sf_2.jpg) 

以上的节点网络都产生相同的燃烧效应。**原始的**版本不使用SF功能。**版本1**使用包含用于生成燃烧效果的原始节点网络的SF，连接节点：1个纹理对象节点作为燃烧掩模，1个纹理对象节点为火纹理，1个纹理坐标节点。

**版本2**比前面的示例更简单，烧伤效果生成和纹理节点都包含在SF中，唯一的例外是纹理坐标节点，它允许用户调整。请记住SF可以没有任何输入，如果有必要输出的数据可以完全在其图中生成。

**Version 1 Shader Function 例子**

![sf_3.jpg](./ase.assets/sf_3.jpg)

### 创建和使用SF

![sf_4.jpg](./ase.assets/sf_4.jpg)

从菜单 Assets > Create > Shaders > Amplify Shader Function， 点击。

![sf_5.jpg](./ase.assets/sf_5.jpg)

您新创建的SF函数，将在重命名后，在ASE编辑器中自动打开。

![sf_6.jpg](./ase.assets/sf_6.jpg)

1. 在这里添加着色器函数描述。您可以拖拽SF函数的输入/输出和材质属性节点，来调整位置。在SF中设置出来的属性顺序，与材质面板中顺序一样。
2. 创建2个输入节点或更多。默认情况下，总是有一个输出节点，但您可以添加尽可能多的输出节点。您也可以在活动SF中使用其他SF节点，但是，为了避免着色器函数循环依赖，您不能将SF函数添加到它自己的画布中。
3. 选择一个输入节点来设置使用的类型，或者激活"Auto Cast“完成类型自动转换，就像你使用任何其他节点属性一样方法。 
4. 将结果输出直接连接到输出节点。 
5. 保存更改，并单击返回，返回到之前打开的着色器或材质。

![sf_7.jpg](./ase.assets/sf_7.jpg)

1. 通过直接从节点列表中选择已创建的着色器函数，可以将其添加到创建的着色器中。SF节点可以与任何其他ASE节点一样使用，它们可以被复制、复制或删除。
2. 或者，您也可以直接将SF函数拖放到编辑器画布中
3. 双击一个SF节点以打开它。

## 热键

---
### 彩线模式

![DebugMode.jpg](./ase.assets/DebugMode.jpg) 

使用 [ W ] 开关彩线模式

### Node 预览

![source.gif](./ase.assets/source.gif) 

按 [ P ]来控制Node效果预览

### 多线显示模式

![LsGX8pv.gif](http://i.imgur.com/LsGX8pv.gif)

使用 [ CTRL + W ] 来开关多线显示模式

### 快捷键列表

**编辑器**
- **[双击线]:** 创建线的控制点
- **[F1]:** 选择Node, F1打开Wiki网页
- **[C]:** 创建备注方框
- **[F]:** 专注到选择的Node
- **[B]:** 分开Node管道
- **[Space]:** 打开Node菜单，可以进行查找
- **[W]:** 颜色线模式开关
- **[Control + W]:** 多线模式开关
- **[P]:** 全局效果预览（显示纹理）
- **[Delete]:** 删除选择的节点
- **[Backspace]:** 删除选择的节点

**Nodes**
- Use KEY + Left Mouse Button
- **[Alpha5]:** Color
- **[Alpha0]:** Int
- **[Alpha1]:** Float
- **[Alpha2]:** Vector2
- **[Alpha3]:** Vector3
- **[Alpha4]:** Vector4
- **[L]:** Lerp
- **[N]:** Normalize
- **[O]:** One Minus
- **[E]:** Power
- **[A]:** Add
- **[D]:** Divide
- **[M]:** Multiply
- **[S]:** Subtract
- **[R]:** World Reflection
- **[T]:** Texture Sample
- **[U]:** Texture Coordinates

## 半透明性

半透明输入提供了一种快速表示光散射的方法。这不是最现实的方法，但它是一个灵活和快速执行的近似。在我们的例子中，见（AmplifyShaderEditor\Examples\Official\Translucency）。我们使用一个简单的红色颜色深度纹理表示皮肤地下散射效果，但你不一定需要使用相同的设置，你很可能插入一个完整的RGB纹理和半透明纹理，得到一些颜色变化或风格化的结果。

![uTq4P7T.gif](http://i.imgur.com/uTq4P7T.gif)

**当您将值插入半透明输入端口时，以下材质属性将自动添加到着色器中**

![Translucency.jpg](./ase.assets/Translucency.jpg)

- Strength: 半透明效应强度，你可以把它看作是一个乘数滑块。
- Normal Distortion: 定义在半透明效应上的法线变形量。
- Scattering Falloff: 对半透明效应的散射衰减量。
- Direct: 直接光影响半透明效应。
- Ambient: 全局光/环境光对半透明效应的影响
- Shadow: 自阴影对半透明效应的影响，减少了阴影区域的半透明效应。

## 我的第一个shader

![ASE_m_12.jpg](./ase.assets/ASE_m_12.jpg) 

1. 打开编辑器，在“项目资源管理器”选项卡中创建新材质和新着色器。在新创建的材质中，选择新的着色器，然后单击“Open in Shader Editor “按钮，同时打开着色器和材质。

![ASE_m_13.jpg](./ase.assets/ASE_m_13.jpg) 

2. 例如，选择输出节点，并将其灯光模型更改为镜面模型。

![ASE_m_14.jpg](./ase.assets/ASE_m_14.jpg) 

3. 右击画布上，打开可搜索节点列表并键入“Lerp”。单击Lerp，并将节点输出端口连接到Albedo（反照率）输入端口。

![ASE_m_15.jpg](./ase.assets/ASE_m_15.jpg) 

4. 按住5快捷键，单击画布上以创建新的颜色节点。或者，您可以使用可搜索列表，或从右侧的节点选项板中拖放节点；Constants > Color [ 5 ]

![ASE_m_16.jpg](./ase.assets/ASE_m_16.jpg) 

5. 选择新的颜色节点，并点击“CTRL/CMD+D”来复制它。将两个节点连接到Lerp输入端口。将第一个节点设置为灰色，将第二个节点设置为更生动颜色。

![ASE_m_17.jpg](./ase.assets/ASE_m_17.jpg)

6. 通过从节点选项板中，拖放它来创建一个Float节点，并将其连接到Lerp节点的Alpha端口。在新创建的浮点数的节点属性中，将其最小值设置为0，将最大值设置为1。请注意，Float现在可以由滑块控制。不要忘记将其参数类型设置为Property，这样您就可以直接在材质中更改它。您还可以命名节点，通过调整“order index”值，并更改其在材质检查器中的位置。（jack:新版在输出节点最下面的Material Properties中调节）

![ASE_m_18.jpg](http://amplify.pt/wp-content/uploads/2016/09/ASE_m_18.jpg)

7. 创建一个新的Float，并将其连接到输出节点的"Smoothness"输入端口，将其最小值设置为0，最大值设置为1。将其类型设置为Property，并将其命名为Smoothness Level Value。创建另一个Float,并将其连接到Specular输入端口，将其最小值设置为0，最大值设置为1。将其类型设置为Property，并将其命名为Specular Level Value。

![ASE_m_19.jpg](http://amplify.pt/wp-content/uploads/2016/09/ASE_m_19.jpg)

8. 最后，请将Normal贴图纹理从项目浏览器中直接拖放到画布中。举例，我们使用了一个拉丝金属纹理。将其连接到输出节点的正常输入端口，您就完成了。你刚刚建立了你的第一个shader，不要忘记定期通过点击位于左上角的update按钮来保存你的工作。或者，您可以编辑启用了LIVE模式的着色器，任何更改都会立即保存和更新。根据着色器的复杂性，LIVE模式可能需要几秒钟左右才能更新。与默认的着色器值相反，任何对材质属性的更改都会立即可见。

![ASE_m_20.jpg](http://amplify.pt/wp-content/uploads/2016/09/ASE_m_20.jpg) 

## 3rd-Party Compatibility

### Aura 2

使用Aura 2和ASE非常简单，只需要添加必要的节点。

![G07b3mm.png](./ase.assets/G07b3mm.png)

请务必查看官方的Aura 2手册以获取更新的信息。

### Substance Support

在ASE中增加了对Unity 2018及以上物质的支持。[Substances](https://www.allegorithmic.com/substance) 

![Tv4Hllq.gif](https://i.imgur.com/Tv4Hllq.gif)

原始的Substance例子打包到一个Unity包中，因为.sbsar文件现在在Unity 2018中导致导入错误。对Substance的支持已被删除。

如果你使用的是**pre-unity2018**年版本，其中原生实体支持还没有被废弃，你可以找到下面的实体示例：
- 进入*AmplifyShaderEditor\Examples\Official\Substance*文件夹
- 请提取**LegacySubstanceExample.unitypackage**

如果你使用的是**Unity 2018**，你需要在提取正确的ASE包之前确保你安装了Allegorithmic Substance 插件：
- 下载、导入和安装 [Substance in Unity](https://assetstore.unity.com/packages/tools/utilities/substance-in-unity-110555?aid=1011lPwI&pubref=Wiki)
- 找到 *AmplifyShaderEditor\Examples\Official\Substance2018* 文件夹
- 解开 **Substance2018.unitypackage**

ASE允许您直接或间接地从编辑器内部使用物质。使用物质最基本的方法是在编辑器中拖放一个substance资产。 [Substance Sample](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Substance_Sample) 节点将创建它的各种纹理，可以在任何地方使用。

可以设置substance生成所有纹理，并作为规则纹理独立拖放。引用这些纹理，对于新产生的问题可以进行同步更新。

可以创建一个直接在着色器中使用的通用着色器。唯一需要注意的是 ,在substance资产中需要的额外配置，链接每个纹理。如果需要更自动的过程，则可以将纹理节点设置为使用与Unity的默认名称相匹配的属性名称。(ie: _MainTex for albedos, _SpecGlossMap for specular maps, _MetallicGlossMap for metallic maps, _Glossiness for smoothness maps, _BumpMap for normal maps, _OcclusionMap for occlusion maps, _EmissionMap for emission maps, etc) 通过这种方式，substance资产将检测属性，并自动分配他们正确的纹理，而不需要额外的干预。

### MegaSplat

对 ASE支持，参考[MegaSplat](https://www.assetstore.unity3d.com/en/#!/content/76166?aid=1011lPwI&pubref=Wiki)

### Curved World Shaders

This guide will show you how to integrate [Curved World](https://www.assetstore.unity3d.com/en/#!/content/26165?aid=1011lPwI&pubref=Wiki) with the [Amplify Shader Editor](https://www.assetstore.unity3d.com/en/#!/content/68570?aid=1011lPwI&pubref=Wiki).
You may download a simple example [here](http://amplify.pt/wp-content/download/CurvedWorldSample_ASE.unitypackage).


![ASE_m_23.png](./ase.assets/ASE_m_23.png)

1. For the first step, we're going to include the **curvedworld.cginc** file. In the image above, notice how we added the include with the string: "../cginc/CurvedWorld_Base.cginc", this is because our shader file was in a folder next to the cginc folder where the file is, so the "../" part of the string goes up one folder, the "/cginc/" part looks inside the cginc folder and the last part is the file itself. You could simply use "CurvedWorld_Base.cginc" IF your shader file was next to this file.

*Note: You have to be careful with this inclusion because Unity doesn't let you automatically detect where the file is by name, you have to specify the file path. If you happen to move the file to a different folder you have to fix the file path and recompile the shader again or else it will fail to include the file.* (Alternatively you can also use a project based absolute path: "Assets/VacuumShaders/Curved World/Shaders/cginc/CurvedWorld_Base.cginc". In this case you will only have to fix the path in case you move the Curved World Shader folder.)'

![ASE_m_24.png](http://amplify.pt/wp-content/uploads/2017/08/ASE_m_24.png)

2. Secondly, in order to apply the curved world effect to the object with your shader, you need to call its own Function, which is within the file we included in the first step. To achieve this, you must create and connect a custom expression node into the "local vertex offset" output and have it call the Function you want to call in the code box, which in this case is "V_CW_TransformPointAndNormal(v.vertex, v.normal,v.tangent);". Notice the "Call Mode" checkbox in the parameters panel, it needs to be toggled on in order for this step to work without any issues.

*Note: Should you need to do some vertex transformation, you can still connect it to the input of the Function node.*

That's it! Now you can use everything else like you would in a normal ASE shader and it should work in curved world!

### VertExmotion

The [VertExmotion](https://assetstore.unity.com/packages/tools/animation/vertexmotion-23930?aid=1011lPwI&pubref=Wiki) package includes built-in nodes for ASE. Be sure that the shader name begins with "VertExmotion/", followed by your shader name, else it wont be recognized as being compatible.

1.Unpack the file 'VertExmotion/Addon/VertExmotion_AmplifyShaderEditorNodes.unitypackage'.

2. Add the VertExmotion node and connect it to the Local Vertex Offset Input port.

![v2.jpg](http://amplify.pt/wp-content/uploads/2018/09/v2.jpg)

3. Set the Vertex Output to 'Relative' in the Output Node parameters.

![v3.jpg](http://amplify.pt/wp-content/uploads/2018/09/v3.jpg)

4. Add the VertExmotion cginc file (Assets/VertExmotion/Shaders/VertExmotion.cginc) under Additional Directives, Includes.

![v1.jpg](http://amplify.pt/wp-content/uploads/2018/09/v1.jpg)

5. If you're using tessellation, be sure to add the VertExmotion (Advanced NC) node; plug both the Vertex Offset and Normal to the Output Node inputs. (Optional)

![v4.jpg](http://amplify.pt/wp-content/uploads/2018/09/v4.jpg)

6. HD SRP variant included. (Optional)

![v5.jpg](http://amplify.pt/wp-content/uploads/2018/09/v5.jpg)

## General Tips

### Mobile Shaders

When creating shaders for mobile there are some special considerations to take into account. Usually these considerations are tied to the performance of the shader but sometimes there are artistic or design choices that lead to modifications that are needed at the shader level.

These are just the most common way you may find useful to create shaders for mobile:

#### Rendering Options

Often overlooked, rendering options let you turn off some key feature of unity lighting system. For example, you may find to be enough for your purpose to turn off Unity GI system but still maintaining their PBR workflow.

![RenderingOptionsMobile.jpg](http://amplify.pt/Nodes/MasterNode/RenderingOptionsMobile.jpg)

It this image extreme example every special lighting feature is turned off and even shadows are off. This might not be what what's needed, but it's a good starting point.

#### Custom Lighting Model

**Attention** Custom Lighting is only available for the Universal and Built-in Renderer. Universal Custom Lighting has specific requirements which make use of the "SRP Additional Light" Node, please check this stream and example files for additional details: Dev Stream #4 - [Outline Toon Shading in LW/URP](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Tutorials/Amplify_Streams#Amplify_Creations_Dev_Stream_.234_-_Outline_Toon_Shading_in_LW.2FURP)

------

ASE allows the creation of custom lighting model shaders for the built-in renderer. These are still unity surface shaders that allow the replacement of unity lighting functions. In ASE this means you can set your shader Light Model into custom lighting. Doing this will transform the main output node into one that only has emission and opacity ports. With this it's possible to use existing nodes with some extra light nodes to create an optimized and tailor fitted shader for a specific purpose.

The following image shows how it's possible to create a simple wrapped Lambertian shader which should be very performant for lower end machines. ![img](http://amplify.pt/wp-content/uploads/2018/07/CustomLightingExample.jpg) 
Nodes used: [Texture Sample](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Texture_Sample), [World Normal](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/World_Normal), [World Space Light Dir](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/World_Space_Light_Dir), [Dot](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Dot), [Multiply](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Multiply) [Float](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Float), [Add](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Add)

Combine this with the previous rendering options for extra savings and do notice how in the general options a few of them where turned off or down for better performance (ie: Shader Model, Precision, Cast Shadows)

As a learning step, it might be a good idea to check the Toon Ramp sample provided by the ASE package which uses custom lighting in a more complex way to create a toon ramp effect with rim light and shadow support.

#### Mobile Friendly Templates

Some times what's needed is a specific vertex/frag shader that does a very simple job, for instance, particles, sprites, UI, etc. For these cases and others ASE allows the injection of shader code into pre-existing shaders that we call "templates". These are regular vertex/frag shaders that were modified by adding some tags the editor can read to know where to inject new code and what code already exists in the template.

There's a whole page dedicated on how these templates work and how you can build your own [right here](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Templates).

The reason they might be important for mobile shaders is that these templates can be extremely simple with barely any code at all. If the idea is to save performance, a generic unlit template can serve as a base to build upon since these are editable inside the editor and extra features can be added either by construction a more complex graph tree or by editing the original template. The only caveat being the user must have a bit of shader knowledge to edit or create the original template shader. Fortunately ASE already provides a few templates that any user can pick and use as any other shader.

![img](http://amplify.pt/Nodes/MasterNode/TemplateExample.jpg) 
Nodes used: [Template Parameter](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Template_Parameter), [Texture Sample](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Texture_Sample), [Grayscale](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Grayscale), [Float](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Float), [Lerp](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Lerp)

This feature is still in development and more of these templates will be provided in the future to implement more complex or specific effects when they become available.

### Android

When using the Texture Sampler node in ASE and the target platform is Android, it will ignore the Scale Parameter, which is an intended behaviour because Unity does not scale normal maps for platforms that don't support DXT5nm format, which is the format Unity compresses normal maps into.

Although this can be fixed by directly changing the built-in shader files, which is troublesome to do and to maintain, a simpler solution would be to do the exact same calculation that Unity does withing the editor itself.

The following image and shader file perform this calculation while also making sure that the shader still works even outside of the Android environment by checking the define symbol that Unity sets itself. We recommend that you create a Shader Function with this logic if you need to use it in several shaders.

[Normal Scale in Android](http://amplify.pt/wp-content/download/NormalScaleInAndroid.zip)

![img](http://amplify.pt/wp-content/uploads/2017/09/ASE_m_25.png)