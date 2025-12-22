type CTAButtonProps = {
  text: string;
  link: string;
};

export default function CTAButton({ text, link }: CTAButtonProps) {
  return (
    <a
      href={link}
      className="mt-10 inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition"
    >
      {text}
    </a>
  );
}
