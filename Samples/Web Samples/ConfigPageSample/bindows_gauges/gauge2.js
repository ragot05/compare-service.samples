/*
 * Bindows Gauges Library version 1.1beta3
 * http://www.bindows.net/
 * Copyright � 2003-2013 MB Technologies
 *
 * Bindows(TM) and the Bindows Gauges Library belong to MB Technologies (Georgia, USA). All rights reserved.
 *
 * The package is provided FREE of charge, without any warranty and without any commitment for support.
 */
function BiSvgComponent() {
   if (_biInPrototype) return;
   BiComponent.call(this);
}
_p = _biExtend(BiSvgComponent, BiComponent, "BiSvgComponent");
_p._tagName = "svg";
_p._create = function (oDocument) {
   this._document = oDocument || document;
   var el = this._element = this._document.createElementNS("http://www.w3.org/2000/svg", this._tagName);
   el._biComponent = this;
   this._setHtmlAttributes();
   this._setHtmlProperties();
   this._setCssProperties();
   if (BiBrowserCheck.ie) {
      el.onscroll = BiComponent.__oninlineevent;
   } else {
      el.onscroll = el.onfocus = BiComponent.__oninlineevent;
   }
};
_p._setHtmlProperties = function () {
   var el = this._element;
   var hp = this._htmlProperties;
   for (var p in hp) {
      if (p.indexOf("xlink:") == 0) this._element.setAttributeNS("http://www.w3.org/1999/xlink", p.split(':')[1], hp[p]);
      else el.setAttribute(p, hp[p]);
   }
};
_p.setHtmlProperty = function (sProp, oValue) {
   this._htmlProperties[sProp] = oValue;
   if (this._created) {
      if (sProp.indexOf("xlink:") == 0) this._element.setAttributeNS("http://www.w3.org/1999/xlink", sProp.split(':')[1]);
      else this._element.setAttribute(sProp, oValue);
   }
};
_p.setViewBox = function (minX, minY, w, h) {
   this.setHtmlProperty("viewBox", "" + minX + " " + minY + " " + w + " " + h);
};
_p.calculateFlippedY = function (n) {
   return this._calcConstant - n;
};
_p.setLocation = function (left, top) {
   this.setHtmlProperty("x", left);
   this.setHtmlProperty("y", top);
};
_p.setLeft = function (left) {
   this.setHtmlProperty("x", left);
};
_p.setTop = function (top) {
   this.setHtmlProperty("y", top);
};
_p.setSize = function (w, h) {
   this.setWidth(w);
   this.setHeight(h);
};
_p.setWidth = function (w) {
   this._width = w;
   this.setHtmlProperty("width", w);
};
_p.setHeight = function (h) {
   this._height = h;
   this.setHtmlProperty("height", h);
};
_p.getWidth = function () {
   return this._width;
};
_p.getHeight = function (h) {
   return this._height;
};
_p.createSvgElement = function (name) {
   return this._document.createElementNS("http://www.w3.org/2000/svg", name);
};
BiSvgComponent.newSvgComponent = function (name) {
   var c = new BiSvgComponent;
   c._tagName = name || "svg";
   return c;
};
 
function BiGauge2() {
   if (_biInPrototype) return;
   BiComponent.call(this);
   this._gauge2Group = new BiGauge2Group;
   BiComponent.prototype.add.call(this, this._gauge2Group);
   this.setCoordWidth(1000);
   this.setCoordHeight(1000);
};
_p = _biExtend(BiGauge2, BiComponent, "BiGauge2");
BiGauge2.addProperty("coordWidth", BiAccessType.READ_WRITE);
BiGauge2.addProperty("coordHeight", BiAccessType.READ_WRITE);
BiGauge2.addProperty("preserveAspectRatio", BiAccessType.READ_WRITE);
_p.add = function (oChild) {
   oChild._gaugeComponent = this;
   this._gauge2Group.add(oChild);
};
_p.layoutAllChildren = function () {
   this._gauge2Group.setSize(this.getWidth(), this.getHeight());
   this._gauge2Group.setViewBox(0, 0, this.getCoordWidth(), this.getCoordHeight());
   BiComponent.prototype.layoutAllChildren.call(this);
};
_p.setPreserveAspectRatio = function (sValue) {
   this._gauge2Group.setHtmlProperty("preserveAspectRatio", sValue == "yes" ? "" : "none");
};
 
function BiGauge2Group() {
   if (_biInPrototype) return;
   BiSvgComponent.call(this);
   this.setHtmlProperty("viewBox", "0 0 1000 1000");
   this.setHtmlProperty("preserveAspectRatio", "none");
}
_p = _biExtend(BiGauge2Group, BiSvgComponent, "BiGauge2Group");
_p.add = function (oChild) {
   BiSvgComponent.prototype.add.call(this, oChild);
};
_p.getClientWidth = function () {
   return this._parent.getClientWidth();
};
_p.getClientHeight = function () {
   return this._parent.getClientHeight();
};
 
function BiGauge2Component() {
   if (_biInPrototype) return;
   BiSvgComponent.call(this);
}
_p = _biExtend(BiGauge2Component, BiSvgComponent, "BiGauge2Component");
BiGauge2Component.addProperty("filler", BiAccessType.READ_WRITE);
BiGauge2Component.addProperty("centerX", BiAccessType.READ_WRITE);
BiGauge2Component.addProperty("centerY", BiAccessType.READ_WRITE);
_p._create = function (oDocument) {
   BiSvgComponent.prototype._create.call(this, oDocument);
   if (this._stroke) {
      BiTimer.callOnce(function () {
         if (!this._disposed) this.setHtmlProperty("stroke", this._stroke);
      }, 0, this);
   }
};
_p.add = function (oChild) {
   BiSvgComponent.prototype.add.call(this, oChild);
   if (this._filler) this._filler.applyFiller(this);
};
_p.setFiller = function (oFiller) {
   var oldFiller = this._filler;
   this._filler = oFiller;
   if (this._parent) oFiller.applyFiller(this);
   BiTimer.callOnce(function () {
      if (oldFiller) oldFiller.dispose();
   });
};
_p.setWidth = function (nWidth) {
   this._width = nWidth;
   this.setHtmlProperty("width", nWidth);
   this.setCenterX(this._centerX);
};
_p.setHeight = function (nHeight) {
   this._height = nHeight;
   this.setHtmlProperty("height", nHeight);
   this.setCenterY(this._centerY);
};
_p.setCenterX = function (nCenterX) {
   this._centerX = nCenterX;
   this.setLeft(nCenterX - (this._width || 0) / 2);
};
_p.setCenterY = function (nCenterY) {
   this._centerY = nCenterY;
   this.setTop(nCenterY - (this._height || 0) / 2);
};
_p.setPosition = function (cX, cY) {
   this.setCenterY(cY);
   this.setCenterX(cX);
};
_p.setSize = function (w, h) {
   this.setWidth(w);
   this.setHeight(h);
};
BiGauge2Component.addProperty("stroke", BiAccessType.READ);
_p.setStroke = function (sStroke) {
   this._stroke = sStroke;
   if (this._created) {
      this.setHtmlProperty("stroke", sStroke);
   }
};
BiGauge2Component.addProperty("strokeWidth", BiAccessType.READ);
_p.setStrokeWidth = function (nStrokeWidth) {
   this._strokeWidth = nStrokeWidth;
   this.setHtmlProperty("stroke-width", nStrokeWidth);
};
_p.layoutComponent = function () {
   if (this._filler) this._filler.applyFiller(this);
   BiSvgComponent.prototype.layoutComponent.call(this);
};
 
