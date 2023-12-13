import React from 'react'
import { Card } from "antd";
import {
  HomeOutlined,
} from "@ant-design/icons";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div
        className=" flex items-center justify-around mt-0 p-8 font-semibold rounded-lg shadow-2xl"
        style={{
          backgroundColor: "#ffe4b5",
        }}
      >
        <h2 className="text-white ml-8 text-5xl hover:text-yellow-300">
          About Us
        </h2>
        <Link to="/">
          <HomeOutlined
            style={{
              fontSize: "28px",
              outline: "none",
              textDecoration: "none",
              border: "none",
              cursor: "alias",
            }}
          />
        </Link>
      </div>

      <Card className="m-24 text-white shadow-2xl" style={{}}>
        <div
          className="p-10 rounded-2xl"
          style={{
            letterSpacing: "2px",
            backgroundImage:
              "url('https://wallpapercave.com/wp/wp2655394.jpg')",
          }}
        >
          <p>
            Welcome to{" "}
            <strong>
              <em className="text-red-600 text-2xl">My Pet Shop</em>
            </strong>
            , where tails wag and whiskers twitch with joy! We're not just a pet
            shop; we're a haven for furry friends and their devoted humans. Our
            passion for pets is as boundless as the love they bring to our
            lives.
          </p>
          <br></br>

          <p>
            At{" "}
            <strong>
              <em className="text-red-600">My Pet Shop</em>
            </strong>
            , we understand that pets are family, and every family member
            deserves the best. That's why we've curated a collection of
            top-quality pet products, from premium nutrition to cozy beds and
            entertaining toys. Whether you're a proud cat parent, a devoted dog
            lover, or have a small menagerie of feathered and finned friends,
            we've got something special for every pet and every budget.
          </p>
          <br></br>
          <p>
            Our journey began with a simple mission: to enhance the well-being
            of pets and foster the unbreakable bond between animals and their
            human companions. We believe in creating a one-stop destination
            where pet enthusiasts can find everything they need to keep their
            pets happy, healthy, and stylish.
          </p>

          <p>
            What sets us apart is not just our products, but our commitment to
            exceptional service. Our knowledgeable and friendly staff are here
            to assist you, sharing insights and recommendations to ensure you
            make the best choices for your pets. From nutritional advice to
            grooming tips, we're your partners in pet parenthood.
          </p>
          <br></br>
          <p>
            At My Pet Shop , we also take pride in giving back to the community.
            We support local animal shelters and rescue organizations, striving
            to make a positive impact on the lives of pets in need. Every
            purchase you make at our store contributes to this mission, helping
            us create a world where every pet has a loving home.
          </p>

          <p>
            So, whether you're a seasoned pet parent or embarking on the
            exciting journey of bringing a new furry friend into your life,{" "}
            <strong>
              <em>My Pet Shop</em>
            </strong>{" "}
            is here to make it memorable. Join our community of pet lovers, and
            let's celebrate the joy, companionship, and unconditional love that
            pets bring into our lives. Welcome to a world where tails never stop
            wagging, and pets reign supreme!
          </p>
        </div>
      </Card>
    </>
  );
  


    
};

export default About;