/*! For license information please see 37a329a6418f49b415e4d1a88f8e48fc20175f4a-44614aa029bf9740e7f5.js.LICENSE.txt */
"use strict";(self.webpackChunkcitation_generator=self.webpackChunkcitation_generator||[]).push([[816],{9408:function(e,t,r){function o(e,t,r){var o={};return Object.keys(e).forEach((function(n){o[n]=e[n].reduce((function(e,o){return o&&(r&&r[o]&&e.push(r[o]),e.push(t(o))),e}),[]).join(" ")})),o}r.d(t,{Z:function(){return o}})},6756:function(e,t){var r,o=function(e){return e},n=(r=o,{configure:function(e){r=e},generate:function(e){return r(e)},reset:function(){r=o}});t.Z=n},8416:function(e,t,r){r.d(t,{Z:function(){return a}});var o=r(6756),n={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function a(e,t){return n[t]||"".concat(o.Z.generate(e),"-").concat(t)}},2194:function(e,t,r){r.d(t,{Z:function(){return n}});var o=r(8416);function n(e,t){var r={};return t.forEach((function(t){r[t]=(0,o.Z)(e,t)})),r}},9211:function(e,t,r){r.d(t,{Z:function(){return v}});var o=r(7462),n=r(3366),a=r(7294),i=r(5505),s=r(2048),l=r(2037),c=r(8297),u=r(8377),p=r(5893),d=["className","component"];var f=r(6756),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,r=e.defaultClassName,f=void 0===r?"MuiBox-root":r,m=e.generateClassName,v=(0,s.ZP)("div")(l.Z),h=a.forwardRef((function(e,r){var a=(0,u.Z)(t),s=(0,c.Z)(e),l=s.className,h=s.component,g=void 0===h?"div":h,y=(0,n.Z)(s,d);return(0,p.jsx)(v,(0,o.Z)({as:g,ref:r,className:(0,i.Z)(l,m?m(f):f),theme:a},y))}));return h}({defaultTheme:(0,r(5656).Z)(),defaultClassName:"MuiBox-root",generateClassName:f.Z.generate}),v=m},5616:function(e,t,r){r.d(t,{Z:function(){return g}});var o=r(4942),n=r(3366),a=r(7462),i=r(7294),s=r(5505),l=r(9408),c=r(2371),u=r(8348),p=r(8416);function d(e){return(0,p.Z)("MuiContainer",e)}(0,r(2194).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var f=r(9240),m=r(5893),v=["className","component","disableGutters","fixed","maxWidth"],h=(0,u.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,f.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&(0,o.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,r){var o=t.breakpoints.values[r];return 0!==o&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(o).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)({},"xs"===r.maxWidth&&(0,o.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),r.maxWidth&&"xs"!==r.maxWidth&&(0,o.Z)({},t.breakpoints.up(r.maxWidth),{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}))})),g=i.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiContainer"}),o=r.className,i=r.component,u=void 0===i?"div":i,p=r.disableGutters,g=void 0!==p&&p,y=r.fixed,b=void 0!==y&&y,Z=r.maxWidth,x=void 0===Z?"lg":Z,w=(0,n.Z)(r,v),k=(0,a.Z)({},r,{component:u,disableGutters:g,fixed:b,maxWidth:x}),S=function(e){var t=e.classes,r=e.fixed,o=e.disableGutters,n=e.maxWidth,a={root:["root",n&&"maxWidth".concat((0,f.Z)(String(n))),r&&"fixed",o&&"disableGutters"]};return(0,l.Z)(a,d,t)}(k);return(0,m.jsx)(h,(0,a.Z)({as:u,ownerState:k,className:(0,s.Z)(S.root,o),ref:t},w))}))},8953:function(e,t,r){r.d(t,{Z:function(){return g}});var o=r(3366),n=r(7462),a=r(7294),i=r(5505),s=r(9408),l=r(7663),c=r(8348),u=r(2371),p=r(8416);function d(e){return(0,p.Z)("MuiPaper",e)}(0,r(2194).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=r(5893),m=["className","component","elevation","square","variant"],v=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},h=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t["elevation".concat(r.elevation)]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,n.Z)({backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},!r.square&&{borderRadius:t.shape.borderRadius},"outlined"===r.variant&&{border:"1px solid ".concat(t.palette.divider)},"elevation"===r.variant&&(0,n.Z)({boxShadow:t.shadows[r.elevation]},"dark"===t.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,l.Fq)("#fff",v(r.elevation)),", ").concat((0,l.Fq)("#fff",v(r.elevation)),")")}))})),g=a.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiPaper"}),a=r.className,l=r.component,c=void 0===l?"div":l,p=r.elevation,v=void 0===p?1:p,g=r.square,y=void 0!==g&&g,b=r.variant,Z=void 0===b?"elevation":b,x=(0,o.Z)(r,m),w=(0,n.Z)({},r,{component:c,elevation:v,square:y,variant:Z}),k=function(e){var t=e.square,r=e.elevation,o=e.variant,n=e.classes,a={root:["root",o,!t&&"rounded","elevation"===o&&"elevation".concat(r)]};return(0,s.Z)(a,d,n)}(w);return(0,f.jsx)(h,(0,n.Z)({as:c,ownerState:w,className:(0,i.Z)(k.root,a),ref:t},x))}))},4382:function(e,t,r){var o=r(4942),n=r(3366),a=r(7462),i=r(7294),s=r(2692),l=r(5332),c=r(8297),u=r(6486),p=r(8348),d=r(2371),f=r(5893),m=["component","direction","spacing","divider","children"];function v(e,t){var r=i.Children.toArray(e).filter(Boolean);return r.reduce((function(e,o,n){return e.push(o),n<r.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(n)})),e}),[])}var h=(0,p.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,r=e.theme,n=(0,a.Z)({display:"flex"},(0,s.k9)({theme:r},(0,s.P$)({values:t.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=(0,l.hB)(r),c=Object.keys(r.breakpoints.values).reduce((function(e,r){return null==t.spacing[r]&&null==t.direction[r]||(e[r]=!0),e}),{}),p=(0,s.P$)({values:t.direction,base:c}),d=(0,s.P$)({values:t.spacing,base:c});n=(0,u.Z)(n,(0,s.k9)({theme:r},d,(function(e,r){return{"& > :not(style) + :not(style)":(0,o.Z)({margin:0},"margin".concat((n=r?p[r]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n])),(0,l.NA)(i,e))};var n})))}return n})),g=i.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStack"}),o=(0,c.Z)(r),i=o.component,s=void 0===i?"div":i,l=o.direction,u=void 0===l?"column":l,p=o.spacing,g=void 0===p?0:p,y=o.divider,b=o.children,Z=(0,n.Z)(o,m),x={direction:u,spacing:g};return(0,f.jsx)(h,(0,a.Z)({as:s,ownerState:x,ref:t},Z,{children:y?v(b,y):b}))}));t.Z=g},9308:function(e,t,r){r.d(t,{Z:function(){return b}});var o=r(3366),n=r(7462),a=r(7294),i=r(5505),s=r(8297),l=r(9408),c=r(8348),u=r(2371),p=r(9240),d=r(8416);function f(e){return(0,d.Z)("MuiTypography",e)}(0,r(2194).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(5893),v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],h=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t["align".concat((0,p.Z)(r.align))],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((function(e){var t=e.theme,r=e.ownerState;return(0,n.Z)({margin:0},r.variant&&t.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=a.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiTypography"}),a=function(e){return y[e]||e}(r.color),c=(0,s.Z)((0,n.Z)({},r,{color:a})),d=c.align,b=void 0===d?"inherit":d,Z=c.className,x=c.component,w=c.gutterBottom,k=void 0!==w&&w,S=c.noWrap,P=void 0!==S&&S,C=c.paragraph,R=void 0!==C&&C,M=c.variant,A=void 0===M?"body1":M,_=c.variantMapping,T=void 0===_?g:_,E=(0,o.Z)(c,v),N=(0,n.Z)({},c,{align:b,color:a,className:Z,component:x,gutterBottom:k,noWrap:P,paragraph:R,variant:A,variantMapping:T}),W=x||(R?"p":T[A]||g[A])||"span",O=function(e){var t=e.align,r=e.gutterBottom,o=e.noWrap,n=e.paragraph,a=e.variant,i=e.classes,s={root:["root",a,"inherit"!==e.align&&"align".concat((0,p.Z)(t)),r&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return(0,l.Z)(s,f,i)}(N);return(0,m.jsx)(h,(0,n.Z)({as:W,ref:t,ownerState:N,className:(0,i.Z)(O.root,Z)},E))}))},8348:function(e,t,r){r.d(t,{ZP:function(){return C},FO:function(){return k},Dz:function(){return S}});var o=r(3433),n=r(7462),a=r(3366),i=r(2048),s=r(3409),l=r(2037),c=r(6550),u=["variant"];function p(e){return 0===e.length}function d(e){var t=e.variant,r=(0,a.Z)(e,u),o=t||"";return Object.keys(r).sort().forEach((function(t){o+="color"===t?p(o)?e[t]:(0,c.Z)(e[t]):"".concat(p(o)?t:(0,c.Z)(t)).concat((0,c.Z)(e[t].toString()))})),o}var f=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],m=["theme"],v=["theme"];function h(e){return 0===Object.keys(e).length}var g=function(e,t){return t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null},y=function(e,t){var r=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(r=t.components[e].variants);var o={};return r.forEach((function(e){var t=d(e.props);o[t]=e.style})),o},b=function(e,t,r,o){var n,a,i=e.ownerState,s=void 0===i?{}:i,l=[],c=null==r||null==(n=r.components)||null==(a=n[o])?void 0:a.variants;return c&&c.forEach((function(r){var o=!0;Object.keys(r.props).forEach((function(t){s[t]!==r.props[t]&&e[t]!==r.props[t]&&(o=!1)})),o&&l.push(t[d(r.props)])})),l};function Z(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}var x=(0,s.Z)();var w=r(9552),k=function(e){return Z(e)&&"classes"!==e},S=Z,P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,r=void 0===t?x:t,s=e.rootShouldForwardProp,c=void 0===s?Z:s,u=e.slotShouldForwardProp,p=void 0===u?Z:u;return function(e){var t,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=s.name,d=s.slot,x=s.skipVariantsResolver,w=s.skipSx,k=s.overridesResolver,S=(0,a.Z)(s,f),P=void 0!==x?x:d&&"Root"!==d||!1,C=w||!1;var R=Z;"Root"===d?R=c:d&&(R=p);var M=(0,i.ZP)(e,(0,n.Z)({shouldForwardProp:R,label:t},S)),A=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];var c=i?i.map((function(e){return"function"==typeof e&&e.__emotion_real!==e?function(t){var o=t.theme,i=(0,a.Z)(t,m);return e((0,n.Z)({theme:h(o)?r:o},i))}:e})):[],p=e;u&&k&&c.push((function(e){var t=h(e.theme)?r:e.theme,o=g(u,t);return o?k(e,o):null})),u&&!P&&c.push((function(e){var t=h(e.theme)?r:e.theme;return b(e,y(u,t),t,u)})),C||c.push((function(e){var t=h(e.theme)?r:e.theme;return(0,l.Z)((0,n.Z)({},e,{theme:t}))}));var d=c.length-i.length;if(Array.isArray(e)&&d>0){var f=new Array(d).fill("");(p=[].concat((0,o.Z)(e),(0,o.Z)(f))).raw=[].concat((0,o.Z)(e.raw),(0,o.Z)(f))}else"function"==typeof e&&(p=function(t){var o=t.theme,i=(0,a.Z)(t,v);return e((0,n.Z)({theme:h(o)?r:o},i))});var Z=M.apply(void 0,[p].concat((0,o.Z)(c)));return Z};return A}}({defaultTheme:w.Z,rootShouldForwardProp:k}),C=P},9240:function(e,t,r){var o=r(6550);t.Z=o.Z},5973:function(e,t,r){var o=r(8127);t.Z=o.Z},93:function(e,t,r){r.d(t,{Z:function(){return d}});var o,n=r(7294),a=!0,i=!1,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(a=!0)}function c(){a=!1}function u(){"hidden"===this.visibilityState&&i&&(a=!0)}function p(e){var t,r,o,n=e.target;try{return n.matches(":focus-visible")}catch(i){}return a||(r=(t=n).type,!("INPUT"!==(o=t.tagName)||!s[r]||t.readOnly)||"TEXTAREA"===o&&!t.readOnly||!!t.isContentEditable)}var d=function(){var e=n.useCallback((function(e){var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",c,!0),t.addEventListener("pointerdown",c,!0),t.addEventListener("touchstart",c,!0),t.addEventListener("visibilitychange",u,!0))}),[]),t=n.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!p(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(i=!0,window.clearTimeout(o),o=window.setTimeout((function(){i=!1}),100),t.current=!1,!0)},ref:e}}},2048:function(e,t,r){r.d(t,{ZP:function(){return b}});r(7154);var o=r(7294),n=r(7462),a=r(7548),i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=(0,a.Z)((function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),l=r(4295),c=r(4660),u=r(6419),p=s,d=function(e){return"theme"!==e},f=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?p:d},m=function(e,t,r){var o;if(t){var n=t.shouldForwardProp;o=e.__emotion_forwardProp&&n?function(t){return e.__emotion_forwardProp(t)&&n(t)}:n}return"function"!=typeof o&&r&&(o=e.__emotion_forwardProp),o},v=function(){return null},h=function e(t,r){var a,i,s=t.__emotion_real===t,p=s&&t.__emotion_base||t;void 0!==r&&(a=r.label,i=r.target);var d=m(t,r,s),h=d||f(p),g=!h("as");return function(){var y=arguments,b=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&b.push("label:"+a+";"),null==y[0]||void 0===y[0].raw)b.push.apply(b,y);else{0,b.push(y[0][0]);for(var Z=y.length,x=1;x<Z;x++)b.push(y[x],y[0][x])}var w=(0,l.w)((function(e,t,r){var n=g&&e.as||p,a="",s=[],m=e;if(null==e.theme){for(var y in m={},e)m[y]=e[y];m.theme=(0,o.useContext)(l.T)}"string"==typeof e.className?a=(0,c.f)(t.registered,s,e.className):null!=e.className&&(a=e.className+" ");var Z=(0,u.O)(b.concat(s),t.registered,m);(0,c.M)(t,Z,"string"==typeof n);a+=t.key+"-"+Z.name,void 0!==i&&(a+=" "+i);var x=g&&void 0===d?f(n):h,w={};for(var k in e)g&&"as"===k||x(k)&&(w[k]=e[k]);w.className=a,w.ref=r;var S=(0,o.createElement)(n,w),P=(0,o.createElement)(v,null);return(0,o.createElement)(o.Fragment,null,P,S)}));return w.displayName=void 0!==a?a:"Styled("+("string"==typeof p?p:p.displayName||p.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=p,w.__emotion_styles=b,w.__emotion_forwardProp=d,Object.defineProperty(w,"toString",{value:function(){return"."+i}}),w.withComponent=function(t,o){return e(t,(0,n.Z)({},r,o,{shouldForwardProp:m(w,o,!0)})).apply(void 0,b)},w}},g=h.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){g[e]=g(e)}));var y=g;function b(e,t){return y(e,t)}},9665:function(e,t,r){r.d(t,{Z:function(){return Y},G:function(){return X}});var o=r(4942),n=r(5535),a=r(4106);var i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=t.reduce((function(e,t){return t.filterProps.forEach((function(r){e[r]=t})),e}),{}),n=function(e){return Object.keys(e).reduce((function(t,r){return o[r]?(0,a.Z)(t,o[r](e)):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},s=r(5332),l=r(2692);function c(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var u=(0,n.Z)({prop:"border",themeKey:"borders",transform:c}),p=(0,n.Z)({prop:"borderTop",themeKey:"borders",transform:c}),d=(0,n.Z)({prop:"borderRight",themeKey:"borders",transform:c}),f=(0,n.Z)({prop:"borderBottom",themeKey:"borders",transform:c}),m=(0,n.Z)({prop:"borderLeft",themeKey:"borders",transform:c}),v=(0,n.Z)({prop:"borderColor",themeKey:"palette"}),h=(0,n.Z)({prop:"borderTopColor",themeKey:"palette"}),g=(0,n.Z)({prop:"borderRightColor",themeKey:"palette"}),y=(0,n.Z)({prop:"borderBottomColor",themeKey:"palette"}),b=(0,n.Z)({prop:"borderLeftColor",themeKey:"palette"}),Z=function(e){if(void 0!==e.borderRadius&&null!==e.borderRadius){var t=(0,s.eI)(e.theme,"shape.borderRadius",4,"borderRadius");return(0,l.k9)(e,e.borderRadius,(function(e){return{borderRadius:(0,s.NA)(t,e)}}))}return null};Z.propTypes={},Z.filterProps=["borderRadius"];var x=i(u,p,d,f,m,v,h,g,y,b,Z),w=i((0,n.Z)({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),(0,n.Z)({prop:"display"}),(0,n.Z)({prop:"overflow"}),(0,n.Z)({prop:"textOverflow"}),(0,n.Z)({prop:"visibility"}),(0,n.Z)({prop:"whiteSpace"})),k=i((0,n.Z)({prop:"flexBasis"}),(0,n.Z)({prop:"flexDirection"}),(0,n.Z)({prop:"flexWrap"}),(0,n.Z)({prop:"justifyContent"}),(0,n.Z)({prop:"alignItems"}),(0,n.Z)({prop:"alignContent"}),(0,n.Z)({prop:"order"}),(0,n.Z)({prop:"flex"}),(0,n.Z)({prop:"flexGrow"}),(0,n.Z)({prop:"flexShrink"}),(0,n.Z)({prop:"alignSelf"}),(0,n.Z)({prop:"justifyItems"}),(0,n.Z)({prop:"justifySelf"})),S=function(e){if(void 0!==e.gap&&null!==e.gap){var t=(0,s.eI)(e.theme,"spacing",8,"gap");return(0,l.k9)(e,e.gap,(function(e){return{gap:(0,s.NA)(t,e)}}))}return null};S.propTypes={},S.filterProps=["gap"];var P=function(e){if(void 0!==e.columnGap&&null!==e.columnGap){var t=(0,s.eI)(e.theme,"spacing",8,"columnGap");return(0,l.k9)(e,e.columnGap,(function(e){return{columnGap:(0,s.NA)(t,e)}}))}return null};P.propTypes={},P.filterProps=["columnGap"];var C=function(e){if(void 0!==e.rowGap&&null!==e.rowGap){var t=(0,s.eI)(e.theme,"spacing",8,"rowGap");return(0,l.k9)(e,e.rowGap,(function(e){return{rowGap:(0,s.NA)(t,e)}}))}return null};C.propTypes={},C.filterProps=["rowGap"];var R=i(S,P,C,(0,n.Z)({prop:"gridColumn"}),(0,n.Z)({prop:"gridRow"}),(0,n.Z)({prop:"gridAutoFlow"}),(0,n.Z)({prop:"gridAutoColumns"}),(0,n.Z)({prop:"gridAutoRows"}),(0,n.Z)({prop:"gridTemplateColumns"}),(0,n.Z)({prop:"gridTemplateRows"}),(0,n.Z)({prop:"gridTemplateAreas"}),(0,n.Z)({prop:"gridArea"})),M=i((0,n.Z)({prop:"position"}),(0,n.Z)({prop:"zIndex",themeKey:"zIndex"}),(0,n.Z)({prop:"top"}),(0,n.Z)({prop:"right"}),(0,n.Z)({prop:"bottom"}),(0,n.Z)({prop:"left"})),A=i((0,n.Z)({prop:"color",themeKey:"palette"}),(0,n.Z)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}),(0,n.Z)({prop:"backgroundColor",themeKey:"palette"})),_=(0,n.Z)({prop:"boxShadow",themeKey:"shadows"});function T(e){return e<=1&&0!==e?"".concat(100*e,"%"):e}var E=(0,n.Z)({prop:"width",transform:T}),N=function(e){if(void 0!==e.maxWidth&&null!==e.maxWidth){return(0,l.k9)(e,e.maxWidth,(function(t){var r,o,n;return{maxWidth:(null==(r=e.theme)||null==(o=r.breakpoints)||null==(n=o.values)?void 0:n[t])||l.VO[t]||T(t)}}))}return null};N.filterProps=["maxWidth"];var W=(0,n.Z)({prop:"minWidth",transform:T}),O=(0,n.Z)({prop:"height",transform:T}),B=(0,n.Z)({prop:"maxHeight",transform:T}),G=(0,n.Z)({prop:"minHeight",transform:T}),j=((0,n.Z)({prop:"size",cssProperty:"width",transform:T}),(0,n.Z)({prop:"size",cssProperty:"height",transform:T}),i(E,N,W,O,B,G,(0,n.Z)({prop:"boxSizing"}))),L=(0,n.Z)({prop:"fontFamily",themeKey:"typography"}),z=(0,n.Z)({prop:"fontSize",themeKey:"typography"}),I=(0,n.Z)({prop:"fontStyle",themeKey:"typography"}),F=(0,n.Z)({prop:"fontWeight",themeKey:"typography"}),D=(0,n.Z)({prop:"letterSpacing"}),K=(0,n.Z)({prop:"lineHeight"}),q=(0,n.Z)({prop:"textAlign"}),H=i((0,n.Z)({prop:"typography",cssProperty:!1,themeKey:"typography"}),L,z,I,F,D,K,q),V={borders:x.filterProps,display:w.filterProps,flexbox:k.filterProps,grid:R.filterProps,positions:M.filterProps,palette:A.filterProps,shadows:_.filterProps,sizing:j.filterProps,spacing:s.ZP.filterProps,typography:H.filterProps},U={borders:x,display:w,flexbox:k,grid:R,positions:M,palette:A,shadows:_,sizing:j,spacing:s.ZP,typography:H},X=Object.keys(V).reduce((function(e,t){return V[t].forEach((function(r){e[r]=U[t]})),e}),{});var Y=function(e,t,r){var n,a=(n={},(0,o.Z)(n,e,t),(0,o.Z)(n,"theme",r),n),i=X[e];return i?i(a):(0,o.Z)({},e,t)}},8297:function(e,t,r){r.d(t,{Z:function(){return c}});var o=r(3433),n=r(7462),a=r(3366),i=r(6486),s=r(9665),l=["sx"];function c(e){var t,r=e.sx,c=function(e){var t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((function(r){s.G[r]?t.systemProps[r]=e[r]:t.otherProps[r]=e[r]})),t}((0,a.Z)(e,l)),u=c.systemProps,p=c.otherProps;return t=Array.isArray(r)?[u].concat((0,o.Z)(r)):"function"==typeof r?function(){var e=r.apply(void 0,arguments);return(0,i.P)(e)?(0,n.Z)({},u,e):u}:(0,n.Z)({},u,r),(0,n.Z)({},p,{sx:t})}},2037:function(e,t,r){var o=r(4942),n=r(4106),a=r(9665),i=r(2692);function s(e){var t=e||{},r=t.sx,l=t.theme,c=void 0===l?{}:l;if(!r)return null;function u(e){var t=e;if("function"==typeof e)t=e(c);else if("object"!=typeof e)return e;var r=(0,i.W8)(c.breakpoints),l=Object.keys(r),u=r;return Object.keys(t).forEach((function(e){var r,l,p=(r=t[e],l=c,"function"==typeof r?r(l):r);if(null!=p)if("object"==typeof p)if(a.G[e])u=(0,n.Z)(u,(0,a.Z)(e,p,c));else{var d=(0,i.k9)({theme:c},p,(function(t){return(0,o.Z)({},e,t)}));!function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=t.reduce((function(e,t){return e.concat(Object.keys(t))}),[]),n=new Set(o);return t.every((function(e){return n.size===Object.keys(e).length}))}(d,p)?u=(0,n.Z)(u,d):u[e]=s({sx:p,theme:c})}else u=(0,n.Z)(u,(0,a.Z)(e,p,c))})),(0,i.L7)(l,u)}return Array.isArray(r)?r.map(u):u(r)}s.filterProps=["sx"],t.Z=s},6386:function(e,t,r){function o(e,t){"function"==typeof e?e(t):e&&(e.current=t)}r.d(t,{Z:function(){return o}})},8127:function(e,t,r){r.d(t,{Z:function(){return a}});var o=r(7294),n=r(6386);function a(e,t){return o.useMemo((function(){return null==e&&null==t?null:function(r){(0,n.Z)(e,r),(0,n.Z)(t,r)}}),[e,t])}},5505:function(e,t,r){function o(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})},3085:function(e,t,r){var o=r(7294),n=r(5414),a=r(5313);t.Z=function(e){var t,r,i=e.description,s=e.lang,l=e.title,c=(0,a.useStaticQuery)("63159454").site,u=i||c.siteMetadata.description,p=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return o.createElement(n.q,{htmlAttributes:{lang:s},title:l,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=c.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:l},{name:"twitter:description",content:u}]})}},9098:function(e,t,r){r.d(t,{Z:function(){return Y}});var o=r(7294),n=r(3583);var a=r(6125),i=r(3366),s=r(7462),l=r(5505),c=r(9408),u=r(8348),p=r(2371),d=r(9240),f=r(8953),m=r(8416),v=r(2194);function h(e){return(0,m.Z)("MuiAppBar",e)}(0,v.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var g=r(5893),y=["className","color","enableColorOnDark","position"],b=(0,u.ZP)(f.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["position".concat((0,d.Z)(r.position))],t["color".concat((0,d.Z)(r.color))]]}})((function(e){var t=e.theme,r=e.ownerState,o="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return(0,s.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===r.position&&{position:"fixed",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===r.position&&{position:"absolute",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===r.position&&{position:"sticky",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0},"static"===r.position&&{position:"static"},"relative"===r.position&&{position:"relative"},"default"===r.color&&{backgroundColor:o,color:t.palette.getContrastText(o)},r.color&&"default"!==r.color&&"inherit"!==r.color&&"transparent"!==r.color&&{backgroundColor:t.palette[r.color].main,color:t.palette[r.color].contrastText},"inherit"===r.color&&{color:"inherit"},"dark"===t.palette.mode&&!r.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===r.color&&(0,s.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===t.palette.mode&&{backgroundImage:"none"}))})),Z=o.forwardRef((function(e,t){var r=(0,p.Z)({props:e,name:"MuiAppBar"}),o=r.className,n=r.color,a=void 0===n?"primary":n,u=r.enableColorOnDark,f=void 0!==u&&u,m=r.position,v=void 0===m?"fixed":m,Z=(0,i.Z)(r,y),x=(0,s.Z)({},r,{color:a,position:v,enableColorOnDark:f}),w=function(e){var t=e.color,r=e.position,o=e.classes,n={root:["root","color".concat((0,d.Z)(t)),"position".concat((0,d.Z)(r))]};return(0,c.Z)(n,h,o)}(x);return(0,g.jsx)(b,(0,s.Z)({square:!0,component:"header",ownerState:x,elevation:4,className:(0,l.Z)(w.root,o,"fixed"===v&&"mui-fixed"),ref:t},Z))})),x=r(4942);function w(e){return(0,m.Z)("MuiToolbar",e)}(0,v.Z)("MuiToolbar",["root","gutters","regular","dense"]);var k=["className","component","disableGutters","variant"],S=(0,u.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,s.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&(0,x.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===r.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),P=o.forwardRef((function(e,t){var r=(0,p.Z)({props:e,name:"MuiToolbar"}),o=r.className,n=r.component,a=void 0===n?"div":n,u=r.disableGutters,d=void 0!==u&&u,f=r.variant,m=void 0===f?"regular":f,v=(0,i.Z)(r,k),h=(0,s.Z)({},r,{component:a,disableGutters:d,variant:m}),y=function(e){var t=e.classes,r={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,c.Z)(r,w,t)}(h);return(0,g.jsx)(S,(0,s.Z)({as:a,className:(0,l.Z)(y.root,o),ref:t,ownerState:h},v))})),C=r(9439),R=r(5535),M=r(7663),A=r(93),_=r(5973),T=r(9308);function E(e){return(0,m.Z)("MuiLink",e)}var N,W,O,B=(0,v.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),G=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],j={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},L=(0,u.ZP)(T.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&t.button]}})((function(e){var t=e.theme,r=e.ownerState,o=(0,R.D)(t,"palette.".concat(function(e){return j[e]||e}(r.color)))||r.color;return(0,s.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==o?(0,M.Fq)(o,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===r.component&&(0,x.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(B.focusVisible),{outline:"auto"}))})),z=o.forwardRef((function(e,t){var r=(0,p.Z)({props:e,name:"MuiLink"}),n=r.className,a=r.color,u=void 0===a?"primary":a,f=r.component,m=void 0===f?"a":f,v=r.onBlur,h=r.onFocus,y=r.TypographyClasses,b=r.underline,Z=void 0===b?"always":b,x=r.variant,w=void 0===x?"inherit":x,k=(0,i.Z)(r,G),S=(0,A.Z)(),P=S.isFocusVisibleRef,R=S.onBlur,M=S.onFocus,T=S.ref,N=o.useState(!1),W=(0,C.Z)(N,2),O=W[0],B=W[1],j=(0,_.Z)(t,T),z=(0,s.Z)({},r,{color:u,component:m,focusVisible:O,underline:Z,variant:w}),I=function(e){var t=e.classes,r=e.component,o=e.focusVisible,n=e.underline,a={root:["root","underline".concat((0,d.Z)(n)),"button"===r&&"button",o&&"focusVisible"]};return(0,c.Z)(a,E,t)}(z);return(0,g.jsx)(L,(0,s.Z)({className:(0,l.Z)(I.root,n),classes:y,color:u,component:m,onBlur:function(e){R(e),!1===P.current&&B(!1),v&&v(e)},onFocus:function(e){M(e),!0===P.current&&B(!0),h&&h(e)},ref:j,ownerState:z,variant:w},k))})),I=r(4382),F=(0,u.ZP)(z)(N||(W=["\n  :hover {\n    color: #a2acbd;\n  }\n  cursor: pointer;\n"],O||(O=W.slice(0)),W.raw=O,N=W)),D=function(){return o.createElement(Z,{position:"relative",color:"transparent",sx:{background:"#2f69a3"}},o.createElement(P,{sx:{justifyContent:"space-between"}},o.createElement(z,{href:"/",sx:{margin:"2px"}},o.createElement(a.S,{src:"../images/logo_white.png",alt:"Citation Generator",__imageData:r(1525)})),o.createElement(I.Z,{direction:"row",spacing:2},o.createElement(F,{underline:"none",color:"white"},"Bibliography"),o.createElement(F,{href:"/cslList",underline:"none",color:"white"},"Citation Styles"))))},K=r(9211),q=function(){return o.createElement(K.Z,{sx:{background:"#f4f4f4",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px 0"},component:"footer"},o.createElement(z,{href:"/",sx:{margin:"2px"}},o.createElement(a.S,{src:"../images/logo_black.png",alt:"Citation Generator",__imageData:r(1806)})),o.createElement(K.Z,{margin:"0 8px",sx:{typography:"body1","& > :not(style) + :not(style)":{ml:1}}},o.createElement(z,{href:"/help",underline:"none"},"Help"),o.createElement(z,{href:"/about",underline:"none"},"About")),o.createElement(T.Z,{align:"center"},"© Citation Generator 2022"))},H=r(5656),V=r(5668),U=(0,H.Z)({typography:{fontFamily:["catamaran"].join(",")}}),X=n.default.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-14uz2uf-0"})(["height:100%;"]),Y=function(e){var t=e.children;return o.createElement(X,null,o.createElement(V.Z,{theme:U},o.createElement(D,null),o.createElement("main",{style:{background:"#f7f7f7"}},t),o.createElement(q,null)))}},1806:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/citation-generator/static/51620478ff90d195d103c1ae823538a1/5dfe0/logo_black.png","srcSet":"/citation-generator/static/51620478ff90d195d103c1ae823538a1/dd016/logo_black.png 50w,\\n/citation-generator/static/51620478ff90d195d103c1ae823538a1/6de41/logo_black.png 100w,\\n/citation-generator/static/51620478ff90d195d103c1ae823538a1/5dfe0/logo_black.png 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/citation-generator/static/51620478ff90d195d103c1ae823538a1/7e1ee/logo_black.webp 50w,\\n/citation-generator/static/51620478ff90d195d103c1ae823538a1/6f2cf/logo_black.webp 100w,\\n/citation-generator/static/51620478ff90d195d103c1ae823538a1/0fef8/logo_black.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":50}')},1525:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/citation-generator/static/1ff4131e24eb1c2f7b640711c568799c/5dfe0/logo_white.png","srcSet":"/citation-generator/static/1ff4131e24eb1c2f7b640711c568799c/dd016/logo_white.png 50w,\\n/citation-generator/static/1ff4131e24eb1c2f7b640711c568799c/6de41/logo_white.png 100w,\\n/citation-generator/static/1ff4131e24eb1c2f7b640711c568799c/5dfe0/logo_white.png 200w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/citation-generator/static/1ff4131e24eb1c2f7b640711c568799c/7e1ee/logo_white.webp 50w,\\n/citation-generator/static/1ff4131e24eb1c2f7b640711c568799c/6f2cf/logo_white.webp 100w,\\n/citation-generator/static/1ff4131e24eb1c2f7b640711c568799c/0fef8/logo_white.webp 200w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":50}')}}]);
//# sourceMappingURL=37a329a6418f49b415e4d1a88f8e48fc20175f4a-44614aa029bf9740e7f5.js.map