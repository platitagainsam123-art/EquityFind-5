import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-[#c2d2da] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between pl-[100px]">
          <Link href="/" className="text-[#000000] font-bold text-lg">
            EquityFind
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-[#000000] text-sm hover:opacity-70">
                Buyers
              </Link>
              <Link href="#" className="text-[#000000] text-sm hover:opacity-70">
                Real Estate Agents
              </Link>
              <Link href="#" className="text-[#000000] text-sm hover:opacity-70">
                News
              </Link>
              <Link href="#" className="text-[#000000] text-sm hover:opacity-70">
                About Us
              </Link>
              <Link href="#" className="text-[#000000] text-sm hover:opacity-70">
                Contact Us
              </Link>
            </div>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#ffffff] px-6"
            >
              LOGIN
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#c2d2da] px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto pl-[100px]">
          <h1 className="text-5xl md:text-6xl font-bold text-[#000000] mb-4 max-w-2xl leading-tight">
            <div>Looking for</div>
            <div>Off-Market</div>
            <div>Deals?</div>
          </h1>
          <p className="text-[#494949] text-lg mb-8">Where the best deals never hit the MLS</p>
          <Button className="bg-[#000000] text-[#ffffff] hover:bg-[#494949] px-8 py-6 text-base">Get Started</Button>
        </div>
      </section>

      {/* How does it work Section */}
      <section className="bg-[#ffffff] px-6 py-16">
        <div className="max-w-7xl mx-auto pl-[127px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-12 text-center">How does it work?</h2>

          {/* Process Steps with connecting line */}
          <div className="relative mb-16">
            {/* Red connecting line */}
            <div
              className="absolute top-6 left-0 right-0 h-0.5 bg-[#e8172f] hidden md:block"
              style={{ left: "calc(16.66% + 6px)", right: "calc(16.66% + 6px)" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative justify-items-center">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-[#e8172f] rotate-45 mb-8 relative z-10" />
                <div className="bg-[#c2d2da]/20 rounded-lg p-8 text-center w-[300px] h-[348px] flex flex-col justify-center">
                  <h3 className="text-[28px] font-medium text-[#000000] mb-4">List privately</h3>
                  <p className="text-[#494949] text-[16px] font-normal leading-relaxed">
                    Licensed real-estate agents post an off-market listing and optionally upload an Offering Memorandum,
                    architectural plans, photos, and key docs.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-[#e8172f] rotate-45 mb-8 relative z-10" />
                <div className="bg-[#c2d2da]/20 rounded-lg p-8 text-center w-[300px] h-[348px] flex flex-col justify-center">
                  <h3 className="text-[28px] font-medium text-[#000000] mb-4">Invite buyers</h3>
                  <p className="text-[#494949] text-[16px] font-normal leading-relaxed">
                    Real-estate agents grant access to specific buyers or make it public to all accredited buyers.
                    Authorized buyers are notified by email or SMS.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-[#e8172f] rotate-45 mb-8 relative z-10" />
                <div className="bg-[#c2d2da]/20 rounded-lg p-8 text-center w-[300px] h-[348px] flex flex-col justify-center">
                  <h3 className="text-[28px] font-medium text-[#000000] mb-4">Register & view</h3>
                  <p className="text-[#494949] text-[16px] font-normal leading-relaxed">
                    Buyers register using the invited email and activation code to unlock full property details, then
                    connect with the real-estate agent to proceed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pl-[24px]">
            {/* Benefit 1 */}
            <div className="border-r border-[#d9d9d9] pr-8 last:border-r-0">
              <div className="text-[#c2d2da]/56 text-[200px] font-extrabold mb-4 leading-none">1</div>
              <h3 className="text-xl font-bold text-[#000000] mb-3">Exclusive Properties</h3>
              <p className="text-[#494949] text-sm">
                Private listings you won't see on the MLS, shared directly with you.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="border-r border-[#d9d9d9] pr-8 last:border-r-0">
              <div className="text-[#c2d2da]/56 text-[200px] font-extrabold mb-4 leading-none">2</div>
              <h3 className="text-xl font-bold text-[#000000] mb-3">Undervalued Deals</h3>
              <p className="text-[#494949] text-sm">Better entry points today for smarter returns tomorrow.</p>
            </div>

            {/* Benefit 3 */}
            <div className="pr-8">
              <div className="text-[#c2d2da]/56 text-[200px] font-extrabold mb-4 leading-none">3</div>
              <h3 className="text-xl font-bold text-[#000000] mb-3">Bigger Upside</h3>
              <p className="text-[#494949] text-sm">Stronger basis now, more room to grow later.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#ffffff] px-6 py-16">
        <div className="max-w-7xl mx-auto pl-[151px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-8">Frequently Asked Questions</h2>
        </div>
      </section>
    </div>
  )
}
