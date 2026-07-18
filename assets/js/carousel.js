function DsCarousel(el) {
	console.log(el);
	this.el = el;
	this.items = [];
	this.item_width;
	this.gap = 3;
	this.init();
}

DsCarousel.prototype.init = async function init() {
	await this.buildDom();

	this.itemWidth = this.getItemWidth();
	this.itemHeight = this.getItemHeight();
	this.build();
}

DsCarousel.prototype.clone = async function clone(dir) {
	let clone;
	if (dir === 'next') {
		clone = this.el.firstChild.cloneNode(true);
		this.el.append(clone);
		this.el.firstChild.remove();
	}
	else {
		dir
	}

}
DsCarousel.prototype.getItemWidth = function getItemWidth() {
	const w = this.el.clientWidth;
	return (w / this.size);
}

DsCarousel.prototype.build = async function build() {
	let pos = -1;
	for (let i = 0; i < this.items.length ; i++)
	{
		this.items[i].style.width = this.itemWidth + 'px';
		this.items[i].style.left = this.itemWidth * pos + 'px';
		pos++;
		console.log(this.items[i]);
	}
}

DsCarousel.prototype.buildDom = async function buildDom() {
		const nav = `<div class="ds-carousel_nav">
		<div class="d-flex-default">
		<button class="ds-carousel-nav-btn" aria-role="button" data-dir="prev">&#xab;</button>
		<button class="ds-carousel-nav-btn" aria-role="button" data-dir="next">&#xbb;</button>
		</div>
		</div>`;

		// create new element
		let wrapper = document.createElement("div");
		wrapper.classList.add("ds-carousel-wrap");

		// clone carousel and insert into the wrapper
		let carousel = this.el.cloneNode(true);
		wrapper.insertAdjacentElement("afterbegin", carousel);
		wrapper.insertAdjacentHTML("beforeend", nav);

		// add the new wrapper before the old carousel
		this.el.insertAdjacentElement("beforebegin", wrapper);

		// remove the old carousel and reset the variables
		this.el.remove();
		this.el = wrapper.firstChild;
		this.el.classList.add("ds-carousel");
		this.items = wrapper.querySelectorAll('.ds-carousel-item');

}

const carousels = document.querySelectorAll('.ds-carousel');
carousels.forEach((c) => {
	new DsCarousel(c);
});

// const nav = `<div class="ds-carousel_nav"><div class="ds-carousel_nav_item" aria-role="button" data-dir="prev">&#xab;</div><div class="ds-carousel_nav_item" aria-role="button" data-dir="next">&#xbb;</div></div>`;

// 		// create new element
// 		let wrapper = document.createElement("div");
// 		wrapper.classList.add("ds-carousel_wrapper");

// 		// clone carousel and insert into the wrapper
// 		let carousel = this.el.cloneNode(true);
// 		wrapper.insertAdjacentElement("afterbegin", carousel);
// 		wrapper.insertAdjacentHTML("beforeend", nav);

// 		// add the new wrapper before the old carousel
// 		this.el.insertAdjacentElement("beforebegin", wrapper);

// 		// remove the old carousel and reset the variables
// 		this.el.remove();
// 		this.el = wrapper.firstChild;
// 		this.el.classList.add("ds-carousel");
// 		console.log(this.el);
