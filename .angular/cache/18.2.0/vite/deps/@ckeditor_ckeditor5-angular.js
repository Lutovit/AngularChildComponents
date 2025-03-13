import {
  FormsModule,
  NG_VALUE_ACCESSOR
} from "./chunk-Q26EEMVG.js";
import {
  CommonModule
} from "./chunk-NNHSEQJ4.js";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  first,
  forwardRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵtemplate
} from "./chunk-WJI74WZ2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-4KQ2WF6L.js";

// node_modules/@ckeditor/ckeditor5-integrations-common/dist/index.js
function O(e, {
  timeOutAfter: t = 500,
  retryAfter: r = 100
} = {}) {
  return new Promise((n, o) => {
    const c = Date.now();
    let s = null;
    const a = setTimeout(() => {
      o(s ?? new Error("Timeout"));
    }, t), u = () => __async(this, null, function* () {
      try {
        const l = yield e();
        clearTimeout(a), n(l);
      } catch (l) {
        s = l, Date.now() - c > t ? o(l) : setTimeout(u, r);
      }
    });
    u();
  });
}
var m = /* @__PURE__ */ new Map();
function P(e, {
  attributes: t
} = {}) {
  if (m.has(e)) return m.get(e);
  const r = document.querySelector(`script[src="${e}"]`);
  r && (console.warn(`Script with "${e}" src is already present in DOM!`), r.remove());
  const n = new Promise((o, c) => {
    const s = document.createElement("script");
    s.onerror = c, s.onload = () => {
      o();
    };
    for (const [u, l] of Object.entries(t || {})) s.setAttribute(u, l);
    s.setAttribute("data-injected-by", "ckeditor-integration"), s.type = "text/javascript", s.async = true, s.src = e, document.head.appendChild(s);
    const a = new MutationObserver((u) => {
      u.flatMap((f) => Array.from(f.removedNodes)).includes(s) && (m.delete(e), a.disconnect());
    });
    a.observe(document.head, {
      childList: true,
      subtree: true
    });
  });
  return m.set(e, n), n;
}
function C(e, t) {
  return __async(this, null, function* () {
    yield Promise.all(e.map((r) => P(r, t)));
  });
}
var p = /* @__PURE__ */ new Map();
function S({
  href: e,
  placementInHead: t = "start",
  attributes: r = {}
}) {
  if (p.has(e)) return p.get(e);
  const n = document.querySelector(`link[href="${e}"][rel="stylesheet"]`);
  n && (console.warn(`Stylesheet with "${e}" href is already present in DOM!`), n.remove());
  const o = (s) => {
    const a = Array.from(document.head.querySelectorAll('link[data-injected-by="ckeditor-integration"]'));
    switch (t) {
      case "start":
        a.length ? a.slice(-1)[0].after(s) : document.head.insertBefore(s, document.head.firstChild);
        break;
      case "end":
        document.head.appendChild(s);
        break;
    }
  }, c = new Promise((s, a) => {
    const u = document.createElement("link");
    for (const [f, k] of Object.entries(r || {})) u.setAttribute(f, k);
    u.setAttribute("data-injected-by", "ckeditor-integration"), u.rel = "stylesheet", u.href = e, u.onerror = a, u.onload = () => {
      s();
    }, o(u);
    const l = new MutationObserver((f) => {
      f.flatMap((v) => Array.from(v.removedNodes)).includes(u) && (p.delete(e), l.disconnect());
    });
    l.observe(document.head, {
      childList: true,
      subtree: true
    });
  });
  return p.set(e, c), c;
}
function A(e, {
  attributes: t
} = {}) {
  if (document.head.querySelector(`link[href="${e}"][rel="preload"]`)) return;
  const r = document.createElement("link");
  for (const [n, o] of Object.entries(t || {})) r.setAttribute(n, o);
  r.setAttribute("data-injected-by", "ckeditor-integration"), r.rel = "preload", r.as = $(e), r.href = e, document.head.insertBefore(r, document.head.firstChild);
}
function $(e) {
  switch (true) {
    case /\.css$/.test(e):
      return "style";
    case /\.js$/.test(e):
      return "script";
    default:
      return "fetch";
  }
}
var i = new Array(256).fill("").map((e, t) => ("0" + t.toString(16)).slice(-2));
function z() {
  const [e, t, r, n] = crypto.getRandomValues(new Uint32Array(4));
  return "e" + i[e >> 0 & 255] + i[e >> 8 & 255] + i[e >> 16 & 255] + i[e >> 24 & 255] + i[t >> 0 & 255] + i[t >> 8 & 255] + i[t >> 16 & 255] + i[t >> 24 & 255] + i[r >> 0 & 255] + i[r >> 8 & 255] + i[r >> 16 & 255] + i[r >> 24 & 255] + i[n >> 0 & 255] + i[n >> 8 & 255] + i[n >> 16 & 255] + i[n >> 24 & 255];
}
function h(e) {
  return Array.from(new Set(e));
}
function y(e, t) {
  return __async(this, null, function* () {
    const r = () => e.map((n) => window[n]).filter(Boolean)[0];
    return O(() => {
      const n = r();
      if (!n) throw new Error(`Window entry "${e.join(",")}" not found.`);
      return n;
    }, t);
  });
}
function K(e, t) {
  const r = Object.entries(e).filter(([n, o]) => t(o, n));
  return Object.fromEntries(r);
}
function T(e) {
  return K(e, (t) => t != null);
}
function j(e, t) {
  const r = Object.entries(e).map(([n, o]) => [n, t(o, n)]);
  return Object.fromEntries(r);
}
function g(e, t) {
  return t.filter((r) => !e.includes(r));
}
var B = "https://cdn.ckeditor.com";
function d(e, t, r) {
  return `${B}/${e}/${r}/${t}`;
}
var L = "https://cdn.ckbox.io";
function w(e, t, r) {
  return `${L}/${e}/${r}/${t}`;
}
function R({
  version: e,
  translations: t
}) {
  const r = {
    scripts: [
      // Load the main script of the base features.
      d("ckeditor5", "ckeditor5.umd.js", e),
      // Load all JavaScript files from the base features.
      // EN bundle is prebuilt into the main script, so we don't need to load it separately.
      ...g(["en"], t || []).map((n) => d("ckeditor5", `translations/${n}.umd.js`, e))
    ],
    stylesheets: [d("ckeditor5", "ckeditor5.css", e)]
  };
  return {
    // Preload resources specified in the pack, before loading the main script.
    preload: [...r.stylesheets, ...r.scripts],
    scripts: [
      // It's safe to load translations and the main script in parallel.
      (n) => __async(this, null, function* () {
        return C(r.scripts, n);
      })
    ],
    // Load all stylesheets of the base features.
    stylesheets: r.stylesheets,
    // Pick the exported global variables from the window object.
    checkPluginLoaded: () => __async(this, null, function* () {
      return y(["CKEDITOR"]);
    })
  };
}
function _({
  version: e,
  translations: t
}) {
  const r = {
    scripts: [
      // Load the main script of the premium features.
      d("ckeditor5-premium-features", "ckeditor5-premium-features.umd.js", e),
      // Load all JavaScript files from the premium features.
      // EN bundle is prebuilt into the main script, so we don't need to load it separately.
      ...g(["en"], t || []).map((n) => d("ckeditor5-premium-features", `translations/${n}.umd.js`, e))
    ],
    stylesheets: [d("ckeditor5-premium-features", "ckeditor5-premium-features.css", e)]
  };
  return {
    // Preload resources specified in the pack, before loading the main script.
    preload: [...r.stylesheets, ...r.scripts],
    scripts: [
      // It's safe to load translations and the main script in parallel.
      (n) => __async(this, null, function* () {
        return C(r.scripts, n);
      })
    ],
    // Load all stylesheets of the premium features.
    stylesheets: r.stylesheets,
    // Pick the exported global variables from the window object.
    checkPluginLoaded: () => __async(this, null, function* () {
      return y(["CKEDITOR_PREMIUM_FEATURES"]);
    })
  };
}
function x(e) {
  return __async(this, null, function* () {
    let {
      htmlAttributes: t = {},
      scripts: r = [],
      stylesheets: n = [],
      preload: o,
      checkPluginLoaded: c
    } = b(e);
    o || (o = h([...n.filter((s) => typeof s == "string"), ...r.filter((s) => typeof s == "string")]));
    for (const s of o) A(s, {
      attributes: t
    });
    yield Promise.all(h(n).map((s) => S({
      href: s,
      attributes: t,
      placementInHead: "start"
    })));
    for (const s of h(r)) {
      const a = {
        attributes: t
      };
      typeof s == "string" ? yield P(s, a) : yield s(a);
    }
    return c?.();
  });
}
function b(e) {
  return Array.isArray(e) ? {
    scripts: e.filter((t) => typeof t == "function" || t.endsWith(".js")),
    stylesheets: e.filter((t) => t.endsWith(".css"))
  } : typeof e == "function" ? {
    checkPluginLoaded: e
  } : e;
}
function E(e) {
  const t = j(T(e), b);
  return __spreadProps(__spreadValues({}, Object.values(t).reduce((o, c) => (o.scripts.push(...c.scripts ?? []), o.stylesheets.push(...c.stylesheets ?? []), o.preload.push(...c.preload ?? []), o), {
    preload: [],
    scripts: [],
    stylesheets: []
  })), {
    checkPluginLoaded: () => __async(this, null, function* () {
      const o = /* @__PURE__ */ Object.create(null);
      for (const [c, s] of Object.entries(t)) o[c] = yield s?.checkPluginLoaded?.();
      return o;
    })
  });
}
function D({
  version: e,
  theme: t = "lark"
}) {
  return __spreadProps(__spreadValues({
    // Load the main script of the base features.
    scripts: [w("ckbox", "ckbox.js", e)]
  }, t && {
    stylesheets: [w("ckbox", `styles/themes/${t}.css`, e)]
  }), {
    // Pick the exported global variables from the window object.
    checkPluginLoaded: () => __async(this, null, function* () {
      return y(["CKBox"]);
    })
  });
}
function M(e) {
  const t = j(e, (r, n) => {
    if (!r) return;
    const o = b(r);
    return __spreadValues({
      // Provide default window accessor object if the plugin pack does not define it.
      checkPluginLoaded: () => __async(this, null, function* () {
        return y([n]);
      })
    }, o);
  });
  return E(t);
}
function F(e) {
  const {
    version: t,
    translations: r,
    plugins: n,
    premium: o,
    ckbox: c,
    injectedHtmlElementsAttributes: s = {
      crossorigin: "anonymous"
    }
  } = e, a = E(__spreadProps(__spreadValues(__spreadValues({
    CKEditor: R({
      version: t,
      translations: r
    })
  }, o && {
    CKEditorPremiumFeatures: _({
      version: t,
      translations: r
    })
  }), c && {
    CKBox: D(c)
  }), {
    loadedPlugins: M(n ?? {})
  }));
  return x(__spreadProps(__spreadValues({}, a), {
    htmlAttributes: s
  }));
}

