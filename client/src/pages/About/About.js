import React from "react";
const About = () => {
  return (
    <div className="main" style={{ textAlign: "center" }}>
      <div>
        <img
          src="./images/about_us.jpg"
          style={{ width: "80%", height: "500px" }}
        />
      </div>
      <div className="container my-3 py-3">
        <h1 className="text-center" style={{ color: "blue" }}>
          About Us
        </h1>
        <hr />
        <p className="lead text-center" style={{}}>
         Welcome to RX SHOES- Where Style Meets Comfort! At RX SHOES, 
         we're not just passionate about shoes; we're dedicated to redefining your 
         footwear shopping experience. As shoe enthusiasts ourselves, we understand the 
         importance of finding that perfect pair that seamlessly blends style, comfort, 
         and quality. Our mission is to offer a curated selection of footwear that caters 
         to diverse tastes, occasions, and lifestyles. Our Story: RX SHOES was born out of a 
         shared love for exceptional footwear. Frustrated with the limited choices and 
         compromise between style and comfort, we set out on a mission to create a platform 
         that caters to every shoe lover's needs. What started as a vision has now evolved 
         into a thriving online destination for the latest trends and timeless classics. 
         What Sets Us Apart: Curated Collection: Our team of fashion enthusiasts meticulously 
         curates our collection, ensuring that each pair reflects the latest trends while maintaining a 
         timeless appeal. From casual sneakers to elegant heels, we've got something for every 
         style. Quality Assurance: We believe that great style should never come at the expense 
         of comfort or quality. That's why we collaborate with trusted manufacturers to bring you footwear that not only looks good but also stands the test of time. Customer-Centric Approach: Your satisfaction is our priority. We strive to provide a seamless and enjoyable shopping experience from start to finish. Whether you have questions about sizing, need style advice, or require assistance with an order, our dedicated customer support team is here to help. Inclusivity: Diversity is at the core of our brand. We celebrate individuality and aim to offer a range of sizes, styles, and fits that cater to a diverse customer base. Everyone deserves to step out in confidence and style. Join Our Shoe Community: We invite you to join our growing community of shoe lovers.
          Explore our latest arrivals, take advantage of exclusive promotions, 
          and stay informed about upcoming trends. Follow us on social media, sign 
          up for our newsletter, and be part of the journey as we continue to step 
          into the future of footwear fashion. RX Shoes– where every step is a statement. 
          Step into Style Today!
        </p>

        <h2 className="text-center py-4" style={{ color: "blue" }}>
          Our Categories
        </h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                style={{ height: "150px" }}
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Formal Shoes</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                style={{ height: "150px" }}
                src="https://img.freepik.com/free-photo/high-heels-black-velvet_53876-102771.jpg?w=360&t=st=1706549940~exp=1706550540~hmac=b975c3dc982c47d3fea0211d1c59341208a88eede0136357a71673d0ca5be13c"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Shoes</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                style={{ height: "150px" }}
                src="https://t3.ftcdn.net/jpg/06/33/34/22/240_F_633342295_3jnYzCe15cjVVPfERA9Hii81mpNgIQ0Y.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Sports Shoes</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                style={{ height: "150px" }}
                src="https://t3.ftcdn.net/jpg/07/01/53/04/240_F_701530423_ZnfAoFexIN8e3Yc1zxnkVEV8U2rc0fDp.webp"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Daily use</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
