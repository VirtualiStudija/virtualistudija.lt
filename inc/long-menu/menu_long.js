(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape.setTransform(25.8,38.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgOQAMgNASAAQAUAAALANQALAOAAAVIAAABQAAAVgLAOQgLAOgUAAQgSAAgMgOgAgRgZQgHAKAAAPIAAABQAAAPAHAKQAFAKAMgBQANABAGgKQAHgKAAgPIAAgBQAAgPgHgKQgGgKgNAAQgMAAgFAKg");
	this.shape_1.setTransform(16,38.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020303").s().p("AAxAwIAAg4QAAgOgFgFQgFgHgKAAQgIABgGAGQgFAGgBAKIAAAAIAAA7IgRAAIAAg4QAAgNgFgGQgFgGgJgBQgIABgFADQgFADgDAGIAABFIgRAAIAAhdIAPAAIACAMQAEgHAHgDQAIgEAJAAQAJgBAHAFQAGAEAEAJQAEgIAHgFQAIgEAKAAQAOAAAJAKQAIAJAAAUIAAA4g");
	this.shape_2.setTransform(3,38.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgUAMgOQANgNAPAAQATgBAKAMQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIALAAQAIAAAHgBQAGgDAGgFIAGALQgFAFgJAEQgIAEgLAAQgUAAgLgOgAgNgbQgGAHgCALIAAAAIAsAAIAAgCQgBgKgFgHQgGgGgKgBQgIAAgGAIg");
	this.shape_3.setTransform(-9.5,38.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#020303").s().p("AgDA1QgHgGAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADACAFAAIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_4.setTransform(-17.7,37.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_5.setTransform(-25.3,38.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_6.setTransform(-32.3,36.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_7.setTransform(-39.2,38.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgOQALgNATAAQAUAAAMANQAKAOABAVIAAABQgBAVgKAOQgMAOgUAAQgTAAgLgOgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAGAKAMgBQAMABAHgKQAGgKABgPIAAgBQgBgPgGgKQgHgKgMAAQgMAAgGAKg");
	this.shape_8.setTransform(-53.5,38.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#020303").s().p("AAxAwIAAg4QAAgOgFgFQgFgHgKAAQgIABgGAGQgFAGgBAKIAAAAIAAA7IgRAAIAAg4QAAgNgFgGQgFgGgJgBQgIABgFADQgFADgDAGIAABFIgRAAIAAhdIAPAAIACAMQAEgHAHgDQAIgEAJAAQAJgBAHAFQAGAEAEAJQAEgIAHgFQAIgEAKAAQAOAAAJAKQAIAJAAAUIAAA4g");
	this.shape_9.setTransform(-66.5,38.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#020303").s().p("AgeBCIgFgBIACgNIADAAIAEAAQAGAAADgFIAGgLIAEgKIgjhcIATAAIAUA8IADALIAAAAIAXhHIAUAAIgoBtQgDAJgHAIQgGAHgMAAIgFgBg");
	this.shape_10.setTransform(-78.8,40.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#020303").s().p("AgdA5QgKgNAAgVIAAgCQAAgVAKgPQAJgNASAAQAHAAAHADQAGADAFAGIAAg1IARAAIAACIIgOAAIgCgLQgFAGgGAEQgHAEgIAAQgRAAgKgNgAgQgEQgGAKAAAPIAAACQAAAPAGAIQAGAKALgBQAIAAAFgDQAGgEADgGIAAgrQgDgHgGgDQgFgDgHgBQgMAAgGALg");
	this.shape_11.setTransform(-88.7,36.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#020303").s().p("AgIBEIAAiIIARAAIAACIg");
	this.shape_12.setTransform(-95.8,36.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAIQgHAGAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAEg");
	this.shape_13.setTransform(-103.1,38.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#020303").s().p("AgFAvIgkhdIASAAIAXBBIAAAHIABAAIABgHIAWhBIASAAIgjBdg");
	this.shape_14.setTransform(-112.4,38.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#020303").s().p("AgeAkQgLgOAAgVIAAgBQAAgVALgOQALgNATAAQAUAAAMANQALAOgBAVIAAABQABAVgLAOQgMAOgUAAQgTAAgLgOgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAHAKALgBQANABAGgKQAGgKAAgPIAAgBQAAgPgGgKQgGgKgNAAQgLAAgHAKg");
	this.shape_15.setTransform(-126.5,38.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_16.setTransform(-133.9,36.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#020303").s().p("AAWAwIAAg6QAAgMgGgGQgFgFgJgBQgHAAgGAFQgGADgDAGIAABEIgSAAIAAhdIAQAAIABANQAFgHAHgEQAIgFAHABQAQAAAJAJQAHAIABAUIAAA6g");
	this.shape_17.setTransform(-141.3,38.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_18.setTransform(-148.7,36.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIABIAEAAIADABIgDAPIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_19.setTransform(-153.5,38.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#020303").s().p("AgdAmQgJgJAAgWIAAg2IASAAIAAA2QAAAQAEAFQAFAHAJgBQAIAAAHgDQAGgEADgHIAAhDIARAAIAABdIgQAAIgBgNQgEAHgHAEQgHAFgJAAQgPAAgJgLg");
	this.shape_20.setTransform(-162.2,38.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#020303").s().p("AgIBAIAAhyIgpAAIAAgNIBjAAIAAANIgpAAIAAByg");
	this.shape_21.setTransform(-172.6,37.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_22.setTransform(-185.4,36.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_23.setTransform(143.4,17.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#020303").s().p("AgbA1QgMgNAAgVIAAgEQAAgUAMgNQANgOAPAAQATAAAKAMQAKAMAAASIAAALIg9AAIAAAAQAAAOAHAJQAHAIALAAQAIAAAHgCQAGgDAGgEIAGALQgFAFgJAEQgIADgLAAQgUAAgLgNgAgNgLQgGAIgCAKIAAAAIAsAAIAAgCQgBgJgFgHQgGgHgKAAQgIAAgGAHgAgIgwIAAgRIASAAIAAARg");
	this.shape_24.setTransform(134,15.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#020303").s().p("AAVAwIAAg6QAAgMgEgGQgGgFgKgBQgGAAgGAFQgFADgEAGIAABEIgRAAIAAhdIAPAAIABANQAFgHAHgEQAIgFAIABQAPAAAIAJQAJAIgBAUIAAA6g");
	this.shape_25.setTransform(124.1,17.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_26.setTransform(116.7,15.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAFg");
	this.shape_27.setTransform(109.4,17.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#020303").s().p("AgDA1QgHgGAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADACAFAAIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_28.setTransform(101.2,16.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgUANgOQALgNAQAAQATgBAKAMQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIAKAAQAJAAAHgBQAGgDAFgFIAHALQgFAFgIAEQgJAEgMAAQgSAAgMgOgAgNgbQgGAHgBALIAAAAIArAAIAAgCQAAgKgGgHQgGgGgKgBQgIAAgGAIg");
	this.shape_29.setTransform(93.7,17.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#020303").s().p("AgFAvIgkhdIASAAIAXBBIAAAHIABAAIABgHIAWhBIASAAIgjBdg");
	this.shape_30.setTransform(84.4,17.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_31.setTransform(75.1,17.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_32.setTransform(61.3,17.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#020303").s().p("AgbA1QgMgNAAgVIAAgEQAAgUAMgNQANgOAPAAQATAAAKAMQAKAMAAASIAAALIg9AAIAAAAQAAAOAHAJQAGAIAMAAQAIAAAHgCQAGgDAGgEIAGALQgFAFgIAEQgJADgLAAQgUAAgLgNgAgNgLQgGAIgBAKIAAAAIArAAIAAgCQAAgJgGgHQgFgHgLAAQgIAAgGAHgAgIgwIAAgRIASAAIAAARg");
	this.shape_33.setTransform(51.9,15.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#020303").s().p("AAVAwIAAg6QABgMgGgGQgEgFgKgBQgHAAgGAFQgGADgDAGIAABEIgSAAIAAhdIAQAAIABANQAFgHAHgEQAIgFAHABQAQAAAIAJQAJAIAAAUIAAA6g");
	this.shape_34.setTransform(42,17.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_35.setTransform(34.6,15.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#020303").s().p("AgDA1QgHgGAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADACAFAAIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_36.setTransform(29,16.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgUANgOQAMgNAPAAQATgBAKAMQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAGAIALAAQAKAAAGgBQAHgDAEgFIAHALQgFAFgJAEQgHAEgNAAQgSAAgMgOgAgNgbQgGAHgCALIAAAAIArAAIAAgCQABgKgGgHQgFgGgLgBQgIAAgGAIg");
	this.shape_37.setTransform(21.5,17.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#020303").s().p("AAWAwIAAg6QgBgMgFgGQgEgFgLgBQgGAAgGAFQgFADgEAGIAABEIgRAAIAAhdIAPAAIACANQAEgHAHgEQAHgFAIABQAQAAAJAJQAHAIABAUIAAA6g");
	this.shape_38.setTransform(11.5,17.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIABIAEAAIADABIgDAPIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_39.setTransform(3.9,17.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgUANgOQALgNAQAAQATgBAKAMQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIAKAAQAKAAAGgBQAHgDAEgFIAHALQgFAFgJAEQgHAEgNAAQgSAAgMgOgAgNgbQgGAHgCALIAAAAIArAAIAAgCQAAgKgFgHQgFgGgLgBQgIAAgGAIg");
	this.shape_40.setTransform(-4.4,17.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#020303").s().p("AgDA1QgHgGAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADACAFAAIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_41.setTransform(-12.6,16.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#020303").s().p("AAWAwIAAg6QgBgMgFgGQgEgFgLgBQgGAAgGAFQgFADgEAGIAABEIgRAAIAAhdIAPAAIACANQAEgHAHgEQAHgFAJABQAPAAAJAJQAHAIAAAUIAAA6g");
	this.shape_42.setTransform(-20.5,17.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_43.setTransform(-27.9,15.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgOQAMgNASAAQAUAAALANQAMAOAAAVIAAABQAAAVgMAOQgLAOgUAAQgSAAgMgOgAgRgZQgHAKAAAPIAAABQAAAPAHAKQAFAJAMAAQANAAAGgJQAHgKAAgPIAAgBQAAgPgHgKQgGgKgNAAQgMAAgFAKg");
	this.shape_44.setTransform(-39.7,17.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#020303").s().p("AAWAwIAAg6QAAgMgGgGQgFgFgJgBQgHAAgGAFQgGADgDAGIAABEIgSAAIAAhdIAQAAIABANQAFgHAHgEQAIgFAHABQAQAAAJAJQAHAIABAUIAAA6g");
	this.shape_45.setTransform(-49.9,17.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_46.setTransform(-57.3,15.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAFg");
	this.shape_47.setTransform(-64.6,17.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#020303").s().p("AglAvIAAgMIAyhEIgxAAIAAgNIBHAAIAAALIgzBFIA2AAIAAANg");
	this.shape_48.setTransform(-73.9,17.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_49.setTransform(-80.8,15.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#020303").s().p("AgdA5QgKgNAAgVIAAgCQAAgVAKgPQAJgNASAAQAHAAAHADQAGADAFAGIAAg1IARAAIAACIIgOAAIgCgLQgFAGgGAEQgHAEgIAAQgRAAgKgNgAgQgEQgGAKAAAPIAAACQAAAPAGAIQAGAKALgBQAIAAAFgDQAGgEADgGIAAgrQgDgHgGgDQgFgDgHgBQgMAAgGALg");
	this.shape_50.setTransform(-88.4,15.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_51.setTransform(-102.4,17.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#020303").s().p("AgdAmQgJgJAAgVIAAg3IASAAIAAA3QAAAPAEAFQAFAHAJgBQAIAAAHgDQAGgEADgHIAAhDIARAAIAABdIgQAAIgBgNQgEAHgHAEQgHAFgJAAQgPAAgJgLg");
	this.shape_52.setTransform(-112.2,17.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAFg");
	this.shape_53.setTransform(-122.3,17.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#020303").s().p("AgIBEIAAiIIARAAIAACIg");
	this.shape_54.setTransform(-129.5,15.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAFg");
	this.shape_55.setTransform(-136.7,17.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#020303").s().p("AATBEIgdgsIgLAAIAAAsIgSAAIAAiIIASAAIAABPIALAAIAZgkIAUAAIggAqIAlAzg");
	this.shape_56.setTransform(-145.6,15.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_57.setTransform(-153.2,15.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#020303").s().p("AAVAwIAAg6QABgMgGgGQgEgFgKgBQgHAAgGAFQgGADgDAGIAABEIgSAAIAAhdIAQAAIABANQAFgHAHgEQAIgFAHABQAQAAAIAJQAJAIAAAUIAAA6g");
	this.shape_58.setTransform(-160.5,17.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#020303").s().p("AgiA2QgNgMAAgUIAAhWIARAAIAABVQAAAPAIAIQAJAHANAAQANAAAJgHQAJgIAAgPIAAhVIARAAIAABWQAAAUgNAMQgOALgVAAQgVAAgNgLg");
	this.shape_59.setTransform(-171.7,15.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_60.setTransform(-185.4,15.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_61.setTransform(137,-4.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#020303").s().p("AgbA1QgMgNAAgVIAAgEQAAgUANgNQAMgOAPAAQATAAAKAMQAKAMAAASIAAALIg9AAIAAAAQAAAOAHAJQAGAIALAAQAKAAAGgCQAHgDAEgEIAHALQgFAFgJAEQgHADgNAAQgSAAgMgNgAgNgLQgGAIgCAKIAAAAIArAAIAAgCQABgJgGgHQgFgHgLAAQgIAAgGAHgAgIgwIAAgRIASAAIAAARg");
	this.shape_62.setTransform(127.7,-6.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#020303").s().p("AAWAwIAAg6QgBgMgFgGQgEgFgLgBQgGAAgGAFQgFADgEAGIAABEIgSAAIAAhdIAQAAIACANQAEgHAHgEQAHgFAIABQAQAAAJAJQAHAIABAUIAAA6g");
	this.shape_63.setTransform(117.7,-4.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_64.setTransform(110.3,-6.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAIQgHAGAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAEg");
	this.shape_65.setTransform(103.1,-4.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#020303").s().p("AgDA1QgHgGAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADACAFAAIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_66.setTransform(94.8,-5.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgUAMgOQAMgNAQAAQATgBAKAMQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIALAAQAJAAAGgBQAHgDAFgFIAGALQgFAFgJAEQgHAEgMAAQgUAAgLgOgAgNgbQgGAHgCALIAAAAIArAAIAAgCQAAgKgFgHQgGgGgKgBQgIAAgGAIg");
	this.shape_67.setTransform(87.3,-4.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#020303").s().p("AgFAvIgkhdIASAAIAXBBIAAAHIABAAIABgHIAWhBIASAAIgjBdg");
	this.shape_68.setTransform(78,-4.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_69.setTransform(68.8,-4.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_70.setTransform(54.9,-4.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#020303").s().p("AgbA1QgMgNAAgVIAAgEQAAgUANgNQALgOAQAAQATAAAKAMQAKAMAAASIAAALIg9AAIAAAAQAAAOAHAJQAHAIAKAAQAKAAAGgCQAHgDAEgEIAHALQgFAFgJAEQgHADgNAAQgSAAgMgNgAgNgLQgGAIgCAKIAAAAIArAAIAAgCQAAgJgFgHQgFgHgLAAQgIAAgGAHgAgIgwIAAgRIASAAIAAARg");
	this.shape_71.setTransform(45.6,-6.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#020303").s().p("AAVAwIAAg6QAAgMgEgGQgFgFgLgBQgGAAgGAFQgGADgDAGIAABEIgRAAIAAhdIAPAAIACANQAEgHAHgEQAHgFAJABQAPAAAIAJQAIAIAAAUIAAA6g");
	this.shape_72.setTransform(35.6,-4.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_73.setTransform(28.2,-6.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#020303").s().p("AgDA1QgHgGAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADACAFAAIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_74.setTransform(22.6,-5.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgUAMgOQANgNAPAAQATgBAKAMQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIALAAQAIAAAHgBQAGgDAGgFIAGALQgFAFgIAEQgJAEgLAAQgTAAgMgOgAgNgbQgGAHgBALIAAAAIArAAIAAgCQgBgKgFgHQgGgGgKgBQgIAAgGAIg");
	this.shape_75.setTransform(15.1,-4.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#020303").s().p("AAVAwIAAg6QAAgMgEgGQgGgFgJgBQgHAAgGAFQgGADgDAGIAABEIgSAAIAAhdIAQAAIABANQAFgHAHgEQAIgFAHABQAQAAAIAJQAJAIAAAUIAAA6g");
	this.shape_76.setTransform(5.2,-4.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIABIAEAAIADABIgDAPIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_77.setTransform(-2.5,-4.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgUAMgOQAMgNAQAAQATgBAKAMQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIAKAAQAJAAAHgBQAGgDAFgFIAHALQgFAFgIAEQgJAEgMAAQgSAAgMgOgAgNgbQgGAHgBALIAAAAIArAAIAAgCQAAgKgGgHQgGgGgKgBQgIAAgGAIg");
	this.shape_78.setTransform(-10.7,-4.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#020303").s().p("AgDA1QgHgGAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADACAFAAIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_79.setTransform(-18.9,-5.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#020303").s().p("AAVAwIAAg6QABgMgGgGQgEgFgKgBQgHAAgGAFQgGADgDAGIAABEIgSAAIAAhdIAQAAIABANQAFgHAHgEQAIgFAHABQAQAAAIAJQAJAIAAAUIAAA6g");
	this.shape_80.setTransform(-26.9,-4.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_81.setTransform(-34.3,-6.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#020303").s().p("AgeAkQgMgOABgVIAAgBQgBgVAMgOQALgNATAAQAUAAAMANQALAOgBAVIAAABQABAVgLAOQgMAOgUAAQgTAAgLgOgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAHAJALAAQAMAAAHgJQAGgKAAgPIAAgBQAAgPgGgKQgHgKgMAAQgLAAgHAKg");
	this.shape_82.setTransform(-46.1,-4.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#020303").s().p("AAVAwIAAg6QAAgMgEgGQgGgFgKgBQgGAAgGAFQgGADgDAGIAABEIgRAAIAAhdIAPAAIACANQAEgHAHgEQAIgFAIABQAPAAAIAJQAJAIgBAUIAAA6g");
	this.shape_83.setTransform(-56.3,-4.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_84.setTransform(-63.7,-6.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAIQgHAGAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAEg");
	this.shape_85.setTransform(-70.9,-4.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#020303").s().p("AglAvIAAgMIAyhEIgxAAIAAgNIBHAAIAAALIgzBFIA2AAIAAANg");
	this.shape_86.setTransform(-80.2,-4.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_87.setTransform(-87.1,-6.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#020303").s().p("AgdA5QgKgNAAgVIAAgCQAAgVAKgPQAJgNASAAQAHAAAHADQAGADAFAGIAAg1IARAAIAACIIgOAAIgCgLQgFAGgGAEQgHAEgIAAQgRAAgKgNgAgQgEQgGAKAAAPIAAACQAAAPAGAIQAGAKALgBQAIAAAFgDQAGgEADgGIAAgrQgDgHgGgDQgFgDgHgBQgMAAgGALg");
	this.shape_88.setTransform(-94.7,-6.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgOQAMgNASAAQAUAAALANQALAOAAAVIAAABQAAAVgLAOQgLAOgUAAQgSAAgMgOgAgRgZQgHAKAAAPIAAABQAAAPAHAKQAFAJAMAAQANAAAGgJQAHgKAAgPIAAgBQAAgPgHgKQgGgKgNAAQgMAAgFAKg");
	this.shape_89.setTransform(-109.1,-4.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#020303").s().p("AgDA1QgHgGAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADACAFAAIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_90.setTransform(-117.6,-5.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#020303").s().p("AgbA7QgKgJAAgMIABgBIAQAAQAAAJAHAFQAGAEAIAAQAJAAAFgEQAGgDAAgHQAAgFgFgEQgEgEgMgCQgRgEgIgHQgJgGAAgKQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJAAQgIAAgEAEQgFAEAAAFQAAAFAEADQAEADALADQASAEAJAHQAJAGAAALQAAANgKAIQgLAIgQAAQgRAAgLgKgAgFgtIgWgVIAAgCIAPAAIAMANIANgNIAPAAIAAACIgXAVg");
	this.shape_91.setTransform(-125.1,-6.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgOQALgNATAAQAUAAAMANQAKAOABAVIAAABQgBAVgKAOQgMAOgUAAQgTAAgLgOgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAGAJAMAAQAMAAAHgJQAGgKABgPIAAgBQgBgPgGgKQgHgKgMAAQgMAAgGAKg");
	this.shape_92.setTransform(-134.9,-4.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#020303").s().p("AgdAmQgJgJAAgWIAAg2IASAAIAAA2QAAAQAEAFQAFAHAJgBQAIAAAHgDQAGgEADgHIAAhDIARAAIAABdIgQAAIgBgNQgEAHgHAEQgHAFgJAAQgPAAgJgLg");
	this.shape_93.setTransform(-145.2,-4.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIABIAEAAIADABIgDAPIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_94.setTransform(-152.8,-4.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAIQgHAGAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAEg");
	this.shape_95.setTransform(-161.4,-4.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#020303").s().p("AgtBAIAAh/IAwAAQAVAAAKALQAMAKAAASQAAARgMAJQgKALgVgBIgfAAIAAA0gAgcAAIAfAAQANAAAGgHQAHgHgBgKQABgLgHgHQgGgHgNgBIgfAAg");
	this.shape_96.setTransform(-171.6,-6.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_97.setTransform(-185.4,-6.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#020303").s().p("AgTBcIgDgJQAMgJAIgVQAJgWgBgeIAAgBQAAgdgIgWQgJgVgLgKIADgJIAAAAQAPAIAOAZQANAYAAAiIAAABQAAAigNAZQgOAYgPAIg");
	this.shape_98.setTransform(134.6,-26.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgUAMgOQANgNAPAAQATgBAKAMQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAGAIAMAAQAIAAAHgBQAGgDAGgFIAGALQgFAFgIAEQgJAEgLAAQgUAAgLgOgAgNgbQgGAHgBALIAAAAIArAAIAAgCQAAgKgGgHQgFgGgLgBQgIAAgGAIg");
	this.shape_99.setTransform(127.5,-26);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#020303").s().p("AgcAkQgLgOAAgUIAAgDQAAgUALgOQALgNATAAQARAAALAKQAKAJAAAOIAAABIgQAAQAAgJgGgFQgGgHgKAAQgMAAgGAKQgGAKAAAOIAAACQAAAQAGAJQAGAJAMAAQAJABAHgGQAGgFAAgIIAQAAIAAABQAAAMgLAKQgLAKgQAAQgTAAgLgOg");
	this.shape_100.setTransform(118,-26);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIABIAEAAIADABIgDAPIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_101.setTransform(110.6,-26.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgUAMgOQANgNAPAAQATgBAKAMQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAGAIAMAAQAIAAAHgBQAGgDAGgFIAGALQgFAFgIAEQgJAEgLAAQgUAAgLgOgAgNgbQgGAHgBALIAAAAIArAAIAAgCQAAgKgGgHQgFgGgLgBQgIAAgGAIg");
	this.shape_102.setTransform(102.3,-26);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#020303").s().p("AAxAwIAAg4QAAgOgFgFQgFgHgKAAQgIABgGAGQgFAGgBAKIAAAAIAAA7IgRAAIAAg4QAAgNgFgGQgFgGgJgBQgIABgFADQgFADgDAGIAABFIgRAAIAAhdIAPAAIACAMQAEgHAHgEQAIgDAJAAQAJgBAHAFQAGAEAEAJQAEgIAHgFQAIgEAKAAQAOAAAJAKQAIAJAAAUIAAA4g");
	this.shape_103.setTransform(89.6,-26.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#020303").s().p("AAxAwIAAg4QAAgOgFgFQgFgHgKAAQgIABgGAGQgFAGgBAKIAAAAIAAA7IgRAAIAAg4QAAgNgFgGQgFgGgJgBQgIABgFADQgFADgDAGIAABFIgRAAIAAhdIAPAAIACAMQAEgHAHgEQAIgDAJAAQAJgBAHAFQAGAEAEAJQAEgIAHgFQAIgEAKAAQAOAAAJAKQAIAJAAAUIAAA4g");
	this.shape_104.setTransform(73.8,-26.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#020303").s().p("AgeAkQgLgOAAgVIAAgBQAAgVALgOQAMgNASAAQAUAAALANQALAOAAAVIAAABQAAAVgLAOQgLAOgUAAQgSAAgMgOgAgRgZQgHAKAAAPIAAABQAAAPAHAKQAFAJAMAAQANAAAGgJQAHgKgBgPIAAgBQABgPgHgKQgGgKgNAAQgMAAgFAKg");
	this.shape_105.setTransform(60.9,-26);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#020303").s().p("AgiAyQgNgPAAgYIAAgWQAAgXANgQQAOgPAVAAQAVAAANAMQANAMAAASIAAABIgRAAQAAgOgIgHQgIgIgOAAQgOAAgIALQgJAMAAARIAAAWQAAASAJALQAIAMAOAAQAOAAAIgHQAIgJAAgNIARAAIAAAAQAAATgNAMQgNAMgVAAQgVAAgOgQg");
	this.shape_106.setTransform(50.2,-27.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgUANgOQALgNAQAAQATgBAKAMQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIAKAAQAKAAAGgBQAHgDAEgFIAHALQgFAFgJAEQgHAEgNAAQgSAAgMgOgAgNgbQgGAHgCALIAAAAIArAAIAAgCQAAgKgFgHQgFgGgLgBQgIAAgGAIg");
	this.shape_107.setTransform(39.7,-26);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#020303").s().p("AAUBcQgQgIgNgYQgOgZAAgiIAAgBQAAgiAOgYQANgZAQgIIAAAAIAEAKQgMAKgJAUQgIAVAAAeIAAABQAAAeAIAVQAIAVANAKIgEAJg");
	this.shape_108.setTransform(32.4,-26.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_109.setTransform(19.8,-26);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#020303").s().p("AgbA1QgMgNAAgVIAAgEQAAgUANgNQALgOAQAAQATAAAKAMQAKAMAAASIAAALIg9AAIAAAAQAAAOAHAJQAHAIAKAAQAJAAAHgCQAGgDAFgEIAHALQgFAFgIAEQgJADgMAAQgSAAgMgNgAgNgLQgGAIgBAKIAAAAIArAAIAAgCQAAgJgGgHQgGgHgKAAQgIAAgGAHgAgIgwIAAgRIASAAIAAARg");
	this.shape_110.setTransform(10.4,-27.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#020303").s().p("AgFAvIgkhdIASAAIAXBBIAAAHIABAAIABgHIAWhBIASAAIgjBdg");
	this.shape_111.setTransform(1.1,-26);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#020303").s().p("AgdAmQgJgJAAgWIAAg2IASAAIAAA2QAAAQAEAFQAFAHAJgBQAIAAAHgDQAGgEADgHIAAhDIARAAIAABdIgQAAIgBgNQgEAHgHAEQgHAFgJAAQgPAAgJgLg");
	this.shape_112.setTransform(-8.6,-25.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#020303").s().p("AgDA1QgHgGAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADACAFAAIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_113.setTransform(-17,-27.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#020303").s().p("AgeAkQgMgOABgVIAAgBQgBgVAMgOQALgNATAAQAUAAAMANQALAOgBAVIAAABQABAVgLAOQgMAOgUAAQgTAAgLgOgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAHAJALAAQAMAAAHgJQAGgKAAgPIAAgBQAAgPgGgKQgHgKgMAAQgLAAgHAKg");
	this.shape_114.setTransform(-24.9,-26);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#020303").s().p("AgdAmQgJgJAAgWIAAg2IASAAIAAA2QAAAQAEAFQAFAHAJgBQAIAAAHgDQAGgEADgHIAAhDIARAAIAABdIgQAAIgBgNQgEAHgHAEQgHAFgJAAQgPAAgJgLg");
	this.shape_115.setTransform(-35.2,-25.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#020303").s().p("AgdA5QgKgNAAgVIAAgCQAAgVAKgPQAJgNASAAQAHAAAHADQAGADAFAGIAAg1IARAAIAACIIgOAAIgCgLQgFAGgGAEQgHAEgIAAQgRAAgKgNgAgQgEQgGAKAAAPIAAACQAAAPAGAIQAGAKALgBQAIAAAFgDQAGgEADgGIAAgrQgDgHgGgDQgFgDgHgBQgMAAgGALg");
	this.shape_116.setTransform(-45.6,-28);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIABIAEAAIADABIgDAPIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_117.setTransform(-53,-26.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAIQgHAGAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAEg");
	this.shape_118.setTransform(-61.6,-26);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#020303").s().p("AgnBDIAAiDIANAAIACAMQAFgGAHgEQAHgEAJAAQARAAAKAOQAKAOAAAXIAAACQAAAUgKANQgKAMgRAAQgIAAgHgDQgHgDgEgGIAAAvgAgNgwQgGADgDAGIAAAtQADAGAGADQAEADAIAAQALAAAHgIQAGgKABgNIAAgCQgBgQgGgKQgHgLgLAAQgHAAgFAEg");
	this.shape_119.setTransform(-71.4,-24.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_120.setTransform(-85.8,-26);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#020303").s().p("AgbA1QgMgNAAgVIAAgEQAAgUANgNQAMgOAPAAQATAAAKAMQAKAMAAASIAAALIg9AAIAAAAQAAAOAHAJQAGAIALAAQAKAAAGgCQAHgDAEgEIAHALQgFAFgJAEQgHADgNAAQgSAAgMgNgAgNgLQgGAIgCAKIAAAAIArAAIAAgCQABgJgGgHQgFgHgLAAQgIAAgGAHgAgIgwIAAgRIASAAIAAARg");
	this.shape_121.setTransform(-95.2,-27.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#020303").s().p("AAWAwIAAg6QgBgMgFgGQgEgFgLgBQgGAAgGAFQgFADgEAGIAABEIgRAAIAAhdIAPAAIACANQAEgHAHgEQAHgFAJABQAPAAAJAJQAHAIAAAUIAAA6g");
	this.shape_122.setTransform(-105.1,-26.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_123.setTransform(-112.5,-28.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#020303").s().p("AgDA1QgHgGAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADACAFAAIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_124.setTransform(-118.1,-27.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgUAMgOQANgNAPAAQATgBAKAMQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIALAAQAIAAAHgBQAGgDAGgFIAGALQgFAFgJAEQgIAEgLAAQgUAAgLgOgAgNgbQgGAHgCALIAAAAIAsAAIAAgCQgBgKgFgHQgGgGgKgBQgIAAgGAIg");
	this.shape_125.setTransform(-125.6,-26);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#020303").s().p("AAVAwIAAg6QAAgMgEgGQgGgFgKgBQgGAAgGAFQgFADgEAGIAABEIgRAAIAAhdIAPAAIABANQAFgHAHgEQAIgFAIABQAPAAAIAJQAJAIgBAUIAAA6g");
	this.shape_126.setTransform(-135.6,-26.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIABIAEAAIADABIgDAPIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_127.setTransform(-143.2,-26.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgUAMgOQANgNAPAAQATgBAKAMQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAGAIAMAAQAIAAAHgBQAGgDAGgFIAGALQgFAFgIAEQgJAEgLAAQgUAAgLgOgAgNgbQgGAHgBALIAAAAIArAAIAAgCQAAgKgGgHQgFgGgLgBQgIAAgGAIg");
	this.shape_128.setTransform(-151.5,-26);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#020303").s().p("AgDA1QgHgGAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADACAFAAIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_129.setTransform(-159.7,-27.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#020303").s().p("AAVAwIAAg6QAAgMgEgGQgGgFgJgBQgHAAgGAFQgGADgDAGIAABEIgSAAIAAhdIAQAAIABANQAFgHAHgEQAIgFAHABQAQAAAIAJQAJAIgBAUIAAA6g");
	this.shape_130.setTransform(-167.6,-26.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#020303").s().p("AgIBAIAAh/IARAAIAAB/g");
	this.shape_131.setTransform(-175.3,-27.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_132.setTransform(-185.4,-28);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FAAF3C").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAIAGAPAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape_133.setTransform(39.6,-53.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FAAF3C").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_134.setTransform(24.5,-53.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FAAF3C").s().p("AAzBVIAAgqIAEhNIgBAAIgpB3IgaAAIgoh2IgBAAIAEBMIAAAqIgoAAIAAipIA0AAIAmB2IAAAAIAnh2IA0AAIAACpg");
	this.shape_135.setTransform(6.3,-53.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FAAF3C").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_136.setTransform(-7.7,-53.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FAAF3C").s().p("AAeBVQgFgDgCgKIgBgRIAAgKQAAgMgGgHQgHgGgLAAIgcAAIAABBIgnAAIAAipIBBAAQAdAAARANQASAOAAAYQAAANgHAKQgHAJgOAFQAQAEAHALQAGAKAAAQIAAAKQAAAHACAJQACAIAFAEIAAACgAgegKIAaAAQALAAAHgFQAGgGAAgKQAAgKgGgGQgHgHgLAAIgaAAg");
	this.shape_137.setTransform(-18.7,-53.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FAAF3C").s().p("AgyBZQgTgQgBgdIAAhvIApAAIAABvQgBAQAJAHQAHAIAOAAQAPAAAIgIQAIgHAAgQIAAhvIAnAAIAABvQABAdgUAQQgTAQggAAQgfAAgTgQgAgqhUIAAgUIBVAAIAAAUg");
	this.shape_138.setTransform(-35.4,-55.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FAAF3C").s().p("AAYBVIglhEIgTAAIAABEIgnAAIAAipIAnAAIAABCIAOAAIAkhCIAyAAIg1BNIA5Bcg");
	this.shape_139.setTransform(-50.7,-53.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FAAF3C").s().p("AgRBnQgIgHgBgLQABgJAFgIIAEgGIAQABIAKAAIgGAIQgCADAAAGIACAFQABACAHAAIAFgBIAFgBIAEATIgJAEQgGACgGAAQgNAAgJgHgAAAA/IgQgBQAEgFAFgDIATAHIgCACIACgCIgTgHQgFADgEAFQgUgDgOgMQgTgQgBgdIAAhvIApAAIAABvQgBAQAJAHQAHAIAOAAQAPAAAIgIQAIgHAAgQIAAhvIAnAAIAABvQABAdgUAQQgQAOgZACIgKAAIAAAAgAgQA+IAAAAg");
	this.shape_140.setTransform(-73.5,-50.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FAAF3C").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_141.setTransform(-85.4,-53.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FAAF3C").s().p("AAgBVIg+hrIgBAAIAABrIgnAAIAAipIAnAAIA+BrIABAAIAAhrIAnAAIAACpg");
	this.shape_142.setTransform(-97.4,-53.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FAAF3C").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_143.setTransform(-109.5,-53.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FAAF3C").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_144.setTransform(-120.6,-53.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FAAF3C").s().p("AgTBVIAAiLIgtAAIAAgeICBAAIAAAeIgtAAIAACLg");
	this.shape_145.setTransform(-135,-53.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FAAF3C").s().p("Ag6BVIAAipIB1AAIAAAeIhOAAIAAAlIBCAAIAAAdIhCAAIAAArIBOAAIAAAeg");
	this.shape_146.setTransform(-148.2,-53.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FAAF3C").s().p("AgUBVIg3ipIApAAIAhB7IABAGIAAAAIABgGIAih7IAqAAIg4Cpg");
	this.shape_147.setTransform(-163.1,-53.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FAAF3C").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAIAGAPAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape_148.setTransform(-178.3,-53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-190.4,-72,380.8,144), null);


(lib.Spauda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808181").s().p("AB5D7QgTg8hmAAQhmAAgTA8IgDALIAAmZQAAgtAEgOQAUg4BkAAQBlAAATA4QAFAQAAArIAAGNIAAAMgAhVggQgDABgBADQgBADACADQADAHAHgEIAQgHQAZgHAlAAQAlAAAaAHIARAHIADABQAEgBACgDQABgDAAgDQgBgDgDgBQgfgPg3AAQg2AAgfAPgAhVhnQgHADAEAHQADAFAHgCIAQgHQAZgHAlAAQAlAAAaAHIARAHIADAAQAEAAACgDQADgHgGgDQghgQg1AAQg1AAggAQgAhViuQgHADAEAHQADAFAHgCQAFgEALgDQAZgIAlABQAlgBAaAIQAKADAHAEIADAAQAEAAACgDQADgHgGgDQgfgQg3AAQg2AAgfAQg");
	this.shape.setTransform(13.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808181").s().p("AB5D7QgSg8hnAAQhmAAgSA8IgEALIAAgMIAAmNQAAgrAFgQQATg4BkAAQBlAAATA4QAFAOAAAtIAAGNIAAAMgAhVggQgDABgBADQgBADACADQACAHAIgEIAQgHQAagHAkAAQAlAAAaAHIAQAHIAEABQAFgBABgDQACgDgBgDQgBgDgDgBQgfgPg3AAQg1AAggAPgAhVhnQgHADAEAHQACAGAIgDIAQgHQAagHAkAAQAlAAAaAHIAQAHIAEAAQAFAAABgDQAEgHgHgDQghgQg1AAQg0AAghAQgAhViuQgHADAEAHQACAGAIgDQAFgEALgDQAagIAkABQAlgBAaAIQALADAFAEIAEAAQAFAAABgDQAEgHgHgDQgfgQg3AAQg1AAggAQg");
	this.shape_1.setTransform(-13.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AB5D6QgTg7hmAAQhmAAgTA7IgDANIAAmbQAAgrAEgOQAUg5BkAAQBlAAATA5QAFAPAAAqIAAGOIAAANgAhVggQgDABgBADQgBADACADQADAGAHgDIAQgGQAZgIAlAAQAlAAAaAIIARAGIADAAQAEAAACgDQABgDAAgDQgBgDgDgBQgfgQg3AAQg2AAgfAQgAhVhnQgHADAEAGQADAGAHgCIAQgGQAZgIAlAAQAlAAAaAIIARAGIADAAQAEAAACgEQADgFgGgEQghgQg1AAQg1AAggAQgAhVivQgHAEAEAGQADAHAHgDQAFgEALgDQAZgHAlAAQAlAAAaAHQAKADAHAEIADABQAEgBACgEQADgFgGgFQgfgPg3AAQg2AAgfAPg");
	this.shape_2.setTransform(13.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AB5D6QgSg7hnAAQhmAAgSA7IgEANIAAgNIAAmOQAAgqAFgPQATg5BkAAQBlAAATA5QAFAOAAArIAAGOIAAANgAhVggQgDABgBADQgBADACADQACAGAIgDIAQgGQAagIAkAAQAlAAAaAIIAQAGIAEAAQAFAAABgDQACgDgBgDQgBgDgDgBQgfgQg3AAQg1AAggAQgAhVhnQgHAEAEAFQACAHAIgDIAQgGQAagIAkAAQAlAAAaAIIAQAGIAEAAQAFAAABgEQAEgFgHgEQghgQg1AAQg0AAghAQgAhVivQgHAFAEAFQACAHAIgDQAFgEALgDQAagHAkAAQAlAAAaAHQALADAFAEIAEABQAFgBABgEQAEgFgHgFQgfgPg3AAQg1AAggAPg");
	this.shape_3.setTransform(-13.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:-13.6}},{t:this.shape,p:{scaleX:1,scaleY:1,x:13.7}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.885,scaleY:0.885,x:-12.1}},{t:this.shape,p:{scaleX:0.885,scaleY:0.885,x:12.1}}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-26.2,52.4,52.5);


(lib.MARK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CC541").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAHAGAQAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape.setTransform(64,-33.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CC541").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_1.setTransform(48.9,-33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8CC541").s().p("AgwBEQgUgTAAgfIAAgjQAAgfATgTQAUgUAdAAQAhAAAQAPQARAQACAaIAAABIglAAQgCgOgHgHQgHgGgOAAQgNAAgIALQgIALAAARIAAAjQAAASAIAKQAIALAOAAQALAAAGgCQAHgBADgDIAAgbIgbAAIAAgZIBDAAIAAA/QgJAKgQAIQgRAIgZAAQgeAAgUgUg");
	this.shape_2.setTransform(33.2,-33.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CC541").s().p("AAgBVIg+hrIgBAAIAABrIgnAAIAAipIAnAAIA+BrIABAAIAAhrIAnAAIAACpg");
	this.shape_3.setTransform(16.9,-33.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8CC541").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_4.setTransform(4.8,-33.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8CC541").s().p("AgTBVIAAiLIgtAAIAAgeICBAAIAAAeIgtAAIAACLg");
	this.shape_5.setTransform(-5.5,-33.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8CC541").s().p("Ag6BVIAAipIB1AAIAAAeIhOAAIAAAlIBCAAIAAAdIhCAAIAAArIBOAAIAAAeg");
	this.shape_6.setTransform(-18.6,-33.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8CC541").s().p("AAYBVIglhEIgTAAIAABEIgnAAIAAipIAnAAIAABCIAOAAIAkhCIAyAAIg1BNIA5Bcg");
	this.shape_7.setTransform(-32.9,-33.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8CC541").s().p("AAeBVQgFgDgCgKIgBgRIAAgKQAAgMgGgHQgHgGgLAAIgcAAIAABBIgnAAIAAipIBBAAQAdAAARANQASAOAAAYQAAANgHAKQgHAJgOAFQAQAEAHALQAGAKAAAQIAAAKQAAAHACAJQACAIAFAEIAAACgAgegKIAaAAQALAAAHgFQAGgGAAgKQAAgKgGgGQgHgHgLAAIgaAAg");
	this.shape_8.setTransform(-48.9,-33.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8CC541").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_9.setTransform(-64.8,-33.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8CC541").s().p("AAzBVIAAgqIAEhNIgBAAIgpB3IgaAAIgoh2IgBAAIAEBMIAAAqIgoAAIAAipIA0AAIAmB2IAAAAIAnh2IA0AAIAACpg");
	this.shape_10.setTransform(-83,-33.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQANgOAPAAQATAAAKAMQAKAMAAATIAAAKIg9AAIAAAAQAAAOAHAJQAHAJALAAQAIAAAHgDQAGgDAGgDIAGALQgFAEgJAEQgIAEgLgBQgUAAgLgNgAgNgbQgGAHgCALIAAABIAsAAIAAgDQgBgKgFgHQgGgGgKAAQgIgBgGAIg");
	this.shape_11.setTransform(59.8,40.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#020303").s().p("AgDA1QgHgGAAgNIAAg6IgPAAIAAgMIAPAAIAAgXIARAAIAAAXIASAAIAAAMIgSAAIAAA6QAAAGACADQADADAFgBIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_12.setTransform(51.6,39.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVANgNQALgOAQAAQATAAAKAMQAKAMAAATIAAAKIg9AAIAAAAQAAAOAHAJQAGAJALAAQAJAAAHgDQAGgDAFgDIAHALQgFAEgIAEQgJAEgMgBQgSAAgMgNgAgNgbQgGAHgBALIAAABIAqAAIAAgDQABgKgGgHQgGgGgKAAQgIgBgGAIg");
	this.shape_13.setTransform(44.1,40.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#020303").s().p("AAWAxIAAg7QAAgNgGgFQgFgGgJABQgHAAgGADQgGAEgDAGIAABFIgSAAIAAhfIAQAAIACAOQAEgHAHgEQAHgEAIgBQAQABAJAIQAHAKABASIAAA8g");
	this.shape_14.setTransform(34.1,40.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#020303").s().p("AgXAxIAAhfIAQAAIABAOQAFgHAEgEQAGgEAIgBIAEABIADAAIgDAQIgJAAQgGAAgFADQgEAEgCAFIAABEg");
	this.shape_15.setTransform(26.5,40.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVANgNQAMgOAPAAQATAAAKAMQAKAMAAATIAAAKIg9AAIAAAAQAAAOAHAJQAGAJALAAQAKAAAGgDQAHgDAEgDIAHALQgFAEgJAEQgHAEgNgBQgSAAgMgNgAgNgbQgGAHgCALIAAABIArAAIAAgDQABgKgGgHQgFgGgLAAQgIgBgGAIg");
	this.shape_16.setTransform(18.2,40.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#020303").s().p("AgDA1QgHgGAAgNIAAg6IgPAAIAAgMIAPAAIAAgXIARAAIAAAXIASAAIAAAMIgSAAIAAA6QAAAGACADQADADAFgBIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_17.setTransform(10,39.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#020303").s().p("AAWAxIAAg7QgBgNgFgFQgEgGgLABQgGAAgGADQgFAEgEAGIAABFIgSAAIAAhfIAQAAIACAOQAEgHAHgEQAHgEAJgBQAPABAJAIQAHAKABASIAAA8g");
	this.shape_18.setTransform(2.1,40.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_19.setTransform(-5.3,38.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgIAPgBQAQAAAKAJQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAFgJgBQgOAAgIgHgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_20.setTransform(-17,40.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#020303").s().p("AAxAxIAAg4QAAgOgFgHQgFgFgKAAQgIAAgGAGQgFAGgBAJIAAABIAAA8IgRAAIAAg4QAAgOgFgGQgFgGgJAAQgIgBgFAEQgFADgDAGIAABGIgRAAIAAhfIAPAAIACANQAEgHAHgDQAIgFAJAAQAJABAHAEQAGAFAEAIQAEgIAHgEQAIgGAKAAQAOABAJAJQAIAKAAAVIAAA4g");
	this.shape_21.setTransform(-29.8,40.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgIAPgBQAQAAAKAJQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAFgJgBQgOAAgIgHgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_22.setTransform(-42.7,40.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#020303").s().p("AgIBFIAAiIIARAAIAACIg");
	this.shape_23.setTransform(-49.9,38.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#020303").s().p("AAUBFIgfgtIgLAAIAAAtIgRAAIAAiIIARAAIAABOIALAAIAZglIAWAAIghAqIAlA1g");
	this.shape_24.setTransform(-56.1,38.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVANgNQALgOAQAAQATAAAKAMQAKAMAAATIAAAKIg9AAIAAAAQAAAOAHAJQAHAJAKAAQAKAAAGgDQAHgDAEgDIAHALQgFAEgJAEQgHAEgNgBQgSAAgMgNgAgNgbQgGAHgCALIAAABIArAAIAAgDQAAgKgFgHQgFgGgLAAQgIgBgGAIg");
	this.shape_25.setTransform(-66,40.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#020303").s().p("AAeBAQgEgDgBgGIgBgMIAAgLQAAgLgGgGQgGgHgKAAIggAAIAAA4IgRAAIAAh/IAuAAQAVAAALAJQALAKAAARQAAALgFAGQgGAIgJADQAKADAFAJQAEAHAAAMIAAALQABAHABAEQABAFAEADIAAACgAgegEIAcAAQAOAAAGgGQAGgFAAgMQAAgKgGgHQgGgFgNAAIgdAAg");
	this.shape_26.setTransform(-76.5,38.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_27.setTransform(-90.4,38.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAEQAGAFAIAAQAJAAAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgEgIgFQgJgHAAgLQAAgLAKgIQAKgJAOAAQARAAAKAJQAKAIgBANIAAABIgQAAQAAgHgGgFQgFgEgJAAQgIAAgEADQgFAFAAAFQAAAGAEADQAEADALADQASAEAJAFQAJAHAAALQAAAMgKAIQgLAJgQgBQgRAAgLgJg");
	this.shape_28.setTransform(38.5,18.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgIAPgBQAQAAAKAJQAKAIAAAQIAAAtIABAJIACAJIgSAAIgCgHIAAgHQgFAHgIAFQgHAFgJgBQgOAAgIgHgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_29.setTransform(28.8,18.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#020303").s().p("AAxAwIAAg3QAAgOgFgHQgFgFgKAAQgIAAgGAGQgFAGgBAJIAAABIAAA7IgRAAIAAg3QAAgOgFgGQgFgGgJAAQgIgBgFAEQgFADgDAGIAABFIgRAAIAAheIAPAAIACANQAEgHAHgDQAIgFAJAAQAJABAHAEQAGAFAEAIQAEgIAHgEQAIgGAKAAQAOABAJAJQAIAKAAAVIAAA3g");
	this.shape_30.setTransform(16,18.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#020303").s().p("AgIBEIAAheIARAAIAABegAgIgyIAAgRIARAAIAAARg");
	this.shape_31.setTransform(5.9,16.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#020303").s().p("AgXAwIAAheIAQAAIABAPQAFgIAEgEQAGgEAIgBIAEABIADAAIgDAQIgJAAQgGAAgFADQgEAEgCAFIAABDg");
	this.shape_32.setTransform(1.1,18.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#020303").s().p("AgdA2QgJgKAAgUIAAg4IASAAIAAA4QAAAPAEAGQAFAFAJABQAIAAAHgFQAGgDADgHIAAhEIARAAIAABeIgQAAIgBgOQgEAIgHAEQgHAFgJgBQgPABgJgLgAgegzIAAgMIA+AAIAAAMg");
	this.shape_33.setTransform(-7.7,17.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#020303").s().p("AAUBEIgfgsIgKAAIAAAsIgSAAIAAiHIASAAIAABOIAKAAIAZglIAVAAIggAqIAlA0g");
	this.shape_34.setTransform(-16.7,16.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgNQAMgOASgBQAUABALAOQAMANAAAVIAAABQAAAWgMANQgLANgUAAQgSAAgMgNgAgRgZQgHAKAAAPIAAABQAAAPAHAKQAGAKALAAQAMAAAHgKQAGgKABgPIAAgBQgBgPgGgKQgHgJgMAAQgLAAgGAJg");
	this.shape_35.setTransform(-31.5,18.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#020303").s().p("AgIBEIAAheIARAAIAABegAgIgyIAAgRIARAAIAAARg");
	this.shape_36.setTransform(-38.9,16.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#020303").s().p("AAVAwIAAg6QAAgNgEgFQgFgGgLABQgGAAgGADQgGAEgDAGIAABEIgRAAIAAheIAPAAIACAPQAEgIAHgEQAHgEAJgBQAPABAIAIQAIAKAAASIAAA7g");
	this.shape_37.setTransform(-46.3,18.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#020303").s().p("AgIBEIAAheIARAAIAABegAgIgyIAAgRIARAAIAAARg");
	this.shape_38.setTransform(-53.7,16.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#020303").s().p("AgXAwIAAheIAQAAIABAPQAFgIAEgEQAGgEAIgBIAEABIADAAIgDAQIgJAAQgGAAgFADQgEAEgCAFIAABDg");
	this.shape_39.setTransform(-58.5,18.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#020303").s().p("AgdAmQgJgKAAgUIAAg4IASAAIAAA4QAAAPAEAGQAFAFAJABQAIAAAHgFQAGgDADgHIAAhEIARAAIAABeIgQAAIgBgOQgEAIgHAEQgHAFgJgBQgPABgJgLg");
	this.shape_40.setTransform(-67.2,18.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#020303").s().p("AgIBAIAAhxIgpAAIAAgOIBjAAIAAAOIgpAAIAABxg");
	this.shape_41.setTransform(-77.6,17);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_42.setTransform(-90.4,16.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAEQAGAFAIAAQAJAAAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgEgIgFQgJgHAAgLQAAgLAKgIQAKgJAOAAQARAAAKAJQAKAIgBANIAAABIgQAAQAAgHgGgFQgFgEgJAAQgIAAgEADQgFAFAAAFQAAAGAEADQAEADALADQASAEAJAFQAJAHAAALQAAAMgKAIQgLAJgQgBQgRAAgLgJg");
	this.shape_43.setTransform(34.8,-2.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#020303").s().p("AgeAkQgMgOABgVIAAgBQgBgVAMgNQALgOATgBQAUABAMAOQALANAAAVIAAABQAAAWgLANQgMANgUAAQgTAAgLgNgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAHAKALAAQAMAAAHgKQAGgKAAgPIAAgBQAAgPgGgKQgHgJgMAAQgLAAgHAJg");
	this.shape_44.setTransform(25,-2.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#020303").s().p("AgPBCQgIgCgGgDIAFgOQAEADAHABQAHACAGAAQAMAAAFgGQAGgFAAgMIAAgLQgEAGgHADQgGADgIAAQgRAAgKgNQgKgMAAgUIAAgCQAAgWAKgPQAKgOARAAQAIAAAHAEQAHAEAFAHIACgNIANAAIAABfQAAASgKAKQgLAKgTAAQgHAAgIgCgAgQgqQgGAKAAAQIAAACQAAAOAGAIQAGAJALAAQAIAAAFgDQAGgEADgHIAAgqQgDgGgGgEQgFgEgHAAQgMAAgGALg");
	this.shape_45.setTransform(14.6,-1.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#020303").s().p("AgdAmQgJgKAAgUIAAg4IASAAIAAA4QAAAPAEAGQAFAFAJABQAIAAAHgFQAGgDADgHIAAhEIARAAIAABeIgQAAIgBgOQgEAIgHAEQgHAFgJgBQgPABgJgLg");
	this.shape_46.setTransform(4.6,-2.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgIAPgBQAQAAAKAJQAKAIAAAQIAAAtIABAJIACAJIgSAAIgCgHIAAgHQgFAHgIAFQgHAFgJgBQgOAAgIgHgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_47.setTransform(-5.5,-2.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#020303").s().p("AgIBEIAAiHIARAAIAACHg");
	this.shape_48.setTransform(-12.7,-5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAEQAGAFAIAAQAJAAAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgEgIgFQgJgHAAgLQAAgLAKgIQAKgJAOAAQARAAAKAJQAKAIgBANIAAABIgQAAQAAgHgGgFQgFgEgJAAQgIAAgEADQgFAFAAAFQAAAGAEADQAEADALADQASAEAJAFQAJAHAAALQAAAMgKAIQgLAJgQgBQgRAAgLgJg");
	this.shape_49.setTransform(-19.6,-2.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgIAPgBQAQAAAKAJQAKAIAAAQIAAAtIABAJIACAJIgSAAIgCgHIAAgHQgFAHgIAFQgHAFgJgBQgOAAgIgHgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_50.setTransform(-29.3,-2.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#020303").s().p("AgoBDIAAiDIAOAAIADAMQAEgGAHgEQAHgEAJAAQARAAAKAOQAJAOAAAXIAAACQAAAUgJANQgKAMgRAAQgIAAgHgDQgGgDgFgGIAAAvgAgNgwQgGADgDAGIAAAtQADAGAGADQAFADAHAAQALAAAHgIQAGgKAAgNIAAgCQAAgQgGgKQgHgLgLAAQgIAAgEAEg");
	this.shape_51.setTransform(-39.1,-1.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#020303").s().p("AgkAyQgOgPAAgXIAAgXQAAgXAOgPQAOgQAWAAQAWAAAPAQQAOAPAAAXIAAAXQAAAXgOAPQgPAQgWAAQgWAAgOgQgAgYgnQgJALAAARIAAAXQAAARAJAMQAJALAPgBQAPABAKgLQAJgMAAgRIAAgXQAAgRgJgLQgKgLgPAAQgPAAgJALg");
	this.shape_52.setTransform(-55,-4.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#020303").s().p("AgpBAIAAh/IBTAAIAAAOIhCAAIAAApIA6AAIAAANIg6AAIAAAtIBCAAIAAAOg");
	this.shape_53.setTransform(-65.8,-4.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#020303").s().p("AgfA4QgPgLAAgSIAAAAIARAAQAAANAJAGQAJAGAMAAQANAAAIgFQAIgGAAgJQAAgJgHgGQgGgGgRgEQgUgFgLgIQgLgKAAgOQAAgPAMgKQAMgKATAAQAVAAAMALQANAMgBAPIAAABIgQAAQAAgMgIgGQgHgHgOAAQgMAAgHAFQgHAHAAAJQAAAJAIAFQAHAFAQAFQAUAEALAJQAKAKAAAPQAAAPgNAKQgMAJgVAAQgSAAgOgKg");
	this.shape_54.setTransform(-77.3,-4.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_55.setTransform(-90.4,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MARK, new cjs.Rectangle(-95.4,-51.9,190.8,103.8), null);


(lib.Logotipai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808181").s().p("AgLALQgEgFAAgGQAAgGAEgEQAEgFAHAAQAHAAAFAFQAEAFAAAFQAAAGgEAFQgFAFgHAAQgHAAgEgFg");
	this.shape.setTransform(-21.1,-21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808181").s().p("AAeDAQgegWgMglQgIgXADgZQADgYAOgWQgiAQglALQgkALggAAQgrAAgjgUQg7ghgQg/QgKgnAIgrQAHgrAYgmQAEgHAJAAQALAAAEAJQAFAGgFAJQgVAhgHAkQgHAjAIAgQAOAzAzAdQAZANAeABQgigIgdgXQgXgSgMgaQgMgbAAgfQABgfAOgbQAOgcAYgRQAegXAmAAQApAAAfAZQAiAZAKAoQAEAPgBASQgBAHgFAEQgFAEgGAAQgIAAgEgEQgEgEAAgIQACgbgOgXQgPgXgZgLQgPgGgRAAQgSAAgRAHQgSAIgLANQgPAQgGAVQgEARACAPQAEAWANAHQAYAOAXAAQARAAAOgIQASgLADgUQADgSgNgOQgHgJgMAAIgKACQgIABgFAIQgEAFADAHIACADIACgBQAFgFAGAAQALAAAEAKQAEAKgHAHQgLALgNAAQgWAAgLgUQgKgQAKgUQAIgSAQgJQAOgIAPAAQAaAAAUAXQAWAZgGAeQgFAggaATQgYARgeAAQgSAAgRgHIgEgCQAXAXAkAJQAMACAKAAQATAAAYgHIAqgOIANgFQAigNAggFIAsgDQBBAAA7AfQgIgwAfgoQAEgGAHAAQAKAAAFAKQAEAKgGAJQgVAbAGAiQAHAjAfASQAIAEAAAJQABAJgJAGQgFAFgGAAQgHAAgEgFQgwg2hHgKQgSgDgPAAQgdAAgTAMQgUANgGAZQgHAYAMAVQANAYAbAAQANAAAMgHQAKgGAEgMQAEgMgFgLQgFgLgLAAQgNAAgDAOQgCAMgMAAQgJAAgFgHQgFgGACgIQAEgTANgJQAMgJAPAAQAUAAAPANQARAOACAWQACAegUAVQgXAZggAAQgOAAgQgHQgegOgMgdQAAAEABADQAHAbAWARQAXASAeAAQAOAAALgEIAEgBQAHAAAEAFQAEAEABAGQACAOgOAEQgSAFgQAAQglAAgfgXg");
	this.shape_1.setTransform(0,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgLALQgEgFAAgGQAAgGAEgEQAEgFAHAAQAHAAAFAFQAEAFAAAFQAAAGgEAFQgFAFgHAAQgHAAgEgFg");
	this.shape_2.setTransform(-21.1,-21.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AAeDAQgegWgMglQgIgXADgZQADgYAOgWQgiAQglALQgkALggAAQgrAAgjgUQg7ghgQg/QgKgnAIgrQAHgrAYgmQAEgHAJAAQALAAAEAJQAFAGgFAJQgVAhgHAkQgHAjAIAgQAOAzAzAdQAZANAeABQgigIgdgXQgXgSgMgaQgMgbAAgfQABgfAOgbQAOgcAYgRQAegXAmAAQApAAAfAZQAiAZAKAoQAEAPgBASQgBAHgFAEQgFAEgGAAQgIAAgEgEQgEgEAAgIQACgbgOgXQgPgXgZgLQgPgGgRAAQgSAAgRAHQgSAIgLANQgPAQgGAVQgEARACAPQAEAWANAHQAYAOAXAAQARAAAOgIQASgLADgUQADgSgNgOQgHgJgMAAIgKACQgIABgFAIQgEAFADAHIACADIACgBQAFgFAGAAQALAAAEAKQAEAKgHAHQgLALgNAAQgWAAgLgUQgKgQAKgUQAIgSAQgJQAOgIAPAAQAaAAAUAXQAWAZgGAeQgFAggaATQgYARgeAAQgSAAgRgHIgEgCQAXAXAkAJQAMACAKAAQATAAAYgHIAqgOIANgFQAigNAggFIAsgDQBBAAA7AfQgIgwAfgoQAEgGAHAAQAKAAAFAKQAEAKgGAJQgVAbAGAiQAHAjAfASQAIAEAAAJQABAJgJAGQgFAFgGAAQgHAAgEgFQgwg2hHgKQgSgDgPAAQgdAAgTAMQgUANgGAZQgHAYAMAVQANAYAbAAQANAAAMgHQAKgGAEgMQAEgMgFgLQgFgLgLAAQgNAAgDAOQgCAMgMAAQgJAAgFgHQgFgGACgIQAEgTANgJQAMgJAPAAQAUAAAPANQARAOACAWQACAegUAVQgXAZggAAQgOAAgQgHQgegOgMgdQAAAEABADQAHAbAWARQAXASAeAAQAOAAALgEIAEgBQAHAAAEAFQAEAEABAGQACAOgOAEQgSAFgQAAQglAAgfgXg");
	this.shape_3.setTransform(0,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AnAEEIAAoGIHAkEIHBEDIABIHInCEDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,y:1.4}},{t:this.shape,p:{scaleX:1,scaleY:1,x:-21.1,y:-21.2}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.899,scaleY:0.899,y:1.3}},{t:this.shape,p:{scaleX:0.899,scaleY:0.899,x:-19,y:-19.1}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.899,scaleY:0.899,y:1.3}},{t:this.shape,p:{scaleX:0.899,scaleY:0.899,x:-19,y:-19.1}},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-22.8,59.7,45.8);


(lib.Headers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2CA9E1").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAIAGAPAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape.setTransform(-144.5,268.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CA9E1").s().p("AgzBDQgVgUAAggIAAgdQAAggAVgUQATgVAgAAQAgAAAUAVQAVAUgBAgIAAAdQABAggVAUQgTAVghAAQgfAAgUgVgAgXgtQgJAMAAASIAAAeQAAATAJAMQAIALAPAAQAQAAAIgLQAJgMAAgTIAAgeQAAgSgJgMQgJgLgPAAQgPAAgIALg");
	this.shape_1.setTransform(-160.3,268.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2CA9E1").s().p("AgwBEQgUgTAAgfIAAgjQAAgfATgTQAUgUAdAAQAhAAAQAPQARAQACAaIAAABIglAAQgCgOgHgHQgHgGgOAAQgNAAgIALQgIALAAARIAAAjQAAASAIAKQAIALAOAAQALAAAGgCQAHgBADgDIAAgbIgbAAIAAgZIBDAAIAAA/QgJAKgQAIQgRAIgZAAQgeAAgUgUg");
	this.shape_2.setTransform(-176.5,268.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2CA9E1").s().p("AgyBGQgTgPAAgeIAAhuIAnAAIAABuQAAAQAJAIQAHAHAOAAQAPAAAIgHQAIgIAAgQIAAhuIAnAAIAABuQAAAegTAPQgUAQgfABQgegBgUgQg");
	this.shape_3.setTransform(-192.7,268.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2CA9E1").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_4.setTransform(-208.5,268.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2CA9E1").s().p("Ag3BVIAAipIAnAAIAACLIBIAAIAAAeg");
	this.shape_5.setTransform(-222.2,268.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2CA9E1").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAIAGAPAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape_6.setTransform(-236.8,268.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2CA9E1").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_7.setTransform(-251.9,268.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2CA9E1").s().p("AhDBVIAAipIBFAAQAeAAASAPQARAQAAAZQAAAZgRAOQgSAQgeAAIgdAAIAAA6gAgbgDIAdAAQAMAAAIgHQAGgHAAgLQAAgLgGgIQgIgHgMAAIgdAAg");
	this.shape_8.setTransform(-267.3,268.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2CA9E1").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAIAGAPAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape_9.setTransform(-289,268.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2CA9E1").s().p("AgzBDQgVgUAAggIAAgdQAAggAVgUQAUgVAfAAQAgAAAUAVQAVAUgBAgIAAAdQABAggVAUQgTAVghAAQgfAAgUgVgAgXgtQgJAMAAASIAAAeQAAATAJAMQAIALAPAAQAQAAAIgLQAJgMAAgTIAAgeQAAgSgJgMQgJgLgPAAQgPAAgIALg");
	this.shape_10.setTransform(-304.7,268.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2CA9E1").s().p("AgTBVIAAiLIgtAAIAAgeICBAAIAAAeIgtAAIAACLg");
	this.shape_11.setTransform(-319.7,268.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2CA9E1").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_12.setTransform(-330,268.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2CA9E1").s().p("AAYBVIglhEIgTAAIAABEIgnAAIAAipIAnAAIAABCIAOAAIAkhCIAyAAIg1BNIA5Bcg");
	this.shape_13.setTransform(-340.6,268.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Headers, new cjs.Rectangle(-351.1,249.7,216.4,35.7), null);


(lib.DIZAIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0282D").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape.setTransform(62,-43.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0282D").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_1.setTransform(50.9,-43.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0282D").s().p("AhBBVIAAipIA7AAQAeAAASALQASAMAAAYQAAAMgGAJQgFAKgMAEQAPADAHAKQAHAKAAAOQAAAZgRAMQgRANgfAAgAgZA3IAaAAQANAAAGgFQAGgFAAgKQAAgMgFgFQgFgGgNAAIgcAAgAgZgNIAUAAQAMAAAHgFQAGgFAAgKQAAgLgGgFQgHgFgNAAIgTAAg");
	this.shape_2.setTransform(35.7,-43.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0282D").s().p("AAeBVQgFgDgCgKIgBgRIAAgKQAAgMgGgHQgHgGgLAAIgcAAIAABBIgnAAIAAipIBBAAQAdAAARANQASAOAAAYQAAANgHAKQgHAJgOAFQAQAEAHALQAGAKAAAQIAAAKQAAAHACAJQACAIAFAEIAAACgAgegKIAaAAQALAAAHgFQAGgGAAgKQAAgKgGgGQgHgHgLAAIgaAAg");
	this.shape_3.setTransform(20.3,-43.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0282D").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_4.setTransform(4.4,-43.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C0282D").s().p("AhBBVIAAipIA9AAQAdAAAVATQAUAUAAAfIAAAdQAAAfgUAUQgVATgdAAgAgZA3IATAAQAPAAAJgLQAIgLABgSIAAgeQgBgRgIgLQgJgLgPAAIgTAAg");
	this.shape_5.setTransform(-11,-43.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C0282D").s().p("AgzBDQgVgUABggIAAgdQgBggAVgUQATgVAgAAQAgAAAUAVQAVAUAAAgIAAAdQAAAggVAUQgTAVggAAQggAAgUgVgAgXgtQgJAMAAASIAAAeQAAATAJAMQAIALAQAAQAPAAAIgLQAJgMAAgTIAAgeQAAgSgJgMQgIgLgQAAQgPAAgIALg");
	this.shape_6.setTransform(-33.2,-43.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0282D").s().p("AAgBVIg+hrIgBAAIAABrIgnAAIAAipIAnAAIA+BrIABAAIAAhrIAnAAIAACpg");
	this.shape_7.setTransform(-49.8,-43.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C0282D").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_8.setTransform(-61.9,-43.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C0282D").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_9.setTransform(-73,-43.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C0282D").s().p("Ag+BVIAAgSIBLh5IhMAAIAAgeIB9AAIAAARIhLB6IBMAAIAAAeg");
	this.shape_10.setTransform(-87.6,-43.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C0282D").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_11.setTransform(-98.3,-43.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C0282D").s().p("AhBBVIAAipIA9AAQAdAAAVATQAUAUAAAfIAAAdQAAAfgUAUQgVATgdAAgAgZA3IATAAQAPAAAJgLQAIgLABgSIAAgeQgBgRgIgLQgJgLgPAAIgTAAg");
	this.shape_12.setTransform(-109.6,-43.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgRIARAAIAAARg");
	this.shape_13.setTransform(49.9,48.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgEgKAAQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgIAPgBQAQAAAKAJQAKAIAAAQIAAAsIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJgBQgOABgIgIgAgPAJQgHAFAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_14.setTransform(42.7,50.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#020303").s().p("AgMBCQgHgEgEgHIgDAMIgOAAIAAiHIASAAIAAA1QAEgHAHgDQAGgEAIAAQASAAAKAPQAKAOAAAVIAAACQAAAVgKANQgKAMgSAAQgIAAgHgDgAgOgLQgFAFgDAGIAAAoQADAIAFADQAGAFAIAAQALgBAGgIQAGgJAAgPIAAgCQAAgQgGgJQgGgKgLAAQgIAAgGADg");
	this.shape_15.setTransform(32.9,48.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIAAIAEABIADAAIgDAQIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_16.setTransform(25,50.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgEgKAAQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgIAPgBQAQAAAKAJQAKAIAAAQIAAAsIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJgBQgOABgIgIgAgPAJQgHAFAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_17.setTransform(16.4,50.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#020303").s().p("AgdA5QgKgNAAgVIAAgCQAAgVAKgOQAJgPASAAQAHAAAHAEQAGADAFAGIAAg0IARAAIAACHIgOAAIgCgLQgFAHgGADQgHAEgIgBQgRAAgKgMgAgQgEQgGAJAAAQIAAACQAAAPAGAJQAGAIALABQAIgBAFgDQAGgEADgGIAAgsQgDgFgGgEQgFgDgHAAQgMAAgGAKg");
	this.shape_18.setTransform(6.2,48.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAEQAGAFAIAAQAJgBAFgDQAGgEAAgGQAAgGgFgDQgEgEgMgCQgRgFgIgFQgJgHAAgLQAAgLAKgIQAKgJAOAAQARAAAKAJQAKAIgBANIAAABIgQAAQAAgHgGgFQgFgEgJAAQgIAAgEADQgFAEAAAGQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAANgKAHQgLAIgQAAQgRAAgLgJg");
	this.shape_19.setTransform(-7.8,50.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#020303").s().p("AgeAkQgLgOAAgVIAAgBQAAgVALgNQALgPATAAQAUAAAMAPQALANgBAVIAAABQABAVgLAOQgMANgUAAQgTAAgLgNgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAHAKALAAQANAAAGgKQAGgKAAgPIAAgBQAAgPgGgKQgGgJgNAAQgLAAgHAJg");
	this.shape_20.setTransform(-17.6,50.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#020303").s().p("AgdA5QgKgNAAgVIAAgCQAAgVAKgOQAJgPASAAQAHAAAHAEQAGADAFAGIAAg0IARAAIAACHIgOAAIgCgLQgFAHgGADQgHAEgIgBQgRAAgKgMgAgQgEQgGAJAAAQIAAACQAAAPAGAJQAGAIALABQAIgBAFgDQAGgEADgGIAAgsQgDgFgGgEQgFgDgHAAQgMAAgGAKg");
	this.shape_21.setTransform(-28.1,48.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#020303").s().p("AgdAmQgJgKAAgUIAAg3IASAAIAAA3QAAAPAEAFQAFAHAJAAQAIAAAHgFQAGgDADgHIAAhDIARAAIAABdIgQAAIgBgNQgEAHgHAEQgHAFgJgBQgPAAgJgKg");
	this.shape_22.setTransform(-38.1,50.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgEgKAAQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgIAPgBQAQAAAKAJQAKAIAAAQIAAAsIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJgBQgOABgIgIgAgPAJQgHAFAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_23.setTransform(-48.1,50.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#020303").s().p("AgoBDIAAiDIAOAAIADAMQAEgGAHgEQAHgEAIAAQASAAAKAOQAJAOAAAXIAAACQAAAUgJANQgKAMgSAAQgHAAgHgDQgHgDgEgGIAAAvgAgOgwQgFADgDAGIAAAtQADAGAFADQAFADAIAAQAMAAAGgIQAGgKAAgNIAAgCQAAgQgGgKQgGgLgMAAQgIAAgFAEg");
	this.shape_24.setTransform(-57.9,52);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAEQAGAFAIAAQAJgBAFgDQAGgEAAgGQAAgGgFgDQgEgEgMgCQgRgFgIgFQgJgHAAgLQAAgLAKgIQAKgJAOAAQARAAAKAJQAKAIgBANIAAABIgQAAQAAgHgGgFQgFgEgJAAQgIAAgEADQgFAEAAAGQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAANgKAHQgLAIgQAAQgRAAgLgJg");
	this.shape_25.setTransform(-67.9,50.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgRIARAAIAAARg");
	this.shape_26.setTransform(-79.4,48.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAEQAGAFAIAAQAJgBAFgDQAGgEAAgGQAAgGgFgDQgEgEgMgCQgRgFgIgFQgJgHAAgLQAAgLAKgIQAKgJAOAAQARAAAKAJQAKAIgBANIAAABIgQAAQAAgHgGgFQgFgEgJAAQgIAAgEADQgFAEAAAGQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAANgKAHQgLAIgQAAQgRAAgLgJg");
	this.shape_27.setTransform(-86.3,50.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgRIARAAIAAARg");
	this.shape_28.setTransform(-93.3,48.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#020303").s().p("AgHBAIgvh/IATAAIAhBfIACAKIAAAAIADgKIAhhfIATAAIgvB/g");
	this.shape_29.setTransform(-101.3,48.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_30.setTransform(-114.5,48.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAEQAGAFAIAAQAJgBAFgDQAGgDAAgHQAAgGgFgDQgEgEgMgCQgRgFgIgFQgJgHAAgLQAAgLAKgIQAKgJAOAAQARAAAKAJQAKAIgBANIAAABIgQAAQAAgHgGgFQgFgEgJAAQgIAAgEADQgFAEAAAGQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAANgKAHQgLAIgQAAQgRAAgLgJg");
	this.shape_31.setTransform(29.4,28.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgEgKAAQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgIAPgBQAQAAAKAJQAKAIAAAQIAAAtIABAJIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJgBQgOABgIgIgAgPAJQgHAFAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_32.setTransform(19.7,28.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#020303").s().p("AAxAwIAAg3QAAgOgFgGQgFgHgKABQgIAAgGAGQgFAGgBAJIAAABIAAA7IgRAAIAAg3QAAgOgFgGQgFgGgJAAQgIAAgFADQgFADgDAGIAABFIgRAAIAAhdIAPAAIACAMQAEgHAHgDQAIgFAJAAQAJAAAHAFQAGAFAEAIQAEgIAHgEQAIgFAKgBQAOABAJAJQAIAKAAAVIAAA3g");
	this.shape_33.setTransform(6.9,28.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgRIARAAIAAARg");
	this.shape_34.setTransform(-3.2,26.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIAAIAEABIADAAIgDAQIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_35.setTransform(-8,28.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#020303").s().p("AgdA2QgJgKAAgUIAAg3IASAAIAAA3QAAAPAEAFQAFAHAJAAQAIAAAHgFQAGgDADgHIAAhDIARAAIAABdIgQAAIgBgNQgEAHgHAEQgHAFgJgBQgPAAgJgKgAgegzIAAgNIA+AAIAAANg");
	this.shape_36.setTransform(-16.8,27.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#020303").s().p("AATBEIgegsIgKAAIAAAsIgSAAIAAiHIASAAIAABOIAKAAIAagkIAUAAIggApIAlA0g");
	this.shape_37.setTransform(-25.8,26.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#020303").s().p("AALA+QgFgFAAgJQAAgHAFgGQAEgEAGgEIAAABIANAAQgGAFgDAEQgEAEAAAFQAAAEACACQACACAFAAIAEAAIAEgCIADALIgHACIgJABQgIAAgGgEgAgfAUQgJgKAAgTIAAg4IARAAIAAA4QAAAOAFAFQAEAHAKAAQAIAAAGgFQAGgDADgHIAAhDIARAAIAABdIgCAAIgGgEIgHADIgBgMQgFAHgHAEQgHAFgIgBQgQAAgIgKgAAVAcIAAgBIAHgDIAGAEg");
	this.shape_38.setTransform(-40.4,30.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#020303").s().p("AgoBDIAAiDIAOAAIACAMQAFgGAHgEQAHgEAIAAQASAAAKAOQAJAOAAAXIAAACQAAAUgJANQgKAMgSAAQgHAAgHgDQgHgDgEgGIAAAvgAgOgwQgFADgDAGIAAAtQADAGAFADQAFADAJAAQAKAAAHgIQAHgKgBgNIAAgCQABgQgHgKQgGgLgMAAQgIAAgFAEg");
	this.shape_39.setTransform(-50.6,30.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgRIARAAIAAARg");
	this.shape_40.setTransform(-58.2,26.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#020303").s().p("AgDA1QgHgGAAgNIAAg6IgPAAIAAgMIAPAAIAAgXIARAAIAAAXIASAAIAAAMIgSAAIAAA6QAAAGACADQADADAFgBIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_41.setTransform(-63.8,27.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgNQAMgPASAAQAUAAALAPQALANAAAVIAAABQAAAVgLAOQgLANgUAAQgSAAgMgNgAgRgZQgHAKAAAPIAAABQAAAPAHAKQAFAKAMAAQANAAAGgKQAHgKAAgPIAAgBQAAgPgHgKQgGgJgNAAQgMAAgFAJg");
	this.shape_42.setTransform(-71.8,28.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#020303").s().p("AgPBCQgIgCgGgDIAFgOQAEADAHABQAHACAGAAQAMAAAFgGQAGgFAAgMIAAgLQgEAGgHADQgGADgIAAQgRAAgKgNQgKgMAAgUIAAgCQAAgWAKgPQAKgOARAAQAIAAAHAEQAHAEAFAHIACgNIANAAIAABfQAAASgKAKQgLAKgTAAQgHAAgIgCgAgQgqQgGAKAAAQIAAACQAAAOAGAIQAGAJALAAQAIAAAFgDQAGgEADgHIAAgqQgDgGgGgEQgFgEgHAAQgMAAgGALg");
	this.shape_43.setTransform(-82.2,30.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgNQALgPATAAQAUAAAMAPQAKANABAVIAAABQgBAVgKAOQgMANgUAAQgTAAgLgNgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAGAKAMAAQAMAAAHgKQAGgKABgPIAAgBQgBgPgGgKQgHgJgMAAQgMAAgGAJg");
	this.shape_44.setTransform(-92.2,28.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#020303").s().p("AgmBAIAAh/IARAAIAABxIA8AAIAAAOg");
	this.shape_45.setTransform(-101.5,27);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_46.setTransform(-114.5,26.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAEQAGAFAIAAQAJgBAFgDQAGgDAAgHQAAgGgFgDQgEgEgMgCQgRgFgIgFQgJgHAAgLQAAgLAKgIQAKgJAOAAQARAAAKAJQAKAIgBANIAAABIgQAAQAAgHgGgFQgFgEgJAAQgIAAgEADQgFAEAAAGQAAAFAEAEQAEADALACQASAFAJAFQAJAHAAALQAAANgKAHQgLAIgQAAQgRAAgLgJg");
	this.shape_47.setTransform(20,7.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgEgKAAQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgIAPgBQAQAAAKAJQAKAIAAAQIAAAsIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJgBQgOABgIgIgAgPAJQgHAFAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_48.setTransform(10.3,7.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#020303").s().p("AAxAwIAAg3QAAgOgFgGQgFgHgKABQgIAAgGAGQgFAGgBAJIAAABIAAA7IgRAAIAAg3QAAgOgFgGQgFgGgJAAQgIAAgFADQgFADgDAGIAABFIgRAAIAAhdIAPAAIACAMQAEgHAHgDQAIgFAJAAQAJAAAHAFQAGAFAEAIQAEgIAHgEQAIgFAKgBQAOABAJAJQAIAKAAAVIAAA3g");
	this.shape_49.setTransform(-2.5,7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgRIARAAIAAARg");
	this.shape_50.setTransform(-12.7,5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIAAIAEABIADAAIgDAQIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_51.setTransform(-17.5,7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#020303").s().p("AgdA2QgJgKAAgUIAAg3IASAAIAAA3QAAAPAEAFQAFAHAJAAQAIAAAHgFQAGgDADgHIAAhDIARAAIAABdIgQAAIgBgNQgEAHgHAEQgHAFgJgBQgPAAgJgKgAgegzIAAgNIA+AAIAAANg");
	this.shape_52.setTransform(-26.2,5.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#020303").s().p("AATBEIgegsIgKAAIAAAsIgSAAIAAiHIASAAIAABOIAKAAIAagkIAUAAIggApIAlA0g");
	this.shape_53.setTransform(-35.3,5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#020303").s().p("AALA+QgFgFAAgJQAAgHAFgGQAEgEAGgEIAAABIANAAQgGAFgDAEQgEAEAAAFQAAAEACACQACACAFAAIAEAAIAEgCIADALIgHACIgJABQgIAAgGgEgAgfAUQgJgKAAgTIAAg4IARAAIAAA4QAAAOAFAFQAEAHAKAAQAIAAAGgFQAGgDADgHIAAhDIARAAIAABdIgCAAIgGgEIgHADIgBgMQgFAHgHAEQgHAFgIgBQgQAAgIgKgAAVAcIAAgBIAHgDIAGAEg");
	this.shape_54.setTransform(-49.9,9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgRIARAAIAAARg");
	this.shape_55.setTransform(-57.5,5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIAAIAEABIADAAIgDAQIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_56.setTransform(-62.3,7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgUANgOQALgOAQAAQATAAAKAMQAKAMAAATIAAAKIg9AAIAAAAQAAAOAHAJQAHAJAKAAQAKAAAGgCQAHgEAEgDIAHALQgFAEgJAEQgHAEgNgBQgSAAgMgNgAgNgbQgGAHgCALIAAABIArAAIAAgDQAAgKgFgHQgFgGgLAAQgIgBgGAIg");
	this.shape_57.setTransform(-70.5,7.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#020303").s().p("AAVAwIAAg6QAAgNgEgFQgFgFgLAAQgGAAgGADQgGAEgDAGIAABEIgRAAIAAhdIAPAAIACANQAEgHAHgEQAHgFAJAAQAPABAIAIQAIAKAAASIAAA7g");
	this.shape_58.setTransform(-80.5,7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgEgKAAQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgIAPgBQAQAAAKAJQAKAIAAAQIAAAsIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJgBQgOABgIgIgAgPAJQgHAFAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_59.setTransform(-90.6,7.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#020303").s().p("AgsBAIAAh/IAqAAQATAAALAIQAMAKAAAQQAAAJgGAHQgFAGgJAEQALACAHAIQAHAJAAAMQAAARgMAKQgLAJgUAAgAgbAyIAdAAQAMABAHgHQAGgFAAgLQAAgLgFgGQgGgHgLAAIggAAgAgbgJIAbAAQAKABAGgGQAGgFAAgKQAAgKgGgFQgHgFgLAAIgZAAg");
	this.shape_60.setTransform(-100.9,5.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_61.setTransform(-114.5,5.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAEQAGAFAIAAQAJgBAFgDQAGgEAAgGQAAgGgFgDQgEgEgMgCQgRgFgIgFQgJgHAAgLQAAgLAKgIQAKgJAOAAQARAAAKAJQAKAIgBANIAAABIgQAAQAAgHgGgFQgFgEgJAAQgIAAgEADQgFAEAAAGQAAAFAEAEQAEADALACQASAFAJAFQAJAHAAALQAAANgKAHQgLAIgQAAQgRAAgLgJg");
	this.shape_62.setTransform(-1.6,-14.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgEgKAAQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgIAPgBQAQAAAKAJQAKAIAAAQIAAAsIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJgBQgOABgIgIgAgPAJQgHAFAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_63.setTransform(-11.3,-14.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#020303").s().p("AAWAwIAAg6QgBgNgFgFQgEgFgLAAQgGAAgGADQgFAEgEAGIAABEIgSAAIAAhdIAQAAIACANQAEgHAHgEQAHgFAIAAQAQABAJAIQAHAKABASIAAA7g");
	this.shape_64.setTransform(-21.3,-14.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgRIARAAIAAARg");
	this.shape_65.setTransform(-28.7,-16.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgEgKAAQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgIAPgBQAQAAAKAJQAKAIAAAQIAAAsIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJgBQgOABgIgIgAgPAJQgHAFAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_66.setTransform(-36,-14.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#020303").s().p("AglAvIAAgLIAyhFIgxAAIAAgNIBHAAIAAALIgzBFIA2AAIAAANg");
	this.shape_67.setTransform(-45.3,-14.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgRIARAAIAAARg");
	this.shape_68.setTransform(-52.2,-16.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#020303").s().p("AgdA5QgKgNAAgVIAAgCQAAgVAKgOQAJgPASAAQAHAAAHAEQAGADAFAGIAAg0IARAAIAACHIgOAAIgCgLQgFAHgGADQgHAEgIgBQgRAAgKgMgAgQgEQgGAJAAAQIAAACQAAAPAGAJQAGAIALABQAIgBAFgDQAGgEADgGIAAgsQgDgFgGgEQgFgDgHAAQgMAAgGAKg");
	this.shape_69.setTransform(-59.8,-16.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#020303").s().p("AgsBAIAAh/IAqAAQATAAALAIQAMAKAAAQQAAAJgGAHQgFAGgJAEQALACAHAIQAHAJAAAMQAAARgMAKQgLAJgUAAgAgbAyIAdAAQAMABAHgHQAGgFAAgLQAAgLgFgGQgGgHgLAAIggAAgAgbgJIAbAAQAKABAGgGQAGgFAAgKQAAgKgGgFQgHgFgLAAIgZAAg");
	this.shape_70.setTransform(-74.5,-16.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#020303").s().p("AgpBAIAAh/IBTAAIAAAOIhCAAIAAApIA6AAIAAAMIg6AAIAAAuIBCAAIAAAOg");
	this.shape_71.setTransform(-85.3,-16.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#020303").s().p("AAcBAIgZhYIgCgMIgBAAIgBAMIgaBYIgPAAIgfh/IARAAIAUBTIACAPIABABIADgQIAYhTIAOAAIAXBTIAEAQIABAAIACgQIAThTIARAAIgeB/g");
	this.shape_72.setTransform(-99.1,-16.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_73.setTransform(-114.5,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DIZAIN, new cjs.Rectangle(-119.5,-61.9,239.1,123.8), null);


(lib.Baneriai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808181").s().p("AkpCdIAAk5IJTAAIAAE5gAj/AaQACAUANAMQANANAiABQAVgBALgFQANgFAHgMQAIgKgBgNQAAgLgFgIQgFgJgMgFQgNgHgagFQgKgDgDgDQgDgCgBgDQAAgEAEgDQAEgEAHAAQAIAAAFAFQAGAEABAIIAngBQgCgVgOgKQgOgKgZAAQgVAAgMAGQgMAFgGAKQgGAIAAALQAAAQAMAKQALAIAcAGQARAFADADQAFAEABAGQgBAEgFAFQgEAFgJAAQgMAAgGgIQgEgFgBgKgACdBFIBuAAIAAgfIhFAAIAAgaIA+AAIAAgbIg+AAIAAgTIBFAAIAAgcIhuAAgAAfBFIBrAAIAAgfIhCAAIAAhkIgpAAgAgfAvIAHAWIAqAAIgxiDIgtAAIgyCDIAqAAIAGgWg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AkqCdIAAk5IJVAAIAAE5gAj/AZQACAVANAMQANANAiAAQAVABAMgGQAMgFAIgMQAGgLABgMQAAgLgGgJQgGgHgLgGQgMgGgagHQgMgCgDgCQgCgCAAgEQAAgFADgDQAEgCAHAAQAJAAAEADQAFAFACAJIAngCQgCgVgOgKQgOgKgZAAQgUABgNAFQgNAGgFAIQgGAKAAAJQAAARAMAJQAKAKAcAFQARAEAFAFQAEADAAAGQAAAFgEAEQgGAEgIABQgMgBgHgHQgDgFgCgKgACdBFIBuAAIAAgfIhFAAIAAgZIA+AAIAAgbIg+AAIAAgTIBFAAIAAgdIhuAAgAAfBFIBrAAIAAgfIhCAAIAAhkIgpAAgAgfAvIAHAWIAqAAIgxiDIgtAAIgzCDIArAAIAHgWg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AkqCdIAAk5IJVAAIAAE5gAj/AZQACAVANAMQANANAiAAQAVABAMgGQAMgFAIgMQAGgLABgMQAAgLgGgJQgGgHgLgGQgMgGgagHQgMgCgDgCQgCgCAAgEQAAgFADgDQAEgCAHAAQAJAAAEADQAFAFACAJIAngCQgCgVgOgKQgOgKgZAAQgUABgNAFQgNAGgFAIQgGAKAAAJQAAARAMAJQAKAKAcAFQARAEAFAFQAEADAAAGQAAAFgEAEQgGAEgIABQgMgBgHgHQgDgFgCgKgACdBFIBuAAIAAgfIhFAAIAAgZIA+AAIAAgbIg+AAIAAgTIBFAAIAAgdIhuAAgAAfBFIBrAAIAAgfIhCAAIAAhkIgpAAgAASBFIgxiDIgtAAIgzCDIArAAIAHgWIAuAAIAHAWIAqAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-15.7,59.7,31.4);


(lib.Svetaines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808181").s().p("AjiDjQheheAAiFQAAiDBehfQBfheCDAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiDAAhfhegAAZCrIAABdQAqgWAbhOQgfAFgmACgAgYEIIAAhdQgmgCgfgFQAcBOApAWgADcB+QgdAPgnALQgLAngPAdQgFAMgJAOQAsgUAjgjQAjgjAUgsgAhvD2IgOgaQgOgcgMgoQglgLgfgPIgagOQAUAsAjAjQAjAiAsAVIAAAAgAAZB4QAvgCAlgJQAJglACgvIhfAAgAhsBtQAmAJAuACIAAhfIhfAAQACApAJArgACkBeQBOgbAWgqIhdAAQgCAmgFAfgAijBeQgFgjgCgiIhcAAQAVAqBOAbIAAAAgAEIgYQgWgphOgcQAFAfACAmIBdAAIAAAAgAB4gYQgCgvgJglQgrgJgpgCIAABfIBfAAIAAAAgAhshsQgJArgCApIBfAAIAAhfQgoACgsAJgAkGgYIBcAAQACghAFgkQhOAcgVApgAD2hvQgVgsgigjQgjgjgsgUQAJAOAFAMQAPAfALAlQAoAMAcAOIAaAOIAAAAgAi+i+QgiAjgVAsIAagOQAegPAmgLQALgmAPgeIAOgaQgsAVgjAigABeijQgbhOgqgVIAABcQAmACAfAFIAAAAgAhdijQAfgFAmgCIAAhcQgpAVgcBOg");

	this.SVET = new lib.Symbol1();
	this.SVET.parent = this;
	this.SVET.setTransform(433.5,100.9,1.755,1.755,0,0,0,0.3,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AjiDjQheheAAiFQAAiDBehfQBfheCDAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiDAAhfhegAAZCrIAABdQAqgWAbhOQgfAFgmACgAgYEIIAAhdQgmgCgfgFQAcBOApAWgADcB+QgdAPgnALQgLAngPAdQgFAMgJAOQAsgUAjgjQAjgjAUgsgAhvD2IgOgaQgOgcgMgoQglgLgfgPIgagOQAUAsAjAjQAjAiAsAVIAAAAgAAZB4QAvgCAlgJQAJglACgvIhfAAgAhsBtQAmAJAuACIAAhfIhfAAQACApAJArgACkBeQBOgbAWgqIhdAAQgCAmgFAfgAijBeQgFgjgCgiIhcAAQAVAqBOAbIAAAAgAEIgYQgWgphOgcQAFAfACAmIBdAAIAAAAgAB4gYQgCgvgJglQgrgJgpgCIAABfIBfAAIAAAAgAhshsQgJArgCApIBfAAIAAhfQgoACgsAJgAkGgYIBcAAQACghAFgkQhOAcgVApgAD2hvQgVgsgigjQgjgjgsgUQAJAOAFAMQAPAfALAlQAoAMAcAOIAaAOIAAAAgAi+i+QgiAjgVAsIAagOQAegPAmgLQALgmAPgeIAOgaQgsAVgjAigABeijQgbhOgqgVIAABcQAmACAfAFIAAAAgAhdijQAfgFAmgCIAAhcQgpAVgcBOg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AnAEEIAAoGIHAkEIHBEDIAAIHInBEDg");
	this.shape_2.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_1},{t:this.SVET}]},1).to({state:[{t:this.shape,p:{scaleX:0.906,scaleY:0.906}}]},1).to({state:[{t:this.shape_2},{t:this.shape,p:{scaleX:0.906,scaleY:0.906}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64.2,64.2);


(lib.M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808181").s().p("Ag7B+IAAj3IAlABQAlAAAtgFIAAD7g");
	this.shape.setTransform(-17.2,27.9,0.783,0.783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808181").s().p("Ag7CNIAAkZQA5AUA+AJIAAD8g");
	this.shape_1.setTransform(-31.3,26.7,0.783,0.783);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#808181").s().p("AguEdIAAl2QBFhYAVhrIADAAIAAI5g");
	this.shape_2.setTransform(25.1,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808181").s().p("Ag7CWIAAkFQA7gNA8gZIAAErg");
	this.shape_3.setTransform(-3.1,26,0.783,0.783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#808181").s().p("Ag7DQIAAlIQBAglA3gyIAAGfg");
	this.shape_4.setTransform(11,21.5,0.783,0.783);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808181").s().p("AlhDxQgHgDABgGQACgHAIABQCgAZCDhlQB9hjAaifIhjAAIC3igIC3CgIhVAAQgQBqg/BTQg7BQhcAxQhZAwhnAJQgWACgVAAQhUAAhPgcg");
	this.shape_5.setTransform(0,-10.8);

	this.instance = new lib.MARK();
	this.instance.parent = this;
	this.instance.setTransform(325.6,78.8,2.082,2.082,0,0,0,0.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("Ag7B+IAAj3IAlABQAlAAAtgFIAAD7g");
	this.shape_6.setTransform(-17.2,27.9,0.783,0.783);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("Ag7CNIAAkZQA5AUA+AJIAAD8g");
	this.shape_7.setTransform(-31.3,26.7,0.783,0.783);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AguEdIAAl2QBFhYAVhrIADAAIAAI5g");
	this.shape_8.setTransform(25.1,9.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("Ag7CWIAAkFQA7gNA8gZIAAErg");
	this.shape_9.setTransform(-3.1,26,0.783,0.783);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("Ag7DQIAAlIQBAglA3gyIAAGfg");
	this.shape_10.setTransform(11,21.5,0.783,0.783);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AlhDxQgHgDABgGQACgHAIABQCgAZCDhlQB9hjAaifIhjAAIC3igIC3CgIhVAAQgQBqg/BTQg7BQhcAxQhZAwhnAJQgWACgVAAQhUAAhPgcg");
	this.shape_11.setTransform(0,-10.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808181").s().p("AkaDBQgGgCABgGQACgFAGABQCAAUBphRQBkhPAVh/IhPAAICRiAICTCAIhEAAQgNBVgyBCQgwBAhJAnQhHAmhSAHQgSACgSAAQhCAAg/gWg");
	this.shape_12.setTransform(0,-8.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AkzCaQgHgDACgGQACgHAHABQChAZCChlQB4heAdiVICxAaQgVBRgyBEQg8BPhbAxQhaAwhmAJQgWABgWAAQhTAAhQgbg");
	this.shape_13.setTransform(-3.7,-1.6,0.799,0.799);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AowFDIAAqFIIwlFIIwFEIABKGIoxFEg");
	this.shape_14.setTransform(4.9,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4,p:{scaleX:0.783,scaleY:0.783,x:11,y:21.5}},{t:this.shape_3,p:{scaleX:0.783,scaleY:0.783,x:-3.1,y:26}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:25.1,y:9.2}},{t:this.shape_1,p:{scaleX:0.783,scaleY:0.783,x:-31.3,y:26.7}},{t:this.shape,p:{scaleX:0.783,scaleY:0.783,x:-17.2,y:27.9}}]}).to({state:[{t:this.shape_11},{t:this.shape_10,p:{scaleX:0.783,scaleY:0.783,x:11,y:21.5}},{t:this.shape_9,p:{scaleX:0.783,scaleY:0.783,x:-3.1,y:26}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:25.1,y:9.2}},{t:this.shape_7,p:{scaleX:0.783,scaleY:0.783,x:-31.3,y:26.7}},{t:this.shape_6,p:{scaleX:0.783,scaleY:0.783,x:-17.2,y:27.9}},{t:this.instance}]},1).to({state:[{t:this.shape_12},{t:this.shape_4,p:{scaleX:0.626,scaleY:0.626,x:8.8,y:17.2}},{t:this.shape_3,p:{scaleX:0.626,scaleY:0.626,x:-2.5,y:20.8}},{t:this.shape_2,p:{scaleX:0.799,scaleY:0.799,x:20,y:7.4}},{t:this.shape_1,p:{scaleX:0.626,scaleY:0.626,x:-25,y:21.3}},{t:this.shape,p:{scaleX:0.626,scaleY:0.626,x:-13.8,y:22.3}}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_10,p:{scaleX:0.626,scaleY:0.626,x:8.8,y:17.2}},{t:this.shape_9,p:{scaleX:0.626,scaleY:0.626,x:-2.5,y:20.8}},{t:this.shape_8,p:{scaleX:0.799,scaleY:0.799,x:20,y:7.4}},{t:this.shape_7,p:{scaleX:0.626,scaleY:0.626,x:-25,y:21.3}},{t:this.shape_6,p:{scaleX:0.626,scaleY:0.626,x:-13.8,y:22.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-37.6,72.1,75.4);


(lib.KIT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Headers();
	this.instance.parent = this;
	this.instance.setTransform(235.3,-301.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgCQgRgEgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape.setTransform(92.1,39.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgGQgFAGgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_1.setTransform(82.4,39.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020303").s().p("AAxAxIAAg5QAAgOgFgGQgFgFgKgBQgIAAgGAHQgFAGgBAKIAAAAIAAA8IgRAAIAAg5QAAgNgFgGQgFgHgJAAQgIAAgFAEQgFADgDAGIAABGIgRAAIAAhfIAPAAIACANQAEgHAHgEQAIgDAJAAQAJgBAHAFQAGAFAEAIQAEgIAHgFQAIgEAKAAQAOgBAJALQAIAKAAATIAAA5g");
	this.shape_2.setTransform(69.6,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_3.setTransform(59.5,37.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#020303").s().p("AgPBCQgIgCgGgDIAFgOQAEADAHABQAHACAGAAQAMAAAFgGQAGgFAAgMIAAgLQgEAGgHADQgGADgIAAQgRAAgKgNQgKgMAAgUIAAgCQAAgWAKgPQAKgOARAAQAIAAAHAEQAHAEAFAHIACgNIANAAIAABfQAAASgKAKQgLAKgTAAQgHAAgIgCgAgQgqQgGAKAAAQIAAACQAAAOAGAIQAGAJALAAQAIAAAFgDQAGgEADgHIAAgqQgDgGgGgEQgFgEgHAAQgMAAgGALg");
	this.shape_4.setTransform(51.9,41.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQAMgNAQAAQATAAAKALQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIAKAAQAJAAAHgBQAGgDAFgFIAHALQgFAGgIADQgJADgMABQgSAAgMgOgAgNgcQgGAIgBALIAAAAIArAAIAAgCQAAgKgGgHQgGgHgKAAQgIABgGAGg");
	this.shape_5.setTransform(42.4,39.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_6.setTransform(35.2,37.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#020303").s().p("AgdA5QgKgNAAgUIAAgDQAAgVAKgPQAJgOASABQAHAAAHACQAGAEAFAFIAAg0IARAAIAACJIgOAAIgCgMQgFAGgGAEQgHADgIABQgRAAgKgNgAgQgEQgGAKAAAPIAAADQAAAOAGAIQAGAKALgBQAIABAFgEQAGgDADgHIAAgrQgDgHgGgDQgFgEgHAAQgMAAgGALg");
	this.shape_7.setTransform(27.6,37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#020303").s().p("AgLBSQgGgEAAgJQAAgHAGgHIAHgGIAAABIAPAAQgHAEgDAFQgCAEAAAEQAAAEABACQABACAFAAIAEgBIAFgBIADAKIgHAEIgKABQgHAAgFgGgAALAyIgHgGIgIAFIAIgFIAHAGIgPAAIAAgBIAAheIARAAIAABfgAALAygAgEhFIAAgSIARAAIAAASg");
	this.shape_8.setTransform(20.1,39.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#020303").s().p("AALA9QgFgEAAgJQAAgHAFgHQAEgDAGgEIgBgMQgFAHgHAEQgHAEgIABQgQgBgIgJQgJgKAAgVIAAg4IARAAIAAA4QAAAPAFAGQAEAFAKAAQAIAAAGgDQAGgEADgHIAAhEIARAAIAABfIgCAAIgGgGIgHAEIAAACIANAAQgGAEgDAFQgEAEAAAEQAAAEACACQACACAFAAIAEgBIAEgBIADAKIgHAEIgJABQgIAAgGgGgAAiAdgAAiAdgAAVAdIAAgCIAHgEIAGAGg");
	this.shape_9.setTransform(8.9,41.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#020303").s().p("AgNBXIgFgBIABgOIAEABIADABQAGAAAEgEQACgEAAgJIAAhmIARAAIAABmQAAAPgHAIQgIAIgMAAIgFgBgAABhGIAAgRIASAAIAAARg");
	this.shape_10.setTransform(0.2,39.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_11.setTransform(-3.4,37.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#020303").s().p("AgcAkQgLgNAAgVIAAgDQAAgUALgOQALgOATABQARgBALALQAKAKAAAOIAAAAIgQAAQAAgJgGgGQgGgFgKgBQgMAAgGAKQgGAKAAAOIAAACQAAAQAGAJQAGAJAMAAQAJAAAHgEQAGgGAAgIIAQAAIAAABQAAAMgLAKQgLAKgQAAQgTAAgLgOg");
	this.shape_12.setTransform(-10.3,39.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#020303").s().p("AATBFIgdgsIgLAAIAAAsIgSAAIAAiJIASAAIAABPIALAAIAZglIAUAAIggArIAlA0g");
	this.shape_13.setTransform(-19.2,37.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#020303").s().p("AAWAxIAAg7QgBgMgFgGQgEgGgLAAQgGAAgGAFQgFADgEAGIAABFIgRAAIAAhfIAPAAIACAPQAEgIAHgEQAHgFAJABQAPgBAJAKQAHAIAAAUIAAA7g");
	this.shape_14.setTransform(-29.5,39.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#020303").s().p("AgdAnQgJgKAAgWIAAg3IASAAIAAA3QAAAQAEAGQAFAFAJAAQAIAAAHgDQAGgEADgHIAAhEIARAAIAABfIgQAAIgBgOQgEAHgHAEQgHAEgJABQgPgBgJgJg");
	this.shape_15.setTransform(-39.8,40);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#020303").s().p("AgNBGIAAhSIgPAAIAAgNIAPAAIAAgLQAAgQAIgIQAHgJAOAAIAGABIAHABIgCAOIgEgBIgFAAQgHAAgEAEQgEAFAAAJIAAALIAUAAIAAANIgUAAIAABSg");
	this.shape_16.setTransform(-47.7,37.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#020303").s().p("AALA9QgFgEAAgJQAAgHAFgHQAEgDAGgEIAAACIANAAQgGAEgDAFQgEAEAAAEQAAAEACACQACACAFAAIAEgBIAEgBIADAKIgHAEIgJABQgIAAgGgGgAgfAVQgJgKAAgVIAAg4IARAAIAAA4QAAAPAFAGQAEAFAKAAQAIAAAGgDQAGgEADgHIAAhEIARAAIAABfIgCAAIgGgGIgHAEIgBgMQgFAHgHAEQgHAEgIABQgQgBgIgJgAAVAdIAAgCIAHgEIAGAGg");
	this.shape_17.setTransform(-60.4,41.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#020303").s().p("AgNBXIgFgBIABgOIAEABIADABQAGAAAEgEQACgEAAgJIAAhmIARAAIAABmQAAAPgHAIQgIAIgMAAIgFgBgAABhGIAAgRIASAAIAAARg");
	this.shape_18.setTransform(-69,39.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#020303").s().p("AgdAnQgJgKAAgWIAAg3IASAAIAAA3QAAAQAEAGQAFAFAJAAQAIAAAHgDQAGgEADgHIAAhEIARAAIAABfIgQAAIgBgOQgEAHgHAEQgHAEgJABQgPgBgJgJg");
	this.shape_19.setTransform(-75.5,40);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgGQgFAGgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_20.setTransform(-85.5,39.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#020303").s().p("AAfBAIg9hiIAAAAIAABiIgRAAIAAh/IARAAIA8BiIABAAIAAhiIARAAIAAB/g");
	this.shape_21.setTransform(-96.9,38.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_22.setTransform(-110.8,37.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_23.setTransform(-0.8,18.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgGQgFAGgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_24.setTransform(-10.5,18.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#020303").s().p("AAxAxIAAg5QAAgOgFgFQgFgGgKgBQgIAAgGAHQgFAGgBAKIAAAAIAAA8IgRAAIAAg5QAAgNgFgGQgFgHgJAAQgIAAgFAEQgFADgDAGIAABGIgRAAIAAheIAPAAIACAMQAEgHAHgEQAIgDAJAAQAJgBAHAFQAGAFAEAIQAEgIAHgFQAIgEAKAAQAOgBAJALQAIAKAAATIAAA5g");
	this.shape_25.setTransform(-23.3,18.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#020303").s().p("AgIBFIAAheIARAAIAABegAgIgyIAAgSIARAAIAAASg");
	this.shape_26.setTransform(-33.5,16.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#020303").s().p("AAVAxIAAg7QABgMgGgGQgEgGgKAAQgHAAgGAFQgGADgDAGIAABFIgSAAIAAheIAQAAIABAOQAFgIAHgEQAIgFAHABQAQgBAIAKQAJAIAAAUIAAA7g");
	this.shape_27.setTransform(-40.8,18.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#020303").s().p("AgIBFIAAheIARAAIAABegAgIgyIAAgSIARAAIAAASg");
	this.shape_28.setTransform(-48.2,16.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#020303").s().p("AgNBXIgFgBIABgOIAEABIADABQAGAAAEgEQACgEAAgJIAAhmIARAAIAABmQAAAPgHAIQgIAIgMAAIgFgBgAABhGIAAgRIASAAIAAARg");
	this.shape_29.setTransform(-53.8,18.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#020303").s().p("AgdAnQgJgKAAgWIAAg3IASAAIAAA3QAAAQAEAGQAFAFAJAAQAIAAAHgDQAGgEADgHIAAhEIARAAIAABfIgQAAIgBgOQgEAHgHAEQgHAEgJABQgPgBgJgJg");
	this.shape_30.setTransform(-60.3,18.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgGQgFAGgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_31.setTransform(-70.3,18.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#020303").s().p("AAVAxIAAg7QAAgMgEgGQgGgGgJAAQgHAAgGAFQgGADgDAGIAABFIgSAAIAAheIAQAAIABAOQAFgIAHgEQAIgFAHABQAQgBAIAKQAJAIgBAUIAAA7g");
	this.shape_32.setTransform(-80.3,18.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#020303").s().p("AgDA2QgHgHAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADADAFAAIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_33.setTransform(-88.8,17.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#020303").s().p("AAmBAIgLghIg1AAIgMAhIgSAAIAyh/IAOAAIAwB/gAgVARIAqAAIgUg6IgBAAg");
	this.shape_34.setTransform(-97.4,16.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_35.setTransform(-110.8,16.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_36.setTransform(107.2,-3.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgGQgFAGgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_37.setTransform(97.5,-3.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#020303").s().p("AAxAxIAAg5QAAgOgFgGQgFgFgKgBQgIAAgGAHQgFAGgBAKIAAAAIAAA8IgRAAIAAg5QAAgNgFgGQgFgHgJAAQgIAAgFAEQgFADgDAGIAABGIgRAAIAAhfIAPAAIACANQAEgHAHgEQAIgDAJAAQAJgBAHAFQAGAFAEAIQAEgIAHgFQAIgEAKAAQAOgBAJALQAIAKAAATIAAA5g");
	this.shape_38.setTransform(84.7,-3.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_39.setTransform(74.5,-5.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#020303").s().p("AgFAwIgkhfIASAAIAXBCIAAAHIABAAIABgHIAWhCIASAAIgjBfg");
	this.shape_40.setTransform(67.8,-3.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgGQgFAGgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_41.setTransform(58.3,-3.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#020303").s().p("AgXAxIAAhfIAQAAIABAPQAFgIAEgEQAGgFAIABIAEAAIADABIgDAQIgJgBQgGAAgFADQgEAEgCAFIAABEg");
	this.shape_42.setTransform(50.8,-3.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#020303").s().p("AgDA2QgHgHAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADADAFAAIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_43.setTransform(43.9,-4.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_44.setTransform(36.3,-3.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_45.setTransform(29.3,-5.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#020303").s().p("AAWAxIAAg7QAAgMgGgGQgFgGgJAAQgHAAgGAFQgGADgDAGIAABFIgSAAIAAhfIAQAAIABAPQAFgIAHgEQAHgFAIABQAQgBAJAKQAHAIABAUIAAA7g");
	this.shape_46.setTransform(22,-3.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_47.setTransform(14.6,-5.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#020303").s().p("AAxAxIAAg5QAAgOgFgGQgFgFgKgBQgIAAgGAHQgFAGgBAKIAAAAIAAA8IgRAAIAAg5QAAgNgFgGQgFgHgJAAQgIAAgFAEQgFADgDAGIAABGIgRAAIAAhfIAPAAIACANQAEgHAHgEQAIgDAJAAQAJgBAHAFQAGAFAEAIQAEgIAHgFQAIgEAKAAQAOgBAJALQAIAKAAATIAAA5g");
	this.shape_48.setTransform(4.4,-3.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#020303").s().p("AgdA5QgKgNAAgUIAAgDQAAgVAKgPQAJgOASABQAHAAAHACQAGAEAFAFIAAg0IARAAIAACJIgOAAIgCgMQgFAGgGAEQgHADgIABQgRAAgKgNgAgQgEQgGAKAAAPIAAADQAAAOAGAIQAGAKALgBQAIABAFgEQAGgDADgHIAAgrQgDgHgGgDQgFgEgHAAQgMAAgGALg");
	this.shape_49.setTransform(-8.8,-5.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgGQgFAGgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_50.setTransform(-18.6,-3.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#020303").s().p("AALA9QgFgEAAgJQAAgHAFgHQAEgDAGgEIAAACIANAAIgGgGIgHAEIgBgNQgFAIgHAEQgHAEgIABQgQgBgIgJQgJgKAAgVIAAg4IARAAIAAA4QAAAPAFAGQAEAFAKAAQAIAAAGgDQAGgEADgHIAAhEIARAAIAABfIgCAAQgGAEgDAFQgEAEAAAEQAAAEACACQACACAFAAIAEgBIAEgBIADAKIgHAEIgJABQgIAAgGgGgAAVAdIAAgCIAHgEIAGAGg");
	this.shape_51.setTransform(-32.9,-1.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_52.setTransform(-40.5,-5.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#020303").s().p("AAVAxIAAg7QAAgMgEgGQgGgGgKAAQgGAAgGAFQgFADgEAGIAABFIgRAAIAAhfIAPAAIABAPQAFgIAHgEQAIgFAIABQAPgBAIAKQAJAIgBAUIAAA7g");
	this.shape_53.setTransform(-47.8,-3.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_54.setTransform(-55.2,-5.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgGQgFAGgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_55.setTransform(-62.5,-3.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#020303").s().p("AgDA2QgHgHAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADADAFAAIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_56.setTransform(-70.7,-4.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQAMgNAQAAQATAAAKALQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIAKAAQAJAAAHgBQAGgDAFgFIAHALQgFAGgIADQgJADgMABQgSAAgMgOgAgNgcQgGAIgBALIAAAAIArAAIAAgCQAAgKgGgHQgGgHgKAAQgIABgGAGg");
	this.shape_57.setTransform(-78.2,-3.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#020303").s().p("AgFAwIgkhfIASAAIAXBCIAAAHIABAAIABgHIAWhCIASAAIgjBfg");
	this.shape_58.setTransform(-87.5,-3.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#020303").s().p("AgfA3QgPgKAAgSIAAAAIARAAQAAAMAJAHQAJAGAMAAQANAAAIgGQAIgFAAgKQAAgIgHgGQgGgFgRgFQgUgFgLgIQgLgJAAgOQAAgQAMgKQAMgKATAAQAVAAAMAMQANALgBAQIAAAAIgQAAQAAgLgIgHQgHgHgOAAQgMAAgHAGQgHAFAAAKQAAAJAIAFQAHAGAQADQAUAFALAKQAKAJAAAOQAAAQgNAJQgMAKgVAAQgSAAgOgLg");
	this.shape_59.setTransform(-97.7,-5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_60.setTransform(-110.8,-5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.KIT, new cjs.Rectangle(-115.8,-51.4,231.7,103), null);


(lib.D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808181").s().p("AAWGYQgYgBgcgCQkDgWA/mNQAgjIBTjCQD0GDBCCbQBRC+hUA3QgwAehhAAg");
	this.shape.setTransform(-23.5,-29.9,0.25,0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808181").s().p("ArbPZQihAAhzhyQhyhyAAiiIAA4rMAjDAAAIAAYrQAACihyByQhzByiiAAg");
	this.shape_1.setTransform(1.5,18.2,0.25,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#808181").s().p("AjyK6IAA1zIHlAAIAAVzg");
	this.shape_2.setTransform(0.7,-25.4,0.25,0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808181").s().p("AhPDbIhWmdQAwAEAjAAQBiAAA7gcIBaG1g");
	this.shape_3.setTransform(-20.2,-13.4,0.25,0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#808181").s().p("AlbGWIDdsrIHaCCIi6Kpg");
	this.shape_4.setTransform(18.4,-18.1,0.25,0.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808181").s().p("AiLBVIDYj2IA/FDg");
	this.shape_5.setTransform(22.8,-35.6,0.25,0.25);

	this.instance = new lib.DIZAIN();
	this.instance.parent = this;
	this.instance.setTransform(368.2,91,2.064,2.064,0,0,0,0.1,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AAWGYQgYgBgcgCQkDgWA/mNQAgjIBTjCQD0GDBCCbQBRC+hUA3QgwAehhAAg");
	this.shape_6.setTransform(-23.5,-29.9,0.25,0.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("ArbPZQihAAhzhyQhyhyAAiiIAA4rMAjDAAAIAAYrQAACihyByQhzByiiAAg");
	this.shape_7.setTransform(1.5,18.2,0.25,0.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AjyK6IAA1zIHlAAIAAVzg");
	this.shape_8.setTransform(0.7,-25.4,0.25,0.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AhPDbIhWmdQAwAEAjAAQBiAAA7gcIBaG1g");
	this.shape_9.setTransform(-20.2,-13.4,0.25,0.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AlbGWIDdsrIHaCCIi6Kpg");
	this.shape_10.setTransform(18.4,-18.1,0.25,0.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AiLBVIDYj2IA/FDg");
	this.shape_11.setTransform(22.8,-35.6,0.25,0.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AowFEIAAqGIIwlFIIwFEIABKHIoxFDg");
	this.shape_12.setTransform(1.2,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{scaleX:0.25,scaleY:0.25,x:22.8,y:-35.6}},{t:this.shape_4,p:{scaleX:0.25,scaleY:0.25,x:18.4,y:-18.1}},{t:this.shape_3,p:{scaleX:0.25,scaleY:0.25,x:-20.2,y:-13.4}},{t:this.shape_2,p:{scaleX:0.25,scaleY:0.25,x:0.7,y:-25.4}},{t:this.shape_1,p:{scaleX:0.25,scaleY:0.25,x:1.5,y:18.2}},{t:this.shape,p:{scaleX:0.25,scaleY:0.25,x:-23.5,y:-29.9}}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance}]},1).to({state:[{t:this.shape_5,p:{scaleX:0.184,scaleY:0.184,x:16.8,y:-26.3}},{t:this.shape_4,p:{scaleX:0.184,scaleY:0.184,x:13.6,y:-13.3}},{t:this.shape_3,p:{scaleX:0.184,scaleY:0.184,x:-14.9,y:-9.9}},{t:this.shape_2,p:{scaleX:0.184,scaleY:0.184,x:0.5,y:-18.7}},{t:this.shape_1,p:{scaleX:0.184,scaleY:0.184,x:1.1,y:13.4}},{t:this.shape,p:{scaleX:0.184,scaleY:0.184,x:-17.3,y:-22.1}}]},1).to({state:[{t:this.shape_12},{t:this.shape_5,p:{scaleX:0.184,scaleY:0.184,x:16.8,y:-26.3}},{t:this.shape_4,p:{scaleX:0.184,scaleY:0.184,x:13.6,y:-13.3}},{t:this.shape_3,p:{scaleX:0.184,scaleY:0.184,x:-14.9,y:-9.9}},{t:this.shape_2,p:{scaleX:0.184,scaleY:0.184,x:0.5,y:-18.7}},{t:this.shape_1,p:{scaleX:0.184,scaleY:0.184,x:1.1,y:13.4}},{t:this.shape,p:{scaleX:0.184,scaleY:0.184,x:-17.3,y:-22.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-42.8,59,85.6);


(lib.Baneris = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Baneriai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,6.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808181").s().p("AgOAYIAOgvIAPAvg");
	this.shape.setTransform(-5.5,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808181").s().p("AgXA8IAAg5QgMgKAAgQQAAgPAKgKQALgLAOAAQAPAAALALQAKAKAAAPQAAAQgMAKIAAA5g");
	this.shape_1.setTransform(21.8,-16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#808181").s().p("AgWA8IAAg5QgNgKAAgQQAAgPALgKQAKgLAOAAQAPAAALALQAKAKAAAPQAAAQgMAKIAAA5g");
	this.shape_2.setTransform(-22.2,-16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AnAEEIAAoGIHAkEIHBEDIAAIHInBEDg");
	this.shape_3.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{scaleX:1,scaleY:1,x:-22.2,y:-16.5}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:21.8,y:-16.5}},{t:this.shape,p:{scaleX:1,scaleY:1,x:-5.5,y:6.4}},{t:this.instance,p:{scaleX:1,scaleY:1,y:6.9,startPosition:0}}]}).to({state:[]},1).to({state:[{t:this.shape_2,p:{scaleX:0.823,scaleY:0.823,x:-18.3,y:-13.6}},{t:this.shape_1,p:{scaleX:0.823,scaleY:0.823,x:17.9,y:-13.6}},{t:this.shape,p:{scaleX:0.823,scaleY:0.823,x:-4.5,y:5.2}},{t:this.instance,p:{scaleX:0.823,scaleY:0.823,y:5.7,startPosition:2}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.823,scaleY:0.823,x:-18.3,y:-13.6}},{t:this.shape_1,p:{scaleX:0.823,scaleY:0.823,x:17.9,y:-13.6}},{t:this.shape,p:{scaleX:0.823,scaleY:0.823,x:-4.5,y:5.2}},{t:this.instance,p:{scaleX:0.823,scaleY:0.823,y:5.7,startPosition:0}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-22.5,59.7,45.1);


(lib.P = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808181").s().p("Ag/CuIgbgMQgIgEgDgIQgCgJADgGIALgWIgBAAQgWgTgNgYIgXAFQgIACgHgEQgHgFgCgIIgHgdQgBgIAEgHQAEgHAIgCIAWgFQAAgcAMgbIgRgOQgGgFgBgIQgBgJAFgGIATgYQAFgGAIAAQAIgCAHAFIAQANQAXgSAegHIAAgVQAAgIAGgGQAGgGAIAAIAdAAQAIAAAGAGQAGAGAAAIIAAAVQAeAHAWARIAQgMQAGgFAJAAQAIABAFAGIATAYQAFAGgBAIQAAAJgHAFIgRANQAMAbABAdIAWAEQAIADAEAGQAFAHgCAJIgHAdQgBAHgIAGQgGADgJgBIgWgFQgNAYgXATIALAVQAEAIgDAIQgCAHgIAEIgbAOQgIADgIgDQgHgCgEgHIgLgXQgbAGgbgGIgLAXQgFALgNAAQgFAAgDgCgAgmgjQgQAQAAAWQAAAXAQAQQAQAQAWAAQAXAAAQgQQAQgQAAgXQAAgWgQgQQgQgQgXAAQgWAAgQAQg");
	this.shape.setTransform(29.6,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808181").s().p("Ag/CuIgbgNQgHgDgEgIQgCgIADgHIAKgWQgWgTgNgYIgXAFQgIACgHgFQgHgEgCgIIgHgdQgBgIAEgHQAFgIAHgBIAWgFQAAgdAMgbIgRgNQgGgFgBgJQgBgIAFgGIATgYQAFgGAIgBQAIgBAHAFIAQANQAXgSAegIIAAgUQAAgIAGgGQAGgGAIAAIAdAAQAIAAAGAGQAGAGAAAIIAAAUQAcAHAYASIAQgNQAGgFAJABQAIABAFAGIATAXQAFAHgBAIQgBAJgGAFIgRANQAMAaABAdIAVAFQAJACAEAHQAFAHgCAIIgHAdQgCAIgHAFQgGAEgJgBIgWgFQgOAagWARIALAWQAEAIgDAHQgCAHgIAFIgbANQgIADgIgCQgHgDgEgHIgLgWQgbAFgbgFIgLAWQgFALgNAAQgFAAgDgCgAgmgjQgQAQAAAWQAAAWAQARQAQAQAWAAQAXAAAQgQQAQgRAAgWQAAgWgQgQQgQgQgXAAQgWAAgQAQg");
	this.shape_1.setTransform(19.8,-22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#808181").s().p("AhbEaIhBggQgIgDgCgHQgDgJADgHIAWguQglgegUgnIgwAMQgIABgHgEQgHgEgCgJIgQhGQgCgHAFgHQAEgIAIgBIAugLQABgvATgrIglgcQgGgFgBgIQgBgIAFgIIAtg3QAFgHAIgBQAIgBAHAFIAjAdQAlgeAwgMIAAgtQAAgIAGgGQAGgFAIAAIBHAAQAIAAAGAFQAGAGAAAIIAAAtQAtAMAmAcIAjgdQAGgEAIABQAIAAAGAHIAtA4QAFAGgBAIQAAAJgHAFIgkAdQATApABAxIAvAJQAIACAEAHQAEAHgBAIIgQBGQgCAIgHAFQgHAFgIgDIgwgKQgVApgjAcIAWAtQAEAIgDAIQgDAIgHADIhBAfQgHAFgIgDQgIgDgEgIIgWguQgsAKgsgJIgWAuQgDAHgIAEIgHABQgFAAgDgCgAg9g7QgaAaAAAkQAAAkAaAZQAZAaAkAAQAkAAAagaQAagZAAgkQAAgkgagZQgagbgkAAQgkAAgZAag");
	this.shape_2.setTransform(-18.6,11.6);

	this.instance = new lib.KIT();
	this.instance.parent = this;
	this.instance.setTransform(483.3,-179.4,2.058,2.058,0,0,0,59.9,-124.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ag/CuIgbgMQgIgEgDgIQgCgJADgGIALgWIgBAAQgWgTgNgYIgXAFQgIACgHgEQgHgFgCgIIgHgdQgBgIAEgHQAEgHAIgCIAWgFQAAgcAMgbIgRgOQgGgFgBgIQgBgJAFgGIATgYQAFgGAIAAQAIgCAHAFIAQANQAXgSAegHIAAgVQAAgIAGgGQAGgGAIAAIAdAAQAIAAAGAGQAGAGAAAIIAAAVQAeAHAWARIAQgMQAGgFAJAAQAIABAFAGIATAYQAFAGgBAIQAAAJgHAFIgRANQAMAbABAdIAWAEQAIADAEAGQAFAHgCAJIgHAdQgBAHgIAGQgGADgJgBIgWgFQgNAYgXATIALAVQAEAIgDAIQgCAHgIAEIgbAOQgIADgIgDQgHgCgEgHIgLgXQgbAGgbgGIgLAXQgFALgNAAQgFAAgDgCgAgmgjQgQAQAAAWQAAAXAQAQQAQAQAWAAQAXAAAQgQQAQgQAAgXQAAgWgQgQQgQgQgXAAQgWAAgQAQg");
	this.shape_3.setTransform(29.6,15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("Ag/CuIgbgNQgHgDgEgIQgCgIADgHIAKgWQgWgTgNgYIgXAFQgIACgHgFQgHgEgCgIIgHgdQgBgIAEgHQAFgIAHgBIAWgFQAAgdAMgbIgRgNQgGgFgBgJQgBgIAFgGIATgYQAFgGAIgBQAIgBAHAFIAQANQAXgSAegIIAAgUQAAgIAGgGQAGgGAIAAIAdAAQAIAAAGAGQAGAGAAAIIAAAUQAcAHAYASIAQgNQAGgFAJABQAIABAFAGIATAXQAFAHgBAIQgBAJgGAFIgRANQAMAaABAdIAVAFQAJACAEAHQAFAHgCAIIgHAdQgCAIgHAFQgGAEgJgBIgWgFQgOAagWARIALAWQAEAIgDAHQgCAHgIAFIgbANQgIADgIgCQgHgDgEgHIgLgWQgbAFgbgFIgLAWQgFALgNAAQgFAAgDgCgAgmgjQgQAQAAAWQAAAWAQARQAQAQAWAAQAXAAAQgQQAQgRAAgWQAAgWgQgQQgQgQgXAAQgWAAgQAQg");
	this.shape_4.setTransform(19.8,-22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AhbEZIhBgeQgIgEgCgIQgDgHADgIIAWgtQglgfgUgmIgwAKQgIADgHgFQgHgFgCgHIgQhGQgCgIAFgIQAEgGAIgDIAugKQABgvATgqIglgdQgGgFgBgJQgBgHAFgHIAtg5QAFgGAIgBQAIgBAHAFIAjAcQAlgcAwgNIAAgsQAAgJAGgGQAGgFAIgBIBHAAQAIABAGAFQAGAGAAAJIAAAsQAtALAmAdIAjgcQAGgGAIABQAIABAGAGIAtA4QAFAHgBAIQAAAJgHAEIgkAeQATAqABAwIAvAJQAIADAEAGQAEAHgBAIIgQBGQgCAIgHAFQgHAFgIgDIgwgKQgVAogjAeIAWAtQAEAHgDAIQgDAHgHAEIhBAfQgHAEgIgDQgIgCgEgHIgWguQgsAJgsgJIgWAuQgDAHgIADIgHABQgFAAgDgCgAg9g7QgaAaAAAjQAAAlAaAaQAZAaAkAAQAkAAAagaQAagaAAglQAAgjgagaQgagagkAAQgkAAgZAag");
	this.shape_5.setTransform(-18.6,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#808181").s().p("AhbEZIhBgeQgIgEgCgIQgDgHADgIIAWgtQglgfgUgmIgwAKQgIADgHgFQgHgFgCgHIgQhGQgCgIAFgIQAEgGAIgDIAugKQABgvATgqIglgdQgGgFgBgJQgBgHAFgHIAtg5QAFgGAIgBQAIgBAHAFIAjAcQAlgcAwgNIAAgsQAAgJAGgGQAGgFAIgBIBHAAQAIABAGAFQAGAGAAAJIAAAsQAtALAmAdIAjgcQAGgGAIABQAIABAGAGIAtA4QAFAHgBAIQAAAJgHAEIgkAeQATAqABAwIAvAJQAIADAEAGQAEAHgBAIIgQBGQgCAIgHAFQgHAFgIgDIgwgKQgVAogjAeIAWAtQAEAHgDAIQgDAHgHAEIhBAfQgHAEgIgDQgIgCgEgHIgWguQgsAJgsgJIgWAuQgDAHgIADIgHABQgFAAgDgCgAg9g7QgaAaAAAjQAAAlAaAaQAZAaAkAAQAkAAAagaQAagaAAglQAAgjgagaQgagagkAAQgkAAgZAag");
	this.shape_6.setTransform(-13.8,8.5,0.738,0.738);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AowFEIAAqGIIwlEIIwFDIABKHIoxFEg");
	this.shape_7.setTransform(-0.4,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:19.8,y:-22.3}},{t:this.shape,p:{scaleX:1,scaleY:1,x:29.6,y:15.9}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance}]},1).to({state:[{t:this.shape_6},{t:this.shape_1,p:{scaleX:0.738,scaleY:0.738,x:14.7,y:-16.4}},{t:this.shape,p:{scaleX:0.738,scaleY:0.738,x:21.9,y:11.8}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_1,p:{scaleX:0.738,scaleY:0.738,x:14.7,y:-16.4}},{t:this.shape,p:{scaleX:0.738,scaleY:0.738,x:21.9,y:11.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.6,-39.9,95.3,79.8);


// stage content:
(lib.RECOVER_menulongcanvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.backgroundColor="rgba(0,0,0,0)";
		
		document.body.style.backgroundColor = "rgba(0,0,0,0)";
		
		
		
		
		
		this.I.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			 parent.window.location.href = "http://localhost/new_virtualistudija/#/svetainiu-kurimas";
		}
		
		
		
		this.M.addEventListener("click", fl2_ClickToGoToWebPage);
		
		function fl2_ClickToGoToWebPage() {
			 parent.window.location.href = "http://localhost/new_virtualistudija/#/marketingas";
			 window.parent.document.querySelector('.menu-long').style.display = "block";
		}
		
		
		
		this.D.addEventListener("click", fl3_ClickToGoToWebPage);
		
		function fl3_ClickToGoToWebPage() {
			 parent.window.location.href = "http://localhost/new_virtualistudija/#/dizaino-darbai";
		}
		
		
		
		this.K.addEventListener("click", fl4_ClickToGoToWebPage);
		
		function fl4_ClickToGoToWebPage() {
			 parent.window.location.href = "http://localhost/new_virtualistudija/#/kitos-paslaugos";
		}
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AggAiQgOgOAAgUQAAgTAOgNQANgOATAAQATAAAOAOQAOANAAATQAAAUgOAOQgOANgTAAQgTAAgNgNg");
	this.shape.setTransform(75,460.9,0.59,0.59);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0282D").s().p("Ag1A2QgWgWAAggQAAgfAWgWQAWgWAfAAQAgAAAWAWQAWAWAAAfQAAAggWAWQgWAWggAAQgfAAgWgWg");
	this.shape_1.setTransform(75,460.9,0.59,0.59);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AggAiQgOgOAAgUQAAgSAOgOQAOgOASAAQAUAAAOAOQANAOAAASQAAAUgNAOQgOANgUAAQgSAAgOgNg");
	this.shape_2.setTransform(135.5,320.4,0.59,0.59);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CC541").s().p("Ag1A2QgWgWAAggQAAgeAWgXQAWgWAfgBQAgABAWAWQAWAXAAAeQAAAggWAWQgWAWggAAQgfAAgWgWg");
	this.shape_3.setTransform(135.5,320.4,0.59,0.59);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AggAiQgOgOAAgUQAAgSAOgOQANgOATAAQAUAAAOAOQANAOAAASQAAAUgNAOQgOANgUAAQgTAAgNgNg");
	this.shape_4.setTransform(135.5,214.8,0.59,0.59);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAAF3C").s().p("Ag1A2QgWgWAAggQAAgeAWgXQAWgWAfgBQAgABAWAWQAWAXAAAeQAAAggWAWQgWAWggAAQgfAAgWgWg");
	this.shape_5.setTransform(135.5,214.8,0.59,0.59);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AggAhQgOgOAAgTQAAgTAOgNQANgOATAAQATAAAPAOQANANAAATQAAATgNAOQgPAOgTAAQgTAAgNgOg");
	this.shape_6.setTransform(76.6,75.8,0.59,0.59);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAAF3C").s().p("Ag1A2QgWgXAAgfQAAgfAWgWQAWgXAfABQAfgBAXAXQAWAWABAfQgBAfgWAXQgXAWgfABQgfgBgWgWg");
	this.shape_7.setTransform(76.6,75.8,0.59,0.59);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C0282D").ss(3).p("AExoDIpaF0IAAKf");
	this.shape_8.setTransform(89.5,430.6,0.488,0.488);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FAAF3C").ss(3).p("AjwqJIgGRlIC4A8QDMBDBqAg");
	this.shape_9.setTransform(62,38.4,0.59,0.59);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FAAF3C").ss(3).p("AkutcIACK2IJbFZIAAKq");
	this.shape_10.setTransform(120.4,168.2,0.488,0.488);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#8CC541").ss(3).p("AAAFcIAAq3");
	this.shape_11.setTransform(135.4,298.2,0.488,0.488);

	this.K = new lib.P();
	this.K.parent = this;
	this.K.setTransform(75.1,492.5,0.488,0.488,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.K, 0, 1, 2, false, new lib.P(), 3);

	this.D = new lib.D();
	this.D.parent = this;
	this.D.setTransform(134.8,388.5,0.488,0.488,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.D, 0, 1, 2, false, new lib.D(), 3);

	this.M = new lib.M();
	this.M.parent = this;
	this.M.setTransform(133.6,244.3,0.488,0.488,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.M, 0, 1, 2, false, new lib.M(), 3);

	this.I = new lib.Svetaines();
	this.I.parent = this;
	this.I.setTransform(105.4,92.7,0.59,0.59,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.I, 0, 1, 2, false, new lib.Svetaines(), 3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FAAF3C").ss(5).p("AnykfIHykgIHzEgIAAI/InzEgInykgg");
	this.shape_12.setTransform(105.8,92.7,0.59,0.59);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FAAF3C").s().p("AnvEtIgGiQIgIksIAMgGIB8hKIGBjdIEACdIB6BNIB4BQIhAggImyjmIncETIgOGiIgICQg");
	this.shape_13.setTransform(134.5,134.3,0.59,0.59);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FAAF3C").s().p("AjKGGIA8gpIA8gnIA9gnIDpiNIABiCIAEiPIAIiQIAFhIIAHhIIAHBIIAJCQIADBIQADAwACBfIABCeIgNAIIh9BGQhJApg1AcIhAAhIjDBeIA7gqg");
	this.shape_14.setTransform(62.4,101.2,0.59,0.59);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FAAF3C").s().p("AAAG2Ih9hGImAjgIAFjkIANkgIAFhIIAWIyIFsDQIBwBDIDxiDIDBhjIBAggInyE6g");
	this.shape_15.setTransform(134.5,51.2,0.59,0.59);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#8CC541").ss(5).p("ApalbIJblcIJaFcIAAK3IpaFcIpblcg");
	this.shape_16.setTransform(135.4,248.7,0.488,0.488);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8CC541").s().p("ADFIgInHjzIAAgNIgDiQIADm8IEHiQIB/hDICBhAInaEsIAAImIFiDdIB4BQIhAggg");
	this.shape_17.setTransform(178.9,248.1,0.59,0.59);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8CC541").s().p("AHiF1IgRnqIlsjQQg1gfg7gkIjxCDIiABDIiBBAIB4hQQBJgvAxgeIEAidIALAHQBDAlA6AhIGBDgIgWJMIgGhIg");
	this.shape_18.setTransform(106.7,289.7,0.59,0.59);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8CC541").s().p("AkCACIg9glIg8goIg8gpQgbgSgggYIDDBfIBAAgQAjATBcAxIBwBAIBxhAIB/hEIA/ggIBBghIBBgfIBCgfIg7AqIh4BRIg9AlIkDCdg");
	this.shape_19.setTransform(106,224.1,0.59,0.59);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C0282D").s().p("ADvAfQgqgWhUgtIhxhAIhwBAIh/BDIkCB/QAfgXAbgTIC1h2QA0ghBHgqIB8hJIALgHIAMAHIB8BJQBHAqA0AhIDvCgg");
	this.shape_20.setTransform(164.9,412.1,0.59,0.59);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C0282D").s().p("AjIIXIA8gnQAwgfBJguIDqiQIgCmiIACiDIjqiQIh5hNIh5hQIBBAgIBAAhQArAVBWAtIEGCQIAAANIACCQIgCG8IoIETg");
	this.shape_21.setTransform(92,388.2,0.59,0.59);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C0282D").s().p("An9CQIAIksIAGiQIAJiQIAJCQIAGCQIAHESIFsDQIBwBDIDxiDICAhDICBhAIh4BPIh6BOIkACdg");
	this.shape_22.setTransform(164.2,346.6,0.59,0.59);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#C0282D").ss(5).p("AnykfIHykgIHyEgIAAI/InyEgInykgg");
	this.shape_23.setTransform(135.5,388.2,0.59,0.59);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2CA9E1").s().p("AgLCXIh9hJIh6hMIg9gmIg8gnIg8gpQgbgSgggYQAcAMAmATICCBAIA/AhQA2AbBJAoIBwBAIBxhAIB/hDIBAghIDDhfIg7AqIg8ApIg8AnIg9AmQgzAhhIArIiIBRg");
	this.shape_24.setTransform(104.9,470.9,0.59,0.59);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2CA9E1").s().p("An9iPIALgHIB8hJIGCjdIEACdQA1AgBFAuIB4BPIhBgfIhAgiQgrgVhVgtIjxiDIlpDTIhzBBIgIERQgBBIgFBIIgJCQg");
	this.shape_25.setTransform(104.2,536.9,0.59,0.59);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2CA9E1").s().p("AiMHwIB6hNIDpiQIAAomIjpiPIh6hNIg8goIg7goICABAQBeAxAiASIEHCQIABJZIkICQIiABCIiABBg");
	this.shape_26.setTransform(32,495.4,0.59,0.59);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#2CA9E1").ss(5).p("AHzkfIAAI/InzEgInykgIAAo/IHykgg");
	this.shape_27.setTransform(75.5,495.4,0.59,0.59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.I},{t:this.M},{t:this.D},{t:this.K},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(278.6,288.5,541.3,583.3);
// library properties:
lib.properties = {
	width: 524,
	height: 580,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;