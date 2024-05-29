import React from 'react';
import img1 from './img1.jpg';

const Blog = () => {
  const articles = [
    {
      title: "How To Start Using Banko For Your Startup",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
      imageUrl: img1, // Corrected this line
      categories: ["Product", "Technology"]
    },
    {
      title: "10 Things Nobody Told You About Banko",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
      imageUrl: "https://media.istockphoto.com/id/1494296241/photo/young-smiling-woman-using-mobile-phone-while-working-on-a-laptop-at-a-cafe.jpg?s=1024x1024&w=is&k=20&c=4lS0f10IkH9dqeI6qFsKBMJQ1bpjo6CWlLdp-58ajns=",
      categories: ["Product", "Technology"]
    },
    {
      title: "7 Ways To Improve You Saving Habits",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
      imageUrl: "https://media.istockphoto.com/id/1171982977/photo/man-counting-indian-500-rupee-notes.jpg?s=1024x1024&w=is&k=20&c=l6siCoj8TvoBidg7a6rgwOEjwn_C54sOoM7GCFoZ3D0=",
      categories: ["Product", "Technology"]
    }
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Blog</h1>
          <a href="#" className="text-teal-500 hover:text-teal-700">All Articles</a>
        </div>
        <div className="flex flex-wrap -mx-4">
          {articles.map((article, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="flex flex-wrap">
                    {article.categories.map((category, idx) => (
                      <span key={idx} className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">{category}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
