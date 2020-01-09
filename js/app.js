var images = ["i1.jpg", "i2.jpg", "i3.jpg"]
var current_idx = 0;
var back = document.getElementById("back");
function updateNew(id){
	var elems = document.getElementsByClassName('preview');
	elems[current_idx].classList.remove('selected');
	elems[id].classList.add('selected');
	back.style.background = 'url(img/' + images[id] + ')';
	back.style.backgroundSize = 'cover';
	back.style.backgroundRepeat = 'no-repeat';
	back.style.backgroundPosition = '50% 50%';
	current_idx = id;
}

function createPreviews(){
	for(var i = 0; i < images.length; i++){
		var preview = document.createElement('div');
		preview.classList.add('preview');
		if(i == 0)
			preview.classList.add('selected');
		// Note, that if we generate thumbnails before
		// using there, it'll be much faster.
		preview.style.background = 'url(img/' + images[i] + ')';
		preview.style.backgroundSize = 'cover';
		preview.style.backgroundRepeat = 'no-repeat';
		preview.style.backgroundPosition = '50% 50%';
		preview.setAttribute('onclick', 'updateNew('+i+')');
		document.getElementById('some-amazing-previews').appendChild(preview);
	}
}
createPreviews();
const scrollFooter = () => {
	scroll('footer');
}

function scroll(el_name) {
	console.log(document.getElementById(el_name));
	document.getElementById(el_name).scrollIntoView({block: "center", behavior: "smooth"});
}

