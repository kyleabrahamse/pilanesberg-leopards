import "./gallery.scss"

function Gallery() {
    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="img-container">
                <img className="img-1" src="images/tree.jpg" alt="" />
                <img className="img-2" src="https://scontent.flba3-1.fna.fbcdn.net/v/t39.30808-6/362292092_10219439530378402_3684268133705059333_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=c42490&_nc_ohc=J0MfRcgu0xQAX_u6XBg&_nc_ht=scontent.flba3-1.fna&oh=00_AfBf5TWjy2p3iqaE2ggT8xK_sDHXs2Pj1cxB66zNsfzXWw&oe=656F93CA" alt="" />
                <img className="img-3" src="images/baby-leopard.jpg" alt="baby leopard" />
                <img className="img-4" src="https://scontent.flba3-2.fna.fbcdn.net/v/t39.30808-6/402319966_10219888776769281_7375356042403682196_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=c42490&_nc_ohc=9YB2X_wuzNsAX_ZFkj3&_nc_ht=scontent.flba3-2.fna&oh=00_AfAbDRihT6ZnBS4X79mdWqMtkOXQGSnnyxCOusmR4kHn1g&oe=65704910" alt="" />
            </div>
            <h2>View more</h2>
        </div>
    )
}

export default Gallery