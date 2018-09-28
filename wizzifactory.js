/*
    artifact generator: C:\my\wizzi\v6\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: c:\my\wizzi\v6\test\wizzi-docs\jobs\ittf\site\site\wizzifactory.js.ittf
    utc time: Fri, 28 Sep 2018 05:43:23 GMT
*/
'use strict';
// generated by v5-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

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
})(function() {
    var wzui = window.wzui = {};
    var rclass = /[\n\t\r]/g;
    var rnotwhite = (/\S+/g);
    wzui.element = function(element) {
        return typeof element === 'string' ? document.querySelector(element) : element;
    };
    wzui.hasClass = function(element, selector) {
        if ((" " + element.className + " ").replace(rclass, " ").indexOf(" " + selector + " ") > -1) {
            return true;
        }
        return false;
    };
    wzui.addClass = function(element, value) {
        var classes, cur, finalValue;
        if (value && typeof value === "string") {
            classes = ( value || "" ).match( rnotwhite ) || [];
            if (!element.className && classes.length === 1) {
                element.className = value;
            }
            else {
                cur = " " + element.className + " ";
                var i, i_items=classes, i_len=classes.length, clazz;
                for (i=0; i<i_len; i++) {
                    clazz = classes[i];
                    if (cur.indexOf( " " + clazz + " " ) < 0) {
                        cur += clazz + " ";
                    }
                }
                finalValue = cur.trim();
                if (element.className !== finalValue) {
                    element.className = finalValue;
                }
            }
        }
    };
    wzui.removeClass = function(element, value) {
        var classes, cur, finalValue;
        if (value && typeof value === "string") {
            classes = ( value || "" ).match( rnotwhite ) || [];
            cur = element.className ? ( " " + element.className + " " ).replace( rclass, " " ) : "";
            var i, i_items=classes, i_len=classes.length, clazz;
            for (i=0; i<i_len; i++) {
                clazz = classes[i];
                while (cur.indexOf( " " + clazz + " " ) >= 0) {
                    cur = cur.replace( " " + clazz + " ", " " );
                }
            }
            finalValue = cur.trim();
            if (element.className !== finalValue) {
                element.className = finalValue;
            }
        }
    };
    wzui.text = function(element, value) {
        if (typeof value === 'undefined') {
            return element.textContent;
        }
        else if (element.textContent !== value) {
            element.textContent = value;
        }
    };
    wzui.click = function(element, handler, useCapture) {
        window.addEvent(wzui.element(element), 'click', handler, useCapture);
    };
    wzui.contentLoaded = function(fn) {
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
                (e.type == 'load' ? window : doc)[rem]((pre + e.type), init, false);
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
                    top = ! (window.frameElement);
                } 
                catch (e) {
                } 
                if (top) {
                    poll();
                }
            }
            doc[add]((pre + 'DOMContentLoaded'), init, false);
            doc[add]((pre + 'readystatechange'), init, false);
            window[add]((pre + 'load'), init, false);
        }
    };
})var wzuiTabControl = (function () {
    function wzuiTabControl(element) {
        _classCallCheck(this, wzuiTabControl);
        this.element = wzui.element(element);
        this.tabs = [];
        this.defaultTab = null;
    }
    wzuiTabControl.prototype.initialize = function() {
        if (this.tabs.length === 0) {
            return ;
        }
        this.defaultTab = this.defaultTab || this.tabs[0].element;
        var i, i_items=this.tabs, i_len=this.tabs.length, tab;
        for (i=0; i<i_len; i++) {
            tab = this.tabs[i];
            if (tab.element === this.defaultTab) {
                tab.page.style.display = 'block';
                wzui.addClass(tab.element, 'wz-ui-selected');
                wzui.removeClass(tab.element, 'wz-ui-unselected');
            }
            else {
                tab.page.style.display = 'none';
                wzui.removeClass(tab.element, 'wz-ui-selected');
                wzui.addClass(tab.element, 'wz-ui-unselected');
            }
        }
    }
    wzuiTabControl.prototype.setDefaultTab = function(element) {
        this.defaultTab = wzui.element(element);
    }
    wzuiTabControl.prototype.addTab = function(element) {
        element = wzui.element(element);
        var pageId = element.getAttribute("data-tab-page");
        console.log('pageId', pageId);
        var pageElement = document.getElementById(pageId);
        console.log('pageElement', pageElement);
        wzui.click(element, wzuiTabControl.createClickHandler(this));
        this.tabs.push({
            element: element, 
            page: pageElement
        });
    }
    return wzuiTabControl;
})();

