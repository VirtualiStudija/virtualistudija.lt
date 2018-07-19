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
	this.shape.graphics.f("#2CA9E1").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAHAGAQAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape.setTransform(428.5,227.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CA9E1").s().p("AgzBDQgVgUABggIAAgdQgBggAVgUQATgVAgAAQAgAAAUAVQAVAUAAAgIAAAdQAAAggVAUQgTAVggAAQggAAgUgVgAgXgtQgJAMAAASIAAAeQAAATAJAMQAIALAQAAQAPAAAIgLQAJgMAAgTIAAgeQAAgSgJgMQgIgLgQAAQgPAAgIALg");
	this.shape_1.setTransform(412.8,227.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2CA9E1").s().p("AgwBEQgUgTAAgfIAAgjQAAgfATgTQAUgUAdAAQAhAAAQAPQARAQACAaIAAABIglAAQgCgOgHgHQgHgGgOAAQgNAAgIALQgIALAAARIAAAjQAAASAIAKQAIALAOAAQALAAAGgCQAHgBADgDIAAgbIgbAAIAAgZIBDAAIAAA/QgJAKgQAIQgRAIgZAAQgeAAgUgUg");
	this.shape_2.setTransform(396.6,227.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2CA9E1").s().p("AgyBHQgTgRAAgdIAAhvIAnAAIAABvQABAQAHAHQAJAIANAAQAPAAAIgIQAHgHAAgQIAAhvIAoAAIAABvQAAAdgTARQgUAPgfAAQgeAAgUgPg");
	this.shape_3.setTransform(380.4,227.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2CA9E1").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_4.setTransform(364.5,227.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2CA9E1").s().p("Ag4BVIAAipIAoAAIAACLIBJAAIAAAeg");
	this.shape_5.setTransform(350.8,227.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2CA9E1").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAIAGAPAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape_6.setTransform(336.2,227.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2CA9E1").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_7.setTransform(321.1,227.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2CA9E1").s().p("AhDBVIAAipIBFAAQAeAAASAPQARAQAAAZQAAAZgRAOQgSAQgeAAIgdAAIAAA6gAgbgDIAdAAQANAAAGgHQAHgHAAgLQAAgLgHgIQgGgHgNAAIgdAAg");
	this.shape_8.setTransform(305.8,227.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2CA9E1").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAHAGAQAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape_9.setTransform(284.1,227.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2CA9E1").s().p("AgzBDQgVgUABggIAAgdQgBggAVgUQATgVAgAAQAgAAAUAVQAVAUAAAgIAAAdQAAAggVAUQgTAVggAAQggAAgUgVgAgXgtQgJAMAAASIAAAeQAAATAJAMQAIALAQAAQAPAAAIgLQAJgMAAgTIAAgeQAAgSgJgMQgIgLgQAAQgPAAgIALg");
	this.shape_10.setTransform(268.3,227.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2CA9E1").s().p("AgTBVIAAiLIgtAAIAAgeICBAAIAAAeIgtAAIAACLg");
	this.shape_11.setTransform(253.4,227.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2CA9E1").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_12.setTransform(243,227.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2CA9E1").s().p("AAYBVIglhEIgTAAIAABEIgnAAIAAipIAnAAIAABCIAOAAIAkhCIAyAAIg1BNIA5Bcg");
	this.shape_13.setTransform(232.5,227.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C0282D").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_14.setTransform(598.8,-90.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C0282D").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_15.setTransform(587.7,-90.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C0282D").s().p("AhBBVIAAipIA7AAQAeAAASALQASAMAAAYQAAAMgGAJQgFAKgMAEQAPADAHAKQAHAKAAAOQAAAZgRAMQgRANgfAAgAgZA3IAaAAQANAAAGgFQAGgFAAgKQAAgMgFgFQgFgGgNAAIgcAAgAgZgNIAUAAQAMAAAHgFQAGgFAAgKQAAgLgGgFQgHgFgNAAIgTAAg");
	this.shape_16.setTransform(572.5,-90.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C0282D").s().p("AAeBVQgFgDgCgKIgBgRIAAgKQAAgMgGgHQgHgGgLAAIgcAAIAABBIgnAAIAAipIBBAAQAdAAARANQASAOAAAYQAAANgHAKQgHAJgOAFQAQAEAHALQAGAKAAAQIAAAKQAAAHACAJQACAIAFAEIAAACgAgegKIAaAAQALAAAHgFQAGgGAAgKQAAgKgGgGQgHgHgLAAIgaAAg");
	this.shape_17.setTransform(557.1,-90.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C0282D").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_18.setTransform(541.2,-90.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C0282D").s().p("AhBBVIAAipIA9AAQAeAAAUATQAUAUAAAfIAAAdQAAAfgUAUQgUATgeAAgAgZA3IATAAQAOAAAKgLQAIgLABgSIAAgeQgBgRgIgLQgKgLgOAAIgTAAg");
	this.shape_19.setTransform(525.7,-90.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C0282D").s().p("AgzBDQgVgUAAggIAAgdQAAggAVgUQAUgVAfAAQAgAAAUAVQAVAUAAAgIAAAdQAAAggVAUQgTAVggAAQggAAgUgVgAgXgtQgJAMAAASIAAAeQAAATAJAMQAIALAQAAQAPAAAIgLQAJgMAAgTIAAgeQAAgSgJgMQgIgLgQAAQgPAAgIALg");
	this.shape_20.setTransform(503.6,-90.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C0282D").s().p("AAgBVIg+hrIAAAAIAABrIgoAAIAAipIAoAAIA9BrIABAAIAAhrIAnAAIAACpg");
	this.shape_21.setTransform(486.9,-90.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C0282D").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_22.setTransform(474.9,-90.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C0282D").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_23.setTransform(463.8,-90.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C0282D").s().p("Ag+BVIAAgSIBLh5IhMAAIAAgeIB9AAIAAARIhMB6IBNAAIAAAeg");
	this.shape_24.setTransform(449.2,-90.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C0282D").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_25.setTransform(438.5,-90.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C0282D").s().p("AhBBVIAAipIA9AAQAeAAAUATQAUAUAAAfIAAAdQAAAfgUAUQgUATgeAAgAgZA3IATAAQAOAAAKgLQAIgLABgSIAAgeQgBgRgIgLQgKgLgOAAIgTAAg");
	this.shape_26.setTransform(427.2,-90.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8CC541").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAIAGAPAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape_27.setTransform(-216.6,142.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8CC541").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_28.setTransform(-231.7,142.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8CC541").s().p("AgwBEQgUgTAAgfIAAgjQAAgfATgTQAUgUAdAAQAhAAAQAPQARAQACAaIAAABIglAAQgCgOgHgHQgHgGgOAAQgNAAgIALQgIALAAARIAAAjQAAASAIAKQAIALAOAAQALAAAGgCQAHgBADgDIAAgbIgbAAIAAgZIBDAAIAAA/QgJAKgQAIQgRAIgZAAQgeAAgUgUg");
	this.shape_29.setTransform(-247.4,142.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8CC541").s().p("AAgBVIg+hrIAAAAIAABrIgoAAIAAipIAoAAIA9BrIABAAIAAhrIAnAAIAACpg");
	this.shape_30.setTransform(-263.8,142.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8CC541").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_31.setTransform(-275.8,142.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8CC541").s().p("AgTBVIAAiLIgtAAIAAgeICBAAIAAAeIgtAAIAACLg");
	this.shape_32.setTransform(-286.1,142.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8CC541").s().p("Ag6BVIAAipIB1AAIAAAeIhOAAIAAAlIBCAAIAAAdIhCAAIAAArIBOAAIAAAeg");
	this.shape_33.setTransform(-299.3,142.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8CC541").s().p("AAYBVIglhEIgTAAIAABEIgnAAIAAipIAnAAIAABCIAOAAIAkhCIAyAAIg1BNIA5Bcg");
	this.shape_34.setTransform(-313.5,142.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8CC541").s().p("AAeBVQgFgDgCgKIgBgRIAAgKQAAgMgGgHQgHgGgLAAIgcAAIAABBIgnAAIAAipIBBAAQAdAAARANQASAOAAAYQAAANgHAKQgHAJgOAFQAQAEAHALQAGAKAAAQIAAAKQAAAHACAJQACAIAFAEIAAACgAgegKIAaAAQALAAAHgFQAGgGAAgKQAAgKgGgGQgHgHgLAAIgaAAg");
	this.shape_35.setTransform(-329.6,142.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8CC541").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_36.setTransform(-345.5,142.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8CC541").s().p("AAzBVIAAgqIAEhNIgBAAIgpB3IgaAAIgoh2IgBAAIAEBMIAAAqIgoAAIAAipIA0AAIAmB2IAAAAIAnh2IA0AAIAACpg");
	this.shape_37.setTransform(-363.6,142.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FAAF3C").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAIAGAPAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape_38.setTransform(-104,-225.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FAAF3C").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_39.setTransform(-119.1,-225.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FAAF3C").s().p("AAzBVIAAgqIAEhNIgBAAIgpB3IgaAAIgoh2IgBAAIAEBMIAAAqIgoAAIAAipIA0AAIAmB2IAAAAIAnh2IA0AAIAACpg");
	this.shape_40.setTransform(-137.3,-225.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FAAF3C").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_41.setTransform(-151.3,-225.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FAAF3C").s().p("AAeBVQgFgDgCgKIgBgRIAAgKQAAgMgGgHQgHgGgLAAIgcAAIAABBIgnAAIAAipIBBAAQAdAAARANQASAOAAAYQAAANgHAKQgHAJgOAFQAQAEAHALQAGAKAAAQIAAAKQAAAHACAJQACAIAFAEIAAACgAgegKIAaAAQALAAAHgFQAGgGAAgKQAAgKgGgGQgHgHgLAAIgaAAg");
	this.shape_42.setTransform(-162.3,-225.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FAAF3C").s().p("AgyBZQgTgQAAgdIAAhvIAnAAIAABvQABAQAHAHQAJAIANAAQAPAAAIgIQAHgHAAgQIAAhvIAoAAIAABvQAAAdgTAQQgUAQgfAAQgeAAgUgQgAgqhUIAAgUIBVAAIAAAUg");
	this.shape_43.setTransform(-179,-227.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FAAF3C").s().p("AAYBVIglhEIgTAAIAABEIgnAAIAAipIAnAAIAABCIAOAAIAkhCIAyAAIg1BNIA5Bcg");
	this.shape_44.setTransform(-194.3,-225.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FAAF3C").s().p("AgQBnQgKgHABgLQAAgJAEgIIAFgGIAQABIAKAAIABgCIgRgHQgGADgEAFQgUgDgOgMQgUgQABgdIAAhvIAnAAIAABvQABAQAHAHQAJAIANAAQAPAAAIgIQAHgHAAgQIAAhvIApAAIAABvQgBAdgTAQQgQAOgZACIgGAIQgCADAAAGIABAFQADACAFAAIAGgBIAFgBIAFATIgKAEQgFACgIAAQgMAAgIgHgAgQA+QAEgFAGgDIARAHIgBACIgKAAIgQgBgAgQA+IAAAAg");
	this.shape_45.setTransform(-217.1,-223.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FAAF3C").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_46.setTransform(-229,-225.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FAAF3C").s().p("AAgBVIg9hrIgBAAIAABrIgoAAIAAipIAoAAIA9BrIABAAIAAhrIAnAAIAACpg");
	this.shape_47.setTransform(-241,-225.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FAAF3C").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_48.setTransform(-253.1,-225.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FAAF3C").s().p("AAlBVIgKghIg1AAIgKAhIgnAAIA3ipIApAAIA3CpgAgRAWIAjAAIgSg8IAAAAg");
	this.shape_49.setTransform(-264.2,-225.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FAAF3C").s().p("AgTBVIAAiLIgtAAIAAgeICBAAIAAAeIgtAAIAACLg");
	this.shape_50.setTransform(-278.6,-225.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FAAF3C").s().p("Ag6BVIAAipIB1AAIAAAeIhOAAIAAAlIBCAAIAAAdIhCAAIAAArIBOAAIAAAeg");
	this.shape_51.setTransform(-291.8,-225.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAAF3C").s().p("AgVBVIg3ipIAqAAIAhB7IABAGIAAAAIABgGIAih7IApAAIg3Cpg");
	this.shape_52.setTransform(-306.7,-225.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FAAF3C").s().p("AgtBJQgWgOABgcIAAgBIAnAAQAAAPAIAHQAIAGAPAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgFgPgFQgggLgPgKQgQgMAAgWQAAgVATgOQASgNAcAAQAcAAATAPQASAOgBAXIAAABIgnAAQAAgKgHgHQgHgGgMAAQgLAAgGAFQgHAGAAAHQAAAIAHAEQAGAFASAHQAdAIAPAMQAPANAAAWQAAAWgSANQgRANgdAAQgcAAgVgPg");
	this.shape_53.setTransform(-321.9,-225.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Headers, new cjs.Rectangle(-376,-244.3,980.6,488.7), null);


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


(lib.Aprasymai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAEQAGAEAIABQAJAAAFgEQAGgEAAgGQAAgGgFgDQgEgEgMgDQgRgEgIgFQgJgHAAgLQAAgLAKgIQAKgJAOAAQARAAAKAJQAKAIgBANIAAAAIgQAAQAAgGgGgFQgFgEgJAAQgIAAgEADQgFAEAAAGQAAAFAEAEQAEADALADQASADAJAHQAJAGAAALQAAANgKAHQgLAJgQgBQgRAAgLgJg");
	this.shape.setTransform(-40.2,231.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgJAPAAQAQAAAKAJQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJAAQgOAAgIgHgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJgBgGAGg");
	this.shape_1.setTransform(-49.9,231.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020303").s().p("AAxAxIAAg4QAAgOgFgHQgFgFgKAAQgIgBgGAHQgFAGgBAJIAAABIAAA8IgRAAIAAg4QAAgOgFgGQgFgHgJABQgIgBgFAEQgFADgDAGIAABGIgRAAIAAhfIAPAAIACANQAEgHAHgDQAIgFAJAAQAJABAHAEQAGAEAEAJQAEgIAHgEQAIgGAKAAQAOAAAJAKQAIAKAAAVIAAA4g");
	this.shape_2.setTransform(-62.7,231.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_3.setTransform(-72.8,229.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#020303").s().p("AgPBCQgIgCgGgDIAFgOQAEADAHABQAHACAGAAQAMAAAFgGQAGgFAAgMIAAgLQgEAGgHADQgGADgIAAQgRAAgKgNQgKgMAAgUIAAgCQAAgWAKgPQAKgOARAAQAIAAAHAEQAHAEAFAHIACgNIANAAIAABfQAAASgKAKQgLAKgTAAQgHAAgIgCgAgQgqQgGAKAAAQIAAACQAAAOAGAIQAGAJALAAQAIAAAFgDQAGgEADgHIAAgqQgDgGgGgEQgFgEgHAAQgMAAgGALg");
	this.shape_4.setTransform(-80.4,233.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQAMgOAQAAQATAAAKAMQAKAMAAATIAAAKIg9AAIAAAAQAAAOAHAJQAHAJAKAAQAJgBAHgCQAGgCAFgEIAHALQgFAEgIAEQgJADgMAAQgSAAgMgNgAgNgcQgGAIgBALIAAABIArAAIAAgDQAAgKgGgHQgGgHgKABQgIAAgGAGg");
	this.shape_5.setTransform(-89.9,231.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_6.setTransform(-97.1,229.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#020303").s().p("AgdA5QgKgNAAgUIAAgCQAAgWAKgOQAJgOASgBQAHAAAHADQAGAEAFAFIAAgzIARAAIAACIIgOAAIgCgMQgFAHgGADQgHADgIAAQgRAAgKgMgAgQgEQgGAKAAAQIAAACQAAAOAGAJQAGAIALABQAIAAAFgEQAGgEADgGIAAgsQgDgFgGgEQgFgEgHABQgMAAgGAKg");
	this.shape_7.setTransform(-104.7,229.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#020303").s().p("AgLBTQgGgFAAgJQAAgHAGgGIAHgHIAAheIARAAIAABfIgCAAIgHgGIgIAFIAAABIAPAAQgHAEgDAFQgCADAAAFQAAAEABACQABACAFAAIAEAAIAFgCIADALIgHACIgKABQgHAAgFgEgAALAygAgEAyIAAgBIAIgFIAHAGgAgEhFIAAgRIARAAIAAARg");
	this.shape_8.setTransform(-112.2,231.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#020303").s().p("AALA+QgFgFAAgJQAAgHAFgGQAEgEAGgEIAAACIANAAQgGAEgDAFQgEADAAAFQAAAEACACQACACAFAAIAEAAIAEgCIADALIgHACIgJABQgIAAgGgEgAgfAUQgJgKAAgTIAAg5IARAAIAAA5QAAAOAFAGQAEAFAKABQAIgBAGgEQAGgDADgHIAAhEIARAAIAABfIgCAAIgGgGIgHAEIgBgNQgFAIgHAEQgHAEgIAAQgQABgIgLgAAVAdIAAgCIAHgEIAGAGg");
	this.shape_9.setTransform(-123.4,233.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#020303").s().p("AgNBXIgFgBIABgOIAEABIADABQAGAAAEgEQACgEAAgJIAAhmIARAAIAABmQAAAPgHAIQgIAIgMAAIgFgBgAABhGIAAgRIASAAIAAARg");
	this.shape_10.setTransform(-132.1,231.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_11.setTransform(-135.7,229.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#020303").s().p("AgcAkQgLgNAAgVIAAgDQAAgUALgNQALgOATgBQARAAALAKQAKALAAAOIAAAAIgQAAQAAgIgGgHQgGgFgKAAQgMAAgGAJQgGAKAAAOIAAADQAAAOAGAKQAGAKAMAAQAJgBAHgFQAGgFAAgHIAQAAIAAAAQAAAMgLAKQgLAJgQAAQgTAAgLgNg");
	this.shape_12.setTransform(-142.6,231.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#020303").s().p("AATBFIgdgtIgLAAIAAAtIgSAAIAAiIIASAAIAABOIALAAIAZglIAUAAIggAqIAlA1g");
	this.shape_13.setTransform(-151.5,229.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#020303").s().p("AAWAxIAAg7QgBgNgFgFQgEgGgLABQgGAAgGADQgFAEgEAGIAABFIgRAAIAAhfIAPAAIACAPQAEgIAHgEQAHgEAJgBQAPAAAJAJQAHAKAAASIAAA8g");
	this.shape_14.setTransform(-161.8,231.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#020303").s().p("AgdAmQgJgKAAgUIAAg4IASAAIAAA4QAAAPAEAGQAFAFAJABQAIgBAHgEQAGgDADgHIAAhEIARAAIAABfIgQAAIgBgPQgEAIgHAEQgHAEgJAAQgPABgJgLg");
	this.shape_15.setTransform(-172.1,231.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#020303").s().p("AgNBGIAAhSIgPAAIAAgNIAPAAIAAgMQAAgPAIgIQAHgJAOAAIAGABIAHACIgCAMIgEAAIgFgBQgHAAgEAGQgEADAAAJIAAAMIAUAAIAAANIgUAAIAABSg");
	this.shape_16.setTransform(-180,229.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#020303").s().p("AALA+QgFgFAAgJQAAgHAFgGQAEgEAGgEIgBgNQgFAIgHAEQgHAEgIAAQgQABgIgLQgJgKAAgTIAAg5IARAAIAAA5QAAAOAFAGQAEAFAKABQAIgBAGgEQAGgDADgHIAAhEIARAAIAABfIgCAAIgGgGIgHAEIAAACIANAAQgGAEgDAFQgEADAAAFQAAAEACACQACACAFAAIAEAAIAEgCIADALIgHACIgJABQgIAAgGgEgAAiAdgAAiAdgAAVAdIAAgCIAHgEIAGAGg");
	this.shape_17.setTransform(-192.7,233.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#020303").s().p("AgNBXIgFgBIABgOIAEABIADABQAGAAAEgEQACgEAAgJIAAhmIARAAIAABmQAAAPgHAIQgIAIgMAAIgFgBgAABhGIAAgRIASAAIAAARg");
	this.shape_18.setTransform(-201.3,231.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#020303").s().p("AgdAmQgJgKAAgUIAAg4IASAAIAAA4QAAAPAEAGQAFAFAJABQAIgBAHgEQAGgDADgHIAAhEIARAAIAABfIgQAAIgBgPQgEAIgHAEQgHAEgJAAQgPABgJgLg");
	this.shape_19.setTransform(-207.8,231.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgJAPAAQAQAAAKAJQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJAAQgOAAgIgHgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJgBgGAGg");
	this.shape_20.setTransform(-217.8,231.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#020303").s().p("AAfBAIg9hiIAAAAIAABiIgRAAIAAh/IARAAIA8BiIABgBIAAhhIARAAIAAB/g");
	this.shape_21.setTransform(-229.2,229.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_22.setTransform(-243.1,229.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAEQAGAEAIABQAJAAAFgEQAGgEAAgGQAAgGgFgDQgEgEgMgDQgRgEgIgFQgJgHAAgLQAAgLAKgIQAKgJAOAAQARAAAKAJQAKAIgBANIAAAAIgQAAQAAgGgGgFQgFgEgJAAQgIAAgEADQgFAEAAAGQAAAFAEAEQAEADALADQASADAJAGQAJAHAAALQAAANgKAHQgLAJgQgBQgRAAgLgJg");
	this.shape_23.setTransform(-133.1,209.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgJAPAAQAQAAAKAJQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJAAQgOAAgIgHgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_24.setTransform(-142.8,209.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#020303").s().p("AAxAxIAAg4QAAgOgFgHQgFgFgKAAQgIgBgGAHQgFAGgBAJIAAABIAAA8IgRAAIAAg4QAAgOgFgGQgFgHgJABQgIgBgFAEQgFADgDAGIAABGIgRAAIAAhfIAPAAIACANQAEgHAHgDQAIgFAJAAQAJABAHAEQAGAEAEAJQAEgIAHgEQAIgGAKAAQAOAAAJAKQAIAKAAAVIAAA4g");
	this.shape_25.setTransform(-155.6,209.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_26.setTransform(-165.8,207.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#020303").s().p("AAVAxIAAg7QABgNgGgFQgEgGgKABQgHAAgGADQgGAEgDAGIAABFIgSAAIAAhfIAQAAIABAPQAFgIAHgEQAIgEAHgBQAQAAAIAJQAJAKAAASIAAA8g");
	this.shape_27.setTransform(-173.1,209.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_28.setTransform(-180.5,207.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#020303").s().p("AgNBXIgFgBIABgOIAEABIADABQAGAAAEgEQACgEAAgJIAAhmIARAAIAABmQAAAPgHAIQgIAIgMAAIgFgBgAABhGIAAgRIASAAIAAARg");
	this.shape_29.setTransform(-186.1,209.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#020303").s().p("AgdAmQgJgKAAgUIAAg4IASAAIAAA4QAAAPAEAGQAFAFAJABQAIgBAHgEQAGgDADgHIAAhEIARAAIAABfIgQAAIgBgPQgEAIgHAEQgHAEgJAAQgPABgJgLg");
	this.shape_30.setTransform(-192.6,209.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgJAPAAQAQAAAKAJQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJAAQgOAAgIgHgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJAAgGAGg");
	this.shape_31.setTransform(-202.6,209.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#020303").s().p("AAVAxIAAg7QAAgNgEgFQgGgGgJABQgHAAgGADQgGAEgDAGIAABFIgSAAIAAhfIAQAAIABAPQAFgIAHgEQAIgEAHgBQAQAAAIAJQAJAKgBASIAAA8g");
	this.shape_32.setTransform(-212.6,209.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#020303").s().p("AgDA2QgHgHAAgNIAAg6IgPAAIAAgMIAPAAIAAgXIARAAIAAAXIASAAIAAAMIgSAAIAAA6QAAAGACADQADACAFABIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_33.setTransform(-221.1,208.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#020303").s().p("AAmBAIgLghIg1AAIgMAhIgSAAIAyh/IAOAAIAwB/gAgVAQIAqAAIgUg4IgBAAg");
	this.shape_34.setTransform(-229.7,208.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_35.setTransform(-243.1,207.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAEQAGAEAIABQAJAAAFgEQAGgEAAgGQAAgGgFgDQgEgEgMgDQgRgEgIgFQgJgHAAgLQAAgLAKgIQAKgJAOAAQARAAAKAJQAKAIgBANIAAAAIgQAAQAAgGgGgFQgFgEgJAAQgIAAgEADQgFAEAAAGQAAAFAEAEQAEADALADQASADAJAHQAJAGAAALQAAANgKAHQgLAJgQgBQgRAAgLgJg");
	this.shape_36.setTransform(-25.1,188.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgJAPAAQAQAAAKAJQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJAAQgOAAgIgHgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJgBgGAGg");
	this.shape_37.setTransform(-34.8,188.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#020303").s().p("AAxAxIAAg4QAAgOgFgHQgFgFgKAAQgIgBgGAHQgFAGgBAJIAAABIAAA8IgRAAIAAg4QAAgOgFgGQgFgHgJABQgIgBgFAEQgFADgDAGIAABGIgRAAIAAhfIAPAAIACANQAEgHAHgDQAIgFAJAAQAJABAHAEQAGAEAEAJQAEgIAHgEQAIgGAKAAQAOAAAJAKQAIAKAAAVIAAA4g");
	this.shape_38.setTransform(-47.6,188.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_39.setTransform(-57.8,186.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#020303").s().p("AgFAwIgkhfIASAAIAXBDIAAAGIABAAIABgGIAWhDIASAAIgjBfg");
	this.shape_40.setTransform(-64.5,188.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgJAPAAQAQAAAKAJQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJAAQgOAAgIgHgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJgBgGAGg");
	this.shape_41.setTransform(-74,188.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#020303").s().p("AgXAxIAAhfIAQAAIABAPQAFgIAEgEQAGgEAIgBIAEABIADAAIgDAQIgJAAQgGAAgFADQgEAEgCAFIAABEg");
	this.shape_42.setTransform(-81.5,188.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#020303").s().p("AgDA2QgHgHAAgNIAAg6IgPAAIAAgMIAPAAIAAgXIARAAIAAAXIASAAIAAAMIgSAAIAAA6QAAAGACADQADACAFAAIADAAIADAAIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_43.setTransform(-88.4,187.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAEQAGAEAIABQAJAAAFgEQAGgEAAgGQAAgGgFgDQgEgEgMgDQgRgEgIgFQgJgHAAgLQAAgLAKgIQAKgJAOAAQARAAAKAJQAKAIgBANIAAAAIgQAAQAAgGgGgFQgFgEgJAAQgIAAgEADQgFAEAAAGQAAAFAEAEQAEADALADQASADAJAHQAJAGAAALQAAANgKAHQgLAJgQgBQgRAAgLgJg");
	this.shape_44.setTransform(-96,188.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_45.setTransform(-103,186.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#020303").s().p("AAWAxIAAg7QAAgNgGgFQgFgGgJABQgHAAgGADQgGAEgDAGIAABFIgSAAIAAhfIAQAAIABAPQAFgIAHgEQAHgEAIgBQAQAAAJAJQAHAKABASIAAA8g");
	this.shape_46.setTransform(-110.3,188.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_47.setTransform(-117.7,186.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#020303").s().p("AAxAxIAAg4QAAgOgFgHQgFgFgKAAQgIgBgGAHQgFAGgBAJIAAABIAAA8IgRAAIAAg4QAAgOgFgGQgFgHgJABQgIgBgFAEQgFADgDAGIAABGIgRAAIAAhfIAPAAIACANQAEgHAHgDQAIgFAJAAQAJABAHAEQAGAEAEAJQAEgIAHgEQAIgGAKAAQAOAAAJAKQAIAKAAAVIAAA4g");
	this.shape_48.setTransform(-127.9,188.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#020303").s().p("AgdA5QgKgNAAgUIAAgCQAAgWAKgOQAJgOASgBQAHAAAHADQAGAEAFAFIAAgzIARAAIAACIIgOAAIgCgMQgFAHgGADQgHADgIAAQgRAAgKgMgAgQgEQgGAKAAAQIAAACQAAAOAGAJQAGAIALABQAIAAAFgEQAGgEADgGIAAgsQgDgFgGgEQgFgEgHABQgMAAgGAKg");
	this.shape_49.setTransform(-141.1,186.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgJAPAAQAQAAAKAJQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJAAQgOAAgIgHgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJgBgGAGg");
	this.shape_50.setTransform(-150.9,188.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#020303").s().p("AALA+QgFgFAAgJQAAgHAFgGQAEgEAGgEIgBgNQgFAIgHAEQgHAEgIAAQgQABgIgLQgJgKAAgTIAAg5IARAAIAAA5QAAAOAFAGQAEAFAKABQAIgBAGgEQAGgDADgHIAAhEIARAAIAABfIgCAAIgGgGIgHAEIAAACIANAAQgGAEgDAFQgEADAAAFQAAAEACACQACACAFAAIAEAAIAEgCIADALIgHACIgJABQgIAAgGgEgAAiAdgAAiAdgAAVAdIAAgCIAHgEIAGAGg");
	this.shape_51.setTransform(-165.2,190.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_52.setTransform(-172.8,186.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#020303").s().p("AAVAxIAAg7QAAgNgEgFQgGgGgKABQgGAAgGADQgFAEgEAGIAABFIgRAAIAAhfIAPAAIABAPQAFgIAHgEQAIgEAIgBQAPAAAIAJQAJAKgBASIAAA8g");
	this.shape_53.setTransform(-180.1,188.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_54.setTransform(-187.5,186.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgJAPAAQAQAAAKAJQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJAAQgOAAgIgHgAgPAJQgHAFAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJgBgGAGg");
	this.shape_55.setTransform(-194.8,188.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#020303").s().p("AgDA2QgHgHAAgNIAAg6IgPAAIAAgMIAPAAIAAgXIARAAIAAAXIASAAIAAAMIgSAAIAAA6QAAAGACADQADACAFAAIADAAIADAAIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_56.setTransform(-203,187.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQAMgOAQAAQATAAAKAMQAKAMAAATIAAAKIg9AAIAAAAQAAAOAHAJQAHAJAKAAQAJgBAHgCQAGgDAFgDIAHALQgFAEgIAEQgJADgMAAQgSAAgMgNgAgNgcQgGAIgBALIAAABIArAAIAAgDQAAgKgGgHQgGgHgKABQgIAAgGAGg");
	this.shape_57.setTransform(-210.5,188.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#020303").s().p("AgFAwIgkhfIASAAIAXBDIAAAGIABAAIABgGIAWhDIASAAIgjBfg");
	this.shape_58.setTransform(-219.8,188.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#020303").s().p("AgfA3QgPgKAAgSIAAAAIARAAQAAAMAJAHQAJAGAMAAQANAAAIgGQAIgFAAgJQAAgJgHgGQgGgGgRgEQgUgFgLgIQgLgKAAgNQAAgQAMgKQAMgKATAAQAVAAAMALQANAMgBAPIAAABIgQAAQAAgMgIgGQgHgHgOAAQgMAAgHAFQgHAHAAAJQAAAIAIAGQAHAFAQAEQAUAFALAJQAKAKAAAPQAAAPgNAKQgMAJgVAAQgSAAgOgLg");
	this.shape_59.setTransform(-230,186.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_60.setTransform(-243.1,186.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVANgNQAMgOAPAAQATAAAKAMQAKAMAAATIAAAKIg9AAIAAAAQAAAOAHAJQAGAJALgBQAKAAAGgCQAHgCAEgFIAHAMQgFAFgJADQgHADgNAAQgSABgMgOgAgNgcQgGAIgCALIAAAAIArAAIAAgCQABgKgGgHQgFgHgLABQgIAAgGAGg");
	this.shape_61.setTransform(-654.5,148.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#020303").s().p("AgDA2QgHgHAAgNIAAg6IgPAAIAAgMIAPAAIAAgXIARAAIAAAXIASAAIAAAMIgSAAIAAA6QAAAGACADQADACAFABIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_62.setTransform(-662.7,147);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQANgOAPAAQATAAAKAMQAKAMAAATIAAAKIg9AAIAAAAQAAAOAHAJQAHAJALgBQAIAAAHgCQAGgCAGgFIAGAMQgFAFgIADQgJADgLAAQgTABgMgOgAgNgcQgGAIgBALIAAAAIArAAIAAgCQgBgKgFgHQgGgHgKABQgIAAgGAGg");
	this.shape_63.setTransform(-670.2,148.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#020303").s().p("AAVAxIAAg7QAAgNgEgFQgGgGgJABQgHAAgGADQgFAEgEAGIAABFIgSAAIAAhfIAQAAIABAPQAFgIAHgEQAIgEAHgBQAQAAAIAKQAJAJgBASIAAA8g");
	this.shape_64.setTransform(-680.2,148);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#020303").s().p("AgXAxIAAhfIAQAAIABAPQAFgIAEgEQAGgEAIgBIAEABIADAAIgDARIgJgBQgGAAgFADQgEADgCAGIAABEg");
	this.shape_65.setTransform(-687.8,148);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQAMgOAQAAQATAAAKAMQAKAMAAATIAAAKIg9AAIAAAAQAAAOAHAJQAHAJAKgBQAJAAAHgCQAGgCAFgFIAHAMQgFAFgIADQgJADgMAAQgTABgLgOgAgNgcQgGAIgBALIAAAAIArAAIAAgCQAAgKgGgHQgGgHgKABQgIAAgGAGg");
	this.shape_66.setTransform(-696.1,148.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#020303").s().p("AgDA2QgHgHAAgNIAAg6IgPAAIAAgMIAPAAIAAgXIARAAIAAAXIASAAIAAAMIgSAAIAAA6QAAAGACADQADACAFABIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_67.setTransform(-704.3,147);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#020303").s().p("AAVAxIAAg7QABgNgGgFQgEgGgKABQgHAAgGADQgGAEgDAGIAABFIgSAAIAAhfIAQAAIABAPQAFgIAHgEQAIgEAHgBQAQAAAIAKQAJAJAAASIAAA8g");
	this.shape_68.setTransform(-712.2,148);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_69.setTransform(-719.6,146);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgJAPAAQAQABAKAIQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJAAQgOAAgIgHgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_70.setTransform(-731.3,148.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#020303").s().p("AAxAxIAAg5QAAgNgFgHQgFgFgKAAQgIgBgGAHQgFAGgBAJIAAABIAAA8IgRAAIAAg5QAAgNgFgGQgFgHgJABQgIAAgFADQgFADgDAGIAABGIgRAAIAAhfIAPAAIACANQAEgHAHgEQAIgEAJAAQAJABAHAEQAGAEAEAJQAEgIAHgEQAIgGAKAAQAOAAAJAKQAIALAAATIAAA5g");
	this.shape_71.setTransform(-744.1,148);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgJAPAAQAQABAKAIQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJAAQgOAAgIgHgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_72.setTransform(-757,148.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#020303").s().p("AgIBFIAAiIIARAAIAACIg");
	this.shape_73.setTransform(-764.2,146);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#020303").s().p("AATBFIgdgsIgMAAIAAAsIgRAAIAAiIIARAAIAABOIAMAAIAZglIAVAAIghAqIAlA1g");
	this.shape_74.setTransform(-770.4,146);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVANgNQALgOAQAAQATAAAKAMQAKAMAAATIAAAKIg9AAIAAAAQAAAOAHAJQAGAJALgBQAJAAAHgCQAGgCAFgFIAHAMQgFAFgIADQgJADgMAAQgSABgMgOgAgNgcQgGAIgBALIAAAAIAqAAIAAgCQAAgKgFgHQgGgHgKABQgIAAgGAGg");
	this.shape_75.setTransform(-780.3,148.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#020303").s().p("AAdBAQgDgDgBgGIgBgMIAAgLQAAgLgGgGQgGgGgKgBIggAAIAAA4IgQAAIAAh/IAuAAQATAAALAJQAMAKAAARQAAAKgFAHQgFAIgLADQALADAFAJQAEAHAAAMIAAALQAAAGACAFQABAFADADIAAACgAgegEIAcAAQAOAAAGgGQAHgFAAgMQAAgKgHgHQgGgFgMAAIgeAAg");
	this.shape_76.setTransform(-790.8,146.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_77.setTransform(-804.7,146.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAEQAGAEAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgDQgRgEgIgFQgJgHAAgLQAAgLAKgIQAKgIAOgBQARABAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgFQgFgEgJAAQgIAAgEADQgFAEAAAGQAAAFAEAEQAEADALADQASADAJAHQAJAGAAALQAAANgKAHQgLAJgQgBQgRAAgLgJg");
	this.shape_78.setTransform(-675.8,126.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgIQAKgKAPAAQAQABAKAIQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJAAQgOAAgIgHgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_79.setTransform(-685.5,126.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#020303").s().p("AAxAxIAAg5QAAgNgFgHQgFgFgKAAQgIgBgGAHQgFAGgBAJIAAABIAAA8IgRAAIAAg5QAAgNgFgGQgFgHgJABQgIAAgFADQgFADgDAGIAABGIgRAAIAAhfIAPAAIACANQAEgHAHgEQAIgDAJAAQAJAAAHAEQAGAFAEAIQAEgIAHgEQAIgGAKABQAOgBAJAKQAIALAAATIAAA5g");
	this.shape_80.setTransform(-698.3,126.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_81.setTransform(-708.4,124.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#020303").s().p("AgXAxIAAhfIAQAAIABAPQAFgIAEgEQAGgEAIAAIAEAAIADAAIgDARIgJgBQgGAAgFADQgEADgCAGIAABEg");
	this.shape_82.setTransform(-713.2,126.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#020303").s().p("AgdA3QgJgLAAgVIAAg3IASAAIAAA3QAAAQAEAGQAFAFAJAAQAIAAAHgEQAGgDADgHIAAhEIARAAIAABfIgQAAIgBgPQgEAIgHAEQgHAEgJAAQgPABgJgKgAgegzIAAgMIA+AAIAAAMg");
	this.shape_83.setTransform(-722,125);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#020303").s().p("AAUBFIgfgsIgLAAIAAAsIgRAAIAAiIIARAAIAABOIALAAIAZglIAWAAIghArIAlA0g");
	this.shape_84.setTransform(-731,124.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#020303").s().p("AgeAkQgMgOABgVIAAgBQgBgVAMgNQALgOATgBQAUABAMAOQALANgBAVIAAABQABAWgLANQgMANgUAAQgTAAgLgNgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAHAKALgBQAMABAHgKQAGgKAAgPIAAgBQAAgPgGgKQgHgKgMABQgLgBgHAKg");
	this.shape_85.setTransform(-745.8,126.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_86.setTransform(-753.2,124.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#020303").s().p("AAWAxIAAg7QAAgNgGgFQgFgGgJABQgHAAgGADQgGAEgDAGIAABFIgSAAIAAhfIAQAAIABAPQAFgIAHgEQAHgEAIAAQAQgBAJAKQAHAJABASIAAA8g");
	this.shape_87.setTransform(-760.6,126.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgRIARAAIAAARg");
	this.shape_88.setTransform(-768,124.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#020303").s().p("AgXAxIAAhfIAQAAIABAPQAFgIAEgEQAGgEAIAAIAEAAIADAAIgDARIgJgBQgGAAgFADQgEADgCAGIAABEg");
	this.shape_89.setTransform(-772.8,126.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#020303").s().p("AgdAnQgJgLAAgVIAAg3IASAAIAAA3QAAAQAEAGQAFAFAJAAQAIAAAHgEQAGgDADgHIAAhEIARAAIAABfIgQAAIgBgPQgEAIgHAEQgHAEgJAAQgPABgJgKg");
	this.shape_90.setTransform(-781.5,126.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#020303").s().p("AgIBAIAAhxIgpAAIAAgOIBjAAIAAAOIgpAAIAABxg");
	this.shape_91.setTransform(-791.9,124.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_92.setTransform(-804.7,124.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgDQgRgEgIgFQgJgHAAgLQAAgLAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgFQgFgEgJAAQgIAAgEADQgFAEAAAGQAAAFAEAEQAEADALADQASADAJAHQAJAGAAALQAAANgKAHQgLAJgQgBQgRAAgLgJg");
	this.shape_93.setTransform(-679.5,104.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#020303").s().p("AgeAkQgLgOAAgVIAAgBQAAgVALgNQAMgOASAAQAUAAALAOQALANAAAVIAAABQAAAWgLANQgLANgUAAQgSAAgMgNgAgRgZQgHAKAAAPIAAABQAAAPAHAKQAFAKAMgBQANABAGgKQAHgKgBgPIAAgBQABgPgHgKQgGgKgNABQgMgBgFAKg");
	this.shape_94.setTransform(-689.3,104.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#020303").s().p("AgPBCQgIgCgGgDIAFgOQAEADAHABQAHACAGAAQAMAAAFgGQAGgFAAgMIAAgLQgEAGgHADQgGADgIAAQgRAAgKgNQgKgMAAgUIAAgCQAAgWAKgPQAKgOARAAQAIAAAHAEQAHAEAFAHIACgNIANAAIAABfQAAASgKAKQgLAKgTAAQgHAAgIgCgAgQgqQgGAKAAAQIAAACQAAAOAGAIQAGAJALAAQAIAAAFgDQAGgEADgHIAAgqQgDgGgGgEQgFgEgHAAQgMAAgGALg");
	this.shape_95.setTransform(-699.7,106.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#020303").s().p("AgdAnQgJgLAAgVIAAg3IASAAIAAA3QAAAQAEAGQAFAFAJAAQAIAAAHgDQAGgEADgHIAAhEIARAAIAABfIgQAAIgBgPQgEAIgHAEQgHAEgJAAQgPABgJgKg");
	this.shape_96.setTransform(-709.7,105);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgJAPABQAQAAAKAIQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJAAQgOAAgIgHgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_97.setTransform(-719.8,104.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#020303").s().p("AgIBFIAAiIIARAAIAACIg");
	this.shape_98.setTransform(-727,102.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#020303").s().p("AgbAoQgKgJAAgMIABgBIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgDQgRgEgIgFQgJgHAAgLQAAgLAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgFQgFgEgJAAQgIAAgEADQgFAEAAAGQAAAFAEAEQAEADALADQASADAJAHQAJAGAAALQAAANgKAHQgLAJgQgBQgRAAgLgJg");
	this.shape_99.setTransform(-733.9,104.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgJQAAgJgFgFQgFgFgKABQgHAAgFADQgFAFAAAGIgRAAIAAgBQgBgKALgJQAKgJAPABQAQAAAKAIQAKAIAAAQIAAAtIABAJIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJAAQgOAAgIgHgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_100.setTransform(-743.6,104.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#020303").s().p("AgoBDIAAiDIAOAAIACAMQAFgGAHgEQAHgEAIAAQASAAAKAOQAJAOAAAXIAAACQAAAUgJANQgKAMgSAAQgHAAgHgDQgGgDgFgGIAAAvgAgOgwQgFADgDAGIAAAtQADAGAFADQAGADAIAAQALAAAGgIQAGgKAAgNIAAgCQAAgQgGgKQgGgLgMAAQgHAAgGAEg");
	this.shape_101.setTransform(-753.4,106.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#020303").s().p("AgkAzQgOgQAAgYIAAgVQAAgYAOgPQAOgQAWAAQAWAAAPAQQAOAPAAAYIAAAVQAAAYgOAQQgPAPgWAAQgWAAgOgPgAgYgnQgJALAAASIAAAVQAAASAJAMQAJAKAPABQAPgBAKgKQAJgLAAgTIAAgVQAAgSgJgLQgKgMgPAAQgPAAgJAMg");
	this.shape_102.setTransform(-769.3,103.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#020303").s().p("AgpBAIAAh/IBTAAIAAAOIhCAAIAAApIA6AAIAAANIg6AAIAAAuIBCAAIAAANg");
	this.shape_103.setTransform(-780.1,103.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#020303").s().p("AgfA3QgPgKAAgSIAAAAIARAAQAAAMAJAHQAJAGAMAAQANAAAIgGQAIgFAAgJQAAgJgHgGQgGgFgRgFQgUgEgLgJQgLgKAAgNQAAgPAMgLQAMgKATAAQAVAAAMALQANAMgBAPIAAABIgQAAQAAgMgIgGQgHgHgOAAQgMAAgHAFQgHAHAAAJQAAAIAIAGQAHAFAQAEQAUAGALAIQAKAKAAAPQAAAPgNAJQgMAKgVAAQgSAAgOgLg");
	this.shape_104.setTransform(-791.6,103.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_105.setTransform(-804.7,102.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_106.setTransform(-461.6,-203.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgOQAMgOASABQAUgBALAOQALAOAAAVIAAABQAAAVgLAOQgLAOgUAAQgSAAgMgOgAgRgZQgHAKAAAPIAAABQAAAPAHAKQAFAJAMAAQANAAAGgJQAHgKAAgPIAAgBQAAgPgHgKQgGgKgNAAQgMAAgFAKg");
	this.shape_107.setTransform(-471.4,-203.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#020303").s().p("AAxAxIAAg5QAAgOgFgGQgFgFgKgBQgIAAgGAHQgFAGgBAKIAAAAIAAA8IgRAAIAAg5QAAgNgFgGQgFgHgJAAQgIAAgFAEQgFADgDAGIAABGIgRAAIAAhfIAPAAIACANQAEgHAHgEQAIgDAJAAQAJgBAHAFQAGAFAEAIQAEgIAHgFQAIgEAKAAQAOgBAJALQAIAKAAATIAAA5g");
	this.shape_108.setTransform(-484.4,-203.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQANgNAPAAQATAAAKALQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIALAAQAIAAAHgCQAGgCAGgFIAGALQgFAGgJADQgIADgLABQgUAAgLgOgAgNgcQgGAIgCALIAAAAIAsAAIAAgCQgBgKgFgHQgGgHgKAAQgIABgGAGg");
	this.shape_109.setTransform(-496.9,-203.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#020303").s().p("AgDA2QgHgHAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADADAFAAIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_110.setTransform(-505.1,-204.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_111.setTransform(-512.6,-203.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_112.setTransform(-519.6,-205.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_113.setTransform(-526.6,-203.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgOQALgOATABQAUgBAMAOQAKAOABAVIAAABQgBAVgKAOQgMAOgUAAQgTAAgLgOgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAGAJAMAAQANAAAGgJQAGgKABgPIAAgBQgBgPgGgKQgGgKgNAAQgMAAgGAKg");
	this.shape_114.setTransform(-540.8,-203.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#020303").s().p("AAxAxIAAg5QAAgOgFgGQgFgFgKgBQgIAAgGAHQgFAGgBAKIAAAAIAAA8IgRAAIAAg5QAAgNgFgGQgFgHgJAAQgIAAgFAEQgFADgDAGIAABGIgRAAIAAhfIAPAAIACANQAEgHAHgEQAIgDAJAAQAJgBAHAFQAGAFAEAIQAEgIAHgFQAIgEAKAAQAOgBAJALQAIAKAAATIAAA5g");
	this.shape_115.setTransform(-553.8,-203.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#020303").s().p("AgeBCIgFgBIACgNIADAAIAEAAQAGAAADgFIAGgLIAEgKIgjhcIATAAIAUA8IADALIAAAAIAXhHIAUAAIgoBtQgDAJgHAIQgGAHgMAAIgFgBg");
	this.shape_116.setTransform(-566.2,-201.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#020303").s().p("AgdA5QgKgNAAgUIAAgDQAAgVAKgPQAJgOASABQAHAAAHACQAGAEAFAFIAAg0IARAAIAACJIgOAAIgCgMQgFAGgGAEQgHADgIABQgRAAgKgNgAgQgEQgGAKAAAPIAAADQAAAOAGAIQAGAKALgBQAIABAFgEQAGgDADgHIAAgrQgDgHgGgDQgFgEgHAAQgMAAgGALg");
	this.shape_117.setTransform(-576,-205.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#020303").s().p("AgIBFIAAiJIARAAIAACJg");
	this.shape_118.setTransform(-583.2,-205.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_119.setTransform(-590.4,-203.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#020303").s().p("AgFAwIgkhfIASAAIAXBCIAAAHIABAAIABgHIAWhCIASAAIgjBfg");
	this.shape_120.setTransform(-599.8,-203.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#020303").s().p("AgeAkQgLgOAAgVIAAgBQAAgVALgOQALgOATABQAUgBAMAOQALAOgBAVIAAABQABAVgLAOQgMAOgUAAQgTAAgLgOgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAHAJALAAQANAAAGgJQAHgKgBgPIAAgBQABgPgHgKQgGgKgNAAQgLAAgHAKg");
	this.shape_121.setTransform(-613.9,-203.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_122.setTransform(-621.3,-205.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#020303").s().p("AAWAxIAAg7QAAgMgGgGQgFgGgJAAQgHAAgGAFQgGADgDAGIAABFIgSAAIAAhfIAQAAIABAPQAFgIAHgEQAHgFAIABQAQgBAJAKQAIAIAAAUIAAA7g");
	this.shape_123.setTransform(-628.6,-203.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_124.setTransform(-636,-205.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#020303").s().p("AgXAxIAAhfIAQAAIABAPQAFgIAEgEQAGgFAIABIAEAAIADABIgDAQIgJgBQgGAAgFADQgEAEgCAFIAABEg");
	this.shape_125.setTransform(-640.8,-203.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#020303").s().p("AgdAnQgJgKAAgWIAAg3IASAAIAAA3QAAAQAEAGQAFAFAJAAQAIAAAHgDQAGgEADgHIAAhEIARAAIAABfIgQAAIgBgPQgEAIgHAEQgHAEgJABQgPgBgJgJg");
	this.shape_126.setTransform(-649.6,-203.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#020303").s().p("AgIBAIAAhyIgpAAIAAgNIBjAAIAAANIgpAAIAAByg");
	this.shape_127.setTransform(-659.9,-205.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_128.setTransform(-672.7,-205.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_129.setTransform(-344,-225.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#020303").s().p("AgbA1QgMgNAAgVIAAgEQAAgUAMgNQANgOAPAAQATAAAKAMQAKAMAAASIAAALIg9AAIAAAAQAAAOAHAJQAHAIALAAQAIAAAHgCQAGgDAGgEIAGALQgFAFgJAEQgIADgLAAQgUAAgLgNgAgNgLQgGAIgCAKIAAAAIAsAAIAAgCQgBgJgFgHQgGgHgKAAQgIAAgGAHgAgIgwIAAgRIASAAIAAARg");
	this.shape_130.setTransform(-353.3,-226.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#020303").s().p("AAVAxIAAg7QAAgMgEgGQgGgGgKAAQgGAAgGAFQgFADgEAGIAABFIgRAAIAAhfIAPAAIABAPQAFgIAHgEQAIgFAIABQAPgBAIAKQAJAIgBAUIAAA7g");
	this.shape_131.setTransform(-363.3,-225.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_132.setTransform(-370.7,-227.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_133.setTransform(-377.9,-225.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#020303").s().p("AgDA2QgHgHAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADADAFAAIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_134.setTransform(-386.2,-226.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQAMgNAQAAQATAAAKALQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIAKAAQAJAAAHgCQAGgCAFgFIAHALQgFAGgIADQgJADgMABQgSAAgMgOgAgNgcQgGAIgBALIAAAAIArAAIAAgCQAAgKgGgHQgGgHgKAAQgIABgGAGg");
	this.shape_135.setTransform(-393.7,-225.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#020303").s().p("AgFAwIgkhfIASAAIAXBCIAAAHIABAAIABgHIAWhCIASAAIgjBfg");
	this.shape_136.setTransform(-403,-225.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_137.setTransform(-412.2,-225.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_138.setTransform(-426.1,-225.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#020303").s().p("AgbA1QgMgNAAgVIAAgEQAAgUAMgNQANgOAPAAQATAAAKAMQAKAMAAASIAAALIg9AAIAAAAQAAAOAHAJQAGAIAMAAQAIAAAHgCQAGgDAGgEIAGALQgFAFgIAEQgJADgLAAQgUAAgLgNgAgNgLQgGAIgBAKIAAAAIArAAIAAgCQAAgJgGgHQgFgHgLAAQgIAAgGAHgAgIgwIAAgRIASAAIAAARg");
	this.shape_139.setTransform(-435.4,-226.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#020303").s().p("AAVAxIAAg7QABgMgGgGQgEgGgKAAQgHAAgGAFQgGADgDAGIAABFIgSAAIAAhfIAQAAIABAPQAFgIAHgEQAIgFAHABQAQgBAIAKQAJAIAAAUIAAA7g");
	this.shape_140.setTransform(-445.4,-225.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_141.setTransform(-452.8,-227.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#020303").s().p("AgDA2QgHgHAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADADAFAAIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_142.setTransform(-458.4,-226.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVANgNQAMgNAPAAQATAAAKALQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAGAIALAAQAKAAAGgCQAHgCAEgFIAHALQgFAGgJADQgHADgNABQgSAAgMgOgAgNgcQgGAIgCALIAAAAIArAAIAAgCQABgKgGgHQgFgHgLAAQgIABgGAGg");
	this.shape_143.setTransform(-465.9,-225.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#020303").s().p("AAWAxIAAg7QgBgMgFgGQgEgGgLAAQgGAAgGAFQgFADgEAGIAABFIgSAAIAAhfIAQAAIACAPQAEgIAHgEQAHgFAIABQAQgBAJAKQAHAIABAUIAAA7g");
	this.shape_144.setTransform(-475.8,-225.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#020303").s().p("AgXAxIAAhfIAQAAIABAPQAFgIAEgEQAGgFAIABIAEAAIADABIgDAQIgJgBQgGAAgFADQgEAEgCAFIAABEg");
	this.shape_145.setTransform(-483.5,-225.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVANgNQALgNAQAAQATAAAKALQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIAKAAQAKAAAGgCQAHgCAEgFIAHALQgFAGgJADQgHADgNABQgSAAgMgOgAgNgcQgGAIgCALIAAAAIArAAIAAgCQAAgKgFgHQgFgHgLAAQgIABgGAGg");
	this.shape_146.setTransform(-491.7,-225.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#020303").s().p("AgDA2QgHgHAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADADAFAAIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_147.setTransform(-499.9,-226.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#020303").s().p("AAWAxIAAg7QgBgMgFgGQgEgGgLAAQgGAAgGAFQgFADgEAGIAABFIgRAAIAAhfIAPAAIACAPQAEgIAHgEQAHgFAJABQAPgBAJAKQAHAIAAAUIAAA7g");
	this.shape_148.setTransform(-507.9,-225.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_149.setTransform(-515.3,-227.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgOQAMgOASABQAUgBALAOQAMAOAAAVIAAABQAAAVgMAOQgLAOgUAAQgSAAgMgOgAgRgZQgHAKAAAPIAAABQAAAPAHAKQAFAJAMAAQAMAAAHgJQAHgKAAgPIAAgBQAAgPgHgKQgHgKgMAAQgMAAgFAKg");
	this.shape_150.setTransform(-527.1,-225.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#020303").s().p("AAWAxIAAg7QAAgMgGgGQgFgGgJAAQgHAAgGAFQgGADgDAGIAABFIgSAAIAAhfIAQAAIABAPQAFgIAHgEQAIgFAHABQAQgBAJAKQAHAIABAUIAAA7g");
	this.shape_151.setTransform(-537.3,-225.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_152.setTransform(-544.7,-227.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_153.setTransform(-551.9,-225.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#020303").s().p("AglAwIAAgNIAyhEIgxAAIAAgOIBHAAIAAAMIgzBFIA2AAIAAAOg");
	this.shape_154.setTransform(-561.2,-225.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_155.setTransform(-568.1,-227.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#020303").s().p("AgdA5QgKgNAAgUIAAgDQAAgVAKgPQAJgOASABQAHAAAHACQAGAEAFAFIAAg0IARAAIAACJIgOAAIgCgMQgFAGgGAEQgHADgIABQgRAAgKgNgAgQgEQgGAKAAAPIAAADQAAAOAGAIQAGAKALgBQAIABAFgEQAGgDADgHIAAgrQgDgHgGgDQgFgEgHAAQgMAAgGALg");
	this.shape_156.setTransform(-575.7,-227.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_157.setTransform(-589.7,-225.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#020303").s().p("AgdAnQgJgKAAgWIAAg3IASAAIAAA3QAAAQAEAGQAFAFAJAAQAIAAAHgDQAGgEADgHIAAhEIARAAIAABfIgQAAIgBgPQgEAIgHAEQgHAEgJABQgPgBgJgJg");
	this.shape_158.setTransform(-599.6,-225.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_159.setTransform(-609.6,-225.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#020303").s().p("AgIBFIAAiJIARAAIAACJg");
	this.shape_160.setTransform(-616.8,-227.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_161.setTransform(-624.1,-225.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#020303").s().p("AATBFIgdgsIgLAAIAAAsIgSAAIAAiJIASAAIAABPIALAAIAZglIAUAAIggArIAlA0g");
	this.shape_162.setTransform(-633,-227.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_163.setTransform(-640.5,-227.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#020303").s().p("AAVAxIAAg7QABgMgGgGQgEgGgKAAQgHAAgGAFQgGADgDAGIAABFIgSAAIAAhfIAQAAIABAPQAFgIAHgEQAIgFAHABQAQgBAIAKQAJAIAAAUIAAA7g");
	this.shape_164.setTransform(-647.9,-225.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#020303").s().p("AgiA2QgNgLAAgVIAAhWIARAAIAABVQAAAPAIAIQAJAHANAAQANAAAJgHQAJgIAAgPIAAhVIARAAIAABWQAAAVgNALQgOALgVAAQgVAAgNgLg");
	this.shape_165.setTransform(-659.1,-226.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_166.setTransform(-672.7,-227.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_167.setTransform(-350.3,-246.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#020303").s().p("AgbA1QgMgNAAgVIAAgEQAAgUANgNQAMgOAPAAQATAAAKAMQAKAMAAASIAAALIg9AAIAAAAQAAAOAHAJQAGAIALAAQAKAAAGgCQAHgDAEgEIAHALQgFAFgJAEQgHADgNAAQgSAAgMgNgAgNgLQgGAIgCAKIAAAAIArAAIAAgCQABgJgGgHQgFgHgLAAQgIAAgGAHgAgIgwIAAgRIASAAIAAARg");
	this.shape_168.setTransform(-359.7,-248.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#020303").s().p("AAWAxIAAg7QAAgMgGgGQgEgGgLAAQgGAAgGAFQgFADgEAGIAABFIgSAAIAAhfIAQAAIACAPQAEgIAHgEQAHgFAIABQAQgBAJAKQAHAIABAUIAAA7g");
	this.shape_169.setTransform(-369.6,-246.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_170.setTransform(-377,-248.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_171.setTransform(-384.3,-246.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#020303").s().p("AgDA2QgHgHAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADADAFAAIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_172.setTransform(-392.5,-247.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQAMgNAQAAQATAAAKALQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIALAAQAJAAAGgCQAHgCAFgFIAGALQgFAGgJADQgHADgMABQgUAAgLgOgAgNgcQgGAIgCALIAAAAIArAAIAAgCQAAgKgFgHQgGgHgKAAQgIABgGAGg");
	this.shape_173.setTransform(-400,-246.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#020303").s().p("AgFAwIgkhfIASAAIAXBCIAAAHIABAAIABgHIAWhCIASAAIgjBfg");
	this.shape_174.setTransform(-409.3,-246.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_175.setTransform(-418.6,-246.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_176.setTransform(-432.4,-246.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#020303").s().p("AgbA1QgMgNAAgVIAAgEQAAgUANgNQALgOAQAAQATAAAKAMQAKAMAAASIAAALIg9AAIAAAAQAAAOAHAJQAHAIAKAAQAKAAAGgCQAHgDAEgEIAHALQgFAFgJAEQgHADgNAAQgSAAgMgNgAgNgLQgGAIgCAKIAAAAIArAAIAAgCQAAgJgFgHQgFgHgLAAQgIAAgGAHgAgIgwIAAgRIASAAIAAARg");
	this.shape_177.setTransform(-441.8,-248.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#020303").s().p("AAVAxIAAg7QAAgMgEgGQgFgGgLAAQgGAAgGAFQgGADgDAGIAABFIgRAAIAAhfIAPAAIACAPQAEgIAHgEQAHgFAJABQAPgBAIAKQAIAIAAAUIAAA7g");
	this.shape_178.setTransform(-451.7,-246.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_179.setTransform(-459.1,-248.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#020303").s().p("AgDA2QgHgHAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADADAFAAIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_180.setTransform(-464.7,-247.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQANgNAPAAQATAAAKALQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIALAAQAIAAAHgCQAGgCAGgFIAGALQgFAGgIADQgJADgLABQgTAAgMgOgAgNgcQgGAIgBALIAAAAIArAAIAAgCQgBgKgFgHQgGgHgKAAQgIABgGAGg");
	this.shape_181.setTransform(-472.2,-246.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#020303").s().p("AAVAxIAAg7QAAgMgEgGQgGgGgJAAQgHAAgGAFQgGADgDAGIAABFIgSAAIAAhfIAQAAIABAPQAFgIAHgEQAIgFAHABQAQgBAIAKQAJAIgBAUIAAA7g");
	this.shape_182.setTransform(-482.2,-246.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#020303").s().p("AgXAxIAAhfIAQAAIABAPQAFgIAEgEQAGgFAIABIAEAAIADABIgDAQIgJgBQgGAAgFADQgEAEgCAFIAABEg");
	this.shape_183.setTransform(-489.8,-246.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQAMgNAQAAQATAAAKALQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIAKAAQAJAAAHgCQAGgCAFgFIAHALQgFAGgIADQgJADgMABQgSAAgMgOgAgNgcQgGAIgBALIAAAAIArAAIAAgCQAAgKgGgHQgGgHgKAAQgIABgGAGg");
	this.shape_184.setTransform(-498.1,-246.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#020303").s().p("AgDA2QgHgHAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADADAFAAIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_185.setTransform(-506.3,-247.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#020303").s().p("AAVAxIAAg7QABgMgGgGQgEgGgKAAQgHAAgGAFQgGADgDAGIAABFIgSAAIAAhfIAQAAIABAPQAFgIAHgEQAIgFAHABQAQgBAIAKQAJAIAAAUIAAA7g");
	this.shape_186.setTransform(-514.2,-246.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_187.setTransform(-521.6,-248.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#020303").s().p("AgeAkQgLgOAAgVIAAgBQAAgVALgOQALgOATABQAUgBAMAOQALAOgBAVIAAABQABAVgLAOQgMAOgUAAQgTAAgLgOgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAHAJALAAQAMAAAHgJQAGgKAAgPIAAgBQAAgPgGgKQgHgKgMAAQgLAAgHAKg");
	this.shape_188.setTransform(-533.4,-246.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#020303").s().p("AAVAxIAAg7QAAgMgEgGQgGgGgKAAQgGAAgGAFQgGADgDAGIAABFIgRAAIAAhfIAPAAIACAPQAEgIAHgEQAIgFAIABQAPgBAIAKQAIAIAAAUIAAA7g");
	this.shape_189.setTransform(-543.6,-246.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_190.setTransform(-551,-248.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_191.setTransform(-558.3,-246.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#020303").s().p("AglAwIAAgNIAyhEIgxAAIAAgOIBHAAIAAAMIgzBFIA2AAIAAAOg");
	this.shape_192.setTransform(-567.6,-246.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_193.setTransform(-574.5,-248.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#020303").s().p("AgdA5QgKgNAAgUIAAgDQAAgVAKgPQAJgOASABQAHAAAHACQAGAEAFAFIAAg0IARAAIAACJIgOAAIgCgMQgFAGgGAEQgHADgIABQgRAAgKgNgAgQgEQgGAKAAAPIAAADQAAAOAGAIQAGAKALgBQAIABAFgEQAGgDADgHIAAgrQgDgHgGgDQgFgEgHAAQgMAAgGALg");
	this.shape_194.setTransform(-582.1,-248.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgOQAMgOASABQAUgBALAOQALAOAAAVIAAABQAAAVgLAOQgLAOgUAAQgSAAgMgOgAgRgZQgHAKAAAPIAAABQAAAPAHAKQAFAJAMAAQANAAAGgJQAHgKAAgPIAAgBQAAgPgHgKQgGgKgNAAQgMAAgFAKg");
	this.shape_195.setTransform(-596.5,-246.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#020303").s().p("AgDA2QgHgHAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADADAFAAIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_196.setTransform(-604.9,-247.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#020303").s().p("AgbA7QgKgJAAgMIABgBIAQAAQAAAJAHAFQAGAEAIAAQAJAAAFgEQAGgDAAgHQAAgFgFgEQgEgEgMgCQgRgEgIgHQgJgGAAgKQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJAAQgIAAgEAEQgFAEAAAFQAAAFAEADQAEADALADQASAEAJAHQAJAGAAALQAAANgKAIQgLAIgQAAQgRAAgLgKgAgFgtIgWgVIAAgCIAPAAIAMANIANgNIAPAAIAAACIgXAVg");
	this.shape_197.setTransform(-612.5,-248.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgOQALgOATABQAUgBAMAOQAKAOABAVIAAABQgBAVgKAOQgMAOgUAAQgTAAgLgOgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAGAJAMAAQAMAAAHgJQAGgKABgPIAAgBQgBgPgGgKQgHgKgMAAQgMAAgGAKg");
	this.shape_198.setTransform(-622.3,-246.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#020303").s().p("AgdAnQgJgKAAgWIAAg3IASAAIAAA3QAAAQAEAGQAFAFAJAAQAIAAAHgDQAGgEADgHIAAhEIARAAIAABfIgQAAIgBgPQgEAIgHAEQgHAEgJABQgPgBgJgJg");
	this.shape_199.setTransform(-632.5,-246.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#020303").s().p("AgXAxIAAhfIAQAAIABAPQAFgIAEgEQAGgFAIABIAEAAIADABIgDAQIgJgBQgGAAgFADQgEAEgCAFIAABEg");
	this.shape_200.setTransform(-640.1,-246.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_201.setTransform(-648.7,-246.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#020303").s().p("AgtBAIAAh/IAwAAQAVAAAKAKQAMALAAARQAAASgMAJQgKAKgVAAIgfAAIAAA0gAgcAAIAfAAQANAAAGgHQAGgHAAgLQAAgKgGgHQgGgIgNAAIgfAAg");
	this.shape_202.setTransform(-659,-248.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_203.setTransform(-672.7,-248.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#020303").s().p("AgTBcIgDgJQAMgJAIgVQAIgWAAgeIAAgBQAAgdgIgWQgJgVgLgKIADgJIAAAAQAPAIAOAZQANAYAAAiIAAABQAAAigNAZQgOAYgPAIg");
	this.shape_204.setTransform(-352.8,-268.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQANgNAPAAQATAAAKALQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIALAAQAIAAAHgCQAGgCAGgFIAGALQgFAGgIADQgJADgLABQgUAAgLgOgAgNgcQgGAIgBALIAAAAIArAAIAAgCQAAgKgGgHQgFgHgLAAQgIABgGAGg");
	this.shape_205.setTransform(-359.8,-268.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#020303").s().p("AgcAkQgLgNAAgVIAAgDQAAgUALgOQALgOATABQARgBALALQAKAKAAAOIAAAAIgQAAQAAgJgGgGQgGgFgKgBQgMAAgGAKQgGAKAAAOIAAACQAAAQAGAJQAGAJAMAAQAJAAAHgEQAGgGAAgIIAQAAIAAABQAAAMgLAKQgLAKgQAAQgTAAgLgOg");
	this.shape_206.setTransform(-369.4,-268.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#020303").s().p("AgXAxIAAhfIAQAAIABAPQAFgIAEgEQAGgFAIABIAEAAIADABIgDAQIgJgBQgGAAgFADQgEAEgCAFIAABEg");
	this.shape_207.setTransform(-376.8,-268.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQANgNAPAAQATAAAKALQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAGAIAMAAQAIAAAHgCQAGgCAGgFIAGALQgFAGgIADQgJADgLABQgUAAgLgOgAgNgcQgGAIgBALIAAAAIArAAIAAgCQAAgKgGgHQgFgHgLAAQgIABgGAGg");
	this.shape_208.setTransform(-385,-268.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#020303").s().p("AAxAxIAAg5QAAgOgFgGQgFgFgKgBQgIAAgGAHQgFAGgBAKIAAAAIAAA8IgRAAIAAg5QAAgNgFgGQgFgHgJAAQgIAAgFAEQgFADgDAGIAABGIgRAAIAAhfIAPAAIACANQAEgHAHgEQAIgDAJAAQAJgBAHAFQAGAFAEAIQAEgIAHgFQAIgEAKAAQAOgBAJALQAIAKAAATIAAA5g");
	this.shape_209.setTransform(-397.8,-268.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#020303").s().p("AAxAxIAAg5QAAgOgFgGQgFgFgKgBQgIAAgGAHQgFAGgBAKIAAAAIAAA8IgRAAIAAg5QAAgNgFgGQgFgHgJAAQgIAAgFAEQgFADgDAGIAABGIgRAAIAAhfIAPAAIACANQAEgHAHgEQAIgDAJAAQAJgBAHAFQAGAFAEAIQAEgIAHgFQAIgEAKAAQAOgBAJALQAIAKAAATIAAA5g");
	this.shape_210.setTransform(-413.5,-268.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#020303").s().p("AgeAkQgLgOAAgVIAAgBQAAgVALgOQAMgOASABQAUgBALAOQALAOAAAVIAAABQAAAVgLAOQgLAOgUAAQgSAAgMgOgAgRgZQgHAKAAAPIAAABQAAAPAHAKQAFAJAMAAQANAAAGgJQAHgKgBgPIAAgBQABgPgHgKQgGgKgNAAQgMAAgFAKg");
	this.shape_211.setTransform(-426.5,-268.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#020303").s().p("AgiAzQgNgQAAgYIAAgVQAAgYANgQQAOgPAVAAQAVAAANAMQANALAAATIAAABIgRAAQAAgNgIgJQgIgHgOAAQgOAAgIALQgJAMAAASIAAAVQAAASAJALQAIAMAOAAQAOAAAIgHQAIgJAAgNIARAAIAAABQAAARgNANQgNAMgVAAQgVAAgOgPg");
	this.shape_212.setTransform(-437.1,-270);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVANgNQALgNAQAAQATAAAKALQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIAKAAQAKAAAGgCQAHgCAEgFIAHALQgFAGgJADQgHADgNABQgSAAgMgOgAgNgcQgGAIgCALIAAAAIArAAIAAgCQAAgKgFgHQgFgHgLAAQgIABgGAGg");
	this.shape_213.setTransform(-447.6,-268.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#020303").s().p("AAUBcQgQgIgNgYQgOgZAAgiIAAgBQAAgiAOgYQANgZAQgIIAAAAIAEAKQgMAKgJAUQgIAVAAAeIAAABQAAAeAIAVQAIAVANAKIgEAJg");
	this.shape_214.setTransform(-454.9,-268.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_215.setTransform(-467.6,-268.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#020303").s().p("AgbA1QgMgNAAgVIAAgEQAAgUAMgNQAMgOAQAAQATAAAKAMQAKAMAAASIAAALIg9AAIAAAAQAAAOAHAJQAHAIAKAAQAJAAAHgCQAGgDAFgEIAHALQgFAFgIAEQgJADgMAAQgSAAgMgNgAgNgLQgGAIgBAKIAAAAIArAAIAAgCQAAgJgGgHQgGgHgKAAQgIAAgGAHgAgIgwIAAgRIASAAIAAARg");
	this.shape_216.setTransform(-476.9,-270.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#020303").s().p("AgFAwIgkhfIASAAIAXBCIAAAHIABAAIABgHIAWhCIASAAIgjBfg");
	this.shape_217.setTransform(-486.2,-268.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#020303").s().p("AgdAnQgJgKAAgWIAAg3IASAAIAAA3QAAAQAEAGQAFAFAJAAQAIAAAHgDQAGgEADgHIAAhEIARAAIAABfIgQAAIgBgPQgEAIgHAEQgHAEgJABQgPgBgJgJg");
	this.shape_218.setTransform(-495.9,-268.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#020303").s().p("AgDA2QgHgHAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADADAFAAIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_219.setTransform(-504.3,-269.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#020303").s().p("AgeAkQgMgOABgVIAAgBQgBgVAMgOQALgOATABQAUgBAMAOQALAOgBAVIAAABQABAVgLAOQgMAOgUAAQgTAAgLgOgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAHAJALAAQAMAAAHgJQAGgKAAgPIAAgBQAAgPgGgKQgHgKgMAAQgLAAgHAKg");
	this.shape_220.setTransform(-512.3,-268.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#020303").s().p("AgdAnQgJgKAAgWIAAg3IASAAIAAA3QAAAQAEAGQAFAFAJAAQAIAAAHgDQAGgEADgHIAAhEIARAAIAABfIgQAAIgBgPQgEAIgHAEQgHAEgJABQgPgBgJgJg");
	this.shape_221.setTransform(-522.5,-268.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#020303").s().p("AgdA5QgKgNAAgUIAAgDQAAgVAKgPQAJgOASABQAHAAAHACQAGAEAFAFIAAg0IARAAIAACJIgOAAIgCgMQgFAGgGAEQgHADgIABQgRAAgKgNgAgQgEQgGAKAAAPIAAADQAAAOAGAIQAGAJALAAQAIABAFgEQAGgDADgHIAAgrQgDgHgGgDQgFgEgHAAQgMAAgGALg");
	this.shape_222.setTransform(-532.9,-270.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#020303").s().p("AgXAxIAAhfIAQAAIABAPQAFgIAEgEQAGgFAIABIAEAAIADABIgDAQIgJgBQgGAAgFADQgEAEgCAFIAABEg");
	this.shape_223.setTransform(-540.3,-268.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgFgKAAQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgKAPABQAQAAAKAIQAKAIAAAPIAAAtIABAKIACAKIgSAAIgCgIIAAgHQgFAHgIAFQgHAEgJABQgOAAgIgIgAgPAIQgHAGAAAHQAAAHAEADQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgJAAgGAEg");
	this.shape_224.setTransform(-548.9,-268.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#020303").s().p("AgnBDIAAiDIANAAIACAMQAFgGAHgEQAHgEAJAAQARAAAKAOQAKAOAAAXIAAACQAAAUgKANQgKAMgRAAQgIAAgHgDQgHgDgEgGIAAAvgAgNgwQgGADgDAGIAAAtQADAGAGADQAEADAIAAQALAAAHgIQAGgKABgNIAAgCQgBgQgGgKQgHgLgLAAQgHAAgFAEg");
	this.shape_225.setTransform(-558.7,-266.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJABAFgEQAGgDAAgHQAAgGgFgDQgEgEgMgDQgRgDgIgGQgJgGAAgLQAAgMAKgIQAKgIAOAAQARAAAKAIQAKAJgBAMIAAAAIgQAAQAAgGgGgEQgFgFgJgBQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAGQAJAGAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_226.setTransform(-573.2,-268.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#020303").s().p("AgbA1QgMgNAAgVIAAgEQAAgUANgNQAMgOAPAAQATAAAKAMQAKAMAAASIAAALIg9AAIAAAAQAAAOAHAJQAGAIALAAQAKAAAGgCQAHgDAEgEIAHALQgFAFgJAEQgHADgNAAQgSAAgMgNgAgNgLQgGAIgCAKIAAAAIArAAIAAgCQABgJgGgHQgFgHgLAAQgIAAgGAHgAgIgwIAAgRIASAAIAAARg");
	this.shape_227.setTransform(-582.5,-270.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#020303").s().p("AAWAxIAAg7QgBgMgFgGQgEgGgLAAQgGAAgGAFQgFADgEAGIAABFIgRAAIAAhfIAPAAIACAPQAEgIAHgEQAHgFAJABQAPgBAJAKQAHAIAAAUIAAA7g");
	this.shape_228.setTransform(-592.5,-268.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#020303").s().p("AgIBFIAAhfIARAAIAABfgAgIgyIAAgSIARAAIAAASg");
	this.shape_229.setTransform(-599.9,-270.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#020303").s().p("AgDA2QgHgHAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADADAFAAIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_230.setTransform(-605.5,-269.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQANgNAPAAQATAAAKALQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIALAAQAIAAAHgCQAGgCAGgFIAGALQgFAGgJADQgIADgLABQgUAAgLgOgAgNgcQgGAIgCALIAAAAIAsAAIAAgCQgBgKgFgHQgGgHgKAAQgIABgGAGg");
	this.shape_231.setTransform(-613,-268.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#020303").s().p("AAVAxIAAg7QAAgMgEgGQgGgGgKAAQgGAAgGAFQgFADgEAGIAABFIgRAAIAAhfIAPAAIABAPQAFgIAHgEQAIgFAIABQAPgBAIAKQAJAIgBAUIAAA7g");
	this.shape_232.setTransform(-622.9,-268.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#020303").s().p("AgXAxIAAhfIAQAAIABAPQAFgIAEgEQAGgFAIABIAEAAIADABIgDAQIgJgBQgGAAgFADQgEAEgCAFIAABEg");
	this.shape_233.setTransform(-630.6,-268.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgVAMgNQANgNAPAAQATAAAKALQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAGAIAMAAQAIAAAHgCQAGgCAGgFIAGALQgFAGgIADQgJADgLABQgUAAgLgOgAgNgcQgGAIgBALIAAAAIArAAIAAgCQAAgKgGgHQgFgHgLAAQgIABgGAGg");
	this.shape_234.setTransform(-638.8,-268.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#020303").s().p("AgDA2QgHgHAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADADAFAAIADAAIADgBIADALQgCACgEABIgIABQgKAAgFgGg");
	this.shape_235.setTransform(-647,-269.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#020303").s().p("AAVAxIAAg7QAAgMgEgGQgGgGgJAAQgHAAgGAFQgFADgEAGIAABFIgSAAIAAhfIAQAAIABAPQAFgIAHgEQAIgFAHABQAQgBAIAKQAJAIgBAUIAAA7g");
	this.shape_236.setTransform(-655,-268.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#020303").s().p("AgIBAIAAh/IARAAIAAB/g");
	this.shape_237.setTransform(-662.7,-270);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_238.setTransform(-672.7,-270.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_239.setTransform(142.3,-59.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAIQgHAGAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAEg");
	this.shape_240.setTransform(135.1,-57.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#020303").s().p("AgMBBQgHgDgEgHIgDAMIgOAAIAAiIIASAAIAAA1QAEgFAHgEQAGgDAIAAQASAAAKANQAKAPAAAVIAAACQAAAVgKANQgKANgSAAQgIgBgHgEgAgOgKQgFAEgDAGIAAAoQADAHAFAFQAGADAIAAQALABAGgKQAGgIAAgPIAAgCQAAgPgGgKQgGgLgLAAQgIAAgGAFg");
	this.shape_241.setTransform(125.3,-59.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIABIAEAAIADABIgDAPIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_242.setTransform(117.4,-57.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAIQgHAGAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAEg");
	this.shape_243.setTransform(108.8,-57.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#020303").s().p("AgdA5QgKgNAAgVIAAgCQAAgVAKgPQAJgNASAAQAHAAAHADQAGADAFAGIAAg1IARAAIAACIIgOAAIgCgLQgFAGgGAEQgHAEgIAAQgRAAgKgNgAgQgEQgGAKAAAPIAAACQAAAPAGAIQAGAKALgBQAIAAAFgDQAGgEADgGIAAgrQgDgHgGgDQgFgDgHgBQgMAAgGALg");
	this.shape_244.setTransform(98.6,-59.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_245.setTransform(84.6,-57.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgOQALgNATAAQAUAAAMANQAKAOABAVIAAABQgBAVgKAOQgMAOgUAAQgTAAgLgOgAgRgZQgHAKAAAPIAAABQAAAPAHAKQAFAJAMAAQAMAAAHgJQAGgKABgPIAAgBQgBgPgGgKQgHgKgMAAQgMAAgFAKg");
	this.shape_246.setTransform(74.8,-57.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#020303").s().p("AgdA5QgKgNAAgVIAAgCQAAgVAKgPQAJgNASAAQAHAAAHADQAGADAFAGIAAg1IARAAIAACIIgOAAIgCgLQgFAGgGAEQgHAEgIAAQgRAAgKgNgAgQgEQgGAKAAAPIAAACQAAAPAGAIQAGAKALgBQAIAAAFgDQAGgEADgGIAAgrQgDgHgGgDQgFgDgHgBQgMAAgGALg");
	this.shape_247.setTransform(64.3,-59.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#020303").s().p("AgdAmQgJgJAAgWIAAg2IASAAIAAA2QAAAQAEAFQAFAHAJgBQAIAAAHgDQAGgEADgHIAAhDIARAAIAABdIgQAAIgBgNQgEAHgHAEQgHAFgJAAQgPAAgJgLg");
	this.shape_248.setTransform(54.3,-57.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAIQgHAGAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAEg");
	this.shape_249.setTransform(44.3,-57.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#020303").s().p("AgnBDIAAiDIANAAIADAMQAEgGAHgEQAHgEAJAAQARAAAKAOQAKAOAAAXIAAACQAAAUgKANQgKAMgRAAQgIAAgHgDQgGgDgFgGIAAAvgAgNgwQgGADgDAGIAAAtQADAGAGADQAFADAHAAQALAAAHgIQAGgKABgNIAAgCQgBgQgGgKQgHgLgLAAQgIAAgEAEg");
	this.shape_250.setTransform(34.5,-55.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_251.setTransform(24.5,-57.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_252.setTransform(13,-59.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_253.setTransform(6.1,-57.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_254.setTransform(-0.9,-59.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#020303").s().p("AgGBAIgwh/IATAAIAhBfIACAKIAAAAIADgKIAhhfIATAAIgwB/g");
	this.shape_255.setTransform(-8.9,-59.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_256.setTransform(-22.1,-59.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_257.setTransform(121.8,-79.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAIQgHAGAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAEg");
	this.shape_258.setTransform(112.1,-79.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#020303").s().p("AAxAwIAAg4QAAgOgFgFQgFgHgKAAQgIABgGAGQgFAGgBAKIAAAAIAAA7IgRAAIAAg4QAAgNgFgGQgFgGgJgBQgIABgFADQgFADgDAGIAABFIgRAAIAAhdIAPAAIACAMQAEgHAHgEQAIgDAJAAQAJgBAHAFQAGAEAEAJQAEgIAHgFQAIgEAKAAQAOAAAJAKQAIAJAAAUIAAA4g");
	this.shape_259.setTransform(99.3,-79.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_260.setTransform(89.2,-81.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIABIAEAAIADABIgDAPIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_261.setTransform(84.4,-79.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#020303").s().p("AgdA2QgJgJAAgWIAAg2IASAAIAAA2QAAAQAEAFQAFAHAJgBQAIAAAHgDQAGgEADgHIAAhDIARAAIAABdIgQAAIgBgNQgEAHgHAEQgHAFgJAAQgPAAgJgLgAgegyIAAgOIA+AAIAAAOg");
	this.shape_262.setTransform(75.6,-80.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#020303").s().p("AATBEIgdgsIgMAAIAAAsIgRAAIAAiIIARAAIAABPIAMAAIAZgkIAVAAIghAqIAlAzg");
	this.shape_263.setTransform(66.6,-81.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#020303").s().p("AALA9QgFgEAAgJQAAgHAFgHQAEgDAGgEIAAABIANAAQgGAFgDAEQgEAEAAAFQAAAEACACQACACAFAAIAEgBIAEgBIADAKIgHADIgJACQgIgBgGgFgAgfAUQgJgJAAgVIAAg3IARAAIAAA3QAAAPAFAFQAEAHAKgBQAIAAAGgDQAGgEADgHIAAhDIARAAIAABdIgCAAIgGgEIgHADIgBgMQgFAHgHAEQgHAFgIAAQgQAAgIgLgAAVAcIAAgBIAHgDIAGAEg");
	this.shape_264.setTransform(52,-77.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#020303").s().p("AgnBDIAAiDIANAAIADAMQAEgGAHgEQAHgEAJAAQARAAAKAOQAKAOAAAXIAAACQAAAUgKANQgKAMgRAAQgIAAgHgDQgGgDgFgGIAAAvgAgNgwQgGADgDAGIAAAtQADAGAGADQAFADAHAAQALAAAHgIQAGgKAAgNIAAgCQAAgQgGgKQgHgLgLAAQgIAAgEAEg");
	this.shape_265.setTransform(41.8,-77.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_266.setTransform(34.2,-81.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#020303").s().p("AgDA1QgHgGAAgOIAAg4IgPAAIAAgNIAPAAIAAgXIARAAIAAAXIASAAIAAANIgSAAIAAA4QAAAHACADQADACAFAAIADAAIADgBIADAMQgCACgEABIgIABQgKAAgFgHg");
	this.shape_267.setTransform(28.6,-80.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#020303").s().p("AgeAkQgLgOAAgVIAAgBQAAgVALgOQALgNATAAQAUAAAMANQALAOgBAVIAAABQABAVgLAOQgMAOgUAAQgTAAgLgOgAgSgZQgGAKAAAPIAAABQAAAPAGAKQAHAJALAAQANAAAGgJQAGgKAAgPIAAgBQAAgPgGgKQgGgKgNAAQgLAAgHAKg");
	this.shape_268.setTransform(20.6,-79.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#020303").s().p("AgPBCQgIgCgGgDIAFgOQAEADAHABQAHACAGAAQAMAAAFgGQAGgFAAgMIAAgLQgEAGgHADQgGADgIAAQgRAAgKgNQgKgMAAgUIAAgCQAAgWAKgPQAKgOARAAQAIAAAHAEQAHAEAFAHIACgNIANAAIAABfQAAASgKAKQgLAKgTAAQgHAAgIgCgAgQgqQgGAKAAAQIAAACQAAAOAGAIQAGAJALAAQAIAAAFgDQAGgEADgHIAAgqQgDgGgGgEQgFgEgHAAQgMAAgGALg");
	this.shape_269.setTransform(10.2,-77.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#020303").s().p("AgeAkQgMgOAAgVIAAgBQAAgVAMgOQAMgNASAAQAUAAALANQALAOAAAVIAAABQAAAVgLAOQgLAOgUAAQgSAAgMgOgAgRgZQgHAKAAAPIAAABQAAAPAHAKQAFAJAMAAQANAAAGgJQAHgKAAgPIAAgBQAAgPgHgKQgGgKgNAAQgMAAgFAKg");
	this.shape_270.setTransform(0.2,-79.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#020303").s().p("AgmBAIAAh/IARAAIAABxIA8AAIAAAOg");
	this.shape_271.setTransform(-9.1,-80.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_272.setTransform(-22.1,-81.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_273.setTransform(112.4,-100.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAIQgHAGAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAEg");
	this.shape_274.setTransform(102.7,-100.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#020303").s().p("AAxAwIAAg4QAAgOgFgFQgFgHgKAAQgIABgGAGQgFAGgBAKIAAAAIAAA7IgRAAIAAg4QAAgNgFgGQgFgGgJgBQgIABgFADQgFADgDAGIAABFIgRAAIAAhdIAPAAIACAMQAEgHAHgEQAIgDAJAAQAJgBAHAFQAGAEAEAJQAEgIAHgFQAIgEAKAAQAOAAAJAKQAIAJAAAUIAAA4g");
	this.shape_275.setTransform(89.9,-100.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_276.setTransform(79.7,-102.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIABIAEAAIADABIgDAPIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_277.setTransform(74.9,-100.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#020303").s().p("AgdA2QgJgJAAgWIAAg2IASAAIAAA2QAAAQAEAFQAFAHAJgBQAIAAAHgDQAGgEADgHIAAhDIARAAIAABdIgQAAIgBgNQgEAHgHAEQgHAFgJAAQgPAAgJgLgAgegyIAAgOIA+AAIAAAOg");
	this.shape_278.setTransform(66.2,-102.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#020303").s().p("AATBEIgdgsIgMAAIAAAsIgRAAIAAiIIARAAIAABPIAMAAIAZgkIAVAAIghAqIAlAzg");
	this.shape_279.setTransform(57.1,-102.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#020303").s().p("AALA9QgFgEAAgJQAAgHAFgHQAEgDAGgEIgBgMQgFAHgHAEQgHAFgIAAQgQAAgIgLQgJgJAAgVIAAg3IARAAIAAA3QAAAPAFAFQAEAHAKgBQAIAAAGgDQAGgEADgHIAAhDIARAAIAABdIgCAAIgGgEIgHADIAAABIANAAQgGAFgDAEQgEAEAAAFQAAAEACACQACACAFAAIAEgBIAEgBIADAKIgHADIgJACQgIgBgGgFgAAiAcgAAiAcgAAVAcIAAgBIAHgDIAGAEg");
	this.shape_280.setTransform(42.5,-98.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_281.setTransform(34.9,-102.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#020303").s().p("AgXAwIAAhdIAQAAIABANQAFgHAEgEQAGgFAIABIAEAAIADABIgDAPIgJAAQgGAAgFAEQgEACgCAHIAABCg");
	this.shape_282.setTransform(30.1,-100.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#020303").s().p("AgbAkQgMgNAAgVIAAgDQAAgUAMgOQANgNAPAAQATgBAKAMQAKAMAAATIAAAKIg9AAIAAABQAAANAHAJQAHAIALAAQAIAAAHgBQAGgDAGgFIAGALQgFAFgIAEQgJAEgLAAQgTAAgMgOgAgNgbQgGAHgBALIAAAAIArAAIAAgCQgBgKgFgHQgGgGgKgBQgIAAgGAIg");
	this.shape_283.setTransform(21.9,-100.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#020303").s().p("AAVAwIAAg6QAAgMgEgGQgFgFgKgBQgHAAgGAFQgGADgDAGIAABEIgSAAIAAhdIAQAAIABANQAFgHAHgEQAIgFAHABQAQAAAIAJQAJAIAAAUIAAA6g");
	this.shape_284.setTransform(11.9,-100.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAIQgHAGAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAEg");
	this.shape_285.setTransform(1.8,-100.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#020303").s().p("AgsBAIAAh/IAqAAQATAAALAJQAMAIAAARQAAAJgGAHQgFAHgJADQALACAHAIQAHAJAAAMQAAASgMAJQgLAJgUAAgAgbAyIAdAAQAMAAAHgFQAGgGAAgLQAAgLgFgGQgGgHgLAAIggAAgAgbgIIAbAAQAKAAAGgGQAGgFAAgKQAAgKgGgFQgHgFgLgBIgZAAg");
	this.shape_286.setTransform(-8.5,-102.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_287.setTransform(-22.1,-102.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#020303").s().p("AgbAoQgKgJAAgNIABAAIAQAAQAAAJAHAFQAGADAIAAQAJAAAFgDQAGgEAAgGQAAgFgFgEQgEgEgMgCQgRgFgIgFQgJgHAAgKQAAgMAKgIQAKgJAOABQARgBAKAJQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgGgJAAQgIAAgEAFQgFAEAAAFQAAAGAEADQAEADALACQASAFAJAFQAJAHAAALQAAAMgKAJQgLAHgQABQgRAAgLgKg");
	this.shape_288.setTransform(90.8,-122.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAIQgHAGAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAEg");
	this.shape_289.setTransform(81.1,-122.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#020303").s().p("AAVAwIAAg6QAAgMgEgGQgGgFgKgBQgGAAgGAFQgGADgDAGIAABEIgRAAIAAhdIAPAAIACANQAEgHAHgEQAIgFAIABQAPAAAIAJQAJAIgBAUIAAA6g");
	this.shape_290.setTransform(71.1,-122.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_291.setTransform(63.7,-124.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#020303").s().p("AgfAqQgIgIAAgNQAAgOALgHQALgHASAAIATAAIAAgKQAAgIgFgFQgFgEgKgBQgHAAgFAFQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAPAAQAQgBAKAJQAKAIAAAPIAAAtIABAKIACAJIgSAAIgCgHIAAgGQgFAGgIAFQgHAFgJAAQgOAAgIgIgAgPAIQgHAGAAAHQAAAGAEAEQAEAEAIAAQAIAAAIgFQAIgFACgGIAAgQIgUAAQgJABgGAEg");
	this.shape_292.setTransform(56.4,-122.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#020303").s().p("AglAvIAAgMIAyhEIgxAAIAAgNIBHAAIAAALIgzBFIA2AAIAAANg");
	this.shape_293.setTransform(47.1,-122.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#020303").s().p("AgIBEIAAhdIARAAIAABdgAgIgyIAAgSIARAAIAAASg");
	this.shape_294.setTransform(40.2,-124.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#020303").s().p("AgdA5QgKgNAAgVIAAgCQAAgVAKgPQAJgNASAAQAHAAAHADQAGADAFAGIAAg1IARAAIAACIIgOAAIgCgLQgFAGgGAEQgHAEgIAAQgRAAgKgNgAgQgEQgGAKAAAPIAAACQAAAPAGAIQAGAKALgBQAIAAAFgDQAGgEADgGIAAgrQgDgHgGgDQgFgDgHgBQgMAAgGALg");
	this.shape_295.setTransform(32.6,-124.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#020303").s().p("AgsBAIAAh/IAqAAQATAAALAJQAMAIAAARQAAAJgGAHQgFAHgJADQALACAHAIQAHAJAAAMQAAASgMAJQgLAJgUAAgAgbAyIAdAAQAMAAAHgFQAGgGAAgLQAAgLgFgGQgGgHgLAAIggAAgAgbgIIAbAAQAKAAAGgGQAGgFAAgKQAAgKgGgFQgHgFgLgBIgZAAg");
	this.shape_296.setTransform(17.9,-124);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#020303").s().p("AgpBAIAAh/IBTAAIAAANIhCAAIAAAqIA6AAIAAAMIg6AAIAAAuIBCAAIAAAOg");
	this.shape_297.setTransform(7.1,-124);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#020303").s().p("AAcBAIgZhYIgCgLIgBAAIgBALIgaBYIgPAAIgfh/IARAAIAUBTIACAQIABAAIADgQIAYhTIAOAAIAXBTIAEAQIABAAIACgQIAThTIARAAIgeB/g");
	this.shape_298.setTransform(-6.7,-124);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#020303").s().p("AgMAPQgFgEAAgIIAAgEQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAAEQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_299.setTransform(-22.1,-124.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Aprasymai, new cjs.Rectangle(-809.7,-284.5,1021.7,527.6), null);


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
(lib.menunohexcanvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.backgroundColor="rgba(0,0,0,0)";
		
		document.body.style.backgroundColor = "rgba(0,0,0,0)";
		
		
		
		
		this.I.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			 window.location.href = "/#/svetainiu-kurimas";
			 window.parent.document.querySelector('.menu-long').style.display = "block";
		}
		
		
		
		this.M.addEventListener("click", fl2_ClickToGoToWebPage);
		
		function fl2_ClickToGoToWebPage() {
			 window.location.href = "/#/marketingas";
			 window.parent.document.querySelector('.menu-long').style.display = "block";
		}
		
		
		
		this.D.addEventListener("click", fl3_ClickToGoToWebPage);
		
		function fl3_ClickToGoToWebPage() {
			 window.location.href = "/#/dizaino-darbai";
			 window.parent.document.querySelector('.menu-long').style.display = "block";
		}
		
		
		
		this.K.addEventListener("click", fl4_ClickToGoToWebPage);
		
		function fl4_ClickToGoToWebPage() {
			 window.location.href = "/#/kitos-paslaugos";
			 window.parent.document.querySelector('.menu-long').style.display = "block";
		}
		
	}
	this.frame_44 = function() {
		this.stop();
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// Tekstas H
	this.instance = new lib.Headers();
	this.instance.parent = this;
	this.instance.setTransform(595.6,253.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},24).wait(21));

	// Aprasymai
	this.instance_1 = new lib.Aprasymai();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1046.8,342.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({alpha:1},22).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AggAiQgOgOAAgUQAAgTAOgNQANgOATAAQATAAAOAOQAOANAAATQAAAUgOAOQgOANgTAAQgTAAgNgNg");
	this.shape.setTransform(1029.9,390.4,1.209,1.209);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0282D").s().p("Ag1A2QgWgWAAggQAAgfAWgWQAWgWAfAAQAgAAAWAWQAWAWAAAfQAAAggWAWQgWAWggAAQgfAAgWgWg");
	this.shape_1.setTransform(1029.9,390.4,1.209,1.209);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AggAiQgOgOAAgUQAAgSAOgOQAOgOASAAQAUAAAOAOQANAOAAASQAAAUgNAOQgOANgUAAQgSAAgOgNg");
	this.shape_2.setTransform(790.9,323.5,1.209,1.209);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CC541").s().p("Ag1A2QgWgWAAggQAAgeAWgXQAWgWAfgBQAgABAWAWQAWAXAAAeQAAAggWAWQgWAWggAAQgfAAgWgWg");
	this.shape_3.setTransform(790.9,323.5,1.209,1.209);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AggAiQgOgOAAgUQAAgSAOgOQANgOATAAQAUAAAOAOQANAOAAASQAAAUgNAOQgOANgUAAQgTAAgNgNg");
	this.shape_4.setTransform(489.5,287.6,1.209,1.209);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAAF3C").s().p("Ag1A2QgWgWAAggQAAgeAWgXQAWgWAfgBQAgABAWAWQAWAXAAAeQAAAggWAWQgWAWggAAQgfAAgWgWg");
	this.shape_5.setTransform(489.5,287.6,1.209,1.209);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AggAhQgOgOAAgTQAAgTAOgNQANgOATAAQATAAAPAOQANANAAATQAAATgNAOQgPAOgTAAQgTAAgNgOg");
	this.shape_6.setTransform(188.6,114,1.209,1.209);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAAF3C").s().p("Ag1A2QgWgXAAgfQAAgfAWgWQAWgXAfABQAfgBAXAXQAWAWABAfQgBAfgWAXQgXAWgfABQgfgBgWgWg");
	this.shape_7.setTransform(188.6,114,1.209,1.209);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C0282D").ss(3).p("Aj8moIHyEzIAAIr");
	this.shape_8.setTransform(1000.2,337.7,1.209,1.209);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FAAF3C").ss(3).p("AjwqJIgGRlIC4A8QDMBDBqAg");
	this.shape_9.setTransform(158.6,37.2,1.209,1.209);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FAAF3C").ss(3).p("ArvmgIHzEeIHxkeIHzEeIAAI0");
	this.shape_10.setTransform(399.6,233.8,1.209,1.209);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#8CC541").ss(3).p("AvokeIHykfIHzEfIAAI/IHyEeIHykeIAAo/");
	this.shape_11.setTransform(670.8,355.7,1.209,1.209);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#2CA9E1").ss(3).p("Aj8sNIHxEaIAAUO");
	this.shape_12.setTransform(1241.7,587.9,1.209,1.209);

	this.K = new lib.P();
	this.K.parent = this;
	this.K.setTransform(1151,456.8);
	new cjs.ButtonHelper(this.K, 0, 1, 2, false, new lib.P(), 3);

	this.D = new lib.D();
	this.D.parent = this;
	this.D.setTransform(908.4,254.2);
	new cjs.ButtonHelper(this.D, 0, 1, 2, false, new lib.D(), 3);

	this.M = new lib.M();
	this.M.parent = this;
	this.M.setTransform(490.5,351.4);
	new cjs.ButtonHelper(this.M, 0, 1, 2, false, new lib.M(), 3);

	this.I = new lib.Svetaines();
	this.I.parent = this;
	this.I.setTransform(247.6,148.5,1.209,1.209);
	new cjs.ButtonHelper(this.I, 0, 1, 2, false, new lib.Svetaines(), 3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FAAF3C").ss(5).p("AnykfIHykgIHzEgIAAI/InzEgInykgg");
	this.shape_13.setTransform(248.4,148.7,1.209,1.209);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FAAF3C").s().p("AnvEtIgGiQIgIksIAMgGIB8hKIGBjdIEACdIB6BNIB4BQIhAggImyjmIncETIgOGiIgICQg");
	this.shape_14.setTransform(307.3,233.8,1.209,1.209);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FAAF3C").s().p("AjKGGIA8gpIA8gnIA9gnIDpiNIABiCIAEiPIAIiQIAFhIIAHhIIAHBIIAJCQIADBIQADAwACBfIABCeIgNAIIh9BGQhJApg1AcIhAAhIjDBeIA7gqg");
	this.shape_15.setTransform(159.5,166.1,1.209,1.209);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FAAF3C").s().p("AAAG2Ih9hGImAjgIAFjkIANkgIAFhIIAWIyIFsDQIBwBDIDxiDIDBhjIBAggInyE6g");
	this.shape_16.setTransform(307.3,63.5,1.209,1.209);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#8CC541").ss(5).p("ApalbIJblcIJaFcIAAK3IpaFcIpblcg");
	this.shape_17.setTransform(489.5,357.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8CC541").s().p("ADFIgInHjzIAAgNIgDiQIADm8IEHiQIB/hDICBhAInaEsIAAImIFiDdIB4BQIhAggg");
	this.shape_18.setTransform(578.4,355.9,1.209,1.209);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8CC541").s().p("AHiF1IgRnqIlsjQQg1gfg7gkIjxCDIiABDIiBBAIB4hQQBJgvAxgeIEAidIALAHQBDAlA6AhIGBDgIgWJMIgGhIg");
	this.shape_19.setTransform(430.6,441,1.209,1.209);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8CC541").s().p("AkCACIg9glIg8goIg8gpQgbgSgggYIDDBfIBAAgQAjATBcAxIBwBAIBxhAIB/hEIA/ggIBBghIBBgfIBCgfIg7AqIh4BRIg9AlIkDCdg");
	this.shape_20.setTransform(429.2,306.8,1.209,1.209);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C0282D").s().p("ADvAfQgqgWhUgtIhxhAIhwBAIh/BDIkCB/QAfgXAbgTIC1h2QA0ghBHgqIB8hJIALgHIAMAHIB8BJQBHAqA0AhIDvCgg");
	this.shape_21.setTransform(969.7,303,1.209,1.209);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C0282D").s().p("AjIIXIA8gnQAwgfBJguIDqiQIgCmiIACiDIjqiQIh5hNIh5hQIBBAgIBAAhQArAVBWAtIEGCQIAAANIACCQIgCG8IoIETg");
	this.shape_22.setTransform(820.4,253.9,1.209,1.209);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C0282D").s().p("An9CQIAIksIAGiQIAJiQIAJCQIAGCQIAHESIFsDQIBwBDIDxiDICAhDICBhAIh4BPIh6BOIkACdg");
	this.shape_23.setTransform(968.3,168.7,1.209,1.209);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#C0282D").ss(5).p("AnykfIHykgIHyEgIAAI/InyEgInykgg");
	this.shape_24.setTransform(909.4,253.9,1.209,1.209);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2CA9E1").s().p("AgLCXIh9hJIh6hMIg9gmIg8gnIg8gpQgbgSgggYQAcAMAmATICCBAIA/AhQA2AbBJAoIBwBAIBxhAIB/hDIBAghIDDhfIg7AqIg8ApIg8AnIg9AmQgzAhhIArIiIBRg");
	this.shape_25.setTransform(1211.1,408.6,1.209,1.209);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2CA9E1").s().p("An9iPIALgHIB8hJIGCjdIEACdQA1AgBFAuIB4BPIhBgfIhAgiQgrgVhVgtIjxiDIlpDTIhzBBIgIERQgBBIgFBIIgJCQg");
	this.shape_26.setTransform(1209.7,544,1.209,1.209);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2CA9E1").s().p("AiMHwIB6hNIDpiQIAAomIjpiPIh6hNIg8goIg7goICABAQBeAxAiASIEHCQIABJZIkICQIiABCIiABBg");
	this.shape_27.setTransform(1061.8,458.8,1.209,1.209);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#2CA9E1").ss(5).p("AHzkfIAAI/InzEgInykgIAAo/IHykgg");
	this.shape_28.setTransform(1150.8,458.8,1.209,1.209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.I},{t:this.M},{t:this.D},{t:this.K},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(45));

	// Fonas
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("EAlJAqwI4sgfMgh7gMeMg5LAAAIre81MgF4g8jMBEZALuMAhjAHCICmMBIVAkIMAxmAEYIO6Y6MAB9A/Qg");
	this.shape_29.setTransform(709.8,319);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(778.4,237.5,1228.8,762.9);
// library properties:
lib.properties = {
	width: 1366,
	height: 600,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;