"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[1126],{71126:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h,isFocusable:()=>g});var o=n(67294),s=n(18495),r=n(60898);class i extends o.PureComponent{constructor(e){super(e),this.state=i.getDerivedStateFromProps(e),this.startLoading()}static getDerivedStateFromProps(e,t){return t&&t.execUUID===e.execUUID?t:{execUUID:e.execUUID,isLoading:!0,command:e.command,react:void 0,spec:void 0,content:void 0,contentType:e.contentType}}startLoading(){const e=e=>{this.setState({isLoading:!1,content:e})};"string"==typeof this.props.command?this.props.tab.REPL.qexec(this.props.command).then(e):Promise.resolve(this.props.command(this.props.tab,this.props.response,this.props.args)).then((e=>(0,s.isCommandStringContent)(e)?this.props.tab.REPL.qexec(e.contentFrom):e)).then((t=>{(0,s.isReactProvider)(t)?this.setState({isLoading:!1,react:t}):(0,s.isStringWithOptionalContentType)(t)?this.setState({isLoading:!1,content:t.content,contentType:t.contentType,spec:t.spec}):(0,s.isScalarContent)(t)?e(t.content):e(t)}))}render(){if(this.state.isLoading)return o.createElement(r.gb,null);const e=this.state.react?this.state.react:{spec:this.state.spec,content:this.state.content,contentType:this.state.contentType};return o.createElement(h,Object.assign({},this.props,{mode:e}))}}var a=n(43184);function c({content:e}){return o.createElement("div",{className:"padding-content"},o.createElement("iframe",{srcDoc:e,width:"100%",height:"100%",style:{backgroundColor:"white"}}))}var l=n(77533);const p=o.lazy((()=>Promise.all([n.e(4523),n.e(176),n.e(9747),n.e(6718)]).then(n.bind(n,57629)))),d=o.lazy((()=>Promise.all([n.e(4523),n.e(176),n.e(9747),n.e(7586)]).then(n.bind(n,20920)))),m=o.lazy((()=>n.e(2200).then(n.bind(n,42200)))),u=o.lazy((()=>n.e(7229).then(n.bind(n,47229))));class h extends o.PureComponent{constructor(e){super(e),this.state=h.getDerivedStateFromProps(e)}static getDerivedStateFromProps(e,t){return t&&t.mode===e.mode&&t.execUUID===e.execUUID?t:Object.assign(t||{},{mode:e.mode,execUUID:e.execUUID})}render(){if(!this.props.isActive)return o.createElement(o.Fragment,null);const{mode:e}=this.state,{tab:t,response:n,willUpdateToolbar:h}=this.props;if((0,s.isStringWithOptionalContentType)(e))return"text/html"===e.contentType?o.createElement(c,{content:e.content}):o.createElement(p,{content:e,readOnly:!1,willUpdateToolbar:h,response:n,repl:t.REPL,tabUUID:t.uuid});if((0,s.isStringDiffContent)(e))return o.createElement(d,{contentType:e.contentType,originalContent:e.content.a,modifiedContent:e.content.b,response:n,renderSideBySide:!0,tabUUID:t.uuid});if((0,s.isCommandStringContent)(e)){const t=`${e.contentFrom} ${e.contentType}`;return o.createElement(i,Object.assign({},this.props,{key:t,command:e.contentFrom,contentType:e.contentType}))}if((0,s.isFunctionContent)(e)){const t=e.content;return o.createElement(i,Object.assign({},this.props,{key:t.toString(),command:t}))}if((0,s.isScalarContent)(e)){if((0,s.isReactProvider)(e))return e.react({willUpdateToolbar:h});if((0,s.isDescriptionList)(e.content))return o.createElement("div",{className:"flex-fill flex-layout flex-align-stretch"},o.createElement("div",{className:"scrollable scrollable-auto scrollable-x flex-fill flex-layout flex-align-stretch"},o.createElement(u,{as:e.content.spec.as,groups:e.content.spec.groups,className:"left-pad right-pad"})));if((0,s.isRadioTable)(e.content)){const n=e.content;return o.createElement(r.C9.Consumer,null,(e=>o.createElement(m,{table:n,title:!e.disableTableTitle,repl:t.REPL})))}if((0,s.isTable)(e.content))return(0,a.Z)(t,t.REPL,e.content,!1);if(s.Util.isHTML(e.content))return o.createElement(l.Z,{content:e.content});console.error("Unsupported scalar content",e)}return o.createElement("div",{className:"oops"},"Unsupported content")}}function g(e){return"function"==typeof e.doFocus}}}]);