import { motion, cubicBezier } from "framer-motion";

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.28,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.28,
  },
};

interface MenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface DropdownMenuProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  items?: MenuItem[];
  /**
   * When true (default), selecting a menu item will NOT automatically close the dropdown.
   * If you want clicks to close the dropdown, pass false and handle close via onItemClick.
   */
  keepOpenOnSelect?: boolean;
  onItemClick?: (item: MenuItem) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const DropdownMenu = ({
  imageSrc = "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  items = [
    { label: "Outwear", href: "#" },
    { label: "Tops", href: "#" },
    { label: "Bottoms", href: "#" },
    { label: "Accessories", href: "#" },
  ],
  keepOpenOnSelect = true,
  onItemClick,
  onMouseEnter,
  onMouseLeave,
}: DropdownMenuProps) => {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute left-0 top-full transform translate-y-2 w-64 rounded-2xl bg-white p-3 text-black shadow-2xl"
    >
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={() => keepOpenOnSelect}
      >
        <img src={imageSrc} className="h-full w-28 rounded-xl object-cover" />
        {/* <div>
          <p className="font-semibold">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div> */}

        <ul className="mt-7 space-y-5 text-sm mx-2">
          {items.map((item) => (
            <li key={item.label} className="rounded-lg">
              {item.href ? (
                <a
                  href={item.href}
                  onClick={() => {
                    onItemClick?.(item);
                  }}
                  className="block w-full cursor-pointer rounded-lg px-2 py-1 hover:bg-gray-100"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onItemClick?.(item)}
                  className="w-full text-left rounded-lg px-2 py-1 hover:bg-gray-100"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default DropdownMenu;
