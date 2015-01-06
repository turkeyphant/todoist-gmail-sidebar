todoist-gmail-sidebar
=====================

Fed up with the lack of a Google gadget, I ignored my utter ineptitude and hacked together some other people's work to create a Chrome extension that creates an iframe sidebar that can load Todoist even in CSP-protected and HTTPS tabs such as Gmail. It's current set to only activate on domains matching "mail.google.com" and https://todoist.com/ is hard-coded into the iframe src. Obviously, it's trivial to alter either of these.

To do
=====

* Make the icon change on a per-tab basis to show whether the sidebar is active or not
* Throw a popup when the button is clicked on non-active URLs
