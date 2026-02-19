"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#001D4A] text-white pt-16 pb-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-5 gap-10 mb-12">

          {/* LOGO + INFO */}
          <div>

            <Image
              src="/keystone.jpg"
              alt="Keystone"
              width={180}
              height={60}
              className="mb-4"
            />

            <p className="text-sm mb-2">Rera No :</p>
            <p className="text-sm mb-2">CIN No :</p>
            <p className="text-sm mb-2">Write to us :</p>
            <p className="text-sm mb-2">Explore Housley Blogs Visit Now</p>
            <p className="text-sm">Last Updated : 31st December 2025</p>

          </div>

          {/* LINK COLUMNS */}
          {[1, 2, 3, 4].map((col) => (
            <div key={col}>

              <h3 className="font-semibold mb-4">
                Top Localities In Mumbai
              </h3>

              <ul className="space-y-2 text-sm text-gray-300">

                <li>The Projects in Andheri West</li>
                <li>The Projects in Andheri West</li>
                <li>The Projects in Andheri West</li>
                <li>The Projects in Andheri West</li>
                <li>The Projects in Andheri West</li>

              </ul>

            </div>
          ))}

        </div>

        {/* DIVIDER */}
        <hr className="border-white/30 mb-10" />

        {/* BOTTOM SECTION */}
        <div className="grid md:grid-cols-5 gap-10">

          {/* REGISTERED OFFICE */}
          <div>

            <h3 className="font-semibold mb-4">
              Registered & Corporate Office
            </h3>

            <p className="text-sm text-gray-300">
              A 401, New India chambers, E-6,
              kalimata, MIDC Cross Road A,
              Andheri East, Mumbai 400 093
            </p>

          </div>

          {/* OUR OFFICES */}
          <div className="md:col-span-4">

            <h3 className="font-semibold mb-4">
              Our Offices
            </h3>

            <div className="grid md:grid-cols-4 gap-8 text-center">

              {[1, 2, 3, 4].map((office) => (
                <div key={office}>

                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-yellow-400 text-2xl mb-3"
                  />

                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>The Projects in Andheri West</li>
                    <li>The Projects in Andheri West</li>
                    <li>The Projects in Andheri West</li>
                    <li>The Projects in Andheri West</li>
                    <li>The Projects in Andheri West</li>
                  </ul>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