wzuiTabControl.createClickHandler = function(tabControl) {
    return function() {
            var i, i_items=tabControl.tabs, i_len=tabControl.tabs.length, tab;
            for (i=0; i<i_len; i++) {
                tab = tabControl.tabs[i];
                if (tab.element === this) {
                    tab.page.style.display = 'block';
                    wzui.addClass(tab.element, 'wz-ui-selected');
                    wzui.removeClass(tab.element, 'wz-ui-unselected');
                }
                else {
                    tab.page.style.display = 'none';
                    wzui.removeClass(tab.element, 'wz-ui-selected');
                    wzui.addClass(tab.element, 'wz-ui-unselected');
                }
            }
        };
};
var wzuiTvDocumentsControl = (function () {
    function wzuiTvDocumentsControl(element) {
        _classCallCheck(this, wzuiTvDocumentsControl);
        this.element = wzui.element(element);
        this.documents = [];
        this.defaultDocument = null;
        this.activeDocumentTitleElement = null;
    }
    wzuiTvDocumentsControl.prototype.initialize = function() {
        if (this.documents.length === 0) {
            return ;
        }
        this.defaultDocument = this.defaultDocument || this.documents[0].element;
        var i, i_items=this.documents, i_len=this.documents.length, doc;
        for (i=0; i<i_len; i++) {
            doc = this.documents[i];
            if (doc.element === this.defaultDocument) {
                doc.page.style.display = 'block';
                wzui.addClass(doc.element, 'wz-ui-tv-document-selected');
                if (this.activeDocumentTitleElement) {
                    var docPath = doc.element.getAttribute("data-doc-path");
                    wzui.text(this.activeDocumentTitleElement, docPath);
                }
            }
            else {
                doc.page.style.display = 'none';
                wzui.removeClass(doc.element, 'wz-ui-tv-document-selected');
            }
        }
    }
    wzuiTvDocumentsControl.prototype.setDefaultDocument = function(element) {
        this.defaultDocument = wzui.element(element);
    }
    wzuiTvDocumentsControl.prototype.setActiveDocumentTitleElement = function(element) {
        this.activeDocumentTitleElement = wzui.element(element);
    }
    wzuiTvDocumentsControl.prototype.addDocument = function(element) {
        element = wzui.element(element);
        var pageId = element.getAttribute("data-tab-page");
        console.log('pageId', pageId);
        var pageElement = document.getElementById(pageId);
        console.log('pageElement', pageElement);
        wzui.click(element, wzuiTvDocumentsControl.createClickHandler(this));
        this.documents.push({
            element: element, 
            page: pageElement
        });
    }
    return wzuiTvDocumentsControl;
})();