// node_modules/@ckeditor/ckeditor5-angular/fesm2022/ckeditor-ckeditor5-angular.mjs
function CKEditorComponent_ng_template_0_Template(rf, ctx) {
}
var ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID = "Lock from Angular integration (@ckeditor/ckeditor5-angular)";
var CKEditorComponent = class _CKEditorComponent {
  /**
   * The reference to the DOM element created by the component.
   */
  elementRef;
  /**
   * The constructor of the editor to be used for the instance of the component.
   * It can be e.g. the `ClassicEditorBuild`, `InlineEditorBuild` or some custom editor.
   */
  editor;
  /**
   * The configuration of the editor.
   * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html
   * to learn more.
   */
  config = {};
  /**
   * The initial data of the editor. Useful when not using the ngModel.
   * See https://angular.io/api/forms/NgModel to learn more.
   */
  data = "";
  /**
   * Tag name of the editor component.
   *
   * The default tag is 'div'.
   */
  tagName = "div";
  // TODO Change to ContextWatchdog<Editor, HTMLElement> after new ckeditor5 alpha release
  /**
   * The context watchdog.
   */
  watchdog;
  /**
   * Config for the EditorWatchdog.
   */
  editorWatchdogConfig;
  /**
   * Allows disabling the two-way data binding mechanism. Disabling it can boost performance for large documents.
   *
   * When a component is connected using the [(ngModel)] or [formControl] directives and this value is set to true then none of the data
   * will ever be synchronized.
   *
   * An integrator must call `editor.data.get()` manually once the application needs the editor's data.
   * An editor instance can be received in the `ready()` callback.
   */
  disableTwoWayDataBinding = false;
  /**
   * When set `true`, the editor becomes read-only.
   * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#member-isReadOnly
   * to learn more.
   */
  set disabled(isDisabled) {
    this.setDisabledState(isDisabled);
  }
  get disabled() {
    if (this.editorInstance) {
      return this.editorInstance.isReadOnly;
    }
    return this.initiallyDisabled;
  }
  /**
   * Fires when the editor is ready. It corresponds with the `editor#ready`
   * https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#event-ready
   * event.
   */
  ready = new EventEmitter();
  /**
   * Fires when the content of the editor has changed. It corresponds with the `editor.model.document#change`
   * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_document-Document.html#event-change
   * event.
   */
  change = new EventEmitter();
  /**
   * Fires when the editing view of the editor is blurred. It corresponds with the `editor.editing.view.document#blur`
   * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:blur
   * event.
   */
  blur = new EventEmitter();
  /**
   * Fires when the editing view of the editor is focused. It corresponds with the `editor.editing.view.document#focus`
   * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:focus
   * event.
   */
  focus = new EventEmitter();
  /**
   * Fires when the editor component crashes.
   */
  error = new EventEmitter();
  /**
   * The instance of the editor created by this component.
   */
  get editorInstance() {
    let editorWatchdog = this.editorWatchdog;
    if (this.watchdog) {
      editorWatchdog = this.watchdog._watchdogs.get(this.id);
    }
    if (editorWatchdog) {
      return editorWatchdog.editor;
    }
    return null;
  }
  /**
   * The editor watchdog. It is created when the context watchdog is not passed to the component.
   * It keeps the editor running.
   */
  editorWatchdog;
  /**
   * If the component is read–only before the editor instance is created, it remembers that state,
   * so the editor can become read–only once it is ready.
   */
  initiallyDisabled = false;
  /**
   * An instance of https://angular.io/api/core/NgZone to allow the interaction with the editor
   * withing the Angular event loop.
   */
  ngZone;
  /**
   * A callback executed when the content of the editor changes. Part of the
   * `ControlValueAccessor` (https://angular.io/api/forms/ControlValueAccessor) interface.
   *
   * Note: Unset unless the component uses the `ngModel`.
   */
  cvaOnChange;
  /**
   * A callback executed when the editor has been blurred. Part of the
   * `ControlValueAccessor` (https://angular.io/api/forms/ControlValueAccessor) interface.
   *
   * Note: Unset unless the component uses the `ngModel`.
   */
  cvaOnTouched;
  /**
   * Reference to the source element used by the editor.
   */
  editorElement;
  /**
   * A lock flag preventing from calling the `cvaOnChange()` during setting editor data.
   */
  isEditorSettingData = false;
  id = z();
  getId() {
    return this.id;
  }
  constructor(elementRef, ngZone) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.checkVersion();
  }
  checkVersion() {
    const {
      CKEDITOR_VERSION
    } = window;
    if (!CKEDITOR_VERSION) {
      return console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');
    }
    const [major] = CKEDITOR_VERSION.split(".").map(Number);
    if (major >= 42 || CKEDITOR_VERSION.startsWith("0.0.0")) {
      return;
    }
    console.warn("The <CKEditor> component requires using CKEditor 5 in version 42+ or nightly build.");
  }
  // Implementing the OnChanges interface. Whenever the `data` property is changed, update the editor content.
  ngOnChanges(changes) {
    if (Object.prototype.hasOwnProperty.call(changes, "data") && changes.data && !changes.data.isFirstChange()) {
      this.writeValue(changes.data.currentValue);
    }
  }
  // Implementing the AfterViewInit interface.
  ngAfterViewInit() {
    this.attachToWatchdog();
  }
  // Implementing the OnDestroy interface.
  ngOnDestroy() {
    return __async(this, null, function* () {
      if (this.watchdog) {
        yield this.watchdog.remove(this.id);
      } else if (this.editorWatchdog && this.editorWatchdog.editor) {
        yield this.editorWatchdog.destroy();
        this.editorWatchdog = void 0;
      }
    });
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  writeValue(value) {
    if (value === null) {
      value = "";
    }
    if (this.editorInstance) {
      this.isEditorSettingData = true;
      this.editorInstance.data.set(value);
      this.isEditorSettingData = false;
    } else {
      this.data = value;
      this.ready.pipe(first()).subscribe((editor) => {
        editor.data.set(this.data);
      });
    }
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  registerOnChange(callback) {
    this.cvaOnChange = callback;
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  registerOnTouched(callback) {
    this.cvaOnTouched = callback;
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  setDisabledState(isDisabled) {
    if (this.editorInstance) {
      if (isDisabled) {
        this.editorInstance.enableReadOnlyMode(ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID);
      } else {
        this.editorInstance.disableReadOnlyMode(ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID);
      }
    }
    this.initiallyDisabled = isDisabled;
  }
  /**
   * Creates the editor instance, sets initial editor data, then integrates
   * the editor with the Angular component. This method does not use the `editor.data.set()`
   * because of the issue in the collaboration mode (#6).
   */
  attachToWatchdog() {
    const creator = (elementOrData, config2) => {
      return this.ngZone.runOutsideAngular(() => __async(this, null, function* () {
        this.elementRef.nativeElement.appendChild(elementOrData);
        const editor = yield this.editor.create(elementOrData, config2);
        if (this.initiallyDisabled) {
          editor.enableReadOnlyMode(ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID);
        }
        this.ngZone.run(() => {
          this.ready.emit(editor);
        });
        this.setUpEditorEvents(editor);
        return editor;
      }));
    };
    const destructor = (editor) => __async(this, null, function* () {
      yield editor.destroy();
      this.elementRef.nativeElement.removeChild(this.editorElement);
    });
    const emitError = (e) => {
      if (hasObservers(this.error)) {
        this.ngZone.run(() => this.error.emit(e));
      }
    };
    const element = document.createElement(this.tagName);
    const config = this.getConfig();
    this.editorElement = element;
    if (this.watchdog) {
      this.watchdog.add({
        id: this.id,
        type: "editor",
        creator,
        destructor,
        sourceElementOrData: element,
        config
      }).catch((e) => {
        emitError(e);
      });
      this.watchdog.on("itemError", (_2, {
        itemId
      }) => {
        if (itemId === this.id) {
          emitError();
        }
      });
    } else {
      const editorWatchdog = new this.editor.EditorWatchdog(this.editor, this.editorWatchdogConfig);
      editorWatchdog.setCreator(creator);
      editorWatchdog.setDestructor(destructor);
      editorWatchdog.on("error", emitError);
      this.editorWatchdog = editorWatchdog;
      this.ngZone.runOutsideAngular(() => {
        editorWatchdog.create(element, config).catch((e) => {
          emitError(e);
        });
      });
    }
  }
  getConfig() {
    if (this.data && this.config.initialData) {
      throw new Error("Editor data should be provided either using `config.initialData` or `data` properties.");
    }
    const config = __spreadValues({}, this.config);
    const initialData = this.config.initialData || this.data;
    if (initialData) {
      config.initialData = initialData;
    }
    return config;
  }
  /**
   * Integrates the editor with the component by attaching related event listeners.
   */
  setUpEditorEvents(editor) {
    const modelDocument = editor.model.document;
    const viewDocument = editor.editing.view.document;
    modelDocument.on("change:data", (evt) => {
      this.ngZone.run(() => {
        if (this.disableTwoWayDataBinding) {
          return;
        }
        if (this.cvaOnChange && !this.isEditorSettingData) {
          const data = editor.data.get();
          this.cvaOnChange(data);
        }
        this.change.emit({
          event: evt,
          editor
        });
      });
    });
    viewDocument.on("focus", (evt) => {
      this.ngZone.run(() => {
        this.focus.emit({
          event: evt,
          editor
        });
      });
    });
    viewDocument.on("blur", (evt) => {
      this.ngZone.run(() => {
        if (this.cvaOnTouched) {
          this.cvaOnTouched();
        }
        this.blur.emit({
          event: evt,
          editor
        });
      });
    });
  }
  static ɵfac = function CKEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CKEditorComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CKEditorComponent,
    selectors: [["ckeditor"]],
    inputs: {
      editor: "editor",
      config: "config",
      data: "data",
      tagName: "tagName",
      watchdog: "watchdog",
      editorWatchdogConfig: "editorWatchdogConfig",
      disableTwoWayDataBinding: "disableTwoWayDataBinding",
      disabled: "disabled"
    },
    outputs: {
      ready: "ready",
      change: "change",
      blur: "blur",
      focus: "focus",
      error: "error"
    },
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => _CKEditorComponent),
      multi: true
    }]), ɵɵNgOnChangesFeature],
    decls: 1,
    vars: 0,
    template: function CKEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, CKEditorComponent_ng_template_0_Template, 0, 0, "ng-template");
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CKEditorComponent, [{
    type: Component,
    args: [{
      selector: "ckeditor",
      template: "<ng-template></ng-template>",
      // Integration with @angular/forms.
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: forwardRef(() => CKEditorComponent),
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    editor: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    tagName: [{
      type: Input
    }],
    watchdog: [{
      type: Input
    }],
    editorWatchdogConfig: [{
      type: Input
    }],
    disableTwoWayDataBinding: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    ready: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    error: [{
      type: Output
    }]
  });
})();
function hasObservers(emitter) {
  return emitter.observed || emitter.observers.length > 0;
}
var CKEditorModule = class _CKEditorModule {
  static ɵfac = function CKEditorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CKEditorModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _CKEditorModule,
    declarations: [CKEditorComponent],
    imports: [FormsModule, CommonModule],
    exports: [CKEditorComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [FormsModule, CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CKEditorModule, [{
    type: NgModule,
    args: [{
      imports: [FormsModule, CommonModule],
      declarations: [CKEditorComponent],
      exports: [CKEditorComponent]
    }]
  }], null, null);
})();
export {
  CKEditorComponent,
  CKEditorModule,
  F as loadCKEditorCloud
};
/*! Bundled license information:

@ckeditor/ckeditor5-integrations-common/dist/index.js:
  (**
   * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-integrations-common/dist/index.js:
  (**
   * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-integrations-common/dist/index.js:
  (**
   * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-integrations-common/dist/index.js:
  (**
   * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-integrations-common/dist/index.js:
  (**
   * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-integrations-common/dist/index.js:
  (**
   * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-integrations-common/dist/index.js:
  (**
   * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-angular/fesm2022/ckeditor-ckeditor5-angular.mjs:
  (**
   * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md.
   *)
*/
//# sourceMappingURL=@ckeditor_ckeditor5-angular.js.map
