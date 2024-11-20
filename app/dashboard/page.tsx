"use client";
import { Layout, Button, Typography, Card } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MarkdownEditor from "@/app/dashboard/introducation/markdownEdit"
import { FaFacebook, FaShoppingCart, FaChartBar } from 'react-icons/fa';  // Example icons from react-icons
const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;


interface Feature {
  title: string;
  description: string;
  icon: string;
  link: string
}

const features: Feature[] = [
  {
    title: "Socail Media",
    description: "A dynamic platform for sharing stories, rating content, and connecting with others in a Facebook-like social media environment.",
    icon: "facebook",
    link:"/dashboard/media"
  },
  {
    title: "Online Shopping",
    description: "A secure and transparent online shopping platform powered by blockchain, enabling seamless transactions and traceable processes.",
    icon: "shopping",
    link:"/dashboard/shopping"
  },
  {
    title: "Customize Dashboard",
    description: "A no-code solution for building customized dashboards, allowing users to drag and drop graphs, customize data APIs, upload Excel files, and personalize styles to create their own graphs with ease.",
    icon: "dashboard",
    link:"/dashboard/dashboard"
  }
];

const HomePage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "facebook":
        return <FaFacebook className="text-4xl mb-4 text-blue-500" />;
      case "shopping":
        return <FaShoppingCart className="text-4xl mb-4 text-blue-500" />;
      case "dashboard":
        return <FaChartBar className="text-4xl mb-4 text-blue-500" />;
      default:
        return <div className="text-4xl mb-4 text-gray-500">❓</div>;
    }
  };

  const handleClick = (link: string) => {
    router.push(link);
  }
  
  // Flip effect handler
  
  const rotateCard = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    // Add or remove the rotation class when mouse enters or leaves
    if (event.type === "mouseleave") {
      card.style.transform = "rotateY(180deg)";

    } else if (event.type === "mouseenter") {
      card.style.transform = "rotateY(0deg)";

    }
  };
  const number = 1;
  return (
    <Layout className="min-h-screen">
      {/* Hero Section */}
      <Content className="bg-blue-100 text-center py-4">
        <div className="max-w-5xl mx-auto px-6">
          <Title level={1} className="text-4xl font-extrabold text-gray-900">
            Welcome to My Website
          </Title>
          <div>Historical Views: <span>{number.toString().padStart(5, '0')}</span></div>
        </div>
      </Content>

      {/* Profile Section */}
      <Content className="bg-yellow-100 text-left py-8">
        <div className="max-w-6xl mx-auto">
          <Title level={1} className="text-4xl font-extrabold text-gray-900">
            My Profile
          </Title>
          <Paragraph className="text-lg text-gray-700 mb-6">
            <MarkdownEditor/>
          </Paragraph>
        </div>
      </Content>

      {/* Key Features Section */}
      <Content className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Title level={2} className="text-3xl text-center text-gray-800 mb-12">
            Main Functions
          </Title>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative perspective-1000 transition-all transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Card
                  hoverable
                  className="relative w-80 h-40 bg-blue-300 cursor-pointer"
                  // onMouseEnter={rotateCard}
                  // onMouseLeave={rotateCard}
                  onMouseDown={() => handleClick(feature.link)} // Add onMouseDown event
                >
                  {/* Icon and Title - Show when mouse leaves */}
                  {hoveredIndex !== index ? (
                    <div className="p-6">
                      <div className="text-4xl mb-4 text-blue-500">
                        {renderIcon(feature.icon)}
                      </div>
                      <Title level={3} className="text-xl font-semibold text-gray-800">
                        {feature.title}
                      </Title>
                    </div>
                  ) : (                    
                    <div>
                      <Paragraph className="text-gray-600 opacity-100 transition-opacity duration-300 p-2">
                        {feature.description}
                      </Paragraph>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Content>

      {/* Footer */}
      <Footer className="!bg-black text-white py-6" style={{color: "#40a9ff"}}>
        <div className="grid grid-cols-3 gap-4 h-10 p-2 text-center">
          <span><a href="https://github.com/MengSunDom/React-Project" target="_blank" rel="noopener noreferrer" className="cursor-pointer">My Github</a></span>
          <span><a href="https://au.linkedin.com/in/%E8%92%99-%E5%AD%99-542621302/en?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer" className="cursor-pointer">My Linkedin</a></span>
          <span className="cursor-pointer" >Contact me</span>
          {/* <div>
            <span>Mobile:</span>12345678<br></br>
            <span>Email:</span>12345678@example.com
          </div> */}
        </div>
        {/* <div className="max-w-5xl mx-auto text-center">
          <div className="text-sm">© 2024. All rights reserved.</div>
        </div> */}
      </Footer>
    </Layout>
  );
};

export default HomePage;
