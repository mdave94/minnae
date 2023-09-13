import "../../assets/css/footer.css";

type MainpageTextProps = {
  children: string;
};

export default function MainpageTextComponent({ children }: MainpageTextProps) {
  return (
    <>
      <p className="mainpage-text">{children}</p>
    </>
  );
}
