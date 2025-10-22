"use client"

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, XIcon, ChevronDownIcon } from "lucide-react"

// Menu data structure
const menuItems = [
  {
    title: "Home",
    href: "/",
    type: "link"
  },
 
  {
    title: "About",
    href: "/about-us",
    type: "link"
  },
 
  {
    title: "Supply Chain Advisory",
    type: "dropdown",
    children: [
      { title: "Supply Chain Advisory", href: "/advisory/supplyChain" },
      { title: "Predictive Analytics", href: "/advisory/predictiveAnalytics" },
      { title: "Prescriptive Analytics", href: "/advisory/prescriptiveAnalytics" },
      { title: "Descriptive Analytics", href: "/advisory/descriptiveAnalytics" },
    ]
  },
  {
    title: "Supply Chain Execution",
    type: "dropdown",
    children: [
      { title: "Supply Chain Execution", href: "/execution/supply-chain-execution" },
      { 
        title: "Contract Logistics", 
        href: "/execution/contract-logistics",
        submenu: [
          { title: "Warehouse Management", href: "/execution/contract-logistics/warehouse-management" },
          { title: "Distribution Management", href: "/execution/contract-logistics/distribution-management" },
          { title: "In-Plant Logistics", href: "/execution/contract-logistics/inPlantLogistics" },
          { title: "Fulfillment Management", href: "/execution/contract-logistics/fulfillment-management" },
          { title: "Sort Center", href: "/execution/contract-logistics/sort-center" },
        ]
      },
      { 
        title: "Express Logistics", 
        href: "/execution/express-logistics",
        
      },
      { 
        title: "Last Mile Delivery", 
        href: "/execution/last-mile",
      
      },
      { 
        title: "After Market Management", 
        href: "/execution/after-market",
        submenu: [
          { title: "Service parts Logistics (SPL)", href: "/execution/after-market/spl" },
          { title: "Reverse Logistics", href: "/execution/after-market/reverse-logistics" },
        ]
      },
    ]
  },
  {
    title: "Control Tower",
    href: "/control-tower",
    type: "link"
  },
  {
    title: "Industries",
    href: "/industries",
    type: "link",
    
  },
  {
    title: "Contact",
    href: "/contact",
    type: "link"
  }
]

// Desktop Dropdown Component
function DesktopDropdown({ item, isOpen, onToggle }) {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
      >
        {item.title}
        <ChevronDownIcon 
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      
      {/* Dropdown Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 mt-1 bg-background border border-border rounded-md shadow-lg z-50 transition-all duration-200 ease-in-out",
          isOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-2"
        )}
      >
        <div className="py-2 min-w-[200px]">
          {item.children.map((child, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredItem(child.submenu ? index : null)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={child.href}
                className="flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-150"
              >
                {child.title}
                {child.submenu && (
                  <ChevronDownIcon className="h-3 w-3 ml-2" />
                )}
              </Link>
              
              {/* Submenu */}
              {child.submenu && (
                <div 
                  className={cn(
                    "absolute left-full top-0 ml-1 w-48 bg-background border border-border rounded-md shadow-lg transition-all duration-200 ease-in-out",
                    hoveredItem === index 
                      ? "opacity-100 visible translate-x-0" 
                      : "opacity-0 invisible -translate-x-2"
                  )}
                >
                  <div className="py-2">
                    {child.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-150"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Mobile Menu Component
function MobileMenu() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openSubmenu, setOpenSubmenu] = useState(null)

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index)
    setOpenSubmenu(null) // Close any open submenus
  }

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Mobile Menu Header */}
      <div className="flex items-center justify-between p-5 border-b border-border">
        <div className="flex items-center space-x-2">
          <img 
            src="/logo.svg" 
            alt="Ramchandra Transport Logo" 
            className="h-24 w-24" 
          />
          {/* <span className="font-bold text-lg">Ramchandra Transport</span> */}
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-6 space-y-1">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.type === "link" ? (
                <Link 
                  href={item.href} 
                  className="flex items-center px-3 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-200"
                >
                  {item.title}
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-200"
                  >
                    {item.title}
                    <ChevronDownIcon 
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        openDropdown === index && "rotate-180"
                      )} 
                    />
                  </button>
                  
                  <div 
                    className={cn(
                      "overflow-hidden transition-all duration-200 ease-in-out",
                      openDropdown === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <div key={childIndex}>
                          {child.submenu ? (
                            <div>
                              <button
                                onClick={() => toggleSubmenu(childIndex)}
                                className="flex items-center justify-between w-full px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-150"
                              >
                                {child.title}
                                <ChevronDownIcon 
                                  className={cn(
                                    "h-3 w-3 transition-transform duration-200",
                                    openSubmenu === childIndex && "rotate-180"
                                  )} 
                                />
                              </button>
                              
                              <div 
                                className={cn(
                                  "overflow-hidden transition-all duration-200 ease-in-out",
                                  openSubmenu === childIndex ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                                )}
                              >
                                <div className="ml-4 mt-1 space-y-1">
                                  {child.submenu.map((subItem, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      href={subItem.href}
                                      className="block px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-150"
                                    >
                                      {subItem.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={child.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-150"
                            >
                              {child.title}
                </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Menu Footer */}
      <div className="p-4 border-t border-border">
        <Button asChild className="w-full">
          <Link href="/request-quote">Request a Quote</Link>
        </Button>
      </div>
    </div>
  )
}

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto flex h-20 py-5 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 p-5">
          <img 
            src="/logo.svg" 
            alt="Ramchandra Transport Logo" 
            className="h-40 w-40 " 
          />
          {/* <span className="font-bold text-lg sm:text-xl">Ramchandra Transport</span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.type === "link" ? (
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.title}
                </Link>
              ) : (
                <DesktopDropdown
                  item={item}
                  isOpen={openDropdown === index}
                  onToggle={() => toggleDropdown(index)}
                />
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button asChild size="sm">
            <Link href="/request-quote">Request a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[320px] sm:w-[380px] p-0">
            <MobileMenu />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