function BiAbstractGauge2Border(sStroke) {
   if (_biInPrototype) return;
   BiGauge2Component.call(this);
   if (sStroke) this.setStroke(sStroke);
   if (BiBrowserCheck.moz) this.setStrokeWidth(0);
};
_p = _biExtend(BiAbstractGauge2Border, BiGauge2Component, "BiAbstractGauge2Border");
 
function BiGauge2ArcBorder() {
   if (_biInPrototype) return;
   BiAbstractGauge2Border.call(this);
}
_p = _biExtend(BiGauge2ArcBorder, BiAbstractGauge2Border, "BiGauge2ArcBorder");
_p._tagName = "path";
_p._pie = false;
BiGauge2ArcBorder.addProperty("startAngle", BiAccessType.READ_WRITE);
BiGauge2ArcBorder.addProperty("endAngle", BiAccessType.READ_WRITE);
BiGauge2ArcBorder.addProperty("pie", BiAccessType.READ_WRITE);
_p.layoutComponent = function () {
   BiAbstractGauge2Border.prototype.layoutComponent.call(this);
   var w = this.getWidth() / 2;
   var h = this.getHeight() / 2;
   var a0 = this._startAngle / 180 * Math.PI;
   var a1 = this._endAngle / 180 * Math.PI;
   var ox = this.getCenterX();
   var oy = this.getCenterY();
   var p0 = Math.round(Math.sin(a0) * w + ox) + " " + Math.round(-Math.cos(a0) * h + oy);
   var p1 = Math.round(Math.sin(a1) * w + ox) + " " + Math.round(-Math.cos(a1) * h + oy);
   var la = Math.abs(this._startAngle - this._endAngle) > 180 ? " 1" : " 0";
   var d = this._pie ? ["M", p0, " A", w, ",", h, " 0", la, " 1 ", p1, " L", ox, " ", oy, " L", p0] : ["M", p0, " A", w, ",", h, " 0", la, " 1 ", p1, " L", p0];
   this.setHtmlProperty("d", d.join(""));
};
 
function BiGauge2CircularBorder() {
   if (_biInPrototype) return;
   BiAbstractGauge2Border.call(this);
}
_p = _biExtend(BiGauge2CircularBorder, BiAbstractGauge2Border, "BiGauge2CircularBorder");
_p._tagName = "ellipse";
_p.setSize = function (nWidth, nHeight) {
   this._width = nWidth;
   this.setHtmlProperty("cx", nWidth / 2);
   this.setHtmlProperty("cy", nHeight / 2);
   this._height = nHeight;
   this.setHtmlProperty("rx", nWidth / 2 - 10);
   this.setHtmlProperty("ry", nHeight / 2 - 10);
};
_p.setWidth = function (nWidth) {
   this._width = nWidth;
   this.setHtmlProperty("rx", nWidth / 2 - 10);
};
_p.setHeight = function (nHeight) {
   this._height = nHeight;
   this.setHtmlProperty("ry", nHeight / 2 - 10);
};
_p.setCenterX = function (nCenterX) {
   this._centerX = nCenterX;
   this.setHtmlProperty("cx", nCenterX);
};
_p.setCenterY = function (nCenterY) {
   this._centerY = nCenterY;
   this.setHtmlProperty("cy", nCenterY);
};
 
function BiGauge2RectangularBorder(nArcSize) {
   if (_biInPrototype) return;
   BiAbstractGauge2Border.call(this);
   this.setArcSize(0);
}
_p = _biExtend(BiGauge2RectangularBorder, BiAbstractGauge2Border, "BiGauge2RectangularBorder");
_p._tagName = "rect";
BiGauge2RectangularBorder.addProperty("arcSize", BiAccessType.READ_WRITE);
_p.setArcSize = function (n) {
   n = parseInt(n);
   this._arcSize = n;
   var w = this.getWidth();
   var h = this.getHeight();
   var min = Math.min(w, h);
   n = min ? min * n / 100 : n;
   this.setHtmlProperty("rx", n);
   this.setHtmlProperty("ry", n);
};
BiGauge2RectangularBorder.addProperty("angle", BiAccessType.READ_WRITE);
_p.setAngle = function (n) {
   this._angle = n;
   this.setHtmlProperty("transform", "rotate(" + n + " " + (this.getWidth() / 2) + " " + (this.getHeight() / 2));
};
_p.layoutComponent = function () {
   BiAbstractGauge2Border.prototype.layoutComponent.call(this);
   if (this._arcSize) this.setArcSize(this._arcSize);
};
 
function BiGauge2ImageBorder(sHref) {
   if (_biInPrototype) return;
   BiAbstractGauge2Border.call(this);
   this.setHtmlProperty("preserveAspectRatio", "none");
}
_p = _biExtend(BiGauge2ImageBorder, BiAbstractGauge2Border, "BiGauge2ImageBorder");
_p._tagName = "image";
BiGauge2ImageBorder.addProperty("uri", BiAccessType.READ);
_p.setUri = function (oUri) {
   if (oUri != null && !(oUri instanceof BiUri)) {
      oUri = new BiUri(application.getAdfPath(), oUri);
   }
   var sUri = String(oUri);
   if (String(this._uri) != sUri) {
      this._uri = oUri;
      this.setHtmlProperty("xlink:href", sUri);
   }
};
 
function BiAbstractGauge2Filler() {
   if (_biInPrototype) return;
   BiGauge2Component.call(this);
};
_p = _biExtend(BiAbstractGauge2Filler, BiGauge2Component, "BiAbstractGauge2Filler");
_p._tagName = "";
_p.applyFiller = function (oGroupChild) {};
 
function BiGauge2PlainColorFiller(sColor) {
   if (_biInPrototype) return;
   BiAbstractGauge2Filler.call(this);
   if (sColor) this.setColor(sColor);
};
_p = _biExtend(BiGauge2PlainColorFiller, BiAbstractGauge2Filler, "BiGauge2PlainColorFiller");
_p._tagName = "";
BiGauge2PlainColorFiller.addProperty("color", BiAccessType.READ_WRITE);
_p.applyFiller = function (oGroupChild) {
   oGroupChild.setHtmlProperty("fill", (this._color ? this._color : "none"));
};
 
function BiAbstractGauge2GradientFiller() {
   if (_biInPrototype) return;
   BiAbstractGauge2Filler.call(this);
   if (BiBrowserCheck.features.hasSvg) {
      this._stop1 = BiSvgComponent.newSvgComponent("stop");
      this._stop2 = BiSvgComponent.newSvgComponent("stop");
      this._stop1.setHtmlProperty("offset", "0%");
      this._stop2.setHtmlProperty("offset", "100%");
      this.add(this._stop1);
      this.add(this._stop2);
   }
};
_p = _biExtend(BiAbstractGauge2GradientFiller, BiAbstractGauge2Filler, "BiAbstractGauge2GradientFiller");
_p._color1 = "black";
_p._color2 = "white";
_p._opacity1 = 1;
_p._opacity2 = 1;
_p._xpos = 50;
_p._ypos = 50;
BiAbstractGauge2GradientFiller.addProperty("color1", BiAccessType.READ_WRITE);
BiAbstractGauge2GradientFiller.addProperty("color2", BiAccessType.READ_WRITE);
BiAbstractGauge2GradientFiller.addProperty("opacity1", BiAccessType.READ_WRITE);
BiAbstractGauge2GradientFiller.addProperty("opacity2", BiAccessType.READ_WRITE);
BiAbstractGauge2GradientFiller.addProperty("xpos", BiAccessType.READ_WRITE);
BiAbstractGauge2GradientFiller.addProperty("ypos", BiAccessType.READ_WRITE);
 
