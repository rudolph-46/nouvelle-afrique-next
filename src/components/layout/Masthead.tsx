import Link from "next/link";

const Masthead = () => {
  return (
    <div className="bg-background py-6">
      <div className="container">
        <div className="flex items-center justify-center">
          <Link href="/" className="masthead text-masthead tracking-wide">
            NOUVELLE AFRIQUE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
