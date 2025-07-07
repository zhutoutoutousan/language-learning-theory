import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, Calendar, Target, Trophy, TrendingUp, Clock, BookOpen, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">LinguaFlow</h1>
          </Link>
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
            <Link href="/progress" className="text-blue-600 font-medium">
              Progress
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Learning Analytics</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Your Language Learning Journey</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your progress, celebrate achievements, and identify areas for improvement across all languages and
            skill levels.
          </p>
        </div>

        {/* Overview Stats */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-blue-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Total
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-1">24.5</div>
                <p className="text-sm text-gray-600">Hours Practiced</p>
                <div className="mt-2">
                  <Progress value={65} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">65% of monthly goal</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Target className="h-6 w-6 text-green-600" />
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Streak
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-1">12</div>
                <p className="text-sm text-gray-600">Days in a Row</p>
                <div className="mt-2">
                  <Progress value={80} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">Personal best: 15 days</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Trophy className="h-6 w-6 text-purple-600" />
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    Completed
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600 mb-1">147</div>
                <p className="text-sm text-gray-600">Exercises Done</p>
                <div className="mt-2">
                  <Progress value={92} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">92% accuracy rate</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    Growth
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600 mb-1">+23%</div>
                <p className="text-sm text-gray-600">This Month</p>
                <div className="mt-2">
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">Above average improvement</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Language Progress */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Language Proficiency Progress</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Chinese Progress */}
            <Card className="border-2 border-red-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇨🇳</span>
                    <CardTitle>Chinese</CardTitle>
                  </div>
                  <Badge className="bg-green-100 text-green-800">A2</Badge>
                </div>
                <CardDescription>Mandarin Chinese - Elementary</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Pronunciation</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Grammar</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Vocabulary</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Listening</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-600 mb-2">Next milestone: 450 characters learned</p>
                  <Progress value={78} className="h-1" />
                </div>
              </CardContent>
            </Card>

            {/* English Progress */}
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span>
                    <CardTitle>English</CardTitle>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">B2</Badge>
                </div>
                <CardDescription>American English - Upper Intermediate</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Pronunciation</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Grammar</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Vocabulary</span>
                    <span>88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Listening</span>
                    <span>82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-600 mb-2">Next milestone: C1 level assessment</p>
                  <Progress value={45} className="h-1" />
                </div>
              </CardContent>
            </Card>

            {/* German Progress */}
            <Card className="border-2 border-yellow-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇩🇪</span>
                    <CardTitle>German</CardTitle>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">A1</Badge>
                </div>
                <CardDescription>Standard German - Beginner</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Pronunciation</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Grammar</span>
                    <span>35%</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Vocabulary</span>
                    <span>50%</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Listening</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-600 mb-2">Next milestone: Master der/die/das articles</p>
                  <Progress value={25} className="h-1" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Recent Learning Activity</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  This Week's Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-sm">Chinese Grammar Practice</p>
                        <p className="text-xs text-gray-600">Today, 2:30 PM</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      +15 XP
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-sm">AI Chat - English</p>
                        <p className="text-xs text-gray-600">Yesterday, 7:45 PM</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      +25 XP
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-medium text-sm">German Pronunciation</p>
                        <p className="text-xs text-gray-600">2 days ago, 6:15 PM</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      +20 XP
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Trophy className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="font-medium text-sm">Vocabulary Challenge</p>
                        <p className="text-xs text-gray-600">3 days ago, 8:20 AM</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      +30 XP
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  Achievements & Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-yellow-700" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Week Warrior</p>
                      <p className="text-xs text-gray-600">Practiced 7 days in a row</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Conversation Starter</p>
                      <p className="text-xs text-gray-600">Completed 10 AI chat sessions</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                      <Target className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Pronunciation Pro</p>
                      <p className="text-xs text-gray-600">95% accuracy in pronunciation tests</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg opacity-60">
                    <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-purple-700" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Grammar Master</p>
                      <p className="text-xs text-gray-600">Complete 100 grammar exercises</p>
                      <Progress value={67} className="h-1 mt-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recommendations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Personalized Recommendations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700">Focus Area: Chinese Tones</CardTitle>
                <CardDescription>Your tone accuracy needs improvement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Based on your recent pronunciation exercises, we recommend focusing on tone discrimination and
                  production practice.
                </p>
                <Button className="w-full bg-transparent" variant="outline">
                  Start Tone Training
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">Strength: English Vocabulary</CardTitle>
                <CardDescription>You're excelling in this area</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Your vocabulary retention is excellent! Consider challenging yourself with advanced idiomatic
                  expressions and technical terminology.
                </p>
                <Button className="w-full bg-transparent" variant="outline">
                  Advanced Vocabulary
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-700">Next Goal: German Cases</CardTitle>
                <CardDescription>Ready for the next challenge</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  You've mastered basic German vocabulary. Time to tackle the four-case system with structured exercises
                  and real-world examples.
                </p>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn German Cases
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Keep Up the Great Work!</h3>
          <p className="text-gray-600 mb-8">
            Your consistent practice is paying off. Continue your learning journey with personalized exercises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/practice">Continue Practicing</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/ai-chat">Chat with AI Tutor</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