function BiGauge2RadialGradientFiller() {
   if (_biInPrototype) return;
   BiAbstractGauge2GradientFiller.call(this);
}
_p = _biExtend(BiGauge2RadialGradientFiller, BiAbstractGauge2GradientFiller, "BiGauge2RadialGradientFiller");
_p._tagName = "radialGradient";
_p._used = false;
_p.setColor1 = function (sCol) {
   this._color1 = sCol;
   this._stop1.setHtmlProperty("stop-color", sCol);
};
_p.setColor2 = function (sCol) {
   this._color2 = sCol;
   this._stop2.setHtmlProperty("stop-color", sCol);
};
_p.setOpacity1 = function (n) {
   this._opacity1 = n;
   this._stop1.setHtmlProperty("opacity", n);
};
_p.setOpacity2 = function (n) {
   this._opacity2 = n;
   this._stop2.setHtmlProperty("opacity2", n);
};
_p.setXpos = function (n) {
   this._xpos = n;
   this.setHtmlProperty("fx", n + "%");
};
_p.setYpos = function (n) {
   this._yoos = n;
   this.setHtmlProperty("fy", n + "%");
};
_p.applyFiller = function (oGroupChild) {
   if (!this._used && oGroupChild._parent) {
      this._stop2.setHtmlProperty("stop-color", this.getColor2());
      this._stop1.setHtmlProperty("stop-color", this.getColor1());
      this._stop2.setHtmlProperty("stop-opacity", this.getOpacity2());
      this._stop1.setHtmlProperty("stop-opacity", this.getOpacity1());
      this.setHtmlProperty("fx", this.getXpos() + "%");
      this.setHtmlProperty("fy", this.getYpos() + "%");
      oGroupChild._parent.add(this);
      oGroupChild.setHtmlProperty("fill", "url(#" + this.getHtmlProperty("id") + ")");
      this._used = true;
   }
};
 
function BiGauge2RingGradientFiller() {
   if (_biInPrototype) return;
   BiAbstractGauge2GradientFiller.call(this);
}
BiAbstractGauge2GradientFiller.addProperty("highlightCenter", BiAccessType.READ_WRITE);
_p._highLightCenter = 50;
BiAbstractGauge2GradientFiller.addProperty("thickness", BiAccessType.READ_WRITE);
_p._thickness = 10;
_p = _biExtend(BiGauge2RingGradientFiller, BiAbstractGauge2GradientFiller, "BiGauge2RingGradientFiller");
_p._tagName = "radialGradient";
_p._used = false;
_p.setColor1 = function (sCol) {
   this._color1 = sCol;
   this._stop1.setHtmlProperty("stop-color", sCol);
};
_p.setColor2 = function (sCol) {
   this._color2 = sCol;
   this._stop2.setHtmlProperty("stop-color", sCol);
};
_p.setOpacity1 = function (n) {
   this._opacity1 = n;
   this._stop1.setHtmlProperty("opacity", n);
};
_p.setOpacity2 = function (n) {
   this._opacity2 = n;
   this._stop2.setHtmlProperty("opacity2", n);
};
_p.setXpos = function (n) {
   this._xpos = n;
   if (this._created) this._calculateOffsets();
};
_p.setYpos = function (n) {
   this._ypos = n;
   if (this._created) this._calculateOffsets();
};
_p.setThickness = function (n) {
   this._thickness = n;
   if (this._created) this._calculateOffsets();
};
_p.setHighlightCenter = function (n) {
   this._highlightCenter = n;
   if (this._created) this._calculateOffsets();
};
_p._calculateOffsets = function () {
   if (this._stop3) {
      this._stop3.dispose();
      delete this._stop3;
   }
   var x = this.getXpos() - 50;
   var y = this.getYpos() - 50;
   var r = 50 + Math.sqrt(x * x + y * y);
   this.setHtmlProperty("cx", this.getXpos() + "%");
   this.setHtmlProperty("cy", this.getYpos() + "%");
   this.setHtmlProperty("r", r + "%");
   var p = r / 50;
   var o1 = (100 - this._thickness * 2);
   var o2 = (100 - this._thickness * 2 * (100 - this._highlightCenter) / 100);
   if (o1 != 100) o1 /= p;
   if (o2 != 100) o2 /= p;
   this._stop1.setHtmlProperty("offset", o1 + "%");
   this._stop2.setHtmlProperty("offset", o2 + "%");
   if (o2 != 100) {
      this._stop3 = BiSvgComponent.newSvgComponent("stop");
      this.add(this._stop3);
      this._stop3.setHtmlProperty("stop-color", this.getColor1());
      this._stop3.setHtmlProperty("stop-opacity", this.getOpacity1());
      this._stop3.setHtmlProperty("offset", "100%");
   }
};
_p.applyFiller = function (oGroupChild) {
   if (!this._used && oGroupChild._parent) {
      this._stop1.setHtmlProperty("stop-color", this.getColor1());
      this._stop2.setHtmlProperty("stop-color", this.getColor2());
      this._stop1.setHtmlProperty("stop-opacity", this.getOpacity1());
      this._stop2.setHtmlProperty("stop-opacity", this.getOpacity2());
      var x = this.getXpos() - 50;
      var y = this.getYpos() - 50;
      var r = 50 + Math.sqrt(x * x + y * y);
      this.setHtmlProperty("cx", this.getXpos() + "%");
      this.setHtmlProperty("cy", this.getYpos() + "%");
      this.setHtmlProperty("r", r + "%");
      this._calculateOffsets();
      oGroupChild._parent.add(this);
      oGroupChild.setHtmlProperty("fill", "url(#" + this.getHtmlProperty("id") + ")");
      this._used = true;
   }
};
 
function BiGauge2LinearGradientFiller() {
   if (_biInPrototype) return;
   BiAbstractGauge2GradientFiller.call(this);
}
_p = _biExtend(BiGauge2LinearGradientFiller, BiAbstractGauge2GradientFiller, "BiGauge2LinearGradientFiller");
_p._angle = 0;
BiGauge2LinearGradientFiller.addProperty("angle", BiAccessType.READ_WRITE);
_p._tagName = "linearGradient";
_p._used = false;
_p.setColor1 = function (sCol) {
   this._color1 = sCol;
   this._stop1.setHtmlProperty("stop-color", sCol);
};
_p.setColor2 = function (sCol) {
   this._color2 = sCol;
   this._stop2.setHtmlProperty("stop-color", sCol);
};
_p.setOpacity1 = function (n) {
   this._opacity1 = n;
   this._stop1.setHtmlProperty("opacity", n);
};
_p.setOpacity2 = function (n) {
   this._opacity2 = n;
   this._stop2.setHtmlProperty("opacity2", n);
};
_p.setAngle = function (n) {
   this._angle = n;
   var a = (-n + 90);
   this.setHtmlProperty("gradientTransform", "translate(.5,.5) rotate(" + a + ") translate(-.5,-.5)");
};
_p.applyFiller = function (oGroupChild) {
   if (!this._used && oGroupChild._parent) {
      this._stop1.setHtmlProperty("stop-color", this.getColor1());
      this._stop2.setHtmlProperty("stop-color", this.getColor2());
      this._stop1.setHtmlProperty("stop-opacity", this.getOpacity1());
      this._stop2.setHtmlProperty("stop-opacity", this.getOpacity2());
      var a = (-this.getAngle() + 90);
      this.setHtmlProperty("gradientTransform", "translate(.5,.5) rotate(" + a + ") translate(-.5,-.5)");
      oGroupChild._parent.add(this);
      oGroupChild.setHtmlProperty("fill", "url(#" + this.getHtmlProperty("id") + ")");
      this._used = true;
   }
};
 
