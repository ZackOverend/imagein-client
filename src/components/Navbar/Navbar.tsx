import HighlightedLogo from "@/components/Navbar/HighlightedLogo";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="flex w-full h-12 bg-[var(--background)] drop-shadow-xl items-center p-10 z-20 fixed">
        <HighlightedLogo />
      </div>
    </>
  );
};

export default Navbar;
