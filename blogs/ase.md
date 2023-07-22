---
layout: page
permalink: /blogs/ase/index.html
title: Blogs
---

# Amplify Shader Editor Manual

{:toc}

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

## 分享内容

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

**View(视图)** Right mouse or middle mouse button drag to pan the view. The canvas will scroll automatically when box selecting or moving selected nodes away from the visible workspace area. You can Zoom In/Out via the mouse scroll wheel. The amount of zoom out is dynamically determined from the nodes positioning on the canvas.

**Tabs** Both the Node Properties and Node Palette windows are automatically minimized when reducing the ASE window width below a value of 750px. You can always maximize them by clicking the rectangular button.Material and Shader Mode

![ShaderMaterial.jpg](./ase.assets/ShaderMaterial.jpg) 
You can work with ASE in one of two modes, shader or material, depending if you load the shader file from a shader or a material asset. The canvas border serves as a visual indicator of the active mode, a green outline is shown for the shader mode and a blue outline for the material mode.

![ASE_m_6.jpg](./ase.assets/ASE_m_6.jpg) 
Values set in a shader are commonly referred to as Default Values. Any changes made to the Default Values of any given shader will automatically affect all materials using it. When simultaneously editing a material and shader, pay close attention to which values are being altered
      
![ASE_m_7.jpg](./ase.assets/ASE_m_7.jpg)
Unlike the Default Values in a shader, material values can be unique. material values are only shown when working in the material mode ( with both material and shader opened ). Only nodes which represent variables ( Color, Float, Int, Vector, Matrix ) have a Parameter Type dropdown and can be set to Property. Default values are always copied to material values when selecting Property or Uniform parameter type. Each material can be adjusted in order to create an unlimited number of variations, while still using the same shader. You can think of your materials as instances of your shader, each instance is unique but created using the same set of Default Values.
      
![ASE_m_8.jpg](./ase.assets/ASE_m_8.jpg) 
You can Copy and Paste property values between materials using the same ASE shader. The Open in Shader Editor button provides a quick way to open both the material and shader used in the Amplify Shader Editor.
     
![ASE_m_9.jpg](./ase.assets/ASE_m_9.jpg) 
Shaders can also be opened directly via their inspector tab by clicking on the Open in Shader Editor button. Alternatively, click on Open in Text Editor to open it in your current code editor.Output Node (Built-in Renderer)**ATTENTION** This section serves solely as an example of common parameters found in the Standard Built-in Renderer PBR Shader. Depending on the shader type used, you might have a different set of parameters available used or an entirely different order. If you're looking for specific HDRP or URP information, be sure to check the relevant page: [Scriptable Rendering Pipeline](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Scriptable_Rendering_Pipeline)Portions of this section have been acquired directly from the Unity Shader Reference documentation. Learn more: [Unity Shader Reference](https://docs.unity3d.com/Manual/SL-Reference.html)
    
