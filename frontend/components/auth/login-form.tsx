"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Leaf, Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function LoginForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      router.push("/dashboard")
    }, 600)
  }

  return (
    <div className="flex min-h-screen">
      {/* Left panel - Branding */}
      <div className="hidden lg:flex lg:w-[480px] xl:w-[520px] flex-col justify-between bg-primary p-10 text-primary-foreground">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center size-10 rounded-xl bg-primary-foreground/15 backdrop-blur-sm">
            <Leaf className="size-5 text-primary-foreground" />
          </div>
          <span
            className="text-lg font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            NutriTrack
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <blockquote className="flex flex-col gap-4">
            <p className="text-xl leading-relaxed font-medium text-primary-foreground/90">
              {'"NutriTrack completely changed how I think about my health. The insights are incredibly accurate and actionable."'}
            </p>
            <footer className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-primary-foreground/15 flex items-center justify-center text-sm font-semibold">
                SR
              </div>
              <div>
                <p className="text-sm font-medium text-primary-foreground">
                  Sarah Rodriguez
                </p>
                <p className="text-xs text-primary-foreground/60">
                  Fitness Coach, San Francisco
                </p>
              </div>
            </footer>
          </blockquote>
        </div>

        <p className="text-xs text-primary-foreground/40">
          Trusted by 50,000+ health-conscious individuals worldwide
        </p>
      </div>

      {/* Right panel - Login form */}
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-[400px] flex flex-col gap-8">
          {/* Mobile logo */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <div className="flex items-center justify-center size-9 rounded-xl bg-primary">
              <Leaf className="size-5 text-primary-foreground" />
            </div>
            <span
              className="text-base font-semibold text-foreground tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              NutriTrack
            </span>
          </div>

          {/* Header */}
          <div className="flex flex-col gap-2">
            <h1
              className="text-2xl font-semibold text-foreground tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your account to continue tracking your health goals.
            </p>
          </div>

          {/* Social login buttons */}
          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              className="w-full h-10 text-sm font-medium"
              type="button"
            >
              <svg className="size-4 mr-2" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </Button>
            <Button
              variant="outline"
              className="w-full h-10 text-sm font-medium"
              type="button"
            >
              <svg className="size-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.18 0-.36-.02-.53-.06-.01-.18-.04-.56-.04-.95 0-1.13.45-2.26 1.2-3.08C13.69 1.13 14.97.5 16.07.34c.09.36.16.72.16 1.09h.14zm4.54 17.6c-.35.78-.54 1.12-.98 1.81-.62.96-1.5 2.16-2.58 2.17-1 .01-1.25-.64-2.6-.64-1.35.01-1.63.66-2.63.66-1.08-.01-1.91-1.09-2.53-2.05-1.73-2.67-1.91-5.81-.84-7.48.76-1.18 1.95-1.87 3.06-1.87 1.14 0 1.86.66 2.8.66.92 0 1.48-.66 2.8-.66.98 0 2.02.53 2.78 1.44-2.44 1.34-2.05 4.82.72 5.96z" />
              </svg>
              Continue with Apple
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              or
            </span>
            <Separator className="flex-1" />
          </div>

          {/* Email / Password form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="h-10"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <button
                  type="button"
                  className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="h-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-10 text-sm font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="size-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-muted-foreground">
            {"Don't have an account? "}
            <button
              type="button"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
