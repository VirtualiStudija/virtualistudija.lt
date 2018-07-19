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


(lib.Svetaines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808181").s().p("AjiDjQheheAAiFQAAiDBehfQBfheCDAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiDAAhfhegAAZCrIAABdQAqgWAbhOQgfAFgmACgAgYEIIAAhdQgmgCgfgFQAcBOApAWgADcB+QgdAPgnALQgLAngPAdQgFAMgJAOQAsgUAjgjQAjgjAUgsgAhvD2IgOgaQgOgcgMgoQglgLgfgPIgagOQAUAsAjAjQAjAiAsAVIAAAAgAAZB4QAvgCAlgJQAJglACgvIhfAAgAhsBtQAmAJAuACIAAhfIhfAAQACApAJArgACkBeQBOgbAWgqIhdAAQgCAmgFAfgAijBeQgFgjgCgiIhcAAQAVAqBOAbIAAAAgAEIgYQgWgphOgcQAFAfACAmIBdAAIAAAAgAB4gYQgCgvgJglQgrgJgpgCIAABfIBfAAIAAAAgAhshsQgJArgCApIBfAAIAAhfQgoACgsAJgAkGgYIBcAAQACghAFgkQhOAcgVApgAD2hvQgVgsgigjQgjgjgsgUQAJAOAFAMQAPAfALAlQAoAMAcAOIAaAOIAAAAgAi+i+QgiAjgVAsIAagOQAegPAmgLQALgmAPgeIAOgaQgsAVgjAigABeijQgbhOgqgVIAABcQAmACAfAFIAAAAgAhdijQAfgFAmgCIAAhcQgpAVgcBOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AjiDjQheheAAiFQAAiDBehfQBfheCDAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiDAAhfhegAAZCrIAABdQAqgWAbhOQgfAFgmACgAgYEIIAAhdQgmgCgfgFQAcBOApAWgADcB+QgdAPgnALQgLAngPAdQgFAMgJAOQAsgUAjgjQAjgjAUgsgAhvD2IgOgaQgOgcgMgoQglgLgfgPIgagOQAUAsAjAjQAjAiAsAVIAAAAgAAZB4QAvgCAlgJQAJglACgvIhfAAgAhsBtQAmAJAuACIAAhfIhfAAQACApAJArgACkBeQBOgbAWgqIhdAAQgCAmgFAfgAijBeQgFgjgCgiIhcAAQAVAqBOAbIAAAAgAEIgYQgWgphOgcQAFAfACAmIBdAAIAAAAgAB4gYQgCgvgJglQgrgJgpgCIAABfIBfAAIAAAAgAhshsQgJArgCApIBfAAIAAhfQgoACgsAJgAkGgYIBcAAQACghAFgkQhOAcgVApgAD2hvQgVgsgigjQgjgjgsgUQAJAOAFAMQAPAfALAlQAoAMAcAOIAaAOIAAAAgAi+i+QgiAjgVAsIAagOQAegPAmgLQALgmAPgeIAOgaQgsAVgjAigABeijQgbhOgqgVIAABcQAmACAfAFIAAAAgAhdijQAfgFAmgCIAAhcQgpAVgcBOg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AnAEEIAAoGIHAkEIHBEDIAAIHInBEDg");
	this.shape_2.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{scaleX:0.906,scaleY:0.906}}]},1).to({state:[{t:this.shape_2},{t:this.shape,p:{scaleX:0.906,scaleY:0.906}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64.2,64.2);


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
	this.shape_7.graphics.f("#CCCCCC").s().p("AowFDIAAqFIIwlFIIwFEIABKGIoxFEg");
	this.shape_7.setTransform(-0.4,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:19.8,y:-22.3}},{t:this.shape,p:{scaleX:1,scaleY:1,x:29.6,y:15.9}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_1,p:{scaleX:0.738,scaleY:0.738,x:14.7,y:-16.4}},{t:this.shape,p:{scaleX:0.738,scaleY:0.738,x:21.9,y:11.8}}]},1).to({state:[{t:this.shape_6},{t:this.shape_1,p:{scaleX:0.738,scaleY:0.738,x:14.7,y:-16.4}},{t:this.shape,p:{scaleX:0.738,scaleY:0.738,x:21.9,y:11.8}},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.6,-39.9,95.3,79.8);


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
	this.shape_13.graphics.f("#CCCCCC").s().p("AowFDIAAqFIIwlFIIwFEIABKGIoxFEg");
	this.shape_13.setTransform(-0.4,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4,p:{scaleX:0.783,scaleY:0.783,x:11,y:21.5}},{t:this.shape_3,p:{scaleX:0.783,scaleY:0.783,x:-3.1,y:26}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:25.1,y:9.2}},{t:this.shape_1,p:{scaleX:0.783,scaleY:0.783,x:-31.3,y:26.7}},{t:this.shape,p:{scaleX:0.783,scaleY:0.783,x:-17.2,y:27.9}}]}).to({state:[{t:this.shape_11,p:{scaleX:1,scaleY:1,y:-10.8}},{t:this.shape_10,p:{scaleX:0.783,scaleY:0.783,x:11,y:21.5}},{t:this.shape_9,p:{scaleX:0.783,scaleY:0.783,x:-3.1,y:26}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:25.1,y:9.2}},{t:this.shape_7,p:{scaleX:0.783,scaleY:0.783,x:-31.3,y:26.7}},{t:this.shape_6,p:{scaleX:0.783,scaleY:0.783,x:-17.2,y:27.9}}]},1).to({state:[{t:this.shape_12},{t:this.shape_4,p:{scaleX:0.626,scaleY:0.626,x:8.8,y:17.2}},{t:this.shape_3,p:{scaleX:0.626,scaleY:0.626,x:-2.5,y:20.8}},{t:this.shape_2,p:{scaleX:0.799,scaleY:0.799,x:20,y:7.4}},{t:this.shape_1,p:{scaleX:0.626,scaleY:0.626,x:-25,y:21.3}},{t:this.shape,p:{scaleX:0.626,scaleY:0.626,x:-13.8,y:22.3}}]},1).to({state:[{t:this.shape_13},{t:this.shape_11,p:{scaleX:0.799,scaleY:0.799,y:-8.6}},{t:this.shape_10,p:{scaleX:0.626,scaleY:0.626,x:8.8,y:17.2}},{t:this.shape_9,p:{scaleX:0.626,scaleY:0.626,x:-2.5,y:20.8}},{t:this.shape_8,p:{scaleX:0.799,scaleY:0.799,x:20,y:7.4}},{t:this.shape_7,p:{scaleX:0.626,scaleY:0.626,x:-25,y:21.3}},{t:this.shape_6,p:{scaleX:0.626,scaleY:0.626,x:-13.8,y:22.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-37.6,72.1,75.4);


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
	this.shape.setTransform(347.3,-79.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CA9E1").s().p("AgzBDQgVgUAAggIAAgdQAAggAVgUQATgVAgAAQAgAAAUAVQAVAUgBAgIAAAdQABAggVAUQgTAVghAAQgfAAgUgVgAgXgtQgJAMAAASIAAAeQAAATAJAMQAIALAPAAQAQAAAIgLQAJgMAAgTIAAgeQAAgSgJgMQgJgLgPAAQgPAAgIALg");
	this.shape_1.setTransform(331.6,-79.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2CA9E1").s().p("AgwBEQgUgTAAgfIAAgjQAAgfATgTQAUgUAdAAQAhAAAQAPQARAQACAaIAAABIglAAQgCgOgHgHQgHgGgOAAQgNAAgIALQgIALAAARIAAAjQAAASAIAKQAIALAOAAQALAAAGgCQAHgBADgDIAAgbIgbAAIAAgZIBDAAIAAA/QgJAKgQAIQgRAIgZAAQgeAAgUgUg");
	this.shape_2.setTransform(315.4,-79.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2CA9E1").s().p("AgyBGQgTgPAAgeIAAhuIAoAAIAABuQgBAQAJAIQAHAHAOAAQAPAAAIgHQAIgIAAgQIAAhuIAnAAIAABuQAAAegTAPQgUAQgfAAQgeAAgUgQg");
	this.shape_3.setTransform(299.2,-79.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2CA9E1").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_4.setTransform(283.3,-79.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2CA9E1").s().p("Ag3BVIAAipIAnAAIAACLIBIAAIAAAeg");
	this.shape_5.setTransform(269.6,-79.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2CA9E1").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAIAGAPAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape_6.setTransform(255,-79.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2CA9E1").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_7.setTransform(239.9,-79.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2CA9E1").s().p("AhCBVIAAipIBEAAQAeAAASAPQARAQABAZQgBAZgRAOQgSAQgeAAIgdAAIAAA6gAgbgDIAdAAQAMAAAIgHQAGgHAAgLQAAgLgGgIQgIgHgMAAIgdAAg");
	this.shape_8.setTransform(224.6,-79.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2CA9E1").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAIAGAPAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape_9.setTransform(276.6,-108.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2CA9E1").s().p("AgzBDQgUgUAAggIAAgdQAAggAUgUQATgVAgAAQAgAAAVAVQATAUABAgIAAAdQgBAggTAUQgVAVgfAAQggAAgUgVgAgYgtQgIAMAAASIAAAeQAAATAIAMQAJALAQAAQAPAAAJgLQAIgMAAgTIAAgeQAAgSgIgMQgKgLgPAAQgPAAgJALg");
	this.shape_10.setTransform(260.9,-108.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2CA9E1").s().p("AgTBVIAAiLIgtAAIAAgeICBAAIAAAeIgtAAIAACLg");
	this.shape_11.setTransform(245.9,-108.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2CA9E1").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_12.setTransform(235.6,-108.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2CA9E1").s().p("AAYBVIglhEIgTAAIAABEIgnAAIAAipIAnAAIAABCIAOAAIAkhCIAyAAIg1BNIA5Bcg");
	this.shape_13.setTransform(225,-108.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C0282D").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_14.setTransform(160.3,-79.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C0282D").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_15.setTransform(149.2,-79.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C0282D").s().p("AhBBVIAAipIA7AAQAeAAASALQASAMAAAYQAAAMgGAJQgFAKgMAEQAPADAHAKQAHAKAAAOQAAAZgRAMQgRANgfAAgAgZA3IAaAAQANAAAGgFQAGgFAAgKQAAgMgFgFQgFgGgNAAIgcAAgAgZgNIAUAAQAMAAAHgFQAGgFAAgKQAAgLgGgFQgHgFgNAAIgTAAg");
	this.shape_16.setTransform(134,-79.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C0282D").s().p("AAeBVQgFgDgCgKIgBgRIAAgKQAAgMgGgHQgHgGgLAAIgcAAIAABBIgnAAIAAipIBBAAQAdAAARANQASAOAAAYQAAANgHAKQgHAJgOAFQAQAEAHALQAGAKAAAQIAAAKQAAAHACAJQACAIAFAEIAAACgAgegKIAaAAQALAAAHgFQAGgGAAgKQAAgKgGgGQgHgHgLAAIgaAAg");
	this.shape_17.setTransform(118.6,-79.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C0282D").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_18.setTransform(102.7,-79.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C0282D").s().p("AhBBVIAAipIA+AAQAcAAAVATQAUAUAAAfIAAAdQAAAfgUAUQgVATgcAAgAgaA3IAUAAQAPAAAIgLQAJgLAAgSIAAgeQAAgRgJgLQgIgLgPAAIgUAAg");
	this.shape_19.setTransform(87.2,-79.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C0282D").s().p("Ag0BDQgTgUgBggIAAgdQABggATgUQAUgVAgAAQAgAAAUAVQAVAUgBAgIAAAdQABAggVAUQgTAVghAAQgfAAgVgVgAgXgtQgJAMAAASIAAAeQAAATAJAMQAIALAPAAQAQAAAJgLQAIgMAAgTIAAgeQAAgSgIgMQgKgLgPAAQgPAAgIALg");
	this.shape_20.setTransform(163.6,-108.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C0282D").s().p("AAgBVIg9hrIgBAAIAABrIgoAAIAAipIAoAAIA9BrIABAAIAAhrIAnAAIAACpg");
	this.shape_21.setTransform(147,-108.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C0282D").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_22.setTransform(134.9,-108.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C0282D").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_23.setTransform(123.8,-108.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C0282D").s().p("Ag+BVIAAgSIBLh5IhLAAIAAgeIB8AAIAAARIhMB6IBOAAIAAAeg");
	this.shape_24.setTransform(109.2,-108.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C0282D").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_25.setTransform(98.5,-108.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C0282D").s().p("AhBBVIAAipIA+AAQAcAAAVATQAUAUAAAfIAAAdQAAAfgUAUQgVATgcAAgAgaA3IAUAAQAPAAAIgLQAJgLAAgSIAAgeQAAgRgJgLQgIgLgPAAIgUAAg");
	this.shape_26.setTransform(87.2,-108.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8CC541").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAIAGAPAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape_27.setTransform(38.3,-108.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8CC541").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_28.setTransform(23.2,-108.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8CC541").s().p("AgwBEQgUgTAAgfIAAgjQAAgfATgTQAUgUAdAAQAhAAAQAPQARAQACAaIAAABIglAAQgCgOgHgHQgHgGgOAAQgNAAgIALQgIALAAARIAAAjQAAASAIAKQAIALAOAAQALAAAGgCQAHgBADgDIAAgbIgbAAIAAgZIBDAAIAAA/QgJAKgQAIQgRAIgZAAQgeAAgUgUg");
	this.shape_29.setTransform(7.5,-108.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8CC541").s().p("AAgBVIg9hrIgBAAIAABrIgoAAIAAipIAoAAIA9BrIABAAIAAhrIAnAAIAACpg");
	this.shape_30.setTransform(-8.8,-108.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8CC541").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_31.setTransform(-20.9,-108.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8CC541").s().p("AgTBVIAAiLIgtAAIAAgeICBAAIAAAeIgtAAIAACLg");
	this.shape_32.setTransform(-31.2,-108.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8CC541").s().p("Ag6BVIAAipIB1AAIAAAeIhOAAIAAAlIBCAAIAAAdIhCAAIAAArIBOAAIAAAeg");
	this.shape_33.setTransform(-44.3,-108.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8CC541").s().p("AAYBVIglhEIgTAAIAABEIgnAAIAAipIAnAAIAABCIAOAAIAkhCIAyAAIg1BNIA5Bcg");
	this.shape_34.setTransform(-58.6,-108.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8CC541").s().p("AAeBVQgFgDgCgKIgBgRIAAgKQAAgMgGgHQgHgGgLAAIgcAAIAABBIgnAAIAAipIBBAAQAdAAARANQASAOAAAYQAAANgHAKQgHAJgOAFQAQAEAHALQAGAKAAAQIAAAKQAAAHACAJQACAIAFAEIAAACgAgegKIAaAAQALAAAHgFQAGgGAAgKQAAgKgGgGQgHgHgLAAIgaAAg");
	this.shape_35.setTransform(-74.6,-108.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8CC541").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_36.setTransform(-90.5,-108.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8CC541").s().p("AAzBVIAAgqIAEhNIgBAAIgpB3IgaAAIgoh2IgBAAIAEBMIAAAqIgoAAIAAipIA0AAIAmB2IAAAAIAnh2IA0AAIAACpg");
	this.shape_37.setTransform(-108.7,-108.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FAAF3C").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAIAGAPAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape_38.setTransform(-171.9,-79.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FAAF3C").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_39.setTransform(-187,-79.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FAAF3C").s().p("AAzBVIAAgqIAEhNIgBAAIgpB3IgaAAIgoh2IgBAAIAEBMIAAAqIgoAAIAAipIA0AAIAmB2IAAAAIAnh2IA0AAIAACpg");
	this.shape_40.setTransform(-205.2,-79.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FAAF3C").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_41.setTransform(-219.2,-79.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FAAF3C").s().p("AAeBVQgFgDgCgKIgBgRIAAgKQAAgMgGgHQgHgGgLAAIgcAAIAABBIgnAAIAAipIBBAAQAdAAARANQASAOAAAYQAAANgHAKQgHAJgOAFQAQAEAHALQAGAKAAAQIAAAKQAAAHACAJQACAIAFAEIAAACgAgegKIAaAAQALAAAHgFQAGgGAAgKQAAgKgGgGQgHgHgLAAIgaAAg");
	this.shape_42.setTransform(-230.2,-79.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FAAF3C").s().p("AgyBZQgTgQgBgdIAAhvIApAAIAABvQgBAQAJAHQAHAIAOAAQAPAAAIgIQAIgHAAgQIAAhvIAnAAIAABvQABAdgUAQQgTAQggAAQgfAAgTgQgAgqhUIAAgUIBVAAIAAAUg");
	this.shape_43.setTransform(-246.9,-81.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FAAF3C").s().p("AAYBVIglhEIgTAAIAABEIgnAAIAAipIAnAAIAABCIAOAAIAkhCIAyAAIg1BNIA5Bcg");
	this.shape_44.setTransform(-262.2,-79.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FAAF3C").s().p("AgQBnQgJgHAAgLQAAgJAEgIIAFgGIAQABIAKAAIACgCIgSgHQgGADgEAFQgUgDgOgMQgTgQAAgdIAAhvIAnAAIAABvQAAAQAIAHQAJAIANAAQAPAAAIgIQAHgHABgQIAAhvIAnAAIAABvQAAAdgTAQQgQAOgZACIgGAIQgCADAAAGIACAFQABACAHAAIAFgBIAFgBIAEATIgJAEQgGACgHAAQgMAAgIgHgAgQA+QAEgFAGgDIASAHIgCACIgKAAIgQgBgAgQA+IAAAAg");
	this.shape_45.setTransform(-158.4,-105.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FAAF3C").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_46.setTransform(-170.3,-108.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FAAF3C").s().p("AAgBVIg9hrIgCAAIAABrIgnAAIAAipIAnAAIA+BrIABAAIAAhrIAnAAIAACpg");
	this.shape_47.setTransform(-182.3,-108.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FAAF3C").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_48.setTransform(-194.3,-108.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FAAF3C").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_49.setTransform(-205.4,-108.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FAAF3C").s().p("AgTBVIAAiLIgtAAIAAgeICBAAIAAAeIgtAAIAACLg");
	this.shape_50.setTransform(-219.9,-108.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FAAF3C").s().p("Ag6BVIAAipIB1AAIAAAeIhOAAIAAAlIBCAAIAAAdIhCAAIAAArIBOAAIAAAeg");
	this.shape_51.setTransform(-233,-108.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAAF3C").s().p("AgVBVIg3ipIAqAAIAhB7IABAGIAAAAIABgGIAih7IApAAIg3Cpg");
	this.shape_52.setTransform(-247.9,-108.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FAAF3C").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAIAGAPAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape_53.setTransform(-263.2,-108.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Headers, new cjs.Rectangle(-272.7,-126.8,629.9,64.4), null);


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
	this.shape_12.graphics.f("#CCCCCC").s().p("AowFDIAAqFIIwlFIIwFEIABKGIoxFEg");
	this.shape_12.setTransform(1.2,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{scaleX:0.25,scaleY:0.25,x:22.8,y:-35.6}},{t:this.shape_4,p:{scaleX:0.25,scaleY:0.25,x:18.4,y:-18.1}},{t:this.shape_3,p:{scaleX:0.25,scaleY:0.25,x:-20.2,y:-13.4}},{t:this.shape_2,p:{scaleX:0.25,scaleY:0.25,x:0.7,y:-25.4}},{t:this.shape_1,p:{scaleX:0.25,scaleY:0.25,x:1.5,y:18.2}},{t:this.shape,p:{scaleX:0.25,scaleY:0.25,x:-23.5,y:-29.9}}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5,p:{scaleX:0.184,scaleY:0.184,x:16.8,y:-26.3}},{t:this.shape_4,p:{scaleX:0.184,scaleY:0.184,x:13.6,y:-13.3}},{t:this.shape_3,p:{scaleX:0.184,scaleY:0.184,x:-14.9,y:-9.9}},{t:this.shape_2,p:{scaleX:0.184,scaleY:0.184,x:0.5,y:-18.7}},{t:this.shape_1,p:{scaleX:0.184,scaleY:0.184,x:1.1,y:13.4}},{t:this.shape,p:{scaleX:0.184,scaleY:0.184,x:-17.3,y:-22.1}}]},1).to({state:[{t:this.shape_5,p:{scaleX:0.184,scaleY:0.184,x:16.8,y:-26.3}},{t:this.shape_4,p:{scaleX:0.184,scaleY:0.184,x:13.6,y:-13.3}},{t:this.shape_3,p:{scaleX:0.184,scaleY:0.184,x:-14.9,y:-9.9}},{t:this.shape_2,p:{scaleX:0.184,scaleY:0.184,x:0.5,y:-18.7}},{t:this.shape_1,p:{scaleX:0.184,scaleY:0.184,x:1.1,y:13.4}},{t:this.shape,p:{scaleX:0.184,scaleY:0.184,x:-17.3,y:-22.1}},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-42.8,59,85.6);


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


// stage content:
(lib.menu_mobile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.backgroundColor = "rgba(0,0,0,0)";
		
		document.body.style.backgroundColor = "rgba(0,0,0,0)";
		
		
		
		
		
		this.I.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			parent.window.location.href = "/#/svetainiu-kurimas";
		}
		
		
		
		this.M.addEventListener("click", fl2_ClickToGoToWebPage);
		
		function fl2_ClickToGoToWebPage() {
			parent.window.location.href = "/#/marketingas";
		}
		
		
		
		this.D.addEventListener("click", fl3_ClickToGoToWebPage);
		
		function fl3_ClickToGoToWebPage() {
			parent.window.location.href = "/#/dizaino-darbai";
		}
		
		
		
		this.K.addEventListener("click", fl4_ClickToGoToWebPage);
		
		function fl4_ClickToGoToWebPage() {
			parent.window.location.href = "/#/kitos-paslaugos";
		}
		
	}
	this.frame_44 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// Tekstas H
	this.instance = new lib.Headers();
	this.instance.parent = this;
	this.instance.setTransform(320.1,252.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},24).wait(21));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AggAiQgOgOAAgUQAAgTAOgNQANgOATAAQATAAAOAOQAOANAAATQAAAUgOAOQgOANgTAAQgTAAgNgNg");
	this.shape.setTransform(288.9,182.9,1.209,1.209,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0282D").s().p("Ag1A2QgWgWAAggQAAgfAWgWQAWgWAfAAQAgAAAWAWQAWAWAAAfQAAAggWAWQgWAWggAAQgfAAgWgWg");
	this.shape_1.setTransform(288.9,182.9,1.209,1.209,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C0282D").ss(3).p("Aj8moIHyEzIAAIr");
	this.shape_2.setTransform(341.6,153.2,1.209,1.209,90);

	this.K = new lib.P();
	this.K.parent = this;
	this.K.setTransform(573,58.8);
	new cjs.ButtonHelper(this.K, 0, 1, 2, false, new lib.P(), 3);

	this.D = new lib.D();
	this.D.parent = this;
	this.D.setTransform(426.6,61.7);
	new cjs.ButtonHelper(this.D, 0, 1, 2, false, new lib.D(), 3);

	this.M = new lib.M();
	this.M.parent = this;
	this.M.setTransform(284.9,61);
	new cjs.ButtonHelper(this.M, 0, 1, 2, false, new lib.M(), 3);

	this.I = new lib.Svetaines();
	this.I.parent = this;
	this.I.setTransform(138.2,62.1,1.209,1.209);
	new cjs.ButtonHelper(this.I, 0, 1, 2, false, new lib.Svetaines(), 3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FAAF3C").ss(5).p("AnykfIHykgIHzEgIAAI/InzEgInykgg");
	this.shape_3.setTransform(138.9,63.6,1.209,1.209,-90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAAF3C").s().p("AjKGGIA8gpIA8gnIA9gnIDpiNIABiCIAEiPIAIiQIAFhIIAHhIIAHBIIAJCQIADBIQADAwACBfIABCeIgNAIIh9BGQhJApg1AcIhAAhIjDBeIA7gqg");
	this.shape_4.setTransform(156.3,152.5,1.209,1.209,-90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAAF3C").s().p("AhmE1IlcgPIhWgGIKmgbID7m3IBRiIIA/AAIgIAOIhUCYIkPHQg");
	this.shape_5.setTransform(53.8,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8CC541").ss(5).p("ApalbIJblcIJaFcIAAK3IpaFcIpblcg");
	this.shape_6.setTransform(283.6,63.7,1,1,-90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#C0282D").ss(5).p("AJbFcIpbFcIpalcIAAq3IJalcIJbFcg");
	this.shape_7.setTransform(428,63.6,1,1,-90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2CA9E1").s().p("AoZCnIAIgPIBViYIEPnQIFqAKICvAHICuALIhXAGIhXAEQg6AEh1AEIlKAJIj8G3IhRCIICeEkQAEAHgBAAQgHAAjZkqg");
	this.shape_8.setTransform(657.8,107.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#2CA9E1").ss(5).p("AHzkfIAAI/InzEgInykgIAAo/IHykgg");
	this.shape_9.setTransform(573.1,63.9,1.209,1.209,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.I},{t:this.M},{t:this.D},{t:this.K},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(355.5,96.8,711.6,191.4);
// library properties:
lib.properties = {
	width: 711,
	height: 192,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;