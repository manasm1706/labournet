import React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const NavigationMenu = ({ className, children, ...props }) => (
  <NavigationMenuPrimitive.Root
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
);

const NavigationMenuList = ({ className, ...props }) => (
  <NavigationMenuPrimitive.List
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
);

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

const NavigationMenuTrigger = ({ className, children, ...props }) => (
  <NavigationMenuPrimitive.Trigger
    className={cn(navigationMenuTriggerStyle, "group", className)}
    {...props}
  >
    {children} <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
  </NavigationMenuPrimitive.Trigger>
);

const NavigationMenuContent = ({ className, ...props }) => (
  <NavigationMenuPrimitive.Content
    className={cn("left-0 top-0 w-full md:absolute md:w-auto", className)}
    {...props}
  />
);

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = ({ className, ...props }) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn("relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full rounded-md border bg-popover text-popover-foreground shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]", className)}
      {...props}
    />
  </div>
);

const NavigationMenuIndicator = ({ className, ...props }) => (
  <NavigationMenuPrimitive.Indicator
    className={cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden", className)}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
);

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
