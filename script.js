document.getElementById('videoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const videoUrl = document.getElementById('videoUrl').value;
    embedVideo(videoUrl);
});

function embedVideo(url) {
    const videoId = getYouTubeVideoId(url);
    if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        const iframe = `<iframe src="${embedUrl}" allowfullscreen></iframe>`;
        document.getElementById('videoContainer').innerHTML = iframe;
    } else {
        alert('Please enter a valid YouTube URL.');
    }
}

function getYouTubeVideoId(url) {
    const urlPattern = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(urlPattern);
    return (match && match[2].length === 11) ? match[2] : null;
}