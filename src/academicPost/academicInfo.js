// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import "../academicPost/academic.css";

const data = [
  {
    img: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/352220505_806378240852484_7775474463214375461_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=__R64j-aCnAAX_vdLZ8&_nc_ht=scontent.fktm17-1.fna&oh=00_AfA3Vc3QVxH3M6CKi9E60DPqXKac_HQfLdJiw8mG_t56eA&oe=64867C42",
    title: "Management",
    disc: "Defination of Management  ",
    link: "https://www.facebook.com",
  },
  {
    img: "https://th.bing.com/th/id/R.97e47115ca783921456d7b495489fae9?rik=Znups27chepz%2fA&pid=ImgRaw&r=0",
    title: "ISC AG",
    disc: "Defination of ISC AG",
    link: "https://www.facebook.com",
  },
  {
    img: "https://th.bing.com/th/id/R.97e47115ca783921456d7b495489fae9?rik=Znups27chepz%2fA&pid=ImgRaw&r=0",
    title: "ISC AG",
    disc: "Defination of ISC AG",
    link: "https://www.facebook.com",
  },
  {
    img: "https://th.bing.com/th/id/R.97e47115ca783921456d7b495489fae9?rik=Znups27chepz%2fA&pid=ImgRaw&r=0",
    title: "ISC AG",
    disc: "Defination of ISC AG",
    link: "https://www.facebook.com",
  },
];

function AcademicInfo() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 20000,
  //   cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1, // Show 1 slide on mobile screens
  //       },
  //     },
  //   ],
  // };

  return (
    <section>
      <h1 className="heading_academic">Our Academic Programs</h1>
      {/* <Slider {...settings}> */}
      <div className="academic_field">
        {data.map((academic, index) => (
          <div className="academica" key={index}>
            <a href={`${academic.link}`}>
              <img src={academic.img} alt="img" width={300} height={300} />
              <hr />
              <hr />
              <h1>{academic.title}</h1>
              {/* class banaune ani gap -ve gane */}
              <p>{academic.disc}</p>
            </a>
          </div>
        ))}
      </div>
      {/* </Slider> */}
    </section>
  );
}

export default AcademicInfo;
