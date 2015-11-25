var loadImageFile = (function () { 
	if (window.FileReader) { 
		var oPreviewImg = null, oFReader = new window.FileReader(), 
		rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i; 


		oFReader.onload = function (oFREvent) { 
			if (!oPreviewImg) { 
				var newPreview = document.getElementById("imagePreview"); 
				oPreviewImg = new Image(); 
				oPreviewImg.style.width = (newPreview.offsetWidth).toString() + "px"; 
				oPreviewImg.style.height = (newPreview.offsetHeight).toString() + "px"; 
				newPreview.appendChild(oPreviewImg); 
			} 
			oPreviewImg.src = oFREvent.target.result;
			oPreviewImg.id="head"; 
			
			oPreviewImg.onload=function(){
				// Get the image
				var sampleImage = document.getElementById("head"),
					canvas = convertImageToCanvas(sampleImage);
				
				// Actions
				document.getElementById("canvasHolder").appendChild(canvas);
				document.getElementById("pngHolder").appendChild(convertCanvasToImage(canvas));
				
				// Converts image to canvas; returns new canvas element
				function convertImageToCanvas(image) {
					var canvas = document.createElement("canvas");
					canvas.width = image.width;
					canvas.height = image.height;
					canvas.getContext("2d").drawImage(image, 0, 0);

					return canvas;
				}

				// Converts canvas to an image
				function convertCanvasToImage(canvas) {
					var image = new Image();
					image.src = canvas.toDataURL("png");
					return image;
				}
				
			}
		}; 



		return function () { 
			var aFiles = document.getElementById("imageInput").files; 
			if (aFiles.length === 0) { return; } 
			if (!rFilter.test(aFiles[0].type)) { alert("You must select a valid image file!"); return; } 
			oFReader.readAsDataURL(aFiles[0]); 
		} 
	} 




})(); 






var canvas=document.getElementById("pic");
var context=canvas.getContext("2d");