function BiAbstractGauge2Range() {
   if (_biInPrototype) return;
   BiGauge2Component.call(this);
}
_p = _biExtend(BiAbstractGauge2Range, BiGauge2Component, "BiAbstractGauge2Range");
_p.setWidth = function (nWidth) {
   this._width = nWidth;
   this.setHtmlProperty("width", nWidth);
   this.setViewBox(0, 0, this._width, this._height);
   this.setCenterX(this._centerX);
};
_p.setHeight = function (nHeight) {
   this._height = nHeight;
   this.setHtmlProperty("height", nHeight);
   this.setViewBox(0, 0, this._width, this._height);
   this.setCenterY(this._centerY);
};
 
function BiGauge2RadialRange() {
   if (_biInPrototype) return;
   BiAbstractGauge2Range.call(this);
}
_p = _biExtend(BiGauge2RadialRange, BiAbstractGauge2Range, "BiGauge2RadialRange");
BiGauge2RadialRange.addProperty("startAngle", BiAccessType.READ_WRITE);
BiGauge2RadialRange.addProperty("endAngle", BiAccessType.READ_WRITE);
_p.add = function (oChild) {
   if (oChild instanceof BiGauge2RadialTicks || oChild instanceof BiGauge2RadialScale) {
      oChild.setStartAngle(this._startAngle);
      oChild.setEndAngle(this._endAngle);
   }
   if (!(oChild instanceof BiGauge2Label)) oChild.setPosition(this.getWidth() / 2, this.getHeight() / 2);
   if (oChild._tagName == "svg") {
      oChild.setViewBox(0, 0, this.getWidth(), this.getHeight());
      oChild.setSize(this.getWidth(), this.getHeight());
   }
   BiAbstractGauge2Range.prototype.add.call(this, oChild);
};
_p.layoutAllChildren = function () {
   var cs = this._children;
   var l = cs.length;
   for (var i = 0; i < l; i++) {
      var child = cs[i];
      if (!(child instanceof BiGauge2Label)) child.setPosition(this.getWidth() / 2, this.getHeight() / 2);
      if (child instanceof BiAbstractGauge2Border) child.setSize(this.getWidth(), this.getHeight());
      child.layoutComponent();
   }
   this._invalidLayout = false;
};
 
function BiGauge2LinearRange() {
   if (_biInPrototype) return;
   BiAbstractGauge2Range.call(this);
}
_p = _biExtend(BiGauge2LinearRange, BiAbstractGauge2Range, "BiGauge2LinearRange");
BiGauge2LinearRange.addProperty("angle", BiAccessType.READ_WRITE);
_p.setAngle = function (n) {
   this._angle = n;
   this.setHtmlProperty("transform", "rotate(" + n + " " + (this.getWidth() / 2) + " " + (this.getHeight() / 2));
};
_p.add = function (oChild) {
   if (oChild._tagName == "svg") {
      oChild.setViewBox(0, 0, this.getWidth(), this.getHeight());
      oChild.setSize(this.getWidth(), this.getHeight());
   }
   if (oChild instanceof BiAbstractGauge2Border && !oChild.getWidth() && !oChild.getHeight()) {
      oChild.setSize(this.getWidth(), this.getHeight());
   }
   BiAbstractGauge2Range.prototype.add.call(this, oChild);
};
_p.layoutAllChildren = function () {
   var cs = this._children;
   var l = cs.length;
   for (var i = 0; i < l; i++) {
      if (!(cs[i] instanceof BiGauge2Label)) cs[i].setPosition(this.getWidth() / 2, this.getHeight() / 2);
      cs[i].layoutComponent();
   }
   this._invalidLayout = false;
};
 
function BiAbstractGauge2Ticks() {
   if (_biInPrototype) return;
   BiGauge2Component.call(this);
   this._ticks = [];
};
_p = _biExtend(BiAbstractGauge2Ticks, BiGauge2Component, "BiAbstractGauge2Ticks");
_p._tagName = "g";
BiAbstractGauge2Ticks.addProperty("tickWidth", BiAccessType.READ);
BiAbstractGauge2Ticks.addProperty("tickLength", BiAccessType.READ_WRITE);
BiAbstractGauge2Ticks.addProperty("tickCount", BiAccessType.READ_WRITE);
BiAbstractGauge2Ticks.addProperty("color", BiAccessType.READ);
_p.setTickWidth = function (nTickWidth) {
   this._tickWidth = nTickWidth;
   this.setHtmlProperty("stroke-width", nTickWidth);
};
_p.setColor = function (sColor) {
   this._color = sColor;
   this.setHtmlProperty("stroke", sColor);
};
BiAbstractGauge2Ticks.addProperty("colors", BiAccessType.READ);
_p.setColors = function (o) {
   if (typeof o == "string") {
      o = o.split(",");
      var l = o.length;
      for (var i = 0; i < l; i++) {
         o[i] = i % 2 ? parseInt(o[i]) : o[i].trim();
      }
   }
   this._colors = o;
};
BiAbstractGauge2Ticks.addProperty("colorFunction", BiAccessType.READ);
_p._colorFunction = _p.getColor;
_p.setColorFunction = function (f) {
   if (typeof f == "string") f = new Function("v", f);
   this._colorFunction = f || _p.getColor;
};
_p._calculateTicks = function () {
   return "";
};
_p.layoutComponent = function () {
   if (!this._ticksCreated) {
      this._createTicks();
      if (this._colors instanceof Array) {
         var cs = this._colors;
         var l = this._ticks.length;
         var ai = 0;
         var j = cs[1] || Number.MAX_VALUE;
         for (var i = 0; i < l; i++, j--) {
            if (j == 0) {
               ai += 2;
               j = cs[ai + 1] || Number.MAX_VALUE;
            }
            if (cs[ai]) {
               this._ticks[i].setAttribute("fill", cs[ai]);
               this._ticks[i].setAttribute("stroke", cs[ai]);
            } else break;
         }
      }
      this._ticksCreated = true;
   }
   BiGauge2Component.prototype.layoutComponent.call(this);
};
_p.dispose = function () {
   if (this._disposed) return;
   BiGauge2Component.prototype.dispose.call(this);
   this.disposeFields("_ticks");
};
 
