const Services = () => {
  const serviceDetails = SERVICE_DETAILLS.map((service) => {
    return (
      <div>
        <div className="p-6 border-2 rounded-md">
          <h1 className="text-xl font-bold py-2">Web Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            eveniet, deserunt magni odio commodi perferendis molestias
            molestiae, neque vero blanditiis unde iste ut repudiandae corrupti
            minima ipsum earum excepturi architecto.
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 m-4 gap-8">
      {serviceDetails}
    </div>
  );
};

export default Services;

const SERVICE_DETAILLS = [
  {
    title: "Web Development",
    subtitle:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet, deserunt magni odio commodi perferendis molestias molestiae,neque vero blanditiis unde iste ut repudiandae corrupti minima ipsumearum excepturi architecto.",
  },
  {
    title: "Frontend Developer",
    subtitle:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet, deserunt magni odio commodi perferendis molestias molestiae,neque vero blanditiis unde iste ut repudiandae corrupti minima ipsumearum excepturi architecto.",
  },
  {
    title: "React Developer",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet, deserunt magni odio commodi perferendis molestias molestiae,neque vero blanditiis unde iste ut repudiandae corrupti minima ipsumearum excepturi architecto.",
  },
  {
    title: "Mobile Development",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet, deserunt magni odio commodi perferendis molestias molestiae,neque vero blanditiis unde iste ut repudiandae corrupti minima ipsumearum excepturi architecto.",
  },
  {
    title: "Blog Creation",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet, deserunt magni odio commodi perferendis molestias molestiae,neque vero blanditiis unde iste ut repudiandae corrupti minima ipsumearum excepturi architecto.",
  },
  {
    title: "Content Creation",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet, deserunt magni odio commodi perferendis molestias molestiae,neque vero blanditiis unde iste ut repudiandae corrupti minima ipsumearum excepturi architecto.",
  },
];
