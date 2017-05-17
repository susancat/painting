# SKETCHY
Procedural drawing app derived from [Harmony](http://mrdoob.com/projects/harmony/)

## Changes made:
* **Upload image as background**
* * Background image appears in saved image in Chrome
* * Background image saved to localStorage
* **Changed/added keyboard shortcuts**
* * Increase brush size using 'UP' (was l)
* * Reduce brush size using 'DOWN' (was d)
* * Upload background using 'O'
* * Reset brush using 'R'
* * Clear canvas using 'DELETE'
* * Close popup using 'ESC'
* * Save image using 'S'
* * Move menu out of the way using 'TAB'
* **Documentation added**
* * Keyboard shortcuts
* * Preview brush appearance
* **Reset Brush button**
* **Move menu out of the way**
* **Brush size display**
* **Black borders on color pickers**
* **Tooltips on menu items**
* **Lose selector focus after selecting brush (so keyboard shortcuts can be accepted)**
* **About menu shrinks to fit window height**
* **Minor styling changes (black borders, rounded corners, grey buttons)**
* **Compatability in iOS**
* * Fixed double events
* * Different image picker
* * Buttons for brush size
* * Disable Grid brush because it doesn't work
* * Disable Reset button because it doesn't work
* * Prevent scrolling and zooming
* **Fit canvas to window on clear**
* **Disable selecting of menu separators**
* **Two new brushes: Rainbow and Dots**
* **Rounded ```lineCap```s to improve apearance with large brush size**
* **Brush size increases only for the main line for effects brushes (Sketchy, Chrome, etc)**
* **No transparency for Simple brush**
* **Save image on page close**
* **Buttons to change brush size**
* **Check for localStorage capabilities rather than setting based on userAgent**
* **Eraser (finally)**