function BiGauge2RadialTicks() {
   if (_biInPrototype) return;
   BiAbstractGauge2Ticks.call(this);
};
_p = _biExtend(BiGauge2RadialTicks, BiAbstractGauge2Ticks, "BiGauge2RadialTicks");
BiGauge2RadialTicks.addProperty("startAngle", BiAccessType.READ_WRITE);
BiGauge2RadialTicks.addProperty("endAngle", BiAccessType.READ_WRITE);
BiGauge2RadialTicks.addProperty("radius", BiAccessType.READ_WRITE);
_p._createTicks = function () {
   var r = this.getRadius();
   var r1 = r - this._tickLength / 2;
   var r2 = r + this._tickLength / 2;
   var angleStep = (Math.abs(this._endAngle - this._startAngle) / 180 * Math.PI) / (this._tickCount - 1);
   var angle = this._startAngle / 180 * Math.PI;
   var offsetX = this._parent.getWidth() / 2;
   var offsetY = this._parent.getHeight() / 2;
   for (var i = 0; i < this._tickCount; i++, angle += angleStep) {
      var el = this._document.createElementNS("http://www.w3.org/2000/svg", "path");
      var color = this.getColorFunction().call(this, i);
      el.setAttribute("fill", color);
      var x1 = r1 * Math.sin(angle);
      var y1 = r1 * Math.cos(angle);
      var x2 = r2 * Math.sin(angle);
      var y2 = r2 * Math.cos(angle);
      x1 = Math.round(offsetX + x1);
      y1 = Math.round(offsetY - y1);
      x2 = Math.round(offsetX + x2);
      y2 = Math.round(offsetY - y2);
      el.setAttribute("d", ["M", x1, ",", y1, "L", x2, ",", y2].join(BiString.EMPTY));
      this._element.appendChild(el);
      this._ticks.push(el);
   }
};
_p._calculateTicks = function () {
   var dStr = [];
   var r = this.getRadius();
   var r1 = r - this._tickLength / 2;
   var r2 = r + this._tickLength / 2;
   var angleStep = (Math.abs(this._endAngle - this._startAngle) / 180 * Math.PI) / (this._tickCount - 1);
   var angle = this._startAngle / 180 * Math.PI;
   var endAngle = this._endAngle / 180 * Math.PI;
   while (angle <= endAngle) {
      var x1 = r1 * Math.sin(angle);
      var y1 = r1 * Math.cos(angle);
      var x2 = r2 * Math.sin(angle);
      var y2 = r2 * Math.cos(angle);
      x1 = (this._parent.getWidth() / 2 + x1);
      y1 = (this._parent.getHeight() / 2 - y1);
      x2 = (this._parent.getWidth() / 2 + x2);
      y2 = (this._parent.getHeight() / 2 - y2);
      dStr.push("M", x1, ",", y1, " L", x2, ",", y2, " ");
      angle += angleStep;
   }
   return dStr.join("");
};
 
function BiGauge2LinearTicks() {
   if (_biInPrototype) return;
   BiAbstractGauge2Ticks.call(this);
};
_p = _biExtend(BiGauge2LinearTicks, BiAbstractGauge2Ticks, "BiGauge2LinearTicks");
BiGauge2LinearTicks.addProperty("angle", BiAccessType.READ_WRITE);
BiGauge2LinearTicks.addProperty("tickSpacing", BiAccessType.READ_WRITE);
_p._createTicks = function () {
   var tl = this._tickLength;
   var n = this._tickCount;
   var r = -((n - 1) / 2 * this._tickSpacing);
   if (this._angle == null) this._angle = this._parent.getAngle();
   var angle = this._angle / 180 * Math.PI;
   for (var i = 0; i < n; i++) {
      var el = this._document.createElementNS("http://www.w3.org/2000/svg", "path");
      var color = this.getColorFunction().call(this, i);
      el.setAttribute("fill", color);
      el.setAttribute("stroke", color);
      el.setAttribute("stroke-width", this._strokeWidth);
      var x = r * Math.sin(angle);
      var y = r * Math.cos(angle);
      var x1 = x - tl / 2 * Math.cos(angle);
      var y1 = y + tl / 2 * Math.sin(angle);
      var x2 = x + tl / 2 * Math.cos(angle);
      var y2 = y - tl / 2 * Math.sin(angle);
      x1 = (this._parent.getWidth() / 2 + x1);
      y1 = (this._parent.getHeight() / 2 - y1);
      x2 = (this._parent.getWidth() / 2 + x2);
      y2 = (this._parent.getHeight() / 2 - y2);
      el.setAttribute("d", "M" + x1 + "," + y1 + "L" + x2 + "," + y2);
      this._element.appendChild(el);
      this._ticks.push(el);
      r += this._tickSpacing;
   }
};
 
function BiAbstractGauge2Scale() {
   if (_biInPrototype) return;
   BiGauge2Component.call(this);
};
_p = _biExtend(BiAbstractGauge2Scale, BiGauge2Component, "BiAbstractGauge2Scale");
_p._font = BiFont.fromString("Arial 20");
_p._verticalAlign = "middle";
_p._preString = "";
_p._postString = "";
BiAbstractGauge2Scale.addProperty("font", BiAccessType.READ_WRITE);
_p.setFont = function (o) {
   if (!(o instanceof BiFont)) {
      o = BiFont.fromString("" + o);
   }
   this._font = o;
};
BiAbstractGauge2Scale.addProperty("foreColor", BiAccessType.READ_WRITE);
BiAbstractGauge2Scale.addProperty("labelCount", BiAccessType.READ_WRITE);
BiAbstractGauge2Scale.addProperty("postString", BiAccessType.READ_WRITE);
BiAbstractGauge2Scale.addProperty("preString", BiAccessType.READ_WRITE);
BiAbstractGauge2Scale.addProperty("startValue", BiAccessType.READ_WRITE);
BiAbstractGauge2Scale.addProperty("endValue", BiAccessType.READ_WRITE);
BiAbstractGauge2Scale.addProperty("colors", BiAccessType.READ);
_p.setColors = function (o) {
   if (typeof o == "string") {
      o = o.split(",");
      var l = o.length;
      for (var i = 0; i < l; i++) {
         o[i] = i % 2 ? parseInt(o[i]) : o[i].trim();
      }
   }
   this._colors = o;
};
BiAbstractGauge2Scale.addProperty("colorFunction", BiAccessType.READ);
_p._colorFunction = _p.getForeColor;
_p.setColorFunction = function (f) {
   if (typeof f == "string") f = new Function("v", f);
   this._colorFunction = f || _p.getForeColor;
};
BiAbstractGauge2Scale.addProperty("valueFunction", BiAccessType.READ);
_p._valueFunction = function (v) {
   return v;
};
_p.setValueFunction = function (f) {
   if (typeof f == "string") f = new Function("v", f);
   this._valueFunction = f || function (v) {
      return v;
   };
};
_p.layoutComponent = function () {
   if (!this._labelsCreated) {
      this._createLabels();
      this._labelsCreated = true;
   }
   BiGauge2Component.prototype.layoutComponent.call(this);
};
 
