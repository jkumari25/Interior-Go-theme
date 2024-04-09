import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Nav from "./Nav";
import Logo from "./Logo";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex- flex-col items-center gap-y-32">
            <Link href="/">
              <h2 className="text-4xl font-bold text-primary mb-12">
                INTERIOR GO
              </h2>
            </Link>
            {/* <Logo /> */}
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-1xl font-se"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