![OutputNode.jpg](./ase.assets/OutputNode.jpg)
![MN_1.jpg](./ase.assets/MN_1.jpg)
**General**Shader Name: Editable text box, defines the name and path of the shader. Use a forward slash "/" to define its category and name; e.g. UserSamples/EnvironmentGradient. Note that the name displayed in this box is not the same as the filename, they have to be set individually.Shader Type: This area displays the current shader type used. These include the template you currently have in your project. ASE comes with presets for post process effects, particls, sprites, UI and an unlit shader. Set to Surface Shader by default.Light Model: Defines how the surfaces reflect light, commonly referred to as the type of shader used. ASE currently provides Standard(Metallic), Standard Specular, Lambert, Blinn Phong and a Custom Lighting that allows to create a unique node-based lighting model.Shader Model: When writing either Surface Shaders or regular Shader Programs, the HLSL source can be compiled into different “shader models”. Higher shader compilation targets allow using more modern GPU functionality, but might make the shader not work on older GPUs or platforms.Precision: Defines the maximum precision of internal calculations, using lower types offers an added performance boost in exchange for some accuracy; set to Float by default - this value caps all existing properties placed in your canvas.Cull Mode: Front - Cull front-facing geometry, Back - Cull back-facing geometry, Off - Disables culling (double-side material); set to Back by default.Render Path: Allows you to define which mode (Forward/Deferred) is supported by the shaders; set to All by default.Cast Shadows: Defines if the shader generates a shadow pass to be able to cast shadows; can still be turned off on a per object basis in the material renderer component.Receive Shadows: Defines if objects using the shader receive shadows; this includes self-shadowing(only with forward rendering); can still be turned off on a per object basis in the material renderer component.Queue Index: Render queue offset value, accepts positive(later) and negative(sooner) integers.Vertex Output: Relative by default, can be set to absolute; the input Local Vertex Offset input will automatically change to Local Vertex Position.LOD: By default, the allowed LOD level is infinite, that is, all shaders that are supported by the user’s hardware can be used. However, in some cases you might want to drop shader details, even if the hardware can support them. [Unity Shader Reference](https://docs.unity3d.com/Manual/SL-ShaderLOD.html)Fallback: Sets a fallback shader from the available shaders in the project which will be used whenever a certain pass is either missing or not supported by the main shader.Custom Editor: Custom inspectors allows you to use a custom material inspector, by default uses ASE custom material inspector.

![OutputNode2.jpg](./ase.assets/OutputNode2.jpg)
**Standard Shader Inputs**Albedo: The Albedo parameter controls the base color of the shader surface, accepting either color values or texture maps.Normal: Normal maps are a special kind of texture that allow the addition of surface details, such as shading information transferred from highpoly meshes, bumps, grooves and scratches. You may connect normal maps or custom normal vectors here.Emission: Emission controls the colour and intensity of light emitted from the surface, regardless of the lighting conditions; accepts full RGB values.Metallic ( Metallic workflow only ): When working in the Metallic workflow, the reflectivity and light response of the surface are modified by both Metallic and Smoothness levels; both greyscale inputs. You may use a range of values from 0 to 1, affecting the whole surface, or even connect a texture, which will control the Metallic values while providing different values for different areas of the surface; 0 being dielectric ( non-metallic ) and 1 full Metal.Specular ( Specular workflow only ): When working in Specular mode, the RGB colour in the Specular parameter controls the strength and colour tint of the specular reflectivity.Smoothness ( Both workflows ): The concept of Smoothness applies to both Specular and Metallic workflows, and works very much the same way in both; also greyscale. A completely smooth surface at value 1 provides clear reflections, while a rough surface set to 0 creates a diffuse color with no clear reflections; It's also referred to as "Roughness" in some engines.Ambient Occlusion: The Occlusion input accepts an occlusion texture map, or custom value, that's used to provide information about which areas of the model should display high or low indirect lighting, which comes from ambient lighting and reflections. The occlusion map is a greyscale image where white indicates areas that should receive full indirect lighting, while black indicates no indirect lighting.Transmission: The Transmission is a highly optimized way of approximating light scattering. In other words, it defines how much light passes through a surface when lit from behind, which is ideal for less detailed assets such as leaves, cloth, or even wax objects; accepts full RGB inputs.Translucency: The Translucency input allows you to approximate SSS (Sub-Surface Scattering) effects in a simple and optimized manner by controlling the light-normal angle falloff offset. It is usually used for skin effects but flexible enough for other uses; accepts full RGB inputs.Refraction ( Transparent Render Type ): The refraction input requires a shader with its Render Type set to Transparent and is used to simulate the deformation effect of objects seen through a medium such as glass or water, which is achieved by a screen-space UV offset that refracts the background pixels; accepts full RGB inputs. This technique is a simple approximation to a light phenomenon that often occurs when waves travel from a medium with a given refractive index to a medium with another at an oblique angle.Opacity ( Transparent Render Type ): The Opacity input requires a shader with its Render Type set to Transparent, being responsible for setting the transparency of a surface as a whole, using a range of values between 0 and 1, from completely transparent to fully opaque respectively; accepts full RGB inputs.Opacity Mask ( Transparent Render Type ): The Opacity Mask requires a shader with its Render Type set to Transparent or a Masked Blend Mode, and works similarly to Opacity in the sense that it takes in a value between 0 and 1, from complete transparency to full opacity, but without considering the values in-between, resulting in either completely visible or completely invisible surfaces in specific areas. It is the perfect solution for materials that define complex solid surfaces such as wire mesh or chain link, as the opaque portions will still respect lighting; accepts greyscale inputs.Local Vertex Offset ( Relative Vertex Output ): The Local Vertex Offset input may be used to alter the shape of a surface through vertex manipulation, where a XYZ coordinate will define how each vertex will offset from its relative position.Local Vertex Position ( Absolute Vertex Output ): The Local Vertex Position works similarly to the Local Vertex Offset input, however, instead of offsetting each vertex from its relative position it will instead offset the vertices in absolute world space direction.Local Vertex Normal: The Local Vertex Normal allows the adjustment of the normal direction of any offset surfaces as Mesh Normals are not computed in real-time. This process is usually referred to as Normal Reconstruction.Tessellation: The Tessellation input allows the subdivision of a mesh's triangles, splitting them into smaller triangles at runtime in order to increase the surface detail of any given mesh.Debug: The Debug input generates a preview shader that ignores all other active inputs, drawing only what is plugged in to its input port without taking lighting into account. Please note that not all nodes, or specific combinations, can be previewed in the debug mode.

![MN_2.jpg](./ase.assets/MN_2.jpg)
**Blend Mode**Blend Mode: The selected mode automatically adjust the available parameters; Opaque, Masked, Transparent, Translucent, Alpha Premultiplied or Custom.Render Type: RenderType tag categorizes shaders into several predefined groups; opaque shader, or an alpha-tested shader etc. Available tags: Opaque, Transparent, Transparent Cutout, Background, Overlay, Tree Opaque, Tree Transparent Cutout, Tree Billboard, Grass and Grass Billboard.Render Queue: Geometry render queue optimizes the drawing order of the objects for best performance. Render queues sort objects by distance, starting rendering from the furthest ones and ending with the closest ones. Available options: Background, Geometry, Alpha Test, Transparent and Overlay. Each succeeding queue is rendered after the previous one creating a layered system.Mask Clip Value: Default value to be compared with opacity alpha. 0 fully opaque, 1 fully masked; set to 0 by default. Commonly used in Transparent Cutout materials.Refraction Layer: When specified grabpasses will be offsetted by this value, effectively creating a layered system for refraction effects.Alpha To Coverage: Turns on internal MSAA capabilities to blend alpha objects using layers of opaque objects; only available for forward rendering with MSAA turned on.Blend RGB and Blend Alpha: When graphics are rendered, after all Shaders have executed and all Textures have been applied, the pixels are written to the screen. How they are combined with what is already there is controlled by the Blend command. ASE currently provides a Custom, Alpha Blend, Premultiplied, Additive, Soft Additive, Multiplicative and a 2x Multiplicative mode.Blend Factors (SrcFactor & DstFactor): All following properties are valid for both SrcFactor & DstFactor in the Blend command. Source refers to the calculated color, Destination is the color already on the screen. The blend factors are ignored if BlendOp is using logical operations.One The value of one - use this to let either the source or the destination color come through fully.Zero: The value zero - use this to remove either the source or the destination values.SrcColor: The value of this stage is multiplied by the source color value.SrcAlpha: The value of this stage is multiplied by the source alpha value.DstColor: The value of this stage is multiplied by frame buffer source color value.DstAlpha: The value of this stage is multiplied by frame buffer source alpha value.OneMinusSrcColor: The value of this stage is multiplied by (1 - source color).OneMinusSrcAlpha: The value of this stage is multiplied by (1 - source alpha).OneMinusDstColor: The value of this stage is multiplied by (1 - destination color).OneMinusDstAlpha: The value of this stage is multiplied by (1 - destination alpha).Blend Op RGB & Blend Op Alpha: Add, Sub, Rev Sub, Min and MaxColor Mask: Sets color channel writing mask, turning them all OFF makes it invisible.

![MN_3.jpg](./ase.assets/MN_3.jpg)
**Stencil Buffer**The stencil buffer can be used as a general purpose per pixel mask for saving or discarding pixels. It's usually an 8 bit integer per pixel. The value can be written to, increment or decremented. Subsequent draw calls can test against the value, to decide if a pixel should be discarded before running the pixel shader. When Cull mode is set to OFF this menu shows an extra set of comparison selections to use the buffer separately from front faces and back faces.Reference: The value to be compared against (if Comp is anything else than always) and/or the value to be written to the buffer (if either Pass, Fail or ZFail is set to replace). 0–255 integer.Read Mask: An 8 bit mask as an 0–255 integer, used when comparing the reference value with the contents of the buffer (referenceValue & readMask) comparisonFunction (stencilBufferValue & readMask). Default: 255.Write Mask: An 8 bit mask as an 0–255 integer, used when writing to the buffer. Default: 255.Comparison (front and back): The function used to compare the reference value to the current contents of the buffer. Default: always.Pass (front and back): What to do with the contents of the buffer if the stencil test (and the depth test) passes. Default: keep.Fail (front and back): What to do with the contents of the buffer if the stencil test fails. Default: keep.ZFail (front and back): What to do with the contents of the buffer if the stencil test passes, but the depth test fails. Default: keep.

![MN_4.jpg](./ase.assets/MN_4.jpg)
**Tessellation**Phong: Modifies the positions of the subdivided faces so that the resulting surface follows the mesh normals a bit; set to OFF by Default.Strength: Effect strength 0-1.Type: Defines the technique used; Distance Based, Fixed, Edge Length and Edge Length Cull.Tess: Tessellation factor; 1-32.Min: Minimum Tessellation distance.Max: Maximum Tessellation distance.Edge Length: Maximum length an edge can have before starting to tessellate.Max Disp: Maximum displacement outside of the frustum borders where polygon patches are still tesselated. 

![OutlineOptions.jpg](./ase.assets/OutlineOptions.jpg)
**Outline** Creates a customizable outline effect using the inverse hull techniqueMode: Vertex mode offsets the hull by a value while vertex scale increases by a percentage.Color: Lets you define the color of the outline.Width: The value to be offseted or scaled by.

![BillboardOptions.jpg](./ase.assets/BillboardOptions.jpg)
**Billboard**Type: A cylindrical billboard will only rotate on the Y axis while a spherical will rotate towards the camera irregardless of it's rotation.Ignore Rotation: Setting this on will ignore the billboard transform rotation.

![DepthOptions.jpg](./ase.assets/DepthOptions.jpg)
**Depth**ZWrite Mode: Controls whether pixels from this object are written to the depth buffer (default is On). If you’re drawing solid objects, leave this on. If you’re drawing semitransparent effects, switch to ZWrite Off. For more details read below.ZTest Mode: How should depth testing be performed. Default is LEqual (draw objects in from or at the distance as existing objects; hide objects behind them). ASE provides ZTest Less, Greater, LEqual, GEqual, Equal, NotEqual and Always.Offset: Allows you specify a depth offset with two parameters. factor and units. Factor scales the maximum Z slope, with respect to X or Y of the polygon, and units scale the minimum resolvable depth buffer value. This allows you to force one polygon to be drawn on top of another although they are actually in the same position. For example Offset 0, –1 pulls the polygon closer to the camera ignoring the polygon’s slope, whereas Offset –1, –1 will pull the polygon even closer when looking at a grazing angle.Factor: Scales the maximum Z slope, with respect to X or Y of the polygon.Units: Units scale the minimum resolvable depth buffer value.

![RenderingOptions.jpg](./ase.assets/RenderingOptions.jpg)
**Rendering Options**Here it's possible to activate or deactivate certain shader features, by the default most of them will be ON to mimic Unity's standard shader.

![PlatformOptions.jpg](./ase.assets/PlatformOptions.jpg)
**Rendering Platforms**Defines which platforms are supported; set to All by default.

![AdditionalIncludes.jpg](./ase.assets/AdditionalIncludes.jpg)
**Additional Includes**Allows a definition of a relative path from the shader for a cg include file. If the file is missing or the path incorrect it will fail to compile the shader. "../" can be use to go down a folder.

![AdditionalPragmas.jpg](./ase.assets/AdditionalPragmas.jpg)
**Additional Pragmas**Allows the addition of individual pragma directives to control the compilation and rendering of the shader.

![CustomTags.jpg](./ase.assets/CustomTags.jpg)
**Custom SubShader Tags**Allows the addition of custom subshader tags for custom shader rendering control.

![MaterialProperties.jpg](./ase.assets/MaterialProperties.jpg)
**Material Properties**Variables set to Property will be listed in this section, you tweak their position by dragging them.Referencing Custom PropertiesCertain shader options, like Cull Mode or Stencil, can also be configured by shader properties, Ints and Floats to be specific, instead of their usual predefined values. 

![PropertyMode.gif](./ase.assets/PropertyMode.gif)  
These will have a clickable Dot present on the side of the drop-down box, which you may use as a toggle in order to activate the new property select mode for selecting your own properties through the shader option's list. Shader Functions

![sf_1.jpg](./ase.assets/sf_1.jpg)
Shader Functions, SF for short, are individual node networks that allow you to build reusable functions. Easy to setup and extremely flexible, they work by receiving input values directly from your shader, processing that information and outputting them back for further alterations or direct use. SF assets are not bound to any shader, you can use them multiple times throughout your project, in the same shader, inside other Shader Functions, or even share them with other users. From simple to complex graphs, Shader Functions are a great way to reduce canvas clutter by packing complex networks into single nodes, and a great way to eliminate unnecessary repetitive tasks; they can be considered a form of "grouping", that offers you a way to group nodes into more manageable assets. **Would you like to share your creations with the ASE community?** [Contribute here!](http://amplify.pt/unity/amplify-shader-editor/contribute/) FeaturesWorks with all ASE nodes.Configurable Input/Output nodes.Copy & Paste nodes between shaders and SF.Supports all variable types, including Material Properties.Reusable and unique assets, not bound to any shader or project.Seamless editor workflow, drag & drop into any open shader or add them from the Node list.Comparison

![sf_2.jpg](./ase.assets/sf_2.jpg) 
The node networks above all produce the same burning effect. The **original** version does not use shader functions. **Version 1** uses a SF that contains the original node network used to generate the burning effect, it receives 1 Texture Object node for the burn mask, 1 Texture Object node for the fire texture, and 1 Texture Coordinate node. **Version 2** is simpler than the previous example, the burn effect generation and texture nodes are all included in the SF, the only exception being the Texture Coordinate node that allows users to tweak its behavior. Keep in mind that a SF does not need to receive any input, the outputted data can be entirely generated in its graph if necessary.**Version 1 Shader Function Example**

![sf_3.jpg](./ase.assets/sf_3.jpg)Creation and Usage

![sf_4.jpg](./ase.assets/sf_4.jpg)Create a new Shader Function Asset under Assets > Create > Shaders > Amplify Shader Function.

![sf_5.jpg](./ase.assets/sf_5.jpg)Your newly created Shader Function will be automatically opened in the ASE Editor after being renamed.

![sf_6.jpg](./ase.assets/sf_6.jpg)1. Add your Shader Function description here. You can also reorder your Function Inputs/Outputs and Material Properties by dragging them to the desired position. The order set in your SF will be the same used in your Material inspector tab.2. Create 2 Input nodes or more. By default, there's always 1 Output node but you can add as many as necessary. You can also use other SF nodes inside your active SF but, in order to avoid Shader Function Loops, you cannot add a function to its own canvas.3. Select an Input node to set the type used or toggle the Auto Cast option to automate the procedure directly in the left tab as you would with any other node properties.4. Connect your resulting output(s) directly to the Output node(s).5. Save your changes and click Return to go back to the previously open Shader or Material, if any.

![sf_7.jpg](./ase.assets/sf_7.jpg)
1. Add the created Shader Function to your shader by selecting it directly from the Node List. SF nodes can be used just as any other ASE nodes, they can be duplicated, copied, or deleted.2. Alternatively, you can drag & drop Shader Functions directly into your editor canvas.3. Double-click a SF node to open it.HotkeysColored Line Mode

![DebugMode.jpg](./ase.assets/DebugMode.jpg) 
Press [ W ] to toggle it.Node Previews

![source.gif](./ase.assets/source.gif) 
Press [ P ] to toggle node previewsMulti-line Mod

![LsGX8pv.gif](http://i.imgur.com/LsGX8pv.gif)
Press [ CTRL + W ] to activate the multi-line mode.Full Shortcut ListEditor**[Double Click Wire]:** Create wire control point.**[F1]:** Open Selected Node Wiki page**[C]:** Create Commentary box (groups/grouping/group nodes)**[F]:** Focus On Selection**[B]:** New Master Node**[Space]:** Open Node Palette**[W]:** Toggle Colored Line Mode**[Control + W]:** Toggle Multi-Line Mode**[P]:** Global Preview**[Delete]:** Delete selected nodes**[Backspace]:** Delete selected nodesNodesUse KEY + Left Mouse Button**[Alpha5]:** Color**[Alpha0]:** Int**[Alpha1]:** Float**[Alpha2]:** Vector2**[Alpha3]:** Vector3**[Alpha4]:** Vector4**[L]:** Lerp**[N]:** Normalize**[O]:** One Minus**[E]:** Power**[A]:** Add**[D]:** Divide**[M]:** Multiply**[S]:** Subtract**[R]:** World Reflection**[T]:** Texture Sample**[U]:** Texture CoordinatesTranslucencyThe Translucency input provides a fast method of representing light scattering. It's not the most realistic method available but it's a flexible and fast-performing approximation. In our example (AmplifyShaderEditor\Examples\Official\Translucency) we use a simple red tinted Depth Texture to represent the skin subsurface scatter effect but you don't necessarily need to use the same setup, you could very well plug a full RGB texture to the Translucency Input in order to get some color variation or stylized results

![uTq4P7T.gif](http://i.imgur.com/uTq4P7T.gif)
**The Material Properties below are automatically added to your shader when you plug your values into the Translucency Input Port.**

![Translucency.jpg](./ase.assets/Translucency.jpg)
Strength: Translucency effect strength, you can think of it as a multiplier slider.Normal Distortion: Defines the amount of normal distortion on the translucency effect.Scattering Falloff: Scattering falloff amount for the translucency effect.Direct: Direct light influence on the translucency effect.Ambient: GI/ambient light influence on the translucency effect.Shadow: Self-shadowing influence on the translucency effect, reduces the translucency effect in shadowed areas.Your First shader

![ASE_m_12.jpg](./ase.assets/ASE_m_12.jpg) 1. Open the Editor, create a new material and a new shader in the Project Explorer tab. In the newly created material, select your new shader and click on the Open in Shader Editor button to open both the shader and material.

![ASE_m_13.jpg](./ase.assets/ASE_m_13.jpg) 2. As an example, select the Output Node and change its Light Model to specular.

![ASE_m_14.jpg](./ase.assets/ASE_m_14.jpg) 3. Right click on the canvas to open the searchable node list and type “Lerp”. Click on Lerp and connect the node Output Port to the Albedo Input Port.

![ASE_m_15.jpg](./ase.assets/ASE_m_15.jpg) 4. Hold the 5 shortcut key and click on the canvas to create a new Color node. Alternatively, you can use the searchable list used early or drag and drop the node from the Node Palette on the right side; Constants > Color [ 5 ].

![ASE_m_16.jpg](./ase.assets/ASE_m_16.jpg) 5. Select the new Color node and hit ‘CTRL/CMD+D’ to duplicate it. Connect both nodes to the Lerp Input Ports. Set the first node to gray and the second one to a more lively color.

![ASE_m_17.jpg](./ase.assets/ASE_m_17.jpg)
6. Create a Float node by dragging and dropping it from the Node Palette, connect it to the Alpha port of the Lerp node. In the node properties of the newly created float, set its Minimum value to 0 and Maximum to 1. Notice that the Float can now be controlled by a Slider. Don’t forget to set its Parameter Type to Property, this way you will be able to change it directly in the material. You can also name the node and change its position in the material inspector by adjusting the Index value. As an example, lets name it Color Mix.

![ASE_m_18.jpg](http://amplify.pt/wp-content/uploads/2016/09/ASE_m_18.jpg)
7. Create a new Float and connect it to the Smoothness Input Port of the Output Node, set its Minimum value to 0 and Maximum to 1 as you did before. Set its type to Property and name it Smoothness Value. Create another Float and connect it to the Specular Input Port, set its Minimum value to 0 and Maximum to 1. Set its Type to Property and name it Specular Value.

![ASE_m_19.jpg](http://amplify.pt/wp-content/uploads/2016/09/ASE_m_19.jpg)
8. To conclude, Drag and Drop a Normal Map texture from your Project Explorer directly into the canvas. As an example, we used a Brushed Metal texture. Connect it to the Normal Input Port of the Output Node and you are done. You have just built your first shader, don’t forget to save your work regularly by clicking the Update button located in the upper left corner. Alternatively, you could edit the shader with the LIVE mode enabled, any change are immediately saved and updated. Depending on the complexity of the shader, the LIVE mode may take a second or so to update. Contrary to Default shader values, any changes made to a material property are immediately visible.
![ASE_m_20.jpg](http://amplify.pt/wp-content/uploads/2016/09/ASE_m_20.jpg) 



## 3rd-Party Compatibility

### Aura 2

Using Aura 2 with ASE is quite simple, just add the necessary nodes.

![G07b3mm.png](./ase.assets/G07b3mm.png)

Be sure to check the official Aura 2 Manual for updated information.

### Substance Support

Support for [Substances](https://www.allegorithmic.com/substance) in Unity 2018 and above has been added to ASE.


![Tv4Hllq.gif](https://i.imgur.com/Tv4Hllq.gif)


The original Substance example had to be packaged into a Unity package since .sbsar files now cause an importing error in Unity 2018, as native Substance support has been dropped.


If you're using **pre-Unity 2018** versions where native Substance support wasn't yet deprecated, you can find the Substance Example below:

- Go into the *AmplifyShaderEditor\Examples\Official\Substance* folder
- Extract the **LegacySubstanceExample.unitypackage**


If you're using **Unity 2018**, you'll need to make sure that you install the Allegorithmic Substance plugin before you extract the proper ASE package:

- Download, import and setup the [Substance in Unity](https://assetstore.unity.com/packages/tools/utilities/substance-in-unity-110555?aid=1011lPwI&pubref=Wiki)
- Go into the *AmplifyShaderEditor\Examples\Official\Substance2018* folder
- Extract the **Substance2018.unitypackage**


ASE lets you use substances directly or indirectly from within the editor. The most basic way to use a substance is to literally drag and drop a substance asset inside the editor. A new [Substance Sample](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Substance_Sample) node will be created with it's various textures inside that can be used anywhere.

It's possible to set the substance to generate all textures and drag and drop each one of them independently as a regular texture. These will maintain their reference and update accordingly even if you regenerate the textures.

It's also possible to create a generic shader that is used directly in the shader. The only caveat for this is the extra configuration needed in the substance asset to link each texture sample to a generated texture. If a more automatic process is needed the texture sample node can be set to use a property name that matches Unity's default names (ie: _MainTex for albedos, _SpecGlossMap for specular maps, _MetallicGlossMap for metallic maps, _Glossiness for smoothness maps, _BumpMap for normal maps, _OcclusionMap for occlusion maps, _EmissionMap for emission maps, etc) This way the substance asset will detect the property and automatically assign them the correct texture without extra intervention.

### MegaSplat

Native support for ASE is included in [MegaSplat](https://www.assetstore.unity3d.com/en/#!/content/76166?aid=1011lPwI&pubref=Wiki)

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

The following image shows how it's possible to create a simple wrapped Lambertian shader which should be very performant for lower end machines. ![img](http://amplify.pt/wp-content/uploads/2018/07/CustomLightingExample.jpg) Nodes used: [Texture Sample](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Texture_Sample), [World Normal](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/World_Normal), [World Space Light Dir](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/World_Space_Light_Dir), [Dot](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Dot), [Multiply](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Multiply) [Float](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Float), [Add](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Add)

Combine this with the previous rendering options for extra savings and do notice how in the general options a few of them where turned off or down for better performance (ie: Shader Model, Precision, Cast Shadows)

As a learning step, it might be a good idea to check the Toon Ramp sample provided by the ASE package which uses custom lighting in a more complex way to create a toon ramp effect with rim light and shadow support.

#### Mobile Friendly Templates

Some times what's needed is a specific vertex/frag shader that does a very simple job, for instance, particles, sprites, UI, etc. For these cases and others ASE allows the injection of shader code into pre-existing shaders that we call "templates". These are regular vertex/frag shaders that were modified by adding some tags the editor can read to know where to inject new code and what code already exists in the template.

There's a whole page dedicated on how these templates work and how you can build your own [right here](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Templates).

The reason they might be important for mobile shaders is that these templates can be extremely simple with barely any code at all. If the idea is to save performance, a generic unlit template can serve as a base to build upon since these are editable inside the editor and extra features can be added either by construction a more complex graph tree or by editing the original template. The only caveat being the user must have a bit of shader knowledge to edit or create the original template shader. Fortunately ASE already provides a few templates that any user can pick and use as any other shader.

![img](http://amplify.pt/Nodes/MasterNode/TemplateExample.jpg) Nodes used: [Template Parameter](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Template_Parameter), [Texture Sample](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Texture_Sample), [Grayscale](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Grayscale), [Float](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Float), [Lerp](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Lerp)

This feature is still in development and more of these templates will be provided in the future to implement more complex or specific effects when they become available.

### Android

When using the Texture Sampler node in ASE and the target platform is Android, it will ignore the Scale Parameter, which is an intended behaviour because Unity does not scale normal maps for platforms that don't support DXT5nm format, which is the format Unity compresses normal maps into.

Although this can be fixed by directly changing the built-in shader files, which is troublesome to do and to maintain, a simpler solution would be to do the exact same calculation that Unity does withing the editor itself.

The following image and shader file perform this calculation while also making sure that the shader still works even outside of the Android environment by checking the define symbol that Unity sets itself. We recommend that you create a Shader Function with this logic if you need to use it in several shaders.


[Normal Scale in Android](http://amplify.pt/wp-content/download/NormalScaleInAndroid.zip)

![img](http://amplify.pt/wp-content/uploads/2017/09/ASE_m_25.png)