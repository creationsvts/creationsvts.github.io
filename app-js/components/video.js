const Video = ()=> {

    const $Fragment = document.createDocumentFragment()
    const $VideoBox = document.createElement('section')
    const $video = document.createElement('video')
    const $iconVideoClose = document.createElement('i')
    $iconVideoClose.classList.add('fas','fa-times','close-video')
    $video.src = 'resources/eco-bottle-video.mp4'
    $video.setAttribute('controls','')
    $VideoBox.classList.add('video__box')
    $video.classList.add('video')
    $VideoBox.style.display = 'none'
    $VideoBox.appendChild($iconVideoClose)
    $VideoBox.appendChild($video)
    $Fragment.appendChild($VideoBox)
    return $Fragment 
}
export default Video