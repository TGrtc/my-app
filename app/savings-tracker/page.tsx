"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface SavingsTrackerProps {
  onLogout: () => void
}

export default function SavingsTracker({ onLogout }: SavingsTrackerProps) {
  const [goal, setGoal] = useState<number>(0)
  const [currentSavings, setCurrentSavings] = useState<number>(0)

  const progress = goal > 0 ? (currentSavings / goal) * 100 : 0
  const remainingAmount = Math.max(goal - currentSavings, 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // You can add additional logic here if needed
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold text-center text-blue-600">My Savings Tracker</CardTitle>
          <Button onClick={onLogout} variant="outline" className="text-red-500 hover:text-red-600">
            Logout
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="goal" className="text-lg font-medium text-gray-700">
                {"What's your savings goal?"}
              </Label>
              <Input
                id="goal"
                type="number"
                placeholder="Enter your goal amount"
                value={goal || ""}
                onChange={(e) => setGoal(Number(e.target.value))}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="savings" className="text-lg font-medium text-gray-700">
                How much have you saved so far?
              </Label>
              <Input
                id="savings"
                type="number"
                placeholder="Enter your current savings"
                value={currentSavings || ""}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
              Update My Savings
            </Button>
          </form>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Your Progress</h3>
            <div className="bg-gray-200 rounded-full h-6 overflow-hidden">
              <div
                className="bg-yellow-400 h-full rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-center mt-2 text-lg font-medium text-gray-700">
              {progress.toFixed(0)}% saved!
            </p>
          </div>

          <div className="mt-4 text-center">
            <p className="text-lg font-medium text-gray-700">
              {remainingAmount > 0
                ? `Keep going! You need $${remainingAmount} more to reach your goal.`
                : "Congratulations! You&apos;ve reached your savings goal! 🎉"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

