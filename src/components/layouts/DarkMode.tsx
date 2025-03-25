"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <Button
        className="p-3 border-none bg-white shadow-none"
        variant={"outline"}
        onClick={() => setIsDark((pre) => (pre = !pre))}
      >
        {isDark ? <Sun></Sun> : <Moon />}
      </Button>
    </div>
  );
}

export default DarkMode;
