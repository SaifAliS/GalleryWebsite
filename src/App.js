import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <section className="gallery_face">
        <div className="gallery_title">Gallery</div>
        <div className="gallery_quote">
          The nice thing about the gallery is that without having to pay any
          money you can just go and see it.
        </div>
        <div
          className="pic_1"
          style={{
            backgroundImage: `url(${require("./Assets/5.jpg")})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
      </section>
      <section className="gal_1">
        <div className="gallery_text_left">
          We think music in itself is healing. It's an explosive expression of
          humanity. It's something we are all touched by. No matter what culture
          we're from, everyone loves music.
        </div>
        <div
          className="gal_pic_right"
          style={{
            backgroundImage: `url(${require("./Assets/1.jpg")})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
      </section>
      <section className="gal_2">
        <div className="gallery_text_right">
          Everyone in society should be a role model, not only for their own
          self-respect, but for respect from others.
        </div>
        <div
          className="gal_pic_left"
          style={{
            backgroundImage: `url(${require("./Assets/2.jpg")})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
      </section>
      <section className="gal_3">
        <div className="gallery_text_left">
          Music is forever; music should grow and mature with you, following you
          right on up until you die.
        </div>
        <div
          className="gal_pic_right"
          style={{
            backgroundImage: `url(${require("./Assets/3.jpg")})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
      </section>
      <section className="gal_4">
        <div className="gallery_text_right">
          I cannot even imagine where I would be today were it not for that
          handful of friends who have given me a heart full of joy. Let's face
          it, friends make life a lot more fun.
        </div>
        <div
          className="gal_pic_left"
          style={{
            backgroundImage: `url(${require("./Assets/4.jpg")})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
      </section>
      <section className="footer">
        <div className="footer_div1"></div>
        <div className="footer_div2">
          <h1 className="Links">Links</h1>
          <div className="colorline"></div>
          <div className="greyline"></div>
        </div>
        <div className="footer_div3">
          <h1 className="Links">Let's Connect</h1>
          <div className="colorline"></div>
          <div className="greyline"></div>
        </div>
      </section>
    </div>
  );
}
