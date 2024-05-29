import React from 'react';

const testimonials = [
  {
    title: "Sunt qui esse pariatur duis deserunt mollit",
    content: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
    name: "Cody Fisher",
    role: "Medical Assistant",
    rating: 5
  },
  {
    title: "At lectus urna duis convallis tellus",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    name: "Jenny Wilson",
    role: "Nursing Assistant",
    rating: 5
  },
  {
    title: "Elit aute irure tempor cupidatat incididunt",
    content: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    name: "Guy Hawkins",
    role: "President of Sales",
    rating: 5
  },
  {
    title: "Sunt qui esse pariatur duis deserunt mollit",
    content: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    name: "Cody Fisher",
    role: "Medical Assistant",
    rating: 5
  },
  {
    title: "Donec et fringilla neque",
    content: "Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisl purus cursus sapien, id ultricies nunc nulla et ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.",
    name: "Darlene Robertson",
    role: "Dog Trainer",
    rating: 5
  },
  {
    title: "Etiam accumsan porta neque eros",
    content: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
    name: "Dianne Russell",
    role: "Medical Assistant",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="text-center mb-8">
        <h2 className="text-sm font-medium text-gray-500">Testimonials</h2>
        <h1 className="text-5xl font-bold text-gray-900 mt-2">People all over the world use banko.</h1>
        <p className="text-gray-500 mt-4">
          Rated <span className="text-green-500 font-semibold">4.8/5</span> from over 1000 users
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {Array(testimonial.rating).fill(0).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.183c.969 0 1.372 1.24.588 1.81l-3.386 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.839-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.14 9.401c-.784-.57-.38-1.81.588-1.81h4.183a1 1 0 00.95-.69l1.286-3.974z"/>
                </svg>
              ))}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{testimonial.title}</h3>
            <p className="text-gray-600 mb-4">{testimonial.content}</p>
            <div>
              <div className="text-gray-900 font-medium">{testimonial.name}</div>
              <div className="text-gray-500">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;