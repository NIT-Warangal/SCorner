/*! jQuery UI - v1.10.3 - 2013-12-11
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.datepicker.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function (e, t) {
  function i(t, i) {
    var s,
    n,
    r,
    o = t.nodeName.toLowerCase();
    return 'area' === o ? (s = t.parentNode, n = s.name, t.href && n && 'map' === s.nodeName.toLowerCase() ? (r = e('img[usemap=#' + n + ']') [0], !!r && a(r))  : !1)  : (/input|select|textarea|button|object/.test(o) ? !t.disabled : 'a' === o ? t.href || i : i) && a(t)
  }
  function a(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
      return 'hidden' === e.css(this, 'visibility')
    }).length
  }
  var s = 0,
  n = /^ui-id-\d+$/;
  e.ui = e.ui || {
  },
  e.extend(e.ui, {
    version: '1.10.3',
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }),
  e.fn.extend({
    focus: function (t) {
      return function (i, a) {
        return 'number' == typeof i ? this.each(function () {
          var t = this;
          setTimeout(function () {
            e(t).focus(),
            a && a.call(t)
          }, i)
        })  : t.apply(this, arguments)
      }
    }(e.fn.focus),
    scrollParent: function () {
      var t;
      return t = e.ui.ie && /(static|relative)/.test(this.css('position')) || /absolute/.test(this.css('position')) ? this.parents().filter(function () {
        return /(relative|absolute|fixed)/.test(e.css(this, 'position')) && /(auto|scroll)/.test(e.css(this, 'overflow') + e.css(this, 'overflow-y') + e.css(this, 'overflow-x'))
      }).eq(0)  : this.parents().filter(function () {
        return /(auto|scroll)/.test(e.css(this, 'overflow') + e.css(this, 'overflow-y') + e.css(this, 'overflow-x'))
      }).eq(0),
      /fixed/.test(this.css('position')) || !t.length ? e(document)  : t
    },
    zIndex: function (i) {
      if (i !== t) return this.css('zIndex', i);
      if (this.length) for (var a, s, n = e(this[0]); n.length && n[0] !== document; ) {
        if (a = n.css('position'), ('absolute' === a || 'relative' === a || 'fixed' === a) && (s = parseInt(n.css('zIndex'), 10), !isNaN(s) && 0 !== s)) return s;
        n = n.parent()
      }
      return 0
    },
    uniqueId: function () {
      return this.each(function () {
        this.id || (this.id = 'ui-id-' + ++s)
      })
    },
    removeUniqueId: function () {
      return this.each(function () {
        n.test(this.id) && e(this).removeAttr('id')
      })
    }
  }),
  e.extend(e.expr[':'], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
      return function (i) {
        return !!e.data(i, t)
      }
    })  : function (t, i, a) {
      return !!e.data(t, a[3])
    },
    focusable: function (t) {
      return i(t, !isNaN(e.attr(t, 'tabindex')))
    },
    tabbable: function (t) {
      var a = e.attr(t, 'tabindex'),
      s = isNaN(a);
      return (s || a >= 0) && i(t, !s)
    }
  }),
  e('<a>').outerWidth(1).jquery || e.each(['Width',
  'Height'], function (i, a) {
    function s(t, i, a, s) {
      return e.each(n, function () {
        i -= parseFloat(e.css(t, 'padding' + this)) || 0,
        a && (i -= parseFloat(e.css(t, 'border' + this + 'Width')) || 0),
        s && (i -= parseFloat(e.css(t, 'margin' + this)) || 0)
      }),
      i
    }
    var n = 'Width' === a ? [
      'Left',
      'Right'
    ] : [
      'Top',
      'Bottom'
    ],
    r = a.toLowerCase(),
    o = {
      innerWidth: e.fn.innerWidth,
      innerHeight: e.fn.innerHeight,
      outerWidth: e.fn.outerWidth,
      outerHeight: e.fn.outerHeight
    };
    e.fn['inner' + a] = function (i) {
      return i === t ? o['inner' + a].call(this)  : this.each(function () {
        e(this).css(r, s(this, i) + 'px')
      })
    },
    e.fn['outer' + a] = function (t, i) {
      return 'number' != typeof t ? o['outer' + a].call(this, t)  : this.each(function () {
        e(this).css(r, s(this, t, !0, i) + 'px')
      })
    }
  }),
  e.fn.addBack || (e.fn.addBack = function (e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
  }),
  e('<a>').data('a-b', 'a').removeData('a-b').data('a-b') && (e.fn.removeData = function (t) {
    return function (i) {
      return arguments.length ? t.call(this, e.camelCase(i))  : t.call(this)
    }
  }(e.fn.removeData)),
  e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
  e.support.selectstart = 'onselectstart' in document.createElement('div'),
  e.fn.extend({
    disableSelection: function () {
      return this.bind((e.support.selectstart ? 'selectstart' : 'mousedown') + '.ui-disableSelection', function (e) {
        e.preventDefault()
      })
    },
    enableSelection: function () {
      return this.unbind('.ui-disableSelection')
    }
  }),
  e.extend(e.ui, {
    plugin: {
      add: function (t, i, a) {
        var s,
        n = e.ui[t].prototype;
        for (s in a) n.plugins[s] = n.plugins[s] || [],
        n.plugins[s].push([i,
        a[s]])
      },
      call: function (e, t, i) {
        var a,
        s = e.plugins[t];
        if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (a = 0; s.length > a; a++) e.options[s[a][0]] && s[a][1].apply(e.element, i)
      }
    },
    hasScroll: function (t, i) {
      if ('hidden' === e(t).css('overflow')) return !1;
      var a = i && 'left' === i ? 'scrollLeft' : 'scrollTop',
      s = !1;
      return t[a] > 0 ? !0 : (t[a] = 1, s = t[a] > 0, t[a] = 0, s)
    }
  })
}) (jQuery);
(function (e, t) {
  var i = 0,
  s = Array.prototype.slice,
  a = e.cleanData;
  e.cleanData = function (t) {
    for (var i, s = 0; null != (i = t[s]); s++) try {
      e(i).triggerHandler('remove')
    } catch (n) {
    }
    a(t)
  },
  e.widget = function (i, s, a) {
    var n,
    r,
    o,
    h,
    l = {
    },
    u = i.split('.') [0];
    i = i.split('.') [1],
    n = u + '-' + i,
    a || (a = s, s = e.Widget),
    e.expr[':'][n.toLowerCase()] = function (t) {
      return !!e.data(t, n)
    },
    e[u] = e[u] || {
    },
    r = e[u][i],
    o = e[u][i] = function (e, i) {
      return this._createWidget ? (arguments.length && this._createWidget(e, i), t)  : new o(e, i)
    },
    e.extend(o, r, {
      version: a.version,
      _proto: e.extend({
      }, a),
      _childConstructors: [
      ]
    }),
    h = new s,
    h.options = e.widget.extend({
    }, h.options),
    e.each(a, function (i, a) {
      return e.isFunction(a) ? (l[i] = function () {
        var e = function () {
          return s.prototype[i].apply(this, arguments)
        },
        t = function (e) {
          return s.prototype[i].apply(this, e)
        };
        return function () {
          var i,
          s = this._super,
          n = this._superApply;
          return this._super = e,
          this._superApply = t,
          i = a.apply(this, arguments),
          this._super = s,
          this._superApply = n,
          i
        }
      }(), t)  : (l[i] = a, t)
    }),
    o.prototype = e.widget.extend(h, {
      widgetEventPrefix: r ? h.widgetEventPrefix : i
    }, l, {
      constructor: o,
      namespace: u,
      widgetName: i,
      widgetFullName: n
    }),
    r ? (e.each(r._childConstructors, function (t, i) {
      var s = i.prototype;
      e.widget(s.namespace + '.' + s.widgetName, o, i._proto)
    }), delete r._childConstructors)  : s._childConstructors.push(o),
    e.widget.bridge(i, o)
  },
  e.widget.extend = function (i) {
    for (var a, n, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++) for (a in r[o]) n = r[o][a],
    r[o].hasOwnProperty(a) && n !== t && (i[a] = e.isPlainObject(n) ? e.isPlainObject(i[a]) ? e.widget.extend({
    }, i[a], n)  : e.widget.extend({
    }, n)  : n);
    return i
  },
  e.widget.bridge = function (i, a) {
    var n = a.prototype.widgetFullName || i;
    e.fn[i] = function (r) {
      var o = 'string' == typeof r,
      h = s.call(arguments, 1),
      l = this;
      return r = !o && h.length ? e.widget.extend.apply(null, [
        r
      ].concat(h))  : r,
      o ? this.each(function () {
        var s,
        a = e.data(this, n);
        return a ? e.isFunction(a[r]) && '_' !== r.charAt(0) ? (s = a[r].apply(a, h), s !== a && s !== t ? (l = s && s.jquery ? l.pushStack(s.get())  : s, !1)  : t)  : e.error('no such method \'' + r + '\' for ' + i + ' widget instance')  : e.error('cannot call methods on ' + i + ' prior to initialization; ' + 'attempted to call method \'' + r + '\'')
      })  : this.each(function () {
        var t = e.data(this, n);
        t ? t.option(r || {
        })._init()  : e.data(this, n, new a(r, this))
      }),
      l
    }
  },
  e.Widget = function () {
  },
  e.Widget._childConstructors = [
  ],
  e.Widget.prototype = {
    widgetName: 'widget',
    widgetEventPrefix: '',
    defaultElement: '<div>',
    options: {
      disabled: !1,
      create: null
    },
    _createWidget: function (t, s) {
      s = e(s || this.defaultElement || this) [0],
      this.element = e(s),
      this.uuid = i++,
      this.eventNamespace = '.' + this.widgetName + this.uuid,
      this.options = e.widget.extend({
      }, this.options, this._getCreateOptions(), t),
      this.bindings = e(),
      this.hoverable = e(),
      this.focusable = e(),
      s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function (e) {
          e.target === s && this.destroy()
        }
      }), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
      this._create(),
      this._trigger('create', null, this._getCreateEventData()),
      this._init()
    },
    _getCreateOptions: e.noop,
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function () {
      this._destroy(),
      this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
      this.widget().unbind(this.eventNamespace).removeAttr('aria-disabled').removeClass(this.widgetFullName + '-disabled ' + 'ui-state-disabled'),
      this.bindings.unbind(this.eventNamespace),
      this.hoverable.removeClass('ui-state-hover'),
      this.focusable.removeClass('ui-state-focus')
    },
    _destroy: e.noop,
    widget: function () {
      return this.element
    },
    option: function (i, s) {
      var a,
      n,
      r,
      o = i;
      if (0 === arguments.length) return e.widget.extend({
      }, this.options);
      if ('string' == typeof i) if (o = {
      }, a = i.split('.'), i = a.shift(), a.length) {
        for (n = o[i] = e.widget.extend({
        }, this.options[i]), r = 0; a.length - 1 > r; r++) n[a[r]] = n[a[r]] || {
        },
        n = n[a[r]];
        if (i = a.pop(), s === t) return n[i] === t ? null : n[i];
        n[i] = s
      } else {
        if (s === t) return this.options[i] === t ? null : this.options[i];
        o[i] = s
      }
      return this._setOptions(o),
      this
    },
    _setOptions: function (e) {
      var t;
      for (t in e) this._setOption(t, e[t]);
      return this
    },
    _setOption: function (e, t) {
      return this.options[e] = t,
      'disabled' === e && (this.widget().toggleClass(this.widgetFullName + '-disabled ui-state-disabled', !!t).attr('aria-disabled', t), this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus')),
      this
    },
    enable: function () {
      return this._setOption('disabled', !1)
    },
    disable: function () {
      return this._setOption('disabled', !0)
    },
    _on: function (i, s, a) {
      var n,
      r = this;
      'boolean' != typeof i && (a = s, s = i, i = !1),
      a ? (s = n = e(s), this.bindings = this.bindings.add(s))  : (a = s, s = this.element, n = this.widget()),
      e.each(a, function (a, o) {
        function h() {
          return i || r.options.disabled !== !0 && !e(this).hasClass('ui-state-disabled') ? ('string' == typeof o ? r[o] : o).apply(r, arguments)  : t
        }
        'string' != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
        var l = a.match(/^(\w+)\s*(.*)$/),
        u = l[1] + r.eventNamespace,
        c = l[2];
        c ? n.delegate(c, u, h)  : s.bind(u, h)
      })
    },
    _off: function (e, t) {
      t = (t || '').split(' ').join(this.eventNamespace + ' ') + this.eventNamespace,
      e.unbind(t).undelegate(t)
    },
    _delay: function (e, t) {
      function i() {
        return ('string' == typeof e ? s[e] : e).apply(s, arguments)
      }
      var s = this;
      return setTimeout(i, t || 0)
    },
    _hoverable: function (t) {
      this.hoverable = this.hoverable.add(t),
      this._on(t, {
        mouseenter: function (t) {
          e(t.currentTarget).addClass('ui-state-hover')
        },
        mouseleave: function (t) {
          e(t.currentTarget).removeClass('ui-state-hover')
        }
      })
    },
    _focusable: function (t) {
      this.focusable = this.focusable.add(t),
      this._on(t, {
        focusin: function (t) {
          e(t.currentTarget).addClass('ui-state-focus')
        },
        focusout: function (t) {
          e(t.currentTarget).removeClass('ui-state-focus')
        }
      })
    },
    _trigger: function (t, i, s) {
      var a,
      n,
      r = this.options[t];
      if (s = s || {
      }, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], n = i.originalEvent) for (a in n) a in i || (i[a] = n[a]);
      return this.element.trigger(i, s),
      !(e.isFunction(r) && r.apply(this.element[0], [
        i
      ].concat(s)) === !1 || i.isDefaultPrevented())
    }
  },
  e.each({
    show: 'fadeIn',
    hide: 'fadeOut'
  }, function (t, i) {
    e.Widget.prototype['_' + t] = function (s, a, n) {
      'string' == typeof a && (a = {
        effect: a
      });
      var r,
      o = a ? a === !0 || 'number' == typeof a ? i : a.effect || i : t;
      a = a || {
      },
      'number' == typeof a && (a = {
        duration: a
      }),
      r = !e.isEmptyObject(a),
      a.complete = n,
      a.delay && s.delay(a.delay),
      r && e.effects && e.effects.effect[o] ? s[t](a)  : o !== t && s[o] ? s[o](a.duration, a.easing, n)  : s.queue(function (i) {
        e(this) [t](),
        n && n.call(s[0]),
        i()
      })
    }
  })
}) (jQuery);
(function (e) {
  var t = !1;
  e(document).mouseup(function () {
    t = !1
  }),
  e.widget('ui.mouse', {
    version: '1.10.3',
    options: {
      cancel: 'input,textarea,button,select,option',
      distance: 1,
      delay: 0
    },
    _mouseInit: function () {
      var t = this;
      this.element.bind('mousedown.' + this.widgetName, function (e) {
        return t._mouseDown(e)
      }).bind('click.' + this.widgetName, function (i) {
        return !0 === e.data(i.target, t.widgetName + '.preventClickEvent') ? (e.removeData(i.target, t.widgetName + '.preventClickEvent'), i.stopImmediatePropagation(), !1)  : undefined
      }),
      this.started = !1
    },
    _mouseDestroy: function () {
      this.element.unbind('.' + this.widgetName),
      this._mouseMoveDelegate && e(document).unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate).unbind('mouseup.' + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function (i) {
      if (!t) {
        this._mouseStarted && this._mouseUp(i),
        this._mouseDownEvent = i;
        var s = this,
        a = 1 === i.which,
        n = 'string' == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
        return a && !n && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          s.mouseDelayMet = !0
        }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0)  : (!0 === e.data(i.target, this.widgetName + '.preventClickEvent') && e.removeData(i.target, this.widgetName + '.preventClickEvent'), this._mouseMoveDelegate = function (e) {
          return s._mouseMove(e)
        }, this._mouseUpDelegate = function (e) {
          return s._mouseUp(e)
        }, e(document).bind('mousemove.' + this.widgetName, this._mouseMoveDelegate).bind('mouseup.' + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0))  : !0
      }
    },
    _mouseMove: function (t) {
      return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t)  : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault())  : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t)  : this._mouseUp(t)), !this._mouseStarted)
    },
    _mouseUp: function (t) {
      return e(document).unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate).unbind('mouseup.' + this.widgetName, this._mouseUpDelegate),
      this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + '.preventClickEvent', !0), this._mouseStop(t)),
      !1
    },
    _mouseDistanceMet: function (e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function () {
      return this.mouseDelayMet
    },
    _mouseStart: function () {
    },
    _mouseDrag: function () {
    },
    _mouseStop: function () {
    },
    _mouseCapture: function () {
      return !0
    }
  })
}) (jQuery);
(function (e, t) {
  function i(e, t, i) {
    return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1),
    parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
  }
  function s(t, i) {
    return parseInt(e.css(t, i), 10) || 0
  }
  function a(t) {
    var i = t[0];
    return 9 === i.nodeType ? {
      width: t.width(),
      height: t.height(),
      offset: {
        top: 0,
        left: 0
      }
    }
     : e.isWindow(i) ? {
      width: t.width(),
      height: t.height(),
      offset: {
        top: t.scrollTop(),
        left: t.scrollLeft()
      }
    }
     : i.preventDefault ? {
      width: 0,
      height: 0,
      offset: {
        top: i.pageY,
        left: i.pageX
      }
    }
     : {
      width: t.outerWidth(),
      height: t.outerHeight(),
      offset: t.offset()
    }
  }
  e.ui = e.ui || {
  };
  var n,
  r = Math.max,
  o = Math.abs,
  h = Math.round,
  l = /left|center|right/,
  u = /top|center|bottom/,
  c = /[\+\-]\d+(\.[\d]+)?%?/,
  d = /^\w+/,
  p = /%$/,
  f = e.fn.position;
  e.position = {
    scrollbarWidth: function () {
      if (n !== t) return n;
      var i,
      s,
      a = e('<div style=\'display:block;width:50px;height:50px;overflow:hidden;\'><div style=\'height:100px;width:auto;\'></div></div>'),
      r = a.children() [0];
      return e('body').append(a),
      i = r.offsetWidth,
      a.css('overflow', 'scroll'),
      s = r.offsetWidth,
      i === s && (s = a[0].clientWidth),
      a.remove(),
      n = i - s
    },
    getScrollInfo: function (t) {
      var i = t.isWindow ? '' : t.element.css('overflow-x'),
      s = t.isWindow ? '' : t.element.css('overflow-y'),
      a = 'scroll' === i || 'auto' === i && t.width < t.element[0].scrollWidth,
      n = 'scroll' === s || 'auto' === s && t.height < t.element[0].scrollHeight;
      return {
        width: n ? e.position.scrollbarWidth()  : 0,
        height: a ? e.position.scrollbarWidth()  : 0
      }
    },
    getWithinInfo: function (t) {
      var i = e(t || window),
      s = e.isWindow(i[0]);
      return {
        element: i,
        isWindow: s,
        offset: i.offset() || {
          left: 0,
          top: 0
        },
        scrollLeft: i.scrollLeft(),
        scrollTop: i.scrollTop(),
        width: s ? i.width()  : i.outerWidth(),
        height: s ? i.height()  : i.outerHeight()
      }
    }
  },
  e.fn.position = function (t) {
    if (!t || !t.of) return f.apply(this, arguments);
    t = e.extend({
    }, t);
    var n,
    p,
    m,
    g,
    v,
    y,
    b = e(t.of),
    _ = e.position.getWithinInfo(t.within),
    x = e.position.getScrollInfo(_),
    k = (t.collision || 'flip').split(' '),
    w = {
    };
    return y = a(b),
    b[0].preventDefault && (t.at = 'left top'),
    p = y.width,
    m = y.height,
    g = y.offset,
    v = e.extend({
    }, g),
    e.each(['my',
    'at'], function () {
      var e,
      i,
      s = (t[this] || '').split(' ');
      1 === s.length && (s = l.test(s[0]) ? s.concat(['center'])  : u.test(s[0]) ? [
        'center'
      ].concat(s)  : [
        'center',
        'center'
      ]),
      s[0] = l.test(s[0]) ? s[0] : 'center',
      s[1] = u.test(s[1]) ? s[1] : 'center',
      e = c.exec(s[0]),
      i = c.exec(s[1]),
      w[this] = [
        e ? e[0] : 0,
        i ? i[0] : 0
      ],
      t[this] = [
        d.exec(s[0]) [0],
        d.exec(s[1]) [0]
      ]
    }),
    1 === k.length && (k[1] = k[0]),
    'right' === t.at[0] ? v.left += p : 'center' === t.at[0] && (v.left += p / 2),
    'bottom' === t.at[1] ? v.top += m : 'center' === t.at[1] && (v.top += m / 2),
    n = i(w.at, p, m),
    v.left += n[0],
    v.top += n[1],
    this.each(function () {
      var a,
      l,
      u = e(this),
      c = u.outerWidth(),
      d = u.outerHeight(),
      f = s(this, 'marginLeft'),
      y = s(this, 'marginTop'),
      D = c + f + s(this, 'marginRight') + x.width,
      T = d + y + s(this, 'marginBottom') + x.height,
      M = e.extend({
      }, v),
      S = i(w.my, u.outerWidth(), u.outerHeight());
      'right' === t.my[0] ? M.left -= c : 'center' === t.my[0] && (M.left -= c / 2),
      'bottom' === t.my[1] ? M.top -= d : 'center' === t.my[1] && (M.top -= d / 2),
      M.left += S[0],
      M.top += S[1],
      e.support.offsetFractions || (M.left = h(M.left), M.top = h(M.top)),
      a = {
        marginLeft: f,
        marginTop: y
      },
      e.each(['left',
      'top'], function (i, s) {
        e.ui.position[k[i]] && e.ui.position[k[i]][s](M, {
          targetWidth: p,
          targetHeight: m,
          elemWidth: c,
          elemHeight: d,
          collisionPosition: a,
          collisionWidth: D,
          collisionHeight: T,
          offset: [
            n[0] + S[0],
            n[1] + S[1]
          ],
          my: t.my,
          at: t.at,
          within: _,
          elem: u
        })
      }),
      t.using && (l = function (e) {
        var i = g.left - M.left,
        s = i + p - c,
        a = g.top - M.top,
        n = a + m - d,
        h = {
          target: {
            element: b,
            left: g.left,
            top: g.top,
            width: p,
            height: m
          },
          element: {
            element: u,
            left: M.left,
            top: M.top,
            width: c,
            height: d
          },
          horizontal: 0 > s ? 'left' : i > 0 ? 'right' : 'center',
          vertical: 0 > n ? 'top' : a > 0 ? 'bottom' : 'middle'
        };
        c > p && p > o(i + s) && (h.horizontal = 'center'),
        d > m && m > o(a + n) && (h.vertical = 'middle'),
        h.important = r(o(i), o(s)) > r(o(a), o(n)) ? 'horizontal' : 'vertical',
        t.using.call(this, e, h)
      }),
      u.offset(e.extend(M, {
        using: l
      }))
    })
  },
  e.ui.position = {
    fit: {
      left: function (e, t) {
        var i,
        s = t.within,
        a = s.isWindow ? s.scrollLeft : s.offset.left,
        n = s.width,
        o = e.left - t.collisionPosition.marginLeft,
        h = a - o,
        l = o + t.collisionWidth - n - a;
        t.collisionWidth > n ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - n - a, e.left += h - i)  : e.left = l > 0 && 0 >= h ? a : h > l ? a + n - t.collisionWidth : a : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = r(e.left - o, e.left)
      },
      top: function (e, t) {
        var i,
        s = t.within,
        a = s.isWindow ? s.scrollTop : s.offset.top,
        n = t.within.height,
        o = e.top - t.collisionPosition.marginTop,
        h = a - o,
        l = o + t.collisionHeight - n - a;
        t.collisionHeight > n ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - n - a, e.top += h - i)  : e.top = l > 0 && 0 >= h ? a : h > l ? a + n - t.collisionHeight : a : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = r(e.top - o, e.top)
      }
    },
    flip: {
      left: function (e, t) {
        var i,
        s,
        a = t.within,
        n = a.offset.left + a.scrollLeft,
        r = a.width,
        h = a.isWindow ? a.scrollLeft : a.offset.left,
        l = e.left - t.collisionPosition.marginLeft,
        u = l - h,
        c = l + t.collisionWidth - r - h,
        d = 'left' === t.my[0] ? - t.elemWidth : 'right' === t.my[0] ? t.elemWidth : 0,
        p = 'left' === t.at[0] ? t.targetWidth : 'right' === t.at[0] ? - t.targetWidth : 0,
        f = - 2 * t.offset[0];
        0 > u ? (i = e.left + d + p + f + t.collisionWidth - r - n, (0 > i || o(u) > i) && (e.left += d + p + f))  : c > 0 && (s = e.left - t.collisionPosition.marginLeft + d + p + f - h, (s > 0 || c > o(s)) && (e.left += d + p + f))
      },
      top: function (e, t) {
        var i,
        s,
        a = t.within,
        n = a.offset.top + a.scrollTop,
        r = a.height,
        h = a.isWindow ? a.scrollTop : a.offset.top,
        l = e.top - t.collisionPosition.marginTop,
        u = l - h,
        c = l + t.collisionHeight - r - h,
        d = 'top' === t.my[1],
        p = d ? - t.elemHeight : 'bottom' === t.my[1] ? t.elemHeight : 0,
        f = 'top' === t.at[1] ? t.targetHeight : 'bottom' === t.at[1] ? - t.targetHeight : 0,
        m = - 2 * t.offset[1];
        0 > u ? (s = e.top + p + f + m + t.collisionHeight - r - n, e.top + p + f + m > u && (0 > s || o(u) > s) && (e.top += p + f + m))  : c > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, e.top + p + f + m > c && (i > 0 || c > o(i)) && (e.top += p + f + m))
      }
    },
    flipfit: {
      left: function () {
        e.ui.position.flip.left.apply(this, arguments),
        e.ui.position.fit.left.apply(this, arguments)
      },
      top: function () {
        e.ui.position.flip.top.apply(this, arguments),
        e.ui.position.fit.top.apply(this, arguments)
      }
    }
  },
  function () {
    var t,
    i,
    s,
    a,
    n,
    r = document.getElementsByTagName('body') [0],
    o = document.createElement('div');
    t = document.createElement(r ? 'div' : 'body'),
    s = {
      visibility: 'hidden',
      width: 0,
      height: 0,
      border: 0,
      margin: 0,
      background: 'none'
    },
    r && e.extend(s, {
      position: 'absolute',
      left: '-1000px',
      top: '-1000px'
    });
    for (n in s) t.style[n] = s[n];
    t.appendChild(o),
    i = r || document.documentElement,
    i.insertBefore(t, i.firstChild),
    o.style.cssText = 'position: absolute; left: 10.7432222px;',
    a = e(o).offset().left,
    e.support.offsetFractions = a > 10 && 11 > a,
    t.innerHTML = '',
    i.removeChild(t)
  }()
}) (jQuery);
(function (e) {
  e.widget('ui.draggable', e.ui.mouse, {
    version: '1.10.3',
    widgetEventPrefix: 'drag',
    options: {
      addClasses: !0,
      appendTo: 'parent',
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: 'auto',
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: 'original',
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: 'default',
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: 'both',
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function () {
      'original' !== this.options.helper || /^(?:r|a|f)/.test(this.element.css('position')) || (this.element[0].style.position = 'relative'),
      this.options.addClasses && this.element.addClass('ui-draggable'),
      this.options.disabled && this.element.addClass('ui-draggable-disabled'),
      this._mouseInit()
    },
    _destroy: function () {
      this.element.removeClass('ui-draggable ui-draggable-dragging ui-draggable-disabled'),
      this._mouseDestroy()
    },
    _mouseCapture: function (t) {
      var i = this.options;
      return this.helper || i.disabled || e(t.target).closest('.ui-resizable-handle').length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(i.iframeFix === !0 ? 'iframe' : i.iframeFix).each(function () {
        e('<div class=\'ui-draggable-iframeFix\' style=\'background: #fff;\'></div>').css({
          width: this.offsetWidth + 'px',
          height: this.offsetHeight + 'px',
          position: 'absolute',
          opacity: '0.001',
          zIndex: 1000
        }).css(e(this).offset()).appendTo('body')
      }), !0)  : !1)
    },
    _mouseStart: function (t) {
      var i = this.options;
      return this.helper = this._createHelper(t),
      this.helper.addClass('ui-draggable-dragging'),
      this._cacheHelperProportions(),
      e.ui.ddmanager && (e.ui.ddmanager.current = this),
      this._cacheMargins(),
      this.cssPosition = this.helper.css('position'),
      this.scrollParent = this.helper.scrollParent(),
      this.offsetParent = this.helper.offsetParent(),
      this.offsetParentCssPosition = this.offsetParent.css('position'),
      this.offset = this.positionAbs = this.element.offset(),
      this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      },
      this.offset.scroll = !1,
      e.extend(this.offset, {
        click: {
          left: t.pageX - this.offset.left,
          top: t.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }),
      this.originalPosition = this.position = this._generatePosition(t),
      this.originalPageX = t.pageX,
      this.originalPageY = t.pageY,
      i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
      this._setContainment(),
      this._trigger('start', t) === !1 ? (this._clear(), !1)  : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
    },
    _mouseDrag: function (t, i) {
      if ('fixed' === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo('absolute'), !i) {
        var a = this._uiHash();
        if (this._trigger('drag', t, a) === !1) return this._mouseUp({
        }),
        !1;
        this.position = a.position
      }
      return this.options.axis && 'y' === this.options.axis || (this.helper[0].style.left = this.position.left + 'px'),
      this.options.axis && 'x' === this.options.axis || (this.helper[0].style.top = this.position.top + 'px'),
      e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
      !1
    },
    _mouseStop: function (t) {
      var i = this,
      a = !1;
      return e.ui.ddmanager && !this.options.dropBehaviour && (a = e.ui.ddmanager.drop(this, t)),
      this.dropped && (a = this.dropped, this.dropped = !1),
      'original' !== this.options.helper || e.contains(this.element[0].ownerDocument, this.element[0]) ? ('invalid' === this.options.revert && !a || 'valid' === this.options.revert && a || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, a) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        i._trigger('stop', t) !== !1 && i._clear()
      })  : this._trigger('stop', t) !== !1 && this._clear(), !1)  : !1
    },
    _mouseUp: function (t) {
      return e('div.ui-draggable-iframeFix').each(function () {
        this.parentNode.removeChild(this)
      }),
      e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
      e.ui.mouse.prototype._mouseUp.call(this, t)
    },
    cancel: function () {
      return this.helper.is('.ui-draggable-dragging') ? this._mouseUp({
      })  : this._clear(),
      this
    },
    _getHandle: function (t) {
      return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
    },
    _createHelper: function (t) {
      var i = this.options,
      a = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [
        t
      ]))  : 'clone' === i.helper ? this.element.clone().removeAttr('id')  : this.element;
      return a.parents('body').length || a.appendTo('parent' === i.appendTo ? this.element[0].parentNode : i.appendTo),
      a[0] === this.element[0] || /(fixed|absolute)/.test(a.css('position')) || a.css('position', 'absolute'),
      a
    },
    _adjustOffsetFromHelper: function (t) {
      'string' == typeof t && (t = t.split(' ')),
      e.isArray(t) && (t = {
        left: + t[0],
        top: + t[1] || 0
      }),
      'left' in t && (this.offset.click.left = t.left + this.margins.left),
      'right' in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
      'top' in t && (this.offset.click.top = t.top + this.margins.top),
      'bottom' in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
    },
    _getParentOffset: function () {
      var t = this.offsetParent.offset();
      return 'absolute' === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
      (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && 'html' === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
        top: 0,
        left: 0
      }),
      {
        top: t.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
      }
    },
    _getRelativeOffset: function () {
      if ('relative' === this.cssPosition) {
        var e = this.element.position();
        return {
          top: e.top - (parseInt(this.helper.css('top'), 10) || 0) + this.scrollParent.scrollTop(),
          left: e.left - (parseInt(this.helper.css('left'), 10) || 0) + this.scrollParent.scrollLeft()
        }
      }
      return {
        top: 0,
        left: 0
      }
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css('marginLeft'), 10) || 0,
        top: parseInt(this.element.css('marginTop'), 10) || 0,
        right: parseInt(this.element.css('marginRight'), 10) || 0,
        bottom: parseInt(this.element.css('marginBottom'), 10) || 0
      }
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function () {
      var t,
      i,
      a,
      s = this.options;
      return s.containment ? 'window' === s.containment ? (this.containment = [
        e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
        e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
        e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left,
        e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
      ], undefined)  : 'document' === s.containment ? (this.containment = [
        0,
        0,
        e(document).width() - this.helperProportions.width - this.margins.left,
        (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
      ], undefined)  : s.containment.constructor === Array ? (this.containment = s.containment, undefined)  : ('parent' === s.containment && (s.containment = this.helper[0].parentNode), i = e(s.containment), a = i[0], a && (t = 'hidden' !== i.css('overflow'), this.containment = [
        (parseInt(i.css('borderLeftWidth'), 10) || 0) + (parseInt(i.css('paddingLeft'), 10) || 0),
        (parseInt(i.css('borderTopWidth'), 10) || 0) + (parseInt(i.css('paddingTop'), 10) || 0),
        (t ? Math.max(a.scrollWidth, a.offsetWidth)  : a.offsetWidth) - (parseInt(i.css('borderRightWidth'), 10) || 0) - (parseInt(i.css('paddingRight'), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right,
        (t ? Math.max(a.scrollHeight, a.offsetHeight)  : a.offsetHeight) - (parseInt(i.css('borderBottomWidth'), 10) || 0) - (parseInt(i.css('paddingBottom'), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom
      ], this.relative_container = i), undefined)  : (this.containment = null, undefined)
    },
    _convertPositionTo: function (t, i) {
      i || (i = this.position);
      var a = 'absolute' === t ? 1 : - 1,
      s = 'absolute' !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
      return this.offset.scroll || (this.offset.scroll = {
        top: s.scrollTop(),
        left: s.scrollLeft()
      }),
      {
        top: i.top + this.offset.relative.top * a + this.offset.parent.top * a - ('fixed' === this.cssPosition ? - this.scrollParent.scrollTop()  : this.offset.scroll.top) * a,
        left: i.left + this.offset.relative.left * a + this.offset.parent.left * a - ('fixed' === this.cssPosition ? - this.scrollParent.scrollLeft()  : this.offset.scroll.left) * a
      }
    },
    _generatePosition: function (t) {
      var i,
      a,
      s,
      n,
      r = this.options,
      o = 'absolute' !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
      l = t.pageX,
      h = t.pageY;
      return this.offset.scroll || (this.offset.scroll = {
        top: o.scrollTop(),
        left: o.scrollLeft()
      }),
      this.originalPosition && (this.containment && (this.relative_container ? (a = this.relative_container.offset(), i = [
        this.containment[0] + a.left,
        this.containment[1] + a.top,
        this.containment[2] + a.left,
        this.containment[3] + a.top
      ])  : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, n = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? n - this.offset.click.left >= i[0] || n - this.offset.click.left > i[2] ? n : n - this.offset.click.left >= i[0] ? n - r.grid[0] : n + r.grid[0] : n)),
      {
        top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ('fixed' === this.cssPosition ? - this.scrollParent.scrollTop()  : this.offset.scroll.top),
        left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ('fixed' === this.cssPosition ? - this.scrollParent.scrollLeft()  : this.offset.scroll.left)
      }
    },
    _clear: function () {
      this.helper.removeClass('ui-draggable-dragging'),
      this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
      this.helper = null,
      this.cancelHelperRemoval = !1
    },
    _trigger: function (t, i, a) {
      return a = a || this._uiHash(),
      e.ui.plugin.call(this, t, [
        i,
        a
      ]),
      'drag' === t && (this.positionAbs = this._convertPositionTo('absolute')),
      e.Widget.prototype._trigger.call(this, t, i, a)
    },
    plugins: {
    },
    _uiHash: function () {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      }
    }
  }),
  e.ui.plugin.add('draggable', 'connectToSortable', {
    start: function (t, i) {
      var a = e(this).data('ui-draggable'),
      s = a.options,
      n = e.extend({
      }, i, {
        item: a.element
      });
      a.sortables = [
      ],
      e(s.connectToSortable).each(function () {
        var i = e.data(this, 'ui-sortable');
        i && !i.options.disabled && (a.sortables.push({
          instance: i,
          shouldRevert: i.options.revert
        }), i.refreshPositions(), i._trigger('activate', t, n))
      })
    },
    stop: function (t, i) {
      var a = e(this).data('ui-draggable'),
      s = e.extend({
      }, i, {
        item: a.element
      });
      e.each(a.sortables, function () {
        this.instance.isOver ? (this.instance.isOver = 0, a.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, 'original' === a.options.helper && this.instance.currentItem.css({
          top: 'auto',
          left: 'auto'
        }))  : (this.instance.cancelHelperRemoval = !1, this.instance._trigger('deactivate', t, s))
      })
    },
    drag: function (t, i) {
      var a = e(this).data('ui-draggable'),
      s = this;
      e.each(a.sortables, function () {
        var n = !1,
        r = this;
        this.instance.positionAbs = a.positionAbs,
        this.instance.helperProportions = a.helperProportions,
        this.instance.offset.click = a.offset.click,
        this.instance._intersectsWith(this.instance.containerCache) && (n = !0, e.each(a.sortables, function () {
          return this.instance.positionAbs = a.positionAbs,
          this.instance.helperProportions = a.helperProportions,
          this.instance.offset.click = a.offset.click,
          this !== r && this.instance._intersectsWith(this.instance.containerCache) && e.contains(r.instance.element[0], this.instance.element[0]) && (n = !1),
          n
        })),
        n ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(s).clone().removeAttr('id').appendTo(this.instance.element).data('ui-sortable-item', !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
          return i.helper[0]
        }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = a.offset.click.top, this.instance.offset.click.left = a.offset.click.left, this.instance.offset.parent.left -= a.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= a.offset.parent.top - this.instance.offset.parent.top, a._trigger('toSortable', t), a.dropped = this.instance.element, a.currentItem = a.element, this.instance.fromOutside = a), this.instance.currentItem && this.instance._mouseDrag(t))  : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger('out', t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), a._trigger('fromSortable', t), a.dropped = !1)
      })
    }
  }),
  e.ui.plugin.add('draggable', 'cursor', {
    start: function () {
      var t = e('body'),
      i = e(this).data('ui-draggable').options;
      t.css('cursor') && (i._cursor = t.css('cursor')),
      t.css('cursor', i.cursor)
    },
    stop: function () {
      var t = e(this).data('ui-draggable').options;
      t._cursor && e('body').css('cursor', t._cursor)
    }
  }),
  e.ui.plugin.add('draggable', 'opacity', {
    start: function (t, i) {
      var a = e(i.helper),
      s = e(this).data('ui-draggable').options;
      a.css('opacity') && (s._opacity = a.css('opacity')),
      a.css('opacity', s.opacity)
    },
    stop: function (t, i) {
      var a = e(this).data('ui-draggable').options;
      a._opacity && e(i.helper).css('opacity', a._opacity)
    }
  }),
  e.ui.plugin.add('draggable', 'scroll', {
    start: function () {
      var t = e(this).data('ui-draggable');
      t.scrollParent[0] !== document && 'HTML' !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
    },
    drag: function (t) {
      var i = e(this).data('ui-draggable'),
      a = i.options,
      s = !1;
      i.scrollParent[0] !== document && 'HTML' !== i.scrollParent[0].tagName ? (a.axis && 'x' === a.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < a.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + a.scrollSpeed : t.pageY - i.overflowOffset.top < a.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - a.scrollSpeed)), a.axis && 'y' === a.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < a.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + a.scrollSpeed : t.pageX - i.overflowOffset.left < a.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - a.scrollSpeed)))  : (a.axis && 'x' === a.axis || (t.pageY - e(document).scrollTop() < a.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - a.scrollSpeed)  : e(window).height() - (t.pageY - e(document).scrollTop()) < a.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + a.scrollSpeed))), a.axis && 'y' === a.axis || (t.pageX - e(document).scrollLeft() < a.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - a.scrollSpeed)  : e(window).width() - (t.pageX - e(document).scrollLeft()) < a.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + a.scrollSpeed)))),
      s !== !1 && e.ui.ddmanager && !a.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
    }
  }),
  e.ui.plugin.add('draggable', 'snap', {
    start: function () {
      var t = e(this).data('ui-draggable'),
      i = t.options;
      t.snapElements = [
      ],
      e(i.snap.constructor !== String ? i.snap.items || ':data(ui-draggable)' : i.snap).each(function () {
        var i = e(this),
        a = i.offset();
        this !== t.element[0] && t.snapElements.push({
          item: this,
          width: i.outerWidth(),
          height: i.outerHeight(),
          top: a.top,
          left: a.left
        })
      })
    },
    drag: function (t, i) {
      var a,
      s,
      n,
      r,
      o,
      l,
      h,
      u,
      d,
      c,
      p = e(this).data('ui-draggable'),
      f = p.options,
      m = f.snapTolerance,
      g = i.offset.left,
      v = g + p.helperProportions.width,
      y = i.offset.top,
      b = y + p.helperProportions.height;
      for (d = p.snapElements.length - 1; d >= 0; d--) o = p.snapElements[d].left,
      l = o + p.snapElements[d].width,
      h = p.snapElements[d].top,
      u = h + p.snapElements[d].height,
      o - m > v || g > l + m || h - m > b || y > u + m || !e.contains(p.snapElements[d].item.ownerDocument, p.snapElements[d].item) ? (p.snapElements[d].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
        snapItem: p.snapElements[d].item
      })), p.snapElements[d].snapping = !1)  : ('inner' !== f.snapMode && (a = m >= Math.abs(h - b), s = m >= Math.abs(u - y), n = m >= Math.abs(o - v), r = m >= Math.abs(l - g), a && (i.position.top = p._convertPositionTo('relative', {
        top: h - p.helperProportions.height,
        left: 0
      }).top - p.margins.top), s && (i.position.top = p._convertPositionTo('relative', {
        top: u,
        left: 0
      }).top - p.margins.top), n && (i.position.left = p._convertPositionTo('relative', {
        top: 0,
        left: o - p.helperProportions.width
      }).left - p.margins.left), r && (i.position.left = p._convertPositionTo('relative', {
        top: 0,
        left: l
      }).left - p.margins.left)), c = a || s || n || r, 'outer' !== f.snapMode && (a = m >= Math.abs(h - y), s = m >= Math.abs(u - b), n = m >= Math.abs(o - g), r = m >= Math.abs(l - v), a && (i.position.top = p._convertPositionTo('relative', {
        top: h,
        left: 0
      }).top - p.margins.top), s && (i.position.top = p._convertPositionTo('relative', {
        top: u - p.helperProportions.height,
        left: 0
      }).top - p.margins.top), n && (i.position.left = p._convertPositionTo('relative', {
        top: 0,
        left: o
      }).left - p.margins.left), r && (i.position.left = p._convertPositionTo('relative', {
        top: 0,
        left: l - p.helperProportions.width
      }).left - p.margins.left)), !p.snapElements[d].snapping && (a || s || n || r || c) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
        snapItem: p.snapElements[d].item
      })), p.snapElements[d].snapping = a || s || n || r || c)
    }
  }),
  e.ui.plugin.add('draggable', 'stack', {
    start: function () {
      var t,
      i = this.data('ui-draggable').options,
      a = e.makeArray(e(i.stack)).sort(function (t, i) {
        return (parseInt(e(t).css('zIndex'), 10) || 0) - (parseInt(e(i).css('zIndex'), 10) || 0)
      });
      a.length && (t = parseInt(e(a[0]).css('zIndex'), 10) || 0, e(a).each(function (i) {
        e(this).css('zIndex', t + i)
      }), this.css('zIndex', t + a.length))
    }
  }),
  e.ui.plugin.add('draggable', 'zIndex', {
    start: function (t, i) {
      var a = e(i.helper),
      s = e(this).data('ui-draggable').options;
      a.css('zIndex') && (s._zIndex = a.css('zIndex')),
      a.css('zIndex', s.zIndex)
    },
    stop: function (t, i) {
      var a = e(this).data('ui-draggable').options;
      a._zIndex && e(i.helper).css('zIndex', a._zIndex)
    }
  })
}) (jQuery);
(function (e) {
  function t(e, t, i) {
    return e > t && t + i > e
  }
  e.widget('ui.droppable', {
    version: '1.10.3',
    widgetEventPrefix: 'drop',
    options: {
      accept: '*',
      activeClass: !1,
      addClasses: !0,
      greedy: !1,
      hoverClass: !1,
      scope: 'default',
      tolerance: 'intersect',
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null
    },
    _create: function () {
      var t = this.options,
      i = t.accept;
      this.isover = !1,
      this.isout = !0,
      this.accept = e.isFunction(i) ? i : function (e) {
        return e.is(i)
      },
      this.proportions = {
        width: this.element[0].offsetWidth,
        height: this.element[0].offsetHeight
      },
      e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [],
      e.ui.ddmanager.droppables[t.scope].push(this),
      t.addClasses && this.element.addClass('ui-droppable')
    },
    _destroy: function () {
      for (var t = 0, i = e.ui.ddmanager.droppables[this.options.scope]; i.length > t; t++) i[t] === this && i.splice(t, 1);
      this.element.removeClass('ui-droppable ui-droppable-disabled')
    },
    _setOption: function (t, i) {
      'accept' === t && (this.accept = e.isFunction(i) ? i : function (e) {
        return e.is(i)
      }),
      e.Widget.prototype._setOption.apply(this, arguments)
    },
    _activate: function (t) {
      var i = e.ui.ddmanager.current;
      this.options.activeClass && this.element.addClass(this.options.activeClass),
      i && this._trigger('activate', t, this.ui(i))
    },
    _deactivate: function (t) {
      var i = e.ui.ddmanager.current;
      this.options.activeClass && this.element.removeClass(this.options.activeClass),
      i && this._trigger('deactivate', t, this.ui(i))
    },
    _over: function (t) {
      var i = e.ui.ddmanager.current;
      i && (i.currentItem || i.element) [0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger('over', t, this.ui(i)))
    },
    _out: function (t) {
      var i = e.ui.ddmanager.current;
      i && (i.currentItem || i.element) [0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger('out', t, this.ui(i)))
    },
    _drop: function (t, i) {
      var a = i || e.ui.ddmanager.current,
      s = !1;
      return a && (a.currentItem || a.element) [0] !== this.element[0] ? (this.element.find(':data(ui-droppable)').not('.ui-draggable-dragging').each(function () {
        var t = e.data(this, 'ui-droppable');
        return t.options.greedy && !t.options.disabled && t.options.scope === a.options.scope && t.accept.call(t.element[0], a.currentItem || a.element) && e.ui.intersect(a, e.extend(t, {
          offset: t.element.offset()
        }), t.options.tolerance) ? (s = !0, !1)  : undefined
      }), s ? !1 : this.accept.call(this.element[0], a.currentItem || a.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger('drop', t, this.ui(a)), this.element)  : !1)  : !1
    },
    ui: function (e) {
      return {
        draggable: e.currentItem || e.element,
        helper: e.helper,
        position: e.position,
        offset: e.positionAbs
      }
    }
  }),
  e.ui.intersect = function (e, i, a) {
    if (!i.offset) return !1;
    var s,
    n,
    r = (e.positionAbs || e.position.absolute).left,
    o = r + e.helperProportions.width,
    l = (e.positionAbs || e.position.absolute).top,
    h = l + e.helperProportions.height,
    u = i.offset.left,
    d = u + i.proportions.width,
    c = i.offset.top,
    p = c + i.proportions.height;
    switch (a) {
      case 'fit':
        return r >= u && d >= o && l >= c && p >= h;
      case 'intersect':
        return r + e.helperProportions.width / 2 > u && d > o - e.helperProportions.width / 2 && l + e.helperProportions.height / 2 > c && p > h - e.helperProportions.height / 2;
      case 'pointer':
        return s = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left,
        n = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top,
        t(n, c, i.proportions.height) && t(s, u, i.proportions.width);
      case 'touch':
        return (l >= c && p >= l || h >= c && p >= h || c > l && h > p) && (r >= u && d >= r || o >= u && d >= o || u > r && o > d);
      default:
        return !1
    }
  },
  e.ui.ddmanager = {
    current: null,
    droppables: {
      'default': [
      ]
    },
    prepareOffsets: function (t, i) {
      var a,
      s,
      n = e.ui.ddmanager.droppables[t.options.scope] || [],
      r = i ? i.type : null,
      o = (t.currentItem || t.element).find(':data(ui-droppable)').addBack();
      e: for (a = 0; n.length > a; a++) if (!(n[a].options.disabled || t && !n[a].accept.call(n[a].element[0], t.currentItem || t.element))) {
        for (s = 0; o.length > s; s++) if (o[s] === n[a].element[0]) {
          n[a].proportions.height = 0;
          continue e
        }
        n[a].visible = 'none' !== n[a].element.css('display'),
        n[a].visible && ('mousedown' === r && n[a]._activate.call(n[a], i), n[a].offset = n[a].element.offset(), n[a].proportions = {
          width: n[a].element[0].offsetWidth,
          height: n[a].element[0].offsetHeight
        })
      }
    },
    drop: function (t, i) {
      var a = !1;
      return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
        this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (a = this._drop.call(this, i) || a), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
      }),
      a
    },
    dragStart: function (t, i) {
      t.element.parentsUntil('body').bind('scroll.droppable', function () {
        t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
      })
    },
    drag: function (t, i) {
      t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i),
      e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
        if (!this.options.disabled && !this.greedyChild && this.visible) {
          var a,
          s,
          n,
          r = e.ui.intersect(t, this, this.options.tolerance),
          o = !r && this.isover ? 'isout' : r && !this.isover ? 'isover' : null;
          o && (this.options.greedy && (s = this.options.scope, n = this.element.parents(':data(ui-droppable)').filter(function () {
            return e.data(this, 'ui-droppable').options.scope === s
          }), n.length && (a = e.data(n[0], 'ui-droppable'), a.greedyChild = 'isover' === o)), a && 'isover' === o && (a.isover = !1, a.isout = !0, a._out.call(a, i)), this[o] = !0, this['isout' === o ? 'isover' : 'isout'] = !1, this['isover' === o ? '_over' : '_out'].call(this, i), a && 'isout' === o && (a.isout = !1, a.isover = !0, a._over.call(a, i)))
        }
      })
    },
    dragStop: function (t, i) {
      t.element.parentsUntil('body').unbind('scroll.droppable'),
      t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
    }
  }
}) (jQuery); (function (e) {
  function t(e) {
    return parseInt(e, 10) || 0
  }
  function i(e) {
    return !isNaN(parseInt(e, 10))
  }
  e.widget('ui.resizable', e.ui.mouse, {
    version: '1.10.3',
    widgetEventPrefix: 'resize',
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: 'slow',
      animateEasing: 'swing',
      aspectRatio: !1,
      autoHide: !1,
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: 'e,s,se',
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _create: function () {
      var t,
      i,
      s,
      a,
      n,
      r = this,
      o = this.options;
      if (this.element.addClass('ui-resizable'), e.extend(this, {
        _aspectRatio: !!o.aspectRatio,
        aspectRatio: o.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [
        ],
        _helper: o.helper || o.ghost || o.animate ? o.helper || 'ui-resizable-helper' : null
      }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e('<div class=\'ui-wrapper\' style=\'overflow: hidden;\'></div>').css({
        position: this.element.css('position'),
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        top: this.element.css('top'),
        left: this.element.css('left')
      })), this.element = this.element.parent().data('ui-resizable', this.element.data('ui-resizable')), this.elementIsWrapper = !0, this.element.css({
        marginLeft: this.originalElement.css('marginLeft'),
        marginTop: this.originalElement.css('marginTop'),
        marginRight: this.originalElement.css('marginRight'),
        marginBottom: this.originalElement.css('marginBottom')
      }), this.originalElement.css({
        marginLeft: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0
      }), this.originalResizeStyle = this.originalElement.css('resize'), this.originalElement.css('resize', 'none'), this._proportionallyResizeElements.push(this.originalElement.css({
        position: 'static',
        zoom: 1,
        display: 'block'
      })), this.originalElement.css({
        margin: this.originalElement.css('margin')
      }), this._proportionallyResize()), this.handles = o.handles || (e('.ui-resizable-handle', this.element).length ? {
        n: '.ui-resizable-n',
        e: '.ui-resizable-e',
        s: '.ui-resizable-s',
        w: '.ui-resizable-w',
        se: '.ui-resizable-se',
        sw: '.ui-resizable-sw',
        ne: '.ui-resizable-ne',
        nw: '.ui-resizable-nw'
      }
       : 'e,s,se'), this.handles.constructor === String) for ('all' === this.handles && (this.handles = 'n,e,s,w,se,sw,ne,nw'), t = this.handles.split(','), this.handles = {
      }, i = 0; t.length > i; i++) s = e.trim(t[i]),
      n = 'ui-resizable-' + s,
      a = e('<div class=\'ui-resizable-handle ' + n + '\'></div>'),
      a.css({
        zIndex: o.zIndex
      }),
      'se' === s && a.addClass('ui-icon ui-icon-gripsmall-diagonal-se'),
      this.handles[s] = '.ui-resizable-' + s,
      this.element.append(a);
      this._renderAxis = function (t) {
        var i,
        s,
        a,
        n;
        t = t || this.element;
        for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = e(this.handles[i], this.element).show()),
        this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), n = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight()  : s.outerWidth(), a = [
          'padding',
          /ne|nw|n/.test(i) ? 'Top' : /se|sw|s/.test(i) ? 'Bottom' : /^e$/.test(i) ? 'Right' : 'Left'
        ].join(''), t.css(a, n), this._proportionallyResize()),
        e(this.handles[i]).length
      },
      this._renderAxis(this.element),
      this._handles = e('.ui-resizable-handle', this.element).disableSelection(),
      this._handles.mouseover(function () {
        r.resizing || (this.className && (a = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = a && a[1] ? a[1] : 'se')
      }),
      o.autoHide && (this._handles.hide(), e(this.element).addClass('ui-resizable-autohide').mouseenter(function () {
        o.disabled || (e(this).removeClass('ui-resizable-autohide'), r._handles.show())
      }).mouseleave(function () {
        o.disabled || r.resizing || (e(this).addClass('ui-resizable-autohide'), r._handles.hide())
      })),
      this._mouseInit()
    },
    _destroy: function () {
      this._mouseDestroy();
      var t,
      i = function (t) {
        e(t).removeClass('ui-resizable ui-resizable-disabled ui-resizable-resizing').removeData('resizable').removeData('ui-resizable').unbind('.resizable').find('.ui-resizable-handle').remove()
      };
      return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
        position: t.css('position'),
        width: t.outerWidth(),
        height: t.outerHeight(),
        top: t.css('top'),
        left: t.css('left')
      }).insertAfter(t), t.remove()),
      this.originalElement.css('resize', this.originalResizeStyle),
      i(this.originalElement),
      this
    },
    _mouseCapture: function (t) {
      var i,
      s,
      a = !1;
      for (i in this.handles) s = e(this.handles[i]) [0],
      (s === t.target || e.contains(s, t.target)) && (a = !0);
      return !this.options.disabled && a
    },
    _mouseStart: function (i) {
      var s,
      a,
      n,
      r = this.options,
      o = this.element.position(),
      h = this.element;
      return this.resizing = !0,
      /absolute/.test(h.css('position')) ? h.css({
        position: 'absolute',
        top: h.css('top'),
        left: h.css('left')
      })  : h.is('.ui-draggable') && h.css({
        position: 'absolute',
        top: o.top,
        left: o.left
      }),
      this._renderProxy(),
      s = t(this.helper.css('left')),
      a = t(this.helper.css('top')),
      r.containment && (s += e(r.containment).scrollLeft() || 0, a += e(r.containment).scrollTop() || 0),
      this.offset = this.helper.offset(),
      this.position = {
        left: s,
        top: a
      },
      this.size = this._helper ? {
        width: h.outerWidth(),
        height: h.outerHeight()
      }
       : {
        width: h.width(),
        height: h.height()
      },
      this.originalSize = this._helper ? {
        width: h.outerWidth(),
        height: h.outerHeight()
      }
       : {
        width: h.width(),
        height: h.height()
      },
      this.originalPosition = {
        left: s,
        top: a
      },
      this.sizeDiff = {
        width: h.outerWidth() - h.width(),
        height: h.outerHeight() - h.height()
      },
      this.originalMousePosition = {
        left: i.pageX,
        top: i.pageY
      },
      this.aspectRatio = 'number' == typeof r.aspectRatio ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
      n = e('.ui-resizable-' + this.axis).css('cursor'),
      e('body').css('cursor', 'auto' === n ? this.axis + '-resize' : n),
      h.addClass('ui-resizable-resizing'),
      this._propagate('start', i),
      !0
    },
    _mouseDrag: function (t) {
      var i,
      s = this.helper,
      a = {
      },
      n = this.originalMousePosition,
      r = this.axis,
      o = this.position.top,
      h = this.position.left,
      l = this.size.width,
      u = this.size.height,
      c = t.pageX - n.left || 0,
      d = t.pageY - n.top || 0,
      p = this._change[r];
      return p ? (i = p.apply(this, [
        t,
        c,
        d
      ]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate('resize', t), this.position.top !== o && (a.top = this.position.top + 'px'), this.position.left !== h && (a.left = this.position.left + 'px'), this.size.width !== l && (a.width = this.size.width + 'px'), this.size.height !== u && (a.height = this.size.height + 'px'), s.css(a), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(a) || this._trigger('resize', t, this.ui()), !1)  : !1
    },
    _mouseStop: function (t) {
      this.resizing = !1;
      var i,
      s,
      a,
      n,
      r,
      o,
      h,
      l = this.options,
      u = this;
      return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), a = s && e.ui.hasScroll(i[0], 'left') ? 0 : u.sizeDiff.height, n = s ? 0 : u.sizeDiff.width, r = {
        width: u.helper.width() - n,
        height: u.helper.height() - a
      }, o = parseInt(u.element.css('left'), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css('top'), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(r, {
        top: h,
        left: o
      })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()),
      e('body').css('cursor', 'auto'),
      this.element.removeClass('ui-resizable-resizing'),
      this._propagate('stop', t),
      this._helper && this.helper.remove(),
      !1
    },
    _updateVirtualBoundaries: function (e) {
      var t,
      s,
      a,
      n,
      r,
      o = this.options;
      r = {
        minWidth: i(o.minWidth) ? o.minWidth : 0,
        maxWidth: i(o.maxWidth) ? o.maxWidth : 1 / 0,
        minHeight: i(o.minHeight) ? o.minHeight : 0,
        maxHeight: i(o.maxHeight) ? o.maxHeight : 1 / 0
      },
      (this._aspectRatio || e) && (t = r.minHeight * this.aspectRatio, a = r.minWidth / this.aspectRatio, s = r.maxHeight * this.aspectRatio, n = r.maxWidth / this.aspectRatio, t > r.minWidth && (r.minWidth = t), a > r.minHeight && (r.minHeight = a), r.maxWidth > s && (r.maxWidth = s), r.maxHeight > n && (r.maxHeight = n)),
      this._vBoundaries = r
    },
    _updateCache: function (e) {
      this.offset = this.helper.offset(),
      i(e.left) && (this.position.left = e.left),
      i(e.top) && (this.position.top = e.top),
      i(e.height) && (this.size.height = e.height),
      i(e.width) && (this.size.width = e.width)
    },
    _updateRatio: function (e) {
      var t = this.position,
      s = this.size,
      a = this.axis;
      return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio),
      'sw' === a && (e.left = t.left + (s.width - e.width), e.top = null),
      'nw' === a && (e.top = t.top + (s.height - e.height), e.left = t.left + (s.width - e.width)),
      e
    },
    _respectSize: function (e) {
      var t = this._vBoundaries,
      s = this.axis,
      a = i(e.width) && t.maxWidth && t.maxWidth < e.width,
      n = i(e.height) && t.maxHeight && t.maxHeight < e.height,
      r = i(e.width) && t.minWidth && t.minWidth > e.width,
      o = i(e.height) && t.minHeight && t.minHeight > e.height,
      h = this.originalPosition.left + this.originalSize.width,
      l = this.position.top + this.size.height,
      u = /sw|nw|w/.test(s),
      c = /nw|ne|n/.test(s);
      return r && (e.width = t.minWidth),
      o && (e.height = t.minHeight),
      a && (e.width = t.maxWidth),
      n && (e.height = t.maxHeight),
      r && u && (e.left = h - t.minWidth),
      a && u && (e.left = h - t.maxWidth),
      o && c && (e.top = l - t.minHeight),
      n && c && (e.top = l - t.maxHeight),
      e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null)  : e.top = null,
      e
    },
    _proportionallyResize: function () {
      if (this._proportionallyResizeElements.length) {
        var e,
        t,
        i,
        s,
        a,
        n = this.helper || this.element;
        for (e = 0; this._proportionallyResizeElements.length > e; e++) {
          if (a = this._proportionallyResizeElements[e], !this.borderDif) for (this.borderDif = [
          ], i = [
            a.css('borderTopWidth'),
            a.css('borderRightWidth'),
            a.css('borderBottomWidth'),
            a.css('borderLeftWidth')
          ], s = [
            a.css('paddingTop'),
            a.css('paddingRight'),
            a.css('paddingBottom'),
            a.css('paddingLeft')
          ], t = 0; i.length > t; t++) this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(s[t], 10) || 0);
          a.css({
            height: n.height() - this.borderDif[0] - this.borderDif[2] || 0,
            width: n.width() - this.borderDif[1] - this.borderDif[3] || 0
          })
        }
      }
    },
    _renderProxy: function () {
      var t = this.element,
      i = this.options;
      this.elementOffset = t.offset(),
      this._helper ? (this.helper = this.helper || e('<div style=\'overflow:hidden;\'></div>'), this.helper.addClass(this._helper).css({
        width: this.element.outerWidth() - 1,
        height: this.element.outerHeight() - 1,
        position: 'absolute',
        left: this.elementOffset.left + 'px',
        top: this.elementOffset.top + 'px',
        zIndex: ++i.zIndex
      }), this.helper.appendTo('body').disableSelection())  : this.helper = this.element
    },
    _change: {
      e: function (e, t) {
        return {
          width: this.originalSize.width + t
        }
      },
      w: function (e, t) {
        var i = this.originalSize,
        s = this.originalPosition;
        return {
          left: s.left + t,
          width: i.width - t
        }
      },
      n: function (e, t, i) {
        var s = this.originalSize,
        a = this.originalPosition;
        return {
          top: a.top + i,
          height: s.height - i
        }
      },
      s: function (e, t, i) {
        return {
          height: this.originalSize.height + i
        }
      },
      se: function (t, i, s) {
        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [
          t,
          i,
          s
        ]))
      },
      sw: function (t, i, s) {
        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [
          t,
          i,
          s
        ]))
      },
      ne: function (t, i, s) {
        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [
          t,
          i,
          s
        ]))
      },
      nw: function (t, i, s) {
        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [
          t,
          i,
          s
        ]))
      }
    },
    _propagate: function (t, i) {
      e.ui.plugin.call(this, t, [
        i,
        this.ui()
      ]),
      'resize' !== t && this._trigger(t, i, this.ui())
    },
    plugins: {
    },
    ui: function () {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      }
    }
  }),
  e.ui.plugin.add('resizable', 'animate', {
    stop: function (t) {
      var i = e(this).data('ui-resizable'),
      s = i.options,
      a = i._proportionallyResizeElements,
      n = a.length && /textarea/i.test(a[0].nodeName),
      r = n && e.ui.hasScroll(a[0], 'left') ? 0 : i.sizeDiff.height,
      o = n ? 0 : i.sizeDiff.width,
      h = {
        width: i.size.width - o,
        height: i.size.height - r
      },
      l = parseInt(i.element.css('left'), 10) + (i.position.left - i.originalPosition.left) || null,
      u = parseInt(i.element.css('top'), 10) + (i.position.top - i.originalPosition.top) || null;
      i.element.animate(e.extend(h, u && l ? {
        top: u,
        left: l
      }
       : {
      }), {
        duration: s.animateDuration,
        easing: s.animateEasing,
        step: function () {
          var s = {
            width: parseInt(i.element.css('width'), 10),
            height: parseInt(i.element.css('height'), 10),
            top: parseInt(i.element.css('top'), 10),
            left: parseInt(i.element.css('left'), 10)
          };
          a && a.length && e(a[0]).css({
            width: s.width,
            height: s.height
          }),
          i._updateCache(s),
          i._propagate('resize', t)
        }
      })
    }
  }),
  e.ui.plugin.add('resizable', 'containment', {
    start: function () {
      var i,
      s,
      a,
      n,
      r,
      o,
      h,
      l = e(this).data('ui-resizable'),
      u = l.options,
      c = l.element,
      d = u.containment,
      p = d instanceof e ? d.get(0)  : /parent/.test(d) ? c.parent().get(0)  : d;
      p && (l.containerElement = e(p), /document/.test(d) || d === document ? (l.containerOffset = {
        left: 0,
        top: 0
      }, l.containerPosition = {
        left: 0,
        top: 0
      }, l.parentData = {
        element: e(document),
        left: 0,
        top: 0,
        width: e(document).width(),
        height: e(document).height() || document.body.parentNode.scrollHeight
      })  : (i = e(p), s = [
      ], e(['Top',
      'Right',
      'Left',
      'Bottom']).each(function (e, a) {
        s[e] = t(i.css('padding' + a))
      }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
        height: i.innerHeight() - s[3],
        width: i.innerWidth() - s[1]
      }, a = l.containerOffset, n = l.containerSize.height, r = l.containerSize.width, o = e.ui.hasScroll(p, 'left') ? p.scrollWidth : r, h = e.ui.hasScroll(p) ? p.scrollHeight : n, l.parentData = {
        element: p,
        left: a.left,
        top: a.top,
        width: o,
        height: h
      }))
    },
    resize: function (t) {
      var i,
      s,
      a,
      n,
      r = e(this).data('ui-resizable'),
      o = r.options,
      h = r.containerOffset,
      l = r.position,
      u = r._aspectRatio || t.shiftKey,
      c = {
        top: 0,
        left: 0
      },
      d = r.containerElement;
      d[0] !== document && /static/.test(d.css('position')) && (c = h),
      l.left < (r._helper ? h.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - h.left : r.position.left - c.left), u && (r.size.height = r.size.width / r.aspectRatio), r.position.left = o.helper ? h.left : 0),
      l.top < (r._helper ? h.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - h.top : r.position.top), u && (r.size.width = r.size.height * r.aspectRatio), r.position.top = r._helper ? h.top : 0),
      r.offset.left = r.parentData.left + r.position.left,
      r.offset.top = r.parentData.top + r.position.top,
      i = Math.abs((r._helper ? r.offset.left - c.left : r.offset.left - c.left) + r.sizeDiff.width),
      s = Math.abs((r._helper ? r.offset.top - c.top : r.offset.top - h.top) + r.sizeDiff.height),
      a = r.containerElement.get(0) === r.element.parent().get(0),
      n = /relative|absolute/.test(r.containerElement.css('position')),
      a && n && (i -= r.parentData.left),
      i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, u && (r.size.height = r.size.width / r.aspectRatio)),
      s + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - s, u && (r.size.width = r.size.height * r.aspectRatio))
    },
    stop: function () {
      var t = e(this).data('ui-resizable'),
      i = t.options,
      s = t.containerOffset,
      a = t.containerPosition,
      n = t.containerElement,
      r = e(t.helper),
      o = r.offset(),
      h = r.outerWidth() - t.sizeDiff.width,
      l = r.outerHeight() - t.sizeDiff.height;
      t._helper && !i.animate && /relative/.test(n.css('position')) && e(this).css({
        left: o.left - a.left - s.left,
        width: h,
        height: l
      }),
      t._helper && !i.animate && /static/.test(n.css('position')) && e(this).css({
        left: o.left - a.left - s.left,
        width: h,
        height: l
      })
    }
  }),
  e.ui.plugin.add('resizable', 'alsoResize', {
    start: function () {
      var t = e(this).data('ui-resizable'),
      i = t.options,
      s = function (t) {
        e(t).each(function () {
          var t = e(this);
          t.data('ui-resizable-alsoresize', {
            width: parseInt(t.width(), 10),
            height: parseInt(t.height(), 10),
            left: parseInt(t.css('left'), 10),
            top: parseInt(t.css('top'), 10)
          })
        })
      };
      'object' != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize)  : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize))  : e.each(i.alsoResize, function (e) {
        s(e)
      })
    },
    resize: function (t, i) {
      var s = e(this).data('ui-resizable'),
      a = s.options,
      n = s.originalSize,
      r = s.originalPosition,
      o = {
        height: s.size.height - n.height || 0,
        width: s.size.width - n.width || 0,
        top: s.position.top - r.top || 0,
        left: s.position.left - r.left || 0
      },
      h = function (t, s) {
        e(t).each(function () {
          var t = e(this),
          a = e(this).data('ui-resizable-alsoresize'),
          n = {
          },
          r = s && s.length ? s : t.parents(i.originalElement[0]).length ? [
            'width',
            'height'
          ] : [
            'width',
            'height',
            'top',
            'left'
          ];
          e.each(r, function (e, t) {
            var i = (a[t] || 0) + (o[t] || 0);
            i && i >= 0 && (n[t] = i || null)
          }),
          t.css(n)
        })
      };
      'object' != typeof a.alsoResize || a.alsoResize.nodeType ? h(a.alsoResize)  : e.each(a.alsoResize, function (e, t) {
        h(e, t)
      })
    },
    stop: function () {
      e(this).removeData('resizable-alsoresize')
    }
  }),
  e.ui.plugin.add('resizable', 'ghost', {
    start: function () {
      var t = e(this).data('ui-resizable'),
      i = t.options,
      s = t.size;
      t.ghost = t.originalElement.clone(),
      t.ghost.css({
        opacity: 0.25,
        display: 'block',
        position: 'relative',
        height: s.height,
        width: s.width,
        margin: 0,
        left: 0,
        top: 0
      }).addClass('ui-resizable-ghost').addClass('string' == typeof i.ghost ? i.ghost : ''),
      t.ghost.appendTo(t.helper)
    },
    resize: function () {
      var t = e(this).data('ui-resizable');
      t.ghost && t.ghost.css({
        position: 'relative',
        height: t.size.height,
        width: t.size.width
      })
    },
    stop: function () {
      var t = e(this).data('ui-resizable');
      t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
    }
  }),
  e.ui.plugin.add('resizable', 'grid', {
    resize: function () {
      var t = e(this).data('ui-resizable'),
      i = t.options,
      s = t.size,
      a = t.originalSize,
      n = t.originalPosition,
      r = t.axis,
      o = 'number' == typeof i.grid ? [
        i.grid,
        i.grid
      ] : i.grid,
      h = o[0] || 1,
      l = o[1] || 1,
      u = Math.round((s.width - a.width) / h) * h,
      c = Math.round((s.height - a.height) / l) * l,
      d = a.width + u,
      p = a.height + c,
      f = i.maxWidth && d > i.maxWidth,
      m = i.maxHeight && p > i.maxHeight,
      g = i.minWidth && i.minWidth > d,
      v = i.minHeight && i.minHeight > p;
      i.grid = o,
      g && (d += h),
      v && (p += l),
      f && (d -= h),
      m && (p -= l),
      /^(se|s|e)$/.test(r) ? (t.size.width = d, t.size.height = p)  : /^(ne)$/.test(r) ? (t.size.width = d, t.size.height = p, t.position.top = n.top - c)  : /^(sw)$/.test(r) ? (t.size.width = d, t.size.height = p, t.position.left = n.left - u)  : (t.size.width = d, t.size.height = p, t.position.top = n.top - c, t.position.left = n.left - u)
    }
  })
}) (jQuery); (function (e) {
  e.widget('ui.selectable', e.ui.mouse, {
    version: '1.10.3',
    options: {
      appendTo: 'body',
      autoRefresh: !0,
      distance: 0,
      filter: '*',
      tolerance: 'touch',
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
    },
    _create: function () {
      var t,
      i = this;
      this.element.addClass('ui-selectable'),
      this.dragged = !1,
      this.refresh = function () {
        t = e(i.options.filter, i.element[0]),
        t.addClass('ui-selectee'),
        t.each(function () {
          var t = e(this),
          i = t.offset();
          e.data(this, 'selectable-item', {
            element: this,
            $element: t,
            left: i.left,
            top: i.top,
            right: i.left + t.outerWidth(),
            bottom: i.top + t.outerHeight(),
            startselected: !1,
            selected: t.hasClass('ui-selected'),
            selecting: t.hasClass('ui-selecting'),
            unselecting: t.hasClass('ui-unselecting')
          })
        })
      },
      this.refresh(),
      this.selectees = t.addClass('ui-selectee'),
      this._mouseInit(),
      this.helper = e('<div class=\'ui-selectable-helper\'></div>')
    },
    _destroy: function () {
      this.selectees.removeClass('ui-selectee').removeData('selectable-item'),
      this.element.removeClass('ui-selectable ui-selectable-disabled'),
      this._mouseDestroy()
    },
    _mouseStart: function (t) {
      var i = this,
      s = this.options;
      this.opos = [
        t.pageX,
        t.pageY
      ],
      this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger('start', t), e(s.appendTo).append(this.helper), this.helper.css({
        left: t.pageX,
        top: t.pageY,
        width: 0,
        height: 0
      }), s.autoRefresh && this.refresh(), this.selectees.filter('.ui-selected').each(function () {
        var s = e.data(this, 'selectable-item');
        s.startselected = !0,
        t.metaKey || t.ctrlKey || (s.$element.removeClass('ui-selected'), s.selected = !1, s.$element.addClass('ui-unselecting'), s.unselecting = !0, i._trigger('unselecting', t, {
          unselecting: s.element
        }))
      }), e(t.target).parents().addBack().each(function () {
        var s,
        a = e.data(this, 'selectable-item');
        return a ? (s = !t.metaKey && !t.ctrlKey || !a.$element.hasClass('ui-selected'), a.$element.removeClass(s ? 'ui-unselecting' : 'ui-selected').addClass(s ? 'ui-selecting' : 'ui-unselecting'), a.unselecting = !s, a.selecting = s, a.selected = s, s ? i._trigger('selecting', t, {
          selecting: a.element
        })  : i._trigger('unselecting', t, {
          unselecting: a.element
        }), !1)  : undefined
      }))
    },
    _mouseDrag: function (t) {
      if (this.dragged = !0, !this.options.disabled) {
        var i,
        s = this,
        a = this.options,
        n = this.opos[0],
        r = this.opos[1],
        o = t.pageX,
        h = t.pageY;
        return n > o && (i = o, o = n, n = i),
        r > h && (i = h, h = r, r = i),
        this.helper.css({
          left: n,
          top: r,
          width: o - n,
          height: h - r
        }),
        this.selectees.each(function () {
          var i = e.data(this, 'selectable-item'),
          l = !1;
          i && i.element !== s.element[0] && ('touch' === a.tolerance ? l = !(i.left > o || n > i.right || i.top > h || r > i.bottom)  : 'fit' === a.tolerance && (l = i.left > n && o > i.right && i.top > r && h > i.bottom), l ? (i.selected && (i.$element.removeClass('ui-selected'), i.selected = !1), i.unselecting && (i.$element.removeClass('ui-unselecting'), i.unselecting = !1), i.selecting || (i.$element.addClass('ui-selecting'), i.selecting = !0, s._trigger('selecting', t, {
            selecting: i.element
          })))  : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass('ui-selecting'), i.selecting = !1, i.$element.addClass('ui-selected'), i.selected = !0)  : (i.$element.removeClass('ui-selecting'), i.selecting = !1, i.startselected && (i.$element.addClass('ui-unselecting'), i.unselecting = !0), s._trigger('unselecting', t, {
            unselecting: i.element
          }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass('ui-selected'), i.selected = !1, i.$element.addClass('ui-unselecting'), i.unselecting = !0, s._trigger('unselecting', t, {
            unselecting: i.element
          })))))
        }),
        !1
      }
    },
    _mouseStop: function (t) {
      var i = this;
      return this.dragged = !1,
      e('.ui-unselecting', this.element[0]).each(function () {
        var s = e.data(this, 'selectable-item');
        s.$element.removeClass('ui-unselecting'),
        s.unselecting = !1,
        s.startselected = !1,
        i._trigger('unselected', t, {
          unselected: s.element
        })
      }),
      e('.ui-selecting', this.element[0]).each(function () {
        var s = e.data(this, 'selectable-item');
        s.$element.removeClass('ui-selecting').addClass('ui-selected'),
        s.selecting = !1,
        s.selected = !0,
        s.startselected = !0,
        i._trigger('selected', t, {
          selected: s.element
        })
      }),
      this._trigger('stop', t),
      this.helper.remove(),
      !1
    }
  })
}) (jQuery); (function (e) {
  function t(e, t, i) {
    return e > t && t + i > e
  }
  function i(e) {
    return /left|right/.test(e.css('float')) || /inline|table-cell/.test(e.css('display'))
  }
  e.widget('ui.sortable', e.ui.mouse, {
    version: '1.10.3',
    widgetEventPrefix: 'sort',
    ready: !1,
    options: {
      appendTo: 'parent',
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: 'auto',
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: 'original',
      items: '> *',
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: 'default',
      tolerance: 'intersect',
      zIndex: 1000,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _create: function () {
      var e = this.options;
      this.containerCache = {
      },
      this.element.addClass('ui-sortable'),
      this.refresh(),
      this.floating = this.items.length ? 'x' === e.axis || i(this.items[0].item)  : !1,
      this.offset = this.element.offset(),
      this._mouseInit(),
      this.ready = !0
    },
    _destroy: function () {
      this.element.removeClass('ui-sortable ui-sortable-disabled'),
      this._mouseDestroy();
      for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + '-item');
      return this
    },
    _setOption: function (t, i) {
      'disabled' === t ? (this.options[t] = i, this.widget().toggleClass('ui-sortable-disabled', !!i))  : e.Widget.prototype._setOption.apply(this, arguments)
    },
    _mouseCapture: function (t, i) {
      var s = null,
      a = !1,
      n = this;
      return this.reverting ? !1 : this.options.disabled || 'static' === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () {
        return e.data(this, n.widgetName + '-item') === n ? (s = e(this), !1)  : undefined
      }), e.data(t.target, n.widgetName + '-item') === n && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find('*').addBack().each(function () {
        this === t.target && (a = !0)
      }), a) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0)  : !1 : !1)
    },
    _mouseStart: function (t, i, s) {
      var a,
      n,
      r = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, e.extend(this.offset, {
        click: {
          left: t.pageX - this.offset.left,
          top: t.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.helper.css('position', 'absolute'), this.cssPosition = this.helper.css('position'), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
        prev: this.currentItem.prev() [0],
        parent: this.currentItem.parent() [0]
      }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && 'auto' !== r.cursor && (n = this.document.find('body'), this.storedCursor = n.css('cursor'), n.css('cursor', r.cursor), this.storedStylesheet = e('<style>*{ cursor: ' + r.cursor + ' !important; }</style>').appendTo(n)), r.opacity && (this.helper.css('opacity') && (this._storedOpacity = this.helper.css('opacity')), this.helper.css('opacity', r.opacity)), r.zIndex && (this.helper.css('zIndex') && (this._storedZIndex = this.helper.css('zIndex')), this.helper.css('zIndex', r.zIndex)), this.scrollParent[0] !== document && 'HTML' !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger('start', t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (a = this.containers.length - 1; a >= 0; a--) this.containers[a]._trigger('activate', t, this._uiHash(this));
      return e.ui.ddmanager && (e.ui.ddmanager.current = this),
      e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
      this.dragging = !0,
      this.helper.addClass('ui-sortable-helper'),
      this._mouseDrag(t),
      !0
    },
    _mouseDrag: function (t) {
      var i,
      s,
      a,
      n,
      r = this.options,
      o = !1;
      for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo('absolute'), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && 'HTML' !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = o = this.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = o = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = o = this.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = o = this.scrollParent[0].scrollLeft - r.scrollSpeed))  : (t.pageY - e(document).scrollTop() < r.scrollSensitivity ? o = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed)  : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (o = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed)), t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? o = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed)  : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (o = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed))), o !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo('absolute'), this.options.axis && 'y' === this.options.axis || (this.helper[0].style.left = this.position.left + 'px'), this.options.axis && 'x' === this.options.axis || (this.helper[0].style.top = this.position.top + 'px'), i = this.items.length - 1; i >= 0; i--) if (s = this.items[i], a = s.item[0], n = this._intersectsWithPointer(s), n && s.instance === this.currentContainer && a !== this.currentItem[0] && this.placeholder[1 === n ? 'next' : 'prev']() [0] !== a && !e.contains(this.placeholder[0], a) && ('semi-dynamic' === this.options.type ? !e.contains(this.element[0], a)  : !0)) {
        if (this.direction = 1 === n ? 'down' : 'up', 'pointer' !== this.options.tolerance && !this._intersectsWithSides(s)) break;
        this._rearrange(t, s),
        this._trigger('change', t, this._uiHash());
        break
      }
      return this._contactContainers(t),
      e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
      this._trigger('sort', t, this._uiHash()),
      this.lastPositionAbs = this.positionAbs,
      !1
    },
    _mouseStop: function (t, i) {
      if (t) {
        if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
          var s = this,
          a = this.placeholder.offset(),
          n = this.options.axis,
          r = {
          };
          n && 'x' !== n || (r.left = a.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)),
          n && 'y' !== n || (r.top = a.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)),
          this.reverting = !0,
          e(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function () {
            s._clear(t)
          })
        } else this._clear(t, i);
        return !1
      }
    },
    cancel: function () {
      if (this.dragging) {
        this._mouseUp({
          target: null
        }),
        'original' === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass('ui-sortable-helper')  : this.currentItem.show();
        for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger('deactivate', null, this._uiHash(this)),
        this.containers[t].containerCache.over && (this.containers[t]._trigger('out', null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
      }
      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 'original' !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem)  : e(this.domPosition.parent).prepend(this.currentItem)),
      this
    },
    serialize: function (t) {
      var i = this._getItemsAsjQuery(t && t.connected),
      s = [
      ];
      return t = t || {
      },
      e(i).each(function () {
        var i = (e(t.item || this).attr(t.attribute || 'id') || '').match(t.expression || /(.+)[\-=_](.+)/);
        i && s.push((t.key || i[1] + '[]') + '=' + (t.key && t.expression ? i[1] : i[2]))
      }),
      !s.length && t.key && s.push(t.key + '='),
      s.join('&')
    },
    toArray: function (t) {
      var i = this._getItemsAsjQuery(t && t.connected),
      s = [
      ];
      return t = t || {
      },
      i.each(function () {
        s.push(e(t.item || this).attr(t.attribute || 'id') || '')
      }),
      s
    },
    _intersectsWith: function (e) {
      var t = this.positionAbs.left,
      i = t + this.helperProportions.width,
      s = this.positionAbs.top,
      a = s + this.helperProportions.height,
      n = e.left,
      r = n + e.width,
      o = e.top,
      h = o + e.height,
      l = this.offset.click.top,
      u = this.offset.click.left,
      c = 'x' === this.options.axis || s + l > o && h > s + l,
      d = 'y' === this.options.axis || t + u > n && r > t + u,
      p = c && d;
      return 'pointer' === this.options.tolerance || this.options.forcePointerForContainers || 'pointer' !== this.options.tolerance && this.helperProportions[this.floating ? 'width' : 'height'] > e[this.floating ? 'width' : 'height'] ? p : t + this.helperProportions.width / 2 > n && r > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > o && h > a - this.helperProportions.height / 2
    },
    _intersectsWithPointer: function (e) {
      var i = 'x' === this.options.axis || t(this.positionAbs.top + this.offset.click.top, e.top, e.height),
      s = 'y' === this.options.axis || t(this.positionAbs.left + this.offset.click.left, e.left, e.width),
      a = i && s,
      n = this._getDragVerticalDirection(),
      r = this._getDragHorizontalDirection();
      return a ? this.floating ? r && 'right' === r || 'down' === n ? 2 : 1 : n && ('down' === n ? 2 : 1)  : !1
    },
    _intersectsWithSides: function (e) {
      var i = t(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
      s = t(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
      a = this._getDragVerticalDirection(),
      n = this._getDragHorizontalDirection();
      return this.floating && n ? 'right' === n && s || 'left' === n && !s : a && ('down' === a && i || 'up' === a && !i)
    },
    _getDragVerticalDirection: function () {
      var e = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== e && (e > 0 ? 'down' : 'up')
    },
    _getDragHorizontalDirection: function () {
      var e = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== e && (e > 0 ? 'right' : 'left')
    },
    refresh: function (e) {
      return this._refreshItems(e),
      this.refreshPositions(),
      this
    },
    _connectWith: function () {
      var e = this.options;
      return e.connectWith.constructor === String ? [
        e.connectWith
      ] : e.connectWith
    },
    _getItemsAsjQuery: function (t) {
      var i,
      s,
      a,
      n,
      r = [
      ],
      o = [
      ],
      h = this._connectWith();
      if (h && t) for (i = h.length - 1; i >= 0; i--) for (a = e(h[i]), s = a.length - 1; s >= 0; s--) n = e.data(a[s], this.widgetFullName),
      n && n !== this && !n.options.disabled && o.push([e.isFunction(n.options.items) ? n.options.items.call(n.element)  : e(n.options.items, n.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'),
      n]);
      for (o.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      })  : e(this.options.items, this.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'),
      this]), i = o.length - 1; i >= 0; i--) o[i][0].each(function () {
        r.push(this)
      });
      return e(r)
    },
    _removeCurrentsFromItems: function () {
      var t = this.currentItem.find(':data(' + this.widgetName + '-item)');
      this.items = e.grep(this.items, function (e) {
        for (var i = 0; t.length > i; i++) if (t[i] === e.item[0]) return !1;
        return !0
      })
    },
    _refreshItems: function (t) {
      this.items = [
      ],
      this.containers = [
        this
      ];
      var i,
      s,
      a,
      n,
      r,
      o,
      h,
      l,
      u = this.items,
      c = [
        [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
          item: this.currentItem
        })  : e(this.options.items, this.element),
        this]
      ],
      d = this._connectWith();
      if (d && this.ready) for (i = d.length - 1; i >= 0; i--) for (a = e(d[i]), s = a.length - 1; s >= 0; s--) n = e.data(a[s], this.widgetFullName),
      n && n !== this && !n.options.disabled && (c.push([e.isFunction(n.options.items) ? n.options.items.call(n.element[0], t, {
        item: this.currentItem
      })  : e(n.options.items, n.element),
      n]), this.containers.push(n));
      for (i = c.length - 1; i >= 0; i--) for (r = c[i][1], o = c[i][0], s = 0, l = o.length; l > s; s++) h = e(o[s]),
      h.data(this.widgetName + '-item', r),
      u.push({
        item: h,
        instance: r,
        width: 0,
        height: 0,
        left: 0,
        top: 0
      })
    },
    refreshPositions: function (t) {
      this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var i,
      s,
      a,
      n;
      for (i = this.items.length - 1; i >= 0; i--) s = this.items[i],
      s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (a = this.options.toleranceElement ? e(this.options.toleranceElement, s.item)  : s.item, t || (s.width = a.outerWidth(), s.height = a.outerHeight()), n = a.offset(), s.left = n.left, s.top = n.top);
      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
       else for (i = this.containers.length - 1; i >= 0; i--) n = this.containers[i].element.offset(),
      this.containers[i].containerCache.left = n.left,
      this.containers[i].containerCache.top = n.top,
      this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
      this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      return this
    },
    _createPlaceholder: function (t) {
      t = t || this;
      var i,
      s = t.options;
      s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
        element: function () {
          var s = t.currentItem[0].nodeName.toLowerCase(),
          a = e('<' + s + '>', t.document[0]).addClass(i || t.currentItem[0].className + ' ui-sortable-placeholder').removeClass('ui-sortable-helper');
          return 'tr' === s ? t.currentItem.children().each(function () {
            e('<td>&#160;</td>', t.document[0]).attr('colspan', e(this).attr('colspan') || 1).appendTo(a)
          })  : 'img' === s && a.attr('src', t.currentItem.attr('src')),
          i || a.css('visibility', 'hidden'),
          a
        },
        update: function (e, a) {
          (!i || s.forcePlaceholderSize) && (a.height() || a.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css('paddingTop') || 0, 10) - parseInt(t.currentItem.css('paddingBottom') || 0, 10)), a.width() || a.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css('paddingLeft') || 0, 10) - parseInt(t.currentItem.css('paddingRight') || 0, 10)))
        }
      }),
      t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)),
      t.currentItem.after(t.placeholder),
      s.placeholder.update(t, t.placeholder)
    },
    _contactContainers: function (s) {
      var a,
      n,
      r,
      o,
      h,
      l,
      u,
      c,
      d,
      p,
      f = null,
      m = null;
      for (a = this.containers.length - 1; a >= 0; a--) if (!e.contains(this.currentItem[0], this.containers[a].element[0])) if (this._intersectsWith(this.containers[a].containerCache)) {
        if (f && e.contains(this.containers[a].element[0], f.element[0])) continue;
        f = this.containers[a],
        m = a
      } else this.containers[a].containerCache.over && (this.containers[a]._trigger('out', s, this._uiHash(this)), this.containers[a].containerCache.over = 0);
      if (f) if (1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger('over', s, this._uiHash(this)), this.containers[m].containerCache.over = 1);
       else {
        for (r = 10000, o = null, p = f.floating || i(this.currentItem), h = p ? 'left' : 'top', l = p ? 'width' : 'height', u = this.positionAbs[h] + this.offset.click[h], n = this.items.length - 1; n >= 0; n--) e.contains(this.containers[m].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (!p || t(this.positionAbs.top + this.offset.click.top, this.items[n].top, this.items[n].height)) && (c = this.items[n].item.offset() [h], d = !1, Math.abs(c - u) > Math.abs(c + this.items[n][l] - u) && (d = !0, c += this.items[n][l]), r > Math.abs(c - u) && (r = Math.abs(c - u), o = this.items[n], this.direction = d ? 'up' : 'down'));
        if (!o && !this.options.dropOnEmpty) return;
        if (this.currentContainer === this.containers[m]) return;
        o ? this._rearrange(s, o, null, !0)  : this._rearrange(s, null, this.containers[m].element, !0),
        this._trigger('change', s, this._uiHash()),
        this.containers[m]._trigger('change', s, this._uiHash(this)),
        this.currentContainer = this.containers[m],
        this.options.placeholder.update(this.currentContainer, this.placeholder),
        this.containers[m]._trigger('over', s, this._uiHash(this)),
        this.containers[m].containerCache.over = 1
      }
    },
    _createHelper: function (t) {
      var i = this.options,
      s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [
        t,
        this.currentItem
      ]))  : 'clone' === i.helper ? this.currentItem.clone()  : this.currentItem;
      return s.parents('body').length || e('parent' !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode) [0].appendChild(s[0]),
      s[0] === this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css('position'),
        top: this.currentItem.css('top'),
        left: this.currentItem.css('left')
      }),
      (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
      (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
      s
    },
    _adjustOffsetFromHelper: function (t) {
      'string' == typeof t && (t = t.split(' ')),
      e.isArray(t) && (t = {
        left: + t[0],
        top: + t[1] || 0
      }),
      'left' in t && (this.offset.click.left = t.left + this.margins.left),
      'right' in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
      'top' in t && (this.offset.click.top = t.top + this.margins.top),
      'bottom' in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      return 'absolute' === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
      (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && 'html' === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
        top: 0,
        left: 0
      }),
      {
        top: t.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
      }
    },
    _getRelativeOffset: function () {
      if ('relative' === this.cssPosition) {
        var e = this.currentItem.position();
        return {
          top: e.top - (parseInt(this.helper.css('top'), 10) || 0) + this.scrollParent.scrollTop(),
          left: e.left - (parseInt(this.helper.css('left'), 10) || 0) + this.scrollParent.scrollLeft()
        }
      }
      return {
        top: 0,
        left: 0
      }
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.currentItem.css('marginLeft'), 10) || 0,
        top: parseInt(this.currentItem.css('marginTop'), 10) || 0
      }
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function () {
      var t,
      i,
      s,
      a = this.options;
      'parent' === a.containment && (a.containment = this.helper[0].parentNode),
      ('document' === a.containment || 'window' === a.containment) && (this.containment = [
        0 - this.offset.relative.left - this.offset.parent.left,
        0 - this.offset.relative.top - this.offset.parent.top,
        e('document' === a.containment ? document : window).width() - this.helperProportions.width - this.margins.left,
        (e('document' === a.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
      ]),
      /^(document|window|parent)$/.test(a.containment) || (t = e(a.containment) [0], i = e(a.containment).offset(), s = 'hidden' !== e(t).css('overflow'), this.containment = [
        i.left + (parseInt(e(t).css('borderLeftWidth'), 10) || 0) + (parseInt(e(t).css('paddingLeft'), 10) || 0) - this.margins.left,
        i.top + (parseInt(e(t).css('borderTopWidth'), 10) || 0) + (parseInt(e(t).css('paddingTop'), 10) || 0) - this.margins.top,
        i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth)  : t.offsetWidth) - (parseInt(e(t).css('borderLeftWidth'), 10) || 0) - (parseInt(e(t).css('paddingRight'), 10) || 0) - this.helperProportions.width - this.margins.left,
        i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight)  : t.offsetHeight) - (parseInt(e(t).css('borderTopWidth'), 10) || 0) - (parseInt(e(t).css('paddingBottom'), 10) || 0) - this.helperProportions.height - this.margins.top
      ])
    },
    _convertPositionTo: function (t, i) {
      i || (i = this.position);
      var s = 'absolute' === t ? 1 : - 1,
      a = 'absolute' !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
      n = /(html|body)/i.test(a[0].tagName);
      return {
        top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ('fixed' === this.cssPosition ? - this.scrollParent.scrollTop()  : n ? 0 : a.scrollTop()) * s,
        left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ('fixed' === this.cssPosition ? - this.scrollParent.scrollLeft()  : n ? 0 : a.scrollLeft()) * s
      }
    },
    _generatePosition: function (t) {
      var i,
      s,
      a = this.options,
      n = t.pageX,
      r = t.pageY,
      o = 'absolute' !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
      h = /(html|body)/i.test(o[0].tagName);
      return 'relative' !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
      this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (n = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (n = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), a.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / a.grid[1]) * a.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - a.grid[1] : i + a.grid[1] : i, s = this.originalPageX + Math.round((n - this.originalPageX) / a.grid[0]) * a.grid[0], n = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - a.grid[0] : s + a.grid[0] : s)),
      {
        top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ('fixed' === this.cssPosition ? - this.scrollParent.scrollTop()  : h ? 0 : o.scrollTop()),
        left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ('fixed' === this.cssPosition ? - this.scrollParent.scrollLeft()  : h ? 0 : o.scrollLeft())
      }
    },
    _rearrange: function (e, t, i, s) {
      i ? i[0].appendChild(this.placeholder[0])  : t.item[0].parentNode.insertBefore(this.placeholder[0], 'down' === this.direction ? t.item[0] : t.item[0].nextSibling),
      this.counter = this.counter ? ++this.counter : 1;
      var a = this.counter;
      this._delay(function () {
        a === this.counter && this.refreshPositions(!s)
      })
    },
    _clear: function (e, t) {
      this.reverting = !1;
      var i,
      s = [
      ];
      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (i in this._storedCSS) ('auto' === this._storedCSS[i] || 'static' === this._storedCSS[i]) && (this._storedCSS[i] = '');
        this.currentItem.css(this._storedCSS).removeClass('ui-sortable-helper')
      } else this.currentItem.show();
      for (this.fromOutside && !t && s.push(function (e) {
        this._trigger('receive', e, this._uiHash(this.fromOutside))
      }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not('.ui-sortable-helper') [0] && this.domPosition.parent === this.currentItem.parent() [0] || t || s.push(function (e) {
        this._trigger('update', e, this._uiHash())
      }), this !== this.currentContainer && (t || (s.push(function (e) {
        this._trigger('remove', e, this._uiHash())
      }), s.push(function (e) {
        return function (t) {
          e._trigger('receive', t, this._uiHash(this))
        }
      }.call(this, this.currentContainer)), s.push(function (e) {
        return function (t) {
          e._trigger('update', t, this._uiHash(this))
        }
      }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || s.push(function (e) {
        return function (t) {
          e._trigger('deactivate', t, this._uiHash(this))
        }
      }.call(this, this.containers[i])),
      this.containers[i].containerCache.over && (s.push(function (e) {
        return function (t) {
          e._trigger('out', t, this._uiHash(this))
        }
      }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
      if (this.storedCursor && (this.document.find('body').css('cursor', this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css('opacity', this._storedOpacity), this._storedZIndex && this.helper.css('zIndex', 'auto' === this._storedZIndex ? '' : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
        if (!t) {
          for (this._trigger('beforeStop', e, this._uiHash()), i = 0; s.length > i; i++) s[i].call(this, e);
          this._trigger('stop', e, this._uiHash())
        }
        return this.fromOutside = !1,
        !1
      }
      if (t || this._trigger('beforeStop', e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
        for (i = 0; s.length > i; i++) s[i].call(this, e);
        this._trigger('stop', e, this._uiHash())
      }
      return this.fromOutside = !1,
      !0
    },
    _trigger: function () {
      e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    },
    _uiHash: function (t) {
      var i = t || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || e([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: t ? t.element : null
      }
    }
  })
}) (jQuery); (function (e, t) {
  function i() {
    this._curInst = null,
    this._keyEvent = !1,
    this._disabledInputs = [
    ],
    this._datepickerShowing = !1,
    this._inDialog = !1,
    this._mainDivId = 'ui-datepicker-div',
    this._inlineClass = 'ui-datepicker-inline',
    this._appendClass = 'ui-datepicker-append',
    this._triggerClass = 'ui-datepicker-trigger',
    this._dialogClass = 'ui-datepicker-dialog',
    this._disableClass = 'ui-datepicker-disabled',
    this._unselectableClass = 'ui-datepicker-unselectable',
    this._currentClass = 'ui-datepicker-current-day',
    this._dayOverClass = 'ui-datepicker-days-cell-over',
    this.regional = [
    ],
    this.regional[''] = {
      closeText: 'Done',
      prevText: 'Prev',
      nextText: 'Next',
      currentText: 'Today',
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      monthNamesShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      dayNamesShort: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
      ],
      dayNamesMin: [
        'Su',
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa'
      ],
      weekHeader: 'Wk',
      dateFormat: 'mm/dd/yy',
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ''
    },
    this._defaults = {
      showOn: 'focus',
      showAnim: 'fadeIn',
      showOptions: {
      },
      defaultDate: null,
      appendText: '',
      buttonText: '...',
      buttonImage: '',
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: 'c-10:c+10',
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: '+10',
      minDate: null,
      maxDate: null,
      duration: 'fast',
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: '',
      altFormat: '',
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    },
    e.extend(this._defaults, this.regional['']),
    this.dpDiv = a(e('<div id=\'' + this._mainDivId + '\' class=\'ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\'></div>'))
  }
  function a(t) {
    var i = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
    return t.delegate(i, 'mouseout', function () {
      e(this).removeClass('ui-state-hover'),
      - 1 !== this.className.indexOf('ui-datepicker-prev') && e(this).removeClass('ui-datepicker-prev-hover'),
      - 1 !== this.className.indexOf('ui-datepicker-next') && e(this).removeClass('ui-datepicker-next-hover')
    }).delegate(i, 'mouseover', function () {
      e.datepicker._isDisabledDatepicker(n.inline ? t.parent() [0] : n.input[0]) || (e(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover'), e(this).addClass('ui-state-hover'), - 1 !== this.className.indexOf('ui-datepicker-prev') && e(this).addClass('ui-datepicker-prev-hover'), - 1 !== this.className.indexOf('ui-datepicker-next') && e(this).addClass('ui-datepicker-next-hover'))
    })
  }
  function s(t, i) {
    e.extend(t, i);
    for (var a in i) null == i[a] && (t[a] = i[a]);
    return t
  }
  e.extend(e.ui, {
    datepicker: {
      version: '1.10.3'
    }
  });
  var n,
  r = 'datepicker';
  e.extend(i.prototype, {
    markerClassName: 'hasDatepicker',
    maxRows: 4,
    _widgetDatepicker: function () {
      return this.dpDiv
    },
    setDefaults: function (e) {
      return s(this._defaults, e || {
      }),
      this
    },
    _attachDatepicker: function (t, i) {
      var a,
      s,
      n;
      a = t.nodeName.toLowerCase(),
      s = 'div' === a || 'span' === a,
      t.id || (this.uuid += 1, t.id = 'dp' + this.uuid),
      n = this._newInst(e(t), s),
      n.settings = e.extend({
      }, i || {
      }),
      'input' === a ? this._connectDatepicker(t, n)  : s && this._inlineDatepicker(t, n)
    },
    _newInst: function (t, i) {
      var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1');
      return {
        id: s,
        input: t,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i ? a(e('<div class=\'' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\'></div>'))  : this.dpDiv
      }
    },
    _connectDatepicker: function (t, i) {
      var a = e(t);
      i.append = e([]),
      i.trigger = e([]),
      a.hasClass(this.markerClassName) || (this._attachments(a, i), a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, r, i), i.settings.disabled && this._disableDatepicker(t))
    },
    _attachments: function (t, i) {
      var a,
      s,
      n,
      r = this._get(i, 'appendText'),
      o = this._get(i, 'isRTL');
      i.append && i.append.remove(),
      r && (i.append = e('<span class=\'' + this._appendClass + '\'>' + r + '</span>'), t[o ? 'before' : 'after'](i.append)),
      t.unbind('focus', this._showDatepicker),
      i.trigger && i.trigger.remove(),
      a = this._get(i, 'showOn'),
      ('focus' === a || 'both' === a) && t.focus(this._showDatepicker),
      ('button' === a || 'both' === a) && (s = this._get(i, 'buttonText'), n = this._get(i, 'buttonImage'), i.trigger = e(this._get(i, 'buttonImageOnly') ? e('<img/>').addClass(this._triggerClass).attr({
        src: n,
        alt: s,
        title: s
      })  : e('<button type=\'button\'></button>').addClass(this._triggerClass).html(n ? e('<img/>').attr({
        src: n,
        alt: s,
        title: s
      })  : s)), t[o ? 'before' : 'after'](i.trigger), i.trigger.click(function () {
        return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker()  : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0]))  : e.datepicker._showDatepicker(t[0]),
        !1
      }))
    },
    _autoSize: function (e) {
      if (this._get(e, 'autoSize') && !e.inline) {
        var t,
        i,
        a,
        s,
        n = new Date(2009, 11, 20),
        r = this._get(e, 'dateFormat');
        r.match(/[DM]/) && (t = function (e) {
          for (i = 0, a = 0, s = 0; e.length > s; s++) e[s].length > i && (i = e[s].length, a = s);
          return a
        }, n.setMonth(t(this._get(e, r.match(/MM/) ? 'monthNames' : 'monthNamesShort'))), n.setDate(t(this._get(e, r.match(/DD/) ? 'dayNames' : 'dayNamesShort')) + 20 - n.getDay())),
        e.input.attr('size', this._formatDate(e, n).length)
      }
    },
    _inlineDatepicker: function (t, i) {
      var a = e(t);
      a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(i.dpDiv), e.data(t, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css('display', 'block'))
    },
    _dialogDatepicker: function (t, i, a, n, o) {
      var h,
      l,
      u,
      d,
      c,
      p = this._dialogInst;
      return p || (this.uuid += 1, h = 'dp' + this.uuid, this._dialogInput = e('<input type=\'text\' id=\'' + h + '\' style=\'position: absolute; top: -100px; width: 0px;\'/>'), this._dialogInput.keydown(this._doKeyDown), e('body').append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {
      }, e.data(this._dialogInput[0], r, p)),
      s(p.settings, n || {
      }),
      i = i && i.constructor === Date ? this._formatDate(p, i)  : i,
      this._dialogInput.val(i),
      this._pos = o ? o.length ? o : [
        o.pageX,
        o.pageY
      ] : null,
      this._pos || (l = document.documentElement.clientWidth, u = document.documentElement.clientHeight, d = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [
        l / 2 - 100 + d,
        u / 2 - 150 + c
      ]),
      this._dialogInput.css('left', this._pos[0] + 20 + 'px').css('top', this._pos[1] + 'px'),
      p.settings.onSelect = a,
      this._inDialog = !0,
      this.dpDiv.addClass(this._dialogClass),
      this._showDatepicker(this._dialogInput[0]),
      e.blockUI && e.blockUI(this.dpDiv),
      e.data(this._dialogInput[0], r, p),
      this
    },
    _destroyDatepicker: function (t) {
      var i,
      a = e(t),
      s = e.data(t, r);
      a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, r), 'input' === i ? (s.append.remove(), s.trigger.remove(), a.removeClass(this.markerClassName).unbind('focus', this._showDatepicker).unbind('keydown', this._doKeyDown).unbind('keypress', this._doKeyPress).unbind('keyup', this._doKeyUp))  : ('div' === i || 'span' === i) && a.removeClass(this.markerClassName).empty())
    },
    _enableDatepicker: function (t) {
      var i,
      a,
      s = e(t),
      n = e.data(t, r);
      s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), 'input' === i ? (t.disabled = !1, n.trigger.filter('button').each(function () {
        this.disabled = !1
      }).end().filter('img').css({
        opacity: '1.0',
        cursor: ''
      }))  : ('div' === i || 'span' === i) && (a = s.children('.' + this._inlineClass), a.children().removeClass('ui-state-disabled'), a.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
        return e === t ? null : e
      }))
    },
    _disableDatepicker: function (t) {
      var i,
      a,
      s = e(t),
      n = e.data(t, r);
      s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), 'input' === i ? (t.disabled = !0, n.trigger.filter('button').each(function () {
        this.disabled = !0
      }).end().filter('img').css({
        opacity: '0.5',
        cursor: 'default'
      }))  : ('div' === i || 'span' === i) && (a = s.children('.' + this._inlineClass), a.children().addClass('ui-state-disabled'), a.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
        return e === t ? null : e
      }), this._disabledInputs[this._disabledInputs.length] = t)
    },
    _isDisabledDatepicker: function (e) {
      if (!e) return !1;
      for (var t = 0; this._disabledInputs.length > t; t++) if (this._disabledInputs[t] === e) return !0;
      return !1
    },
    _getInst: function (t) {
      try {
        return e.data(t, r)
      } catch (i) {
        throw 'Missing instance data for this datepicker'
      }
    },
    _optionDatepicker: function (i, a, n) {
      var r,
      o,
      h,
      l,
      u = this._getInst(i);
      return 2 === arguments.length && 'string' == typeof a ? 'defaults' === a ? e.extend({
      }, e.datepicker._defaults)  : u ? 'all' === a ? e.extend({
      }, u.settings)  : this._get(u, a)  : null : (r = a || {
      }, 'string' == typeof a && (r = {
      }, r[a] = n), u && (this._curInst === u && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), h = this._getMinMaxDate(u, 'min'), l = this._getMinMaxDate(u, 'max'), s(u.settings, r), null !== h && r.dateFormat !== t && r.minDate === t && (u.settings.minDate = this._formatDate(u, h)), null !== l && r.dateFormat !== t && r.maxDate === t && (u.settings.maxDate = this._formatDate(u, l)), 'disabled' in r && (r.disabled ? this._disableDatepicker(i)  : this._enableDatepicker(i)), this._attachments(e(i), u), this._autoSize(u), this._setDate(u, o), this._updateAlternate(u), this._updateDatepicker(u)), t)
    },
    _changeDatepicker: function (e, t, i) {
      this._optionDatepicker(e, t, i)
    },
    _refreshDatepicker: function (e) {
      var t = this._getInst(e);
      t && this._updateDatepicker(t)
    },
    _setDateDatepicker: function (e, t) {
      var i = this._getInst(e);
      i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
    },
    _getDateDatepicker: function (e, t) {
      var i = this._getInst(e);
      return i && !i.inline && this._setDateFromField(i, t),
      i ? this._getDate(i)  : null
    },
    _doKeyDown: function (t) {
      var i,
      a,
      s,
      n = e.datepicker._getInst(t.target),
      r = !0,
      o = n.dpDiv.is('.ui-datepicker-rtl');
      if (n._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
        case 9:
          e.datepicker._hideDatepicker(),
          r = !1;
          break;
        case 13:
          return s = e('td.' + e.datepicker._dayOverClass + ':not(.' + e.datepicker._currentClass + ')', n.dpDiv),
          s[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]),
          i = e.datepicker._get(n, 'onSelect'),
          i ? (a = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [
            a,
            n
          ]))  : e.datepicker._hideDatepicker(),
          !1;
        case 27:
          e.datepicker._hideDatepicker();
          break;
        case 33:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? - e.datepicker._get(n, 'stepBigMonths')  : - e.datepicker._get(n, 'stepMonths'), 'M');
          break;
        case 34:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? + e.datepicker._get(n, 'stepBigMonths')  : + e.datepicker._get(n, 'stepMonths'), 'M');
          break;
        case 35:
          (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target),
          r = t.ctrlKey || t.metaKey;
          break;
        case 36:
          (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target),
          r = t.ctrlKey || t.metaKey;
          break;
        case 37:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : - 1, 'D'),
          r = t.ctrlKey || t.metaKey,
          t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? - e.datepicker._get(n, 'stepBigMonths')  : - e.datepicker._get(n, 'stepMonths'), 'M');
          break;
        case 38:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, - 7, 'D'),
          r = t.ctrlKey || t.metaKey;
          break;
        case 39:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? - 1 : 1, 'D'),
          r = t.ctrlKey || t.metaKey,
          t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? + e.datepicker._get(n, 'stepBigMonths')  : + e.datepicker._get(n, 'stepMonths'), 'M');
          break;
        case 40:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, 'D'),
          r = t.ctrlKey || t.metaKey;
          break;
        default:
          r = !1
      } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this)  : r = !1;
      r && (t.preventDefault(), t.stopPropagation())
    },
    _doKeyPress: function (i) {
      var a,
      s,
      n = e.datepicker._getInst(i.target);
      return e.datepicker._get(n, 'constrainInput') ? (a = e.datepicker._possibleChars(e.datepicker._get(n, 'dateFormat')), s = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || ' ' > s || !a || a.indexOf(s) > - 1)  : t
    },
    _doKeyUp: function (t) {
      var i,
      a = e.datepicker._getInst(t.target);
      if (a.input.val() !== a.lastVal) try {
        i = e.datepicker.parseDate(e.datepicker._get(a, 'dateFormat'), a.input ? a.input.val()  : null, e.datepicker._getFormatConfig(a)),
        i && (e.datepicker._setDateFromField(a), e.datepicker._updateAlternate(a), e.datepicker._updateDatepicker(a))
      } catch (s) {
      }
      return !0
    },
    _showDatepicker: function (t) {
      if (t = t.target || t, 'input' !== t.nodeName.toLowerCase() && (t = e('input', t.parentNode) [0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
        var i,
        a,
        n,
        r,
        o,
        h,
        l;
        i = e.datepicker._getInst(t),
        e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),
        a = e.datepicker._get(i, 'beforeShow'),
        n = a ? a.apply(t, [
          t,
          i
        ])  : {
        },
        n !== !1 && (s(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ''), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function () {
          return r |= 'fixed' === e(this).css('position'),
          !r
        }), o = {
          left: e.datepicker._pos[0],
          top: e.datepicker._pos[1]
        }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
          position: 'absolute',
          display: 'block',
          top: '-1000px'
        }), e.datepicker._updateDatepicker(i), o = e.datepicker._checkOffset(i, o, r), i.dpDiv.css({
          position: e.datepicker._inDialog && e.blockUI ? 'static' : r ? 'fixed' : 'absolute',
          display: 'none',
          left: o.left + 'px',
          top: o.top + 'px'
        }), i.inline || (h = e.datepicker._get(i, 'showAnim'), l = e.datepicker._get(i, 'duration'), i.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[h] ? i.dpDiv.show(h, e.datepicker._get(i, 'showOptions'), l)  : i.dpDiv[h || 'show'](h ? l : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
      }
    },
    _updateDatepicker: function (t) {
      this.maxRows = 4,
      n = t,
      t.dpDiv.empty().append(this._generateHTML(t)),
      this._attachHandlers(t),
      t.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();
      var i,
      a = this._getNumberOfMonths(t),
      s = a[1],
      r = 17;
      t.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width(''),
      s > 1 && t.dpDiv.addClass('ui-datepicker-multi-' + s).css('width', r * s + 'em'),
      t.dpDiv[(1 !== a[0] || 1 !== a[1] ? 'add' : 'remove') + 'Class']('ui-datepicker-multi'),
      t.dpDiv[(this._get(t, 'isRTL') ? 'add' : 'remove') + 'Class']('ui-datepicker-rtl'),
      t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(),
      t.yearshtml && (i = t.yearshtml, setTimeout(function () {
        i === t.yearshtml && t.yearshtml && t.dpDiv.find('select.ui-datepicker-year:first').replaceWith(t.yearshtml),
        i = t.yearshtml = null
      }, 0))
    },
    _shouldFocusInput: function (e) {
      return e.input && e.input.is(':visible') && !e.input.is(':disabled') && !e.input.is(':focus')
    },
    _checkOffset: function (t, i, a) {
      var s = t.dpDiv.outerWidth(),
      n = t.dpDiv.outerHeight(),
      r = t.input ? t.input.outerWidth()  : 0,
      o = t.input ? t.input.outerHeight()  : 0,
      h = document.documentElement.clientWidth + (a ? 0 : e(document).scrollLeft()),
      l = document.documentElement.clientHeight + (a ? 0 : e(document).scrollTop());
      return i.left -= this._get(t, 'isRTL') ? s - r : 0,
      i.left -= a && i.left === t.input.offset().left ? e(document).scrollLeft()  : 0,
      i.top -= a && i.top === t.input.offset().top + o ? e(document).scrollTop()  : 0,
      i.left -= Math.min(i.left, i.left + s > h && h > s ? Math.abs(i.left + s - h)  : 0),
      i.top -= Math.min(i.top, i.top + n > l && l > n ? Math.abs(n + o)  : 0),
      i
    },
    _findPos: function (t) {
      for (var i, a = this._getInst(t), s = this._get(a, 'isRTL'); t && ('hidden' === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t)); ) t = t[s ? 'previousSibling' : 'nextSibling'];
      return i = e(t).offset(),
      [
        i.left,
        i.top
      ]
    },
    _hideDatepicker: function (t) {
      var i,
      a,
      s,
      n,
      o = this._curInst;
      !o || t && o !== e.data(t, r) || this._datepickerShowing && (i = this._get(o, 'showAnim'), a = this._get(o, 'duration'), s = function () {
        e.datepicker._tidyDialog(o)
      }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, 'showOptions'), a, s)  : o.dpDiv['slideDown' === i ? 'slideUp' : 'fadeIn' === i ? 'fadeOut' : 'hide'](i ? a : null, s), i || s(), this._datepickerShowing = !1, n = this._get(o, 'onClose'), n && n.apply(o.input ? o.input[0] : null, [
        o.input ? o.input.val()  : '',
        o
      ]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: 'absolute',
        left: '0',
        top: '-100px'
      }), e.blockUI && (e.unblockUI(), e('body').append(this.dpDiv))), this._inDialog = !1)
    },
    _tidyDialog: function (e) {
      e.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar')
    },
    _checkExternalClick: function (t) {
      if (e.datepicker._curInst) {
        var i = e(t.target),
        a = e.datepicker._getInst(i[0]);
        (i[0].id !== e.datepicker._mainDivId && 0 === i.parents('#' + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest('.' + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== a) && e.datepicker._hideDatepicker()
      }
    },
    _adjustDate: function (t, i, a) {
      var s = e(t),
      n = this._getInst(s[0]);
      this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, i + ('M' === a ? this._get(n, 'showCurrentAtPos')  : 0), a), this._updateDatepicker(n))
    },
    _gotoToday: function (t) {
      var i,
      a = e(t),
      s = this._getInst(a[0]);
      this._get(s, 'gotoCurrent') && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear)  : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()),
      this._notifyChange(s),
      this._adjustDate(a)
    },
    _selectMonthYear: function (t, i, a) {
      var s = e(t),
      n = this._getInst(s[0]);
      n['selected' + ('M' === a ? 'Month' : 'Year')] = n['draw' + ('M' === a ? 'Month' : 'Year')] = parseInt(i.options[i.selectedIndex].value, 10),
      this._notifyChange(n),
      this._adjustDate(s)
    },
    _selectDay: function (t, i, a, s) {
      var n,
      r = e(t);
      e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e('a', s).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = a, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
    },
    _clearDate: function (t) {
      var i = e(t);
      this._selectDate(i, '')
    },
    _selectDate: function (t, i) {
      var a,
      s = e(t),
      n = this._getInst(s[0]);
      i = null != i ? i : this._formatDate(n),
      n.input && n.input.val(i),
      this._updateAlternate(n),
      a = this._get(n, 'onSelect'),
      a ? a.apply(n.input ? n.input[0] : null, [
        i,
        n
      ])  : n.input && n.input.trigger('change'),
      n.inline ? this._updateDatepicker(n)  : (this._hideDatepicker(), this._lastInput = n.input[0], 'object' != typeof n.input[0] && n.input.focus(), this._lastInput = null)
    },
    _updateAlternate: function (t) {
      var i,
      a,
      s,
      n = this._get(t, 'altField');
      n && (i = this._get(t, 'altFormat') || this._get(t, 'dateFormat'), a = this._getDate(t), s = this.formatDate(i, a, this._getFormatConfig(t)), e(n).each(function () {
        e(this).val(s)
      }))
    },
    noWeekends: function (e) {
      var t = e.getDay();
      return [t > 0 && 6 > t,
      '']
    },
    iso8601Week: function (e) {
      var t,
      i = new Date(e.getTime());
      return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
      t = i.getTime(),
      i.setMonth(0),
      i.setDate(1),
      Math.floor(Math.round((t - i) / 86400000) / 7) + 1
    },
    parseDate: function (i, a, s) {
      if (null == i || null == a) throw 'Invalid arguments';
      if (a = 'object' == typeof a ? '' + a : a + '', '' === a) return null;
      var n,
      r,
      o,
      h,
      l = 0,
      u = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
      d = 'string' != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10),
      c = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
      p = (s ? s.dayNames : null) || this._defaults.dayNames,
      m = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
      f = (s ? s.monthNames : null) || this._defaults.monthNames,
      g = - 1,
      v = - 1,
      y = - 1,
      b = - 1,
      _ = !1,
      k = function (e) {
        var t = i.length > n + 1 && i.charAt(n + 1) === e;
        return t && n++,
        t
      },
      x = function (e) {
        var t = k(e),
        i = '@' === e ? 14 : '!' === e ? 20 : 'y' === e && t ? 4 : 'o' === e ? 3 : 2,
        s = RegExp('^\\d{1,' + i + '}'),
        n = a.substring(l).match(s);
        if (!n) throw 'Missing number at position ' + l;
        return l += n[0].length,
        parseInt(n[0], 10)
      },
      D = function (i, s, n) {
        var r = - 1,
        o = e.map(k(i) ? n : s, function (e, t) {
          return [[t,
          e]]
        }).sort(function (e, t) {
          return - (e[1].length - t[1].length)
        });
        if (e.each(o, function (e, i) {
          var s = i[1];
          return a.substr(l, s.length).toLowerCase() === s.toLowerCase() ? (r = i[0], l += s.length, !1)  : t
        }), - 1 !== r) return r + 1;
        throw 'Unknown name at position ' + l
      },
      w = function () {
        if (a.charAt(l) !== i.charAt(n)) throw 'Unexpected literal at position ' + l;
        l++
      };
      for (n = 0; i.length > n; n++) if (_) '\'' !== i.charAt(n) || k('\'') ? w()  : _ = !1;
       else switch (i.charAt(n)) {
        case 'd':
          y = x('d');
          break;
        case 'D':
          D('D', c, p);
          break;
        case 'o':
          b = x('o');
          break;
        case 'm':
          v = x('m');
          break;
        case 'M':
          v = D('M', m, f);
          break;
        case 'y':
          g = x('y');
          break;
        case '@':
          h = new Date(x('@')),
          g = h.getFullYear(),
          v = h.getMonth() + 1,
          y = h.getDate();
          break;
        case '!':
          h = new Date((x('!') - this._ticksTo1970) / 10000),
          g = h.getFullYear(),
          v = h.getMonth() + 1,
          y = h.getDate();
          break;
        case '\'':
          k('\'') ? w()  : _ = !0;
          break;
        default:
          w()
      }
      if (a.length > l && (o = a.substr(l), !/^\s+/.test(o))) throw 'Extra/unparsed characters found in date: ' + o;
      if ( - 1 === g ? g = (new Date).getFullYear()  : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d >= g ? 0 : - 100)), b > - 1) for (v = 1, y = b; ; ) {
        if (r = this._getDaysInMonth(g, v - 1), r >= y) break;
        v++,
        y -= r
    }
    if (h = this._daylightSavingAdjust(new Date(g, v - 1, y)), h.getFullYear() !== g || h.getMonth() + 1 !== v || h.getDate() !== y) throw 'Invalid date';
    return h
  },
  ATOM: 'yy-mm-dd',
  COOKIE: 'D, dd M yy',
  ISO_8601: 'yy-mm-dd',
  RFC_822: 'D, d M y',
  RFC_850: 'DD, dd-M-y',
  RFC_1036: 'D, d M y',
  RFC_1123: 'D, d M yy',
  RFC_2822: 'D, d M yy',
  RSS: 'D, d M y',
  TICKS: '!',
  TIMESTAMP: '@',
  W3C: 'yy-mm-dd',
  _ticksTo1970: 10000000 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
  formatDate: function (e, t, i) {
    if (!t) return '';
    var a,
    s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
    n = (i ? i.dayNames : null) || this._defaults.dayNames,
    r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
    o = (i ? i.monthNames : null) || this._defaults.monthNames,
    h = function (t) {
      var i = e.length > a + 1 && e.charAt(a + 1) === t;
      return i && a++,
      i
    },
    l = function (e, t, i) {
      var a = '' + t;
      if (h(e)) for (; i > a.length; ) a = '0' + a;
      return a
    },
    u = function (e, t, i, a) {
      return h(e) ? a[t] : i[t]
    },
    d = '',
    c = !1;
    if (t) for (a = 0; e.length > a; a++) if (c) '\'' !== e.charAt(a) || h('\'') ? d += e.charAt(a)  : c = !1;
     else switch (e.charAt(a)) {
      case 'd':
        d += l('d', t.getDate(), 2);
        break;
      case 'D':
        d += u('D', t.getDay(), s, n);
        break;
      case 'o':
        d += l('o', Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 86400000), 3);
        break;
      case 'm':
        d += l('m', t.getMonth() + 1, 2);
        break;
      case 'M':
        d += u('M', t.getMonth(), r, o);
        break;
      case 'y':
        d += h('y') ? t.getFullYear()  : (10 > t.getYear() % 100 ? '0' : '') + t.getYear() % 100;
        break;
      case '@':
        d += t.getTime();
        break;
      case '!':
        d += 10000 * t.getTime() + this._ticksTo1970;
        break;
      case '\'':
        h('\'') ? d += '\'' : c = !0;
        break;
      default:
        d += e.charAt(a)
    }
    return d
  },
  _possibleChars: function (e) {
    var t,
    i = '',
    a = !1,
    s = function (i) {
      var a = e.length > t + 1 && e.charAt(t + 1) === i;
      return a && t++,
      a
    };
    for (t = 0; e.length > t; t++) if (a) '\'' !== e.charAt(t) || s('\'') ? i += e.charAt(t)  : a = !1;
     else switch (e.charAt(t)) {
      case 'd':
      case 'm':
      case 'y':
      case '@':
        i += '0123456789';
        break;
      case 'D':
      case 'M':
        return null;
      case '\'':
        s('\'') ? i += '\'' : a = !0;
        break;
      default:
        i += e.charAt(t)
    }
    return i
  },
  _get: function (e, i) {
    return e.settings[i] !== t ? e.settings[i] : this._defaults[i]
  },
  _setDateFromField: function (e, t) {
    if (e.input.val() !== e.lastVal) {
      var i = this._get(e, 'dateFormat'),
      a = e.lastVal = e.input ? e.input.val()  : null,
      s = this._getDefaultDate(e),
      n = s,
      r = this._getFormatConfig(e);
      try {
        n = this.parseDate(i, a, r) || s
      } catch (o) {
        a = t ? '' : a
      }
      e.selectedDay = n.getDate(),
      e.drawMonth = e.selectedMonth = n.getMonth(),
      e.drawYear = e.selectedYear = n.getFullYear(),
      e.currentDay = a ? n.getDate()  : 0,
      e.currentMonth = a ? n.getMonth()  : 0,
      e.currentYear = a ? n.getFullYear()  : 0,
      this._adjustInstDate(e)
    }
  },
  _getDefaultDate: function (e) {
    return this._restrictMinMax(e, this._determineDate(e, this._get(e, 'defaultDate'), new Date))
  },
  _determineDate: function (t, i, a) {
    var s = function (e) {
      var t = new Date;
      return t.setDate(t.getDate() + e),
      t
    },
    n = function (i) {
      try {
        return e.datepicker.parseDate(e.datepicker._get(t, 'dateFormat'), i, e.datepicker._getFormatConfig(t))
      } catch (a) {
      }
      for (var s = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t)  : null) || new Date, n = s.getFullYear(), r = s.getMonth(), o = s.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l; ) {
        switch (l[2] || 'd') {
          case 'd':
          case 'D':
            o += parseInt(l[1], 10);
            break;
          case 'w':
          case 'W':
            o += 7 * parseInt(l[1], 10);
            break;
          case 'm':
          case 'M':
            r += parseInt(l[1], 10),
            o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
            break;
          case 'y':
          case 'Y':
            n += parseInt(l[1], 10),
            o = Math.min(o, e.datepicker._getDaysInMonth(n, r))
        }
        l = h.exec(i)
      }
      return new Date(n, r, o)
    },
    r = null == i || '' === i ? a : 'string' == typeof i ? n(i)  : 'number' == typeof i ? isNaN(i) ? a : s(i)  : new Date(i.getTime());
    return r = r && 'Invalid Date' == '' + r ? a : r,
    r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)),
    this._daylightSavingAdjust(r)
  },
  _daylightSavingAdjust: function (e) {
    return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e)  : null
  },
  _setDate: function (e, t, i) {
    var a = !t,
    s = e.selectedMonth,
    n = e.selectedYear,
    r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
    e.selectedDay = e.currentDay = r.getDate(),
    e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(),
    e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(),
    s === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e),
    this._adjustInstDate(e),
    e.input && e.input.val(a ? '' : this._formatDate(e))
  },
  _getDate: function (e) {
    var t = !e.currentYear || e.input && '' === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
    return t
  },
  _attachHandlers: function (t) {
    var i = this._get(t, 'stepMonths'),
    a = '#' + t.id.replace(/\\\\/g, '\\');
    t.dpDiv.find('[data-handler]').map(function () {
      var t = {
        prev: function () {
          e.datepicker._adjustDate(a, - i, 'M')
        },
        next: function () {
          e.datepicker._adjustDate(a, + i, 'M')
        },
        hide: function () {
          e.datepicker._hideDatepicker()
        },
        today: function () {
          e.datepicker._gotoToday(a)
        },
        selectDay: function () {
          return e.datepicker._selectDay(a, + this.getAttribute('data-month'), + this.getAttribute('data-year'), this),
          !1
        },
        selectMonth: function () {
          return e.datepicker._selectMonthYear(a, this, 'M'),
          !1
        },
        selectYear: function () {
          return e.datepicker._selectMonthYear(a, this, 'Y'),
          !1
        }
      };
      e(this).bind(this.getAttribute('data-event'), t[this.getAttribute('data-handler')])
    })
  },
  _generateHTML: function (e) {
    var t,
    i,
    a,
    s,
    n,
    r,
    o,
    h,
    l,
    u,
    d,
    c,
    p,
    m,
    f,
    g,
    v,
    y,
    b,
    _,
    k,
    x,
    D,
    w,
    T,
    M,
    S,
    N,
    C,
    A,
    P,
    I,
    F,
    j,
    H,
    E,
    z,
    L,
    O,
    R = new Date,
    W = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
    Y = this._get(e, 'isRTL'),
    J = this._get(e, 'showButtonPanel'),
    $ = this._get(e, 'hideIfNoPrevNext'),
    Q = this._get(e, 'navigationAsDateFormat'),
    B = this._getNumberOfMonths(e),
    K = this._get(e, 'showCurrentAtPos'),
    V = this._get(e, 'stepMonths'),
    U = 1 !== B[0] || 1 !== B[1],
    G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay)  : new Date(9999, 9, 9)),
    q = this._getMinMaxDate(e, 'min'),
    X = this._getMinMaxDate(e, 'max'),
    Z = e.drawMonth - K,
    et = e.drawYear;
    if (0 > Z && (Z += 12, et--), X) for (t = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - B[0] * B[1] + 1, X.getDate())), t = q && q > t ? q : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t; ) Z--,
    0 > Z && (Z = 11, et--);
    for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, 'prevText'), i = Q ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - V, 1)), this._getFormatConfig(e))  : i, a = this._canAdjustMonth(e, - 1, et, Z) ? '<a class=\'ui-datepicker-prev ui-corner-all\' data-handler=\'prev\' data-event=\'click\' title=\'' + i + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (Y ? 'e' : 'w') + '\'>' + i + '</span></a>' : $ ? '' : '<a class=\'ui-datepicker-prev ui-corner-all ui-state-disabled\' title=\'' + i + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (Y ? 'e' : 'w') + '\'>' + i + '</span></a>', s = this._get(e, 'nextText'), s = Q ? this.formatDate(s, this._daylightSavingAdjust(new Date(et, Z + V, 1)), this._getFormatConfig(e))  : s, n = this._canAdjustMonth(e, 1, et, Z) ? '<a class=\'ui-datepicker-next ui-corner-all\' data-handler=\'next\' data-event=\'click\' title=\'' + s + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (Y ? 'w' : 'e') + '\'>' + s + '</span></a>' : $ ? '' : '<a class=\'ui-datepicker-next ui-corner-all ui-state-disabled\' title=\'' + s + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (Y ? 'w' : 'e') + '\'>' + s + '</span></a>', r = this._get(e, 'currentText'), o = this._get(e, 'gotoCurrent') && e.currentDay ? G : W, r = Q ? this.formatDate(r, o, this._getFormatConfig(e))  : r, h = e.inline ? '' : '<button type=\'button\' class=\'ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all\' data-handler=\'hide\' data-event=\'click\'>' + this._get(e, 'closeText') + '</button>', l = J ? '<div class=\'ui-datepicker-buttonpane ui-widget-content\'>' + (Y ? h : '') + (this._isInRange(e, o) ? '<button type=\'button\' class=\'ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all\' data-handler=\'today\' data-event=\'click\'>' + r + '</button>' : '') + (Y ? '' : h) + '</div>' : '', u = parseInt(this._get(e, 'firstDay'), 10), u = isNaN(u) ? 0 : u, d = this._get(e, 'showWeek'), c = this._get(e, 'dayNames'), p = this._get(e, 'dayNamesMin'), m = this._get(e, 'monthNames'), f = this._get(e, 'monthNamesShort'), g = this._get(e, 'beforeShowDay'), v = this._get(e, 'showOtherMonths'), y = this._get(e, 'selectOtherMonths'), b = this._getDefaultDate(e), _ = '', x = 0; B[0] > x; x++) {
      for (D = '', this.maxRows = 4, w = 0; B[1] > w; w++) {
        if (T = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), M = ' ui-corner-all', S = '', U) {
          if (S += '<div class=\'ui-datepicker-group', B[1] > 1) switch (w) {
            case 0:
              S += ' ui-datepicker-group-first',
              M = ' ui-corner-' + (Y ? 'right' : 'left');
              break;
            case B[1] - 1:
              S += ' ui-datepicker-group-last',
              M = ' ui-corner-' + (Y ? 'left' : 'right');
              break;
            default:
              S += ' ui-datepicker-group-middle',
              M = ''
          }
          S += '\'>'
        }
        for (S += '<div class=\'ui-datepicker-header ui-widget-header ui-helper-clearfix' + M + '\'>' + (/all|left/.test(M) && 0 === x ? Y ? n : a : '') + (/all|right/.test(M) && 0 === x ? Y ? a : n : '') + this._generateMonthYearHeader(e, Z, et, q, X, x > 0 || w > 0, m, f) + '</div><table class=\'ui-datepicker-calendar\'><thead>' + '<tr>', N = d ? '<th class=\'ui-datepicker-week-col\'>' + this._get(e, 'weekHeader') + '</th>' : '', k = 0; 7 > k; k++) C = (k + u) % 7,
        N += '<th' + ((k + u + 6) % 7 >= 5 ? ' class=\'ui-datepicker-week-end\'' : '') + '>' + '<span title=\'' + c[C] + '\'>' + p[C] + '</span></th>';
        for (S += N + '</tr></thead><tbody>', A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), P = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil((P + A) / 7), F = U ? this.maxRows > I ? this.maxRows : I : I, this.maxRows = F, j = this._daylightSavingAdjust(new Date(et, Z, 1 - P)), H = 0; F > H; H++) {
          for (S += '<tr>', E = d ? '<td class=\'ui-datepicker-week-col\'>' + this._get(e, 'calculateWeek') (j) + '</td>' : '', k = 0; 7 > k; k++) z = g ? g.apply(e.input ? e.input[0] : null, [
            j
          ])  : [
            !0,
            ''
          ],
          L = j.getMonth() !== Z,
          O = L && !y || !z[0] || q && q > j || X && j > X,
          E += '<td class=\'' + ((k + u + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + (L ? ' ui-datepicker-other-month' : '') + (j.getTime() === T.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === j.getTime() && b.getTime() === T.getTime() ? ' ' + this._dayOverClass : '') + (O ? ' ' + this._unselectableClass + ' ui-state-disabled' : '') + (L && !v ? '' : ' ' + z[1] + (j.getTime() === G.getTime() ? ' ' + this._currentClass : '') + (j.getTime() === W.getTime() ? ' ui-datepicker-today' : '')) + '\'' + (L && !v || !z[2] ? '' : ' title=\'' + z[2].replace(/'/g, '&#39;') + '\'') + (O ? '' : ' data-handler=\'selectDay\' data-event=\'click\' data-month=\'' + j.getMonth() + '\' data-year=\'' + j.getFullYear() + '\'') + '>' + (L && !v ? '&#xa0;' : O ? '<span class=\'ui-state-default\'>' + j.getDate() + '</span>' : '<a class=\'ui-state-default' + (j.getTime() === W.getTime() ? ' ui-state-highlight' : '') + (j.getTime() === G.getTime() ? ' ui-state-active' : '') + (L ? ' ui-priority-secondary' : '') + '\' href=\'#\'>' + j.getDate() + '</a>') + '</td>',
          j.setDate(j.getDate() + 1),
          j = this._daylightSavingAdjust(j);
          S += E + '</tr>'
        }
        Z++,
        Z > 11 && (Z = 0, et++),
        S += '</tbody></table>' + (U ? '</div>' + (B[0] > 0 && w === B[1] - 1 ? '<div class=\'ui-datepicker-row-break\'></div>' : '')  : ''),
        D += S
      }
      _ += D
    }
    return _ += l,
    e._keyEvent = !1,
    _
  },
  _generateMonthYearHeader: function (e, t, i, a, s, n, r, o) {
    var h,
    l,
    u,
    d,
    c,
    p,
    m,
    f,
    g = this._get(e, 'changeMonth'),
    v = this._get(e, 'changeYear'),
    y = this._get(e, 'showMonthAfterYear'),
    b = '<div class=\'ui-datepicker-title\'>',
    _ = '';
    if (n || !g) _ += '<span class=\'ui-datepicker-month\'>' + r[t] + '</span>';
     else {
      for (h = a && a.getFullYear() === i, l = s && s.getFullYear() === i, _ += '<select class=\'ui-datepicker-month\' data-handler=\'selectMonth\' data-event=\'change\'>', u = 0; 12 > u; u++) (!h || u >= a.getMonth()) && (!l || s.getMonth() >= u) && (_ += '<option value=\'' + u + '\'' + (u === t ? ' selected=\'selected\'' : '') + '>' + o[u] + '</option>');
      _ += '</select>'
    }
    if (y || (b += _ + (!n && g && v ? '' : '&#xa0;')), !e.yearshtml) if (e.yearshtml = '', n || !v) b += '<span class=\'ui-datepicker-year\'>' + i + '</span>';
     else {
      for (d = this._get(e, 'yearRange').split(':'), c = (new Date).getFullYear(), p = function (e) {
        var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10)  : e.match(/[+\-].*/) ? c + parseInt(e, 10)  : parseInt(e, 10);
        return isNaN(t) ? c : t
      }, m = p(d[0]), f = Math.max(m, p(d[1] || '')), m = a ? Math.max(m, a.getFullYear())  : m, f = s ? Math.min(f, s.getFullYear())  : f, e.yearshtml += '<select class=\'ui-datepicker-year\' data-handler=\'selectYear\' data-event=\'change\'>'; f >= m; m++) e.yearshtml += '<option value=\'' + m + '\'' + (m === i ? ' selected=\'selected\'' : '') + '>' + m + '</option>';
      e.yearshtml += '</select>',
      b += e.yearshtml,
      e.yearshtml = null
    }
    return b += this._get(e, 'yearSuffix'),
    y && (b += (!n && g && v ? '' : '&#xa0;') + _),
    b += '</div>'
  },
  _adjustInstDate: function (e, t, i) {
    var a = e.drawYear + ('Y' === i ? t : 0),
    s = e.drawMonth + ('M' === i ? t : 0),
    n = Math.min(e.selectedDay, this._getDaysInMonth(a, s)) + ('D' === i ? t : 0),
    r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(a, s, n)));
    e.selectedDay = r.getDate(),
    e.drawMonth = e.selectedMonth = r.getMonth(),
    e.drawYear = e.selectedYear = r.getFullYear(),
    ('M' === i || 'Y' === i) && this._notifyChange(e)
  },
  _restrictMinMax: function (e, t) {
    var i = this._getMinMaxDate(e, 'min'),
    a = this._getMinMaxDate(e, 'max'),
    s = i && i > t ? i : t;
    return a && s > a ? a : s
  },
  _notifyChange: function (e) {
    var t = this._get(e, 'onChangeMonthYear');
    t && t.apply(e.input ? e.input[0] : null, [
      e.selectedYear,
      e.selectedMonth + 1,
      e
    ])
  },
  _getNumberOfMonths: function (e) {
    var t = this._get(e, 'numberOfMonths');
    return null == t ? [
      1,
      1
    ] : 'number' == typeof t ? [
      1,
      t
    ] : t
  },
  _getMinMaxDate: function (e, t) {
    return this._determineDate(e, this._get(e, t + 'Date'), null)
  },
  _getDaysInMonth: function (e, t) {
    return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
  },
  _getFirstDayOfMonth: function (e, t) {
    return new Date(e, t, 1).getDay()
  },
  _canAdjustMonth: function (e, t, i, a) {
    var s = this._getNumberOfMonths(e),
    n = this._daylightSavingAdjust(new Date(i, a + (0 > t ? t : s[0] * s[1]), 1));
    return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())),
    this._isInRange(e, n)
  },
  _isInRange: function (e, t) {
    var i,
    a,
    s = this._getMinMaxDate(e, 'min'),
    n = this._getMinMaxDate(e, 'max'),
    r = null,
    o = null,
    h = this._get(e, 'yearRange');
    return h && (i = h.split(':'), a = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += a), i[1].match(/[+\-].*/) && (o += a)),
    (!s || t.getTime() >= s.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear())
  },
  _getFormatConfig: function (e) {
    var t = this._get(e, 'shortYearCutoff');
    return t = 'string' != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
    {
      shortYearCutoff: t,
      dayNamesShort: this._get(e, 'dayNamesShort'),
      dayNames: this._get(e, 'dayNames'),
      monthNamesShort: this._get(e, 'monthNamesShort'),
      monthNames: this._get(e, 'monthNames')
    }
  },
  _formatDate: function (e, t, i, a) {
    t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
    var s = t ? 'object' == typeof t ? t : this._daylightSavingAdjust(new Date(a, i, t))  : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
    return this.formatDate(this._get(e, 'dateFormat'), s, this._getFormatConfig(e))
  }
}),
e.fn.datepicker = function (t) {
  if (!this.length) return this;
  e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0),
  0 === e('#' + e.datepicker._mainDivId).length && e('body').append(e.datepicker.dpDiv);
  var i = Array.prototype.slice.call(arguments, 1);
  return 'string' != typeof t || 'isDisabled' !== t && 'getDate' !== t && 'widget' !== t ? 'option' === t && 2 === arguments.length && 'string' == typeof arguments[1] ? e.datepicker['_' + t + 'Datepicker'].apply(e.datepicker, [
    this[0]
  ].concat(i))  : this.each(function () {
    'string' == typeof t ? e.datepicker['_' + t + 'Datepicker'].apply(e.datepicker, [
      this
    ].concat(i))  : e.datepicker._attachDatepicker(this, t)
  })  : e.datepicker['_' + t + 'Datepicker'].apply(e.datepicker, [
    this[0]
  ].concat(i))
},
e.datepicker = new i,
e.datepicker.initialized = !1,
e.datepicker.uuid = (new Date).getTime(),
e.datepicker.version = '1.10.3'
}) (jQuery);
