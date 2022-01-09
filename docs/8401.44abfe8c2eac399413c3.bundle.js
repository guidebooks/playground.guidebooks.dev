/*! For license information please see 8401.44abfe8c2eac399413c3.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[8401],{78401:(e,t,i)=>{i.r(t),i.d(t,{getJavaScriptWorker:()=>Y,getTypeScriptWorker:()=>Z,setupJavaScript:()=>Q,setupTypeScript:()=>q});var s=i(27747),n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,l={};n(l,"__esModule",{value:!0}),((e,t,i)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of a(t))o.call(e,s)||"default"===s||n(e,s,{get:()=>t[s],enumerable:!(i=r(t,s))||i.enumerable})})(l,s);var c,d,g,u,p,m,h,b,f,_;(d=c||(c={}))[d.None=0]="None",d[d.CommonJS=1]="CommonJS",d[d.AMD=2]="AMD",d[d.UMD=3]="UMD",d[d.System=4]="System",d[d.ES2015=5]="ES2015",d[d.ESNext=99]="ESNext",(u=g||(g={}))[u.None=0]="None",u[u.Preserve=1]="Preserve",u[u.React=2]="React",u[u.ReactNative=3]="ReactNative",u[u.ReactJSX=4]="ReactJSX",u[u.ReactJSXDev=5]="ReactJSXDev",(m=p||(p={}))[m.CarriageReturnLineFeed=0]="CarriageReturnLineFeed",m[m.LineFeed=1]="LineFeed",(b=h||(h={}))[b.ES3=0]="ES3",b[b.ES5=1]="ES5",b[b.ES2015=2]="ES2015",b[b.ES2016=3]="ES2016",b[b.ES2017=4]="ES2017",b[b.ES2018=5]="ES2018",b[b.ES2019=6]="ES2019",b[b.ES2020=7]="ES2020",b[b.ESNext=99]="ESNext",b[b.JSON=100]="JSON",b[b.Latest=99]="Latest",(_=f||(f={}))[_.Classic=1]="Classic",_[_.NodeJs=2]="NodeJs";var S=class{constructor(e,t,i,s){this._onDidChange=new l.Emitter,this._onDidExtraLibsChange=new l.Emitter,this._extraLibs=Object.create(null),this._removedExtraLibs=Object.create(null),this._eagerModelSync=!1,this.setCompilerOptions(e),this.setDiagnosticsOptions(t),this.setWorkerOptions(i),this.setInlayHintsOptions(s),this._onDidExtraLibsChangeTimeout=-1}get onDidChange(){return this._onDidChange.event}get onDidExtraLibsChange(){return this._onDidExtraLibsChange.event}get workerOptions(){return this._workerOptions}get inlayHintsOptions(){return this._inlayHintsOptions}getExtraLibs(){return this._extraLibs}addExtraLib(e,t){let i;if(i=void 0===t?`ts:extralib-${Math.random().toString(36).substring(2,15)}`:t,this._extraLibs[i]&&this._extraLibs[i].content===e)return{dispose:()=>{}};let s=1;return this._removedExtraLibs[i]&&(s=this._removedExtraLibs[i]+1),this._extraLibs[i]&&(s=this._extraLibs[i].version+1),this._extraLibs[i]={content:e,version:s},this._fireOnDidExtraLibsChangeSoon(),{dispose:()=>{let e=this._extraLibs[i];e&&e.version===s&&(delete this._extraLibs[i],this._removedExtraLibs[i]=s,this._fireOnDidExtraLibsChangeSoon())}}}setExtraLibs(e){for(const e in this._extraLibs)this._removedExtraLibs[e]=this._extraLibs[e].version;if(this._extraLibs=Object.create(null),e&&e.length>0)for(const t of e){const e=t.filePath||`ts:extralib-${Math.random().toString(36).substring(2,15)}`,i=t.content;let s=1;this._removedExtraLibs[e]&&(s=this._removedExtraLibs[e]+1),this._extraLibs[e]={content:i,version:s}}this._fireOnDidExtraLibsChangeSoon()}_fireOnDidExtraLibsChangeSoon(){-1===this._onDidExtraLibsChangeTimeout&&(this._onDidExtraLibsChangeTimeout=window.setTimeout((()=>{this._onDidExtraLibsChangeTimeout=-1,this._onDidExtraLibsChange.fire(void 0)}),0))}getCompilerOptions(){return this._compilerOptions}setCompilerOptions(e){this._compilerOptions=e||Object.create(null),this._onDidChange.fire(void 0)}getDiagnosticsOptions(){return this._diagnosticsOptions}setDiagnosticsOptions(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setWorkerOptions(e){this._workerOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setInlayHintsOptions(e){this._inlayHintsOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setMaximumWorkerIdleTime(e){}setEagerModelSync(e){this._eagerModelSync=e}getEagerModelSync(){return this._eagerModelSync}},y=new S({allowNonTsExtensions:!0,target:99},{noSemanticValidation:!1,noSyntaxValidation:!1,onlyVisible:!1},{},{}),w=new S({allowNonTsExtensions:!0,allowJs:!0,target:99},{noSemanticValidation:!0,noSyntaxValidation:!1,onlyVisible:!1},{},{});function x(){return Promise.resolve().then(i.bind(i,78401))}l.languages.typescript={ModuleKind:c,JsxEmit:g,NewLineKind:p,ScriptTarget:h,ModuleResolutionKind:f,typescriptVersion:"4.4.4",typescriptDefaults:y,javascriptDefaults:w,getTypeScriptWorker:()=>x().then((e=>e.getTypeScriptWorker())),getJavaScriptWorker:()=>x().then((e=>e.getJavaScriptWorker()))},l.languages.onLanguage("typescript",(()=>x().then((e=>e.setupTypeScript(y))))),l.languages.onLanguage("javascript",(()=>x().then((e=>e.setupJavaScript(w)))));var v,C,k={};function D(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(const n of e.next)s+=D(n,t,i);return s}function L(e){return e?e.map((e=>e.text)).join(""):""}k["lib.d.ts"]=!0,k["lib.dom.d.ts"]=!0,k["lib.dom.iterable.d.ts"]=!0,k["lib.es2015.collection.d.ts"]=!0,k["lib.es2015.core.d.ts"]=!0,k["lib.es2015.d.ts"]=!0,k["lib.es2015.generator.d.ts"]=!0,k["lib.es2015.iterable.d.ts"]=!0,k["lib.es2015.promise.d.ts"]=!0,k["lib.es2015.proxy.d.ts"]=!0,k["lib.es2015.reflect.d.ts"]=!0,k["lib.es2015.symbol.d.ts"]=!0,k["lib.es2015.symbol.wellknown.d.ts"]=!0,k["lib.es2016.array.include.d.ts"]=!0,k["lib.es2016.d.ts"]=!0,k["lib.es2016.full.d.ts"]=!0,k["lib.es2017.d.ts"]=!0,k["lib.es2017.full.d.ts"]=!0,k["lib.es2017.intl.d.ts"]=!0,k["lib.es2017.object.d.ts"]=!0,k["lib.es2017.sharedmemory.d.ts"]=!0,k["lib.es2017.string.d.ts"]=!0,k["lib.es2017.typedarrays.d.ts"]=!0,k["lib.es2018.asyncgenerator.d.ts"]=!0,k["lib.es2018.asynciterable.d.ts"]=!0,k["lib.es2018.d.ts"]=!0,k["lib.es2018.full.d.ts"]=!0,k["lib.es2018.intl.d.ts"]=!0,k["lib.es2018.promise.d.ts"]=!0,k["lib.es2018.regexp.d.ts"]=!0,k["lib.es2019.array.d.ts"]=!0,k["lib.es2019.d.ts"]=!0,k["lib.es2019.full.d.ts"]=!0,k["lib.es2019.object.d.ts"]=!0,k["lib.es2019.string.d.ts"]=!0,k["lib.es2019.symbol.d.ts"]=!0,k["lib.es2020.bigint.d.ts"]=!0,k["lib.es2020.d.ts"]=!0,k["lib.es2020.full.d.ts"]=!0,k["lib.es2020.intl.d.ts"]=!0,k["lib.es2020.promise.d.ts"]=!0,k["lib.es2020.sharedmemory.d.ts"]=!0,k["lib.es2020.string.d.ts"]=!0,k["lib.es2020.symbol.wellknown.d.ts"]=!0,k["lib.es2021.d.ts"]=!0,k["lib.es2021.full.d.ts"]=!0,k["lib.es2021.promise.d.ts"]=!0,k["lib.es2021.string.d.ts"]=!0,k["lib.es2021.weakref.d.ts"]=!0,k["lib.es5.d.ts"]=!0,k["lib.es6.d.ts"]=!0,k["lib.esnext.d.ts"]=!0,k["lib.esnext.full.d.ts"]=!0,k["lib.esnext.intl.d.ts"]=!0,k["lib.esnext.promise.d.ts"]=!0,k["lib.esnext.string.d.ts"]=!0,k["lib.esnext.weakref.d.ts"]=!0,k["lib.scripthost.d.ts"]=!0,k["lib.webworker.d.ts"]=!0,k["lib.webworker.importscripts.d.ts"]=!0,k["lib.webworker.iterable.d.ts"]=!0,(C=v||(v={}))[C.None=0]="None",C[C.Block=1]="Block",C[C.Smart=2]="Smart";var O,E,T=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:n,column:r}=i,{lineNumber:a,column:o}=s;return{startLineNumber:n,startColumn:r,endLineNumber:a,endColumn:o}}};(E=O||(O={}))[E.Warning=0]="Warning",E[E.Error=1]="Error",E[E.Suggestion=2]="Suggestion",E[E.Message=3]="Message";var F=class extends T{constructor(e,t,i,s){super(s),this._libFiles=e,this._defaults=t,this._selector=i,this._disposables=[],this._listener=Object.create(null);const n=e=>{if(e.getLanguageId()!==i)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let s;const n=e.onDidChangeContent((()=>{clearTimeout(s),s=window.setTimeout(t,500)})),r=e.onDidChangeAttached((()=>{const{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():l.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){n.dispose(),r.dispose(),clearTimeout(s)}},t()},r=e=>{l.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(l.editor.onDidCreateModel((e=>n(e)))),this._disposables.push(l.editor.onWillDisposeModel(r)),this._disposables.push(l.editor.onDidChangeModelLanguage((e=>{r(e.model),n(e.model)}))),this._disposables.push({dispose(){for(const e of l.editor.getModels())r(e)}});const a=()=>{for(const e of l.editor.getModels())r(e),n(e)};this._disposables.push(this._defaults.onDidChange(a)),this._disposables.push(this._defaults.onDidExtraLibsChange(a)),l.editor.getModels().forEach((e=>n(e)))}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:n,noSuggestionDiagnostics:r}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),n||i.push(t.getSemanticDiagnostics(e.uri.toString())),r||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const a=await Promise.all(i);if(!a||e.isDisposed())return;const o=a.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),c=o.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?l.Uri.parse(e.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(c),e.isDisposed()||l.editor.setModelMarkers(e,this._selector,o.map((t=>this._convertDiagnostics(e,t))))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:n,column:r}=e.getPositionAt(i),{lineNumber:a,column:o}=e.getPositionAt(i+s),c=[];return t.reportsUnnecessary&&c.push(l.MarkerTag.Unnecessary),t.reportsDeprecated&&c.push(l.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:n,startColumn:r,endLineNumber:a,endColumn:o,message:D(t.messageText,"\n"),code:t.code.toString(),tags:c,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach((t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;const n=t.start||0,r=t.length||1,{lineNumber:a,column:o}=s.getPositionAt(n),{lineNumber:l,column:c}=s.getPositionAt(n+r);i.push({resource:s.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:c,message:D(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return l.MarkerSeverity.Error;case 3:return l.MarkerSeverity.Info;case 0:return l.MarkerSeverity.Warning;case 2:return l.MarkerSeverity.Hint}return l.MarkerSeverity.Info}},I=class extends T{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,i,s){const n=e.getWordUntilPosition(t),r=new l.Range(t.lineNumber,n.startColumn,t.lineNumber,n.endColumn),a=e.uri,o=e.getOffsetAt(t),c=await this._worker(a);if(e.isDisposed())return;const d=await c.getCompletionsAtPosition(a.toString(),o);if(!d||e.isDisposed())return;return{suggestions:d.entries.map((i=>{let s=r;if(i.replacementSpan){const t=e.getPositionAt(i.replacementSpan.start),n=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);s=new l.Range(t.lineNumber,t.column,n.lineNumber,n.column)}const n=[];return-1!==i.kindModifiers?.indexOf("deprecated")&&n.push(l.languages.CompletionItemTag.Deprecated),{uri:a,position:t,offset:o,range:s,label:i.name,insertText:i.name,sortText:i.sortText,kind:I.convertKind(i.kind),tags:n}}))}}async resolveCompletionItem(e,t){const i=e,s=i.uri,n=i.position,r=i.offset,a=await this._worker(s),o=await a.getCompletionEntryDetails(s.toString(),r,i.label);return o?{uri:s,position:n,label:o.name,kind:I.convertKind(o.kind),detail:L(o.displayParts),documentation:{value:I.createDocumentationString(o)}}:i}static convertKind(e){switch(e){case V.primitiveType:case V.keyword:return l.languages.CompletionItemKind.Keyword;case V.variable:case V.localVariable:return l.languages.CompletionItemKind.Variable;case V.memberVariable:case V.memberGetAccessor:case V.memberSetAccessor:return l.languages.CompletionItemKind.Field;case V.function:case V.memberFunction:case V.constructSignature:case V.callSignature:case V.indexSignature:return l.languages.CompletionItemKind.Function;case V.enum:return l.languages.CompletionItemKind.Enum;case V.module:return l.languages.CompletionItemKind.Module;case V.class:return l.languages.CompletionItemKind.Class;case V.interface:return l.languages.CompletionItemKind.Interface;case V.warning:return l.languages.CompletionItemKind.File}return l.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=L(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${N(i)}`;return t}};function N(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` — ${s.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var P=class extends T{constructor(){super(...arguments),this.signatureHelpTriggerCharacters=["(",","]}static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case l.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case l.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case l.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,i,s){const n=e.uri,r=e.getOffsetAt(t),a=await this._worker(n);if(e.isDisposed())return;const o=await a.getSignatureHelpItems(n.toString(),r,{triggerReason:P._toSignatureHelpTriggerReason(s)});if(!o||e.isDisposed())return;const l={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]};return o.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:L(e.documentation)},t.label+=L(e.prefixDisplayParts),e.parameters.forEach(((i,s,n)=>{const r=L(i.displayParts),a={label:r,documentation:{value:L(i.documentation)}};t.label+=r,t.parameters.push(a),s<n.length-1&&(t.label+=L(e.separatorDisplayParts))})),t.label+=L(e.suffixDisplayParts),l.signatures.push(t)})),{value:l,dispose(){}}}},A=class extends T{async provideHover(e,t,i){const s=e.uri,n=e.getOffsetAt(t),r=await this._worker(s);if(e.isDisposed())return;const a=await r.getQuickInfoAtPosition(s.toString(),n);if(!a||e.isDisposed())return;const o=L(a.documentation),l=a.tags?a.tags.map((e=>N(e))).join("  \n\n"):"",c=L(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+c+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}}},M=class extends T{async provideDocumentHighlights(e,t,i){const s=e.uri,n=e.getOffsetAt(t),r=await this._worker(s);if(e.isDisposed())return;const a=await r.getOccurrencesAtPosition(s.toString(),n);return a&&!e.isDisposed()?a.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?l.languages.DocumentHighlightKind.Write:l.languages.DocumentHighlightKind.Text}))):void 0}},R=class extends T{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const s=e.uri,n=e.getOffsetAt(t),r=await this._worker(s);if(e.isDisposed())return;const a=await r.getDefinitionAtPosition(s.toString(),n);if(!a||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(a.map((e=>l.Uri.parse(e.fileName)))),e.isDisposed())return;const o=[];for(let e of a){const t=this._libFiles.getOrCreateModel(e.fileName);t&&o.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return o}},K=class extends T{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){const n=e.uri,r=e.getOffsetAt(t),a=await this._worker(n);if(e.isDisposed())return;const o=await a.getReferencesAtPosition(n.toString(),r);if(!o||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(o.map((e=>l.Uri.parse(e.fileName)))),e.isDisposed())return;const c=[];for(let e of o){const t=this._libFiles.getOrCreateModel(e.fileName);t&&c.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return c}},H=class extends T{async provideDocumentSymbols(e,t){const i=e.uri,s=await this._worker(i);if(e.isDisposed())return;const n=await s.getNavigationBarItems(i.toString());if(!n||e.isDisposed())return;const r=(t,i,s)=>{let n={name:i.text,detail:"",kind:W[i.kind]||l.languages.SymbolKind.Variable,range:this._textSpanToRange(e,i.spans[0]),selectionRange:this._textSpanToRange(e,i.spans[0]),tags:[]};if(s&&(n.containerName=s),i.childItems&&i.childItems.length>0)for(let e of i.childItems)r(t,e,n.name);t.push(n)};let a=[];return n.forEach((e=>r(a,e))),a}},V=class{};V.unknown="",V.keyword="keyword",V.script="script",V.module="module",V.class="class",V.interface="interface",V.type="type",V.enum="enum",V.variable="var",V.localVariable="local var",V.function="function",V.localFunction="local function",V.memberFunction="method",V.memberGetAccessor="getter",V.memberSetAccessor="setter",V.memberVariable="property",V.constructorImplementation="constructor",V.callSignature="call",V.indexSignature="index",V.constructSignature="construct",V.parameter="parameter",V.typeParameter="type parameter",V.primitiveType="primitive type",V.label="label",V.alias="alias",V.const="const",V.let="let",V.warning="warning";var W=Object.create(null);W[V.module]=l.languages.SymbolKind.Module,W[V.class]=l.languages.SymbolKind.Class,W[V.enum]=l.languages.SymbolKind.Enum,W[V.interface]=l.languages.SymbolKind.Interface,W[V.memberFunction]=l.languages.SymbolKind.Method,W[V.memberVariable]=l.languages.SymbolKind.Property,W[V.memberGetAccessor]=l.languages.SymbolKind.Property,W[V.memberSetAccessor]=l.languages.SymbolKind.Property,W[V.variable]=l.languages.SymbolKind.Variable,W[V.const]=l.languages.SymbolKind.Variable,W[V.localVariable]=l.languages.SymbolKind.Variable,W[V.variable]=l.languages.SymbolKind.Variable,W[V.function]=l.languages.SymbolKind.Function,W[V.localFunction]=l.languages.SymbolKind.Function;var j,J,B=class extends T{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},U=class extends B{async provideDocumentRangeFormattingEdits(e,t,i,s){const n=e.uri,r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getFormattingEditsForRange(n.toString(),r,a,B._convertOptions(i));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},$=class extends B{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,s,n){const r=e.uri,a=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getFormattingEditsAfterKeystroke(r.toString(),a,i,B._convertOptions(s));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},z=class extends B{async provideCodeActions(e,t,i,s){const n=e.uri,r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=B._convertOptions(e.getOptions()),l=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),c=await this._worker(n);if(e.isDisposed())return;const d=await c.getCodeFixesAtPosition(n.toString(),r,a,l,o);if(!d||e.isDisposed())return{actions:[],dispose:()=>{}};return{actions:d.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t))),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const t of i.changes)for(const i of t.textChanges)s.push({resource:e.uri,edit:{range:this._textSpanToRange(e,i.span),text:i.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},X=class extends T{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){const n=e.uri,r=n.toString(),a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getRenameInfo(r,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");const c=await o.findRenameLocations(r,a,!1,!1,!1);if(!c||e.isDisposed())return;const d=[];for(const e of c){const t=this._libFiles.getOrCreateModel(e.fileName);if(!t)throw new Error(`Unknown file ${e.fileName}.`);d.push({resource:t.uri,edit:{range:this._textSpanToRange(t,e.textSpan),text:i}})}return{edits:d}}},G=class extends T{async provideInlayHints(e,t,i){const s=e.uri,n=s.toString(),r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(s);if(e.isDisposed())return[];return(await o.provideInlayHints(n,r,a)).map((t=>({...t,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)})))}_convertHintKind(e){switch(e){case"Parameter":return l.languages.InlayHintKind.Parameter;case"Type":return l.languages.InlayHintKind.Type;default:return l.languages.InlayHintKind.Other}}};function q(e){J=ee(e,"typescript")}function Q(e){j=ee(e,"javascript")}function Y(){return new Promise(((e,t)=>{if(!j)return t("JavaScript not registered!");e(j)}))}function Z(){return new Promise(((e,t)=>{if(!J)return t("TypeScript not registered!");e(J)}))}function ee(e,t){const i=new class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){if(!this._client){this._worker=l.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});let e=this._worker.getProxy();this._defaults.getEagerModelSync()&&(e=e.then((e=>this._worker?this._worker.withSyncedResources(l.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):e))),this._client=e}return this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}}(t,e),s=(...e)=>i.getLanguageServiceWorker(...e),n=new class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return!!e&&0===e.path.indexOf("/lib.")&&!!k[e.path.slice(1)]}getOrCreateModel(e){const t=l.Uri.parse(e),i=l.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return l.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const s=y.getExtraLibs()[e];return s?l.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}}(s);return l.languages.registerCompletionItemProvider(t,new I(s)),l.languages.registerSignatureHelpProvider(t,new P(s)),l.languages.registerHoverProvider(t,new A(s)),l.languages.registerDocumentHighlightProvider(t,new M(s)),l.languages.registerDefinitionProvider(t,new R(n,s)),l.languages.registerReferenceProvider(t,new K(n,s)),l.languages.registerDocumentSymbolProvider(t,new H(s)),l.languages.registerDocumentRangeFormattingEditProvider(t,new U(s)),l.languages.registerOnTypeFormattingEditProvider(t,new $(s)),l.languages.registerCodeActionProvider(t,new z(s)),l.languages.registerRenameProvider(t,new X(n,s)),l.languages.registerInlayHintsProvider(t,new G(s)),new F(n,e,t,s),s}}}]);