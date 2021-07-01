jQuery(document).ready(function () {
	let select_theme =
		'<select name="theme-select" id="theme-select"><option value="default">Default</option><option value="one-dark-3w">One Dark 3W</option><option value="one-dark-2w">One Dark 2W</option><option value="dracula-3wb">Dracula 3W</option><option value="dracula-2wb">Dracula 2W</option><option value="classic-lighter">Classic Light</option><option value="classic-darker">Classic Darker</option><option value="moon-light">Moon Light</option><option value="sd-vodka">Vodka</option> </select>';
	jQuery(select_theme).prependTo("#ct-controller-ui");

	const setTheme = theme => (document.documentElement.className = theme);

	document.getElementById("theme-select").addEventListener("change", function () {
		setTheme(this.value);
		localStorage.setItem("theme", this.value);
	});

	const getTheme = () => {
		const theme = localStorage.getItem("theme");
		theme && setTheme(theme);
	};

	getTheme();
});
