import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, BookOpen, Target, Lightbulb, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function TheoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">LinguaFlow</h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/theory" className="text-blue-600 font-medium">
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
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Scientific Foundation</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">The Science Behind Effective Language Learning</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our methodology is built on decades of cognitive science research, neurolinguistics, and proven pedagogical
            approaches that optimize how your brain acquires languages.
          </p>
        </div>

        {/* Core Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Core Learning Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <Brain className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Cognitive Load Theory</CardTitle>
                <CardDescription>Optimize working memory for maximum retention</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  We structure lessons to prevent cognitive overload, introducing new concepts in digestible chunks
                  while building on existing knowledge foundations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader>
                <Target className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Spaced Repetition</CardTitle>
                <CardDescription>Time intervals for optimal memory consolidation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Based on Ebbinghaus's forgetting curve, we schedule reviews at scientifically proven intervals to move
                  information from short-term to long-term memory.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Comprehensible Input</CardTitle>
                <CardDescription>Krashen's i+1 hypothesis in practice</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Content is always slightly above your current level (i+1), ensuring challenge without frustration,
                  promoting natural language acquisition.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Level-Specific Approaches */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Level-Specific Methodologies</h2>

          {/* A1-A2 Section */}
          <Card className="mb-8 border-2 border-green-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-green-700">A1-A2: Foundation Building</CardTitle>
                  <CardDescription>Establishing core language architecture</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Beginner
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Phonetic Muscle Memory Development</h4>
                <p className="text-gray-600 mb-4">
                  For beginners, especially those who "can barely speak ABC," we focus on building pronunciation muscle
                  memory through repetitive practice of medium-length sentences. This creates neural pathways for
                  accurate sound production.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Key Techniques:</h5>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Shadow reading with native audio</li>
                    <li>• Minimal pair discrimination exercises</li>
                    <li>• Articulatory gesture training</li>
                    <li>• Recording and self-assessment tools</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Balanced Structural Learning</h4>
                <p className="text-gray-600 mb-4">
                  We ensure well-rounded development across all language components simultaneously, preventing gaps that
                  could hinder future progress.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Grammar & Structure</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Basic sentence patterns</li>
                      <li>• Case systems (German)</li>
                      <li>• Tense foundations</li>
                      <li>• Word order rules</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Vocabulary & Usage</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• High-frequency words</li>
                      <li>• Contextual meaning</li>
                      <li>• Collocations</li>
                      <li>• Sample sentences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* B1-B2 Section */}
          <Card className="mb-8 border-2 border-blue-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-blue-700">B1-B2: Contextual Embedding</CardTitle>
                  <CardDescription>Integrating language into real-world scenarios</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Intermediate
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">The "Embed" Philosophy</h4>
                <p className="text-gray-600 mb-4">
                  At intermediate levels, the key is embedding language learning into various life scenarios and
                  contexts, making it practical and immediately applicable.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Embedding Strategies:</h5>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Professional scenario simulations</li>
                    <li>• Cultural context integration</li>
                    <li>• News and media comprehension</li>
                    <li>• Social interaction practice</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Enhanced Listening & Comprehension</h4>
                <p className="text-gray-600 mb-4">
                  Focus shifts to processing longer contexts and faster speech, building real-world communication
                  competence.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Listening Skills</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Speed adaptation exercises</li>
                      <li>• Context prediction</li>
                      <li>• Accent variation exposure</li>
                      <li>• Multi-speaker scenarios</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Vocabulary Expansion</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Domain-specific terminology</li>
                      <li>• Idiomatic expressions</li>
                      <li>• Register awareness</li>
                      <li>• Semantic networks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* C1-C2 Section */}
          <Card className="mb-8 border-2 border-purple-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-purple-700">C1-C2: Cognitive Mastery</CardTitle>
                  <CardDescription>Advanced brain training and interpretation skills</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  Advanced
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Brain Stretching Exercises</h4>
                <p className="text-gray-600 mb-4">
                  Advanced learners need cognitive challenges that expand context span and develop near-native
                  processing abilities through intensive mental exercises.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Advanced Techniques:</h5>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Simultaneous interpretation practice</li>
                    <li>• Consecutive interpretation with note-taking</li>
                    <li>• Memory palace techniques for vocabulary</li>
                    <li>• Advanced spaced repetition algorithms</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Professional Communication Skills</h4>
                <p className="text-gray-600 mb-4">
                  Focus on high-level communication skills needed for professional and academic contexts, including
                  debate, presentation, and analytical thinking.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Debate & Discussion</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• AI-powered debate partners</li>
                      <li>• Argument structure training</li>
                      <li>• Critical thinking in L2</li>
                      <li>• Persuasion techniques</li>
                    </ul>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Presentation Skills</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Online presentation practice</li>
                      <li>• Visual storytelling</li>
                      <li>• Audience engagement</li>
                      <li>• Technical communication</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* AI Integration Theory */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">AI-Enhanced Learning Theory</h2>
          <Card className="border-2 border-indigo-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-indigo-600" />
                <div>
                  <CardTitle className="text-2xl">Adaptive AI Tutoring</CardTitle>
                  <CardDescription>Personalized learning through artificial intelligence</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Progressive Language Support</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-green-700">A1-A2 Level</h5>
                    <p className="text-sm text-gray-600">
                      AI chat with native language input support, allowing learners to express complex thoughts while
                      practicing target language output.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-700">B1-B2 Level</h5>
                    <p className="text-sm text-gray-600">
                      Transition to target language-only AI interactions, forcing immersive practice while maintaining
                      comprehension support.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-purple-700">C1-C2 Level</h5>
                    <p className="text-sm text-gray-600">
                      Advanced AI debates, presentations, and interpretation exercises that challenge cognitive
                      processing at native-like levels.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Neuroscience-Based Feedback</h4>
                <p className="text-gray-600 mb-4">
                  Our AI provides feedback based on error analysis patterns, learning curve optimization, and individual
                  cognitive preferences identified through interaction data.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Research Foundation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Research Foundation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Key Research Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Second Language Acquisition (SLA):</strong> Krashen's Natural Approach, Input Hypothesis
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Cognitive Psychology:</strong> Working Memory Theory, Dual Coding Theory
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Neurolinguistics:</strong> Brain plasticity, Critical Period Hypothesis
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Educational Technology:</strong> Adaptive learning systems, Gamification theory
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Practical Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Pronunciation Training:</strong> Motor learning theory applied to articulatory practice
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Memory Techniques:</strong> Method of loci, elaborative rehearsal strategies
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Error Correction:</strong> Corrective feedback timing and cognitive load management
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Motivation Theory:</strong> Self-determination theory, flow state optimization
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply These Principles?</h3>
          <p className="text-gray-600 mb-8">
            Experience how theory translates into practice with our interactive learning modules.
          </p>
          <Button size="lg" asChild>
            <Link href="/practice">Start Practicing Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