function BiGauge2RadialScale() {
   if (_biInPrototype) return;
   BiAbstractGauge2Scale.call(this);
   this._labels = [];
};
_p = _biExtend(BiGauge2RadialScale, BiAbstractGauge2Scale, "BiGauge2RadialScale");
BiGauge2RadialScale.addProperty("startAngle", BiAccessType.READ_WRITE);
BiGauge2RadialScale.addProperty("endAngle", BiAccessType.READ_WRITE);
BiGauge2RadialScale.addProperty("radius", BiAccessType.READ_WRITE);
_p._valueToAngle = function (n) {
   var v0 = this.getStartValue();
   var v1 = this.getEndValue();
   var a0 = this.getStartAngle();
   var a1 = this.getEndAngle();
   return v0 == v1 ? a0 : a0 + (a1 - a0) * (n - v0) / (v1 - v0);
};
_p._createLabels = function () {
   if (!this._labelCount) return;
   var labels = this._labels = [];
   var i;
   var l = this._labelCount;
   var d = Math.max(1, l - 1);
   var v0 = this.getStartValue();
   var v1 = this.getEndValue();
   for (i = 0; i < l; i++) {
      var v = v0 + (v1 - v0) * (i / d);
      v = Math.round(v * 1000) / 1000;
      labels.push(this._createLabel(v));
   }
   if (this._colors instanceof Array) {
      var cs = this._colors;
      l = labels.length;
      var ai = 0;
      var j = cs[1] || Number.MAX_VALUE;
      for (i = 0; i < l; i++, j--) {
         if (j == 0) {
            ai += 2;
            j = cs[ai + 1] || Number.MAX_VALUE;
         }
         if (cs[ai]) labels[i].setAttribute("fill", cs[ai]);
         else break;
      }
   }
};
_p._createLabel = function (nValue) {
   var v = this._valueToAngle(nValue, this.getStartValue(), this.getEndValue(), this.getStartAngle(), this.getEndAngle());
   nValue = this.getValueFunction().call(this, nValue);
   var vr = v / 180 * Math.PI;
   var r = this.getRadius();
   var el = this.createSvgElement("text");
   var textNode = this._document.createTextNode(this._preString + nValue + this._postString);
   var x = r * Math.sin(vr);
   var y = r * Math.cos(vr);
   var size = this._font.getSize();
   x = Math.round(this.getWidth() / 2 + x);
   y = Math.round(this.getHeight() / 2 - y);
   el.setAttribute("x", x);
   el.setAttribute("y", Math.round(y + 10 * size / 30));
   el.setAttribute("font-family", this._font.getName());
   el.setAttribute("fill", this.getColorFunction().call(this, nValue));
   el.setAttribute("font-size", size);
   if (this._font.getBold()) el.setAttribute("font-weight", "bold");
   else el.setAttribute("font-weight", 200);
   el.setAttribute("text-anchor", "middle");
   el.appendChild(textNode);
   if (this._element.hasChildNodes()) this._element.insertBefore(el, this._element.firstChild);
   else this._element.appendChild(el);
   return el;
};
 
function BiGauge2LinearScale() {
   if (_biInPrototype) return;
   BiAbstractGauge2Scale.call(this);
};
_p = _biExtend(BiGauge2LinearScale, BiAbstractGauge2Scale, "BiGauge2LinearScale");
BiGauge2LinearScale.addProperty("labelSpacing", BiAccessType.READ_WRITE);
BiGauge2LinearScale.addProperty("labelPosition", BiAccessType.READ_WRITE);
BiGauge2LinearScale.addProperty("angle", BiAccessType.READ_WRITE);
_p._valueToPosition = function (nValue) {
   var r = -((this._labelCount - 1) / 2 * this._labelSpacing);
   return (2 * r) - ((nValue - this.getStartValue()) / (this.getEndValue() - this.getStartValue()) * r * 2 + r);
};
_p._createLabels = function () {
   var labels = [];
   var step = (this.getEndValue() - this.getStartValue()) / (this._labelCount - 1);
   var v = this.getStartValue();
   var r = -((this._labelCount - 1) / 2 * this._labelSpacing);
   if (this._angle == null) this._angle = this._parent.getAngle();
   var angle = this._angle / 180 * Math.PI;
   while (v <= this.getEndValue()) {
      v = Math.round(v * 1000) / 1000;
      labels.push(this._createLabel(v, r, angle));
      v += step;
      r += this._labelSpacing;
   }
   this._labels = labels;
   if (this._colors instanceof Array) {
      var cs = this._colors;
      var l = labels.length;
      var ai = 0;
      var j = cs[1] || Number.MAX_VALUE;
      for (var i = 0; i < l; i++, j--) {
         if (j == 0) {
            ai += 2;
            j = cs[ai + 1] || Number.MAX_VALUE;
         }
         if (cs[ai]) {
            labels[i].setAttribute("fill", cs[ai]);
         } else break;
      }
   }
};
_p._createLabel = function (nValue, r, angle) {
   var x = r * Math.sin(angle);
   var y = r * Math.cos(angle);
   var x1 = x + this._labelPosition * Math.cos(angle);
   var y1 = y - this._labelPosition * Math.sin(angle);
   x1 = (this._parent.getWidth() / 2 + x1);
   y1 = (this._parent.getHeight() / 2 - y1);
   var el = this.createSvgElement("text");
   nValue = this.getValueFunction().call(this, nValue);
   var textNode = this._document.createTextNode(this._preString + nValue + this._postString);
   var color = this.getColorFunction().call(this, nValue);
   el.setAttribute("fill", color);
   el.setAttribute("x", x1 + 1);
   el.setAttribute("y", y1 + 10);
   el.setAttribute("width", 400);
   el.setAttribute("height", 80);
   el.setAttribute("font-family", this._font.getName());
   el.setAttribute("font-size", this._font.getSize());
   if (this._font.getBold()) el.setAttribute("font-weight", "bold");
   else el.setAttribute("font-weight", "normal");
   el.setAttribute("text-anchor", (Math.abs(this._angle) > 60 ? "middle" : "end"));
   el.appendChild(textNode);
   if (this._element.hasChildNodes()) this._element.insertBefore(el, this._element.firstChild);
   else this._element.appendChild(el);
   return el;
};
 
function BiAbstractGauge2Cap() {
   if (_biInPrototype) return;
   BiGauge2Component.call(this);
   if (BiBrowserCheck.moz) this.setStrokeWidth(0);
};
_p = _biExtend(BiAbstractGauge2Cap, BiGauge2Component, "BiAbstractGauge2Cap");
 
function BiGauge2BasicCap() {
   if (_biInPrototype) return;
   BiAbstractGauge2Cap.call(this);
};
_p = _biExtend(BiGauge2BasicCap, BiAbstractGauge2Cap, "BiGauge2BasicCap");
_p._tagName = "ellipse";
_p.setCenterX = function (nX) {
   this._centerX = nX;
   this.setHtmlProperty("cx", nX);
};
_p.setCenterY = function (nY) {
   this._centerY = nY;
   this.setHtmlProperty("cy", nY);
};
_p.setWidth = function (nWidth) {
   this._width = nWidth;
   this.setHtmlProperty("rx", nWidth / 2);
};
_p.setHeight = function (nHeight) {
   this._height = nHeight;
   this.setHtmlProperty("ry", nHeight / 2);
};
 
function BiAbstractGauge2ValueMarker() {
   if (_biInPrototype) return;
   BiGauge2Component.call(this);
};
_p = _biExtend(BiAbstractGauge2ValueMarker, BiGauge2Component, "BiAbstractGauge2ValueMarker");
BiAbstractGauge2ValueMarker.addProperty("value", BiAccessType.READ_WRITE);
 
