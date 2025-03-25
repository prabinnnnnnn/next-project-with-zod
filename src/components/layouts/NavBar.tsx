"use server";

import { signIn } from "@/action/sign-In";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import { auth } from "@/auth";
import NavigateNavBar from "./NavigateNavBar";
import Profile from "./Profile";
import { User } from "next-auth";

// Extend the base User type from next-auth
interface ExtendedUser extends User {
  id: string;
  email: string;
  name: string;
  image?: string | null;
}

// Create a type for the session user that's passed to Profile
type ProfileUser = Pick<ExtendedUser, "id" | "email" | "name" | "image">;

const NavBar = async () => {
  const session = await auth();

  return (
    <nav className="w-full h-20 border-b border-dashed">
      <div className="h-full max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Left section */}
        <NavigateNavBar />

        {/* Right section */}
        <div className="flex items-center gap-x-5">
          <div className="w-64">
            <Input
              type="search"
              placeholder="Search post"
              className=" placeholder:font-semibold placeholder:text-gray-500/90 outline-2 text-gray-500/90 font-semibold"
            />
          </div>

          <div className="flex items-center gap-x-2">
            {session?.user ? (
              <Profile session={session.user as ProfileUser} />
            ) : (
              <form action={signIn}>
                <Button type="submit" className="text-xs">
                  Sign In
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
