import { BsEnvelope, BsPhone } from "react-icons/bs";
import { BiSolidEditLocation } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white p-8">
      <div className="max-w-6xl w-full border-t border-gray-900 pt-3">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <BiSolidEditLocation className="text-gray-900" size={30} />
              <div>
                <p className="text-lg font-bold text-gray-900">
                  Kigali, Rwanda
                </p>
                <p className="text-sm text-gray-400">KG 305 St</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsPhone className="text-gray-900" size={30} />
              <div>
                <p className="text-lg font-bold text-gray-900">+250 539 6431</p>
                <p className="text-sm text-gray-400">Available Every Day</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsEnvelope className="text-gray-900" size={30} />
              <div>
                <p className="text-lg font-bold text-gray-900">
                  rentdrive250@gmail.com
                </p>
                <p className="text-sm text-gray-400">
                  Send me your message anytime!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="sm:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full text-gray-900 p-3 bg-transparent border border-gray-500 rounded-lg outline-none focus:border-gray-900 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full text-gray-900 p-3 bg-transparent border border-gray-500 rounded-lg outline-none focus:border-gray-900 transition-all duration-300"
              />
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full text-gray-900 p-3 bg-transparent border border-gray-500 rounded-lg outline-none focus:border-gray-900 transition-all duration-300 sm:col-span-2"
              />
              <textarea
                placeholder="Enter Your Message"
                className="w-full text-gray-900 h-40 p-3 bg-transparent border border-gray-500 rounded-lg outline-none focus:border-gray-900 transition-all duration-300 sm:col-span-2 resize-none"
              ></textarea>
              <button className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-900/90 transition-colors duration-500 cursor-pointer sm:col-span-2">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
