"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[20041,48247,64201],{35224:(t,o,e)=>{e.d(o,{u:()=>d,D:()=>s});var r=e(70655),p=e(67294),n=e(16356),a=e(38296);const i=t=>{var{className:o,children:e,isLeftAligned:i}=t,l=(0,r.__rest)(t,["className","children","isLeftAligned"]);return p.createElement("div",Object.assign({className:(0,a.i)(n.Z.tooltipContent,i&&n.Z.modifiers.textAlignLeft,o)},l),e)};i.displayName="TooltipContent";const l=t=>{var{className:o}=t,e=(0,r.__rest)(t,["className"]);return p.createElement("div",Object.assign({className:(0,a.i)(n.Z.tooltipArrow,o)},e))};l.displayName="TooltipArrow";var f=e(64190);const c={name:"--pf-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-c-tooltip--MaxWidth)"};var s,m=e(93020);!function(t){t.auto="auto",t.top="top",t.bottom="bottom",t.left="left",t.right="right"}(s||(s={}));let _=1;const d=t=>{var{content:o,position:e="top",trigger:s="mouseenter focus",isVisible:d=!1,isContentLeftAligned:g=!1,enableFlip:b=!0,className:u="",entryDelay:h=300,exitDelay:w=0,appendTo:v=(()=>document.body),zIndex:T=9999,maxWidth:y=c.value,distance:x=15,aria:k="describedby",flipBehavior:E=["top","right","bottom","left","top","right","bottom"],id:C="pf-tooltip-"+_++,children:R,animationDuration:A=300,reference:B,boundary:L,isAppLauncher:Z,tippyProps:N}=t,Y=(0,r.__rest)(t,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","reference","boundary","isAppLauncher","tippyProps"]);const P=s.includes("mouseenter"),X=s.includes("focus"),W=s.includes("click"),D="manual"===s,[S,M]=p.useState(!1),[z,F]=p.useState(0),I=p.useRef(null),j=p.useRef(null),H=p.useRef(null),K=t=>{t.forEach((t=>{t.current&&clearTimeout(t.current)}))};p.useEffect((()=>()=>{K([I,H,j])}),[]);p.useEffect((()=>{d?O():V()}),[d]);const O=()=>{K([I,H]),j.current=setTimeout((()=>{M(!0),F(1)}),h)},V=()=>{K([j]),H.current=setTimeout((()=>{F(0),I.current=setTimeout((()=>M(!1)),A)}),w)},q={top:n.Z.modifiers.top,bottom:n.Z.modifiers.bottom,left:n.Z.modifiers.left,right:n.Z.modifiers.right},G=y!==c.value,J=p.createElement("div",Object.assign({className:(0,a.i)(n.Z.tooltip,u),role:"tooltip",id:C,style:{maxWidth:G?y:null,opacity:z,transition:(0,m.K)(A)}},Y),p.createElement(l,null),p.createElement(i,{isLeftAligned:g},o));return p.createElement(m.r,{trigger:"none"!==k&&S?"describedby"===k&&R&&R.props&&!R.props["aria-describedby"]?p.cloneElement(R,{"aria-describedby":C}):"labelledby"===k&&R.props&&!R.props["aria-labelledby"]?p.cloneElement(R,{"aria-labelledby":C}):R:R,reference:B,popper:J,popperMatchesTriggerWidth:!1,appendTo:v,isVisible:S,positionModifiers:q,distance:x,placement:e,onMouseEnter:P&&O,onMouseLeave:P&&V,onFocus:X&&O,onBlur:X&&V,onDocumentClick:W&&((t,o)=>{S?V():t.target===o&&O()}),onDocumentKeyDown:D?null:t=>{D||t.keyCode===f.nx.ESCAPE_KEY&&S&&V()},onTriggerEnter:D?null:t=>{t.keyCode===f.nx.ENTER&&(S?V():O())},enableFlip:b,zIndex:T,flipBehavior:E})};d.displayName="Tooltip"},16356:(t,o,e)=>{e(82126),o.Z={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},tooltip:"pf-c-tooltip",tooltipArrow:"pf-c-tooltip__arrow",tooltipContent:"pf-c-tooltip__content"}},1520:(t,o,e)=>{e.d(o,{Z:()=>i});var r=e(8081),p=e.n(r),n=e(23645),a=e.n(n)()(p());a.push([t.id,".pf-c-tooltip {\n  --pf-c-tooltip--MaxWidth: 18.75rem;\n  --pf-c-tooltip--BoxShadow: var(--pf-global--BoxShadow--md);\n  --pf-c-tooltip__content--PaddingTop: var(--pf-global--spacer--sm);\n  --pf-c-tooltip__content--PaddingRight: var(--pf-global--spacer--sm);\n  --pf-c-tooltip__content--PaddingBottom: var(--pf-global--spacer--sm);\n  --pf-c-tooltip__content--PaddingLeft: var(--pf-global--spacer--sm);\n  --pf-c-tooltip__content--Color: var(--pf-global--Color--light-100);\n  --pf-c-tooltip__content--BackgroundColor: var(--pf-global--BackgroundColor--dark-100);\n  --pf-c-tooltip__content--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-tooltip__arrow--Width: 0.5rem;\n  --pf-c-tooltip__arrow--Height: 0.5rem;\n  --pf-c-tooltip__arrow--m-top--TranslateX: -50%;\n  --pf-c-tooltip__arrow--m-top--TranslateY: 50%;\n  --pf-c-tooltip__arrow--m-top--Rotate: 45deg;\n  --pf-c-tooltip__arrow--m-right--TranslateX: -50%;\n  --pf-c-tooltip__arrow--m-right--TranslateY: -50%;\n  --pf-c-tooltip__arrow--m-right--Rotate: 45deg;\n  --pf-c-tooltip__arrow--m-bottom--TranslateX: -50%;\n  --pf-c-tooltip__arrow--m-bottom--TranslateY: -50%;\n  --pf-c-tooltip__arrow--m-bottom--Rotate: 45deg;\n  --pf-c-tooltip__arrow--m-left--TranslateX: 50%;\n  --pf-c-tooltip__arrow--m-left--TranslateY: -50%;\n  --pf-c-tooltip__arrow--m-left--Rotate: 45deg;\n  position: relative;\n  max-width: var(--pf-c-tooltip--MaxWidth);\n  box-shadow: var(--pf-c-tooltip--BoxShadow);\n}\n.pf-c-tooltip.pf-m-top .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-top-left .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-top-right .pf-c-tooltip__arrow {\n  bottom: 0;\n  left: 50%;\n  transform: translateX(var(--pf-c-tooltip__arrow--m-top--TranslateX)) translateY(var(--pf-c-tooltip__arrow--m-top--TranslateY)) rotate(var(--pf-c-tooltip__arrow--m-top--Rotate));\n}\n.pf-c-tooltip.pf-m-bottom .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-bottom-left .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-bottom-right .pf-c-tooltip__arrow {\n  top: 0;\n  left: 50%;\n  transform: translateX(var(--pf-c-tooltip__arrow--m-bottom--TranslateX)) translateY(var(--pf-c-tooltip__arrow--m-bottom--TranslateY)) rotate(var(--pf-c-tooltip__arrow--m-bottom--Rotate));\n}\n.pf-c-tooltip.pf-m-left .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-left-top .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-left-bottom .pf-c-tooltip__arrow {\n  top: 50%;\n  right: 0;\n  transform: translateX(var(--pf-c-tooltip__arrow--m-left--TranslateX)) translateY(var(--pf-c-tooltip__arrow--m-left--TranslateY)) rotate(var(--pf-c-tooltip__arrow--m-left--Rotate));\n}\n.pf-c-tooltip.pf-m-right .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-right-top .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-right-bottom .pf-c-tooltip__arrow {\n  top: 50%;\n  left: 0;\n  transform: translateX(var(--pf-c-tooltip__arrow--m-right--TranslateX)) translateY(var(--pf-c-tooltip__arrow--m-right--TranslateY)) rotate(var(--pf-c-tooltip__arrow--m-right--Rotate));\n}\n.pf-c-tooltip.pf-m-left-top .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-right-top .pf-c-tooltip__arrow {\n  top: var(--pf-c-tooltip__arrow--Height);\n}\n.pf-c-tooltip.pf-m-left-bottom .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-right-bottom .pf-c-tooltip__arrow {\n  top: auto;\n  bottom: 0;\n}\n.pf-c-tooltip.pf-m-top-left .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-bottom-left .pf-c-tooltip__arrow {\n  left: var(--pf-c-tooltip__arrow--Width);\n}\n.pf-c-tooltip.pf-m-top-right .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-bottom-right .pf-c-tooltip__arrow {\n  right: 0;\n  left: auto;\n}\n\n.pf-c-tooltip__content {\n  position: relative;\n  padding: var(--pf-c-tooltip__content--PaddingTop) var(--pf-c-tooltip__content--PaddingRight) var(--pf-c-tooltip__content--PaddingBottom) var(--pf-c-tooltip__content--PaddingLeft);\n  font-size: var(--pf-c-tooltip__content--FontSize);\n  color: var(--pf-c-tooltip__content--Color);\n  text-align: center;\n  word-break: break-word;\n  background-color: var(--pf-c-tooltip__content--BackgroundColor);\n}\n.pf-c-tooltip__content.pf-m-text-align-left {\n  text-align: left;\n}\n\n.pf-c-tooltip__arrow {\n  position: absolute;\n  width: var(--pf-c-tooltip__arrow--Width);\n  height: var(--pf-c-tooltip__arrow--Height);\n  pointer-events: none;\n  background-color: var(--pf-c-tooltip__content--BackgroundColor);\n}",""]);const i=a},82126:(t,o,e)=>{e.r(o),e.d(o,{default:()=>u});var r=e(93379),p=e.n(r),n=e(7795),a=e.n(n),i=e(90569),l=e.n(i),f=e(3565),c=e.n(f),s=e(19216),m=e.n(s),_=e(44589),d=e.n(_),g=e(1520),b={};b.styleTagTransform=d(),b.setAttributes=c(),b.insert=l().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=m();p()(g.Z,b);const u=g.Z&&g.Z.locals?g.Z.locals:void 0}}]);