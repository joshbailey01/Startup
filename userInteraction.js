function copyLink() {
    // Get the input field
    var linkInput = document.getElementById("linkInput");

    // Select the text in the input field
    linkInput.select();

    // Copy the text to the clipboard
    document.execCommand("copy");

    // You can provide feedback to the user, such as displaying a tooltip or changing the button text
    alert("Link copied to clipboard: " + linkInput.value);
}

function likePost() {
    var button = document.getElementById("like");
    button.style.backgroundColor = 'white';
    sendLike();
}