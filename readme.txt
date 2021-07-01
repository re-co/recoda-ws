=== Recoda Workspace for Oxygen ===
Contributors: Renato Corluka
Donate link: https://paypal.me/__insert_some_pp_me
Tags: oxygen, oxygen builder, utility, editor, ux, workflow
Requires at least: 5.2.4
Tested up to: 5.3
Requires PHP: 5.6
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Recoda Workspace hacks UI/UX of the Oxygen Builder editor to make you more productive!

== Description ==
Recoda Workspace for Oxygen uses CSS and JavaScript to make improvements to the standard editor of [Oxygen Builder](https://oxygenbuilder.com).

= Features =

[1] Workflow 2X
These included extensions provide functionality that does not exist in Oxygen to improve your workflow. Desired workflow: Two hand, more options on click, more options on keyboard to reduce mouse to keyboard movement which is annoying.
	•[1-1] Class picker: Change class with one click 
	•[1-2] Shortcutter: 40 keyboard shortcuts 
	•[1-3] Arrow DOM shortcutter: Navigate through DOM using arrow keys (sibling, parent, children logic), ctrl +up/down to collapse/expand all nodes ctrl + right to expand/collapse single node 
	•[1-4] Adjustable Left and Righ Panel: Hover on edge and drag to desired position. Smart beheviour : double click to show/hide, if it is larger of 500px double click will first reset it to default size
Magnetic beheviour: to pervent undesired beheviour that panel can be 100px wide and unusable, if you drag to point where panel is smaller than 250px it will close panel automaticlly which in terms of UX represenet magnetic beheviour
	•[1-5] Quick Topbar Breakpoint Selector 
	•[1-6] Panelator – one click to change between Structure, Selector, Stylesheet and Settings
	•[1-7] Advantor Panel – one click advanced options, one click add+ options  
	•[1-8] Double click on component name in Left Panel to rename it 
[2] Devflow 
Settings to improve fronted development and design debug
	•[2-1] X-ray mode – inspired by Webflow, canvas will be greyscale and elements will be outlined
	•[2-2] Live Server – neat feature inspired by VSCode extension, you launch LS instance in new window and when you save it will reload LS instance
	•[2-3[ Grid Guide System – inspired by Webflow filled guide, but implementation is far mor flexible you can define your breakpoints, gutters, gap, width and number of columns for each breakpoint (so flexibility is at level 100)
	•[2-4] Style inspector - activate it, it will be under structure panel with single key shortcut you can see applied CSS for ID or Class
	•[2-5] Viewport handles: Inspired by aformal issue (#611) on github: “A label that show the current device width / window width of the Oxygen builder window.You could make this even more useful, if the handle snaps to certain breakpoints or device widths. What are the use cases for this feature? Judge a design choice directly in Oxygen. Less double checking between Oxygen and the browser -> enhanced usability, saving time.”

[2] Command line 
Inspired by emmet, done in oxygen way so it parse command and executes oxygen native functions to get some kind of emmet for generating quick oxygen elements
	•[2-1] Add multiple classes :: syntax:: .class1.class2.class3
	•[2-2] Add multiple elements with custom tags :: syntax:: >ul>li+li+a
	•[2-3] Add multiple elements with custom tags  + grouping one level:: syntax:: >ul>(li+li>a)*5+p
	•[2-4] Add multiple elements with custom tags  + grouping one level + multiple classes:: syntax:: >ul.myclass.class1>(li.class2+li.myclass>a.other-class)*5+p.class1


= Troubleshooting =

Clear browser cache, check if other 3rd party UI plugin has activated same features.

= More Information =

* [Visit the Recoda Workspace](https://recoda.me/).
* Love this plugin? Give it a review!
* Feeling generous? [Buy me a cup of coffee!](https://paypal.me/__insert_some_donate)

== Installation ==

Installation is simple! Just follow these steps:
1. Log into your website (for example, https://myawsomewebsite.com/wp-admin)
2. In the left-side menu, hover over "Plugins" and select "Add New".
3. Upload ZIP file.
4. Click to install, and then activate.
5. Start Hacking!

Need some more information about installation? Please read [the official WordPress documentation about managing plugins](https://wordpress.org/support/article/managing-plugins/).

== Changelog ==

= 1.0.0 =
* Will be first public release
