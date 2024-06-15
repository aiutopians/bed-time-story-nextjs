// components/Pricing.js

import Link from "next/link";
import Header from "@/components/component/header"
import Footer from '@/components/component/footer'

export default function Pricing() {
    return (
      <div className="bg-white text-black h-screen w-full flex flex-col justify-between">
        {/* Header */}
        <Header />
  
        {/* Main Content */}
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-xl">
            Unlock all features including longer stories, different voice actors, and more.
          </p>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-lg shadow-sm p-6">
              <h3 className="text-lg leading-6 font-medium">What's included in the FREE plan</h3>
              <ul className="mt-4 space-y-2">
                <li>2 short stories per month</li>
                <li>1 voice actor</li>
                <li>Supported languages: English</li>
                <li>Email support</li>
              </ul>
              <div className="mt-8">
                <div className="text-4xl font-extrabold">$0</div>
                <div className="text-base font-medium text-gray-500">Billed Monthly</div>
              </div>
              <div className="mt-8">
                <a
                  href="#"
                  className="block w-full text-center bg-blue-600 text-white font-semibold py-2 rounded-lg"
                >
                  Get Started
                </a>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="border border-gray-200 rounded-lg shadow-sm p-6">
              <h3 className="text-lg leading-6 font-medium">What's included in the PRO plan</h3>
              <ul className="mt-4 space-y-2">
                <li>30 short, medium, or long stories per month</li>
                <li>5 unique voice actors</li>
                <li>Supported languages: English, Chinese, French, German, Italian, Japanese, Korean, Spanish</li>
                <li>Priority email support</li>
              </ul>
              <div className="mt-8">
                <div className="text-4xl font-extrabold">$5</div>
                <div className="text-base font-medium text-gray-500">Summer sale</div>
              </div>
              <div className="mt-8">
                <a
                  href="#"
                  className="block w-full text-center bg-blue-600 text-white font-semibold py-2 rounded-lg"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
       
      </div>
    );
}
  