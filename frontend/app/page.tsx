import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Users,
  Heart,
  BookOpen,
  Music,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/gcc-logo.jpg"
                alt="Grace Community Church Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Grace Community Church</h1>
                <p className="text-sm text-gray-600">Together know Christ and make Him known</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors">
                Services
              </a>
              <a href="#ministries" className="text-gray-700 hover:text-red-600 transition-colors">
                Ministries
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
                Contact
              </a>
            </nav>
            <div className="hidden md:flex items-center space-x-3 ml-6">
              <a
                href="https://www.facebook.com/profile.php?id=100071312286235"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/gracecommunitychurch1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@GCCBurundi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/gcc-logo.jpg"
              alt="Grace Community Church Logo"
              width={150}
              height={150}
              className="mx-auto mb-8 rounded-lg shadow-lg"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Grace Community Church</h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
              Together know Christ and make Him known
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Welcome to our church family! We are a community of believers committed to growing in faith, serving
              others, and sharing the love of Christ with our neighborhood and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Join Us This Sunday
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 bg-transparent"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Us for Worship</h2>
            <p className="text-lg text-gray-600">Everyone is welcome at Grace Community Church</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-red-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Sunday Morning Service</CardTitle>
                <CardDescription>Our main worship gathering</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-gray-900 mb-2">10:00 AM</p>
                <p className="text-gray-600">Worship, Teaching, and Fellowship</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Thursday Bible Study</CardTitle>
                <CardDescription>Midweek growth and prayer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-gray-900 mb-2">7:00 PM</p>
                <p className="text-gray-600">Deep dive into God's Word</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Friday Praise & Worship</CardTitle>
                <CardDescription>IBWINA - Weekly worship service</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-gray-900 mb-2">6:00 PM</p>
                <p className="text-gray-600">Every Friday - Praise & Worship</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Church</h2>
              <p className="text-lg text-gray-600">Discover our heart and mission</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  <strong className="text-red-600">{"Together know Christ and make Him known"}</strong> - This vision
                  drives everything we do at Grace Community Church. We believe that knowing Christ is a journey best
                  taken together as a community of believers.
                </p>
                <p className="text-gray-600 mb-6">
                  We are committed to creating an environment where people can encounter God, grow in their faith, and
                  discover their purpose in serving others. Through worship, teaching, fellowship, and outreach, we
                  strive to be a beacon of hope in our community.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-red-600" />
                    <span className="text-gray-700">Loving God and loving others</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-6 h-6 text-orange-600" />
                    <span className="text-gray-700">Growing in biblical knowledge</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-yellow-600" />
                    <span className="text-gray-700">Building authentic community</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Warm, welcoming atmosphere for all ages</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Practical, Bible-based teaching</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Contemporary worship music</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Opportunities to connect and serve</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section id="ministries" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Ministries</h2>
            <p className="text-lg text-gray-600">Ways to grow, serve, and connect</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle>Small Groups</CardTitle>
                <CardDescription>Connect and grow in community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Join a small group to build meaningful relationships and study God's Word together in a more intimate
                  setting.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Youth Ministry</CardTitle>
                <CardDescription>Empowering the next generation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Dynamic programs for teens to grow in faith, build friendships, and discover their purpose in Christ.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle>Worship Team</CardTitle>
                <CardDescription>Leading others in praise</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Use your musical gifts to lead our congregation in worship and create an atmosphere for encountering
                  God.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">We'd love to hear from you and answer any questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">
                      Bujumbura
                      <br />
                      Kanyosha, 8ème Avenue.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+257 61 45 33 40</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-yellow-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">gracecommunitychurchburundi@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-red-400" />
                  <div>
                    <p className="font-medium text-gray-900">Office Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 mt-6">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Follow Us</p>
                    <div className="flex space-x-3 mt-2">
                      <a
                        href="https://www.facebook.com/profile.php?id=100071312286235"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/gracecommunitychurch1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800 transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.youtube.com/@GCCBurundi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/gcc-logo.jpg"
                  alt="Grace Community Church Logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <div>
                  <h3 className="text-lg font-bold">Grace Community Church</h3>
                  <p className="text-sm text-gray-400">Together know Christ and make Him known</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                A welcoming community of believers committed to growing in faith and serving others.
              </p>
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100071312286235"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/gracecommunitychurch1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@GCCBurundi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Service Times
                  </a>
                </li>
                <li>
                  <a href="#ministries" className="hover:text-white transition-colors">
                    Ministries
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Times</h4>
              <div className="text-gray-400 space-y-2">
                <p>
                  <strong className="text-white">Sunday:</strong> 10:00 AM
                </p>
                <p>
                  <strong className="text-white">Thursday:</strong> 7:00 PM
                </p>
                <p>
                  <strong className="text-white">Friday IBWINA:</strong> 6:00 PM
                </p>
                <p className="text-sm mt-4">
                  Bujumbura
                  <br />
                  Kanyosha,8ème Avenue
                  <br />
                  +257 61 45 33 40
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Grace Community Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
