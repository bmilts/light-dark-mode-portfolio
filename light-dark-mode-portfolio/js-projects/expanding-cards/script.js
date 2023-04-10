// Create node list full of queried class=.panels.
const panels = document.querySelectorAll('.panel');

// Iterate through all panels.
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Remove all active classes.
        removeAllActiveClasses();
        // Add the class active to the panel clicked. 
        panel.classList.add('active');
    })
})

// Remove all active classes.
function removeAllActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}