function BiGauge2RadialNeedle() {
   if (_biInPrototype) return;
   BiAbstractGauge2ValueMarker.call(this);
};
_p = _biExtend(BiGauge2RadialNeedle, BiAbstractGauge2ValueMarker, "BiGauge2RadialNeedle");
_p._innerRadius = 0;
_p._innerWidth = 10;
_p._outerWidth = 0;
BiGauge2RadialNeedle.addProperty("outerRadius", BiAccessType.READ_WRITE);
BiGauge2RadialNeedle.addProperty("innerRadius", BiAccessType.READ_WRITE);
BiGauge2RadialNeedle.addProperty("innerWidth", BiAccessType.READ_WRITE);
BiGauge2RadialNeedle.addProperty("outerWidth", BiAccessType.READ_WRITE);
_p._tagName = "polyline";
_p.setValue = function (n) {
   this._value = n;
   if (this.getCreated()) this._calculatePoints();
};
_p._calculatePoints = function () {
   var v = this._parent._valueToAngle(this._value);
   var vr = v / 180 * Math.PI;
   var r = this.getOuterRadius();
   var r2 = this.getInnerRadius();
   var p1x = r * Math.sin(vr);
   var p1y = r * Math.cos(vr);
   var p2x = r2 * Math.sin(vr);
   var p2y = r2 * Math.cos(vr);
   var a = vr - Math.PI / 2;
   var iw = this._innerWidth / 2;
   var ow = this._outerWidth / 2;
   var p3x = p2x + iw * Math.sin(a);
   var p3y = p2y + iw * Math.cos(a);
   var p4x = p1x + ow * Math.sin(a);
   var p4y = p1y + ow * Math.cos(a);
   a += Math.PI;
   p1x += ow * Math.sin(a);
   p1y += ow * Math.cos(a);
   p2x += iw * Math.sin(a);
   p2y += iw * Math.cos(a);
   var w = this._parent.getWidth() / 2;
   var h = this._parent.getHeight() / 2;
   p1x = w + p1x;
   p1y = h - p1y;
   p2x = w + p2x;
   p2y = h - p2y;
   p3x = w + p3x;
   p3y = h - p3y;
   p4x = w + p4x;
   p4y = h - p4y;
   var pointsValue = p3x + "," + p3y + " " + p4x + "," + p4y + " " + p1x + "," + p1y + " " + p2x + "," + p2y + " " + p3x + "," + p3y;
   this.setHtmlProperty("points", pointsValue);
};
_p.layoutComponent = function () {
   if (this._value == null) {
      var p = this._parent;
      this.setValue((p.getEndValue() - p.getStartValue()) / 2 + p.getStartValue());
   } else {
      this._calculatePoints();
   }
   BiAbstractGauge2ValueMarker.prototype.layoutComponent.call(this);
};
 
function BiGauge2RadialArrowNeedle() {
   if (_biInPrototype) return;
   BiAbstractGauge2ValueMarker.call(this);
};
_p = _biExtend(BiGauge2RadialArrowNeedle, BiGauge2RadialNeedle, "BiGauge2RadialArrowNeedle");
_p._tagName = "polyline";
BiGauge2RadialArrowNeedle.addProperty("pointerLength", BiAccessType.READ_WRITE);
_p.setValue = function (n) {
   this._value = n;
   if (this.getCreated()) this._calculatePoints();
};
_p._calculatePoints = function () {
   var l;
   if (!this._ps) {
      var wi = this._innerWidth / 2;
      var wo = this._outerWidth / 2;
      var ri = this.getInnerRadius();
      var ro = this.getOuterRadius();
      l = ro - ri;
      var pl = this._pointerLength || l / 3;
      var x = [-wo, -wi, wi, wo];
      var y = [ri, ro - pl, ro];
      this._ps = [
         [x[1], y[0]],
         [x[1], y[1]],
         [x[0], y[1]],
         [0, y[2]],
         [x[3], y[1]],
         [x[2], y[1]],
         [x[2], y[0]],
         [x[1], y[0]]
      ];
   }
   var a = this._parent._valueToAngle(this._value) / 180 * Math.PI;
   var ca = Math.cos(a);
   var sa = Math.sin(a);
   var w = this._parent.getWidth() / 2;
   var h = this._parent.getHeight() / 2;
   var ps = [];
   l = this._ps.length;
   for (var i = 0; i < l; i++) {
      ps.push(this._ps[i][0] * ca + this._ps[i][1] * sa + w);
      ps.push(this._ps[i][0] * sa - this._ps[i][1] * ca + h);
   }
   ps = ps.join(",");
   this.setHtmlProperty("points", ps);
};
_p.layoutComponent = function () {
   if (this._value == null) {
      var p = this._parent;
      this.setValue((p.getEndValue() - p.getStartValue()) / 2 + p.getStartValue());
   }
   this._calculatePoints();
   BiAbstractGauge2ValueMarker.prototype.layoutComponent.call(this);
};
 
function BiGauge2LinearNeedle() {
   if (_biInPrototype) return;
   BiAbstractGauge2ValueMarker.call(this);
};
_p = _biExtend(BiGauge2LinearNeedle, BiAbstractGauge2ValueMarker, "BiGauge2LinearNeedle");
BiGauge2LinearNeedle.addProperty("angle", BiAccessType.READ_WRITE);
BiGauge2LinearNeedle.addProperty("needlePosition", BiAccessType.READ_WRITE);
BiGauge2LinearNeedle.addProperty("needleBase", BiAccessType.READ_WRITE);
BiGauge2LinearNeedle.addProperty("needleHeight", BiAccessType.READ_WRITE);
_p._tagName = "polyline";
_p.setValue = function (n) {
   this._value = n;
   if (this.getCreated()) this._calculatePoints();
};
_p._calculatePoints = function () {
   var r = this._parent._valueToPosition(this._value);
   if (this._angle == null) this._angle = this._parent._angle;
   var angle = this._angle / 180 * Math.PI;
   var x = r * Math.sin(angle);
   var y = r * Math.cos(angle);
   var nh = this._needlePosition < 0 ? this._needleHeight / 2 : -this._needleHeight / 2;
   var p1x = x + (this._needlePosition + nh) * Math.cos(angle);
   var p1y = y - (this._needlePosition + nh) * Math.sin(angle);
   var tx = x + (this._needlePosition - nh) * Math.cos(angle);
   var ty = y - (this._needlePosition - nh) * Math.sin(angle);
   var p2x = tx - this._needleBase / 2 * Math.sin(angle + Math.PI);
   var p2y = ty - this._needleBase / 2 * Math.cos(angle + Math.PI);
   var p3x = tx + this._needleBase / 2 * Math.sin(angle + Math.PI);
   var p3y = ty + this._needleBase / 2 * Math.cos(angle + Math.PI);
   var cx = this._parent.getWidth() / 2;
   var cy = this._parent.getHeight() / 2;
   p1x = cx + p1x;
   p1y = cy - p1y;
   p2x = cx + p2x;
   p2y = cy - p2y;
   p3x = cx + p3x;
   p3y = cy - p3y;
   var pointsValue = p3x + "," + p3y + " " + p1x + "," + p1y + " " + p2x + "," + p2y + " " + p3x + "," + p3y;
   this.setHtmlProperty("points", pointsValue);
};
BiGauge2LinearNeedle.addProperty("value", BiAccessType.READ);
_p.layoutComponent = function () {
   if (this._value == null) {
      var p = this._parent;
      this.setValue((p.getEndValue() - p.getStartValue()) / 2 + p.getStartValue());
   } else {
      this._calculatePoints();
   }
   BiAbstractGauge2ValueMarker.prototype.layoutComponent.call(this);
};
 
