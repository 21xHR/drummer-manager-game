document.addEventListener('DOMContentLoaded', () => {
    // Select all tab buttons and content sections
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    // Add a click event listener to each tab button
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // First, deactivate all tabs and hide all content sections
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.add('hidden'));

            // Then, activate the clicked tab
            tab.classList.add('active');
            
            // Get the ID of the target content from the data-tab attribute
            const targetId = tab.getAttribute('data-tab');
            
            // Show the corresponding content section
            document.getElementById(targetId).classList.remove('hidden');
        });
    });
});
