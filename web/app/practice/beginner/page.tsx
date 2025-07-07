"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Headphones, Mic, MessageCircle, Play, RotateCcw, Volume2, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function BeginnerPracticePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const [currentExercise, setCurrentExercise] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [exerciseComplete, setExerciseComplete] = useState(false)

  const exercises = {
    english: [
      {
        type: "pronunciation",
        title: "Basic Vowel Sounds",
        instruction: "Listen and repeat the following vowel sounds",
        content: "/i:/ - see, /ɪ/ - sit, /e/ - bed, /æ/ - cat",
        audio: "/placeholder-audio.mp3",
      },
      {
        type: "grammar",
        title: "Present Simple Structure",
        instruction: "Complete the sentence with the correct form",
        content: "She _____ (work) in a hospital.",
        answer: "works",
      },
    ],
    chinese: [
      {
        type: "pronunciation",
        title: "Four Tones Practice",
        instruction: 'Listen and repeat each tone for the syllable "ma"',
        content: "mā (妈) - mother, má (麻) - hemp, mǎ (马) - horse, mà (骂) - scold",
        audio: "/placeholder-audio.mp3",
      },
      {
        type: "grammar",
        title: "Basic Sentence Structure",
        instruction: "Arrange the words to form a correct sentence",
        content: "我 / 是 / 学生 (I / am / student)",
        answer: "我是学生",
      },
    ],
    german: [
      {
        type: "pronunciation",
        title: "Umlauts Practice",
        instruction: "Practice the German umlaut sounds",
        content: "ä - Bär, ö - schön, ü - für",
        audio: "/placeholder-audio.mp3",
      },
      {
        type: "grammar",
        title: "Articles (der, die, das)",
        instruction: "Choose the correct article",
        content: "_____ Haus (house)",
        answer: "das",
      },
    ],
  }

  const currentExerciseData = exercises[selectedLanguage as keyof typeof exercises][currentExercise]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/practice" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">A1-A2 Foundation</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Badge className="bg-green-100 text-green-800">Beginner Level</Badge>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">🇺🇸 English</SelectItem>
                <SelectItem value="chinese">🇨🇳 Chinese</SelectItem>
                <SelectItem value="german">🇩🇪 German</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Overview */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Foundation Building Exercises</h2>
            <div className="text-sm text-gray-600">
              Exercise {currentExercise + 1} of {exercises[selectedLanguage as keyof typeof exercises].length}
            </div>
          </div>
          <Progress
            value={((currentExercise + 1) / exercises[selectedLanguage as keyof typeof exercises].length) * 100}
            className="h-3"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Exercise Area */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-green-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {currentExerciseData?.type === "pronunciation" ? (
                        <Mic className="h-5 w-5 text-green-600" />
                      ) : (
                        <BookOpen className="h-5 w-5 text-green-600" />
                      )}
                      {currentExerciseData?.title}
                    </CardTitle>
                    <CardDescription>{currentExerciseData?.instruction}</CardDescription>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {currentExerciseData?.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Exercise Content */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-lg font-medium mb-4">{currentExerciseData?.content}</div>

                  {currentExerciseData?.type === "pronunciation" && (
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Play Audio
                      </Button>
                      <Button
                        variant={isRecording ? "destructive" : "default"}
                        size="sm"
                        onClick={() => setIsRecording(!isRecording)}
                      >
                        <Mic className="h-4 w-4 mr-2" />
                        {isRecording ? "Stop Recording" : "Record Yourself"}
                      </Button>
                      {isRecording && (
                        <div className="flex items-center gap-2 text-red-600">
                          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                          Recording...
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Interactive Elements */}
                {currentExerciseData?.type === "grammar" && (
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        der
                      </Button>
                      <Button variant="outline" size="sm">
                        die
                      </Button>
                      <Button variant="outline" size="sm">
                        das
                      </Button>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentExercise(Math.max(0, currentExercise - 1))}
                    disabled={currentExercise === 0}
                  >
                    Previous
                  </Button>

                  <div className="flex gap-2">
                    <Button variant="outline">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Retry
                    </Button>
                    <Button
                      onClick={() => {
                        setExerciseComplete(true)
                        setTimeout(() => {
                          setExerciseComplete(false)
                          setCurrentExercise(
                            Math.min(
                              exercises[selectedLanguage as keyof typeof exercises].length - 1,
                              currentExercise + 1,
                            ),
                          )
                        }, 1500)
                      }}
                    >
                      {exerciseComplete ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Complete!
                        </>
                      ) : (
                        "Check Answer"
                      )}
                    </Button>
                  </div>

                  <Button
                    onClick={() =>
                      setCurrentExercise(
                        Math.min(exercises[selectedLanguage as keyof typeof exercises].length - 1, currentExercise + 1),
                      )
                    }
                    disabled={currentExercise === exercises[selectedLanguage as keyof typeof exercises].length - 1}
                  >
                    Next
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tips Section */}
            <Card className="mt-6 border border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">💡 Learning Tips</CardTitle>
              </CardHeader>
              <CardContent>
                {currentExerciseData?.type === "pronunciation" ? (
                  <div className="space-y-2 text-sm">
                    <p>• Listen to the audio multiple times before attempting to speak</p>
                    <p>• Focus on mouth position and tongue placement</p>
                    <p>• Record yourself and compare with the native audio</p>
                    <p>• Practice little and often - 5 minutes daily is better than 1 hour weekly</p>
                  </div>
                ) : (
                  <div className="space-y-2 text-sm">
                    <p>• Read the sentence structure carefully</p>
                    <p>• Think about the grammatical rules you've learned</p>
                    <p>• Don't rush - accuracy is more important than speed</p>
                    <p>• Review incorrect answers to understand the pattern</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Practice Modules */}
            <Card>
              <CardHeader>
                <CardTitle>Practice Modules</CardTitle>
                <CardDescription>Choose your focus area</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Mic className="h-4 w-4 mr-2" />
                  Pronunciation Lab
                  <Badge variant="secondary" className="ml-auto">
                    0/50
                  </Badge>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Grammar Basics
                  <Badge variant="secondary" className="ml-auto">
                    2/40
                  </Badge>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Headphones className="h-4 w-4 mr-2" />
                  Listening Practice
                  <Badge variant="secondary" className="ml-auto">
                    0/30
                  </Badge>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  AI Chat Support
                  <Badge variant="secondary" className="ml-auto">
                    0/20
                  </Badge>
                </Button>
              </CardContent>
            </Card>

            {/* Daily Goal */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Goal</CardTitle>
                <CardDescription>Complete 5 exercises</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>2/5</span>
                  </div>
                  <Progress value={40} className="h-2" />
                  <p className="text-xs text-gray-600">3 more exercises to reach your daily goal!</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Volume2 className="h-4 w-4 mr-2" />
                  Slow Audio
                </Button>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Get Help
                </Button>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href="/ai-chat">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    AI Tutor Chat
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <span>First Exercise Complete!</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm opacity-50">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-gray-400" />
                    </div>
                    <span>5 Day Streak (4/5)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
