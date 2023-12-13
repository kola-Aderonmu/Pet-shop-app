import React from "react";
import { Carousel, Col, Divider, Row, Card } from "antd";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { decrement } from "../features/counter/counterSlice";

const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

const contentStyle = {
  height: "300px",
  color: "#000",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  objectFit: "cover",
  border: "3px solid black",
};

const slides = [
  {
    url: "https://img.huffingtonpost.com/asset/580e27b41a000074285bb631.jpeg?ops=scalefit_720_noupscale",
    comment: "A lovely dog enjoying the sunshine.",
  },
  {
    url: "https://th.bing.com/th/id/R.04f6d00d44baeeadcecb0461409726ba?rik=WzNucTMEiBhpxg&pid=ImgRaw&r=0",
    comment: "Adorable cat taking a nap.",
  },
  {
    url: "https://th.bing.com/th/id/R.875c68b6c17984eb536ab323289789dd?rik=gOLqcl1s8%2b85HQ&pid=ImgRaw&r=0",
    comment:
      "Foxtin was so brave to have saved the little adora from drowning.",
  },
  {
    url: "https://th.bing.com/th/id/R.a7f0ef0a34e822de2248de5a858d1c57?rik=6vfe8DUsQu0aLw&riu=http%3a%2f%2fwww.dogslife.com.au%2fwp-content%2fuploads%2f2014%2f11%2fbigstock_Group_Of_Pets_Together_In_Fron_8258876.jpg&ehk=XJX9hGqQX5XYEZiWiqVf4GK%2bVnYHBCxwGOOV2yept3U%3d&risl=1&pid=ImgRaw&r=0",
    comment: "Explicitly amazing dog, I love to have you around .",
  },
  {
    url: "https://images.unsplash.com/photo-1534243510675-3c687393caff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment:
      "It was an awesome time with shirley, she was so adorable and friendly.",
  },
  {
    url: "https://images.unsplash.com/photo-1539981979235-86d7f364f6eb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment:
      "I can't wait to spend more time with Housinton, he was so elegant.",
  },
];

const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="m-4">
        <Marquee>
          {slides.map((slide, index) => (
            <div key={index} className=" font-mono mx-4">
              {slide.comment}
            </div>
          ))}
        </Marquee>
      </div>
      <Carousel autoplay autoplaySpeed={4000} style={{}}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={contentStyle}
            className="border-6 border-black h-[600px]"
          >
            <img
              className="w-full -mt-20"
              src={slide.url}
              alt={`slide-${index}`}
            />
          </div>
        ))}
      </Carousel>

      <Divider orientation="left">Align Bottom</Divider>

      <div className="m-10">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Poppy" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Kitty" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
