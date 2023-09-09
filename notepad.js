// Check if there is saved content in localStorage
const savedContent = localStorage.getItem('notepad_content');
if (savedContent) {
    document.getElementById('content').value = savedContent;
}

// Save button click event
document.getElementById('save').addEventListener('click', function () {
    const content = document.getElementById('content').value;
    localStorage.setItem('notepad_content', content);
});

// Delete button click event
document.getElementById('delete').addEventListener('click', function () {
    document.getElementById('content').value = '';
    localStorage.removeItem('notepad_content');
});