function BiAbstractGauge2ScaleSection() {
   if (_biInPrototype) return;
   BiGauge2Component.call(this);
   this.setSectionWidth(20);
};
_p = _biExtend(BiAbstractGauge2ScaleSection, BiGauge2Component, "BiAbstractGauge2ScaleSection");
BiAbstractGauge2ScaleSection.addProperty("startValue", BiAccessType.READ_WRITE);
BiAbstractGauge2ScaleSection.addProperty("endValue", BiAccessType.READ_WRITE);
BiAbstractGauge2ScaleSection.addProperty("sectionWidth", BiAccessType.READ_WRITE);
 
function BiGauge2RadialScaleSection() {
   if (_biInPrototype) return;
   BiAbstractGauge2ScaleSection.call(this);
}
_p = _biExtend(BiGauge2RadialScaleSection, BiAbstractGauge2ScaleSection, "BiGauge2RadialScaleSection");
_p._tagName = "path";
_p._startPoint = "M0,0";
_p._endPoint = "0,0";
BiGauge2RadialScaleSection.addProperty("radius", BiAccessType.READ_WRITE);
BiGauge2RadialScaleSection.addProperty("color", BiAccessType.READ);
_p.setColor = function (sColor) {
   this._color = sColor;
   this.setHtmlProperty("fill", sColor);
};
_p._calculateAttributes = function () {
   var r1 = this._radius + this._sectionWidth / 2;
   var r2 = this._radius - this._sectionWidth / 2;
   var x0 = this._parent.getWidth() / 2;
   var y0 = this._parent.getHeight() / 2;
   var a0 = this._parent._valueToAngle(this._startValue) / 180 * Math.PI;
   var a2 = this._parent._valueToAngle(this._endValue) / 180 * Math.PI;
   var a1 = (a0 + a2) / 2;
   var isCircle = Math.abs(a2 - a0) - 2 * Math.PI > -0.01;
   var p0 = Math.round(x0 + (Math.sin(a0) * r1)) + "," + Math.round(y0 - (Math.cos(a0) * r1));
   var p1 = Math.round(x0 + (Math.sin(a1) * r1)) + "," + Math.round(y0 - (Math.cos(a1) * r1));
   var p2 = Math.round(x0 + (Math.sin(a2) * r1)) + "," + Math.round(y0 - (Math.cos(a2) * r1));
   var q0 = Math.round(x0 + (Math.sin(a0) * r2)) + "," + Math.round(y0 - (Math.cos(a0) * r2));
   var q1 = Math.round(x0 + (Math.sin(a1) * r2)) + "," + Math.round(y0 - (Math.cos(a1) * r2));
   var q2 = Math.round(x0 + (Math.sin(a2) * r2)) + "," + Math.round(y0 - (Math.cos(a2) * r2));
   var d;
   if (!isCircle) {
      d = ["M", p0, " A", r1, ",", r1, " 0 0 1 ", p1, " A", r1, ",", r1, " 0 0 1 ", p2, " L", q2, " A", r2, ",", r2, " 0 0 0 ", q1, " A", r2, ",", r2, " 0 0 0 ", q0, " L", p0];
   } else {
      d = ["M", p0, " A", r1, ",", r1, " 0 0 1 ", p1, " A", r1, ",", r1, " 0 0 1 ", p2, " M", q2, " A", r2, ",", r2, " 0 0 0 ", q1, " A", r2, ",", r2, " 0 0 0 ", q0];
   }
   this.setHtmlProperty("d", d.join(""));
};
_p.layoutComponent = function () {
   this._calculateAttributes();
   BiAbstractGauge2ScaleSection.prototype.layoutComponent.call(this);
};
 
function BiGauge2Label() {
   if (_biInPrototype) return;
   BiGauge2Component.call(this);
   this.setAnchorHorizontal("center");
};
_p = _biExtend(BiGauge2Label, BiGauge2Component, "BiGauge2Label");
_p._tagName = "text";
_p._font = BiFont.fromString("verdana 50 bold");
_p._anchorVertical = "middle";
_p._color = "black";
BiGauge2Label.addProperty("x", BiAccessType.READ_WRITE);
BiGauge2Label.addProperty("y", BiAccessType.READ_WRITE);
_p.setCenterX = _p.setX;
_p.getCenterX = _p.getX;
_p.setCenterY = _p.setY;
_p.getCenterY = _p.getY;
_p.setWidth = _p.setHeight = BiAccessType.FUNCTION_EMPTY;
BiGauge2Label._hAlign = {
   "left": "start",
   "center": "middle",
   "right": "end"
};
BiGauge2Label.addProperty("font", BiAccessType.READ_WRITE);
_p.setFont = function (o) {
   if (!(o instanceof BiFont)) {
      o = BiFont.fromString("" + o);
   }
   this._font = o;
   if (o instanceof BiFont) {
      if (o.getBold()) this._setHtmlAttribute("font-weight", "bold");
      else this.setStyleProperty("font-weight", "normal");
      if (!o.getSize) o.setSize(50);
      if (!o.getName()) o.setName("verdana");
      this._setHtmlAttribute("font-family", o.getName());
      this._setHtmlAttribute("font-size", o.getSize());
   }
};
BiGauge2Label.addProperty("anchorHorizontal", BiAccessType.READ);
_p.setAnchorHorizontal = function (sAnchorHorizontal) {
   this._anchorHorizontal = sAnchorHorizontal;
   this._setHtmlAttribute("text-anchor", BiGauge2Label._hAlign[sAnchorHorizontal]);
};
BiGauge2Label.addProperty("anchorVertical", BiAccessType.READ_WRITE);
_p.setForeColor = function (sColor) {
   this._foreColor = sColor;
   this._setHtmlAttribute("fill", sColor);
};
_p._create = function (oDocument) {
   BiGauge2Component.prototype._create.call(this, oDocument);
   this._textNode = this._document.createTextNode(this._text);
   var el = this._element;
   el.appendChild(this._textNode);
};
_p.setText = function (sText) {
   this._text = String(sText);
   var el;
   if (el = this._element) {
      el.removeChild(el.childNodes[0]);
      this._textNode = this._document.createTextNode(sText);
      el.appendChild(this._textNode);
   }
};
_p.getText = function () {
   return this._text;
};
_p.layoutComponent = function () {
   var el = this._element;
   var s = Math.floor(this._font.getSize());
   var h = s * 0.8;
   el.setAttribute("x", this._x);
   switch (this._anchorVertical) {
      case "top":
         el.setAttribute("y", Math.round(this._y + h / 2 + h * 1.5 / 2));
         break;
      case "bottom":
         el.setAttribute("y", Math.round(this._y + h / 2 - h * 1.5 / 2));
         break;
      case "middle":
      default:
         el.setAttribute("y", Math.round(this._y + h / 2));
         break;
   }
};
_p.dispose = function () {
   if (this._disposed) return;
   BiGauge2Component.prototype.dispose.call(this);
   delete this._textNode;
};
