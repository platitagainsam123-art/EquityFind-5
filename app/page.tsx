import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus } from "lucide-react"
import Image from "next/image"

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
              className="bg-transparent border-2 border-[#000000] text-[#000000] hover:bg-[#494949] hover:text-[#ffffff] px-6"
            >
              LOGIN
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#c2d2da] py-8 md:py-12 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex-1 pl-[100px] px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-[#000000] mb-4 max-w-2xl leading-tight">
              <div>Looking for</div>
              <div>Off-Market</div>
              <div>Deals?</div>
            </h1>
            <p className="text-[#494949] text-lg mb-8">Where the best deals never hit the MLS</p>
            <Button className="bg-[#000000] text-[#ffffff] hover:bg-[#494949] px-8 py-6 text-base">Get Started</Button>
          </div>
          <div className="hidden md:block flex-shrink-0">
            <Image
              src="/images/hero-property.png"
              alt="Modern luxury property"
              width={640}
              height={300}
              className="rounded-l-lg object-cover my-[-48px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* How does it work Section */}
      <section className="bg-[#ffffff] py-16">
        <div className="max-w-7xl mx-auto pl-[87.5px] pr-[87.5px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-6 text-center">How does it work?</h2>

          <div className="relative mb-6 mx-auto max-w-[830px]">
            <div className="h-[2px] bg-[#e8172f]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-0">
              <div className="w-[10px] h-[10px] bg-[#e8172f]"></div>
              <div className="w-[10px] h-[10px] bg-[#e8172f]"></div>
              <div className="w-[10px] h-[10px] bg-[#e8172f]"></div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="relative mb-16">
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="bg-[#c2d2da]/20 p-8 text-center w-[300px] h-[348px] flex flex-col justify-center rounded-4xl">
                  <h3 className="text-[28px] font-medium text-[#000000] mb-11">List privately</h3>
                  <p className="text-[#494949] text-[16px] font-normal leading-relaxed">
                    Licensed real-estate agents post an off-market listing and optionally upload an Offering Memorandum,
                    architectural plans, photos, and key docs.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="bg-[#c2d2da]/20 p-8 text-center w-[300px] h-[348px] flex flex-col justify-center rounded-4xl">
                  <h3 className="text-[28px] font-medium text-[#000000] mb-11">Invite buyers</h3>
                  <p className="text-[#494949] text-[16px] font-normal leading-relaxed">
                    Real-estate agents grant access to specific buyers or make it public to all accredited buyers.
                    Authorized buyers are notified by email or SMS.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="bg-[#c2d2da]/20 p-8 text-center w-[300px] h-[348px] flex flex-col justify-center rounded-4xl">
                  <h3 className="text-[28px] font-medium text-[#000000] mb-11">Register & view</h3>
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
              <div className="text-[#c2d2da]/56 text-[200px] font-extrabold leading-none text-left mb-0">1</div>
              <h3 className="text-xl font-bold text-[#000000] mb-3">Exclusive Properties</h3>
              <p className="text-[#494949] text-sm">
                Private listings you won't see on the MLS, shared directly with you.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="border-r border-[#d9d9d9] last:border-r-0 pr-8 leading-7">
              <div className="text-[#c2d2da]/56 text-[200px] font-extrabold leading-none text-left mb-0">2</div>
              <h3 className="text-xl font-bold text-[#000000] mb-3">Undervalued Deals</h3>
              <p className="text-[#494949] text-sm">Better entry points today for smarter returns tomorrow.</p>
            </div>

            {/* Benefit 3 */}
            <div className="pr-8">
              <div className="text-[#c2d2da]/56 text-[200px] font-extrabold leading-none text-left mb-0 ml-7">3</div>
              <h3 className="text-xl font-bold text-[#000000] mb-3 ml-7">Bigger Upside</h3>
              <p className="text-[#494949] text-sm px-7">Stronger basis now, more room to grow later.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#ffffff] px-6 py-16">
        <div className="max-w-7xl mx-auto pl-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-8">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full max-w-4xl">
            <AccordionItem value="item-1" className="border-b border-[#d9d9d9]">
              <AccordionTrigger showIcon={false} className="text-left hover:no-underline py-6">
                <span className="font-medium text-base mb-3">When will the product be launched?</span>
                <Plus className="h-5 w-5 shrink-0 text-[#000000] transition-transform duration-200 data-[state=open]:rotate-45" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[#494949] font-normal text-base mb-2 leading-relaxed">
                  The MVP is rolling out now with a waiting list. The full launch is targeted for approximately 2–3
                  weeks from today. Join our waiting list to receive early access updates.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-[#d9d9d9]">
              <AccordionTrigger showIcon={false} className="text-left hover:no-underline py-6">
                <span className="font-medium text-base mb-3">How much does it cost?</span>
                <Plus className="h-5 w-5 shrink-0 text-[#000000] transition-transform duration-200 data-[state=open]:rotate-45" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[#494949] font-normal text-base mb-2 leading-relaxed">
                  We are launching an MVP beta. Access is free for the first three months. Join our waiting list and we
                  will follow up with next steps as invites open.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-[#d9d9d9]">
              <AccordionTrigger showIcon={false} className="text-left hover:no-underline py-6">
                <span className="font-medium text-base mb-3">Can anybody list a property for sale?</span>
                <Plus className="h-5 w-5 shrink-0 text-[#000000] transition-transform duration-200 data-[state=open]:rotate-45" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[#494949] font-normal text-base mb-2 leading-relaxed">
                  No. Only licensed real-estate agents may list properties. Licenses are verified during onboarding.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-[#d9d9d9]">
              <AccordionTrigger showIcon={false} className="text-left hover:no-underline py-6">
                <span className="font-medium text-base mb-3">Can MLS properties be listed as off-market?</span>
                <Plus className="h-5 w-5 shrink-0 text-[#000000] transition-transform duration-200 data-[state=open]:rotate-45" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[#494949] font-normal text-base mb-2 leading-relaxed">
                  No. Only properties not currently listed on the MLS may be posted. We conduct periodic audits;
                  repeated violations may result in suspension or removal. If a property is later added to the MLS, the
                  real-estate agent must promptly remove it from EquityFind.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-[#d9d9d9]">
              <AccordionTrigger showIcon={false} className="text-left hover:no-underline py-6">
                <span className="font-medium text-base mb-3">
                  Can a real-estate agent share a listing with the public?
                </span>
                <Plus className="h-5 w-5 shrink-0 text-[#000000] transition-transform duration-200 data-[state=open]:rotate-45" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[#494949] font-normal text-base mb-2 leading-relaxed">
                  Real-estate agents may share privately with specific buyers or make a listing visible to all
                  accredited buyers. Broader public display is not supported.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-[#d9d9d9]">
              <AccordionTrigger showIcon={false} className="text-left hover:no-underline py-6">
                <span className="font-medium text-base mb-3">
                  Can buyers sign up without a referral from a real-estate agent?
                </span>
                <Plus className="h-5 w-5 shrink-0 text-[#000000] transition-transform duration-200 data-[state=open]:rotate-45" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[#494949] font-normal text-base mb-2 leading-relaxed">
                  Planned: Accredited investors will be able to join without a referral within the next six months. Join
                  our waiting list to be notified when this is available.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-b border-[#d9d9d9]">
              <AccordionTrigger showIcon={false} className="text-left hover:no-underline py-6">
                <span className="font-medium text-base mb-3">What geographies do you support?</span>
                <Plus className="h-5 w-5 shrink-0 text-[#000000] transition-transform duration-200 data-[state=open]:rotate-45" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[#494949] font-normal text-base mb-2 leading-relaxed">
                  We are onboarding real-estate agents and buyers in the Los Angeles metro first, and will expand based
                  on demand. Join our waiting list to request your market.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-b border-[#d9d9d9]">
              <AccordionTrigger showIcon={false} className="text-left hover:no-underline py-6">
                <span className="font-medium text-base mb-3">What property types are allowed?</span>
                <Plus className="h-5 w-5 shrink-0 text-[#000000] transition-transform duration-200 data-[state=open]:rotate-45" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[#494949] font-normal text-base mb-2 leading-relaxed">
                  Single-family, multifamily, condo, and land assets. If a category is not visible, please contact
                  support to discuss a case-by-case review.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border-b border-[#d9d9d9]">
              <AccordionTrigger showIcon={false} className="text-left hover:no-underline py-6">
                <span className="font-medium text-base mb-3">How do you verify accredited buyers?</span>
                <Plus className="h-5 w-5 shrink-0 text-[#000000] transition-transform duration-200 data-[state=open]:rotate-45" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[#494949] font-normal text-base mb-2 leading-relaxed">
                  Buyers may provide third-party accreditation letters or use a supported verification service.
                  EquityFind does not provide accreditation or legal advice.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border-b border-[#d9d9d9]">
              <AccordionTrigger showIcon={false} className="text-left hover:no-underline py-6">
                <span className="font-medium text-base mb-3">Will there be fees after the free beta period?</span>
                <Plus className="h-5 w-5 shrink-0 text-[#000000] transition-transform duration-200 data-[state=open]:rotate-45" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[#494949] font-normal text-base mb-2 leading-relaxed">
                  Yes. Pricing will be announced prior to the end of the free period. Join our waiting list to receive
                  pricing updates.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 max-w-4xl">
            <p className="text-[#494949] text-sm italic leading-relaxed">
              Note: EquityFind connects buyers and sellers of off-market properties. We do not broker transactions,
              guarantee listing accuracy, or provide legal, financial, or tax advice. Please conduct independent due
              diligence.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#000000] text-[#ffffff] px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Left side - Navigation Links */}
            <div className="flex flex-col gap-4 border-0 px-20">
              <Link href="#" className="text-[#ffffff] text-base hover:opacity-70 transition-opacity">
                Terms and Conditions
              </Link>
              <Link href="#" className="text-[#ffffff] text-base hover:opacity-70 transition-opacity">
                FAQ
              </Link>
              <Link href="#" className="text-[#ffffff] text-base hover:opacity-70 transition-opacity">
                Support
              </Link>
              <Link href="#" className="text-[#ffffff] text-base hover:opacity-70 transition-opacity">
                Contact Us
              </Link>
            </div>

            {/* Right side - Risk & Accuracy Notice */}
            <div className="flex-1 max-w-3xl">
              <p className="text-[#ffffff] text-sm leading-relaxed italic">
                <span className="font-semibold not-italic">Risk & Accuracy Notice.</span> Real estate investments are
                inherently risky and may result in partial or total loss of capital. Risks include, without limitation,
                market and interest-rate fluctuations, financing and liquidity constraints, property-specific defects,
                title and zoning issues, vacancies, and regulatory changes. EquityFind is a neutral marketplace that
                facilitates introductions between buyers and sellers of off-market properties. We do not represent
                either party, act as a broker, or guarantee the accuracy, timeliness, or completeness of any listing,
                document, or third-party information on the site. All information is provided by sellers or their agents
                'as-is' and 'as-available.' Users must conduct independent due diligence and seek their own legal, tax,
                and financial advice before proceeding with any transaction. By using this site, you agree that
                EquityFind is not liable for decisions or outcomes arising from your use of the platform.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
