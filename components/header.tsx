"use client"

import React from "react";

import { Button } from "./ui/button";
import Link from "next/link";
import { Globe } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { useAuth } from "@/app/login/auth-context";


export default function Header() {
    const { loggedIn, logout} = useAuth();

    return (
        <div className="flex items-center justify-between m-5 h-16 rounded-full border shadow-lg">
            <Link href="/" className="flex ml-6 gap-2">
                <Globe />
                <h1 className="text-blue-600 font-extrabold text-xl">911</h1>
            </Link>


            <div className="mr-3 gap-2 ">
                <Link href="/nutrition">
                    <Button variant="ghost" className="text-md">Nutrition</Button>
                </Link>
                {loggedIn ? (
                    <>
                    <p>Logged in!</p>
                    <Button onClick={logout}>Logout</Button>
                    </>
                ) : (
                    <Link href="/login">
                    <Button variant="ghost" className="text-md">Login</Button>
                    </Link>
                )}
                <ModeToggle />
            </div>
        </div>       
    );
}