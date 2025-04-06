import { motion } from "framer-motion";
import { useState } from "react";
import { useCart } from '../context/CartContext';

// Sample Data with Thumbnails
const sampleCourses = [
  { id: 1, title: "Web Dev Bootcamp", price: 1499, category: "Web", thumbnail: "https://i.pinimg.com/736x/8e/df/d7/8edfd7e930e5b99c7e26673c5ad5813b.jpg" },
  { id: 2, title: "AWS for Beginners", price: 999, category: "Cloud", thumbnail: "https://i.pinimg.com/736x/fe/2c/c4/fe2cc43a8f535f6e4f951618b9c566e9.jpg" },
  { id: 3, title: "React & Node Mastery", price: 1799, category: "Web", thumbnail: "https://i.pinimg.com/474x/23/31/41/23314125087b4dd7ab9d0c078536dee9.jpg" },
  { id: 4, title: "UI/UX Fundamentals", price: 1299, category: "Design", thumbnail: "https://i.pinimg.com/736x/22/de/d1/22ded1349587588e033c7de713026611.jpg" },
  { id: 5, title: "Intro to Python", price: 799, category: "Programming", thumbnail: "https://i.pinimg.com/736x/49/a2/17/49a21780150d43276bf085f31c627f9c.jpg" },
  { id: 6, title: "Kubernetes Essentials", price: 1599, category: "DevOps", thumbnail: "https://i.pinimg.com/736x/1e/8f/69/1e8f6937d9d27171dfc2196a01cb2a4d.jpg" },
  { id: 7, title: "Machine Learning 101", price: 1899, category: "AI", thumbnail: "https://i.pinimg.com/736x/23/05/72/2305729cd86ed7fa7e0df209d2520093.jpg" },
  { id: 8, title: "Digital Marketing Basics", price: 999, category: "Marketing", thumbnail: "https://i.pinimg.com/736x/3b/0e/e1/3b0ee183d15b8568230838e4097ec8f0.jpg" },
  { id: 9, title: "SQL & Databases", price: 899, category: "Database", thumbnail: "https://i.pinimg.com/736x/9b/e2/06/9be206a792c842092a2525bc0864afa1.jpg" },
  { id: 10, title: "Cybersecurity 101", price: 1199, category: "Security", thumbnail: "https://i.pinimg.com/736x/48/53/b7/4853b78ce059216943ec7d7fdeb101ae.jpg" },
  { id: 11, title: "Figma for Designers", price: 1099, category: "Design", thumbnail: "https://i.pinimg.com/736x/28/50/f7/2850f70a905e60528431a4e5c66b05f3.jpg" },
  { id: 12, title: "Blockchain Explained", price: 1699, category: "Blockchain", thumbnail: "https://i.pinimg.com/736x/44/7d/29/447d295a11e51c40fb755bd5022766af.jpg" },
  { id: 13, title: "Linux Crash Course", price: 899, category: "OS", thumbnail: "https://i.pinimg.com/736x/78/78/84/787884aea46531c0a13f8d491e197259.jpg" },
  { id: 14, title: "Data Structures", price: 1499, category: "Programming", thumbnail: "https://i.pinimg.com/736x/e1/34/fc/e134fc7c5327e0f5784035fc8eece3a9.jpg" },
  { id: 15, title: "Git & GitHub", price: 599, category: "Tools", thumbnail: "https://i.pinimg.com/736x/cf/b2/d5/cfb2d5bdd6556a046d49514468cd1f96.jpg" },
  { id: 16, title: "DevOps Roadmap", price: 1399, category: "DevOps", thumbnail: "https://i.pinimg.com/736x/bd/09/fb/bd09fb77b0538e3f86a93ad9898c1e21.jpg" },
  { id: 17, title: "Agile Methodology", price: 799, category: "Management", thumbnail: "https://i.pinimg.com/736x/36/9b/bd/369bbdffc750c5606c4631c1e434ce98.jpg" },
  { id: 18, title: "JavaScript Mastery", price: 1299, category: "Programming", thumbnail: "https://i.pinimg.com/736x/80/53/c1/8053c1dda698e6b6826eff310eff5236.jpg" },
  { id: 19, title: "Azure in Practice", price: 1099, category: "Cloud", thumbnail: "https://i.pinimg.com/736x/cb/b5/20/cbb520eeaa2648d81e2054e2c23de1e4.jpg" },
  { id: 20, title: "Flutter & Dart", price: 1399, category: "Mobile", thumbnail: "https://i.pinimg.com/474x/b4/6f/3d/b46f3da59bc4e45b1a32b3bb899d0568.jpg" },
  { id: 21, title: "Prompt Engineering", price: 1599, category: "AI", thumbnail: "https://i.pinimg.com/736x/8c/17/5d/8c175d8f163ac54db27461af569b0ec9.jpg" },
  { id: 22, title: "Intro to C++", price: 799, category: "Programming", thumbnail: "https://i.pinimg.com/736x/c6/65/d3/c665d32b9c684fc60719696b2fad88e7.jpg" },
  { id: 23, title: "Ethical Hacking", price: 1799, category: "Security", thumbnail: "https://i.pinimg.com/736x/63/d9/07/63d907b73f31bf0968642bfcb956694f.jpg" },
  { id: 24, title: "Excel for Professionals", price: 699, category: "Productivity", thumbnail: "https://i.pinimg.com/736x/89/83/c8/8983c862e3bd4d88ed8a88d28545bf7d.jpg" },
  { id: 25, title: "Prompt Design for GPT", price: 1199, category: "AI", thumbnail: "https://i.pinimg.com/736x/a1/00/01/a1000116304f237ab9101e0b3df3131d.jpg" },
  { id: 26, title: "Rust Programming Basics", price: 999, category: "Programming", thumbnail: "https://i.pinimg.com/736x/4a/d3/45/4ad345f5235509024ccda4fcea3e6bca.jpg" },
  { id: 27, title: "AI in Healthcare", price: 1899, category: "AI", thumbnail: "https://i.pinimg.com/736x/a0/8f/ce/a08fce23859f5aefe54a9f169e37170f.jpg" },
];

