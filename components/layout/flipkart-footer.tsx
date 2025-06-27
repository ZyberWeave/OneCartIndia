import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react"

const footerSections = [
  {
    title: "ABOUT",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "ShopEase Stories", href: "/stories" },
      { name: "Press", href: "/press" },
      { name: "Corporate Information", href: "/corporate" },
    ],
  },
  {
    title: "GROUP COMPANIES",
    links: [
      { name: "Myntra", href: "#" },
      { name: "Cleartrip", href: "#" },
      { name: "Shopsy", href: "#" },
    ],
  },
  {
    title: "HELP",
    links: [
      { name: "Payments", href: "/help/payments" },
      { name: "Shipping", href: "/help/shipping" },
      { name: "Cancellation & Returns", href: "/help/returns" },
      { name: "FAQ", href: "/help/faq" },
      { name: "Sitemap", href: "/sitemap" },
      { name: "Grievance Redressal", href: "/grievance" },
      { name: "EPR Compliance", href: "/epr" },
    ],
  },
  {
    title: "CONSUMER POLICY",
    links: [
      { name: "Cancellation & Returns", href: "/policy/returns" },
      { name: "Terms Of Use", href: "/terms" },
      { name: "Security", href: "/security" },
      { name: "Privacy", href: "/privacy" },
      { name: "Sitemap", href: "/sitemap" },
      { name: "Grievance Redressal", href: "/grievance" },
      { name: "EPR Compliance", href: "/epr" },
    ],
  },
]

export function FlipkartFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-gray-400 text-sm font-semibold mb-4 uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-gray-400 text-sm font-semibold mb-4 uppercase tracking-wider">Mail Us:</h3>
            <div className="text-sm space-y-1">
              <p>ShopEase Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
            </div>

            <h3 className="text-gray-400 text-sm font-semibold mb-4 mt-6 uppercase tracking-wider">Social:</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-gray-400 text-sm font-semibold mb-4 uppercase tracking-wider">
              Registered Office Address:
            </h3>
            <div className="text-sm space-y-1">
              <p>ShopEase Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
              <p className="mt-2">CIN : U51109KA2012PTC066107</p>
              <p>
                Telephone:{" "}
                <Link href="tel:044-45614700" className="text-secondary hover:underline">
                  044-45614700
                </Link>{" "}
                /{" "}
                <Link href="tel:044-67415800" className="text-secondary hover:underline">
                  044-67415800
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/seller" className="flex items-center space-x-1 hover:text-white transition-colors">
                <span>🛍️</span>
                <span>Become a Seller</span>
              </Link>
              <Link href="/advertise" className="flex items-center space-x-1 hover:text-white transition-colors">
                <span>📢</span>
                <span>Advertise</span>
              </Link>
              <Link href="/gift-cards" className="flex items-center space-x-1 hover:text-white transition-colors">
                <span>🎁</span>
                <span>Gift Cards</span>
              </Link>
              <Link href="/help" className="flex items-center space-x-1 hover:text-white transition-colors">
                <span>❓</span>
                <span>Help Center</span>
              </Link>
            </div>

            <div className="text-sm">
              <span>© 2007-2025 ShopEase.com</span>
            </div>

            <div className="flex items-center space-x-2">
              <img src="/placeholder.svg?height=24&width=40" alt="Visa" className="h-6" />
              <img src="/placeholder.svg?height=24&width=40" alt="Mastercard" className="h-6" />
              <img src="/placeholder.svg?height=24&width=40" alt="American Express" className="h-6" />
              <img src="/placeholder.svg?height=24&width=40" alt="Discover" className="h-6" />
              <img src="/placeholder.svg?height=24&width=40" alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
