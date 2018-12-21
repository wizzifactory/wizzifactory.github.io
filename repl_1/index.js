/*
    artifact generator: C:\my\wizzi\v5\apps\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: c:\my\wizzi\v5\apps\wizzi-studio\dist\server\ittf\demo\ttech\wizzi\play\repl_1\index.js.ittf
    utc time: Fri, 21 Dec 2018 13:59:08 GMT
*/
'use strict';
if (typeof Array.isArray === 'undefined') {
    Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };
}
(function() {
    var wz = window.wz = {};
    var rclass = /[\n\t\r]/g;
    var rnotwhite = (/\S+/g);
    class wz_EventTarget {
        constructor() {
            this.handlers = {};
        }
        __is_Event(name) {
            return Array.isArray(this.events) == false || this.events.indexOf(name) > -1;
        }
        emit(name) {
            var args = [].slice.call(arguments, 1);
            // log 'wz_EventTarget.emit.args', arguments, args
            if (this.__is_Event(name)) {
                if (this.handlers[name] instanceof Array) {
                    var i, i_items=this.handlers[name], i_len=this.handlers[name].length, handle;
                    for (i=0; i<i_len; i++) {
                        handle = this.handlers[name][i];
                        // log 'handle.context', handle.context
                        handle.callback.apply(handle.context, args);
                    }
                }
            }
            else {
                throw new Error(name + ' event cannot be found on TreeView.');
            }
        }
        on(name, callback, scope) {
            // log 'EventTarget.on.name,scope', name, scope
            if (this.__is_Event(name)) {
                if (!this.handlers[name]) {
                    this.handlers[name] = [];
                }
                this.handlers[name].push({
                    callback: callback, 
                    context: scope
                });
            }
            else {
                throw new Error(name + ' is not supported by TreeView.');
            }
        }
        off(name, callback) {
            var index,
                found = false;
            if (this.handlers[name] instanceof Array) {
                this.handlers[name].forEach(function(handle, i) {
                    index = i;
                    if (handle.callback === callback && !found) {
                        found = true;
                    }
                });
                if (found) {
                    this.handlers[name].splice(index, 1);
                }
            }
        }
    }
    wz.EventTarget = wz_EventTarget;
    class wz_global  extends  wz.EventTarget {
        constructor() {
            super();
        }
    }
    wz.global = new wz_global();
    (function() {
        if (document.addEventListener) {
            window.addEvent = function(elem, type, handler, useCapture) {
                elem.addEventListener(type, handler, !(!(useCapture)));
                return handler;
            };
            window.removeEvent = function(elem, type, handler, useCapture) {
                elem.removeEventListener(type, handler, !(!(useCapture)));
                return true;
            };
        }
        else if (document.attachEvent) {
            window.addEvent = function(elem, type, handler) {
                type = ("on" + type);
                var boundedHandler = function() {
                    return handler.apply(elem, arguments);
                };
                elem.attachEvent(type, boundedHandler);
                return boundedHandler;
            };
            window.removeEvent = function(elem, type, handler) {
                type = ("on" + type);
                elem.detachEvent(type, handler);
                return true;
            };
        }
    })();
    wz.element = function(element) {
        if (typeof element === 'string') {
            var e = document.querySelector(element);
            if (!e) {
                try {
                    e = document.querySelector("#" + element);
                } 
                catch (ex) {
                    return null;
                } 
            }
            return e;
        }
        else {
            return element;
        }
    };
    wz.hide = function(element) {
        var e = wz.element(element);
        e.style.display = 'none';
    };
    wz.show = function(element) {
        var e = wz.element(element);
        e.style.display = 'block';
    };
    wz.hasClass = function(element, selector) {
        var e = wz.element(element);
        if ((" " + e.className + " ").replace(rclass, " ").indexOf(" " + selector + " ") > -1) {
            return true;
        }
        return false;
    };
    wz.addClass = function(element, value) {
        var e = wz.element(element);
        var classes, cur, finalValue;
        if (value && typeof value === "string") {
            classes = ( value || "" ).match( rnotwhite ) || [];
            if (!e.className && classes.length === 1) {
                e.className = value;
            }
            else {
                cur = " " + e.className + " ";
                var i, i_items=classes, i_len=classes.length, clazz;
                for (i=0; i<i_len; i++) {
                    clazz = classes[i];
                    if (cur.indexOf( " " + clazz + " " ) < 0) {
                        cur += clazz + " ";
                    }
                }
                finalValue = cur.trim();
                if (e.className !== finalValue) {
                    e.className = finalValue;
                }
            }
        }
    };
    wz.removeClass = function(element, value) {
        var e = wz.element(element);
        var classes, cur, finalValue;
        if (value && typeof value === "string") {
            classes = ( value || "" ).match( rnotwhite ) || [];
            cur = e.className ? ( " " + e.className + " " ).replace( rclass, " " ) : "";
            var i, i_items=classes, i_len=classes.length, clazz;
            for (i=0; i<i_len; i++) {
                clazz = classes[i];
                while (cur.indexOf( " " + clazz + " " ) >= 0) {
                    cur = cur.replace( " " + clazz + " ", " " );
                }
            }
            finalValue = cur.trim();
            if (e.className !== finalValue) {
                e.className = finalValue;
            }
        }
    };
    wz.toggleClass = function(element, value) {
        if (wz.hasClass(element, value)) {
            wz.removeClass(element, value);
        }
        else {
            wz.addClass(element, value);
        }
    };
    wz.attribute = function(element, name, value) {
        var e = wz.element(element);
        if (typeof value === 'undefined') {
            return e.getAttribute(name);
        }
        else {
            e.setAttribute(name, value);
        }
    };
    wz.style = function(element, name, value) {
        var e = wz.element(element);
        if (typeof value === 'undefined') {
            return e.style[name];
        }
        else {
            e.style[name] = value;
        }
    };
    wz.text = function(element, value) {
        var e = wz.element(element);
        if (typeof value === 'undefined') {
            return e.textContent;
        }
        else if (e.textContent !== value) {
            e.textContent = value;
        }
    };
    wz.html = function(element, html) {
        var saveElementForLog = element;
        if (typeof element === "string") {
            element = wz.element(element);
        }
        if (!element) {
            console.log('element', saveElementForLog);
            throw new Error('In wz.html the element parameter must be an html element or the id of an html element. Received: ' + saveElementForLog);
        }
        if (typeof html === 'undefined') {
            return element.innerHTML;
        }
        else {
            element.innerHTML = html;
        }
    };
    wz.htmlEscaped = function(element, html) {
        wz.html(element, escapeHtml(html));
    };
    wz.replaceChildren = function(element, nodes) {
        var saveElementForLog = element;
        if (typeof element === "string") {
            element = wz.element(element);
        }
        if (!element) {
            console.log('element', saveElementForLog);
            throw new Error('In wz.replaceChildren the element parameter must be an html element or the id of an html element. Received: ' + saveElementForLog);
        }
        element.innerHTML = '';
        if (nodes.length) {
            var i, i_items=nodes, i_len=nodes.length, node;
            for (i=0; i<i_len; i++) {
                node = nodes[i];
                element.appendChild( node );
            }
        }
        else {
            element.appendChild( nodes );
        }
    };
    wz.value = function(element, value) {
        var saveElementForLog = element;
        if (typeof element === "string") {
            element = wz.element(element);
        }
        if (!element) {
            console.log('element', saveElementForLog);
            throw new Error('In wz.value the element parameter must be an html element or the id of an html element. Received: ' + saveElementForLog);
        }
        if (typeof value === 'undefined') {
            return element.value;
        }
        else if (element.value !== value) {
            element.value = value;
        }
    };
    wz.val = wz.value;
    wz.click = function(element, handler, useCapture) {
        window.addEvent(wz.element(element), 'click', handler, useCapture);
    };
    wz.unclick = function(element, handler, useCapture) {
        window.removeEvent(wz.element(element), 'click', handler, useCapture);
    };
    wz.blur = function(element, handler, useCapture) {
        window.addEvent(wz.element(element), 'blur', handler, useCapture);
    };
    wz.unblur = function(element, handler, useCapture) {
        window.removeEvent(wz.element(element), 'blur', handler, useCapture);
    };
    wz.change = function(element, handler, useCapture) {
        window.addEvent(wz.element(element), 'change', handler, useCapture);
    };
    wz.unchange = function(element, handler, useCapture) {
        window.removeEvent(wz.element(element), 'change', handler, useCapture);
    };
    wz.contextmenu = function(element, handler, useCapture) {
        window.addEvent(wz.element(element), 'contextmenu', handler, useCapture);
    };
    wz.uncontextmenu = function(element, handler, useCapture) {
        window.removeEvent(wz.element(element), 'contextmenu', handler, useCapture);
    };
    wz.keypress = function(element, handler, useCapture) {
        window.addEvent(wz.element(element), 'keypress', handler, useCapture);
    };
    wz.unkeypress = function(element, handler, useCapture) {
        window.removeEvent(wz.element(element), 'keypress', handler, useCapture);
    };
    wz.contentLoaded = function(fn) {
        // from Diego Perini https://raw.githubusercontent.com/dperini/ContentLoaded/master/src/contentloaded.js
        var done = false,
            top = true,
            doc = window.document,
            root = doc.documentElement,
            modern = doc.addEventListener,
            add = modern ? 'addEventListener' : 'attachEvent',
            rem = modern ? 'removeEventListener' : 'detachEvent',
            pre = modern ? '' : 'on',
            init = function(e) {
                if ((e.type == 'readystatechange') && (doc.readyState != 'complete')) {
                    return ;
                }
                (e.type == 'load' ? window : doc)[rem](pre + e.type, init, false);
                if (!(done) && (done = true)) {
                    fn.call(window, (e.type || e));
                }
            },
            poll = function() {
                try {
                    root.doScroll('left');
                } 
                catch (e) {
                    setTimeout(poll, 50);
                    return ;
                } 
                init('poll');
            };
        if (doc.readyState == 'complete') {
            fn.call(window, 'lazy');
        }
        else {
            if (!(modern) && root.doScroll) {
                try {
                    top = !(window.frameElement);
                } 
                catch (e) {
                } 
                if (top) {
                    poll();
                }
            }
            doc[add](pre + 'DOMContentLoaded', init, false);
            doc[add](pre + 'readystatechange', init, false);
            window[add](pre + 'load', init, false);
        }
    };
    wz.loaded = wz.contentLoaded;
    var entityMap = {
        '&': '&amp;', 
        '<': '&lt;', 
        '>': '&gt;', 
        '"': '&quot;', 
        "'": '&#39;', 
        '/': '&#x2F;', 
        '`': '&#x60;', 
        '=': '&#x3D;'
    };
    function escapeHtml(string) {
        return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
                return entityMap[s];
            });
    }
})();
if (!window.wz) {
    window.wz = {};
}
wz.node = {};
wz.node.remove = function(node) {
    if (!node.parent) {
        throw new Error('Node must have a parent');
    }
    if (!node.parent.children) {
        throw new Error('Node parent must must have a children property');
    }
    var index = node.parent.children.indexOf(node);
    if (index < 0) {
        throw new Error('Node must be child of its parent property');
    }
    node.parent.children.splice(index, 1);
    return index;
};
wz.node.replace = function(node, newnode) {
    if (!node.parent) {
        throw new Error('Node must have a parent');
    }
    if (!node.parent.children) {
        throw new Error('Node parent must must have a children property');
    }
    var index = node.parent.children.indexOf(node);
    if (index < 0) {
        throw new Error('Node must be child of its parent property');
    }
    newnode.parent = node.parent;
    node.parent.children[index] = newnode();
};
var AceEditor_mimemap = {
    js: 'javascript'
};
var AceEditor_defaults = {
    key: 'ace', 
    editorElementId: 'aceEditor', 
    mode: 'text', 
    theme: 'monokai', 
    fontSize: '11pt'
};
class AceEditor {
    constructor(options) {
        /**
             params
             { options
             string editorElementId
             string mode
             string theme
             number width
             number height
        */
        this.options = Object.assign(AceEditor_defaults, options);
        this.elementId = this.options.editorElementId;
        this.key = this.options.key;
        this.editor = null;
        this.events = {};
    }
    getValue() {
        if (this.editor) {
            return this.editor.getValue();
        }
    }
    setValue(value) {
        if (!this.editor) {
            this.initialize();
        }
        this.editor.setValue(value, 1);
    }
    setMime(value) {
        this.setMode(AceEditor_mimemap[value] || value);
    }
    setMode(value) {
        if (this.editor) {
            this.editor.getSession().setMode("ace/mode/" + value);
        }
    }
    setTheme(value) {
        if (this.editor) {
            this.editor.setTheme("ace/theme/" + value);
        }
    }
    readOnly(value) {
        if (typeof value === 'undefined') {
            return this.editor.getReadOnly();
        }
        else {
            this.editor.setReadOnly(value);
        }
    }
    onChange(handler) {
        this.onChange = handler;
    }
    initialize() {
        if (this.editor) {
            return ;
        }
        console.log('AceEditor.initialize start on', this.options.editorElementId);
        if (typeof ace === 'undefined' || !ace.edit) {
            throw new Error('wz.ace initialize methods requires the `ace` component. Check that the ace script has been included.');
        }
        this.element = wz.element('#' + this.options.editorElementId);
        if (!this.element) {
            throw new Error('wz.ace initialize methods requires an existing `options.editorElementId` : ' + this.options.editorElementId + ' html element.');
        }
        wz.style(this.element, 'width', this.options.width);
        wz.style(this.element, 'height', this.options.height);
        this.editor = ace.edit(this.options.editorElementId);
        this.editor.setOptions({
            fontSize: this.options.fontSize
        });
        this.setMode(this.options.mode);
        this.setTheme(this.options.theme);
        var that = this;
        this.editor.getSession().on('change', function() {
            that.fire('change', [
                that.getValue()
            ]);
        });
        console.log('AceEditor.initialize end');
    }
    on(name, handler) {
        if (this.events.hasOwnProperty(name)) {
            this.events[name].push(handler);
        }
        else {
            this.events[name] =	[handler];
        }
    }
    off(name, handler) {
        if (!this.events.hasOwnProperty(name)) {
            return ;
        }
        var index = this.events[name].indexOf(handler);
        if (index != -1) {
            this.events[name].splice(index, 1);
        }
    }
    fire(name, args) {
        if (!this.events.hasOwnProperty(name)) {
            return ;
        }
        if (!args || !args.length) {
            args = [];
        }
        var i, i_items=this.events[name], i_len=this.events[name].length, ev;
        for (i=0; i<i_len; i++) {
            ev = this.events[name][i];
            ev.apply(null, args);
        }
    }
}
class LocalStorage {
    constructor(keyprefix) {
        this.keyprefix = keyprefix;
    }
    k(key) {
        return this.keyprefix + '.' + key;
    }
    get(key, defaultValue, setDefault) {
        key = this.k(key);
        var ret = localStorage.getItem(key);
        if (ret === null) {
            if (typeof defaultValue !== 'undefined') {
                ret = defaultValue;
                if (setDefault) {
                    localStorage[key] = defaultValue;
                }
            }
        }
        try {
            ret = JSON.parse(ret);
            return ret;
        } 
        catch (ex) {
        } 
        return ret;
    }
    set(key, value) {
        key = this.k(key);
        value = typeof value === 'undefined' ? null : value;
        if (value === null) {
            localStorage[key] = value;
        }
        else {
            localStorage[key] = JSON.stringify(value);
        }
        return value;
    }
    append(key, value) {
        key = this.k(key);
        var s = this.get(key, '', true);
        this.set(key, s + value);
    }
    replace(key, search, replace) {
        key = this.k(key);
        var value = this.get(key);
        if (typeof value === 'string') {
            this.set(key, value.replace(search, replace));
        }
    }
    remove(key) {
        key = this.k(key);
        localStorage.removeItem(key);
    }
    isTrue(key, value) {
        key = this.k(key);
        if (typeof value === 'undefined') {
            return this.get(key) === 'true';
        }
        else {
            this.set(key, value ? 'true' : 'false');
        }
    }
    float(key, value) {
        key = this.k(key);
        if (typeof value === 'undefined') {
            return parseFloat(this.get(key));
        }
        else {
            this.set(key, value);
        }
    }
    increment(key) {
        key = this.k(key);
        value = this.get(key, "0", true);
        value = parseFloat(value) + 1;
        this.set(key, value);
    }
    unique(collectionName, propertyName, baseValue) {
        var items = this.get(collectionName);
        var item = this._find(items, propertyName, baseValue);
        if (item === null) {
            return baseValue;
        }
        else {
            var n = 1;
            while (item !== null) {
                n++;
                item = this._find(items, propertyName, baseValue + n);
            }
            return baseValue + n;
        }
    }
    _find(collection, propertyName, value) {
        var i, i_items=collection, i_len=collection.length, item;
        for (i=0; i<i_len; i++) {
            item = collection[i];
            if (item[propertyName] === value) {
                return item;
            }
        }
        return null;
    }
}
function wzNodeRemove(item) {
    if (!item.parent) {
        throw new Error('wzNodeRemove. Missing item.parent of:' + item.tag + ',' + item.id);
    }
    var nodes = item.parent.elements;
    item.parent.elements = [];
    var i, i_items=nodes, i_len=nodes.length, child;
    for (i=0; i<i_len; i++) {
        child = nodes[i];
        if (child !== item) {
            item.parent.elements.push(child);
        }
    }
}
function wzNodeReplace(item, newNode) {
    if (!item.parent) {
        throw new Error('wzNodeReplace. Missing item.parent of:' + item.tag + ',' + item.id);
    }
    var nodes = item.parent.elements;
    item.parent.elements = [];
    var i, i_items=nodes, i_len=nodes.length, child;
    for (i=0; i<i_len; i++) {
        child = nodes[i];
        if (child !== item) {
            item.parent.elements.push(child);
        }
        else {
            item.parent.elements.push(newNode);
        }
    }
}
class wzHtmlNode {
    constructor(tag, attrs, textContent) {
        if (typeof textContent !== 'undefined') {
            this.textContent = textContent;
        }
        else {
            this.tag = tag;
            this.id = tag;
            this.parent = null;
            this.attributes = {};
            this.elements = [];
            if (attrs) {
                for (var k in attrs) {
                    if (attrs.hasOwnProperty(k)) {
                        if (k === 'id') {
                            this.id = attrs[k];
                        }
                        if (k === '_text') {
                            this.text(attrs[k]);
                        }
                        else {
                            this.attributes[k] = attrs[k];
                        }
                    }
                }
            }
        }
    }
    add(tag, attrs) {
        if (tag.tag) {
            tag.parent = this;
            this.elements.push(tag);
            return tag;
        }
        else {
            var node = new wzHtmlNode(tag, attrs);
            node.parent = this;
            this.elements.push(node);
            return node;
        }
    }
    set(name, value) {
        this.attributes[name] = value;
        return this;
    }
    text(content) {
        var node = new wzHtmlNode(null, null, content);
        this.elements.push(node);
        return this;
    }
    textReplace(content) {
        var done = false;
        var i, i_items=this.elements, i_len=this.elements.length, item;
        for (i=0; i<i_len; i++) {
            item = this.elements[i];
            if (!done && typeof item.textContent !== 'undefined') {
                item.textContent = content;
                done = true;
            }
        }
        if (!done) {
            this.text(content);
        }
        return this;
    }
    get(elementId, attributeId) {
        if (this.id === elementId) {
            if (typeof attributeId !== 'undefined') {
                return this.attributes[attributeId];
            }
            else {
                return this;
            }
        }
        else {
            if (this.elements) {
                var found;
                var i, i_items=this.elements, i_len=this.elements.length, item;
                for (i=0; i<i_len; i++) {
                    item = this.elements[i];
                    found = item.get(elementId, attributeId);
                    if (found) {
                        return found;
                    }
                }
            }
            return null;
        }
    }
    wrap(tag, attrs) {
        var wrapper = new wzHtmlNode(tag, attrs);
        wzNodeReplace(this, wrapper);
        wrapper.add(this);
        return wrapper;
    }
    unwrap() {
        // unwrap means : replace the parent with this
        wzNodeReplace(this.parent, this);
    }
    remove() {
        // unwrap means : replace the parent with this
        wzNodeRemove(this);
    }
    toHtml(indent) {
        indent = indent || 0;
        if (typeof this.textContent !== 'undefined') {
            return this.textContent;
        }
        else {
            var ret = [ new Array(indent).join(' ') ];
            ret.push('<' + this.tag);
            var i, i_items=Object.keys(this.attributes), i_len=Object.keys(this.attributes).length, name;
            for (i=0; i<i_len; i++) {
                name = Object.keys(this.attributes)[i];
                if (i > 0) {
                    ret.push('\n' + new Array(indent+2).join(' '));
                }
                var value = this.attributes[name];
                if (typeof value === 'undefined') {
                    ret.push(' ' + name);
                }
                else {
                    ret.push(' ' + name + '="' + value + '"');
                }
            }
            ret.push('>');
            var i, i_items=this.elements, i_len=this.elements.length, node;
            for (i=0; i<i_len; i++) {
                node = this.elements[i];
                ret.push(node.toHtml(indent + 1));
            }
            ret.push('</' + this.tag + '>');
            ret.push('\n');
            return ret.join('');
        }
    }
}
class wzHtmlBuilder {
    constructor(options) {
        options = options || {};
        this.elementId = options.id;
        this.elements = [];
        this.current = null;
    }
    prettyResult(elementId) {
        this.prettyResultId = elementId;
    }
    add(tag, attrs) {
        var node;
        if (this.current) {
            node = this.current.add(tag, attrs);
        }
        else {
            node = new wzHtmlNode(tag, attrs);
            node.parent = this;
            this.elements.push(node);
        }
        this.current = node;
        this.update();
        return node;
    }
    addTop(tag, attrs) {
        this.current = null;
        return this.add(tag, attrs);
    }
    set(attributeName, attributeValue) {
        this.current.set(attributeName, attributeValue);
        this.update();
        return this;
    }
    text(content) {
        this.current.text(content);
        this.update();
        return this;
    }
    textReplace(content) {
        this.current.textReplace(content);
        this.update();
        return this;
    }
    toHtml() {
        var ret = [];
        var i, i_items=this.elements, i_len=this.elements.length, item;
        for (i=0; i<i_len; i++) {
            item = this.elements[i];
            ret.push(item.toHtml());
        }
        return ret.join('\n');
    }
    select(id) {
        var found;
        var i, i_items=this.elements, i_len=this.elements.length, item;
        for (i=0; i<i_len; i++) {
            item = this.elements[i];
            found = item.get(id);
            console.log('select.item', id, item.id, found);
            if (found) {
                break;
            }
        }
        console.log('select', id, found);
        if (!found) {
            return false;
        }
        this.current = found;
        return true;
    }
    wrap(id, wrapperTag, wrapperId) {
        var found = this.select(id);
        if (!found) {
            throw new Error("wzHtmlBuilder can't wrap id=" + id + ". Not found.");
        }
        this.current = this.current.wrap(wrapperTag, wrapperId);
        this.update();
    }
    unwrap(id) {
        // unwrap means : replace the parent of id with id
        var found = this.select(id);
        if (!found) {
            throw new Error("wzHtmlBuilder can't unwrap id=" + id + ". Not found.");
        }
        this.current = this.current.unwrap();
        this.update();
    }
    remove(id) {
        var found = this.select(id);
        if (!found) {
            return ;
        }
        this.current.remove();
    }
    update() {
        if (this.elementId) {
            wz.html(wz.element('#' + this.elementId), this.toHtml());
        }
        if (this.prettyResultId) {
            wz.htmlEscaped(wz.element('#' + this.prettyResultId), this.toHtml());
        }
    }
}
if (!window.wz) {
    window.wz = {};
}
class wz_ContextMenu {
    constructor(options) {
        options = options || {};
        this.menusContainerId = options.menusContainerId || 'wz-menus-container';
        this.onClose = () => {
        };
    }
    create(meta) {
        // log 'wz.ContextMenu.create'
        this.meta = meta;
        var menusContainer = wz.element('#' + this.menusContainerId);
        if (!menusContainer) {
            menusContainer = document.createElement('div');
            menusContainer.setAttribute('id', this.menusContainerId);
            document.body.appendChild(menusContainer);
        }
        this.menuDiv = document.createElement("div");
        this.menuDiv.setAttribute('id', meta.menu.id);
        this.menuDiv.setAttribute('class', 'wz-context-menu');
        var itemsDiv = this._createMenuItemsDiv(meta.menu);
        menusContainer.appendChild(this.menuDiv);
        this.menuDiv.appendChild(itemsDiv);
        this.menuDiv.onclick = (event) => {
            var command = event.target.dataset['command'];
            // log 'clickListener.target', event.target, command
            if (meta.onClick) {
                meta.onClick({
                    command: command, 
                    payload: this.payload, 
                    event: event
                });
            }
        };
        wz.click(document, () => {
            // log 'document.onclick', meta.menu.id
            this.handleClose();
        });
        wz.global.on('wz.contextMenu.clear', function(target) {
            // log 'wz.contextMenu.clear.target', target, meta.menu.id
            if (target !== meta.menu.id) {
                this.handleClose();
            }
        }, this);
    }
    replace(menuMeta) {
        // log 'wz.ContextMenu.replace'
        // _createMenuItemsDiv removes the previous div
        var itemsDiv = this._createMenuItemsDiv(menuMeta);
        this.menuDiv.appendChild(itemsDiv);
    }
    _createMenuItemsDiv(menuMeta) {
        var hb = new wzHtmlBuilder();
        var hUl = hb.add('ul', {});
        var i, i_items=menuMeta.items, i_len=menuMeta.items.length, item;
        for (i=0; i<i_len; i++) {
            item = menuMeta.items[i];
            var hLi = hUl.add('li', {});
            hLi.add('a', {
                href: '#', 
                ['data-command']: item.command || item.label, 
                _text: item.label
            });
        }
        if (this.menuItemsDiv) {
            this.menuItemsDiv.parentNode.removeChild(this.menuItemsDiv);
        }
        this.menuItemsDiv = document.createElement("div");
        wz.html(this.menuItemsDiv, hb.toHtml('\n'));
        return this.menuItemsDiv;
    }
    handleRightClick(evt, payload) {
        wz.global.emit('wz.contextMenu.clear', this.meta.menu.id);
        this.payload = payload;
        evt = (evt) ? evt : ((event) ? event : null);
        var posnX = (evt.pageX) ? evt.pageX : ((evt.offsetX) ? evt.offsetX + 10 : null);
        var posnY = (evt.pageY) ? evt.pageY : ((evt.offsetY) ? evt.offsetY + 10 : null);
        var menu = wz.element('#' + this.meta.menu.id);
        menu.style.left = posnX + 'px';
        menu.style.top = posnY + 'px';
        menu.style.display = 'block';
        if (typeof evt.preventDefault != "undefined") {
            evt.preventDefault();
        }
        else {
            evt.returnValue = false;
        }
    }
    handleClose() {
        wz.hide('#' + this.meta.menu.id);
        // log 'handleClose', this.onClose
        this.onClose();
    }
}
wz.ContextMenu = wz_ContextMenu;
(function() {
    if (!window.wz) {
        window.wz = {};
    }
    if (!wizziStandalone || !wizziStandalone.default) {
        throw new Error('Missing component: wizziStandalone.default');
    }
    console.log('standalone', wizziStandalone.default);
    wz.wf = wizziStandalone.default;
    wz.tools = wizziStandalone.default.wizziTools;
    wz.utils = wizziStandalone.default.wizziUtils;
    wz.git = wizziStandalone.default.wizziGit;
    wz.canGen = function(schemaName, callback) {
        return wz.wf.canGen(schemaName, callback);
    };
    /**
         param
         { options
         { modelContext
         optional
         { artifactContext
         optional
         string artifactName
         optional
    */
    wz.gen = function(filePath, options, callback) {
        if (typeof callback === 'undefined') {
            callback = options;
            options = {};
        }
        wz.wf.gen(filePath, options, function(err, artifactText) {
            if (err) {
                return callback(err);
            }
            // log 'wz.gen', artifactText
            return callback(null, artifactText);
        });
    };
    wz.genFromText = function(ittfContent, options, callback) {
        if (typeof callback === 'undefined') {
            callback = options;
            options = {};
        }
        wz.wf.genFromText(ittfContent, options, function(err, artifactText) {
            if (err) {
                return callback(err);
            }
            // log 'wz.gen', artifactText
            return callback(null, artifactText);
        });
    };
    wz.canWizzify = function(schemaName) {
        return wz.tools.canBeWizzified(schemaName);
    };
    wz.wizzify = function(schemaName, snippet, callback) {
        wz.tools.wizzify(schemaName, snippet, callback);
    };
    wz.getCodeAST = function(mime, snippet, callback) {
        wz.tools[mime + 'wizzifier'].getCodeAST(snippet, {}, callback);
    };
    wz.mtree = function(filePath, context, callback) {
        if (typeof callback === 'undefined') {
            callback = context;
            context = {};
        }
        wz.wf.mtree(filePath, {
            moduleContext: context
        }, callback);
    };
    wz.mtreeDebug = function(filePath, context, callback) {
        if (typeof callback === 'undefined') {
            callback = context;
            context = {};
        }
        wz.wf.mtreeDebug(filePath, {
            moduleContext: context
        }, callback);
    };
    /**
         param
         { options
         { productionOptions
         { globalContext
    */
    wz.wizziJob = function(filePath, options, callback) {
        if (typeof callback === 'undefined') {
            callback = options;
            options = {};
        }
        wz.wf.wizziJob(filePath, options, callback);
    };
    wz.fsGit = function(options, callback) {
        if (typeof callback === 'undefined') {
            callback = options;
            options = {};
        }
        console.log('wz.fsGit', options);
        wz.git.fsGit({
            storeName: options.storeName || wz.fs.storeName
        }, function(err, fsGit) {
            if (err) {
                return callback(err);
            }
            console.log('created fs', fsGit);
            return callback(null, fsGit);
        });
    };
    wz.fs = {
        kind: 'browserfs', 
        storeName: 'wizziRepo'
    };
    wz.fs.infoByPath = function(path, isFolder) {
        var basename = path.substr(path.lastIndexOf('/')+1);
        var dirname = path.substr(0, path.lastIndexOf('/'));
        // TODO isFolder must be set by wizzi-utils.vfile.getFolders(..)
        var ss = basename.split('.');
        if (ss[ss.length-1] === 'ittf') {
            return {
                    path: path, 
                    fullPath: path, 
                    name: basename, 
                    basename: basename, 
                    dirname: dirname, 
                    isFolder: isFolder, 
                    isIttfDocument: true, 
                    isFragment: path.indexOf('/t/') > -1, 
                    schema: ss[ss.length-2], 
                    isJob: ss[ss.length-2] === 'wfjob', 
                    isSchema: ss[ss.length-2] === 'wfschema', 
                    mime: isFolder ? '' : ss[ss.length-2]
                };
        }
        else {
            return {
                    path: path, 
                    fullPath: path, 
                    name: basename, 
                    basename: basename, 
                    dirname: dirname, 
                    isFolder: isFolder, 
                    mime: isFolder ? '' : ss[ss.length-1]
                };
        }
    };
    wz.fs.getFs = function(options, callback) {
        if (typeof callback === 'undefined') {
            callback = options;
            options = {};
        }
        // log 'wz.fs.getFs', options
        wz.utils.vfile({
            storeName: options.storeName || wz.fs.storeName
        }, function(err, fs) {
            if (err) {
                return callback(err);
            }
            // log 'created fs', fs
            return callback(null, fs);
        });
    };
    wz.fs.getFolders = function(folderPath, options, callback) {
        if (typeof callback === 'undefined') {
            callback = options;
            options = {};
        }
        wz.fs.getFs(function(err, fs) {
            if (err) {
                return callback(err);
            }
            fs.getFolders(folderPath, options, callback);
        });
    };
    wz.fs.getFiles = function(folderPath, options, callback) {
        if (typeof callback === 'undefined') {
            callback = options;
            options = {};
        }
        wz.fs.getFs(function(err, fs) {
            if (err) {
                return callback(err);
            }
            fs.getFiles(folderPath, options, callback);
        });
    };
    wz.fs.getTreeFolderView = function(folderPath, callback) {
        var ret = [];
        wz.fs.getFolders(folderPath, {
            deep: false
        }, function(err, folders) {
            if (err) {
                return callback(err);
            }
            var i, i_items=folders, i_len=folders.length, f;
            for (i=0; i<i_len; i++) {
                f = folders[i];
                ret.push(wz.fs.infoByPath(f.fullPath, true));
            }
            wz.fs.getFiles(folderPath, {
                documentContent: true, 
                deep: false
            }, function(err, files) {
                if (err) {
                    return callback(err);
                }
                var i, i_items=files, i_len=files.length, f;
                for (i=0; i<i_len; i++) {
                    f = files[i];
                    var temp = wz.fs.infoByPath(f.fullPath, false);
                    temp.content = f.content;
                    ret.push(temp);
                }
                return callback(null, ret);
            });
        });
    };
})();
/**
     params
     { props
     string key
     string elementId
     string theme
     string language
     boolean readOnly
*/
class EditorControl {
    constructor(props) {
        this.props = props;
        this.key = props.key;
        this.elementId = props.elementId;
        this.theme = props.theme || 'github';
        this.language = props.language || 'js';
    }
    initialize() {
        if (this.editor) {
            return ;
        }
        this.editor = new AceEditor({
            key: this.key, 
            editorElementId: this.elementId
        });
        this.editor.initialize();
        this.editor.setMime(this.language);
        this.editor.setTheme(this.theme);
        if (this.props.readOnly) {
            this.editor.readOnly(true);
        }
        this.editor.on('change', (value) => {
            console.log('editvaluechanged', this.key, value);
            glEventHub.emit('editvaluechanged', this.key, value);
        });
        glEventHub.on('seteditvalue', (key, value) => {
            console.log('seteditvalue', key, value);
            if (key === this.key) {
                this.value(value);
            }
        });
        console.log('EditorControl initialized');
    }
    theme(value) {
        if (typeof value === 'undefined') {
            return this.theme;
        }
        else {
            this.editor.setTheme(value);
            this.theme = value;
        }
    }
    language(value) {
        if (typeof value === 'undefined') {
            return this.language;
        }
        else {
            this.editor.setMime(value);
            this.language = value;
        }
    }
    value(value) {
        if (this.editor) {
            if (typeof value === 'undefined') {
                return this.editor.getValue();
            }
            else {
                this.editor.setValue(value);
            }
        }
    }
}
class SplashControl {
    constructor(props) {
        this.props = props;
        this.splashEl = null;
        this.state = [];
        this.visible == false;
    }
    initialize() {
        var containerEl = wz.element(this.props.container);
        this.splashEl = document.createElement('div');
        this.splashEl.setAttribute('class', this.props.className);
        containerEl.appendChild(this.splashEl);
        this.show();
    }
    hide() {
        if (this.visible == false) {
            return ;
        }
        this.visible = false;
        var containerEl = wz.element(this.props.container);
        var i, i_items=containerEl.children, i_len=containerEl.children.length, item;
        for (i=0; i<i_len; i++) {
            item = containerEl.children[i];
            if (item != this.splashEl) {
                wz.show(item);
            }
            if (this.state[item]) {
                item.style.display = this.state[item];
            }
        }
        wz.hide(this.splashEl);
    }
    show() {
        if (this.visible) {
            return ;
        }
        this.visible = true;
        var containerEl = wz.element(this.props.container);
        wz.show(this.splashEl);
        var i, i_items=containerEl.children, i_len=containerEl.children.length, item;
        for (i=0; i<i_len; i++) {
            item = containerEl.children[i];
            if (item != this.splashEl) {
                this.state[item] = item.style.display;
                wz.hide(item);
            }
        }
    }
}
var initialSnippets = {
    js: 'function hello(name) { console.log("hello"); }', 
    html: '<html><head></head><body></body></html>', 
    css: 'body { margin:0 }'
};
var initialIttfs = {
    js: 'module\n\tkind react\n\treact Mycomponent', 
    html: 'html\n\thead\n\tbody\n\t\th1 hello world', 
    css: 'css\n\t< body\n\t\tmargin 0'
};
class AppManager {
    constructor(props) {
        this.props = props;
        this.store = null;
        this.timers = {};
    }
    start() {
        this.initStore();
        this.createEditors();
        this.setEvents();
        this.createOptions();
    }
    initStore() {
        this.store = new LocalStorage('wizzify');
        if (!this.store.get('lastSchema')) {
            this.store.set('lastSchema', 'js');
        }
    }
    createOptions() {
        this.selectedSchema = this.store.get('lastSchema');
        wz.value('selectedSchema', this.selectedSchema);
        this.setIttfContentFromStore();
        this.setSnippetContentFromStore();
        wz.change('selectedSchema', () => {
            console.log('onChangeSchema', event.target.value);
            this.selectedSchema = event.target.value;
            this.store.set('lastSchema', this.selectedSchema);
            this.setIttfContentFromStore();
            this.setSnippetContentFromStore();
        });
    }
    setIttfContentFromStore() {
        var content = this.store.get(this.selectedSchema + '_ittf_content', initialIttfs[this.selectedSchema] || this.selectedSchema, true);
        glEventHub.emit('seteditvalue', 'gen-ittf', content);
    }
    setSnippetContentFromStore() {
        var content = this.store.get(this.selectedSchema + '_snippet_content', initialSnippets[this.selectedSchema] || this.selectedSchema, true);
        glEventHub.emit('seteditvalue', 'snippet-source', content);
    }
    createEditors() {
        this.genIttfEditor = new EditorControl({
            key: 'gen-ittf', 
            elementId: 'gen-ittf-editor'
        });
        this.genIttfEditor.initialize();
        this.genResultEditor = new EditorControl({
            key: 'gen-result', 
            elementId: 'gen-result-editor', 
            readOnly: true
        });
        this.genResultEditor.initialize();
        this.snippetSourceEditor = new EditorControl({
            key: 'snippet-source', 
            elementId: 'snippet-source-editor'
        });
        this.snippetSourceEditor.initialize();
        this.snippetResultEditor = new EditorControl({
            key: 'snippet-result', 
            elementId: 'snippet-result-editor', 
            readOnly: true
        });
        this.snippetResultEditor.initialize();
    }
    setEvents() {
        glEventHub.on('editvaluechanged', (key, value) => {
            if (key === 'gen-ittf') {
                if (this.timers['gen']) {
                    clearTimeout(this.timers['gen']);
                }
                this.timers['gen'] = setTimeout(() =>
                    this.generate(value), 2 * 1500);
                this.store.set(this.selectedSchema + '_ittf_content', value);
            }
            else if (key === 'snippet-source') {
                if (this.timers['wizzify']) {
                    clearTimeout(this.timers['wizzify']);
                }
                this.timers['wizzify'] = setTimeout(() =>
                    this.wizzify(value), 2 * 1500);
                this.store.set(this.selectedSchema + '_snippet_content', value);
            }
        });
    }
    generate(value) {
        wz.genFromText(value, {
            schema: this.selectedSchema || 'js'
        }, (err, result) => {
            if (err) {
                glEventHub.emit('seteditvalue', 'gen-result', JSON.stringify(err, null, 2));
            }
            else {
                glEventHub.emit('artifactgenerated', result);
                glEventHub.emit('seteditvalue', 'gen-result', result);
            }
        });
    }
    wizzify(value) {
        wz.wizzify(this.selectedSchema || 'js', value, (err, result) => {
            if (err) {
                glEventHub.emit('seteditvalue', 'snippet-result', JSON.stringify(err, null, 2));
            }
            else {
                glEventHub.emit('artifactwizzified', result);
                glEventHub.emit('seteditvalue', 'snippet-result', result);
            }
        });
    }
}
let glEventHub = new EventEmitter3();
window.glEventHub = glEventHub;
window.path = wz.utils.path;
async function prompt(text) {
    if (typeof text === 'string') {
        return Swal({
                text, 
                input: 'text', 
                useRejections: true
            });
    }
    else {
        if (typeof text === 'object') {
            if (text.input === undefined) {
                text.input = 'text';
            }
            text.useRejections = true;
            return Swal(text);
        }
    }
}
function initHandlers() {
    currentSchema = store.get('lastSchema');
    wz.value('selectedSchema', currentSchema);
    currentEditContent = store.get(currentSchema + '_content', currentSchema, true);
    editor.value(currentEditContent);
    wizzify();
    wz.change('selectedSchema', () => {
        console.log('onChangeSchema', event.target.value);
        currentSchema = event.target.value;
        store.set('lastSchema', currentSchema);
        currentEditContent = store.get(currentSchema + '_content', currentSchema, true);
        editor.value(currentEditContent);
        wizzify();
    });
}
var app = new AppManager({});
app.start();
