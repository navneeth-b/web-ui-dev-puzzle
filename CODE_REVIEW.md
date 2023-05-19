## Code Changes or Enhancements
### Issues identified in the code
- Book list should be loaded using Async pipe instead of Subscribing to the observable.
	- **Reasons:**
		- Using Async Pipe, the code is easy to read and maintain.
		- By Default, Async Pipe handle unsubscribing from the observable when the component is destroyed.
		- Async Pipe is more efficient in terms of change detection.
	- **Status:**
		- Changed code to use Async pipe instead of instead of Subscribing to the observable.
- Book search is performed even for single character, there should a minimum length defined to perform the book search.
	- **Reason:** Searching for book using single character might not give desired results but it will consume an API call.
- It will be good to have tool tip for remove book from reading list button.
	- **Reason:** User will be aware of the purpose of that Icon.


## Accessibility
### Issues Identified in Lighthouse Scan.
- Buttons do not have an accessible name
	- Search button doesn't have a accessible name.
	- **Fix:**  This issue is fixed by add the aria-label attribute.
		- `aria-label="Search Books"`
- Background and foreground colors do not have a sufficient contrast ratio.
	- Empty text before search doesnt have sufficient contrast ratio.
	- **Fix:** This issue is fixed by changing the font color of the text.
		- Changed color from "**#9b9b9b**" to "**#4c4c4c**".
### Issues Identified manually
- Alt text is missing for images on search page and reading list side-nav
	- **Fix:** Added alt text for all images.
	- Added book title as alt text.
- Close Button of reading list side-nav doesn't have accessible name.
	- **Fix:**  This issue is fixed by add the aria-label attribute.
		- `aria-label="close reading list"`
- Header background and font colors do not have a sufficient contrast ratio.
	- **Fix:** This issue is fixed by changing the background color of the header.
		- Changed color from "**#ff4081**" to "**#e22463**".