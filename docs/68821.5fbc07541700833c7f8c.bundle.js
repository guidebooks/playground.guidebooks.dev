(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[68821,16479],{29558:(n,e,o)=>{var i={"./iter8.json":[70141,16046]};function s(n){if(!o.o(i,n))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[n],s=e[0];return o.e(e[1]).then((()=>o.t(s,19)))}s.keys=()=>Object.keys(i),s.id=29558,n.exports=s},89265:(n,e,o)=>{var i={"./fybrik.md":[93455,16046],"./iter8.md":[34264,47149],"./playground.md":[62764,3030]};function s(n){if(!o.o(i,n))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[n],s=e[0];return o.e(e[1]).then((()=>o(s)))}s.keys=()=>Object.keys(i),s.id=89265,n.exports=s},82589:(n,e,o)=>{var i={"./config.d/about.json":[58851,10820],"./config.d/client.json":[54791,96640],"./config.d/exec.json":[80677,53909],"./config.d/icons.json":[38055,12081],"./config.d/name.json":[68680,47149],"./config.d/notebooks.json":[3836,3030],"./config.d/opengraph.json":[72241,31668],"./config.d/proxy.json":[17186,98950],"./config.d/style.json":[65714],"./i18n/about_en_US.json":[40962],"./i18n/resources_en_US.json":[27830],"./notebooks/iter8.json":[70141,27813],"./package.json":[86554],"./tsconfig.json":[56237,47611]};function s(n){if(!o.o(i,n))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[n],s=e[0];return Promise.all(e.slice(1).map(o.e)).then((()=>o.t(s,19)))}s.keys=()=>Object.keys(i),s.id=82589,n.exports=s},5079:(n,e,o)=>{var i={"./CHANGELOG.md":[14214,10820],"./icons/icns/README.md":[67976,96640],"./icons/ico/README.md":[19770,53909],"./notebooks/fybrik.md":[93455,12081],"./notebooks/iter8.md":[34264,47149],"./notebooks/playground.md":[62764,3030]};function s(n){if(!o.o(i,n))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[n],s=e[0];return o.e(e[1]).then((()=>o(s)))}s.keys=()=>Object.keys(i),s.id=5079,n.exports=s},61508:(n,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var i=o(41833),s=o(186),t=function(n,e,o,i){return new(o||(o=Promise))((function(s,t){function l(n){try{c(i.next(n))}catch(n){t(n)}}function u(n){try{c(i.throw(n))}catch(n){t(n)}}function c(n){var e;n.done?s(n.value):(e=n.value,e instanceof o?e:new o((function(n){n(e)}))).then(l,u)}c((i=i.apply(n,e||[])).next())}))};function l(n){return t(this,void 0,void 0,(function*(){const{commandToPlugin:e,flat:o,usage:t,docs:l}=(0,i.prescanModel)(),u=[];if(!!!o.find((({route:e})=>e===n))){const e=new Error(`Plugin ${n} is not installed`);throw e.code=404,e}for(const o in e){const i=e[o];n&&i===n&&u.push(o)}function c(n,e=n.split("/"),o=2,i=`/${e[1]}`,s=t[i]){if(s){if(e.length-o==0)return s.usage;if(s.children){const t=`${i}/${e[o]}`;return c(n,e,o+1,t,s.children[t])}}}return u.sort(((n,e)=>-n.localeCompare(e))),{header:{name:"command",attributes:[{value:"About"}]},body:u.map((n=>({command:n,usage:c(n),name:n.replace(/^\//,"").replace(/\//g," ")}))).filter((n=>!n.usage||!n.usage.synonymFor&&!n.usage.children)).map((({command:n,name:e})=>({type:"command",name:s.env.KUI_BIN_PREFIX_FOR_COMMANDS?`${s.env.KUI_BIN_PREFIX_FOR_COMMANDS} ${e}`:e,attributes:[{key:"about",value:l[n]}],onclick:e})))}}))}},67329:n=>{function e(n){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}))}e.keys=()=>[],e.resolve=e,e.id=67329,n.exports=e},7655:(n,e,o)=>{var i={"./plugin-bash-like/fs/package.json":[99890,70504],"./plugin-bash-like/i18n/resources_de.json":[54492,29994],"./plugin-bash-like/i18n/resources_en_US.json":[54620,90477],"./plugin-bash-like/i18n/resources_es.json":[82115,2780],"./plugin-bash-like/i18n/resources_fr.json":[75902,47885],"./plugin-bash-like/i18n/resources_it.json":[73250,3148],"./plugin-bash-like/i18n/resources_ja.json":[43397,25789],"./plugin-bash-like/i18n/resources_ko.json":[95465,70017],"./plugin-bash-like/i18n/resources_pt_BR.json":[32177,97427],"./plugin-bash-like/i18n/resources_zh_CN.json":[39583,80969],"./plugin-bash-like/i18n/resources_zh_TW.json":[96069,4521],"./plugin-bash-like/node_modules/slash/package.json":[2703,74310],"./plugin-bash-like/package.json":[78536,84915],"./plugin-carbon-themes/package.json":[97794,40261],"./plugin-carbon-themes/theme.json":[14588,1803],"./plugin-client-common/i18n/code_en_US.json":[87617,59996],"./plugin-client-common/i18n/editor_de.json":[83004,25636],"./plugin-client-common/i18n/editor_en_US.json":[55053,13189],"./plugin-client-common/i18n/editor_es.json":[30335,99957],"./plugin-client-common/i18n/editor_fr.json":[11299,80205],"./plugin-client-common/i18n/editor_it.json":[47083,79328],"./plugin-client-common/i18n/editor_ja.json":[30865,45586],"./plugin-client-common/i18n/editor_ko.json":[50274,94633],"./plugin-client-common/i18n/editor_pt_BR.json":[36054,63016],"./plugin-client-common/i18n/editor_zh_CN.json":[81895,74736],"./plugin-client-common/i18n/editor_zh_TW.json":[67588,88378],"./plugin-client-common/i18n/errors_en_US.json":[71535],"./plugin-client-common/i18n/link-status_en_US.json":[51125],"./plugin-client-common/i18n/markdown_en_US.json":[99071],"./plugin-client-common/i18n/resources_en_US.json":[92452],"./plugin-client-common/i18n/screenshot_de.json":[68014],"./plugin-client-common/i18n/screenshot_en_US.json":[86923],"./plugin-client-common/i18n/screenshot_es.json":[62645],"./plugin-client-common/i18n/screenshot_fr.json":[44193],"./plugin-client-common/i18n/screenshot_it.json":[41224],"./plugin-client-common/i18n/screenshot_ja.json":[95806],"./plugin-client-common/i18n/screenshot_ko.json":[70196],"./plugin-client-common/i18n/screenshot_pt_BR.json":[61319],"./plugin-client-common/i18n/screenshot_zh_CN.json":[40505],"./plugin-client-common/i18n/screenshot_zh_TW.json":[89746],"./plugin-client-common/i18n/search_en_US.json":[27031],"./plugin-client-common/notebook/package.json":[35347,61828],"./plugin-client-common/notebooks/make-notebook.json":[88427,89049],"./plugin-client-common/notebooks/welcome.json":[95757,73428],"./plugin-client-common/package.json":[61654,57415],"./plugin-core-support/i18n/resources_de.json":[6346],"./plugin-core-support/i18n/resources_en_US.json":[79927],"./plugin-core-support/i18n/resources_es.json":[26910],"./plugin-core-support/i18n/resources_fr.json":[7824],"./plugin-core-support/i18n/resources_it.json":[58826],"./plugin-core-support/i18n/resources_ja.json":[5858],"./plugin-core-support/i18n/resources_ko.json":[11754],"./plugin-core-support/i18n/resources_pt_BR.json":[44431],"./plugin-core-support/i18n/resources_zh_CN.json":[39968],"./plugin-core-support/i18n/resources_zh_TW.json":[63129],"./plugin-core-support/package.json":[58701,97750],"./plugin-core-support/up/package.json":[72611,8151],"./plugin-core-themes/package.json":[11087,80077],"./plugin-core-themes/theme.json":[33488,5970],"./plugin-example/package.json":[21941,96752],"./plugin-kubectl/components/package.json":[70065,75365],"./plugin-kubectl/helm/package.json":[37992,7226],"./plugin-kubectl/heuristics/package.json":[14980,87389],"./plugin-kubectl/i18n/events_en_US.json":[37425],"./plugin-kubectl/i18n/exec_en_US.json":[76436],"./plugin-kubectl/i18n/helm_en_US.json":[63727],"./plugin-kubectl/i18n/krew_en_US.json":[99766],"./plugin-kubectl/i18n/kustomize_en_US.json":[37298],"./plugin-kubectl/i18n/logs_de.json":[50788],"./plugin-kubectl/i18n/logs_en_US.json":[36091],"./plugin-kubectl/i18n/logs_es.json":[21804],"./plugin-kubectl/i18n/logs_fr.json":[49338],"./plugin-kubectl/i18n/logs_it.json":[81664],"./plugin-kubectl/i18n/logs_ja.json":[29968],"./plugin-kubectl/i18n/logs_ko.json":[65760],"./plugin-kubectl/i18n/logs_pt_BR.json":[17116],"./plugin-kubectl/i18n/logs_zh_CN.json":[97101],"./plugin-kubectl/i18n/logs_zh_TW.json":[50213],"./plugin-kubectl/i18n/resources_de.json":[53164],"./plugin-kubectl/i18n/resources_en_US.json":[81138],"./plugin-kubectl/i18n/resources_es.json":[22722],"./plugin-kubectl/i18n/resources_fr.json":[23585],"./plugin-kubectl/i18n/resources_it.json":[15841],"./plugin-kubectl/i18n/resources_ja.json":[65204],"./plugin-kubectl/i18n/resources_ko.json":[42634],"./plugin-kubectl/i18n/resources_pt_BR.json":[16026],"./plugin-kubectl/i18n/resources_zh_CN.json":[45662],"./plugin-kubectl/i18n/resources_zh_TW.json":[85722],"./plugin-kubectl/i18n/tekton_en_US.json":[59828],"./plugin-kubectl/i18n/view-utilization-table_en_US.json":[66410],"./plugin-kubectl/i18n/view-utilization-widgets_en_US.json":[80668],"./plugin-kubectl/krew/package.json":[41013,9679],"./plugin-kubectl/logs/package.json":[25945,4094],"./plugin-kubectl/node_modules/semver/package.json":[76456,64484],"./plugin-kubectl/notebooks/create-jobs.json":[13650,67740],"./plugin-kubectl/notebooks/crud-operations.json":[84471,4439],"./plugin-kubectl/notebooks/deploy-applications.json":[93923,7868],"./plugin-kubectl/oc/package.json":[14341,26881],"./plugin-kubectl/odo/package.json":[3524,26552],"./plugin-kubectl/package.json":[81738,52744],"./plugin-kubectl/tests/package.json":[71260,94008],"./plugin-kubectl/view-utilization/package.json":[80914,72408],"./plugin-patternfly4-themes/package.json":[1641,56374],"./plugin-patternfly4-themes/theme.json":[86197,16151]};function s(n){if(!o.o(i,n))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[n],s=e[0];return Promise.all(e.slice(1).map(o.e)).then((()=>o.t(s,19)))}s.keys=()=>Object.keys(i),s.id=7655,n.exports=s},61375:(n,e,o)=>{var i={"./plugin-bash-like/CHANGELOG.md":[31314,70504],"./plugin-bash-like/fs/VFS_Architecture.md":[62721,29994],"./plugin-bash-like/node_modules/slash/readme.md":[22863,90477],"./plugin-carbon-themes/CHANGELOG.md":[88150,2780],"./plugin-client-common/CHANGELOG.md":[5086,47885],"./plugin-client-common/notebooks/code-blocks.md":[92659,3148],"./plugin-client-common/notebooks/expandable-section.md":[77490,25789],"./plugin-client-common/notebooks/hints.md":[51052,70017],"./plugin-client-common/notebooks/make-notebook.md":[50872,97427],"./plugin-client-common/notebooks/playground.md":[28042,80969],"./plugin-client-common/notebooks/tabs.md":[80046,4521],"./plugin-client-common/notebooks/welcome.md":[19575,74310],"./plugin-client-common/notebooks/wizard.md":[74306,84915],"./plugin-core-support/CHANGELOG.md":[33828,40261],"./plugin-core-themes/CHANGELOG.md":[77909,1803],"./plugin-example/README.md":[92379,59996],"./plugin-kubectl/CHANGELOG.md":[65281,25636],"./plugin-kubectl/node_modules/semver/CHANGELOG.md":[91384,13189],"./plugin-kubectl/node_modules/semver/README.md":[3307,99957],"./plugin-kubectl/notebooks/create-jobs.md":[41458,80205],"./plugin-kubectl/notebooks/crud-operations.md":[29438,79328],"./plugin-kubectl/notebooks/dashboard1.md":[19223,45586],"./plugin-kubectl/notebooks/deploy-applications.md":[37938,94633],"./plugin-kubectl/notebooks/knative-getting-started.md":[36494,63016],"./plugin-kubectl/view-utilization/README.md":[49008,74736],"./plugin-patternfly4-themes/CHANGELOG.md":[90071,88378]};function s(n){if(!o.o(i,n))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[n],s=e[0];return o.e(e[1]).then((()=>o(s)))}s.keys=()=>Object.keys(i),s.id=61375,n.exports=s},80534:(n,e,o)=>{var i={"./plugin-bash-like/fs/mdist/plugin":[10987,10987],"./plugin-bash-like/mdist/plugin":[30890,8575,79267,29224,79083],"./plugin-client-common/mdist/plugin":[18890,18890],"./plugin-core-support/about/mdist/plugin":[33244,33244],"./plugin-core-support/mdist/plugin":[23814,23814],"./plugin-core-support/up/mdist/plugin":[66136,8575,79267,29224,66136,56621],"./plugin-example/mdist/plugin":[41303,41303],"./plugin-kubectl/helm/mdist/plugin":[86208,58853,54527],"./plugin-kubectl/krew/mdist/plugin":[83836,58853,72032],"./plugin-kubectl/logs/mdist/plugin":[94640,58853,8942],"./plugin-kubectl/mdist/plugin":[60502,58853,39048],"./plugin-kubectl/oc/mdist/plugin":[58719,58853,53245],"./plugin-kubectl/odo/mdist/plugin":[65148,58853,38840],"./plugin-kubectl/view-utilization/mdist/plugin":[72195,58853,72828]};function s(n){if(!o.o(i,n))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[n],s=e[0];return Promise.all(e.slice(1).map(o.e)).then((()=>o(s)))}s.keys=()=>Object.keys(i),s.id=80534,n.exports=s},8176:(n,e,o)=>{var i={"./plugin-bash-like/fs/mdist/preload":[7191,7191],"./plugin-bash-like/mdist/preload":[54047,54047],"./plugin-core-support/mdist/preload":[13412,13412],"./plugin-example/mdist/preload":[98163,58853,1272,90270],"./plugin-kubectl/helm/mdist/preload":[11778,11778],"./plugin-kubectl/mdist/preload":[71055,71055]};function s(n){if(!o.o(i,n))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[n],s=e[0];return Promise.all(e.slice(1).map(o.e)).then((()=>o(s)))}s.keys=()=>Object.keys(i),s.id=8176,n.exports=s},82302:(n,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>t});var i=o(73423),s=function(n,e,o,i){return new(o||(o=Promise))((function(s,t){function l(n){try{c(i.next(n))}catch(n){t(n)}}function u(n){try{c(i.throw(n))}catch(n){t(n)}}function c(n){var e;n.done?s(n.value):(e=n.value,e instanceof o?e:new o((function(n){n(e)}))).then(l,u)}c((i=i.apply(n,e||[])).next())}))};const t=()=>s(void 0,void 0,void 0,(function*(){i.c.cp(void 0,["plugin://plugin-client-common/notebooks/code-blocks.md","plugin://plugin-client-common/notebooks/expandable-section.md","plugin://plugin-client-common/notebooks/hints.md","plugin://plugin-client-common/notebooks/tabs.md","plugin://plugin-client-common/notebooks/wizard.md","plugin://client/notebooks/iter8.md","plugin://client/notebooks/iter8.json","plugin://client/notebooks/fybrik.md","plugin://plugin-client-common/notebooks/playground.md"],"/kui")}))}}]);