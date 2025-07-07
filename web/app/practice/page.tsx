import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Headphones, MessageCircle, Mic, Target, Trophy, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">LinguaFlow</h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/theory" className="text-gray-600 hover:text-blue-600 transition-colors">
              Theory
            </Link>
            <Link href="/practice" className="text-blue-600 font-medium">
              Practice
            </Link>
            <Link href="/ai-chat" className="text-gray-600 hover:text-blue-600 transition-colors">
              AI Chat
            </Link>
            <Link href="/progress" className="text-gray-600 hover:text-blue-600 transition-colors">
              Progress
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Interactive Learning</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Practice Your Way to Fluency</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your level and language to begin structured, gamified practice sessions designed to build real-world
            communication skills.
          </p>
        </div>

        {/* Language Selection */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Select Your Target Language</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-red-200 hover:border-red-300 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🇨🇳</div>
                <CardTitle>Chinese (Mandarin)</CardTitle>
                <CardDescription>Master tones, characters, and grammar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Pinyin System</span>
                    <Badge variant="secondary">Essential</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Character Recognition</span>
                    <Badge variant="secondary">Core</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Tone Practice</span>
                    <Badge variant="secondary">Critical</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🇺🇸</div>
                <CardTitle>English</CardTitle>
                <CardDescription>Perfect pronunciation and fluency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Phonetic Training</span>
                    <Badge variant="secondary">Essential</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Idiom Mastery</span>
                    <Badge variant="secondary">Advanced</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Business English</span>
                    <Badge variant="secondary">Professional</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:border-yellow-300 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🇩🇪</div>
                <CardTitle>German</CardTitle>
                <CardDescription>Navigate cases, genders, and structure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Case System</span>
                    <Badge variant="secondary">Complex</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Word Order</span>
                    <Badge variant="secondary">Structured</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Compound Words</span>
                    <Badge variant="secondary">Unique</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Level-Based Practice Modules */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">Choose Your Learning Path</h2>

          {/* A1-A2 Beginner */}
          <Card className="mb-8 border-2 border-green-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-green-700 flex items-center gap-2">
                    <Target className="h-6 w-6" />
                    A1-A2 Foundation Builder
                  </CardTitle>
                  <CardDescription>Perfect for absolute beginners and those building core skills</CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800">Beginner</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="border border-green-200">
                  <CardHeader className="pb-3">
                    <Mic className="h-6 w-6 text-green-600 mb-1" />
                    <CardTitle className="text-sm">Pronunciation Lab</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-gray-600 mb-3">
                      Record, compare, and perfect your pronunciation with AI feedback
                    </p>
                    <Progress value={0} className="mb-2" />
                    <p className="text-xs text-gray-500">0/50 exercises</p>
                  </CardContent>
                </Card>

                <Card className="border border-green-200">
                  <CardHeader className="pb-3">
                    <BookOpen className="h-6 w-6 text-green-600 mb-1" />
                    <CardTitle className="text-sm">Grammar Basics</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-gray-600 mb-3">
                      Master sentence structure, cases, and fundamental grammar
                    </p>
                    <Progress value={0} className="mb-2" />
                    <p className="text-xs text-gray-500">0/40 lessons</p>
                  </CardContent>
                </Card>

                <Card className="border border-green-200">
                  <CardHeader className="pb-3">
                    <Headphones className="h-6 w-6 text-green-600 mb-1" />
                    <CardTitle className="text-sm">Listening Practice</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-gray-600 mb-3">Train your ear with graded listening exercises</p>
                    <Progress value={0} className="mb-2" />
                    <p className="text-xs text-gray-500">0/30 sessions</p>
                  </CardContent>
                </Card>

                <Card className="border border-green-200">
                  <CardHeader className="pb-3">
                    <MessageCircle className="h-6 w-6 text-green-600 mb-1" />
                    <CardTitle className="text-sm">AI Chat (Native Support)</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-gray-600 mb-3">
                      Practice with AI tutor using your native language for support
                    </p>
                    <Progress value={0} className="mb-2" />
                    <p className="text-xs text-gray-500">0/20 conversations</p>
                  </CardContent>
                </Card>
              </div>
              <Button asChild className="w-full">
                <Link href="/practice/beginner">Start A1-A2 Journey</Link>
              </Button>
            </CardContent>
          </Card>

          {/* B1-B2 Intermediate */}
          <Card className="mb-8 border-2 border-blue-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-blue-700 flex items-center gap-2">
                    <Zap className="h-6 w-6" />
                    B1-B2 Context Master
                  </CardTitle>
                  <CardDescription>Embed language learning into real-world scenarios</CardDescription>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Intermediate</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="border border-blue-200">
                  <CardHeader className="pb-3">
                    <Headphones className="h-6 w-6 text-blue-600 mb-1" />
                    <CardTitle className="text-sm">Speed Listening</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-gray-600 mb-3">Process faster speech and longer contexts</p>
                    <Progress value={0} className="mb-2" />
                    <p className="text-xs text-gray-500">0/45 exercises</p>
                  </CardContent>
                </Card>

                <Card className="border border-blue-200">
                  <CardHeader className="pb-3">
                    <Users className="h-6 w-6 text-blue-600 mb-1" />
                    <CardTitle className="text-sm">Scenario Practice</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-gray-600 mb-3">Professional, social, and cultural contexts</p>
                    <Progress value={0} className="mb-2" />
                    <p className="text-xs text-gray-500">0/35 scenarios</p>
                  </CardContent>
                </Card>

                <Card className="border border-blue-200">
                  <CardHeader className="pb-3">
                    <BookOpen className="h-6 w-6 text-blue-600 mb-1" />
                    <CardTitle className="text-sm">Vocabulary Expansion</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-gray-600 mb-3">Domain-specific and idiomatic expressions</p>
                    <Progress value={0} className="mb-2" />
                    <p className="text-xs text-gray-500">0/60 word sets</p>
                  </CardContent>
                </Card>

                <Card className="border border-blue-200">
                  <CardHeader className="pb-3">
                    <MessageCircle className="h-6 w-6 text-blue-600 mb-1" />
                    <CardTitle className="text-sm">AI Chat (Target Only)</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-gray-600 mb-3">Immersive conversations in target language only</p>
                    <Progress value={0} className="mb-2" />
                    <p className="text-xs text-gray-500">0/30 conversations</p>
                  </CardContent>
                </Card>
              </div>
              <Button asChild className="w-full">
                <Link href="/practice/intermediate">Start B1-B2 Journey</Link>
              </Button>
            </CardContent>
          </Card>

          {/* C1-C2 Advanced */}
          <Card className="mb-8 border-2 border-purple-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-purple-700 flex items-center gap-2">
                    <Trophy className="h-6 w-6" />
                    C1-C2 Mastery Suite
                  </CardTitle>
                  <CardDescription>Advanced cognitive training and professional skills</CardDescription>
                </div>
                <Badge className="bg-purple-100 text-purple-800">Advanced</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="border border-purple-200">
                  <CardHeader className="pb-3">
                    <Zap className="h-6 w-6 text-purple-600 mb-1" />
                    <CardTitle className="text-sm">Interpretation Training</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-gray-600 mb-3">Simultaneous and consecutive interpretation practice</p>
                    <Progress value={0} className="mb-2" />
                    <p className="text-xs text-gray-500">0/25 sessions</p>
                  </CardContent>
                </Card>

                <Card className="border border-purple-200">
                  <CardHeader className="pb-3">
                    <Target className="h-6 w-6 text-purple-600 mb-1" />
                    <CardTitle className="text-sm">Memory Techniques</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-gray-600 mb-3">Advanced flashcards and memory palace methods</p>
                    <Progress value={0} className="mb-2" />
                    <p className="text-xs text-gray-500">0/40 techniques</p>
                  </CardContent>
                </Card>

                <Card className="border border-purple-200">
                  <CardHeader className="pb-3">
                    <Users className="h-6 w-6 text-purple-600 mb-1" />
                    <CardTitle className="text-sm">AI Debate Arena</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-gray-600 mb-3">Structured debates on complex topics</p>
                    <Progress value={0} className="mb-2" />
                    <p className="text-xs text-gray-500">0/15 debates</p>
                  </CardContent>
                </Card>

                <Card className="border border-purple-200">
                  <CardHeader className="pb-3">
                    <BookOpen className="h-6 w-6 text-purple-600 mb-1" />
                    <CardTitle className="text-sm">Presentation Lab</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-gray-600 mb-3">Professional presentation skills and delivery</p>
                    <Progress value={0} className="mb-2" />
                    <p className="text-xs text-gray-500">0/20 presentations</p>
                  </CardContent>
                </Card>
              </div>
              <Button asChild className="w-full">
                <Link href="/practice/advanced">Start C1-C2 Journey</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Quick Practice Options */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Quick Practice Sessions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-orange-200 hover:border-orange-300 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <Mic className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg">5-Min Pronunciation</CardTitle>
                <CardDescription>Quick pronunciation drills</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline">
                  Start Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200 hover:border-teal-300 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <BookOpen className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Grammar Sprint</CardTitle>
                <CardDescription>Rapid grammar exercises</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline">
                  Start Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:border-pink-300 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <Headphones className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Listening Challenge</CardTitle>
                <CardDescription>Audio comprehension tests</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline">
                  Start Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-200 hover:border-indigo-300 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <MessageCircle className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <CardTitle className="text-lg">AI Quick Chat</CardTitle>
                <CardDescription>5-minute conversation practice</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline">
                  Start Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Progress Overview */}
        <section className="mb-16">
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Trophy className="h-6 w-6 text-yellow-600" />
                Your Learning Progress
              </CardTitle>
              <CardDescription>Track your journey across all languages and levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
                  <p className="text-gray-600">Total Practice Hours</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">0</div>
                  <p className="text-gray-600">Exercises Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
                  <p className="text-gray-600">Streak Days</p>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild className="w-full">
                  <Link href="/progress">View Detailed Progress</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Language Journey?</h3>
          <p className="text-gray-600 mb-8">
            Choose your level and start practicing with our scientifically-designed exercises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/practice/beginner">Start as Beginner</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/ai-chat">Try AI Chat First</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