export default function Courses() {
  const { cart, addToCart } = useCart(); // ✅ Use global cart context
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = sampleCourses.filter((course) => {
    const categoryMatch = selectedCategory === "All" || course.category === selectedCategory;
    const priceMatch =
      priceFilter === "All" ||
      (priceFilter === "Below 1000" && course.price < 1000) ||
      (priceFilter === "1000-1500" && course.price >= 1000 && course.price <= 1500) ||
      (priceFilter === "Above 1500" && course.price > 1500);
    const searchMatch = course.title.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && priceMatch && searchMatch;
  });

  return (
    <div className="p-10 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">
        Explore Our Courses
      </h2>

      {/* 🔍 Filter + Search */}
      <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center mb-8">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 bg-indigo-100 text-indigo-700 border border-gray-300 hover:bg-indigo-200 rounded-full w-72"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 px-4 py-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-full"
        >
          <option value="All">All Categories</option>
          <option value="Web">Web</option>
          <option value="Cloud">Cloud</option>
          <option value="Design">Design</option>
          <option value="Programming">Programming</option>
          <option value="AI">AI</option>
          <option value="Marketing">Marketing</option>
          <option value="Security">Security</option>
          <option value="OS">OS</option>
          <option value="Tools">Tools</option>
          <option value="DevOps">DevOps</option>
          <option value="Mobile">Mobile</option>
          <option value="Management">Management</option>
          <option value="Productivity">Productivity</option>
          <option value="Database">Database</option>
          <option value="Blockchain">Blockchain</option>
        </select>

        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border border-gray-300 px-4 py-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-full"
        >
          <option value="All">All Prices</option>
          <option value="Below 1000">Below ₹1000</option>
          <option value="1000-1500">₹1000 - ₹1500</option>
          <option value="Above 1500">Above ₹1500</option>
        </select>

        <button
          onClick={() => {
            setSearchQuery("");
            setSelectedCategory("All");
            setPriceFilter("All");
          }}
          className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition"
        >
          Clear Filters
        </button>
      </div>

      {/* 🎓 Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-indigo-700">
                  {course.title}
                </h3>
                <p className="text-gray-600">₹{course.price}</p>
                <p className="text-xs text-gray-400 mb-3">
                  Category: {course.category}
                </p>
                <button
                  onClick={() => addToCart(course)}
                  className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No courses match your filter.
          </p>
        )}
      </div>
    </div>
  );
}
