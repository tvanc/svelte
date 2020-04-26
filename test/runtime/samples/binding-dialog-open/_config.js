export default {
	html: `<dialog>content</dialog>`,

	async test({ assert, component, target }) {
		const dialog = target.querySelector('dialog');

		dialog.open = true;
		assert.equal(component.open, true);
		assert.htmlEqual(target.innerHTML, `
			<dialog open>content</dialog>
			<p>hello!</p>
		`);

		dialog.open = false;
		assert.equal(component.open, false);
		assert.htmlEqual(target.innerHTML, `
			<dialog>content</dialog>
		`);
	}
};
