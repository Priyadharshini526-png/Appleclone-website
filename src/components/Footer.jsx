import React from "react";

const Footer = () => {
  return (
    <div className='bg-[#F5F5F7] mt-3'>
      <div className='py-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Legal & disclaimer */}
        <div className='text-xs text-gray-500 flex flex-col gap-5 py-5 border-b border-gray-300'>
          <p>1. Get extra trade-in credit when you trade in an eligible iPhone and purchase a new eligible Apple device through June 18, 2025. Additional terms from Apple or Apple’s trade-in partners may apply.</p>
          <p>Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device...</p>
          <p>2. Hearing Aid and Hearing Test: The Hearing Aid feature has received FDA authorization...</p>
          <p>Hearing Protection: The Hearing Protection feature works with AirPods Pro 2... See <a href="#" className="underline font-semibold">support.apple.com/120850</a></p>
          <p>To access and use all Apple Card features...</p>
          <p>Apple Payments Services LLC, a subsidiary of Apple Inc...</p>
          <p>If you reside in the U.S. territories...</p>
          <p>Learn more: <a href="#" className="underline font-semibold">support.apple.com/kb/HT209218</a></p>
          <p>Apple Intelligence is available in beta on all iPhone 16 models...</p>
          <p>A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.</p>
          <p>Features are subject to change. Some features may not be available in all regions.</p>
        </div>

        {/* Footer links */}
        <div className='border-b border-gray-300'>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 my-5 w-full'>
            {/* Column 1 */}
            <div className='flex flex-col gap-4'>
              <h4 className='text-sm text-gray-600 font-semibold'>Shop and Learn</h4>
              <ul className='text-xs text-gray-500 flex flex-col gap-2'>
                {["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "AitTag", "Accessories", "Gift Cards"].map((item) => (
                  <li key={item} className='hover:underline cursor-pointer'>{item}</li>
                ))}
              </ul>
              <h4 className='text-sm text-gray-600 font-semibold mt-5'>Apple Wallet</h4>
              <ul className='text-xs text-gray-500 flex flex-col gap-2'>
                {["Wallet", "Apple Card", "Apple Pay", "Apple Cash"].map((item) => (
                  <li key={item} className='hover:underline cursor-pointer'>{item}</li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className='flex flex-col gap-4'>
              <h4 className='text-sm text-gray-600 font-semibold'>Account</h4>
              <ul className='text-xs text-gray-500 flex flex-col gap-2'>
                {["Manage Your Apple Account", "Apple Store Account", "iCloud.com"].map((item) => (
                  <li key={item} className='hover:underline cursor-pointer'>{item}</li>
                ))}
              </ul>
              <h4 className='text-sm text-gray-600 font-semibold mt-5'>Entertainment</h4>
              <ul className='text-xs text-gray-500 flex flex-col gap-2'>
                {["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcast", "Apple Books", "App Store"].map((item) => (
                  <li key={item} className='hover:underline cursor-pointer'>{item}</li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className='flex flex-col gap-4'>
              <h4 className='text-sm text-gray-600 font-semibold'>Apple Store</h4>
              <ul className='text-xs text-gray-500 flex flex-col gap-2'>
                {["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Certified Refurbished", "Apple Trade In", "Financing", "Carrier Deals at Apple", "Order Status", "Shopping Help"].map((item) => (
                  <li key={item} className='hover:underline cursor-pointer'>{item}</li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div className='flex flex-col gap-4'>
              <h4 className='text-sm text-gray-600 font-semibold'>For Business</h4>
              <ul className='text-xs text-gray-500 flex flex-col gap-2'>
                {["Apple and Business", "Shop for Business"].map((item) => (
                  <li key={item} className='hover:underline cursor-pointer'>{item}</li>
                ))}
              </ul>
              <h4 className='text-sm text-gray-600 font-semibold mt-5'>For Education</h4>
              <ul className='text-xs text-gray-500 flex flex-col gap-2'>
                {["Apple and Education", "Shop for K-12", "Shop for College"].map((item) => (
                  <li key={item} className='hover:underline cursor-pointer'>{item}</li>
                ))}
              </ul>
              <h4 className='text-sm text-gray-600 font-semibold mt-5'>For Healthcare</h4>
              <ul className='text-xs text-gray-500 flex flex-col gap-2'>
                {["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"].map((item) => (
                  <li key={item} className='hover:underline cursor-pointer'>{item}</li>
                ))}
              </ul>
            </div>

            {/* Column 5 */}
            <div className='flex flex-col gap-4'>
              <h4 className='text-sm text-gray-600 font-semibold'>Apple Values</h4>
              <ul className='text-xs text-gray-500 flex flex-col gap-2'>
                {["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Supply Chain Innovation"].map((item) => (
                  <li key={item} className='hover:underline cursor-pointer'>{item}</li>
                ))}
              </ul>
              <h4 className='text-sm text-gray-600 font-semibold mt-5'>About Apple</h4>
              <ul className='text-xs text-gray-500 flex flex-col gap-2'>
                {["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"].map((item) => (
                  <li key={item} className='hover:underline cursor-pointer'>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className='text-xs text-gray-500 my-5'>
            <p>
              More ways to shop: <a href="#" className='text-blue-500 underline'>Find an Apple Store</a> or <a href="#" className='text-blue-500 underline'>other retailer</a> near you. Or call <a href="#" className='text-blue-500 underline'>1-800-MY-APPLE</a>.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='text-gray-500 text-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4 my-5'>
          <p>© 2025 Apple Inc. All rights reserved.</p>
          <div className='flex flex-wrap gap-2 text-gray-600 font-medium'>
            {["Privacy Policy", "Terms of Use", "Sales and Refund", "Legal", "Site Map"].map((item, idx) => (
              <React.Fragment key={item}>
                <p className='hover:underline cursor-pointer'>{item}</p>
                {idx !== 4 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
          <p>India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
