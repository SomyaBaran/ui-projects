import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import SignOutButton from "./SignOutButton";
import {
    LayoutDashboard,
    Activity,
    BarChart2,
    Folder,
    Users,
    Library,
    FileText,
    Bot,
    Settings,
    HelpCircle,
    Search,
    MoreHorizontal,
    Plus,
    ChevronRight,
    Building2
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    const navItems = [
        { icon: LayoutDashboard, label: "Dashboard", active: false },
        { icon: Activity, label: "Lifecycle", active: false },
        { icon: BarChart2, label: "Analytics", active: false },
        { icon: Folder, label: "Projects", active: false },
        { icon: Users, label: "Team", active: true },
    ];

    const documentItems = [
        { icon: Library, label: "Data Library" },
        { icon: FileText, label: "Reports" },
        { icon: Bot, label: "Word Assistant" },
    ];

    const bottomItems = [
        { icon: Settings, label: "Settings" },
        { icon: HelpCircle, label: "Get Help" },
        { icon: Search, label: "Search" },
    ];

    return (
        <div className="min-h-screen bg-[#1a1a1a] flex flex-col">
            {/* Top Header */}
            <div className="px-6 py-3 border-b border-[#2a2a2a]">
                <span className="text-gray-400 text-sm font-medium tracking-wide">MARKET SIZE</span>
            </div>

            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-56 bg-[#1e1e1e] border-r border-[#2a2a2a] flex flex-col">
                    {/* Company Header */}
                    <div className="p-4 pt-5">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center">
                                {/* Using Lucide icon or simple generic shape to match original */}
                                <Building2 className="w-3 h-3 text-gray-400" />
                            </div>
                            <span className="text-white font-medium text-sm">Acme Inc.</span>
                        </div>

                        {/* Quick Create */}
                        <div className="flex items-center gap-2 mb-6">
                            <Button variant="ghost" className="flex-1 justify-start gap-2 px-3 py-1.5 bg-[#2a2a2a] hover:bg-[#333] text-gray-300 h-auto rounded-md text-sm font-normal">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                Quick Create
                            </Button>
                            <Button variant="ghost" size="icon" className="p-1.5 bg-[#2a2a2a] hover:bg-[#333] h-8 w-8 rounded-md text-gray-400">
                                <Plus className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-2">
                        <ul className="space-y-0.5">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Button
                                        variant="ghost"
                                        className={`w-full justify-start gap-3 px-3 py-2 h-auto text-sm font-normal ${item.active
                                            ? "text-blue-400 hover:text-blue-400 hover:bg-[#2a2a2a]"
                                            : "text-gray-400 hover:text-white hover:bg-[#2a2a2a]"
                                            }`}
                                        asChild
                                    >
                                        <a href="#">
                                            <item.icon className="w-4 h-4" />
                                            {item.label}
                                        </a>
                                    </Button>
                                </li>
                            ))}
                        </ul>

                        {/* Documents Section */}
                        <div className="mt-6">
                            <span className="px-3 text-xs text-gray-500 font-medium">Documents</span>
                            <ul className="mt-2 space-y-0.5">
                                {documentItems.map((item) => (
                                    <li key={item.label}>
                                        <Button variant="ghost" className="w-full justify-start gap-3 px-3 py-2 h-auto text-sm font-normal text-gray-400 hover:text-white hover:bg-[#2a2a2a]" asChild>
                                            <a href="#">
                                                <item.icon className="w-4 h-4" />
                                                {item.label}
                                            </a>
                                        </Button>
                                    </li>
                                ))}
                                <li>
                                    <Button variant="ghost" className="w-full justify-start gap-3 px-3 py-2 h-auto text-sm font-normal text-gray-500 hover:text-white hover:bg-[#2a2a2a]" asChild>
                                        <a href="#">
                                            <MoreHorizontal className="w-4 h-4 text-gray-600" />
                                            More
                                        </a>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Bottom Section */}
                    <div className="px-2 pb-4 mt-auto">
                        <ul className="space-y-0.5">
                            {bottomItems.map((item) => (
                                <li key={item.label}>
                                    <Button variant="ghost" className="w-full justify-start gap-3 px-3 py-2 h-auto text-sm font-normal text-gray-400 hover:text-white hover:bg-[#2a2a2a]" asChild>
                                        <a href="#">
                                            <item.icon className="w-4 h-4" />
                                            {item.label}
                                        </a>
                                    </Button>
                                </li>
                            ))}
                        </ul>

                        {/* User Profile */}
                        <div className="mt-4 px-3 py-2 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-medium">
                                {session.user?.email?.charAt(0).toUpperCase() || "U"}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm text-white truncate font-medium">shadcn</p>
                                <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                            </div>
                            <SignOutButton />
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6">
                    {/* Breadcrumb */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-400">Building Your Application</span>
                            <span className="text-gray-600">&gt;</span>
                            <span className="text-white">Data Fetching</span>
                        </div>
                        <button className="px-4 py-1.5 bg-[#2a2a2a] rounded-md text-sm text-gray-400 hover:text-white hover:bg-[#333] transition-colors">

                        </button>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-3 gap-4">
                        {[...Array(6)].map((_, index) => (
                            <Card
                                key={index}
                                className="aspect-[4/3] bg-[#232323] rounded-lg border-dashed border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors flex items-center justify-center p-0"
                            >
                                <span className="text-muted-foreground/20"></span>
                            </Card>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
