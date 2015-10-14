// generator: wizzi-lab-artifatcs/lib/js/module/gen/main.js, utc time: Tue, 13 Oct 2015 13:00:36 GMT
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
(function() {
    var wzui = window.wzui = {};
    var rclass = /[\n\t\r]/g;
    var rnotwhite = (/\S+/g);
    
    wzui.element = function(element) {
        return typeof element === 'string' ? document.getElementById(element) : element;
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
                var i, i_len=classes.length, clazz;
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
            var i, i_len=classes.length, clazz;
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
                if (! (done) && (done = true)) {
                    fn.call(window, (e.type || e));
                }
            },
            poll = function() {
                try {
                    root.doScroll('left');
                } catch (e) {
                    setTimeout(poll, 50);
                    return ;
                }
                init('poll');
            };
        if (doc.readyState == 'complete') {
            fn.call(window, 'lazy');
        }
        else {
            if (! (modern) && root.doScroll) {
                try {
                    top = ! (window.frameElement);
                } catch (e) {
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
})();
/*
    wzuiTabControl class
*/
wzuiTabControl = function(element) {
    this.element = wzui.element(element);
    this.tabs = [];
    this.defaultTab = null;
}
wzuiTabControl.prototype.initialize = function() {
    if (this.tabs.length === 0) {
        return ;
    }
    this.defaultTab = this.defaultTab || this.tabs[0].element;
    var i, i_len=this.tabs.length, tab;
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


wzuiTabControl.createClickHandler = function(tabControl) {
    return function() {
            var i, i_len=tabControl.tabs.length, tab;
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
/*
    wzuiTvDocumentsControl class
*/
wzuiTvDocumentsControl = function(element) {
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
    var i, i_len=this.documents.length, doc;
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


wzuiTvDocumentsControl.createClickHandler = function(tvDocumentsControl) {
    return function() {
            var i, i_len=tvDocumentsControl.documents.length, doc;
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
wzui.contentLoaded(function() {
    var ctx = {
        tabControls: [], 
        currentTabControl: null, 
        documentControls: [], 
        currentDocumentControl: null
    };
    setup (document.documentElement, ctx);
    var i, i_len=ctx.tabControls.length, tabControl;
    for (i=0; i<i_len; i++) {
        tabControl = ctx.tabControls[i];
        tabControl.initialize();
    }
    var i, i_len=ctx.documentControls.length, documentControl;
    for (i=0; i<i_len; i++) {
        documentControl = ctx.documentControls[i];
        documentControl.initialize();
    }
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
    var i, i_len=node.childNodes.length, child;
    for (i=0; i<i_len; i++) {
        child = node.childNodes[i];
        setup(child, ctx);
    }
}
