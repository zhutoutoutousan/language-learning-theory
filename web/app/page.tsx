import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Brain, MessageCircle, Target, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">LinguaFlow</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/theory" className="text-gray-600 hover:text-blue-600 transition-colors">
              Theory
            </Link>
            <Link href="/practice" className="text-gray-600 hover:text-blue-600 transition-colors">
              Practice
            </Link>
            <Link href="/ai-chat" className="text-gray-600 hover:text-blue-600 transition-colors">
              AI Chat
            </Link>
            <Link href="/progress" className="text-gray-600 hover:text-blue-600 transition-colors">
              Progress
            </Link>
          </nav>
          <Button asChild>
            <Link href="/practice">Start Learning</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Theory-Backed Language Learning</Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Master Languages with
            <span className="text-blue-600"> Scientific Methods</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From A1 beginners to C2 advanced learners, our platform combines cognitive science, gamification, and AI to
            create the most effective language learning experience for Chinese, English, and German.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/practice">Start Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/theory">Learn the Science</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Levels */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Structured Learning Path</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 hover:border-green-300 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-700">A1-A2 Foundation</CardTitle>
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <CardDescription>Build core language structure and pronunciation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Phonetic muscle memory development</li>
                  <li>• Basic sentence structure mastery</li>
                  <li>• Grammar fundamentals with cases/tenses</li>
                  <li>• Pronunciation recording & polishing</li>
                  <li>• AI chat with native language support</li>
                </ul>
                <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
                  <Link href="/practice/beginner">Start A1-A2</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-700">B1-B2 Expansion</CardTitle>
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardDescription>Embed learning in real-world contexts</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Faster listening comprehension</li>
                  <li>• Extended context understanding</li>
                  <li>• Vocabulary expansion strategies</li>
                  <li>• Embedded learning scenarios</li>
                  <li>• AI chat without source language</li>
                </ul>
                <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
                  <Link href="/practice/intermediate">Start B1-B2</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-700">C1-C2 Mastery</CardTitle>
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <CardDescription>Advanced cognitive training and interpretation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Simultaneous interpretation practice</li>
                  <li>• Memory technique mastery</li>
                  <li>• Advanced flashcard systems</li>
                  <li>• AI debate and presentations</li>
                  <li>• Brain stretching exercises</li>
                </ul>
                <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
                  <Link href="/practice/advanced">Start C1-C2</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Why LinguaFlow Works</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Theory-Backed Methods</h4>
              <p className="text-gray-600">Based on cognitive science and proven language acquisition research</p>
            </div>
            <div className="text-center">
              <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">AI Integration</h4>
              <p className="text-gray-600">Practice with AI tutors that adapt to your learning style and level</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Multilingual Support</h4>
              <p className="text-gray-600">Learn Chinese, English, and German with native-level precision</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Language Learning?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners who have mastered languages using our scientific approach
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/practice">Begin Your Journey Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6" />
                <span className="text-xl font-bold">LinguaFlow</span>
              </div>
              <p className="text-gray-400">Scientific language learning for the modern world</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Learning</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/theory" className="hover:text-white transition-colors">
                    Theory
                  </Link>
                </li>
                <li>
                  <Link href="/practice" className="hover:text-white transition-colors">
                    Practice
                  </Link>
                </li>
                <li>
                  <Link href="/ai-chat" className="hover:text-white transition-colors">
                    AI Chat
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Languages</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Chinese (Mandarin)</li>
                <li>English</li>
                <li>German</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Levels</h5>
              <ul className="space-y-2 text-gray-400">
                <li>A1-A2 Beginner</li>
                <li>B1-B2 Intermediate</li>
                <li>C1-C2 Advanced</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LinguaFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