wzuiTvDocumentsControl.createClickHandler = function(tvDocumentsControl) {
    return function() {
            var i, i_items=tvDocumentsControl.documents, i_len=tvDocumentsControl.documents.length, doc;
            for (i=0; i<i_len; i++) {
                doc = tvDocumentsControl.documents[i];
                if (doc.element === this) {
                    doc.page.style.display = 'block';
                    wzui.addClass(doc.element, 'wz-ui-tv-document-selected');
                    if (tvDocumentsControl.activeDocumentTitleElement) {
                        var docPath = doc.element.getAttribute("data-doc-path");
                        console.log('docPath', docPath);
                        wzui.text(tvDocumentsControl.activeDocumentTitleElement, docPath);
                    }
                }
                else {
                    doc.page.style.display = 'none';
                    wzui.removeClass(doc.element, 'wz-ui-tv-document-selected');
                }
            }
        };
};
function setupClickHandler(ctx) {
    wzui.click(wzui.element('#wrapper'), create_wrapperClickHandler(ctx));
}
function create_wrapperClickHandler(ctx) {
    return function wrapperClickHandler(event) {
            console.log('wrapperClickHandler.target', event.target, event.target.dataset);
            console.log('has class frag-to-link-a', wzui.hasClass(event.target, 'frag-to-link-a'));
            if (wzui.hasClass(event.target, 'frag-to-link-a')) {
                console.log('href', event.target.href);
                ctx.modalManager.pushFragment(event.target.dataset.fragId);
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                if (ctx.modalManager.checkClick(event.target)) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        };
}
function modalSetup(ctx) {
    ctx.fragModal = wzui.element('#frag-modal');
    // log 'ctx.fragModal', ctx.fragModal
    ctx.fragModalClose = wzui.element('#frag-modal .modal-close');
    // log 'ctx.fragModalClose', ctx.fragModalClose
    ctx.fragModalContent = wzui.element('#frag-modal-content');
    ctx.fragModalClose.onclick = function() {
        ctx.fragModal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == ctx.fragModal) {
            ctx.fragModal.style.display = "none";
        }
    };
}
var ModalManager = (function () {
    function ModalManager(ctx) {
        _classCallCheck(this, ModalManager);
        this.ctx = ctx;
        this.currentContent = null;
        this.currentContentOriginalParent = null;
        this.modalStack = [];
    }
    ModalManager.prototype.setup = function() {
        var that = this;
        this.fragModal = wzui.element('#frag-modal');
        // log 'this.fragModal', this.fragModal
        this.fragModalClose = wzui.element('#frag-modal .modal-close');
        // log 'this.fragModalClose', this.fragModalClose
        this.fragModalContent = wzui.element('#frag-modal-content');
        this.fragModalClose.onclick = function() {
            that.popFragment();
        };
        window.onclick = function(event) {
            if (event.target == this.fragModal) {
                that.popFragment();
            }
        };
    }
    ModalManager.prototype.checkClick = function(target) {
        if (target == this.fragModal) {
            // close all
            while (this.modalStack.length > 0) {
                this.popFragment();
            }
            return true;
        }
        else {
            return false;
        }
    }
    ModalManager.prototype.pushFragment = function(fragmentId) {
        this.resetFragment();
        var fragContentOriginalParent = wzui.element('#' + fragmentId);
        console.log('fragContentOriginalParent', fragContentOriginalParent);
        var fragContent = wzui.element('#' + fragmentId + ' div:first-of-type');
        console.log('fragContent', fragContent);
        this.fragModal.style.display = "block";
        this.fragModalContent.appendChild(fragContent);
        this.modalStack.push({
            content: fragContent, 
            contentOriginalParent: fragContentOriginalParent
        });
        this.currentContent = fragContent;
        this.currentContentOriginalParent = fragContentOriginalParent;
    }
    ModalManager.prototype.popFragment = function() {
        this.resetFragment();
        this.modalStack.pop();
        if (this.modalStack.length > 0) {
            var modalContent = this.modalStack[this.modalStack.length-1];
            this.fragModalContent.appendChild(modalContent.content);
            this.currentContent = modalContent.content;
            this.currentContentOriginalParent = modalContent.contentOriginalParent;
        }
        if (this.modalStack.length == 0) {
            this.fragModal.style.display = "none";
        }
    }
    ModalManager.prototype.resetFragment = function() {
        if (this.currentContent != null) {
            this.currentContentOriginalParent.appendChild(this.currentContent);
            this.currentContent = null;
            this.currentContentOriginalParent = null;
        }
    }
    return ModalManager;
})();

wzui.contentLoaded(function() {
    console.log('*** content loaded');
    var ctx = {
        tabControls: [], 
        currentTabControl: null, 
        documentControls: [], 
        currentDocumentControl: null
    };
    setup (document.documentElement, ctx);
    var i, i_items=ctx.tabControls, i_len=ctx.tabControls.length, tabControl;
    for (i=0; i<i_len; i++) {
        tabControl = ctx.tabControls[i];
        tabControl.initialize();
    }
    var i, i_items=ctx.documentControls, i_len=ctx.documentControls.length, documentControl;
    for (i=0; i<i_len; i++) {
        documentControl = ctx.documentControls[i];
        documentControl.initialize();
    }
    ctx.modalManager = new ModalManager();
    ctx.modalManager.setup();
    setupClickHandler(ctx);
});
function setup(node, ctx) {
    if (node.nodeType != 1) {
        return ;
    }
    if (wzui.hasClass(node, 'wz-ui-tabs')) {
        var tabControl = new wzuiTabControl(node);
        ctx.tabControls.push(tabControl);
        ctx.currentTabControl = tabControl;
    }
    else if (wzui.hasClass(node, 'wz-ui-tab')) {
        ctx.currentTabControl.addTab(node);
    }
    else if (wzui.hasClass(node, 'wz-ui-tv-documents')) {
        var documentControl = new wzuiTvDocumentsControl(node);
        var active_document_title_id = node.getAttribute('data-active-document-title-id');
        console.log('active_document_title_id', active_document_title_id);
        documentControl.setActiveDocumentTitleElement(active_document_title_id);
        ctx.documentControls.push(documentControl);
        ctx.currentDocumentControl = documentControl;
    }
    else if (wzui.hasClass(node, 'wz-ui-tv-document')) {
        ctx.currentDocumentControl.addDocument(node);
        if (wzui.hasClass(node, 'wz-ui-tv-document-selected')) {
            ctx.currentDocumentControl.setDefaultDocument(node);
        }
    }
    var i, i_items=node.childNodes, i_len=node.childNodes.length, child;
    for (i=0; i<i_len; i++) {
        child = node.childNodes[i];
        setup(child, ctx);
    }
}
