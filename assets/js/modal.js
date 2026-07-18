function DsModal(el) {
	this.el = el;
	this.init();
}

DsModal.prototype.init = async function init() {
	const closeBtns = this.el.querySelectorAll('.btn.btn-close');
	console.log('closes', closeBtns);
	closeBtns.forEach((btn) => {
		btn.addEventListener('click', closeModal);
	});
}

function showModal(event) {
	const modal = document.getElementById("modal-app");
	if (!modal.classList.contains('active'))
		modal.classList.add('active');
	console.log('shows');
}

function closeModal(event) {
	let parent = event.currentTarget.parentElement;
	console.log('closes');
	while (!(parent.classList.contains('modal-app')))
		parent = parent.parentElement;
	if (parent.classList.contains('active'))
		parent.classList.remove('active');
	console.log('closes');
}

const modal = document.querySelectorAll('.modal-app');
modal.forEach((c) => {
	new DsModal(c);
});

const showBtns = document.querySelectorAll('.btn-show-modal');
showBtns.forEach((btn) => {
	btn.addEventListener('click', showModal);
})