import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">LEX & CO.</h3>
            <p className="text-gray-300">Justice with Integrity.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-secondary">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href="/lawyers" className="hover:text-secondary">
                  Our Lawyers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">123 Legal Avenue, Nairobi, Kenya</p>
            <p className="text-gray-300">info@lexandco.com</p>
            <p className="text-gray-300">+254 700 123 456</p>
          </div>
          <div>{/* Social media links can go here */}</div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Lex & Co. Advocates. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
