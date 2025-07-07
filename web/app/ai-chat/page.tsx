"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Send, Mic, Volume2, Settings, Brain } from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  language?: string
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm your AI language tutor. I can help you practice Chinese, English, or German at any level. What would you like to work on today?",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const [selectedLevel, setSelectedLevel] = useState("a1-a2")
  const [nativeSupport, setNativeSupport] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getAIResponse(inputMessage, selectedLanguage, selectedLevel),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, 1000)
  }

  const getAIResponse = (message: string, language: string, level: string) => {
    const responses = {
      english: {
        "a1-a2":
          "Great! Let me help you with basic English. I notice you want to practice. Let's start with simple sentences. Can you tell me about your day using simple past tense?",
        "b1-b2":
          "Excellent! For intermediate English, let's work on more complex structures. Try describing a recent experience using both past perfect and past simple tenses.",
        "c1-c2":
          "Perfect! At advanced level, let's engage in sophisticated discourse. What's your perspective on the impact of artificial intelligence on modern education systems?",
      },
      chinese: {
        "a1-a2":
          "很好！让我们从基础中文开始。我们可以练习声调和基本句型。你能用中文介绍一下自己吗？(Hěn hǎo! Let's start with basic Chinese. We can practice tones and basic sentence patterns. Can you introduce yourself in Chinese?)",
        "b1-b2": "太棒了！中级水平我们可以练习更复杂的表达。请用中文描述一下你的家乡，包括地理位置、气候和文化特色。",
        "c1-c2": "非常好！高级水平我们来讨论深层话题。你对中国传统文化在现代社会中的传承与发展有什么看法？",
      },
      german: {
        "a1-a2":
          "Wunderbar! Lass uns mit den Grundlagen beginnen. Wir können die vier Fälle üben. Kannst du einen einfachen Satz mit Akkusativ bilden?",
        "b1-b2":
          "Ausgezeichnet! Für das mittlere Niveau arbeiten wir mit komplexeren Strukturen. Beschreibe bitte deine Zukunftspläne mit verschiedenen Zeitformen.",
        "c1-c2":
          "Hervorragend! Auf fortgeschrittenem Niveau diskutieren wir anspruchsvolle Themen. Was denkst du über die Rolle der deutschen Sprache in der europäischen Integration?",
      },
    }

    return (
      responses[language as keyof typeof responses]?.[level as keyof (typeof responses)["english"]] ||
      "I understand you want to practice. Let me help you with that!"
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <MessageCircle className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">LinguaFlow</h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/theory" className="text-gray-600 hover:text-blue-600 transition-colors">
              Theory
            </Link>
            <Link href="/practice" className="text-gray-600 hover:text-blue-600 transition-colors">
              Practice
            </Link>
            <Link href="/ai-chat" className="text-blue-600 font-medium">
              AI Chat
            </Link>
            <Link href="/progress" className="text-gray-600 hover:text-blue-600 transition-colors">
              Progress
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Settings Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Chat Settings
                </CardTitle>
                <CardDescription>Customize your AI tutor experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Target Language</label>
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">🇺🇸 English</SelectItem>
                      <SelectItem value="chinese">🇨🇳 Chinese</SelectItem>
                      <SelectItem value="german">🇩🇪 German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Your Level</label>
                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a1-a2">A1-A2 Beginner</SelectItem>
                      <SelectItem value="b1-b2">B1-B2 Intermediate</SelectItem>
                      <SelectItem value="c1-c2">C1-C2 Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Native Language Support</label>
                  <Button
                    variant={nativeSupport ? "default" : "outline"}
                    size="sm"
                    onClick={() => setNativeSupport(!nativeSupport)}
                  >
                    {nativeSupport ? "ON" : "OFF"}
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Current Session</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Messages:</span>
                      <Badge variant="secondary">{messages.length}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Mode:</span>
                      <Badge variant={nativeSupport ? "default" : "outline"}>
                        {nativeSupport ? "Assisted" : "Immersive"}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Quick Actions</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Mic className="h-4 w-4 mr-2" />
                      Voice Practice
                    </Button>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Brain className="h-4 w-4 mr-2" />
                      Grammar Check
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-blue-600" />
                      AI Language Tutor
                    </CardTitle>
                    <CardDescription>
                      Practicing {selectedLanguage} at {selectedLevel.toUpperCase()} level
                      {nativeSupport && " with native language support"}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      Online
                    </Badge>
                    <Badge variant="outline">
                      {selectedLanguage === "english" ? "🇺🇸" : selectedLanguage === "chinese" ? "🇨🇳" : "🇩🇪"}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              {/* Messages Area */}
              <CardContent className="flex-1 overflow-y-auto space-y-4 p-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.role === "user" ? "text-blue-100" : "text-gray-500"}`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>

              {/* Input Area */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Input
                    placeholder={`Type your message in ${selectedLanguage}...`}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!inputMessage.trim() || isLoading}>
                    <Send className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>

                {nativeSupport && selectedLevel === "a1-a2" && (
                  <p className="text-xs text-gray-500 mt-2">
                    💡 Tip: You can use your native language for complex explanations. The AI will help translate and
                    teach.
                  </p>
                )}
              </div>
            </Card>

            {/* Practice Suggestions */}
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <Card className="border border-green-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-green-700">Pronunciation Focus</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 mb-2">Practice difficult sounds and intonation patterns</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Start Session
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-blue-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-blue-700">Grammar Drill</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 mb-2">Focus on specific grammar points with examples</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Start Session
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-purple-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-purple-700">Conversation Practice</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 mb-2">Role-play scenarios and free conversation</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Start Session
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
