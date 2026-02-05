import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menus: Record<string, { label: string; href?: string }[]> = {
    Women: [
      { label: "Shop All", href: "/women/shop-all" },
      { label: "Outwear", href: "/women/outwear" },
      { label: "Tops", href: "/women/tops" },
      { label: "Bottoms", href: "/women/bottoms" },
      { label: "Accessories", href: "/women/accessories" },
    ],
    Men: [
      { label: "Shop All", href: "/men/shop-all" },
      { label: "Jackets", href: "/men/jackets" },
      { label: "Shirts", href: "/men/shirts" },
      { label: "Pants", href: "/men/pants" },
      { label: "Accessories", href: "/men/accessories" },
    ],
    Kids: [
      { label: "Shop All", href: "/kids/shop-all" },
      { label: "Jackets", href: "/kids/jackets" },
      { label: "Shirts", href: "/kids/shirts" },
      { label: "Pants", href: "/kids/pants" },
      { label: "Accessories", href: "/kids/accessories" },
    ],
    Company: [
      { label: "About Us", href: "/pages/about-us" },
      { label: "Journal", href: "/pages/journal" },
      { label: "FAQ", href: "/pages/faq" },
      { label: "Contact us", href: "/pages/contact-us" },
    ],
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* Glass background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex items-center justify-between px-10 py-6  text-black font-medium"
      >
        {/* Logo */}
        <h1 className="text-2xl font-semibold font-poppins tracking-wide">
          Sky Plus
        </h1>

        {/* Menu */}
        <ul className="flex gap-8 text-1xl font-poppins">
          {["Women", "Men", "Kids", "Company"].map((menu) => (
            <li
              key={menu}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="hover:opacity-80 transition">{menu}</button>

              <AnimatePresence>
                {openMenu === menu && (
                  <DropdownMenu
                    title={menu}
                    items={menus[menu]}
                    keepOpenOnSelect
                    onMouseEnter={() => setOpenMenu(menu)}
                    onMouseLeave={() => setOpenMenu(null)}
                  />
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex gap-6 text-1xl font-poppins">
          <button className="hover:opacity-80">Search</button>
          <button className="hover:opacity-80">Cart (0)</button>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
