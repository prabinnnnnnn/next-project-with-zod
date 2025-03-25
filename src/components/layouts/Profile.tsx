import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import DarkMode from "./DarkMode";
import { Button } from "../ui/button";
import { signOut } from "@/action/sing-Out";

// Update the User type to match next-auth's User type
interface User {
  image?: string | null; // image can be null or undefined
  id: string | undefined; // id should be string or undefined (to match next-auth type)
  email: string;
  name: string;
}

interface ProfileProps {
  session: User; // Expecting the user object as session prop
}

const Profile = ({ session }: ProfileProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Avatar className="h-8 w-8">
          {/* If image is null or undefined, use fallback */}
          <AvatarImage
            src={session.image ?? "/default-avatar.png"}
            alt={`@${session.name}`}
            className="object-cover"
          />
          <AvatarFallback>{session.name[0]}</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent className="rounded-l-sm roun w-full sm:w-1/4 p-3">
        <SheetHeader>
          <div className="flex flex-col gap-y-2">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={session.image ?? "/default-avatar.png"}
                alt={`@${session.name}`}
                className=" object-cover"
              />
              <AvatarFallback>{session.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xs font-semibold opacity-70">
                {session.name}
              </h1>
            </div>
          </div>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <DarkMode />
        </SheetHeader>
        <SheetFooter>
          <form action={signOut}>
            <Button variant={"outline"} type="submit">
              sign out
            </Button>
          </form>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Profile;
