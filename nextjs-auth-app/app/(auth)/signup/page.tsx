"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            router.push("/login?registered=true");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#1a1a1a] flex flex-col">
            {/* Header */}
            <div className="p-6">
                <span className="text-gray-400 text-sm">auth page</span>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center px-4 pb-12">
                <div className="w-full max-w-[900px] bg-[#2a2a2a] rounded-xl overflow-hidden flex shadow-2xl">
                    {/* Left Panel - Form */}
                    <div className="w-1/2 p-10">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-white mb-2">
                                Create account
                            </h1>
                            <p className="text-gray-400 text-sm">
                                Get started with Acme Inc
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {error && (
                                <Alert variant="destructive" className="bg-red-500/10 border-red-500/50 text-red-400">
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-[#3a3a3a] border-[#4a4a4a] text-white placeholder:text-gray-500 focus-visible:ring-gray-500"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-white">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-[#3a3a3a] border-[#4a4a4a] text-white placeholder:text-gray-500 focus-visible:ring-gray-500"
                                    required
                                />
                                <p className="text-xs text-gray-500">
                                    Must be at least 8 characters
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="bg-[#3a3a3a] border-[#4a4a4a] text-white placeholder:text-gray-500 focus-visible:ring-gray-500"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-white hover:bg-gray-100 text-black mt-2"
                            >
                                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {isLoading ? "Creating account..." : "Create account"}
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-400 text-sm">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="text-white hover:underline"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Right Panel - Image Placeholder */}
                    <div className="w-1/2 bg-[#383838] flex items-center justify-center">
                        <div className="w-12 h-12 border border-[#4a4a4a] rounded flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-[#5a5a5a]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="pb-6 text-center">
                <p className="text-gray-500 text-sm">
                    By clicking continue, you agree to our{" "}
                    <Link href="#" className="text-gray-400 underline hover:text-white">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-gray-400 underline hover:text-white">
                        Privacy Policy
                    </Link>
                </p>
            </div>
        </div>
    );
}
