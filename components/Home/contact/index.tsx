"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";
import ReactLoading from "react-loading";
const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (!data.name || !data.email || !data.phone || !data.message) {
      toast.error("Please fill all fields");
      setLoading(false);
      return;
    }
    const response = await axios.post(`/api/contact`, data);
    toast.success(response.data.message);
    setData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setLoading(false);
  };

  return (
    <motion.div
      id="contact"
      ref={ref}
      className="py-20 flex items-center md:items-start flex-col md:flex-row w-full px-8 md:px-16 lg:px-32 text-secondary"
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div className="w-full md:w-1/2 flex flex-col" variants={variants}>
        <motion.h1
          variants={variants}
          className="text-3xl md:text-[45px] font-light"
        >
          Feel Free
        </motion.h1>
        <motion.h1
          variants={variants}
          className="mt-2 text-4xl md:text-5xl font-bold font-bask relative text-secondary"
        >
          <motion.svg
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            viewBox="63.222 141.9655 565.2742 41.0005"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-6 rotate-[0.5deg] origin-left md:w-3/4 left-0 -z-10"
          >
            <path
              d="M 63.222 170.63 C 116.369 145.339 667.433 131.693 626.306 151.264 L 627.423 150.541 C 627.736 150.524 627.994 151.342 627.999 152.369 C 628.005 153.379 626.947 149.124 626.64 149.165 L 627.407 149.489 C 593.945 129.158 60.16 174.244 63.683 182.966 L 63.222 170.63 Z"
              fill="#FFA7EC"
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, -7.105427357601002e-15)"
            />
          </motion.svg>
          <span>To Get In Touch With Us</span>
        </motion.h1>
        <motion.div className="pt-10" variants={variants}>
          <h2 className="font-bold  text-4xl font-bask">Mail</h2>
          <span className="text-xl font-light">info@justmade.io</span>
        </motion.div>
        <motion.div className="py-5" variants={variants}>
          <h2 className="font-bold text-4xl font-bask">Address</h2>
          <span className="text-xl font-light">Lahore - Pakistan</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2 className="font-bold text-4xl font-bask">Phone</h2>
          <span className="text-xl font-light">+92 321 1234567</span>
        </motion.div>
      </motion.div>
      <div className="mt-10 md:mt-0 w-full md:w-1/2 relative">
        <motion.div
          className="absolute stroke-secondary -z-10"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <svg className="w-full h-[50vh]" viewBox="0 0 32.666 32.666">
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 0.5 }}
              d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
            />
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full text-lg p-2 rounded-xl mb-3 border border-secondary placeholder:text-secondary text-secondary outline-none"
            type="text"
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            className="w-full text-lg p-2 rounded-xl mb-3 border border-secondary placeholder:text-secondary text-secondary outline-none"
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            className="w-full text-lg p-2 rounded-xl mb-3 border border-secondary placeholder:text-secondary text-secondary outline-none"
            type="tel"
            placeholder="Phone"
            name="phone"
            value={data.phone}
            onChange={handleChange}
          />
          <textarea
            rows={6}
            placeholder="Message"
            name="message"
            value={data.message}
            onChange={handleChange}
            className="w-full text-lg p-2 rounded-xl mb-3 border border-secondary placeholder:text-secondary text-secondary outline-none"
          />
          <button
            type="submit"
            className="transition duration-300 hover:bg-[#f2bd9d] hover:text-secondary font-bold px-5 py-3 text-base rounded-xl text-white bg-secondary shadow shadow-black/30"
          >
            {loading ? <ReactLoading type="bars" /> : "Submit"}
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
