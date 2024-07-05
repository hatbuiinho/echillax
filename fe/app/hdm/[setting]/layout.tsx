import style from "./style.module.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={`${style.container}`}>{children}</section>;
}
